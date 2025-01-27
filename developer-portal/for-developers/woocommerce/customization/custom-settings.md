---
title: "Fast WooCommerce Docs: Custom Settings"
description: Getting Started with Fast on WooCommerce! Custom Settings
keywords: Fast WooCommerce Custom Settings
---

# Checkout for WooCommerce Custom Settings

The Fast Checkout for WooCommerce plugin has several settings to configure your Fast Checkout installation. When you click the Fast Checkout plugin from the left panel of the WordPress admin dashboard, Fast Settings will be divided into several tabs as outlined below:

- [App Info](#app-info-tab)
- [Styles](#styles-tab)
- [Options](#options-tab)
- [Test Mode](#test-mode-tab)
- [Support](#support-tab)
- [Status](#status-tab)
- [Third Party Plugins](#third-party-plugins-tab)

The direct URL to your plugin settings should look something like:
`http://yourwebsite.com/wp-admin/admin.php?page=fast`

## App Info Tab

![App Info Tab in Your WooCommerce Dashboard](../../../images/woocommerce/app-info-tab.png)

### App ID

![App ID Setting in App Info Tab](images/woocommerce-settings-app-id-in-app-info-tab.png)

The App Info tab contains the **Fast App ID**, which should have been set during the [plugin installation process](/developer-portal/for-developers/woocommerce/install/install-plugin#connect-your-fast-app-id-to-the-fast-checkout-plugin) of Seller onboarding.

## Styles Tab

![Styles Tab in Your WooCommerce Dashboard](../../../images/woocommerce/styles-tab.png)

### Load Button Styles

![Load Button Styles Checkbox in Your WooCommerce Dashboard](images/woocommerce-settings-load-styles-checkbox.png)

This option is checked by default, and it tells the plugin to load styles as defined in the Styles tab. Uncheck the box if you do not wish to load these styles, and instead would prefer to style the Fast buttons another way.

### Custom Button Styles

![Custom Button Styles for Fast Checkout and Login Buttons in Your WooCommerce Dashboard](images/woocommerce-settings-custom-button-styles.png)

The Styles tab also provides the ability to render custom button styles for Fast Checkout buttons on WooCommerce product detail pages (PDPs), cart pages, mini cart widgets, and checkout pages. You can also define custom buttton styles for Fast login buttons. For more details about custom styling, please refer to the dedicated [Custom Button Styling page](/developer-portal/for-developers/woocommerce/customization/custom-checkout-button-styling).

## Options Tab

![Options Tab in Your WooCommerce Dashboard](../../../images/woocommerce/options-tab.png)

### Hiding Fast Button

**You might have products in your store where it wouldn’t make sense for customers to use one-click checkout,** like a subscription-based purchase (Fast does not currently support subscription-based purchases) or a customized product.

If, for any specific products, you want to hide the Fast button"

1.  Go to the _Options_ tab.
2.  For each product where you don’t want one-click checkout, type that product name into the _Hide Buttons for these Products_ textbox. Once you begin typing, the system will autocomplete the rest.
3.  Add in as many products as you want.
4.  Click **Save Changes**.

![Hide Buttons Setting in Your WooCommerce Dashboard](images/woocommerce-settings-hide-buttons.png)

### Redirects

Normally, after a Shopper checks out using the Fast Checkout button, they are not redirected to any particular page. If you want Shoppers to be redirected to a specific page after they use the Fast button:

1. Go to the **Options tab**.
2. Enter which page you want customers to be redirected to in the _Checkout Redirect Page_ textbox. For example, if you want Shoppers to be brought to an order confirmation page after they use the Fast button, type in "Order Confirmation page" here.
3. Click **Save Changes**.

![Checkout Redirect Page Selections in Your WooCommerce Dashboard](images/woocommerce-settings-redirect.png)

### Display Fast Login Button in Footer

:::info Recommendation
We recommend you uncheck **Display Fast Login Button in Footer** under the _Options_ tab because this can cause page layout issues.
:::

However, if you really want logged out users to see the Fast Login Button in the page footer (and you can do style the button to avoid layout issues), then keep this checked.

To adjust this styling, follow the steps in the dedicated [Custom Button Styling page](/developer-portal/for-developers/woocommerce/customization/custom-checkout-button-styling), and apply the styling changes to the "Login button style" textbox in WooCommerce.

![Display Login in Footer Option in Your WooCommerce Dashboard](images/woocommerce-settings-login-in-footer.png)

## Test Mode Tab

![Test Mode Tab in Your WooCommerce Dashboard](../../../images/woocommerce/test-mode-tab.png)

The Test Mode tab allows you to enable or disable Test Mode (to ensure that Fast Checkout buttons are only visible to store admins), Debug Mode (to temporarily log additional information while debugging site issues), or Multicurrency Support (e.g. if multicurrency support is not needed for your site or is provided by a third-party multicurrency plugin).

| Option                             | Description                                                                                                                                                                                                                                                                                     |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Test Mode**                      | If you want Shoppers to see the changes you made to the online store’s styling, uncheck "Enable test mode" and then click "Save Changes." Now, everyone can see the Fast buttons.                                                                                                               |
| **Debug Mode**                     | Enables you to log messages within the Fast plugin. If you are a developer looking to troubleshoot issues, you can check the debug mode checkbox to do that. If you check this, click "Save Changes" afterwards.                                                                                |
| **Disabled Multicurrency Support** | Can be used to disable multicurrency support. This is only necessary if you do not need to support multicurrency in the Fast checkout process and the store uses a third-party multicurrency plugin to handle multicurrency in WooCommerce. If you check this, click "Save Changes" afterwards. |

:::info Keep Test Mode Enabled Until Ready to Go Live

Test Mode should be have been enabled by default during the [initial plugin installation process](/developer-portal/for-developers/woocommerce/install/test-mode) and should stay enabled until you have fully configured Fast Checkout buttons (including styling) to work as desired with your store. Disabling Test Mode will enable Fast Checkout and make Fast Checkout buttons visible to customers.

:::

## Support Tab

The Support tab provides basic documentation about using the Fast Checkout for WooCommerce plugin, as well as links to external resources (e.g. Fast Seller onboarding, the Fast Help site, WooCommerce developer documentation, etc.).

## Status Tab

![Status Tab in Your WooCommerce Dashboard](../../../images/woocommerce/status-tab.png)

The Status tab will provide a quick overview of the status of the Fast Checkout plugin, namely:

- if the Fast App ID provided in the [App Info tab](#app-info-tab) is valid
- if the plugin is currently being used in Test Mode or Debug Mode as set in the [Test Mode tab](#test-mode-tab)
- if all necessary [webhooks have been enabled](/developer-portal/for-developers/woocommerce/pre-install/verify-webhooks#manually-add-missing-webhooks) from the WooCommerce store's advanced settings.

## Third Party Plugins Tab

The _Third Party Plugins_ tab should only be visible if your WooCommerce store has a supported third party plugin installed.
