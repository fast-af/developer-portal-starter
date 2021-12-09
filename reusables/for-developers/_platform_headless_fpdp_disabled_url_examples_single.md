:::info Fast Headless Checkout and FPDP-Disabled Platforms

Please note that for FPDP-disabled platforms that `app_id`, `product_id`, and product variant (either `variant_id` or `option_values`, depending on platform) URL query parameters are strictly required. Other optional attributes (e.g. `affiliate_id`) may be recommended based on the use-case.

Products that do not have multiple product variants can be specified using only their Product ID (`product_id`), but please keep in mind that adding a variant to such a product at a later date may negatively affect any Fast Headless Checkout URLs that reference that product.

:::

```http Basic Variant URL (variant or product options required if FPDP-disabled)
https://go.fast.co/checkout?app_id=12345678-abcd-1234-abcd-1234567890ab&product_id=117&variant_id=1013

```

```http Product Options URL (variant or product options required if FPDP-disabled)
https://go.fast.co/checkout?app_id=12345678-abcd-1234-abcd-1234567890ab&product_id=117&option_values=121,145,122,139

```

```http Variant URL with Affiliate ID
https://go.fast.co/checkout?app_id=12345678-abcd-1234-abcd-1234567890ab&product_id=117&variant_id=1013&affiliate_id=devdocs
```

```http Product Options URL with Affiliate ID
https://go.fast.co/checkout?app_id=12345678-abcd-1234-abcd-1234567890ab&product_id=117&option_values=121,145,122,139affiliate_id=devdocs
```
