import React from 'react';

const KokedamaItem = ({ title, discount, link, imageSrc }) => (
  <div
    style={{
      textAlign: 'center',
      fontSize: '16px',
      color: '#333',
      margin: '10px',
    }}
  >
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={imageSrc}
        alt=""
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          boxShadow: '1px 1px 10px black',
          transition: 'transform 0.2s ease-in-out',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
    </a>
    <br /><br />
    <div>{title} - {discount}</div>
  </div>
);

const MoreBigCircles = () => {
  const kokedamaData = [
    {
      title: 'Bonsai Plants',
      discount: 'Upto 25% Off',
      link: 'https://www.ugaoo.com/products/ficus-bonsai-plant?variant=40859256782980&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=google&utm_medium=cpc&utm_campaign=Pmax_plants&gad_source=1&gclid=CjwKCAjw26KxBhBDEiwAu6KXt3k9Cn-9F3WD8R_yx02ptSbOyZuMVF9GTrcPNvo2mkH1rpRLEMYvjhoCA68QAvD_BwE',
      imageSrc: 'https://nurserylive.com/cdn/shop/files/nurserylive-home-page-trending-bonsai-plants-new_445x445.png?v=1633892836',
    },
    {
      title: 'Ceramic Planters',
      discount: 'Starting ₹299',
      link: 'https://www.amazon.in/Ugaoo-Football-Ceramic-Pot-Blue/dp/B01JUE0WA4/ref=asc_df_B01JUE0WA4/?tag=googleshopdes-21&linkCode=df0&hvadid=397079164496&hvpos=&hvnetw=g&hvrand=11315093675988263926&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062094&hvtargid=pla-846958449094&mcid=30ef1b941e5234e6b66860636a02f5e5&ext_vrnc=hi&gclid=CjwKCAjw26KxBhBDEiwAu6KXt8H8L5SD8_NA91jqJx1SjX9GuMu7JW4jU8vOhvZKONy1KpNULydnRxoCIWAQAvD_BwE&th=1',
      imageSrc: 'https://nurserylive.com/cdn/shop/files/nurserylive-home-page-trending-ceramic-planters-new1_445x445.png?v=1633893954',
    },
    {
      title: 'Kokedama',
      discount: 'Starting ₹249',
      link: 'https://www.meesho.com/greenery-pro-zz-plant-kokedama/p/5xzmhm',
      imageSrc: 'https://nurserylive.com/cdn/shop/files/nurserylive-home-page-trending-kokedama-plants-new_445x445.png?v=1633893945',
    },
    {
      title: 'Month Wise Gardening',
      discount: 'Upto 65% Off',
      link: 'https://nurserylive.com/collections/month-wise-gardening',
      imageSrc: 'https://nurserylive.com/cdn/shop/files/nurserylive-home-page-trending-monthwise-gardening-new_274x274.png?v=1633893953',
    },
  ];

  return (
    <>
    <div class="bonsai" id="bonsai">TRENDING</div>
    <hr style={{ border: '1px solid grey' }} />
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding:'40px',
        gap: '40px',
      }}
    >
      {kokedamaData.map((item, index) => (
        <KokedamaItem
          key={index}
          title={item.title}
          discount={item.discount}
          link={item.link}
          imageSrc={item.imageSrc}
        />
      ))}
    </div>
    </>
    );
};

export default MoreBigCircles;
