// app/blog/[slug]/BlogPostClient.jsx
'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BlogPostClient({ post }) {
  const router = useRouter();

  useEffect(() => {
    if (!post) {
      router.push('/404');
    }
  }, [post, router]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      <Navbar />
      <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 mt-16 md:mt-28">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 md:p-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-6"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute left-4 top-4">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-1 text-xs font-semibold text-white shadow">
                {post.category}
              </span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {post.title}
          </motion.h1>
          <div className="flex items-center justify-between mb-6 text-sm text-slate-400">
            <time>{post.date}</time>
            <span>10 min read</span>
          </div>
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          <div className="border-t border-white/10 pt-6">
            <Link
              href="/blog"
              className="inline-flex items-center text-indigo-300 hover:text-indigo-400 transition"
            >
              ← Back to All Posts
            </Link>
          </div>
        </motion.article>
        <div className="h-16" />
      </main>
      <Footer />
    </div>
  );
}