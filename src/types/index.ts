export type PostPreviewEdge = {
  node: {
    id: string;
    excerpt: string;
    frontmatter: {
      date: string;
      slug: string;
      title: string;
    };
  };
};
