## [3.0.2](https://github.com/js-widgets/webpack-cli/compare/v3.0.1...v3.0.2) (2022-10-29)


### Bug Fixes

* **deps:** update docusaurus monorepo to v2.2.0 ([112e323](https://github.com/js-widgets/webpack-cli/commit/112e3231009dd4aed9f2afb672ff44fc688fe5fe))

## [3.0.1](https://github.com/js-widgets/webpack-cli/compare/v3.0.0...v3.0.1) (2022-10-28)


### Bug Fixes

* **deps:** update dependency @svgr/webpack to v6.5.1 ([34839d0](https://github.com/js-widgets/webpack-cli/commit/34839d0040fd5a03b9a2d134b6151073de67c2a4))

# [3.0.0](https://github.com/js-widgets/webpack-cli/compare/v2.3.4...v3.0.0) (2022-10-20)


### Features

* allow altering all configuration ([#115](https://github.com/js-widgets/webpack-cli/issues/115)) ([ccea0f5](https://github.com/js-widgets/webpack-cli/commit/ccea0f518b358f27a420739b05830d46027eb3d0)), closes [#112](https://github.com/js-widgets/webpack-cli/issues/112) [#113](https://github.com/js-widgets/webpack-cli/issues/113) [#114](https://github.com/js-widgets/webpack-cli/issues/114)


### BREAKING CHANGES

* webpackFinal from user land will receive a configuration object with additional autocomputed properties.
* --widget-definitions CLI option now interprets paths from CWD and not as if they came from the config file.

## [2.3.4](https://github.com/js-widgets/webpack-cli/compare/v2.3.3...v2.3.4) (2022-10-19)


### Bug Fixes

* **deps:** update dependency webpack to ^5.74.0 ([4c3290e](https://github.com/js-widgets/webpack-cli/commit/4c3290e7cbf3983bb62acf803076faf920a5fc23))

## [2.3.3](https://github.com/js-widgets/webpack-cli/compare/v2.3.2...v2.3.3) (2022-10-19)


### Bug Fixes

* **deps:** update dependency mini-css-extract-plugin to ^2.6.1 ([51adf7f](https://github.com/js-widgets/webpack-cli/commit/51adf7f51c1736e4c9a541d15994acf798ce3739))

## [2.3.2](https://github.com/js-widgets/webpack-cli/compare/v2.3.1...v2.3.2) (2022-10-18)


### Bug Fixes

* **deps:** update dependency commander to ^9.4.1 ([c8cb045](https://github.com/js-widgets/webpack-cli/commit/c8cb045874281b78f12210eda8c44e2e8e965ccd))

## [2.3.1](https://github.com/js-widgets/webpack-cli/compare/v2.3.0...v2.3.1) (2022-10-18)


### Bug Fixes

* **deps:** update dependency ajv to ^8.11.0 ([d875f6c](https://github.com/js-widgets/webpack-cli/commit/d875f6cfa32dd08ad04a8d4a46c30dab0d5291be))

# [2.3.0](https://github.com/js-widgets/webpack-cli/compare/v2.2.4...v2.3.0) (2022-10-18)


### Features

* pass widgets to compile via CLI ([#110](https://github.com/js-widgets/webpack-cli/issues/110)) ([6ce2265](https://github.com/js-widgets/webpack-cli/commit/6ce22659c295add836d3c640a074a55c1a2c56a4)), closes [#107](https://github.com/js-widgets/webpack-cli/issues/107)

## [2.2.4](https://github.com/js-widgets/webpack-cli/compare/v2.2.3...v2.2.4) (2022-10-18)


### Bug Fixes

* **deps:** update dependency semver to ^7.3.8 ([6ab973b](https://github.com/js-widgets/webpack-cli/commit/6ab973b3a8da5c8e1c382ab64645fbbb0ab0795b))

## [2.2.3](https://github.com/js-widgets/webpack-cli/compare/v2.2.2...v2.2.3) (2022-10-18)


### Bug Fixes

* **deps:** update dependency @svgr/webpack to v6.5.0 ([#94](https://github.com/js-widgets/webpack-cli/issues/94)) ([93b55c7](https://github.com/js-widgets/webpack-cli/commit/93b55c720e5f423b2d6e38e16680538bbacbd365))

## [2.2.2](https://github.com/js-widgets/webpack-cli/compare/v2.2.1...v2.2.2) (2022-10-18)


### Bug Fixes

* **deps:** update dependency glob to ^8.0.3 ([3e1ca04](https://github.com/js-widgets/webpack-cli/commit/3e1ca04d0c4ba35e54a0aded58b7b2e1badc8c98))

## [2.2.1](https://github.com/js-widgets/webpack-cli/compare/v2.2.0...v2.2.1) (2022-10-13)


### Bug Fixes

* generate fully qualified URL for thumbnail ([#99](https://github.com/js-widgets/webpack-cli/issues/99)) ([6da6fc7](https://github.com/js-widgets/webpack-cli/commit/6da6fc771c865076d7f6156be94252e656c30e50)), closes [#98](https://github.com/js-widgets/webpack-cli/issues/98)

# [2.2.0](https://github.com/js-widgets/webpack-cli/compare/v2.1.15...v2.2.0) (2022-10-12)


### Bug Fixes

* correct the widget definition type ([#76](https://github.com/js-widgets/webpack-cli/issues/76)) ([33d2490](https://github.com/js-widgets/webpack-cli/commit/33d2490771756cf0a9d855a8e9440f1a881ccd75))
* **deps:** update dependency @svgr/webpack to v6.3.1 ([#72](https://github.com/js-widgets/webpack-cli/issues/72)) ([4be59ae](https://github.com/js-widgets/webpack-cli/commit/4be59aed1aa8efc560cfa5515b8d6c022662a8d9))
* **deps:** update docusaurus monorepo to v2.0.1 ([#74](https://github.com/js-widgets/webpack-cli/issues/74)) ([fc04ed6](https://github.com/js-widgets/webpack-cli/commit/fc04ed63903faf70accacf444ef30f29437d4a1b))
* **deps:** update docusaurus monorepo to v2.1.0 ([#87](https://github.com/js-widgets/webpack-cli/issues/87)) ([c80ec95](https://github.com/js-widgets/webpack-cli/commit/c80ec95c03b81cab43c8a0f13986b62f21e7a8ab))


### Features

* add support for previews ([#96](https://github.com/js-widgets/webpack-cli/issues/96)) ([c305da9](https://github.com/js-widgets/webpack-cli/commit/c305da955a7857df2a84541bc5919c3a236d09ba)), closes [#95](https://github.com/js-widgets/webpack-cli/issues/95)

## [2.1.15](https://github.com/js-widgets/webpack-cli/compare/v2.1.14...v2.1.15) (2022-07-19)


### Bug Fixes

* **deps:** update dependency @svgr/webpack to v6.3.0 ([#70](https://github.com/js-widgets/webpack-cli/issues/70)) ([036dc3e](https://github.com/js-widgets/webpack-cli/commit/036dc3e84c48d5a4412b120e9a605cd3ebd2c43f))

## [2.1.14](https://github.com/js-widgets/webpack-cli/compare/v2.1.13...v2.1.14) (2022-07-18)


### Bug Fixes

* **deps:** update docusaurus monorepo to v2.0.0-rc.1 ([#67](https://github.com/js-widgets/webpack-cli/issues/67)) ([2bfd65c](https://github.com/js-widgets/webpack-cli/commit/2bfd65c2600205fd9b265704d5c35522bc2355a2))

## [2.1.13](https://github.com/js-widgets/webpack-cli/compare/v2.1.12...v2.1.13) (2022-07-14)


### Bug Fixes

* **deps:** update dependency clsx to v1.2.1 ([#62](https://github.com/js-widgets/webpack-cli/issues/62)) ([9cdf791](https://github.com/js-widgets/webpack-cli/commit/9cdf791978b48b1e0d64c4e9590917634a48a83e))
* **deps:** update docusaurus monorepo to v2.0.0-beta.22 ([#64](https://github.com/js-widgets/webpack-cli/issues/64)) ([55549c3](https://github.com/js-widgets/webpack-cli/commit/55549c3b31d19f7c8b8dd4a1ee509757ba287899))

## [2.1.12](https://github.com/js-widgets/webpack-cli/compare/v2.1.11...v2.1.12) (2022-07-04)


### Bug Fixes

* **deps:** update dependency clsx to v1.2.0 ([#60](https://github.com/js-widgets/webpack-cli/issues/60)) ([706835d](https://github.com/js-widgets/webpack-cli/commit/706835d592c372186c49f64b0a72cc1f27018731))
* **deps:** update dependency prism-react-renderer to v1.3.5 ([#58](https://github.com/js-widgets/webpack-cli/issues/58)) ([ef847ec](https://github.com/js-widgets/webpack-cli/commit/ef847ec39f872ab7eb1519ea56ce2ae1abfd4e3e))

## [2.1.11](https://github.com/js-widgets/webpack-cli/compare/v2.1.10...v2.1.11) (2022-06-29)


### Bug Fixes

* **deps:** update dependency @svgr/webpack to v6 ([#50](https://github.com/js-widgets/webpack-cli/issues/50)) ([2e5a774](https://github.com/js-widgets/webpack-cli/commit/2e5a77498da44e47ef986cb34889d1be8fc08d74))

## [2.1.10](https://github.com/js-widgets/webpack-cli/compare/v2.1.9...v2.1.10) (2022-06-29)


### Bug Fixes

* **deps:** update dependency prism-react-renderer to v1.3.3 ([#41](https://github.com/js-widgets/webpack-cli/issues/41)) ([611eeff](https://github.com/js-widgets/webpack-cli/commit/611eeffbbbfabe43b12f7b7d64ff3840ba46852c))

## [2.1.9](https://github.com/js-widgets/webpack-cli/compare/v2.1.8...v2.1.9) (2022-06-28)


### Bug Fixes

* **deps:** update dependency glob to v8 ([#29](https://github.com/js-widgets/webpack-cli/issues/29)) ([f844d0f](https://github.com/js-widgets/webpack-cli/commit/f844d0f839bc1c7ef3569b4f345049b77e1b3f2f))
* **deps:** update docusaurus monorepo to v2.0.0-beta.21 ([#25](https://github.com/js-widgets/webpack-cli/issues/25)) ([a93597a](https://github.com/js-widgets/webpack-cli/commit/a93597ae52f75e387c40bce355e919a65e4cab55))

## [2.1.8](https://github.com/js-widgets/webpack-cli/compare/v2.1.7...v2.1.8) (2022-06-28)


### Bug Fixes

* **deps:** update dependency commander to v9 ([#22](https://github.com/js-widgets/webpack-cli/issues/22)) ([025a992](https://github.com/js-widgets/webpack-cli/commit/025a992d332e6a8d9451c64f76861c55964ad665))

## [2.1.7](https://github.com/js-widgets/webpack-cli/compare/v2.1.6...v2.1.7) (2022-06-28)


### Bug Fixes

* allow overriding asset location ([#11](https://github.com/js-widgets/webpack-cli/issues/11)) ([30ed35f](https://github.com/js-widgets/webpack-cli/commit/30ed35fea3242ccca6b32651c958e5b748630aa8))

## [2.1.6](https://github.com/js-widgets/webpack-cli/compare/v2.1.5...v2.1.6) (2022-05-18)


### Bug Fixes

* use per widget chunk files ([#10](https://github.com/js-widgets/webpack-cli/issues/10)) ([aa2f2b5](https://github.com/js-widgets/webpack-cli/commit/aa2f2b516fd628771b49c6ef8cec99e4f40da0b5))

## [2.1.5](https://github.com/js-widgets/webpack-cli/compare/v2.1.4...v2.1.5) (2022-05-03)


### Bug Fixes

* default to style-loader in development ([#9](https://github.com/js-widgets/webpack-cli/issues/9)) ([82a7cd0](https://github.com/js-widgets/webpack-cli/commit/82a7cd06cf02347817e05acdc75fc101feb1fee4))

## [2.1.4](https://github.com/js-widgets/webpack-cli/compare/v2.1.3...v2.1.4) (2022-04-11)


### Bug Fixes

* improve webpack debug ([3dcd1f8](https://github.com/js-widgets/webpack-cli/commit/3dcd1f8514169b394cb8ada1c5dae71c40db2cd9))

## [2.1.3](https://github.com/js-widgets/webpack-cli/compare/v2.1.2...v2.1.3) (2022-02-25)


### Bug Fixes

* let babel handle SVGs ([#8](https://github.com/js-widgets/webpack-cli/issues/8)) ([13031f7](https://github.com/js-widgets/webpack-cli/commit/13031f7e4aa4aa18dea87e00b5e18abfc43d9b7d))

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
