const math = require('remark-math');
const katex = require('rehype-katex');
module.exports = {
  title: 'Teorisider',
  tagline: 'Teori til IT2',
  url: 'https://teorisider.onrender.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'audunhauge', // Usually your GitHub org/user name.
  projectName: 'teorisider', // Usually your repo name.
  scripts: [
    '../Progress.js','../Latex.js', '../UML.js',
    '//unpkg.com/graphre/dist/graphre.js',
    '//unpkg.com/nomnoml/dist/nomnoml.js',
  ],
  themeConfig: {
    navbar: {
      title: 'Teoribok IT2',
      logo: {
        alt: 'Teori Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/audunhauge/teorisider',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Latex',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href:'https://discord.gg/QuUPUuJvvY',
              
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/audunhauge/teorisider',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Audun Hauge. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/audunhauge/teorisider/edit/master/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/audunhauge/teorisider/edit/master/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
