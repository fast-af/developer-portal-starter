---
title: "Fast Custom Integration Docs: Fast Headless Checkout on AMP Sites with Custom Integration"
description: Fast Headless Checkout on AMP Sites with Custom Integration
keywords: Fast Headless Checkout AMP Custom Integration
---

# Using Fast Headless Checkout on AMP Sites with Custom Integration

<embed src="/reusables/for-developers/_platform_headless_all_amp_banner_info_about_amp.md" />

## Restrictions

<embed src="/reusables/for-developers/_platform_headless_all_amp_banner_additional_future_requirements.md" />

The following must be true in order for you to use Fast Checkout on an AMP page:

<embed src="/reusables/for-developers/_platform_headless_all_requirement_catalog_integration.md" />

<embed src="/reusables/for-developers/_platform_headless_all_amp_why_headless_workaround_needed_for_amp_pages.md" />

## Placing a Fast Checkout Button on an AMP page with Custom Integration

<embed src="/reusables/for-developers/_platform_headless_all_amp_full_custom_styles_and_semantic_HTML_including_snippets.md" />

#### Construct the Fast Headless Checkout URL for a Given Product

<embed src="/reusables/for-developers/_platform_headless_all_headless_intro_difference_fpdp_enabled_vs_disabled.md" />

**Because custom integrations with Fast are generally FPDP-enabled, Fast Headless Checkout should be fully-supported for links to products in your custom store.**

<embed src="/reusables/for-developers/_platform_headless_all_table_url_parameters_and_html_attributes.md" />

:::attention More information about Fast Headless Checkout

This page only covers the basic setup for including a Fast Headless Checkout URL on an AMP page, with a basic Fast Headless Checkout URL. For more details about Fast Headless Checkout or for additional Fast Headless Checkout examples, refer to [your platform's Fast Headless Checkout page](./use-fast-headless-checkout.md).

:::

#### Recommended Fast Headless Checkout URL Template for FPDP-Enabled Platforms

```http Template Fast Headless Checkout URL
https://go.fast.co/checkout
?app_id=YOUR_APP_ID
&product_id=YOUR_PRODUCT_ID
&button_id=YOUR_BUTTON_ID
&affiliate_id=YOUR_AFFILIATE_ID
```

Once you have built the checkout URL for the product, replace `FAST_HEADLESS_CHECKOUT_URL` in the ["Place Fast Checkout Buttons Using Semantic HTML" snippet above](#place-fast-checkout-buttons-using-semantic-html) with the URL you have put together. After that, you're good to go! The button can be used on the AMP page.

#### Example Fast Headless Checkout URL from Fast Store

<embed src="/reusables/for-developers/_platform_headless_all_example_fast_store_headless_checkout_url.md" />
