import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineConfig({
  basePath: '/studio',
  name: 'Sweet_Crumbs_Admin',
  title: 'Sweet Crumbs',

  projectId: 'tyerv91u',
  dataset: 'production',
  apiVersion: '2023-03-14',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
