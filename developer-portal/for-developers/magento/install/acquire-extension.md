---
title: "Fast Magento Docs: Acquiring Fast Extension"
description: Acquiring the Fast Magento Extension
keywords: fast magento extension
---

# Install Step 1: Acquiring the Fast Magento Extension

Using [Composer](https://getcomposer.org/), in your Magento webroot, issue the following commands:

```bash
composer require fast/module-checkout
php bin/magento module:enable Fast_Checkout
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy
```
