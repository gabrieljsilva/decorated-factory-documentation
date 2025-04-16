import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

// Options: https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: 'content/docs',
  order: [
    'introduction',
    'installation',
    'core-concepts',
    'relationships',
    'arrays',
    'instance-creation',
    'partials',
  ],
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
