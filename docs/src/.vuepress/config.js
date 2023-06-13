const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "ShopTrade Documentation",
  base: "/shopTrade-documentation",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [

    ['meta', { name: 'theme-color', content: '#ff322e' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ["script",{src: "/scroll-fix.js", type: "text/javascript"}] 
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: "",
    repo: "",
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    docsDir: "docs/src",
    lastUpdated: true,
    nav: [

      {
        text: "Shopify Shell",
        link: "/shopify-shell/",
      },
      {
        text: "Design Token",
        link: "/design-tokens/",
      },
      {
        text: "Developer Guide",
        link: "/developer-guide/",
      },
    ],
    sidebar: {
      "/shopify-shell/": [
        {
          title: "Shopify Shell",
          collapsable: false,
          children: [
            '',
            'folder-structure',
            'code-structure',
            'features',
            'commands',
            'how-does-it-work'
          ]
        }
      ],
      "/design-tokens/": [
        {
          title: "Design Tokens",
          collapsable: false,
          children: [
            '',
            'typography',
            'colors',
            'animations',
            'helper-mixins',
          ],
        },
      ],

      "/developer-guide/": [
        {
          title: "Developer Guide",
          collapsable: false,
          children: ["", "markdown", "development-guide"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom", ['vuepress-plugin-code-copy', {align: 'top', color: '#fff'}]]
};


