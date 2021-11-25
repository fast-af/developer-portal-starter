---
title: "Fast Magento Docs: Fast Headless Checkout on AMP Sites with Magento"
description: Fast Headless Checkout on AMP Sites with Magento
keywords: Fast Headless Checkout AMP Magento Adobe
---

# Using Fast Headless Checkout on AMP Sites with Magento

<embed src="/reusables/for-developers/_platform_headless_all_amp_banner_info_about_amp.md" />

## Restrictions

<embed src="/reusables/for-developers/_platform_headless_all_amp_banner_additional_future_requirements.md" />

The following must be true in order for you to use Fast Checkout on an AMP page:

<embed src="/reusables/for-developers/_platform_headless_all_requirement_catalog_integration.md" />

<embed src="/reusables/for-developers/_platform_headless_all_amp_why_headless_workaround_needed_for_amp_pages.md" />

## Placing a Fast Checkout Button on an AMP page with Magento

<embed src="/reusables/for-developers/_platform_headless_all_amp_full_custom_styles_and_semantic_HTML_including_snippets.md" />

#### Construct the Fast Headless Checkout URL for a Given Product

<embed src="/reusables/for-developers/_platform_headless_all_headless_intro_difference_fpdp_enabled_vs_disabled.md" />

Because Magento integrations with Fast are FPDP-disabled, Fast Headless Checkout will only have limited support for links to products in your Magento store.

<embed src="/reusables/for-developers/_platform_headless_all_table_url_parameters_and_html_attributes.md" />

:::attention More information about Fast Headless Checkout

This page only covers the basic setup for including a Fast Headless Checkout URL on an AMP page, with a basic Fast Headless Checkout URL. For more details about Fast Headless Checkout or for additional Fast Headless Checkout examples, refer to [your platform's Fast Headless Checkout page](./use-fast-headless-checkout.md).

:::

#### Recommended Fast Headless Checkout URL Templates for FPDP-Disabled Platforms

```http Template Fast Headless Checkout URL for Specific Product Variant
https://go.fast.co/checkout
?app_id=YOUR_APP_ID
&product_id=YOUR_PRODUCT_ID
&variant_id=YOUR_VARIANT_ID
&button_id=YOUR_BUTTON_ID
&affiliate_id=YOUR_AFFILIATE_ID
&currency=YOUR_PREFERRED_CURRENCY
```

```http Template Fast Headless Checkout URL for Product with Only 1 Variant
https://go.fast.co/checkout
?app_id=YOUR_APP_ID
&product_id=YOUR_PRODUCT_ID
&button_id=YOUR_BUTTON_ID
&affiliate_id=YOUR_AFFILIATE_ID
&currency=YOUR_PREFERRED_CURRENCY
```

Once you have built the checkout URL for the product, replace `FAST_HEADLESS_CHECKOUT_URL` in the ["Place Fast Checkout Buttons Using Semantic HTML" snippet above](#place-fast-checkout-buttons-using-semantic-html) with the URL you have put together. After that, you're good to go! The button can be used on the AMP page.

#### Example Fast Headless Checkout URL from Fast Store

<embed src="/reusables/for-developers/_platform_headless_all_example_fast_store_headless_checkout_url.md" />
