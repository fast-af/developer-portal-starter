---
title: "Fast Magento Docs: Specifying eligible products."
description: Getting Started with Fast on Magento! Specify Fast Eligible Product(s)
keywords: install fast magento, specify fast eligible products
---

# Install step 3: Specify Fast eligible product(s)

By default, products in your Magento inventory list have the Fast Checkout button disabled. This is a configurable product attribute intended to avoid accidentally enabling Fast for products. You can enable Fast Checkout for products individually or in bulk, depending on which products you’d like to enable for Fast Checkout.

The following video shows how to specify Fast products in Magento:

<iframe
width="560"
height="315"
src="https://www.youtube-nocookie.com/embed/1sqQlrXwaQs?start=97&end=139"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen>
</iframe>

### Individual product Fast Checkout enabling
1. To enable the Fast Checkout button for individual products, navigate to the products list view at **Catalog -> Products**.
2. Click the product name to navigate to the product attributes page.
3. At the bottom of the list, toggle **Show Fast Button** to Yes.\
<img alt="product options page" src="./images/image2.png"/>
4. Click **Save**.

## Bulk product Fast Checkout enabling

1. To bulk enable the Fast Checkout button, navigate to the products list view at **Catalog -> Products**.
2. Select the products in the inventory list and click **Actions -> Update products**.\
<img alt="update products in magento" width="50%" src="./images/magento-update-attributes.png"/>
3. In the list of product attributes, change **Show Fast button** to Yes.\
<img alt="show fast button input set to yes" width="50%" src="./images/magento-show-fast-button.png"/>

:::info Carts with Fast-disabled products
If a customer has a cart that contains one or more Fast-disabled products, the Fast Checkout button will not appear for them on the cart or mini-cart pages.
:::
