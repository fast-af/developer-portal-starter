:::warning WooCommerce Recommendation: Use Product Options Instead of Variant ID

Although Fast variant IDs (`variant_id`) are supported for WooCommerce, please note that a store admin sets up a product's product options (`option_values` for Fast Headless Checkout URL; `product_options` for `<fast-checkout-button>` HTML attribute) when adding that product to a store, but must manually assign a variant ID for a specific combination of product options. This means that a product with several product options may not have manually-assigned variant IDs for every combination of available product options.

It is for this reason that Fast recommends specifying product options for Fast Headless Checkout instead of specifying a variant ID.

:::
