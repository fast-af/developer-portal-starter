# Fast External Docs

This is our [redoc.ly](https://redoc.ly/) app that contains all external documentation for:

- "For Shoppers"
- "For Sellers"
- "For Developers"

## Prerequisites

- [node.js >= 12.22.6 and <= 16.x](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/)

## Start Development Server

```bash
yarn start
```

Note: search isn't functional in the development environment.

## Updating redoc.ly

### Update package.json

Find the `@redocly/developer-portal` in the `@dependencies` section of the `package.json` file.

```json
  "dependencies": {
    "@redocly/developer-portal": "^1.1.0-beta.34"
  }
```

Update the version there (note, this may be the most current version already).

Check the [published versions on NPM](https://www.npmjs.com/package/@redocly/developer-portal).

```json
  "dependencies": {
    "@redocly/developer-portal": "^1.1.0-beta.81"
  }
```

Save the file.

### Install packages

```bash
yarn install
```

This command will upgrade to the newer version of the developer portal.

### Upgrade Troubleshooting

If you hit a problem with the installation, you may want to try to delete your `yarn.lock` file and then `yarn install` again.
Some dependencies are pinned based on the underlying OS or node version.

```bash
rm yarn.lock
rm -rf node_modules
yarn install
yarn clean
```

Still stuck? Contact us. We're happy to help.

## Troubleshooting

### Loading issues

redocl.y relies on heavily on caching. If you made any changes that are not showing or broke the build run this:

```bash
yarn clean
```

## Resources

- [online redoc.ly documentation](https://redoc.ly/docs/developer-portal/introduction/).
