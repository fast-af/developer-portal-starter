# Orders

Fast gives you the ability to directly work with orders! The functionality described in this section is entirely optional.

| REST VERB | API_URL                                                                   | Link                                                                                      |
| --------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| POST      | https://sandbox.fast.co/fast/v1/external/orders/{order_id}                | [Cancel Orders](/developer-portal/fast-api-qs-backend-extended-oms-cancel-order.md)       |
| POST      | https://sandbox.fast.co/fast/v1/external/orders/{order_id}/refund         | [Refund Orders](/developer-portal/fast-api-qs-backend-extended-oms-refund-order.md)       |
| POST      | https://sandbox.fast.co/fast/v1/external/orders/{order_id}/business_event | [Business Eventing](/developer-portal/fast-api-qs-backend-extended-oms-business-event.md) |

## Canceling Orders

Enables the seller to cancel the order in the event of fast<->seller system failures.

### Cancel Codes

```jsx
1: Buyer canceled
2: Entity not found
3: Unprocessable order
4: Insufficient Stock
5: Fraud check failed
6: Payment declined
```

## Refunding Orders

Enables the seller to refund an order for several reasons.

## Business Eventing

This section covers several different types of events that a seller can signal to Fast.

### Event Types

| Type                                             | Description                    |
| ------------------------------------------------ | ------------------------------ |
| `"BUSINESS_EVENT_TYPE_FULFILLMENT"`              | Fulfillment event              |
| `"BUSINESS_EVENT_TYPE_CLEAR_TO_COLLECT_PAYMENT"` | Clear to collect payment event |
