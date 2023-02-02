import { defineConfig } from 'sanity'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export default defineConfig({
  name: 'my-project',
  projectId,
  dataset,
  basePath: '/studio/my-project',
  schema: {},
  plugins: [],
})
