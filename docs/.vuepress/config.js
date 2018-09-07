module.exports = {
  title: 'MAD9135',
  description: 'HTML5 App Development',
  base: '/mad9135/',
  themeConfig: {
    lastUpdated: true,
    nav: [{
        text: 'Overview',
        link: '/overview/'
      },
      {
        text: 'Assignments',
        link: '/assignments/'
      },
      {
        text: 'Resources',
        link: '/resources/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/'
      },
    ],
    sidebar: [{
        title: 'Introduction',
        collapsable: true,
        children: [
          ['/overview/', 'Overview'],
          '/overview/course-section-information',
          '/overview/contacts'
        ]
      },
      {
        title: 'Content Modules',
        collapsable: true,
        children: [
          '/modules/week1/',
          '/modules/week2/',
          '/modules/week3/'
        ]
      }
    ],
    sidebarDepth: 2
  },
  serviceWorker: {
    updatePopup: true // Boolean | Object, default to undefined.
    // If set to true, the default text config will be: 
    // updatePopup: { 
    //    message: "New content is available.", 
    //    buttonText: "Refresh" 
    // }
  }
}
