---
title: Fast Test Suit CLI
enableToc: true
redirectFrom:
  - /developer-portal/fast-api-test-suite-cli/
---

# Fast Test Suite CLI

The Test Suite CLI is used to simulate a frontend checkout by hitting Fast APIs directly.

**Using CLI with Reference Implementation**

You can use the CLI with the Fast App ID / API key from the [reference implementation](/developer-portal/for-developers/custom-integration/setup/authenticate.md) to mimic calls from Fast->Seller. This will enable you to see the different API requests/responses that the Seller backend will see from Fast.

<embed src="/reusables/for-developers/_fast_app_id.md" />

**Using CLI with Seller Sandbox App**

You can also use the CLI with the Sandbox App ID / API key from your non-production Seller app. This will enable you to see the API requests/responses that will come directly into your backend.

:::attention heads up
Fast Test Suite CLI only works with Sandbox environment.
:::

## Prerequisites

#### Redis

You will need to install Redis which is in charge of storing your API Access Token securely

macOS:

```bash
# Downloads and starts Redis server
brew install redis
brew services start redis
```

Other platforms can navigate to https://redis.io/download for download instructions.

## Setup

You will need to clone the Test Suite CLI binary on your machine.

```
git clone https://github.com/fast-af/fast-test-suite-cli.git
cd fast-test-suite-cli
```

Alternatively you can directly download the project as a zip file [here](https://github.com/fast-af/fast-test-suite-cli/archive/refs/heads/main.zip)

## Usage

:::attention Note
If you are having SSL issues, you can use the flag --disable-ssl to disable ssl for that request.
:::

:::attention Note
References to `product_id` below refer to a product id in your backend
:::

#### Login

To login you will need the API key provided to you and your Fast App ID.
This command will store your API key in a local file. Please use logout when finished to remove this file

```bash
./fast-test-suite login
Please enter your API access token: <api_token>
Please enter your Fast App ID: <app_id>
```

#### Logout

Logout will remove your API key from the filesystem. Run this once you are done using the CLI.

```bash
./fast-test-suite logout
```

#### PDP Simple New User

```bash
./fast-test-suite pdp-simple-new-user --product-id=<product_id> --app-id=<app_id>
```

#### PDP Simple Existing User

```bash
./fast-test-suite pdp-simple-existing-user --product-id=<product_id> --app-id=<app_id>
```

#### PDP Simple Full Suite

```bash
./fast-test-suite pdp-simple-full-suite --product-id=<product_id> --app-id=<app_id>
```

## TroubleShooting

#### Initiate Checkout Stage fails

Ensure your product_id that you list exists in your backend.

#### Redis Connection Issue

```bash
Error 61 connecting to localhost:6379. Connection refused.
```

If you see the error above, ensure your local Redis server is running and on port 6379.
