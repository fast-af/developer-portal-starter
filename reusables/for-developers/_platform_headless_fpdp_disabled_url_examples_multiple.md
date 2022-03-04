:::attention Multiple Product URLs and FPDP-Disabled Platforms

For FPDP-disabled platforms, each product included in the `products` array that has multiple variants **must** include its product variant (using `variant_id` or `options_values`, depending on platform) or the Multilple Product Fast Headless Checkout URL will not work.

Products that do not have multiple product variants can be specified using only their Product ID (`product_id`), but please keep in mind that adding a variant to such a product at a later date may negatively affect any Multiple Product Fast Headless Checkout URLs that reference that product.

:::

```http Multiple Products (all simple single-variant products)
https://go.fast.co/checkout?app_id=12345678-abcd-1234-abcd-1234567890ab&products=[{"product_id":"100","quantity":1},{"product_id":"101","quantity":1},{"product_id":"102","quantity":1}]
```

```http Multiple Products (1 product variant and 1 simple product)
https://go.fast.co/checkout?app_id=12345678-abcd-1234-abcd-1234567890ab&products=[{"product_id":"117","variant_id":"1013","quantity":1},{"product_id":"1342155","quantity":1}]
```
