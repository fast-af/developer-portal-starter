:::info `fast.js` and FPDP-Disabled Platforms

If the page that a `<fast-checkout-button>` is placed on has access to the `fast.js` script loaded on that page, then the button should get basic styling and enable Fast Checkout with the additional details provided via to the button's HTML attributes (e.g. `affiliate_id`).

If `fast.js` is not accessible (e.g. on a social media platform or 3rd-party review site), then you should instead refer to the Fast Headless Checkout instructions for your platform.

Please note that for FPDP-disabled platforms that `app_id`, `product_id`, and product variant (either `variant_id` or `product_options`, depending on platform) HTML attributes are strictly required. Other optional attributes (e.g. `affiliate_id`) may be recommended based on the use-case.

Products that do not have multiple product variants can be specified using only their Product ID (`product_id`), but please keep in mind that adding a variant to such a product at a later date may negatively affect any `<fast-checkout-button>` or Fast Headless Checkout URL that reference that product.

:::

```html Basic Product Button (SINGLE VARIANT PRODUCTS ONLY)
<fast-checkout-button
  app_id="12345678-abcd-1234-abcd-1234567890ab"
  product_id="100"
></fast-checkout-button>
```

```html Basic Variant Button (variant or product options required depending on platform)
<fast-checkout-button
  app_id="12345678-abcd-1234-abcd-1234567890ab"
  product_id="117"
  variant_id="1013"
></fast-checkout-button>
```

```html Basic Variant Button via comma-separated product options (variant or product options required depending on platform)
<fast-checkout-button
  app_id="12345678-abcd-1234-abcd-1234567890ab"
  product_id="117"
  product_options="121,145,122,139"
></fast-checkout-button>
```

```html Button with JSON product options (variant or product options required depending on platform)
<fast-checkout-button
  app_id="12345678-abcd-1234-abcd-1234567890ab"
  product_id="117"
  product_options='{"121":"145","122":"139"}'
></fast-checkout-button>
```

```html Basic Variant Button with Affiliate ID
<fast-checkout-button
  app_id="12345678-abcd-1234-abcd-1234567890ab"
  product_id="117"
  variant_id="1013"
  affiliate_id="devdocs"
></fast-checkout-button>
```

```html Button with Product Options and Affiliate ID
<fast-checkout-button
  app_id="12345678-abcd-1234-abcd-1234567890ab"
  product_id="117"
  product_options='{"121":"145","122":"139"}'
  affiliate_id="devdocs"
></fast-checkout-button>
```

```html Disabled Button
<fast-checkout-button
  app_id="12345678-abcd-1234-abcd-1234567890ab"
  product_id="117"
  variant_id="1013"
  affiliate_id="devdocs"
  disabled
></fast-checkout-button>
```

```html Dark Theme Button
<fast-checkout-button
  app_id="12345678-abcd-1234-abcd-1234567890ab"
  product_id="117"
  variant_id="1013"
  affiliate_id="devdocs"
  dark
></fast-checkout-button>
```
