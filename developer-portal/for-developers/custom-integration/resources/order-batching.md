---
title: "Fast Custom Integration Docs: Order Batching"
description: What is "Batching"?
keywords: Fast financial values

enableToc: true
redirectFrom:
  - /developer-portal/fast-api-guides-batching/
  - /developer-portal/fast-api-reference-batching/
---

# Order Batching

## What is "Batching"?

> Order Batching: When 2 or more customer shopping carts are merged into one order

In the Fast Checkout customer experience, users have 5 minutes to make changes to their order. During 5-minute checkout window, Shoppers can update items in the cart, cancel the order, and perform other checkout-related interactions. If the user closes the window and purchases another item from the same store during the 5-minute window, their new purchase will be "batched" with the previous one.

When Fast batches the new item into the user's active order, most of the process is handled invisibly to the Seller. When an order is batched with a new purchase, the original order will get an update call with a new item (in the server API calls).

## What it looks like within Fast

When the user batches multiple orders together (can be thought of conceptually as _"order piggybacking"_):

1. Shopper purchases item A on order #1.
2. Shopper exits the checkout experience.
3. Shopper finds another item B that they would like to also order.
4. Shopper purchases item B before order #1 is fully processed.
5. Fast system attaches (or "piggybacks") item B onto order #1.
6. Shopper exits the checkout experience for the final time.
7. Fast system processes order #1 and processes payment for both item A and B simultaneously.
8. Seller receives the order with both item A and B.

This flow allows the seller to increase Average Order Value (AOV) and reduce transaction processing costs.

## What it looks like for the Integration Engineer

![Batching Sequence Diagram](./images/batching.png)
