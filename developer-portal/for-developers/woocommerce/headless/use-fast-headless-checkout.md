---
title: "Fast WooCommerce Docs: Fast Headless Checkout with WooCommerce"
description: Fast Headless Checkout with WooCommerce
keywords: Fast Headless Checkout WooCommerce
---

# Use the Fast Checkout Button - The Headless Approach

<embed src="/reusables/for-developers/_platform_headless_all_headless_intro.md" />

<embed src="/reusables/for-developers/_platform_headless_all_headless_intro_difference_fpdp_enabled_vs_disabled.md" />

**Because WooCommerce integrations with Fast are FPDP-disabled, Fast Headless Checkout will only have limited support for links to products in your WooCommerce store.**

<embed src="/reusables/for-developers/_platform_headless_fpdp_disabled_banner_support_recommendation.md" />

<embed src="/reusables/for-developers/_platform_headless_all_requirement_catalog_integration.md" />

<embed src="/reusables/for-developers/_platform_headless_all_table_url_parameters_and_html_attributes.md" />

# Fast Headless Checkout URL Examples for FPDP-Disabled Platforms

## Single Product URLs for FPDP-Disabled Platforms

<embed src="/reusables/for-developers/_platform_headless_woocommerce_restrictions.md" />

<embed src="/reusables/for-developers/_platform_headless_fpdp_disabled_url_examples_single.md" />

### Recommended Fast Headless Checkout URL Templates for FPDP-Disabled Platforms

```http Template Fast Headless Checkout URL for Specific Product Variant
https://go.fast.co/checkout
?app_id=YOUR_APP_ID
&product_id=YOUR_PRODUCT_ID
&variant_id=YOUR_VARIANT_ID
&affiliate_id=YOUR_AFFILIATE_ID
```

```http Template Fast Headless Checkout URL for Product with Only 1 Variant
https://go.fast.co/checkout
?app_id=YOUR_APP_ID
&product_id=YOUR_PRODUCT_ID
&affiliate_id=YOUR_AFFILIATE_ID
```

## Multiple Product URLs for FPDP-Disabled Platforms

<embed src="/reusables/for-developers/_platform_headless_woocommerce_restrictions.md" />

<embed src="/reusables/for-developers/_platform_headless_fpdp_disabled_url_examples_multiple.md" />

### Recommended Multiple Product URL Template for FPDP-Disabled Platforms

```http Template Fast Headless Checkout URL for Multi-Variant Product and Single-Variant Product
https://go.fast.co/checkout
?app_id=YOUR_APP_ID
&products=[{"product_id":"YOUR_PRODUCT_ID_1","variant_id":"YOUR_VARIANT_ID_1","quantity":1},{"product_id":"YOUR_PRODUCT_ID_2","quantity":1}]
&affiliate_id=YOUR_AFFILIATE_ID
```
