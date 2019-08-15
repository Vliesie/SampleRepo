import { Entity } from '@ascendedco/architecture'

export interface User extends Entity {
  Name: string;
  Email: string;
  Department: string;
  Number: string;
  location: string;
}
