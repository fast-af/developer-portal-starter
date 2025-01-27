---
title: "Fast BigCommerce Docs: Production Mode"
description: Fast BigCommerce Production Mode
keywords: Fast BigCommerce Production Mode
---

# Install Step 4: Entering Production Mode

Once you feel comfortable with the look of the test buttons, you can let your Shoppers and the public see the buttons. To do this, you need to update each theme file you worked with during this process.

Go into each theme file described in the [previous step](/developer-portal/for-developers/bigcommerce/install/install-login-buttons/) and do the following:

1. Find the following line:

   ```javascript
       {{#if customer.name '===' 'Fast Testing'}}
   ```

2. Delete that line.
3. Find `{{/if}}` directly below the Fast button code and delete that line.
4. Click **Save File** or **Save & apply file** each time you finish editing a theme file.

:::success
That's it! Everyone can now see and use the Fast buttons.
:::
