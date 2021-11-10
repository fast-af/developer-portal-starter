---
title: "Fast WooCommerce Docs: Migrating to New Plugin Directory Version (for Early Sellers)"
description: Migrating Fast to New Plugin Directory Version (for Early Sellers)
keywords: Migrating Fast to New Plugin Directory Version (Early Sellers)

enableToc: true
redirectFrom:
  - /developer-portal/woocommerce-migrate-plugin-directory/
---

# Migrating Fast to New Plugin Directory Version (for Early Sellers)

**Fast Checkout for WooCommerce is officially live in the WordPress plugin directory!**

[**View our plugin in the plugin directory →**](https://wordpress.org/plugins/fast-checkout-for-woocommerce/)

Our early sellers were onboarded by our customer success team when our plugin was not active in the WordPress plugin directory yet. Managing your plugins through the plugin directory makes it much easier to keep up-to-date. It's imperative that WordPress stores are maintained and plugins are updated frequently.

This will walk you through how to uninstall the version our team installed, and install the plugin directory version, making it easier to keep your plugin up-to-date.

## Requirements

You must have WordPress admin access.

## Steps to Migrate to the plugin directory version

:::info heads up

**Fast Checkout will be temporarily unavailable while you are completing these steps.** Have no fear, your plugin settings will remain intact as those are stored in your database, not the plugin code itself.

:::

### Deactivate Previous Plugin Version

:::info Tip

You must have WordPress admin access in order to install and remove plugins.

:::

1. **Log in to the admin side of your WordPress site.**

   > The url for this is usually `https://yourwebsite.com/wp-admin`

2. **Click on Plugins in your admin dashboard menu and locate Fast checkout**.

   > ex: `https://yourwebsite.com/wp-admin/plugins.php? `

3. **Select the previous plugin by clicking the checkbox to the left of the plugin's name ("Fast Checkout for WooCommerce" in image below)**.

   ![Select Fast Checkout plugin](images/select-fast-checkout-plugin.png)

4. Scroll to the very top of the list (or the bottom) and click **Bulk Actions -> Deactivate**.

   ![Deactivate Fast Checkout plugin](images/deactivate-fast-checkout-plugin.png)

5. Now that the plugin is deactivated, it's time to **delete the plugin**.

   - You can either **click "Delete" under the plugin name**, or follow the same checkbox method used in the previous step, choosing **Bulk Actions -> Delete**.

   :::info Plugin Settings Retained

   The plugin deactivation and deletion process should not affect your existing plugin settings. Your plugin settings will be retained because they are stored in your database, not within the plugin code itself.

   :::

   ![Delete Fast Checkout plugin](images/delete-fast-checkout-plugin.png)

### Activate Wordpress Plugin Directory Version

<embed src="/reusables/for-developers/_platform_woocommerce_wordpress_plugin_initial_install.md" />
