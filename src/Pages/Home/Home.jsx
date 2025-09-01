import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Carousel from '../../components/Carousel/Carousel'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'

function Home(){
    const slides = [
      {
          image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
          title: 'Modern Shopping Starts Here',
          subtitle: 'Explore premium collections with exciting offers.',
          button: 'Shop Now'
      },
      {
          image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1500&q=80',
          title: 'Modern Shopping Starts Here',
          subtitle: 'Explore premium collections with exciting offers.',
          button: 'Shop Now'
      },
      {
          image:'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1500&q=80',
          title: 'Modern Shopping Starts Here',
          subtitle: 'Explore premium collections with exciting offers.',
          button: 'Shop Now'
      }
    ];

    return (
        <div className="Home">
            <Navbar />
            <Carousel slides={slides}/>
            <Products />
            <Footer />
        </div>
    )
}
export default Home;
