---
title: Fast BigCommerce Docs
description: Fast BigCommerce Installing Fast Buttons
keywords: Fast BigCommerce Installing Fast Buttons
---

# Installing Fast Buttons on BigCommerce

## Installing Checkout Button to Product Page

1. Click “templates” → “components” → “products” → “add to cart.html.”

<img src="./images/image24.png"/>

2. Use command-F to find the line:
   ```
   {{#or customer (if theme_settings.restrict_to_login '!==' true)}}.
   ```
3. **ABOVE this line**, copy and paste the following code. When you do this, replace REPLACE-WITH-YOUR-APP-ID with your app ID.

   ```
   {{#if customer.name '===' 'Fast Testing'}}
   <!------ FAST CHECKOUT BUTTON START ----------->
   <div class="fast-wrapper">
   <div class="fast-or">OR</div>
   <fast-checkout-button app_id="REPLACE-WITH-YOUR-APP-ID"/>
   </div>
   <style>
   .fast-wrapper {
   padding-bottom: 20px;
   margin-bottom: 20px;
   }
   .fast-or {
   position: relative;
   top: 80px;
   background: white;
   width: 40px;
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   color: #757575;
   }
   @media only screen and (max-width: 767px) {
   .fast-wrapper {
       border-bottom: 1px solid #dfdfdf;
       border-radius: none;
       padding-right: 1%;
       padding-left: 1%;
   }
   }
   @media only screen and (min-width: 768px) {
   .fast-wrapper {
       border: 1px solid #dfdfdf;
       border-radius: 5px;
       padding-right: 20%;
       padding-left: 20%;
   }
   }
   </style>
   <!------ FAST CHECKOUT BUTTON END ----------->
   {{/if}}
   ```

4. After copying and pasting that code, indent the code so it matches up with the other indentations in the rest of the code.

5. Click “Save File.”
   > Note: The page might say “Save & apply file” instead of “Save File.” If that is the case, click “Save & apply file.”
6. Go to the Product page on your online store and make sure that the Fast Checkout button, which appears there now, looks good to you. (You may have to refresh the page a few times before the Fast Checkout button appears.)

<img src="./images/image21.png"/>

:::info Check Styling

If you want to adjust how it looks, like make it bigger or less stretched out, follow the steps in the section, [Styling Fast Buttons](/developer-portal/for-developers/bigcommerce/customization/custom-styling/). Then go to the next section.

:::

## Installing Checkout Button to Cart Preview Page

1. In the theme files, click “templates” → “components” → “cart” → “preview.html.”

<img src="./images/image19.png"/>

2.Use command-F to find the line:

```
{{#if cart.show_primary_checkout_button}}
```

3. **BELOW this line**, copy and paste the following code. When you do this, replace REPLACE-WITH-YOUR-APP-ID with your app ID.

   ```
   {{#if customer.name '===' 'Fast Testing'}}
   <!------ FAST CHECKOUT BUTTON START ----------->
   <div class="fast-overlay-wrapper">
       <div class="fast-overlay-or">OR</div>
       <fast-checkout-cart-button cart_id="{{cart_id}}" app_id="REPLACE-WITH-YOUR-APP-ID"/>
   </div>
   <style>
   .fast-overlay-wrapper {
       clear: both;
       margin-bottom: 20px;
       border-bottom: 1px solid #c1c1c1;
       padding-bottom: 20px;
                   margin-top: -20px;
   }
   .fast-overlay-or {
       position: relative;
       top: 80px;
       background: #e5e5e5;
       width: 40px;
       text-align: center;
       margin-left: auto;
       margin-right: auto;
       color: #757575;
   }
   /*@media only screen and (max-width: 767px) {*/
   /*    .fast-overlay-or {*/
   /*        background: #ffffff;*/
   /*    }*/
   /*}*/
   </style>
   <!------ FAST CHECKOUT BUTTON END ----------->
   {{/if}}
   ```

4. Click “Save File.

   > Note: The page might say “Save & apply file” instead of “Save File.” If that is the case, click “Save & apply file.”

5. Go to the Checkout page on your online store and make sure that the Fast Checkout button, which appears there now, looks good to you. (You may have to refresh the page a few times before the Fast Checkout button appears.)
   <img src="./images/image34.png"/>

:::info Check Styling

