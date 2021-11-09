:::info Tip

You must have WordPress admin access in order to install and remove plugins.

:::

1. **Log in to the admin dashboard of your WordPress site.**

   > The url for this is usually `https://yourwebsite.com/wp-admin`

2. **Click Plugins -> Add New** in the left sidebar of your WordPress admin dashboard to visit the Wordpress plugin directory.

   ![Visit Wordpress Plugin Directory](/developer-portal/for-developers/woocommerce/wordpress-plugin/images/wp-visit-plugin-directory.png)

3. **Search the plugin directory for "Fast Checkout" or "Fast Checkout for WooCommerce"**.

   ![Searching for Fast Checkout for WooCommerce](/developer-portal/for-developers/woocommerce/wordpress-plugin/images/wp-add-plugins-fast-checkout.png)

4. **Click Activate**. Essentially this turns the plugin code functionality "on."

   ![Activate plugin](/developer-portal/for-developers/woocommerce/wordpress-plugin/images/wp-activate-plugin.png)

:::info TIP: Managing Plugin Updates

When you make plugin changes (e.g. updates, removals, etc.) you may need to manually turn test mode off again. **Navigate to Fast Checkout settings. Scroll to the bottom and ensure "Enable test mode" is unchecked**.

> ex: `http://yourwebsite.com/wp-admin/admin.php?page=fast` > ![Ensure test mode is disabled](/developer-portal/for-developers/woocommerce/wordpress-plugin/images/test-mode-tab.png)

:::

:::info TIP: Troubleshooting Plugin Issues

You can deactivate plugins to troubleshoot website issues. Slowly deactivate them one-by-one, each time checking to see if the issue persists. If deactivating a plugin resolves an issue, visit the plugin's changelog or website for relevant updates. Also ensure all of your plugins are always up-to-date.

:::