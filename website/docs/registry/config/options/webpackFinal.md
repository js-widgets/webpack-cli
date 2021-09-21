---
sidebar_position: 3
title: webpackFinal
---
# `webpackFinal`: `function|undefined`
The `@js-widgets/webpack-cli` comes with a [default webpack
configuration](https://github.com/js-widgets/webpack-cli/blob/main/src/defaultConfig/webpack.config.js). This function 
takes this defaults and applies modifications to it suited for this particular project.

Every project will use different webpack configurations because it will use different technologies. The good news is
that it is likely that your component library (Storybook, Fractal, ...) will already have this function in order to
render the components in the library. You should leverage it!

In particular Storybook [uses the same function](https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config)!

Running the CLI in debug mode will print the composed webpack configuration. You can use that to see how to make the
necessary changes.

## Examples

```js
(config) => {
  config.module.rules[2].use.options.presets.push('@babel/preset-react');
  return config;
}
```
