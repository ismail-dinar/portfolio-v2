import { IContact } from './../models/contact.interface';

export const contacts: IContact[] = [
  {
    icon: 'call',
    title: 'call me',
    content: '+216 90384082',
    link: 'tel:+21690384082',
  },
  {
    icon: 'mail',
    title: 'send me an email',
    content: 'ismaildinar96@gmail.com',
    link: 'mailto::ismaildinar96@gmail.com',
  },
  {
    icon: 'map',
    title: 'Address',
    content: 'Mourouj III, Ben Arous, Tunisia',
    link: 'https://www.google.com/maps/place/El+Mourouj+3,+El+Mourouj/@36.7242735,10.1938613,14z/data=!3m1!4b1!4m5!3m4!1s0x12fd370133d87827:0x739e5d05da072857!8m2!3d36.7253163!4d10.2109538',
  },
];
