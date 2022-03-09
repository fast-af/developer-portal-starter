:::info important data fields for WooCommerce webhooks
**Name** field structure:

- `order` or `product` space-separated with `created`, `updated`, or `deleted`
  - `product created`
  - `product updated`
  - `product deleted`
  - `order created`
  - `order updated`
  - `order deleted`

**Title** field structure (matching Name field above except period-separated):

- `order` or `product` period-separated with `created`, `updated`, or `deleted`
  - `product.created`
  - `product.updated`
  - `product.deleted`
  - `order.created`
  - `order.updated`
  - `order.deleted`

**Delivery URL** field structure:

- The easiest option is to use the value from the URL field of an existing (preferably auto-generated) webhook.
- should look like <nolink>https://cargo-woocommerce.integration.production.fastaf.cloud/cargo-woocommerce?x-fast-app=YOUR_FAST_APP_ID</nolink>

:::
