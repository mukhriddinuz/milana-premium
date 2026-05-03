import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const blogPosts = [
  {
    id: 'b1',
    title: 'The Future of Sustainable Fashion',
    excerpt: 'Explore how Milana is leading the way in sustainable textile production, using eco-friendly materials and ethical manufacturing processes.',
    category: 'Sustainability',
    date: 'May 15, 2026',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'b2',
    title: 'Summer 2026 Collection Preview',
    excerpt: 'Get an exclusive sneak peek into our upcoming Summer Collection. Bright colors, lightweight fabrics, and modern silhouettes await.',
    category: 'Collections',
    date: 'April 28, 2026',
    image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'b3',
    title: 'How to Care for Premium Wool',
    excerpt: 'A comprehensive guide to extending the life of your premium wool garments. Learn the best practices for washing, drying, and storing.',
    category: 'Care Guide',
    date: 'April 10, 2026',
    image: 'https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'b4',
    title: 'Behind the Seams: Our Factory Process',
    excerpt: 'Take a virtual tour of the Milana factory. See how our skilled artisans turn raw materials into the beautiful garments you love.',
    category: 'Inside Milana',
    date: 'March 22, 2026',
    image: 'https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'b5',
    title: 'Styling the Classic Suit for Everyday',
    excerpt: 'Who says suits are only for the boardroom? Discover 5 ways to dress down your classic tailored suit for a chic, everyday look.',
    category: 'Style Tips',
    date: 'March 05, 2026',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'b6',
    title: 'The Rise of Gender-Neutral Fashion',
    excerpt: 'Fashion is evolving. Read about how gender-neutral clothing is breaking boundaries and why Milana is embracing this inclusive trend.',
    category: 'Trends',
    date: 'February 18, 2026',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

function BlogList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-list-page">
      <div className="blog-header">
        <h1>Milana Journal</h1>
        <p>Stories, style tips, and news from the world of fashion.</p>
      </div>
      
      <div className="blog-filters">
        <button className="active">All Stories</button>
        <button>Sustainability</button>
        <button>Collections</button>
        <button>Style Tips</button>
      </div>

      <div className="blog-grid-full">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card-large">
            <Link to={`/blog/${post.id}`} className="blog-img-wrapper">
              <img src={post.image} alt={post.title} className="blog-img" loading="lazy" />
            </Link>
            <div className="blog-meta">
              <span className="blog-category">{post.category}</span>
              <span className="blog-date">{post.date}</span>
            </div>
            <Link to={`/blog/${post.id}`} className="blog-title-link">
              <h2 className="blog-title">{post.title}</h2>
            </Link>
            <p className="blog-excerpt">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="blog-read-more">Read Article</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
