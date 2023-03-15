import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'tyerv91u',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-03-14',
})