If you want to adjust how it looks, like make it bigger or less stretched out, follow the steps in the section, [Styling Fast Buttons](/developer-portal/for-developers/bigcommerce/customization/custom-styling/). Then go to the next section.

:::

## Installing Checkout Button to Mini Cart Page

> Note: If your store doesn’t have a mini cart page, you can skip this entire section and go to the section, Installing Checkout Button to Cart Page.

1. In the theme files, click “templates” → “components” → “common” → “cart-preview.html.”
   <img src="./images/image3.png"/>
2. Use command-F to find the line:
   ```
   <div class="previewCartAction">
   ```
3. ABOVE this line, copy and paste the following code. When you do this, replace REPLACE-WITH-YOUR-APP-ID with your app ID.
   ```
   {{#if customer.name '===' 'Fast Testing'}}
   <!------ FAST CHECKOUT BUTTON START ----------->
   <div class="fast-mini-cart-wrapper">
   <div class="fast-mini-cart-or">OR</div>
   <fast-checkout-cart-button cart_id="{{cart_id}}" app_id="REPLACE-WITH-YOUR-APP-ID"/>
   </div>
   <style>
   .fast-mini-cart-wrapper {
   clear: both;
   margin-bottom: 20px;
   border-bottom: 1px solid #c1c1c1;
   padding-bottom: 20px;
   margin-left: 20px;
   margin-right: 20px;
   }
   .fast-mini-cart-or {
   position: relative;
   top: 80px;
   background: white;
   width: 40px;
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   color: #757575;
   }
   </style>
   <!------ FAST CHECKOUT BUTTON END ----------->
   {{/if}}
   ```
4. Click “Save File.”
   > Note: The page might say “Save & apply file” instead of “Save File.” If that is the case, click “Save & apply file.”
5. Go to the Mini Cart page on your online store and make sure that the Fast Checkout button, which appears there now, looks good to you. (You may have to refresh the page a few times before the Fast Checkout button appears.)
   <img src="./images/image14.png"/>

:::info Check Styling

If you want to adjust how it looks, like make it bigger or less stretched out, follow the steps in the section, [Styling Fast Buttons](/developer-portal/for-developers/bigcommerce/customization/custom-styling/). Then go to the next section.

:::

## Installing Checkout Button to Cart Page

1. In the theme files, click “templates” → “pages” → “cart.html.”
   <img src="./images/image22.png"/>

2. Use command-F to find the line:

```
{{#if cart.show_primary_checkout_button}}
```

3. **BELOW this line**}, copy and paste the following code. When you do this, replace REPLACE-WITH-YOUR-APP-ID with your app ID.

```
{{#if customer.name '===' 'Fast Testing'}}
<!------ FAST CHECKOUT BUTTON START ----------->
<div class="fast-wrapper">
   <div class="fast-or">OR</div>
   <fast-checkout-cart-button cart_id="{{cart_id}}" app_id="REPLACE-WITH-YOUR-APP-ID"/>
</div>
<style>
.fast-wrapper {
   clear: both;
   margin-bottom: 20px;
   border-bottom: 1px solid #dfdfdf;
   border-radius: none;
   padding-bottom: 20px;
}
.fast-or {
   position: relative;
   top: 80px;
   background: white;
   width: 40px;
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   color: #757575;
}
@media (min-width: 551px) {
   .fast-wrapper {
       margin-left: auto;
       margin-right: 0;
       width: 100%;
       border: 1px solid #dfdfdf;
       padding-left: 10%;
       padding-right: 10%;
       padding-bottom: 20px;
       border-radius: 5px;
       width: 58.66%;
       /*width: 26.33rem;*/
   }
}
@media (min-width: 801px) {
   .fast-wrapper {
       width: 58.66%;
       /*width: 27.66rem;*/
   }
}
@media (min-width: 1261px) {
   .fast-wrapper {
       width: 42%;
       /*width: 35.33rem;*/
   }
}
</style>
<!------ FAST CHECKOUT BUTTON END ----------->
{{/if}}
```

4. Click “Save File.”

   > Note: The page might say “Save & apply file” instead of “Save File.” If that is the case, click “Save & apply file.”

5. Go to the Cart page on your online store and make sure that the Fast Checkout button, which appears there now, looks good to you. (You may have to refresh the page a few times before the Fast Checkout button appears.)
   <img src="./images/image37.png"/>

