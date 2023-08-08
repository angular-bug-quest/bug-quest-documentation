// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Angular Bug Quest',
  tagline: 'Learn and assert your Angular skills by fixing bugs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://angular-bug-quest.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/angular-bug-quest/bug-quest-documentation/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.jpeg',
      navbar: {
        title: 'Angular Bug Quest',
        logo: {
          alt: 'Angular Bug Quest Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Documentation',
          },{
            href: 'https://github.com/angular-bug-quest/angular-bug-quest',
            label: 'GitHub',
            position: 'right',
          }, {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Contribution Guide',
                to: '/docs/contribute',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Contribute',
                href: 'https://github.com/angular-bug-quest/angular-bug-quest/blob/main/CONTRIBUTING.md',
              },
              {
                label: 'Angular Discord',
                href: 'https://discord.gg/t3bT9Hk4',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/angular-bug-quest/angular-bug-quest',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Angular Bug Quest. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
