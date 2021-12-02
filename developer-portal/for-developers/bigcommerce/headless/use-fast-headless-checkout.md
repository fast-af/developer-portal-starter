---
title: "Fast BigCommerce Docs: Fast Headless Checkout with BigCommerce"
description: Fast Headless Checkout with BigCommerce
keywords: Fast Headless Checkout BigCommerce
---

# Use the Fast Checkout Button - The Headless Approach

<embed src="/reusables/for-developers/_platform_headless_all_headless_intro.md" />

<embed src="/reusables/for-developers/_platform_headless_all_headless_intro_difference_fpdp_enabled_vs_disabled.md" />

**Because BigCommerce integrations with Fast are FPDP-enabled, Fast Headless Checkout should be fully-supported for links to products in your BigCommerce store.**

<embed src="/reusables/for-developers/_platform_headless_all_requirement_catalog_integration.md" />

<embed src="/reusables/for-developers/_platform_headless_all_table_url_parameters_and_html_attributes.md" />

# Fast Headless Checkout URL Examples for FPDP-Enabled Platforms

## Single Product URLs for FPDP-Enabled Platforms

<embed src="/reusables/for-developers/_platform_headless_fpdp_enabled_url_examples_single.md" />

### Recommended Fast Headless Checkout URL Template for FPDP-Enabled Platforms

```http Template Fast Headless Checkout URL
https://go.fast.co/checkout
?app_id=YOUR_APP_ID
&product_id=YOUR_PRODUCT_ID
&button_id=YOUR_BUTTON_ID
&affiliate_id=YOUR_AFFILIATE_ID
```

## Multiple Product URLs for FPDP-Enabled Platforms

<embed src="/reusables/for-developers/_platform_headless_fpdp_enabled_url_examples_multiple.md" />

### Recommended Multiple Product URL Template for FPDP-Enabled Platforms

```http Template Fast Headless Checkout URL for a Specific Product Variant and a Simple Product
https://go.fast.co/checkout
?app_id=YOUR_APP_ID
&products=[{"product_id":"YOUR_PRODUCT_ID_1","variant_id":"YOUR_VARIANT_ID_1","quantity":1},{"product_id":"YOUR_PRODUCT_ID_2","quantity":1}]
&button_id=YOUR_BUTTON_ID
&affiliate_id=YOUR_AFFILIATE_ID
```

```http Template Fast Headless Checkout URL for Auto-Selecting Primary Variant of 2 Products
https://go.fast.co/checkout
?app_id=YOUR_APP_ID
&products=[{"product_id":"YOUR_PRODUCT_ID_1","quantity":1},{"product_id":"YOUR_PRODUCT_ID_2","quantity":1}]
&button_id=YOUR_BUTTON_ID
&affiliate_id=YOUR_AFFILIATE_ID
```
