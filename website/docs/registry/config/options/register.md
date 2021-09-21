---
sidebar_position: 1
title: register
---
# `register`: `string[]`
This property holds the paths with wildcards on where to find the widget [definition files](../../widget-definition).
The presence of a widget definition file will cause a JS component to be compiled as a stand alone JS application, and
an entry in the `registry.json`.

It is highly recommended providing a path that will exclude the `node_modules` directory for performance reasons when
searching for widget definition files.

## Examples

- `['../src/components/**/*.widget.js']`
- `['../src/components/**/*.widget.js', '../src/pages/**/*.widget.js']`
