:::attention Fast Product Display Page (FPDP) Unavailable for Multiple Products

Please note that if you specify one or more products using a `products` array within a Fast Headlesss Checkout URL that any product contained within will not render the Fast Product Display Page (FPDP), even for FPDP-enabled platforms.

Further, for FPDP-enabled platforms, any multi-variant product included in the `products` array that only specifies a `product_id` will have its first/primary variant selected by default.

:::

````http Multiple Products (variant not required)
https://go.fast.co/checkout?app_id=12345678-abcd-1234-abcd-1234567890ab&products=[{"product_id":"100","quantity":1},{"product_id":"101","quantity":1},{"product_id":"102","quantity":1}]

```http Multiple Products
https://go.fast.co/checkout?app_id=12345678-abcd-1234-abcd-1234567890ab&products=[{"product_id":"100","quantity":1},{"product_id":"101","quantity":1},{"product_id":"102","quantity":1}]&affiliate_id=devdocs
````
