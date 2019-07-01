import { ServiceContext } from '@vtex/api'

export interface Book {
  authors: string[]
  cacheId?: string
  id: string
  name: string
}

export interface BookInput {
  name: Book['name']
  authors: Book['authors']
}

export interface Author {
  id: string
  name: string
}

export type Maybe<T> = T | void
