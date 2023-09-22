module.exports = [
    // General Redirects
    {
      to: '/',
      from: ['/en/latest', '/en/'],
    },
    {
      to: '/docs/category/general-reference/',
      from: Array(5).fill('/docs/operate/gas-token'),
    },
    // Heimdall Redirects
    ...[
      'antehandler', 'checkpoint', 'encoder', 'overview', 'peppermint', 'stdtx',
      'transactions', 'types', 'validator-key-management', 'validators'
    ].map(doc => ({
      to: `/docs/pos/design/heimdall/${doc}`,
      from: `/docs/pos/heimdall/${doc}`,
    })),
    // Bor Redirects
    ...['', 'consensus', 'core_concepts', 'overview'].map(doc => ({
      to: `/docs/pos/design/bor${doc ? '/' + doc : ''}`,
      from: `/docs/pos/bor${doc ? '/' + doc : ''}`,
    })),
    // State-Sync Redirects
    ...['how-state-sync-works', 'state-sync'].map(doc => ({
      to: `/docs/pos/design/bridge/state-sync/${doc}`,
      from: `/docs/pos/state-sync/${doc}`,
    })),
    // L1-L2-Communication Redirects
    ...[
      'ethereum-to-matic', 'fx-portal', 'matic-to-ethereum', 'state-transfer',
      'fx-portal/fx-example'
    ].map(doc => ({
      to: `/docs/pos/design/bridge/l1-l2-communication/${doc}`,
      from: `/docs/pos/l1-l2-communication/${doc}`,
    })),
    // POS Node Operate Redirects
    ...[
      'full-node-binaries', 'full-node-binaries', 'full-node-binaries',
      'full-node-binaries', 'full-node-binaries', 'erigon-client', 'erigon-client',
      'erigon-client'
    ].map(doc => ({
      to: `/docs/pos/operate/node/${doc}`,
      from: `/docs/operate/${doc}`,
    })),
    // POS Operate Redirects
    ...[
      'mapped-tokens', 'default-ports',
      'snapshot-instructions-heimdall-bor'
    ].map(doc => ({
      to: `/docs/pos/reference/${doc}`,
      from: `/docs/operate/${doc}`,
    })),
    // Wallets Redirects
    ...[
      'getting-started', 'polygon-web-wallet/web-wallet-v3-guide', 'adding-a-custom-token'
    ].map(doc => ({
      to: `/docs/tools/wallets/${doc}`,
      from: `/docs/develop/wallets/${doc}`,
    })),
    // Other Redirects
    {
      to: '/docs/pos/pos-faqs',
      from: ['/docs/faq/technical-faqs'],
    },
    {
      to: '/docs/pos/design/bridge/ethereum-polygon/tools/widget',
      from: ['/docs/pos/ethereum-polygon/tools/widget'],
    },
    {
      to: '/docs/category/build-an-edge-powered-chain/',
      from: '/docs/supernets/*',
    },
    {
        to: '/docs/edge/what-is-edge/',
        from: '/docs/supernets/operate/supernets-quick-start/',
    },
    {
      to: '/docs/edge/faq/',
      from: '/docs/supernets/supernets-faq/',
    },
  ];
  