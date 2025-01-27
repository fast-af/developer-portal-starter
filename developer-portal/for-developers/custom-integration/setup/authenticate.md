---
title: "Fast Custom Integration Docs: Authenticate"
description: Getting Started with Fast on Custom Integration! Quickstart
keywords: Fast Custom Integration Quickstart

enableToc: true
redirectFrom:
  - /developer-portal/fast-api-reference-authentication/
  - /developer-portal/for-developers/custom-integration/resources/authentication/
---

# Setup Step 1: All Things Authentication

## Onboarding Overview of Terms

Fast's Custom Integration is intended for merchants who have custom-built their own eCommerce site and want to use Fast Checkout to eliminate the friction during the checkout experience for their users and reduce cart abandonment.

Custom Integrations with Fast require some development work to properly ingest calls from Fast for new orders or updates, as well as occasional calls to Fast for things like refunds. Authentication will be a part of everything! Technical integration steps and key term definitions can be found below.

### Merchant API URL

**Fast will ask you to provide your "Merchant API URL"**. This URL should look something like:
`https://api.your-store.com`.

This is the base URL Fast will use to send API requests for the APIs that need to be implemented as part of the integration.

> For example, if you have used `https://api.your-store.com` as your Merchant URL then when we call the defined `fast/v1/create` API we will send the request as `https://api.your-store.com/fast/v1/create`

### API Access Token

