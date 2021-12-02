:::info `fast.js` and FPDP-Enabled Platforms

If a `<fast-checkout-button>` is placed on a page that has access to the `fast.js` script once the page is loaded, then the button should get basic styling and enable Fast Checkout with the additional details provided via to the button's HTML attributes (e.g. `button_id`, `affiliate_id`, etc.).

If `fast.js` is not accessible (e.g. on a social media platform or 3rd-party review site), then you should instead refer to the Fast Headless Checkout instructions for your platform.

Please note that for FPDP-enabled platforms only the `app_id` and `product_id` HTML attributes are strictly required. Other optional attributes (e.g. `affiliate_id`) may be recommended based on the use-case. Specifying a product variant (via `variant_id` or `product_options`, depending on platform) is possible but generally not necessary for FPDP-Enabled platforms.

:::

```html Basic Product Button
<fast-checkout-button
  app_id="12345678-abcd-1234-abcd-1234567890ab"
  product_id="100"
></fast-checkout-button>
```

```html Variant Button (variant not required if FPDP-enabled)
<fast-checkout-button
  app_id="12345678-abcd-1234-abcd-1234567890ab"
  product_id="117"
  variant_id="1013"
></fast-checkout-button>
```

```html Button with Affiliate ID
<fast-checkout-button
  app_id="12345678-abcd-1234-abcd-1234567890ab"
  product_id="100"
  affiliate_id="devdocs"
></fast-checkout-button>
```

```html Disabled Button
<fast-checkout-button
  app_id="12345678-abcd-1234-abcd-1234567890ab"
  product_id="100"
  affiliate_id="devdocs"
  disabled
></fast-checkout-button>
```

```html Dark Theme Button
<fast-checkout-button
  app_id="12345678-abcd-1234-abcd-1234567890ab"
  product_id="100"
  affiliate_id="devdocs"
  dark
></fast-checkout-button>
```
