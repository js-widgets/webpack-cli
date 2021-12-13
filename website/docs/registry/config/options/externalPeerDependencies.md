---
title: allExternalPeerDependencies
sidebar_position: 4 
---

# `allExternalPeerDependencies`: `Object`

The actual TS type for this property is:

```typescript
Record<string, { src: string; external: External; }>
```

[Externals](https://webpack.js.org/configuration/externals) are a technique in Webpack to defer bundling certain dependencies with the rest of the widget. This is useful for dependencies that are very common. This way you can have five widgets embedded in a single page, and download, parse and execute ReactDOM (for instance) only once.

To be successful this technique requires the CMS and the widget to have matching configuration. To this end, the compiler, internally, will do two things:

  - Tell Webpack to not include the listed dependencies in the JS bundle for the widget.
  - Leave some additional configuration in the `registry.json`. Later on, the CMS will ingest this, and will know to add the dependency to the page whenever this widget is embedded.

The registry configuration will declare all the dependencies that may be externalized. Then each [widget definition file](../../widget-definition) will choose which ones are applicable to each widget.

For each dependency you will need to provide:

  - The name of the module for the key of the object. This is the name from the import (`lodash`): `import _ from 'lodash'`.
  - The configuration for the external in Webpack. This is _typically_ the name of the variable (`_`): `import _ from 'lodash'`. Refer to the [externals documentation for Webpack](https://webpack.js.org/configuration/externals) for more nuanced information and examples.
  - The CDN url from where the CMS will load this dependency.

:::note
`@js-widgets/webpack-cli` will set `externalsType` to `'window'`, and `externalsPresets` to `{ webAsync: true }` internally. This may have an effect depending on what configuration you set on `external`.
:::

## Examples

```
{
  lodash: {
    src: 'https://cdn.jsdelivr.net/npm/lodash@4/lodash.min.js',
    external: '_',
  },
}
```
