import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const blogPosts = {
  'b1': {
    title: 'The Future of Sustainable Fashion',
    category: 'Sustainability',
    date: 'May 15, 2026',
    author: 'Elena Rossi',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `
      <p>The fashion industry is undergoing a massive transformation. For decades, fast fashion dominated, leading to immense environmental impact. Today, consumers are demanding change, and brands like Milana are stepping up to lead the way.</p>
      
      <h2>Why Sustainability Matters</h2>
      <p>Textile production is traditionally one of the most polluting industries globally. From water consumption in cotton farming to toxic dyes polluting rivers, the environmental cost is high. Sustainable fashion aims to minimize this impact by using eco-friendly materials, reducing water usage, and ensuring fair labor practices.</p>
      
      <blockquote>"True luxury doesn't have to cost the earth. We believe in creating beautiful garments that respect both the people who make them and the planet we all share." - Milana Design Team</blockquote>
      
      <h2>Milana's Commitment</h2>
      <p>At Milana, we have completely overhauled our supply chain. We now source 80% of our materials from organic or recycled sources. Our new factory utilizes solar power and a closed-loop water system, reducing our carbon footprint by 40% compared to five years ago.</p>
      
      <h2>What You Can Do</h2>
      <p>As a consumer, your choices matter. Here are three simple ways to build a more sustainable wardrobe:</p>
      <ul>
        <li><strong>Buy Less, Choose Well:</strong> Invest in high-quality, timeless pieces that will last for years instead of chasing fleeting trends.</li>
        <li><strong>Care Properly:</strong> Wash clothes less frequently, use cold water, and air dry when possible. This extends the life of the garment and saves energy.</li>
        <li><strong>Support Transparent Brands:</strong> Look for brands that are open about where and how their clothes are made.</li>
      </ul>
      <p>The future of fashion is green, and we are excited to have you on this journey with us.</p>
    `
  }
};

function BlogDetails() {
  const { id } = useParams();
  const post = blogPosts[id] || blogPosts['b1']; // Fallback to b1 for demo

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-hero">
        <div className="blog-detail-meta">
          <span className="category">{post.category}</span>
          <span className="dot">•</span>
          <span className="date">{post.date}</span>
        </div>
        <h1 className="blog-detail-title">{post.title}</h1>
        <div className="blog-author">By <strong>{post.author}</strong></div>
      </div>
      
      <div className="blog-detail-image-wrapper">
        <img src={post.image} alt={post.title} className="blog-detail-image" />
      </div>

      <div className="blog-detail-content-wrapper">
        <div 
          className="blog-detail-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="blog-detail-footer">
          <div className="share-buttons">
            <span>Share this article:</span>
            <button aria-label="Share on Facebook">FB</button>
            <button aria-label="Share on Twitter">TW</button>
            <button aria-label="Share on LinkedIn">IN</button>
          </div>
          <Link to="/blog" className="back-to-blog">
            ← Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
