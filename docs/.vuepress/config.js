module.exports = {
  title: 'MAD9135',
  description: 'HTML5 App Development',
  base: '/mad9135/',
  themeConfig: {
    serviceWorker: {
      updatePopup: true
    },
    lastUpdated: 'Last Updated: ',
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
          '/modules/week3/',
          '/modules/week4/',
          '/modules/week5/',
          '/modules/week6/',
          '/modules/week7/',
          '/modules/week8/',
          '/modules/week9/',
          '/modules/week10/',
          '/modules/week11/',
          '/modules/week12/',
          '/modules/week13/',
          '/modules/week14/'
        ]
      },
      {
          title: 'Assignments',
          collapsable: true,
          children: [
              ['/assignments/#hybrid-assignments', 'Hybrids'],
              ['/assignments/#assignments', 'Assignments'],
              ['/assignments/#projects', 'Projects']
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
