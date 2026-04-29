import HeroVideo from '../components/HeroVideo'
import CategoryBlocks from '../components/CategoryBlocks'
import FeaturedCollections from '../components/FeaturedCollections'
import NewArrivals from '../components/NewArrivals'
import BlogSection from '../components/BlogSection'

function Home() {
  return (
    <div className="page-content">
      <HeroVideo 
        videoUrl="https://www.shutterstock.com/shutterstock/videos/1049503465/preview/stock-footage-fashion-model-in-fashion-dress-walking-on-a-street.webm"
        title="NEW COLLECTION 2026"
        subtitle="ELEVATE YOUR EVERYDAY STYLE WITH OUR PREMIUM SELECTION"
        buttonText="SHOP NOW"
      />
      <CategoryBlocks />
      <FeaturedCollections />
      <NewArrivals />
      <BlogSection />
    </div>
  )
}

export default Home
