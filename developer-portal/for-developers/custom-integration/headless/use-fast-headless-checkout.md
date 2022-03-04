---
title: "Fast Custom Integration Docs: Fast Headless Checkout with Custom Integrations"
description: Fast Headless Checkout with Custom Integrations
keywords: Fast Headless Checkout custom
---

# Use the Fast Checkout Button - The Headless Approach

<embed src="/reusables/for-developers/_platform_headless_all_headless_intro.md" />

<embed src="/reusables/for-developers/_platform_headless_all_headless_intro_difference_fpdp_enabled_vs_disabled.md" />

**Because custom integrations with Fast are generally FPDP-enabled, Fast Headless Checkout should be fully-supported for links to products in your custom store.**

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
&affiliate_id=YOUR_AFFILIATE_ID
```

## Multiple Product URLs for FPDP-Enabled Platforms

<embed src="/reusables/for-developers/_platform_headless_fpdp_enabled_url_examples_multiple.md" />
