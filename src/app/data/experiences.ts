import { IExperience } from '../models/experience.interface';

export const experiences: IExperience[] = [
  {
    period: 'Jan 2021 - Present',
    role: 'Frontend Developer',
    technologies: [
      'Angular',
      'AngularJS',
      'JavaScript',
      'TypeScript',
      'Storybook',
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
        'In an agile environment, I take part in the development and maintenance of Bankers\' Front, a Digital Wealth Management platform currently used by large Private Banks mainly in Switzerland and Luxembourg:',
      content: [
        'Improved the ordering module user interface by reducing the cognitive effort required from users to place orders on the market.',
        'Collaborated on bringing to life the most awaited feature by customers, the client onboarding process. ',
        'Contributed to the development and maintenance of an internal UI library based on Kendo UI and documented using Storybook while maintaining 100% code coverage. ',
        'Engaged with a team of 15 developers in the transformation of large applications built on a legacy framework (AngularJS) into a modern, fully functional application written in Angular.',
        'Involved in the hiring process of new talent, performing interviews alongside colleagues.',
      ],
    },
  },
  {
    period: 'Jul 2020 - Dec 2020',
    role: 'Software Engineer',
    technologies: [
      'Angular',
      'JavaScript',
      'TypeScript',
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
      header: 'I was responsible for the design and development of web and mobile projects as well as artificial intelligence projects:',
      content: [
        'Implemented a web and mobile-based passenger information system for a major national bus company.',
        'Built and maintained a legal document information extraction pipeline using machine learning techniques.',
        'Improved the workflow of a GPS data processing software that handled data flow between multiple servers resulting in 15% more data being processed each second.',
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
      header: 'Development of AI based driver assessment system:',
      content: [
        'Undertook the research and development of an AI-based driver assessment model that achieved an overall accuracy of 85% using various techniques including data mining and machine learning.'
      ],
    },
  },
  {
    period: 'Jun 2019 - Aug 2019',
    role: 'FullStack Developer',
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
      header: 'Development of a smart lighting system dashboard:',
      content: [
        'Analyzed, designed, and developed a smart lighting system dashboard that allows the control and management of thousands of connected light poles.'
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
