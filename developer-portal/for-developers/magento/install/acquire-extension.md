---
title: "Fast Magento Docs: Acquiring Fast Module"
description: Acquiring the Fast Module for Magento
keywords: fast magento extension
---

# Install Step 1: Acquiring the Fast Module for Magento

The latest version of the Fast Module for Magento is publicly available via composer or from [Fast's github repo](https://github.com/fast-af/magento2).



## Install with Composer


Using [Composer](https://getcomposer.org/), in your Magento webroot, **issue the following commands**:

```bash
composer require fast-af/module-checkout
php bin/magento module:enable Fast_Checkout
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy
```

## Install via github

Download [the code](https://github.com/fast-af/magento2) and install it on your Magento instance in `app/code/Fast/Checkout` then run

```bash
php bin/magento module:enable Fast_Checkout
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy
```
