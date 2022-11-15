/** @type {import('@docusaurus/types').DocusaurusConfig} */

const prismConfig = {
  plain: {
    color: '#ffffff',
    backgroundColor: '#001a72',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: '#aaaaaa',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#ffffff',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#ffee86',
      },
    },
    {
      types: ['variable', 'constant', 'builtin', 'attr-name'],
      style: {
        color: '#a3b8ff',
      },
    },
    {
      types: ['number', 'operator'],
      style: {
        color: '#ffaaa8',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: '#8ed3ef',
      },
    },
    {
      types: ['char'],
      style: {
        color: '#a3b8ff',
      },
    },
    {
      types: ['tag'],
      style: {
        color: '#ffaaa8',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#a3b8ff',
      },
    },
  ],
};
/*
In swizzled components look for "SWM -" string to see our modifications
*/

module.exports = {
  title: 'React Native Reanimated',
  tagline: "React Native's Animated library reimplemented",
  url: 'http://www.reanimated2.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/SWM_Fav_192x192.png',
  organizationName: 'catalinmiron',
  onBrokenLinks: 'warn',
  customFields: {
    shortTitle: 'Reanimated',
  },
  projectName: 'react-native-reanimated',
  themeConfig: {
    algolia: {
      appId: 'CHLGM6BFRG',
      apiKey: 'b87befadf62b27ce46142fee664e9c9c',
      indexName: 'react-native-reanimated',
      // contextualSearch: true, // doesn't work for some reason
    },
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'React Native Reanimated',
      items: [
        {
          type: 'doc',
          position: 'right',
          docId: 'fundamentals/about',
          label: 'Docs',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          className: 'github-navbar-logo',
          href: 'https://github.com/software-mansion/react-native-reanimated/',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'Software Mansion',
        src: 'img/swmLogo.svg',
        href: 'https://swmansion.com/',
      },
    },
    prism: {
      theme: prismConfig,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined, // hide edit button
          versions: {
            '2.5.x': {
              label: '2.5.x – 2.10.x',
            },
            '2.3.x': {
              label: '2.3.x – 2.4.x',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-23679093-16',
          anonymizeIP: true,
        },
      },
    ],
  ],
};
