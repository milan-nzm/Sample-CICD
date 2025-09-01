import React, { useEffect, useRef } from 'react';
import './Products.css';

const Category = [
  {
    id: 1,
    name: 'Smart Watch',
    price: '$149',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Nike Running Shoes',
    price: '$99',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Bluetooth Headphones',
    price: '$129',
    image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Leather Backpack',
    price: '$79',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Sunglasses',
    price: '$59',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Minimalist Wristwatch',
    price: '$189',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    name: 'DSLR Camera',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    name: 'Casual Sneakers',
    price: '$85',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    name: 'Sunglasses',
    price: '$59',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    name: 'Minimalist Wristwatch',
    price: '$189',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 11,
    name: 'DSLR Camera',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 12,
    name: 'Casual Sneakers',
    price: '$85',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
  },
];

// const Products = () => {
//   return (
//     <div className="products">
//       <h2>Products Categories</h2>
//       <div className="product-carousel">
//         {Category.map(product => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} />
//             <h4>{product.name}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Products;


const Products = () => {
    const carouselRef = useRef(null);
    const duplicatedItems = [...Category, ...Category];
    
    useEffect(() => {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
          if (scrollLeft + clientWidth >= scrollWidth) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            carouselRef.current.scrollBy({ left: 150, behavior: 'smooth' });
          }
        }
      }, 2500);
  
      return () => clearInterval(interval);
    }, []);
    return (
        <div className="products">
          <h2 className="product-title">Products Categories</h2>
          <div className="product-carousel" ref={carouselRef}>
            {duplicatedItems.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
              </div>
            ))}
          </div>
          <h2 className='product-title'>Popular Products</h2>
          <div className="product-carousel" ref={carouselRef}>
            {Category.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
              </div>
            ))}
          </div>
        </div>
    );
};
export default Products;    