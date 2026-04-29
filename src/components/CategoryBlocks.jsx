import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'WOMEN',
    path: '/women',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'MEN',
    path: '/men',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'KIDS',
    path: '/kids',
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

function CategoryBlocks() {
  return (
    <section className="category-blocks-section">
      <div className="category-blocks-container">
        {categories.map((cat) => (
          <Link to={cat.path} key={cat.title} className="category-block">
            <div className="category-block-img-wrapper">
              <img src={cat.image} alt={cat.title} className="category-block-img" />
              <div className="category-block-overlay"></div>
            </div>
            <div className="category-block-content">
              <h3 className="category-block-title">{cat.title}</h3>
              <span className="category-block-link">SHOP NOW</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryBlocks;
