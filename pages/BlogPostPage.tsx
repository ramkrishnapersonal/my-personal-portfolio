
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { BlogPost } from '../types';
import { getBlogPostBySlug } from '../services/contentService';
import { ROUTES } from '../constants';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError("No blog post specified.");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const data = await getBlogPostBySlug(slug);
        if (data) {
          setPost(data);
        } else {
          setError(`Blog post with slug "${slug}" not found.`);
        }
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
        setError("Failed to load the blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Error</h1>
        <p className="text-lg text-gray-300 mb-6">{error}</p>
        <Link to={ROUTES.WRITINGS} className="text-accent hover:underline">
          &larr; Back to Writings
        </Link>
      </div>
    );
  }

  if (!post) {
    // This case should ideally be covered by the error state, but as a fallback:
    return (
       <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-lg text-gray-300">Blog post not found.</p>
         <Link to={ROUTES.WRITINGS} className="text-accent hover:underline">
          &larr; Back to Writings
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl animate-fade-in-up">
      <article className="bg-secondary p-6 sm:p-8 rounded-lg shadow-xl">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-highlight mb-3">{post.title}</h1>
          <p className="text-sm text-gray-400">
            By {post.author} on {post.date}
          </p>
          <div className="mt-3">
            {post.tags.map(tag => (
              <span key={tag} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-300 mr-2 mb-2">#{tag}</span>
            ))}
          </div>
        </header>
        
        {/* Render HTML content. Ensure MOCK_BLOG_POSTS.content is safe or sanitize it if from user input */}
        <div 
          className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none" 
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        <footer className="mt-10 pt-6 border-t border-gray-700">
          <Link to={ROUTES.WRITINGS} className="text-accent hover:underline">
            &larr; Back to All Writings
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default BlogPostPage;
    