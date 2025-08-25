// app/blog/[slug]/page.jsx
import { blogPosts } from '../../data/blogs';
import BlogPostClient from './BlogPostClient';

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);

  return <BlogPostClient post={post} />;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | GoatNova Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [post.image],
    },
  };
}