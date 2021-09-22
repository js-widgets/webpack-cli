const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'Widget Registry',
    tagline: 'Your JS components streamed into your CMS',
    url: 'https://js-widgets.github.io',
    baseUrl: '/webpack-cli/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'js-widgets', // Usually your GitHub org/user name.
    projectName: 'webpack-cli', // Usually your repo name.

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl:
              'https://github.com/js-widgets/webpack-cli/edit/main/website/',
          },
          blog: false,
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'Widget Registry',
          logo: {
            alt: 'Widget Registry Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Documentation',
            },
            { to: '/videos', label: 'Videos', position: 'left' },
            {
              href: 'https://github.com/js-widgets/webpack-cli',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Tutorial',
                  to: '/docs/intro',
                },
                {
                  label: 'Widget Registry',
                  to: '/docs/registry/summary',
                },
                {
                  label: 'Integration',
                  to: '/docs/integration/registry-sources',
                },
              ],
            },
            {
              title: 'Open Source',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/js-widgets/webpack-cli',
                },
                {
                  label: 'Registry Boilerplate',
                  href: 'https://github.com/js-widgets/widget-registry-boilerplate',
                },
              ],
            },
          ],
        },
        prism: {
          theme: darkCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ['php', 'jsx'],
        },
      }),
  }
);
