:::info data fields for WooCommerce webhooks
**Name** (`order` or `product`, space-separated with `created`, `updated`, or `deleted`):
- `product created`
- `product updated`
- `product deleted`
- `order created`
- `order updated`
- `order deleted`

**Title** (matching Name field above except period-separated):
- `product.created`
- `product.updated`
- `product.deleted`
- `order.created`  
- `order.updated`
- `order.deleted`

**Delivery URL** field structure:

- The easiest option is to use the value from the URL field of an existing (preferably auto-generated) webhook.
- Should look like `https://cargo-woocommerce.integration.production.fastaf.cloud/cargo-woocommerce?x-fast-app=YOUR_FAST_APP_ID`

<embed src="/reusables/for-developers/_fast_app_id.md" />

:::
