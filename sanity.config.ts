import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { myTheme } from './theme';
import StudioNavbar from './Components/StudioNavbar';
import { getDefaultDocumentNode } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'SANITY_BLOG_APP',
  title: 'MY JAMSTACK BLOG APP',
  projectId,
  dataset,
  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode
    }), visionTool()
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar
    }
  },
  theme: myTheme
});