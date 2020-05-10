export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5eb86d6789c051136c34769f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ebt6zud7',
                  apiId: '90b4063d-de2a-4f52-b615-9e72a48fd3ec'
                },
                {
                  buildHookId: '5eb86d671842f5fd5c0a5e58',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rs1qa3jj',
                  apiId: 'd607ee44-efae-413a-aef6-cfaa6f2a0201'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andrevenancio/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-rs1qa3jj.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
