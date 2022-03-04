:::warning Product Specificity Requirement

If the Fast Product Display Page (FPDP) is not enabled for your platform, then Fast Headless Checkout buttons or Fast Headless Checkout URLs you provide will need to specify a specific product variant.

This can be done by providing the product ID (`product_id`) in combination with:

- all relevant product options (`option_values` if providing a Fast Headless Checkout URL; `product_options` if providing a `<fast-checkout-button>`)

  OR

- the specific variant ID (`variant_id`)

The preferred method for specifying a variant (e.g. `variant_id` or `option_values` in a Fast Headless Checkout URL) may vary depending on platform.

:::
