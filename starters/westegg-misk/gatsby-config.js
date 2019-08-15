module.exports = {
  siteMetadata: {
    title: 'Westegg Digital Garden'
  },
  plugins: [
    {
      resolve: '@westegg/gatsby-theme-core',
      options: {
        mdx: true,
        mdxLayouts: {
          default: require.resolve(
            '@westegg/gatsby-theme-misk/src/components/layout.js'
          )
        }
      }
    },
    {
      resolve: '@westegg/gatsby-theme-misk',
      options: {
        header: {
          home: {
            href: '/',
            label: 'Westegg Misk'
          },
          links: [
            {
              href: '/blog',
              label: 'Writing',
              category: 'Main'
            },
            {
              href: '/portfolio',
              label: 'Portfolio',
              category: 'Main'
            },
            {
              href: '/notes',
              label: 'Notes',
              category: 'Main'
            },
            {
              href: '/contact',
              label: 'Contact',
              category: 'Administrative'
            }
          ]
        },
        postsPath: '/blog',
        projects: 'portfolio',
        projectsPath: '/portfolio'
      }
    }
  ]
}
