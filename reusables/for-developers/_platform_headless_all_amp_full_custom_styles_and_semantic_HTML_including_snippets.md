To place a Fast Checkout button on an AMP page, you must first specify custom styles that will apply to all Fast Checkout buttons site-wide. Each Fast Checkout button will then need to be built using semantic HTML elements and each button will need to be provided a unique Fast Headless Checkout URL.

### Insert Custom Styles Element in Head of AMP Document

In the `<head>` of your AMP document, insert a custom styles element. This is only needed once and will be used to style all Fast Checkout buttons on the page:

```html
<style amp-custom>
  button.fast-checkout {
    width: 400px;
    height: 50px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 18px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: 1px solid #000;
    outline-color: transparent;
  }
  button.fast-checkout > div {
    margin-right: 8px;
    width: 15px;
    height: 15px;
    position: relative;
    bottom: 1px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMyAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4wODc0IDYuMTM1NzNIMTEuNDY5N0MxMS44OTE5IDYuMTUxNCAxMi4yODk5IDYuMzE1NjkgMTIuNTc2NSA2LjU5MjYxQzEyLjg2MzIgNi44Njk1MyAxMy4wMTUgNy4yMzY0OCAxMi45OTg4IDcuNjEzMDdWMTMuNTIyNkMxMy4wMTUgMTMuODk5MiAxMi44NjMyIDE0LjI2NjIgMTIuNTc2NiAxNC41NDMxQzEyLjI4OTkgMTQuODIgMTEuODkxOSAxNC45ODQzIDExLjQ2OTcgMTVIMS41MzAzMUMxLjEwODEgMTQuOTg0MyAwLjcxMDA3NiAxNC44MiAwLjQyMzQ1MSAxNC41NDMxQzAuMTM2ODI2IDE0LjI2NjIgLTAuMDE1MDI0MiAxMy44OTkyIDAuMDAxMTc0ODkgMTMuNTIyNlY3LjYxMzA3Qy0wLjAxNTAxMzggNy4yMzY0OSAwLjEzNjg0MSA2Ljg2OTUzIDAuNDIzNDY1IDYuNTkyNjJDMC43MTAwODkgNi4zMTU3IDEuMTA4MTEgNi4xNTE0MSAxLjUzMDMxIDYuMTM1NzNIMS45MTI1OVYzLjc0NzU1QzEuOTEyNTkgMi4zNzMzOCAyLjIzNjA4IDEuNTcyNzcgMi45NTU4MSAwLjkzMDc1MUMzLjY3NTUzIDAuMjg4NzM3IDQuNTcyNjQgMCA2LjExMjgyIDBINi44ODcxQzguNDI3MjggMCA5LjMyNDUgMC4yODg3MDMgMTAuMDQ0MiAwLjkzMDc1MUMxMC43NjM5IDEuNTcyOCAxMS4wODc0IDIuMzczMzggMTEuMDg3NCAzLjc0NzU1VjYuMTM1NzNaTTkuNTU4MjcgMy43NDgxM0M5LjU1ODI3IDIuODczNjcgOS4zNTIzMyAyLjM2NDIxIDguODk0NCAxLjk1NTY0QzguNDM2NDYgMS41NDcwNiA3Ljg2NTUyIDEuMzYzMzYgNi44ODUzNCAxLjM2MzM2SDYuMTE0ODFDNS4xMzQ2NyAxLjM2MzM2IDQuNTYzNjkgMS41NDcwNiA0LjEwNTc5IDEuOTU1NjRDMy42NDc5IDIuMzY0MjEgMy40NDE3MyAyLjg3MzY3IDMuNDQxNzMgMy43NDgxM1Y2LjEzNTczSDkuNTU4MjdWMy43NDgxM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=);
  }
</style>
```

### Place Fast Checkout Buttons Using Semantic HTML

Then, for each place you want to insert a Fast Checkout button, use the following snippet:

:::attention Use All Elements in Snippet

🚨 The empty `<div>` and the "Fast Checkout" `<span>` are crucial for the button to be displayed properly. Make sure you copy the whole snippet!

:::

```html
<button
  on="tap:AMP.navigateTo(url='FAST_HEADLESS_CHECKOUT_URL', target='_blank', opener=true)"
  class="fast-checkout"
>
  <div></div>
  <span>Fast Checkout</span>
</button>
```

Notice that the snippet has a placeholder `FAST_HEADLESS_CHECKOUT_URL`. The next section will cover how to construct this URL for the product you want the button to purchase. Once you have the URL, you can replace `FAST_HEADLESS_CHECKOUT_URL` with it.
