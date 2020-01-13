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
                  buildHookId: '5d5dc36b2a5dba6fa466ee49',
                  title: 'Production',
                  name: 'sanity-nextjs-landing-pages-web-ftsirbme',
                  apiId: '235561c8-1c96-4098-b4c2-3f92b9b71d78'
                },
                {
                  buildHookId: '5d5dc36af6428f53857c705a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dpf4qa7f',
                  apiId: '754d8599-06a7-40d8-b97a-b2c213b277e6'
                },
              ]
            }
          }
        ]
        // data: [
        //   {
        //     title: 'GitHub repo',
        //     value: 'https://github.com/peterlaxalt/sanity-nextjs-landing-pages',
        //     category: 'Code'
        //   },
        //   {
        //     title: 'Frontend',
        //     value: 'https://sanity-nextjs-landing-pages-web-ftsirbme.netlify.com',
        //     category: 'apps'
        //   }
        // ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    }
  ]
}
