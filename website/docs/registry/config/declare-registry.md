---
sidebar_position: 1
---

# Declare the Registry

In order to get started you need to make your repository compatible with the
widget registry. For this you will need to create a special folder (once for the
repository) called `.widgetRegistry`. This folder should contain a `main.js`
file that holds configuration and metadata for the whole registry.

An example `.widgetRegistry/main.js` could look like:

```js title=".widgetRegistry/main.js"
module.exports = {
  register: ['../src/components/**/*.widget.js'],
  // Use directoryUrl if you need to serve the compiled JS apps from a different
  // place than the location of the registry.json.
  // directoryUrl: 'https://custom.example.org/widgets',
  // directoryUrl: 'assets/js/apps',
  webpackFinal: (config) => {
    // This repository contains React components, we should add the preset to
    // the default webpack config.
    let presets = config.module.rules[2].use.options.presets;
    presets.push('@babel/preset-react');

    // This repository is not using TypeScript. Opt out.
    presets = presets.filter((preset) => preset !== '@babel/preset-typescript');
    config.module.rules[2].use.options.presets = presets;
    config.module.rules = config.module.rules.filter(
      (rule) => rule.loader !== 'ts-loader'
    );
    return config;
  },
  allExternalPeerDependencies: {
    lodash: {
      src: 'https://cdn.jsdelivr.net/npm/lodash@4/lodash.min.js',
      external: '_',
    },
  }
}
```

Options:

- [`register`](/docs/registry/config/options/register)
- [`directoryUrl`](/docs/registry/config/options/directoryUrl)
- [`webpackFinal`](/docs/registry/config/options/webpackFinal)
- [`allExternalPeerDependencies`](/docs/registry/config/options/allExternalPeerDependencies)