:::info Check Styling

If you want to adjust how it looks, like make it bigger or less stretched out, follow the steps in the section, [Styling Fast Buttons](/developer-portal/for-developers/bigcommerce/customization/custom-styling/). Then go to the next section.

:::

## Installing Checkout Button to Checkout Page

1. In the theme files, click “templates” → “pages” → “checkout.html.”
   <img src="./images/image11.png"/>
2. Use command-F to find the line:
   `{{{ checkout.checkout_content }}}`
3. **ABOVE this line**, copy and paste the following code. When you do this, replace REPLACE-WITH-YOUR-APP-ID with your app ID.
   ```
   <!------ FAST CHECKOUT BUTTON START ----------->
   {{#if customer.name '===' 'Fast Testing'}}
   <div class="fast-wrapper">
   <div class="fast-content">
       <h1 class="fast-header text">Check out with Fast</h1>
       <p class="fast-copy text">Securely pay with a single click. You'll never want to check out another way again.</p>
       <fast-checkout-cart-button cart_id="{{cart_id}}" app_id="REPLACE-WITH-YOUR-APP-ID"></fast-checkout-cart-button>
       <p class="fast-label text">One click. Zero hassle.</p>
   </div>
   </div>
   <style>
   .fast-wrapper {
   clear: both;
   background: white;
   border: 1px solid #D4D4D4;
   border-radius: 6px;
   box-sizing: border-box;
   box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.11);
   position: sticky;
   z-index: 3;
   top: 10px;
   margin-top: 40px;
   margin-right: -15px;
   margin-left: -15px;
   padding: 0;
   }
   .fast-content {
   padding: 24px;
   }
   .text {
   text-align: center;
   font-family: Inter,Montserrat,Arial,Helvetica,sans-serif;
   font-style: normal;
   }
   .fast-header {
   margin-bottom: 12px;
   font-weight: bold;
   font-size: 21px;
   line-height: 28px;
   color: #000000;
   }
   .fast-copy {
   margin-bottom: 24px;
   font-weight: normal;
   font-size: 16px;
   line-height: 24px;
   color: #444444;
   }
   .fast-label {
   font-weight: normal;
   font-size: 14px;
   line-height: 20px;
   margin: 12px 0 0 0;
   color: #707070;
   }
   .fast-checkout-cart-button {
   width: 100%;
   margin-left: auto;
   margin-right: auto;
   }
   @media (min-width: 969px) {
   .fast-wrapper {
       margin-right: 0;
       margin-left: 0;
   }
   .fast-checkout-cart-button {
       width: 193px;
   }
   }
   </style>
   <!------ FAST CHECKOUT BUTTON END ----------->
   {{/if}}
   ```
4. Click “Save File.”
   > Note: The page might say “Save & apply file” instead of “Save File.” If that is the case, click “Save & apply file.”
5. Go to the homepage of your BigCommerce account.
6. On the sidebar, click “Storefront” → “Script Manager.”
   <img src="./images/image9.png"/>
7. Click “Create a Script.”
   <img src="./images/imag31.png"/>
8. Fill out the script with the following fields:
   - **Name of Script**: Fast Checkout Placement
   - (Leave the description blank)
   - **Location on Page**: Footer
   - **Select pages where script will be added**: Checkout
   - **Script category**: Essential
   - **Script type**: Script
     <img src="./images/image5.png"/>
9. Copy and paste this script into the section, “Script Contents.”
   ```
   <script type="text/javascript"> const oldOnload = window.onload; window.onload = () => { if (typeof oldOnload == 'function') { oldOnload(); } const fw = document.getElementsByClassName("fast-wrapper")[0]; const lm = document.getElementsByClassName("layout-main")[0]; if (typeof fw !== 'undefined') { lm.prepend(fw); } } </script>
   ```
10. Click “Save.”
11. Go to the Checkout page on your online store and make sure that the Fast Checkout button, which appears there now, looks good to you. (You may have to refresh the page a few times before the Fast Checkout button appears.)
    <img src="./images/image7.png"/>

:::info Check Styling

If you want to adjust how it looks, like make it bigger or less stretched out, follow the steps in the section, [Styling Fast Buttons](/developer-portal/for-developers/bigcommerce/customization/custom-styling/). Then go to the next section.

