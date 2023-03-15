import { createClient } from 'next-sanity'

export const projectId: string = 'tyerv91u'
export const dataset: string = 'production'

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2023-03-14',
})
