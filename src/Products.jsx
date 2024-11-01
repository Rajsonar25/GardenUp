import React from 'react';

// Product data with images and discounts
const productsData = [
  {
    id: 1,
    title: 'Top 4 die Hard Succulents Pack',
    originalPrice: '₹1014/-',
    discountedPrice: '₹559/-',
    discount: 'Save 45%',
    imageUrl: 'https://example.com/image1.jpg', // Replace with actual image URL
    secculantClass: 'secculants1',
  },
  {
    id: 2,
    title: '5 Best Fragrant Plants',
    originalPrice: '₹1655/-',
    discountedPrice: '₹1459/-',
    discount: 'Save 12%',
    imageUrl: 'https://example.com/image2.jpg', // Replace with actual image URL
    secculantClass: 'secculants2',
  },
  {
    id: 3,
    title: '5 Best Indoor Plants Pack',
    originalPrice: '₹1470/-',
    discountedPrice: '₹1159/-',
    discount: 'Save 21%',
    imageUrl: 'https://example.com/image3.jpg', // Replace with actual image URL
    secculantClass: 'secculants3',
  },
  {
    id: 4,
    title: 'Top 5 Air Purifier & Oxygen Enriching Plants',
    originalPrice: '₹1255/-',
    discountedPrice: '₹1059/-',
    discount: 'Save 20%',
    imageUrl: 'https://example.com/image4.jpg', // Replace with actual image URL
    secculantClass: 'secculants4',
  },
  {
    id: 5,
    title: 'Plant Pack for Healthy home/office',
    originalPrice: '₹1620/-',
    discountedPrice: '₹1299/-',
    discount: 'Save 16%',
    imageUrl: 'https://example.com/image5.jpg', // Replace with actual image URL
    secculantClass: 'secculants5',
  },
];

// Product component to display individual product information
const Product = ({ title, originalPrice, discountedPrice, discount, imageUrl, secculantClass }) => {
  return (
    <div className="product">
      <div className={`scc ${secculantClass}`}>
        <p className="ert">{discount}</p>
        <img src={imageUrl} alt={" "} className="offerlogo" style={{ height: '130px', width: '130px' }} />
      </div>
      <h3>{title}</h3>
      <p className="price-cut">{originalPrice}</p>
      <p className="price">{discountedPrice}</p>
      <button className="buybutton">Add to Cart</button>
    </div>
  );
};

// Products component to display the list of products
const Products = () => {
  return (
    <div>
      <div className="valueformoney">Value For Money - Upto 35% Off</div>
      <div className="products" id="products">
        {productsData.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
            discount={product.discount}
            imageUrl={product.imageUrl}
            secculantClass={product.secculantClass}
          />
        ))}
        
      </div>
    </div>
  );
};

export default Products;
