
import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import BlogPostCard from '../components/BlogPostCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { BlogPost } from '../types';
import { getBlogPosts } from '../services/contentService';

const BlogListPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Section title="Technical Writings">
      {posts.length === 0 && !loading ? (
        <p className="text-center text-gray-400">No articles published yet. Stay tuned!</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default BlogListPage;
    