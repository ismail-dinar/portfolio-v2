import { IExperience } from './../models/experience.interface';

export const experiences: IExperience[] = [
  {
    period: 'Jan 2021 - Present',
    role: 'Software Developer',
    technologies: [
      'Angular',
      'AngularJS',
      'Bitbucket',
      'Formly',
      'Git',
      'Jira',
      'Kendo',
      'Scrum',
      'TeamCity',
    ],
    company: 'New Access',
    position: 1,
    description: {
      header:
        'As a member of the Digital Solutions Team within New Access, I have a hand in:',
      content: [
        'The Development of new Angular libraries and their integration with AngularJS.',
        "The evolution and maintenance of Banker's Front and E-Banking and their libraries.",
        'The evolution and maintenance of the new access kendo/formly based UI library.',
        'Code reviewing.',
        'Providing support to my teammates.',
        'Releasing new versions of the different libraries.',
      ],
    },
  },
  {
    period: 'Jul 2020 - Dec 2020',
    role: 'Software Engineer',
    technologies: [
      'Angular',
      'Bootstrap',
      'DevExtreme',
      'Docker',
      'Java EE',
      'Java',
      'Leaflet',
      'OracleDB',
    ],
    company: 'Be Wireless Solutions',
    position: 2,
    description: {
      header: 'Development of Passenger information system application:',
      content: [
        'Development of UI using Angular, Angular Material, Bootstrap, DevExtreme, and Leaflet.',
        'Development of RESTful API using JavaEE and JWT based authentication.',
        'Development of a mobile application using Ionic.',
        ' Dockerizing and deploying the application.',
      ],
    },
  },
  {
    period: 'Feb 2020 - Jun 2020',
    role: 'Software Engineer Intern',
    technologies: ['Java', 'MySql', 'Python', 'TFX', 'Tensorflow'],
    company: 'Be Wireless Solutions',
    position: 3,
    description: {
      header: 'Development of AI based driver assessment system.',
      content: [],
    },
  },
  {
    period: 'Jun 2019 - Aug 2019',
    role: 'Summer Intern',
    technologies: [
      'Angular Material',
      'Angular',
      'Bootstrap',
      'Devextreme',
      'Highcharts',
      'Java EE',
      'Leaflet',
      'MySQL',
    ],
    company: 'Be Wireless Solutions',
    position: 4,
    description: {
      header: 'Development of a smart lighting system dashboard.',
      content: [
        'Development of the back-end using Java EE',
        'Development of the front-end using Angular',
      ],
    },
  },
  {
    period: 'Jul 2018',
    role: 'Summer Intern',
    technologies: ['3G', '4G', 'U2000 NMS'],
    company: 'Tunisie Telecom',
    position: 5,
    description: { header: 'Introduction to 3G, 4G networks. Mobile networks monitoring.', content: [] },
  },
  {
    period: 'Sep 2017 - Dec 2017',
    role: 'Technical manager',
    technologies: ['C#', 'EmguCV'],
    company: 'Securinets',
    position: 6,
    description: { header: 'Development of a facial recognition application using c# and EmguCV.', content: [] },
  },
];
