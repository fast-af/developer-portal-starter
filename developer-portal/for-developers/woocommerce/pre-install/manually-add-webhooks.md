---
title: "Fast WooCommerce Docs: Manually add webhooks"
description: Getting Started with Fast on WooCommerce! Optionally add any missing webhooks
keywords: Fast WooCommerce onboarding
redirectFrom:
  - /developer-portal/sign-up-with-woocommerce/
  - /developer-portal/Sign-Up-with-WooCommerce/
---

# Pre-Install Step 4: Manually add missing webhooks (Optional)


## Introduction

It is possible that your WooCommerce webhooks were not added to your profile, which you can verify by following [the steps outlined here](/developer-portal/for-developers/woocommerce/pre-install/sign-up-as-a-seller/#verify-your-webhooks).

## Manually add webhooks

1. While logged into your WooCommerce dashboard, go to **WooCommerce > Settings > Advanced > Webhooks**.\
You should see three **Order** and three **Product** webhooks listed. If these are not present, you will need to add the missing webhooks.
2. Click **Add webhook** on the top of the screen.\
![Add webhook](/images/add-webhook.png)

    This will open the **Webhook data** screen where you can manually add a webhook.\
    ![Configure webhook screen](/images/configure-webhook-screen.png)
    - For **Name**, use either `order` or `product`, then a space, then use `created`, `updated`, or `deleted`.
    :::info For example
    `product created` or `order updated`    
    :::
    - Set the **Status** to **Active**
    - For **Topic**, type either Product or Order, and select the options that match the **Name**.
    - For **Delivery URL**, copy and paste the value from an existing Fast webhook.
    - For **Secret**, also copy and paste an existing Fast secret key.
    - For **API version**, leave as `WP REST API Integration v3`.   
3. Verify the information, then click **Save webhook**.
4. Repeat these steps for each webhook that needs to be added.\
In total there should be 3 Order and 3 Product webhooks. You can verify these by navigating to **Fast > Status > Webhooks**, where you will see the text **All Fast webhooks are enabled**.\
![All Fast webhooks are enabled](/images/all_fast_webhooks_are_enabled.png)\
The full list of webhook names and URLs can be found [here](/developer-portal/for-developers/woocommerce/pre-install/sign-up-as-a-seller/#webhook-data-table). 