**Fast will generate an API Access Token during Seller onboarding**. You can view this token in the ["Install" tab of the Fast Seller Dashboard](https://fast.co/business/dash/install) only once, so be sure to copy and store it in a safe place where you normally store your credentials (e.g. AWS Secret Store). This API Token will be used to authenticate your calls to Fast.

### Fast App ID

**Fast will assign your app a Fast App ID (`app_id`) during Seller onboarding**. The Fast App ID is a unique identifier included in every call you make to Fast (as shown in the [Headers](#headers) section below).

<embed src="/reusables/for-developers/_fast_app_id.md" />

### App Secret

**This secret is only required for programmatically revoking or rotating your API Access Token via our APIs**. We also provide the option to perform those actions in the Fast UI. If you plan to revoke or rotate API Tokens using the APIs, contact Customer Success at [seller-support@fast.co](mailto:seller-support@fast.co) to be provided with the App Secret to perform these actions programmatically.

## Authenticating Calls to Fast

When sending an API request to Fast, you will need to include your API Access Token and your Fast App ID in the Headers of your call.

```html
X-Fast-App: <app_id> X-Fast-App-Auth: <access_token></access_token></app_id>
```

For each API call you make to Fast, we will ask that you include the `app_id` in the headers as `X-Fast-App`. We will ensure that the `access_token` used in the headers (as `X-Fast-App-Auth`) matches the expected `access_token` for that app.

## Revoking Access Tokens

The initial access token provided during onboarding does not have an expiration, and is valid to use unless it is explicitly revoked. We provide two different methods for updating your access token.

### Rotating Your Token

Rotating your token sets a **48-hour expiry for your current token**, and generates a new token. During the expiry window both the old and new API Tokens will be considered valid by Fast. Once the expiry window is over, the old API Token will cease to be valid and Fast will reject all calls using that token as Unauthorized.

You can rotate your token via the ["Install" tab in the Fast Seller Dashboard](https://fast.co/business/dash/install), or programmatically via the `/v1/apps/<app_id>/token/rotate` API.

```json
POST /v1/apps/<app_id>/token/rotate

Request
{
  "app_secret": "daQT6XwpETlaZ26pcpYjXO5omzB8NgOYqkhfrITdKI4"
}

Response
{
    "new_access_token": "81ea246c6811c669fcdcbdffb3601b84c846d57d11",
    "old_token_expiry": 1613513984
}
```

### Immediately Revoking Your Token

Revoking your token is provided as an option in case your existing API Token has been compromised. This will cause all calls to Fast using the old token to immediately be rejected as Unauthorized, and should only be used in situations where it is absolutely necessary.

You can revoke your token via the ["Install" tab in the Fast Seller Dashboard](https://fast.co/business/dash/install), or programmatically via the `/v1/apps/<app_id>/revoke` and `/v1/apps/<app_id>/create` APIs. Both APIs require that the `app_secret` be passed as part of the body of the request

```json
POST /v1/apps/<app_id>/token/revoke

Request
{
  "app_secret": "daQT6XwpETlaZ26pcpYjXO5omzB8NgOYqkhfrITdKI4",
    "access_token": "81ea246c6811c669fcdcbdffb3601b84c846d57d11eaaedcf5bb020a96f22d05"
}

Response
{
    "expired_at": 1613513984
}
```

```json
POST /v1/apps/<app_id>/token/create

Request
{
  "app_secret": "daQT6XwpETlaZ26pcpYjXO5omzB8NgOYqkhfrITdKI4"
}

Response
{
    "access_token": "81ea246c6811c669fcdcbdffb3601b84c846d57d11eaaedcf5bb020a96f22d05"
}
```

## Validating Calls From Fast

In order to allow you to verify that calls to your server are in fact from Fast, we will include a signed JWT (JSON Web Token) with our calls as the Authorization header of the call. The JWT will be signed via RSA256 with one of Fast's private keys. The key used for signing will be referenced by the Key ID (`kid`) in the header of the JWT. To fetch Fast's JWKs (JSON Web Keys), we provide an API (`/v1/oauth2/jwks`) that provides a map of Key IDs to the public key needed to verify the signature.

### Headers

```python
Authorization: Bearer <jwt_token>
```

### JWT Format

```json HEADER

{
 "alg": "RSA256",
 "kid": "vK-TF3bs-EY7zyp_Hke8-1Md-NrFeq0WY45HECHzqSE" // the Key Identifier to determine the public key to verify the signature
 "typ": "JWT"
}
```

```json PAYLOAD
{
  "iss": "api.fast.co", // should also be the origin of the request
  "aud": "a2c74070-c22a-42e8-a0b2-adce2210a3a7", // your Fast App ID
  "exp": "1611362912", // UNIX time of expiration. Must be less than current time
  "iat": "1611251846" // UNIX time of issue
}
```

**Example Snippet**

Depending on your tech stack, there are a variety of open source libraries available for both retrieving signing keys and verifying the JWT. Below is an example snippet for NodeJS, using the [`jwks-rsa` library](https://github.com/auth0/node-jwks-rsa) for retrieving the signing token, and the [`jsonwebtoken` library](https://www.npmjs.com/package/jsonwebtoken) for verifying the token.

```jsx
import jsonwebtoken from 'jsonwebtoken';
import JwksRsa from 'jwks-rsa';
import { APP_ID } from '@config/config'

interface IFastPayloadData {
  iat:         number;
  exp:         number;
  aud:         string;
  iss:         string;
}

export class JwtService {

  private readonly fastJwksClient: JwksRsa.JwksClient;

  constructor() {
      this.fastJwksClient = JwksRsa({
          cache: true,
          jwksRequestsPerMinute: 6, // Limit JWKS network calls to 6 a minute
          cacheMaxEntries: 2, // no more than two signing keys will be active at a time
          cacheMaxAge: 21600, // 6 hour caching period
          jwksUri: 'https://api.fast.co/v1/oauth2/jwks'
      });
  }

    /**
   * Decode and verify Fast JWT
   *
   * @param jwt
   */
‍
  public async verifyFastJwt(jwt: string): Promise<ifastpayloaddata> {</ifastpayloaddata>
      const token = jsonwebtoken.decode(jwt, {complete: true}) as { [key: string]: any}
      // throws if the key ID can’t be found
      const key = await this.fastJwksClient.getSigningKeyAsync(token.kid)
      // throws if the signature is invalid, token is expired, algorithm doesn’t match,
      // or audience doesn’t match the Fast App ID
      jsonwebtoken.verify(jwt, key.getPublicKey(), {
          algorithms: ['RS256'],
          audience: APP_ID,
      });
      return token.payload as IFastPayloadData
  }
}
```
