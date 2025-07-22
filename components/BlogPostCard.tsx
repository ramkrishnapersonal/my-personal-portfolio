
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { ROUTES } from '../constants';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Link to={`${ROUTES.WRITINGS}/${post.slug}`} className="block bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
      <h3 className="text-xl font-semibold text-text-light mb-2">{post.title}</h3>
      <p className="text-sm text-gray-400 mb-1">By {post.author} on {post.date}</p>
      <p className="text-gray-300 mb-3 text-sm">{post.summary}</p>
      <div className="mb-3">
        {post.tags.map(tag => (
          <span key={tag} className="inline-block bg-gray-700 rounded-full px-2 py-1 text-xs font-semibold text-gray-300 mr-1 mb-1">#{tag}</span>
        ))}
      </div>
      <span className="text-accent hover:underline text-sm font-medium">Read more &rarr;</span>
    </Link>
  );
};

export default BlogPostCard;
    