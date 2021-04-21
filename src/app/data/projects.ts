import { IProject } from '../models/project.interface';

export const projects: IProject[] = [
  {
    description: 'A personal portfolio where I can present my skills and experience',
    period: '2021',
    position: 5,
    technologies: ['Angular', 'Bootstrap', 'TypeScript'],
    title: 'Portfolio-V2',
  },
  {
    description: 'A personal portfolio where I can present my skills and experience',
    period: '2020',
    position: 4,
    technologies: ['Angular', 'Bootstrap', 'Angular Material', 'TypeScript'],
    title: 'Portfolio',
  },
  {
    description:
      "My classmates and I implemented an IoT node that allows users to request information (read by the node's sensors such as temperature, pressure, humidity...) through Amazon Alexa. <br> The project was a great opportunity to discover embedded systems and amazon services.",
    period: '2019',
    position: 3,
    technologies: ['STM32', 'AWS', 'Amazon Alexa'],
    title:
      'Development of an IoT node',
  },
  {
    description:
      'It is a website where Autoclub INSAT presents there activities and events. <br> This project was developed using Angular and Firebase.',
    period: '2019',
    position: 2,
    technologies: [
      'Angular',
      'Bootstrap',
      'Angular Material',
      'Firebase',
      'TypeScript',
    ],
    title: 'Autoclub INSAT website',
  },
  {
    description:
      'As an end of semester project, we had to develop a full stack e-commerce website using Angular and Spring Boot.<br> This was my first ever web project and I am really proud of myself for what I have accomplished through this project.',
    period: '2018',
    position: 1,
    technologies: ['Angular', 'Bootstrap', 'TypeScript', 'Spring Boot', 'Java'],
    title: 'Development of an e-commerce website',
  },
];
