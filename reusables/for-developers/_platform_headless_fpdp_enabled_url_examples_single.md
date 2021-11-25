:::info Fast Headless Checkout and FPDP-Enabled Platforms

Please note that for FPDP-enabled platforms only the `app_id` and `product_id` URL query parameters are strictly required, though `button_id` and `affiliate_id` are generally recommended. Specifying a product variant (via `variant_id` or `option_values`, depending on platform) is possible but generally not necessary for FPDP-Enabled platforms.

:::

```http Basic Product ID URL
https://go.fast.co/checkout?app_id=12345678-abcd-1234-abcd-1234567890ab&product_id=100

```

```http Variant URL (variant not required if FPDP-enabled)
https://go.fast.co/checkout?app_id=12345678-abcd-1234-abcd-1234567890ab&product_id=117&variant_id=1013
```

```http Product ID URL with Affiliate ID
https://go.fast.co/checkout?app_id=12345678-abcd-1234-abcd-1234567890ab&product_id=100&affiliate_id=devdocs
```
