import { IPerson } from "../models/person.interface";

export const person: IPerson = {
  age: new Date().getFullYear() - new Date('04-07-1996').getFullYear(),
  birthDate: new Date(),
  email: 'ismaildinar96@gmail.com',
  firstName: 'Ismail',
  descriptions: ['thoughtful', 'self-motivated', 'passionate'],
  lastName: 'Dinar',
  phone: '+216 90 384 082',
  role: 'Software Engineer',
  spokenLanguages: ['Arabic', 'French', 'English'],
}
