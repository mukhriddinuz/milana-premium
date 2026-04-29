import { Link } from 'react-router-dom';

function HeroVideo({ videoUrl, title, subtitle, buttonText }) {
  return (
    <section className="hero-video-section">
      <div className="hero-video-wrapper">
        <video 
          className="hero-video-bg"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={videoUrl} />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay"></div>
        <div className="hero-video-content">
          <h1 className="hero-video-title">{title}</h1>
          <p className="hero-video-subtitle">{subtitle}</p>
          <Link to="/catalog" className="hero-video-btn">{buttonText}</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroVideo;
