const math = require('remark-math');
const katex = require('rehype-katex');
const redirects = require('./redirects');

module.exports = {
  title: "Polygon Wiki",
  tagline: "The official documentation for Polygon.",
  url: "https://wiki.polygon.technology",
  baseUrl: "/",
  favicon: "img/logo-round-purple.png",
  organizationName: "Polygon Labs",
  projectName: "wiki",
  trailingSlash: true,
  customFields: {
    description: "Build your next application on Polygon.",
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: redirects,
      },
    ],
  ],
  onBrokenLinks: 'log',
  themeConfig: {
    metadata: [{ name: 'description', content: 'Welcome to Polygon Wiki, the official documentation for Polygon. Learn about Polygon and its suite of Ethereum-scaling solutions.' }],
    announcementBar: {
      id: 'banner',
      content: `
        <div class="announcement-bar">
            Discover the Next Evolution with Polygon CDK. Learn more
            <a href="https://wiki.polygon.technology/docs/cdk" target="_self" class="announcement-link" style="color: #ffffff;">here</a>
        </div>
      `,
      textColor: '#ffffff',
      isCloseable: true,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    category: {
      emoji: ''
    },
    footer: {
      style: 'light',
      links: [
        {
          title: "Resources",
          items: [
            {
              href: 'https://support.polygon.technology/support/home',
              label: 'Polygon Support',
            },
            {
              label: "Advocate Program",
              href: "https://polygon.technology/advocate-program/"
            },
            {
              label: "Polygon Funds",
              href: "https://polygon.technology/funds/"
            },
            {
              label: "Bug Bounty",
              href: "https://immunefi.com/bounty/polygon/"
            },
            {
              href: 'https://www.dappstorekit.io/',
              label: 'Build your own dApp',
              target: '_blank',
              rel: null,
              position: 'right',
            },
          ]
        },
        {
          title: "Reference",
          items: [
            {
              label: "Original Whitepaper",
              href: "https://github.com/maticnetwork/whitepaper/"
            },
            {
              label: "POL Whitepaper",
              href: "https://polygon.technology/papers/pol-whitepaper"
            },
          ]
        },
        {
          title: "Native dApps",
          items: [
            {
              href: 'https://wallet.polygon.technology',
              label: 'PoS Wallet',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://staking.polygon.technology/',
              label: 'PoS Staking',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://polygonscan.com/',
              label: 'PoS Explorer',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://explorer.hermez.io/',
              label: 'Hermez',
              target: '_blank',
              rel: null,
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              href: 'https://forum.polygon.technology/',
              label: 'Forum',
            },
            {
              href: 'https://twitter.com/0xPolygon',
              label: 'Twitter',
            },
            {
              href: 'https://discord.com/invite/0xPolygon',
              label: 'Discord',
            },
            {
              href: 'https://www.reddit.com/r/0xPolygon/',
              label: 'Reddit',
            },
            {
              href: 'https://t.me/polygonofficial',
              label: 'Telegram',
            },
          ]
        },
        {
          title: "Polygon Labs",
          items: [
            {
              label: "About Us",
              href: "https://polygon.technology/about/"
            },
            {
              label: "Contact",
              href: "https://polygon.technology/contact-us/"
            },
            {
              label: "Blogs",
              href: "https://blog.polygon.technology/"
            },
            {
              label: "Brand Kit",
              href: "https://www.notion.so/polygontechnology/Brand-Resources-2cd18ae436584e98a6c5aae56db73058/"
            },
          ]
        },
        {
          title: "Legal",
          items: [
            {
              label: "Content Disclaimer",
              href: "https://github.com/0xPolygon/wiki/blob/main/CONTENT_DISCLAIMER.md"
            },
            {
              label: "Terms of Use",
              href: "https://polygon.technology/terms-of-use"
            },
            {
              label: "Privacy Policy",
              href: "https://polygon.technology/privacy-policy"
            },
          ]
        },
      ],
      logo: {
        alt: 'Polygon Logo',
        src: 'img/polygon-labs.png',
        href: 'https://polygon.technology/',
      },
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    image: 'polygon-logo.png',
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      defaultLanguage: "javascript",
      additionalLanguages: ['solidity']
    },
    algolia: {
      indexName: "matic_developer",
      appId: '16JCDEHCCN',
      apiKey: "d172fe1ed43468315f82bd9679515131",
      contextualSearch: true,
      algoliaOptions: {
        attributesToSnippet: ['content:20'],
      },
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Polygon logo",
        src: "/img/polygon-logo.png",
        srcDark: "/img/polygon-logo.png",
        target: "_self",
      },
      items: [
        {
          to: 'https://university.polygon.technology/',
          label: 'New to Polygon?',
          target: '_blank',
          rel: null,
        },
        {
          label: "CDK",
          position: "left",
          items: [
            {
              href: '/docs/cdk',
              label: 'Welcome to the CDK',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/cdk/validium/quickstart/',
              label: 'Get Started with the Validium',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/cdk/validium/validium-attributes/',
              label: 'Validium System Attributes',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/cdk/validium/dac-overview/',
              label: 'Data Availability',
              target: '_self',
              rel: null,
            },
          ],
        },
        {
          label: "zkEVM",
          position: "left",
          items: [
            {
              href: '/docs/zkevm/',
              label: 'Welcome to zkEVM',
              target: '_self',
              rel: null,
            },
            {
              to: '/docs/category/start-building/',
              label: 'Build a dApp',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/category/setup-zknode/',
              label: 'Run a Node',
              target: '_self',
              rel: null,
            },
            {
              to: '/docs/category/deploy-zkevm/',
              label: 'Launch Your zkEVM',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/category/zkevm/',
              label: 'Pre-Specs',
              target: '_self',
              rel: null,
            },
          ],
        },
        {
          label: "PoS",
          position: "left",
          items: [
            {
              href: '/docs/pos/',
              label: 'Welcome to PoS',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/category/system-design/',
              label: 'Learn about PoS',
              target: '_self',
              rel: null,
            },
            {
              to: '/docs/category/build-a-dapp/',
              label: 'Build a dApp',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/category/become-a-validator/',
              label: 'Become a Validator',
              target: '_self',
              rel: null,
            },
            {
              to: '/docs/category/proposals/',
              label: 'Create Proposals',
              target: '_self',
              rel: null,
            },
          ],
        },
        {
          label: "Edge",
          position: "left",
          items: [
            {
              href: '/docs/edge/',
              label: 'Welcome to Edge',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/edge/operate/quickstart/',
              label: 'Get Started with Edge',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/category/system-design-1/',
              label: 'Learn about Edge',
              target: '_self',
              rel: null,
            },
            {
              to: '/docs/category/build-an-edge-powered-chain/',
              label: 'Deploy a Chain',
              target: '_self',
              rel: null,
            },
          ],
        },
        {
          label: "Miden",
          position: "left",
          items: [
            {
              href: '/docs/miden/',
              label: 'Welcome to Miden',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/miden/intro/main/',
              label: 'Learn about Miden',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/miden/user_docs/usage/',
              label: 'Use the MidenVM',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/category/miden-vm/',
              label: 'Pre-Specs',
              target: '_self',
              rel: null,
            },
          ],
        },
        {
          to: 'https://devs.polygonid.com/',
          label: 'ID',
          position: "left",
          target: '_blank',
          rel: null,
        },
        {
          label: "Apps & Tools",
          position: "right",
          items: [
            {
              href: '/docs/tools/matic-js/get-started',
              label: 'Matic.js',
              target: '_self',
              rel: null,
            },
          ],
        },
        {
          to: 'https://support.polygon.technology/support/solutions',
          label: 'Support',
          position: "right",
          target: '_blank',
          rel: null,
        },
        {
          to: '/docs/contribute/orientation/',
          label: 'Contribute',
          position: "right",
          target: '_self',
          rel: null,
        },
        {
          href: "https://github.com/0xPolygon",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/0xPolygon/wiki/tree/main/",
          path: "docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [[katex, { strict: false, throwOnError: true, globalGroup: true }]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: 'G-LLNECLTBDN',
          anonymizeIP: true,
        },
      },
    ],
  ],
};
