export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6004689271e7df7e75c977fe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jt9uimbg',
                  apiId: '7bcda26d-1cbd-4d3b-9882-b4f0931749c6'
                },
                {
                  buildHookId: '600468925116394821e7b894',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yibn6qe8',
                  apiId: '33f1f3e3-fcc9-4d76-8b68-20864a871df2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/noraroste/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yibn6qe8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
