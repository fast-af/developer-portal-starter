---
title: "Fast Custom Integration Docs: Add fast.js"
description: Getting Started with Fast with a Custom Integration! Add fast.js to your page.
keywords: add fast.js to a page

enableToc: true
redirectFrom:
  - /developer-portal/fast-api-fastjs/
---

# Setup Step 2: Add fast.js

## Part 1: Add fast.js to Your Product Page

### Production script:

```jsx
<script src="https://js.fast.co/fast.js"></script>
```

### Sandbox script:

```jsx
<script src="https://js.sandbox.fast.co/fast.js"></script>
```

## Part 2: Use the Fast Checkout Button

You have 2 different options for this section:

- [The Standard Approach](#use-the-fast-checkout-button---the-standard-approach)

- [The Programmatic/Advanced Approach approach](#use-the-fast-checkout-button---programmaticadvanced-approach)

### Use the Fast Checkout Button - The Standard Approach

<embed src="/reusables/for-developers/_platform_headless_all_intro_standard_approach_with_fast_js.md" />

Using the `fast.js` script along with a `<fast-checkout-button>` with custom HTML attributes is considered the "standard" approach for enabling Fast Checkout throughout your store, as this approach is relatively easy to implement and the script should be able to perform basic styling of your button and obtain other store-specific information.

If the Fast Checkout button for the product will be on an external site (e.g. a social media platform and a 3rd-party product review site), or you are otherwise externally sharing the URL (e.g. with a QR code) where you cannot guarantee that the `fast.js` script will be loaded, then you would instead use [Fast Headless Checkout](../headless/use-fast-headless-checkout.md).

<embed src="/reusables/for-developers/_platform_headless_all_table_url_parameters_and_html_attributes.md" />

#### HTML Button Examples

#### HTML Examples for FPDP-Enabled Platforms

<embed src="/reusables/for-developers/_platform_headless_fpdp_enabled_html_button_examples.md" />

##### Recommended HTML Template for FPDP-Enabled Platforms

```html Template Button
<fast-checkout-button
  app_id="YOUR_APP_ID"
  button_id="YOUR_BUTTON_ID"
  product_id="YOUR_PRODUCT_ID"
  affiliate_id="YOUR_AFFILIATE_ID"
  currency="YOUR_PREFERRED_CURRENCY"
></fast-checkout-button>
```

#### HTML Examples for FPDP-Disabled Platforms

<embed src="/reusables/for-developers/_platform_headless_fpdp_disabled_html_button_examples.md" />

##### Recommended HTML Templates for FPDP-Disabled Platforms

```html Template Button for Product with Only 1 Variant
<fast-checkout-button
  app_id="YOUR_APP_ID"
  button_id="YOUR_BUTTON_ID"
  product_id="YOUR_PRODUCT_ID"
  affiliate_id="YOUR_AFFILIATE_ID"
  currency="YOUR_PREFERRED_CURRENCY"
></fast-checkout-button>
```

```html Template Button for Specific Product Variant
<fast-checkout-button
  app_id="YOUR_APP_ID"
  product_id="YOUR_PRODUCT_ID"
  variant_id="YOUR_VARIANT_ID"
  button_id="YOUR_BUTTON_ID"
  affiliate_id="YOUR_AFFILIATE_ID"
  currency="YOUR_PREFERRED_CURRENCY"
></fast-checkout-button>
```

### Use the Fast Checkout Button - Programmatic/Advanced Approach

Decide where you want the button to appear on your product page and add a container for it:

```html
<fast-checkout-button></fast-checkout-button>
```

When the button is clicked, use fast.js to place an order for the item. Make sure to include any product-specific options:

```jsx
// If you have multiple fast-checkout-button elements on a single page, you'll want to use a more specific selector
// here, such as giving each button an id attribute and selecting based off of that.
var checkoutButton = document.querySelector("fast-checkout-button");
checkoutButton.addEventListener("click", (event) => {
  Fast.checkout({
    // Required. appId is your Fast app ID that you were provided during seller onboarding.
    appId: "my-fast-app-id",

    // Required. buttonId is the id attribute of the button that was clicked
    // after an order was placed or canceled, as well as let you identify which button was clicked when listening for
    // postMessage events.
    // If you gave your fast-checkout-button an id attribute, then you can just use event.target.id here.
    buttonId: event.target.id,

    // Either cartId or products must be provided. If both or neither are provided, an error will be thrown before
    // checkout is opened.

    // When performing a cart checkout, you only need to provide buttonId and cartId.
    // cartId is a unique identifier for a user's cart.
    cartId: "my-unique-cart-id",

    // When performing a products checkout, you only need to provide buttonId and products. You can also optionally
    // provide couponCode and affiliateInfo
    // products is a list of products the user is ordering.
    products: [
      {
        // Each product has an identifier, a variant identifier, and, optionally, a set of configurations (called
        // options) that are used to describe the exact product being ordered.
        // You can think of the id as the product SKU, the variant ID as a sub-identifier to the product, and the
        // options as things like color, size, etc. Or, if your product identifiers already define exactly one
        // product, you can just use id and forgo providing options.
        // The data provided here is what will reach your backend, so describe your products however makes the most
        // sense to you.
        // Required. id is an identifier for the product being ordered
        id: "my-product-id",
        // Optional. variantId represents a unique sub-idenfifier for this product. These are sometimes used to
        // denote size / color, etc.
        variantId: "my-large-product-variant-id",
        // Optional. options is a set of configurations that further describe the product being ordered (e.g. color
        // and size).
        options: [
          {
            // Required. id is the name of the option.
            id: "color",
            // Required. value is the value of the option.
            value: "blue",
          },
        ],
        // Required. quantity is the number of this product with these configurations being ordered.
        quantity: 1,
      },
    ],
    // Optional. couponCode is a coupon that the user might have entered that you would like to pass on to your
    // backend.
    couponCode: "10OFF",
    // Optional. affiliateInfo contains information about affiliates that you would like to attribute this purchase
    // with on your backend.
    affiliateInfo: {
      // affiliateInfo contains a single field named affiliates, that is an array of affiliate objects.
      affiliates: [
        // An affiliate object contains a single field named id, which is a unique identifier associated with this
        // affiliate. This ID can be whatever string your system is prepared to interpret.
        { id: "my-affiliate" },
      ],
    },
  });
});
```

:::info heads up
🚨 It is important that you call `Fast.checkout` synchronously within the `click` event handler. Many browsers will block new windows like Fast Checkout unless they are clearly connected to a user action such as clicking a button. If you perform asynchronous logic that takes several seconds, or call checkout in code in a different frame or window, the browser will prevent Fast Checkout from opening.
:::

## Handle events from Fast Checkout

**Once the user has clicked the Fast Checkout button, the Fast popup window will have launched and the user can continue with their checkout**. While this is going on, you can listen for fast.js `postMessage` events if you want to keep up with the status of the order on your frontend.

You can read more about about fast.js events in the [fast.js documentation](/developer-portal/for-developers/custom-integration/fast-api/events/).
