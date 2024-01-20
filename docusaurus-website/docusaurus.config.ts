import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'علوم کامپیوتر فردوسی مشهد',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fumcs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ferdowsi University of Mashhad', // Usually your GitHub org/user name.
  projectName: 'fumcs-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: ['./src/css/custom.css', './src/css/font.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'FUMCS',
      logo: {
        alt: 'FUMCS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: '/docs/intro',
          label: 'مستندات',
          position: 'left',
        },
        {
          href: 'https://fumcs.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'مستندات',
          items: [
            {
              label: 'برنامه درسی',
              to: '/docs/category/برنامه-درسی',
            },
          ],
        },
        {
          title: 'لینک‌ها',
          items: [
            {
              label: 'وبلاک',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/fumcs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FUMCS, Inc. Built with Docusaurus by @theMasix`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'IW0UML0UCO',

      apiKey: '0f98e980c17dabdb99e47db17c02e055',

      indexName: 'fumcs_curriculum',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
