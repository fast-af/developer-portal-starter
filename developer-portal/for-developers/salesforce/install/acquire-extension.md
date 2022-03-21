---
title: "Fast Salesforce Docs: Acquiring Fast Extension"
description: Getting Started with Fast on Salesforce Commerce Cloud.
keywords: fast sfcc extension
---

# Install Step 1: Acquiring the Fast SFCC SFRA cartridge

There are two options available for obtaining the SFCC cartridge:

* Download the Fast Salesforce Reference Architecture (SFRA) cartridge as a ZIP file from the the [Commerce Cloud Partner Marketplace](https://www.salesforce.com/products/commerce-cloud/partner-marketplace/partners/fast-checkout/).
* [Fast developer cartridge on GitHub (latest version)](https://github.com/fast-af/sfcc-integration/) - our in-development version of the Fast cartridge with the latest features (e.g. for site admins who want to try development builds in Sandbox).\
Prior to downloading the cartridge from GitHub, you will need:
    * Salesforce Commerce Cloud credentials to access the [Salesforce Commerce Cloud GitHub organization](https://github.com/orgs/SalesforceCommerceCloud/sso/sign_up).
    * An existing [GitHub account](https://github.com/join).

:::attention Custom cartridge ZIP file
If needed, a Fast team member can also provide the cartridge as a ZIP file incorporating the [additional details you provided prior to starting the installation process](../pre-install/requirements.md).
:::

The following video section demonstrates how to acquire the Fast SFCC cartridge and add it to your project:

<iframe
width="560"
height="315"
src="https://www.youtube-nocookie.com/embed/MVnZudopLMI?start=0&end=178"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen>
</iframe>

## Upload the cartridge to your storefront

Once you have the cartridge downloaded, you will need to upload it to your SFRA storefront. This can be accomplished in several ways, including the following options:

* [Using the SFRAA command-line upload tool](#upload-option-1-using-the-sfra-command-line-upload-tool)
* [Using the Prophet Debugger VS Code extension](#upload-option-2-using-the-prophet-debugger-visual-studio-code-extension)
* [Using Salesforce UX Studio](#upload-option-3-using-salesforce-ux-studio)

### Upload option 1: Using the SFRA command-line upload tool

This method will require setting up a `dw.json` file to connect to your site.

Please follow the steps in the [SFRA command-line upload tool documentation](https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/content/b2c_commerce/topics/sfra/b2c_adding_custom_cartridges.html) to get started.

```json dw.json for SFRA command-line upload tool
{
  "hostname": "yoursandbox-inside-your-realm.demandware.net",
  "username": "YOUR_BUSINESS_MANAGER_USERNAME",
  "password": "YOUR_BUSINESS_MANAGER_PASSWORD",
  "code-version": "version1"
}
```

### Upload option 2: Using the Prophet Debugger Visual Studio Code extension

1. Add the [Prophet Debugger extension](https://marketplace.visualstudio.com/items?itemName=SqrTT.prophet) to your Visual Studio (VS) Code.
2. Open the Fast cartridge you downloaded in VS Code and create a `dw.json` file in the `int_fast_sfra` folder (the file path should be `int_fast_sfra/dw.json`)

```json dw.json for Prophet Debugger extension
{
  "hostname": "yoursandbox-inside-your-realm.demandware.net",
  "username": "YOUR_BUSINESS_MANAGER_USERNAME",
  "password": "YOUR_BUSINESS_MANAGER_PASSWORD",
  "code-version": "version1"
}
```

3. Navigate to the Prophet Debugger extension in the VS Code sidebar, and locate the _CARTRIDGES_ section. Click on the `Prophet: Clean Project / Upload all` icon.
   ![Prophet Upload Cartridges](./images/prophet_upload.png '#width=70%')
   :::attention Retain extra cartridges
   If you receive a popup that says _Your popup has extra cartridges... what would you like to do?_, select _LEAVE ALL_ or _LEAVE ALL ALWAYS_ from the available options. The extra cartridges are necessary for the SFCC storefront.

   ![Prophet Leave All Popup](./images/prophet_leave_all.png '#width=70%')
   :::

### Upload Option 3: Using Salesforce UX Studio

You can also use [Salesforce UX Studio](https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/LegacyDevDoc/UploadCartridges.html) (legacy software) to upload the cartridge.

- Navigate via **File > Import > General > Existing Projects** into your Workspace.

- Browse to the location of the compressed cartridge file.

- Confirm subsequent prompts to finish the upload.

## Verify the cartridge upload in SFCC

To verify that the cartridge was successfully uploaded in SFCC...

1. In the SFCC Business Manager, navigate to **Administration > Code deployment**.
2. In **Manage Code Versions**, you will see the name of your deployment and the time it was successfully deployed.  
