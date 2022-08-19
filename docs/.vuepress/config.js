// .vuepress/config.js
module.exports = {
  plugins: ['@vuepress/back-to-top', '@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: true
  }],
  base: '/vuepress-theme-cool-starter/',
  theme: 'cool',
  //dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/faviconCustom.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
    ['link', {href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel :'stylesheet'}],
    
  ],
  themeConfig: {
    // logo: './myAvatar.png',
    sidebar: { 
	  '/' : [
	     '',
		//  'admonitions',
		 'basketball',
     'diagrams',
		 'charts-math',
		 'custom-components',
     'contact'
	  ]
	},
    sidebarDepth: 2,
    displayAllHeaders: true, // Default: false
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Package Structure', link: '/admonitions' },
      { text: 'Static Module', link: '/basketball' },
      { text: 'Parameters', link: '/diagrams'},
      { text: 'Endpoints', link:'/charts-math'},
      
	  { text: 'Examples and Tutorials', link: '/custom-components'},
    { text: 'Contact', link:'/contact'},
    ],
    lastUpdated: 'Last Updated', // string | boolean
      // Assumes GitHub. Can also be a full GitLab url.
    repo: 'FriendlyUser/vuepress-theme-cool-starter',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Github',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    // docsRepo: 'FriendlyUser/ENGRYear4BNotes',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!'

  },
  title: 'Documentation for NBA-API package',
  description: 'This package is an API Client for www.nba.com',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '../img'
      }
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-admonition'))
    }
  }
}