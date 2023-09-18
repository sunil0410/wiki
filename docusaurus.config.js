const math = require('remark-math');
const katex = require('rehype-katex');

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
        redirects: [
          {
            to: '/',
            from: ['/en/latest', '/en/'],
          },
          {
            to: '/docs/category/general-reference/',
            from: '/docs/operate/gas-token',
          },
          {
            to: '/docs/category/general-reference/',
            from: '/docs/operate/gas-token',
          },
          {
            to: '/docs/category/general-reference/',
            from: '/docs/operate/gas-token',
          },
          {
            to: '/docs/category/general-reference/',
            from: '/docs/operate/gas-token',
          },
          // heimdall
          {
            to: '/docs/pos/design/heimdall/antehandler',
            from: '/docs/pos/heimdall/antehandler',
          },
          {
            to: '/docs/pos/design/heimdall/checkpoint',
            from: '/docs/pos/heimdall/checkpoint',
          },
          {
            to: '/docs/pos/design/heimdall/encoder',
            from: '/docs/pos/heimdall/encoder',
          },
          {
            to: '/docs/pos/design/heimdall/overview',
            from: '/docs/pos/heimdall/overview',
          },
          {
            to: '/docs/pos/design/heimdall/peppermint',
            from: '/docs/pos/heimdall/peppermint',
          },
          {
            to: '/docs/pos/design/heimdall/stdtx',
            from: '/docs/pos/heimdall/stdtx',
          },
          {
            to: '/docs/pos/design/heimdall/transactions',
            from: '/docs/pos/heimdall/transactions',
          },
          {
            to: '/docs/pos/design/heimdall/types',
            from: '/docs/pos/heimdall/types',
          },
          {
            to: '/docs/pos/design/heimdall/validator-key-management',
            from: '/docs/pos/heimdall/validator-key-management',
          },
          {
            to: '/docs/pos/design/heimdall/validators',
            from: '/docs/pos/heimdall/validators',
          },
          // bor
          {
            to: '/docs/pos/design/bor',
            from: '/docs/pos/bor',
          },
          {
            to: '/docs/pos/design/bor/consensus',
            from: '/docs/pos/bor/consensus',
          },
          {
            to: '/docs/pos/design/bor/core_concepts',
            from: '/docs/pos/bor/core_concepts',
          },
          {
            to: '/docs/pos/design/bor/overview',
            from: '/docs/pos/bor/overview',
          },
          // state-sync
          {
            to: '/docs/pos/design/bridge/state-sync/how-state-sync-works',
            from: '/docs/pos/state-sync/how-state-sync-works',
          },
          {
            to: '/docs/pos/design/bridge/state-sync/state-sync',
            from: '/docs/pos/state-sync/state-sync',
          },
          // l1-l2-communication
          {
            to: '/docs/pos/design/bridge/l1-l2-communication/ethereum-to-matic',
            from: '/docs/pos/l1-l2-communication/ethereum-to-matic',
          },
          {
            to: '/docs/pos/design/bridge/l1-l2-communication/fx-portal',
            from: '/docs/pos/l1-l2-communication/fx-portal',
          },
          {
            to: '/docs/pos/design/bridge/l1-l2-communication/matic-to-ethereum',
            from: '/docs/pos/l1-l2-communication/matic-to-ethereum',
          },
          {
            to: '/docs/pos/design/bridge/l1-l2-communication/state-transfer',
            from: '/docs/pos/l1-l2-communication/state-transfer',
          },
          {
            to: '/docs/pos/design/bridge/l1-l2-communication/fx-portal/fx-example',
            from: '/docs/pos/l1-l2-communication/fx-portal/fx-example',
          },
          {
            to: '/docs/pos/design/bridge/ethereum-polygon/tools/widget',
            from: '/docs/pos/ethereum-polygon/tools/widget',
          },
          //pos node operate
          {
            to: '/docs/pos/operate/node/full-node-binaries',
            from: '/docs/operate/full-node-binaries',
          },
          {
            to: '/docs/pos/operate/node/full-node-binaries',
            from: '/docs/operate/full-node-docker',
          },
          {
            to: '/docs/pos/operate/node/full-node-binaries',
            from: '/docs/operate/full-node-gcp',
          },
          {
            to: '/docs/pos/operate/node/full-node-binaries',
            from: '/docs/operate/full-node',
          },
          {
            to: '/docs/pos/operate/node/full-node-binaries',
            from: '/docs/operate/full-node-deployment',
          },
          {
            to: '/docs/pos/operate/node/erigon-client',
            from: '/docs/operate/erigon-client',
          },
          {
            to: '/docs/pos/operate/node/erigon-client',
            from: '/docs/operate/archive-node',
          },
          {
            to: '/docs/pos/operate/node/erigon-client',
            from: '/docs/operate/setup-archive-node',
          },
          //pos operate
          {
            to: '/docs/category/general-reference/',
            from: '/docs/operate/gas-token',
          },
          {
            to: '/docs/pos/reference/contracts/genesis-contracts',
            from: '/docs/operate/genesis-contracts',
          },
          {
            to: '/docs/pos/reference/mapped-tokens',
            from: '/docs/operate/mapped-tokens',
          },
          {
            to: '/docs/pos/reference/rpc-endpoints',
            from: '/docs/operate/network-rpc-endpoints',
          },
          {
            to: '/docs/pos/reference/default-ports',
            from: '/docs/operate/default-ports',
          },
          {
            to: '/docs/pos/reference/snapshot-instructions-heimdall-bor',
            from: '/docs/operate/snapshot-instructions-heimdall-bor',
          },
          {
            to: '/docs/pos/validator/validator-node-system-requirements',
            from: '/docs/operate/technical-requirements',
          },
          //faqs
          {
            to: '/docs/pos/pos-faqs',
            from: '/docs/faq/technical-faqs',
          },
          //wallets
          {
            to: '/docs/tools/wallets/getting-started',
            from: '/docs/develop/wallets/getting-started',
          },
          {
            to: '/docs/tools/wallets/polygon-web-wallet/web-wallet-v3-guide',
            from: '/docs/develop/wallets/polygon-web-wallet/web-wallet-v3-guide',
          },
          {
            to: '/docs/tools/wallets/adding-a-custom-token',
            from: '/docs/develop/wallets/adding-a-custom-token',
          },
        ],
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
              label: "Whitepaper",
              href: "https://github.com/maticnetwork/whitepaper/"
            },
            /* Commenting out until a working link is available
            {
              label: "Lightpaper",
              href: "https://polygon.technology/lightpaper-polygon.pdf"
            },
            */
            {
              label: "Miden",
              href: "/docs/miden/design/main"
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
          label: "Polygon Stack",
          position: "left",
          items: [
            {
              href: '/docs/pos/',
              label: 'PoS',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/zkevm/',
              label: 'zkEVM',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/supernets/',
              label: 'Supernets',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/miden/',
              label: 'Miden',
              target: '_self',
              rel: null,
            },
            {
              href: 'https://devs.polygonid.com/',
              label: 'ID',
              target: '_self',
              rel: null,
            },
          ],
        },
        {
          label: "Polygon 2.0",
          position: "left",
          items: [
            {
              href: '/docs/cdk',
              label: 'Polygon CDK',
              target: '_self',
              rel: null,
            },
          ],
        },
        {
          label: "Apps & Tools",
          position: "left",
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
          label: "Participate",
          position: "left",
          items: [
            {
              href: '/docs/delegate/delegate',
              label: 'Delegate MATIC',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/category/run-a-validator-node',
              label: 'Run a PoS Validator',
              target: '_self',
              rel: null,
            },
            {
              href: '/docs/governance',
              label: 'Governance',
              target: '_self',
              rel: null,
            },
          ],
        },
        {
          label: "Pre-Specs",
          position: "left",
          items: [
            {
              href: '/docs/category/zkevm/',
              label: 'zkEVM',
              target: '_self',
              rel: null,
            },
            {
              to: '/docs/category/miden-vm',
              label: 'Miden',
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
