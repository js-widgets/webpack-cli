## [2.1.2](https://github.com/js-widgets/webpack-cli/compare/v2.1.1...v2.1.2) (2022-01-24)


### Bug Fixes

* correct postcss configuration ([#7](https://github.com/js-widgets/webpack-cli/issues/7)) ([dc57f31](https://github.com/js-widgets/webpack-cli/commit/dc57f318d9f401b8b8f456cbb2af3dc80263afe2))

## [2.1.1](https://github.com/js-widgets/webpack-cli/compare/v2.1.0...v2.1.1) (2021-12-16)


### Bug Fixes

* trigger release ([7884880](https://github.com/js-widgets/webpack-cli/commit/78848808ee4d2b5ef9e8abf3bd5794f0a83a54ea))

# [2.1.0](https://github.com/js-widgets/webpack-cli/compare/v2.0.3...v2.1.0) (2021-12-13)


### Features

* support for external dependencies ([#3](https://github.com/js-widgets/webpack-cli/issues/3)) ([51bbc09](https://github.com/js-widgets/webpack-cli/commit/51bbc09f49d2ecbe9e6b88ea3418542c0064c914))

## [2.0.3](https://github.com/js-widgets/webpack-cli/compare/v2.0.2...v2.0.3) (2021-12-09)


### Bug Fixes

* ensure we export the default for the library ([a809b3d](https://github.com/js-widgets/webpack-cli/commit/a809b3d419d5a1554e5591f81587b8ef385a8dc6))

## [2.0.2](https://github.com/js-widgets/webpack-cli/compare/v2.0.1...v2.0.2) (2021-12-08)


### Bug Fixes

* use development source map for single files ([a91218a](https://github.com/js-widgets/webpack-cli/commit/a91218af5ce52893f752be591cfa30abf15a8b9c))
* use development source map for single files (II) ([b33654a](https://github.com/js-widgets/webpack-cli/commit/b33654ac77ee0e03025b232da89a3eeb226e605c))

## [2.0.1](https://github.com/js-widgets/webpack-cli/compare/v2.0.0...v2.0.1) (2021-12-08)


### Bug Fixes

* use full hash without dash ([aade5e3](https://github.com/js-widgets/webpack-cli/commit/aade5e38d98c2105bd5df77952af1d72a19996aa))

# [2.0.0](https://github.com/js-widgets/webpack-cli/compare/v1.3.0...v2.0.0) (2021-12-07)


### Features

* webpack improvements ([#4](https://github.com/js-widgets/webpack-cli/issues/4)) ([5253c45](https://github.com/js-widgets/webpack-cli/commit/5253c45435511ffc96e06a7a52ec3c445db4980c))


### BREAKING CHANGES

* It also leverages webpack to create the `window.renderMyWidget = ...`. One only needs to export a function from now on. This is a breaking change, since render files need an export now.

# [1.3.0](https://github.com/js-widgets/webpack-cli/compare/v1.2.0...v1.3.0) (2021-12-01)


### Features

* add support for assets URL ([#2](https://github.com/js-widgets/webpack-cli/issues/2)) ([ea87803](https://github.com/js-widgets/webpack-cli/commit/ea87803f97e0d3d1be65ccdb37f75c3ed032beb9))

# [1.2.0](https://github.com/js-widgets/webpack-cli/compare/v1.1.5...v1.2.0) (2021-11-18)


### Features

* allow some environment variables ([#1](https://github.com/js-widgets/webpack-cli/issues/1)) ([8c5cf44](https://github.com/js-widgets/webpack-cli/commit/8c5cf44d48ab4a6f9d0f8d79cfcfa713e9190c02))

## [1.1.5](https://github.com/js-widgets/webpack-cli/compare/v1.1.4...v1.1.5) (2021-09-23)


### Bug Fixes

* add shebang for node execution ([c423c26](https://github.com/js-widgets/webpack-cli/commit/c423c26458d53159cb4c99f2f1d660627061ff57))
* revert remove changelog ([23f4c40](https://github.com/js-widgets/webpack-cli/commit/23f4c401c71657b00bc7c22121e5a249f4290656))

## [1.1.1](https://github.com/js-widgets/webpack-cli/compare/v1.1.0...v1.1.1) (2021-09-17)


### Bug Fixes

* use the correct JS file ([333e444](https://github.com/js-widgets/webpack-cli/commit/333e444f90ed364f3e8aa37d2339925eb6ba5ef1))

# [1.1.0](https://github.com/js-widgets/webpack-cli/compare/v1.0.0...v1.1.0) (2021-09-17)


### Features

* add coverage badge to README.md ([378939e](https://github.com/js-widgets/webpack-cli/commit/378939e8395793e6914ca53c8a788fe7ca46aa9b))

# 1.0.0 (2021-09-17)


### Features

* initial commit ([f067989](https://github.com/js-widgets/webpack-cli/commit/f067989c80b442148d1312ef41df664ed214b3a8))
