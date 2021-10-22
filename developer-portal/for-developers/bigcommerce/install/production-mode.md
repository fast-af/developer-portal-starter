---
title: Fast BigCommerce Docs
description: Fast BigCommerce Production Mode
keywords: Fast BigCommerce Production Mode
---

# Entering Production Mode

Once you feel comfortable with the look of the test buttons, you can let your shoppers and the public see the buttons. To do this, you need to update each theme file you worked with during this process.

Go into **each theme file** described in the [previous step](/developer-portal/for-developers/bigcommerce/install/steps/) and do the following:

1. Use command-F to find where it says

   ```
       {{#if customer.name '===' 'Fast Testing'}}
   ```

2. delete that line.
3. Use command-F to find where it says `{{/if}}` directly below the Fast button code and delete that line.
4. Click “Save File” or “Save & apply file” each time you finish editing each theme file.

Now everyone can see the Fast Buttons.