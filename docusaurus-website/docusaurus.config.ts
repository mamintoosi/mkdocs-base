import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'علوم کامپیوتر فردوسی مشهد',
  favicon: 'img/fumcs-logo.ico',

  // Set the production url of your site here
  url: 'https://fum-cs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ferdowsi University of Mashhad, CS Dept.', // Usually your GitHub org/user name.
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
        },
        blog: {
          showReadingTime: true,
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
      title: 'علوم کامپیوتر',
      logo: {
        alt: 'FUMCS Logo',
        src: 'img/fumcs-logo.png',
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
              label: 'English Web site',
              to: 'https://fumcs.github.io/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/fum-cs/fum-cs.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FUMCS, Inc`,
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
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ['en', 'ar'],
      },
    ],
  ],
};

export default config;