:::

## Installing Login Button to Login Page

1. In the theme files, click “templates” → “pages” → “auth” → “login.html.”
   <img src="./images/image6.png"/>
2. Use command-F to find the line:

```
<h1 class="page-heading">{{lang 'login.heading' }}</h1>
```

3. **BELOW this line**, copy and paste the following code. When you do this, replace REPLACE-WITH-YOUR-APP-ID with your app ID.

```
{{#if customer.name '===' 'Fast Testing'}}
<!------ FAST LOGIN BUTTON START ----------->
{{#unless customer}}
<div class="fast-wrapper-login">
   <div class="fast-or-login">OR</div>
   <fast-login app_id="REPLACE-WITH-YOUR-APP-ID"/>
</div>
<style>
.fast-wrapper-login {
   margin-left: auto;
   margin-right: auto;
   width: 100%;
   border-bottom: 1px solid #dfdfdf;
   padding-bottom: 40px;
   margin-bottom: 20px;
   padding-top: 20px;
}
.fast-or-login {
   position: relative;
   top: 100px;
   background: white;
   width: 40px;
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   color: #757575;
}
@media (min-width: 551px) {
   .fast-wrapper-login {
       padding-left: 20%;
       padding-right: 20%;
       border: 1px solid #dfdfdf;
       border-radius: 5px;
                                /*width: 98%;*/
   }
}
</style>
{{/unless}}
<!------ FAST LOGIN BUTTON END ----------->
{{/if}}
```

4. Click “Save File.”

   > Note: The page might say “Save & apply file” instead of “Save File.” If that is the case, click “Save & apply file.”

5. Go to the Login page on your online store and make sure that the Fast Login button, which appears there now, looks good to you. (You may have to refresh the page a few times before the Fast Login button appears.)
   <img src="./images/image27.png"/>

:::info Check Styling

If you want to adjust how it looks, like make it bigger or less stretched out, follow the steps in the section, [Styling Fast Buttons](/developer-portal/for-developers/bigcommerce/customization/custom-styling/). Then go to the next section.

:::

## Installing Login Button to Create Account Page

1. In the theme files, click “templates” → “pages” → “auth” → “create-account.html.”
   <img src="./images/image15.png"/>
2. Use command-F to find the line:
   ```
   <h1 class="page-heading">{{lang 'create_account.heading' }}</h1>
   ```
3. **BELOW this line**, copy and paste the following code. When you do this, replace REPLACE-WITH-YOUR-APP-ID with your app ID.

   ```
   {{#if customer.name '===' 'Fast Testing'}}
   <!------ FAST LOGIN BUTTON START ----------->
   {{#unless customer}}
   <div class="fast-wrapper-create-account">
   <div class="fast-or-create-account">OR</div>
   <fast-login app_id="REPLACE-WITH-YOUR-APP-ID"/>
   </div>
   <style>
   .fast-wrapper-create-account {
   margin-left: auto;
   margin-right: auto;
   width: 100%;
   border-bottom: 1px solid #dfdfdf;
   padding-bottom: 40px;
   margin-bottom: 20px;
   padding-top: 20px;
   }
   .fast-or-create-account {
   position: relative;
   top: 100px;
   background: white;
   width: 40px;
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   color: #757575;
   }
   @media (min-width: 551px) {
   .fast-wrapper-create-account {
       padding-left: 20%;
       padding-right: 20%;
       border: 1px solid #dfdfdf;
       border-radius: 5px;
                                   /*width: 68.33%;*/
   }
   }
   </style>
   {{/unless}}
   <!------ FAST LOGIN BUTTON END ----------->
   {{/if}}
   ```

4. Click “Save File.”
   > Note: The page might say “Save & apply file” instead of “Save File.” If that is the case, click “Save & apply file.”
5. Go to the Create Account page on your online store and make sure that the Fast Login button, which appears there now, looks good to you. (You may have to refresh the page a few times before the Fast Login button appears.)
   <img src="./images/image36.png"/>

:::info Check Styling

If you want to adjust how it looks, like make it bigger or less stretched out, follow the steps in the section, [Styling Fast Buttons](/developer-portal/for-developers/bigcommerce/customization/custom-styling/). Then go to the next section.

:::