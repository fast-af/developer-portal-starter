---
title: "Fast WooCommerce Docs: Onboard as a Seller"
description: Getting Started with Fast on WooCommerce! Onboard as a Seller
keywords: Fast WooCommerce onboarding
redirectFrom:
  - /developer-portal/sign-up-with-woocommerce/
  - /developer-portal/Sign-Up-with-WooCommerce/
---

# Pre-Install Step 3: Onboard as a Seller with WooCommerce

## Prerequisites

Before you begin this process, you’ll need an online store hosted by WooCommerce.

<embed src="/reusables/for-developers/_platform_all_sign_up_as_a_seller_banner_sandbox_and_contact_support.md" />

## PIN Validation

<embed src="/reusables/for-developers/_platform_all_sign_up_as_a_seller_pin_validation.md" />

## Fill Out Your Profile

<embed src="/reusables/for-developers/_platform_all_sign_up_as_a_seller_fill_out_your_profile.md" />

## Provide Platform Details

1. Select “WooCommerce” for your platform type and click "Continue."

<embed src="/reusables/for-developers/_platform_all_sign_up_as_a_seller_platform_details.md" />

### Connect to WooCommerce

1. We need to authorize Fast on WooCommerce to install the Fast Checkout button. You’ll need the information below to connect your platform:

   1. Owner account credentials
   2. WooCommerce account email
   3. WooCommerce account password

   ![Connect to WooCommerce pop up](images/wc-connect.png)

2. Provide your WooCommerce account credentials and click "Login."
   **Note**: You need WooCommerce Store Admin access or higher to do this.

   ![WooCommerce Login form](images/woocommerce-signup-7.png)

3. Click the checkbox and click “Confirm.”
   ![Confirm](images/wc-confirm.png)

## Verification

<embed src="/reusables/for-developers/_platform_all_sign_up_as_a_seller_business_verification.md" />

### Verify your webhooks

In addition to the basic signup verification, the WooCommerce setup will provide you with an API key and three order webhooks. You will also need to create three product webhooks.

To confirm that the Fast key exists...
1. Go to **WooCommerce > Settings > Advanced > REST API**\
There should be a Fast key with both **Read** and **Write** permissions.
![WooCommerce valid API key](images/woocommerce-valid-api-key.png)
2. To confirm the six webhooks, go to **WooCommerce > Settings > Advanced > Webhooks**\
The six webhooks are listed below:

#### Webhook data table

| Name | URL |
| :---: | :---:|
| `order.updated` | https://cargo-woocommerce.integration.production.fastaf.cloud/cargo-woocommerce?x-fast-app=XXXXXXXXX |
| `order.deleted` | https://cargo-woocommerce.integration.production.fastaf.cloud/cargo-woocommerce?x-fast-app=XXXXXXXXX |
| `order.created` | https://cargo-woocommerce.integration.production.fastaf.cloud/cargo-woocommerce?x-fast-app=XXXXXXXXX |
| `product.updated` | https://cargo-woocommerce.integration.production.fastaf.cloud/cargo-woocommerce?x-fast-app=XXXXXXXXX |
| `product.deleted` | https://cargo-woocommerce.integration.production.fastaf.cloud/cargo-woocommerce?x-fast-app=XXXXXXXXX |
| `product.created` | https://cargo-woocommerce.integration.production.fastaf.cloud/cargo-woocommerce?x-fast-app=XXXXXXXXX |

:::attention Missing webhooks
If there are any missing webhooks out of the six listed, you will need to [manually add each one](/developer-portal/for-developers/woocommerce/pre-install/manually-add-webhooks/).     
:::

## Bank Details

<embed src="/reusables/for-developers/_platform_all_sign_up_as_a_seller_bank_details.md" />
