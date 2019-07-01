
import { Book, Author } from '../../typings/custom'

export const authors: Record<string, Author> = {
  '0': {
    id: '0',
    name: 'Fernando',
  },
  '1': {
    id: '1',
    name: 'Nando',
  },
}

const mock: Book[] = [
  {
    authors: ['0', '1'],
    id: '0',
    name: 'Default Book 1',
  },
  {
    authors: ['0'],
    id: '1',
    name: 'Default Book 2',
  },
  {
    authors: ['0'],
    id: '2',
    name: 'Default Book 3',
  },
  {
    authors: ['0'],
    id: '3',
    name: 'Default Book 4',
  },
  {
    authors: ['0'],
    id: '4',
    name: 'Default Book 5',
  },
  {
    authors: ['0'],
    id: '10',
    name: 'Default Book 11',
  },
  {
    authors: ['0'],
    id: '11',
    name: 'Default Book 12',
  },
  {
    authors: ['0'],
    id: '12',
    name: 'Default Book 13',
  },
  {
    authors: ['0'],
    id: '13',
    name: 'Default Book 14',
  },
  {
    authors: ['0'],
    id: '14',
    name: 'Default Book 15',
  },
  {
    authors: ['0'],
    id: '20',
    name: 'Default Book 21',
  },
  {
    authors: ['0'],
    id: '21',
    name: 'Default Book 22',
  },
  {
    authors: ['0'],
    id: '22',
    name: 'Default Book 23',
  },
  {
    authors: ['0'],
    id: '23',
    name: 'Default Book 24',
  },
  {
    authors: ['0'],
    id: '24',
    name: 'Default Book 25',
  },
]

export default mock
