---
sidebar_position: 2
title: directoryUrl
---
# `directoryUrl`: `string|undefined`

Use `directoryUrl` if you need to serve the compiled JS apps from a different place than the location of the
`registry.json`. This particularly useful when you want to serve the JS application from a CDN. It is also useful when
you need to change the location where the applications live relative to the `registry.json`.

If left empty the CLI will assume that the JS apps will be uploaded in a folder called `widgets` alongside with the
`registry.json` file. This is the way `@js-widgets/webpack-cli` produces the assets, if you upload the output directory
directly, you can leave `directoryUrl` empty.

## Examples
  - `'https://custom.cdn.fast/widgets'`: This will search for widgets in _https://custom.cdn.fast/widgets/[widget-shortcode]/js/{my-file.js,other-stuff.js}_ regardless of where the _registry.json_ lives.
  - `'assets/js/apps'`: If the registry is in _https://assets.example.org/@e0ipso/registry.json_, the JS apps will be requested from _https://assets.example.org/@e0ipso/assets/js/apps/[widget-shortcode]/..._.
