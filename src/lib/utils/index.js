export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/src/routes/writings/posts/*/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();

      const postPath = path.split('/');
      const folderSlug = postPath[postPath.length - 2];

      return {
        ...metadata,
        slug: metadata.slug || folderSlug,
      };
    })
  );

  return allPosts;
};
