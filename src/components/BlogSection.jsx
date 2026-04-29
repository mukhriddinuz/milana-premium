import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 'b1',
    title: 'The Evolution of Minimalist Fashion',
    excerpt: 'Discover how less becomes more in the modern wardrobe, focusing on timeless pieces and sustainable materials.',
    date: 'April 24, 2026',
    category: 'STYLE GUIDE',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'b2',
    title: 'Essential Wardrobe Staples for 2026',
    excerpt: 'A curated list of versatile garments that every modern individual needs to build a solid foundation for any outfit.',
    date: 'April 18, 2026',
    category: 'TRENDS',
    image: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'b3',
    title: 'The Art of Layering: A Masterclass',
    excerpt: 'Learn the secrets of mixing textures and proportions to create visually stunning and functional layered looks.',
    date: 'April 12, 2026',
    category: 'TUTORIAL',
    image: 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

function BlogSection() {
  return (
    <section className="blog-section">
      <div className="section-head" style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--line)', paddingBottom: '12px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, fontFamily: 'Montserrat, sans-serif' }}>THE JOURNAL</h2>
        <Link to="/blog" className="view-all-link">Read All</Link>
      </div>
      
      <div className="blog-grid">
        {blogs.map((blog) => (
          <article key={blog.id} className="blog-card">
            <Link to={`/blog/${blog.id}`} className="blog-img-wrapper">
              <img src={blog.image} alt={blog.title} className="blog-img" />
            </Link>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-category">{blog.category}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
              <Link to={`/blog/${blog.id}`} className="blog-title-link">
                <h3 className="blog-title">{blog.title}</h3>
              </Link>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <Link to={`/blog/${blog.id}`} className="blog-read-more">Read Article</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
