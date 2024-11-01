import React from 'react';
import './App.css'; // Assuming you have a CSS file for styles

const Circles = () => {
  const links = [
    {
      href: "https://www.amazon.in/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=plants",
      imgSrc: "https://nurserylive.com/cdn/shop/files/nurserylive-offers-menu_149x170.png?v=1652634796",
      alt: "Offers"
    },
    {
      href: "https://www.amazon.in/s?k=gardening&ref=nb_sb_noss",
      imgSrc: "https://nurserylive.com/cdn/shop/files/nurserylive-gardening-menu_119x135.png?v=1652634796",
      alt: "Gardening"
    },
    {
      href: "https://www.amazon.in/s?k=plants+for+garden&crid=17CHMP4UEDW0X&sprefix=plants%2Caps%2C253&ref=nb_sb_ss_ts-doa-p_1_6",
      imgSrc: "https://nurserylive.com/cdn/shop/files/nurserylive-plant-menu_119x136.png?v=1652634796",
      alt: "Plants for Garden"
    },
    {
      href: "https://www.amazon.in/s?k=seeds+for+gardening&ref=nb_sb_noss",
      imgSrc: "https://nurserylive.com/cdn/shop/files/nurserylive-seeds-menu_119x135.png?v=1652634796",
      alt: "Seeds"
    },
    {
      href: "https://www.amazon.in/s?k=plant+bulbs&crid=13ST28LQ1HDY2&sprefix=plant+bulbs%2Caps%2C320&ref=nb_sb_noss_1",
      imgSrc: "https://nurserylive.com/cdn/shop/files/nurserylive-bulbs-menu_119x135.png?v=1652634796",
      alt: "Plant Bulbs"
    },
    {
      href: "https://www.amazon.in/s?k=plants+pots&crid=3G7A3Q8D7FCBG&sprefix=plants+po%2Caps%2C327&ref=nb_sb_ss_ts-doa-p_1_9",
      imgSrc: "https://nurserylive.com/cdn/shop/files/nurserylive-pots-menu_f7031d54-4be7-47cb-b6c7-b15010b952a6_119x135.png?v=1652968014",
      alt: "Plant Pots"
    },
    {
      href: "https://www.amazon.in/s?k=fertilizer+for+plants&crid=2DGE3Z9ZCNPMM&sprefix=fe%2Caps%2C327&ref=nb_sb_ss_ts-doa-p_2_2",
      imgSrc: "https://nurserylive.com/cdn/shop/files/nurserylive-fertilizer-menu_119x135.png?v=1652967754",
      alt: "Fertilizer"
    },
    {
      href: "https://www.amazon.in/s?k=plants+gift&crid=1YK7VQXCQEY1A&sprefix=plants+gif%2Caps%2C381&ref=nb_sb_noss_2",
      imgSrc: "https://nurserylive.com/cdn/shop/files/nurserylive-corporate-menu_119x135.png?v=1652634796",
      alt: "Plants Gift"
    },
    {
      href: "https://www.amazon.in/s?k=pebbles&crid=OA2VTHIAP1DN&sprefix=pebbles%2Caps%2C321&ref=nb_sb_noss_1",
      imgSrc: "https://nurserylive.com/cdn/shop/files/nurserylive-pebbles-menu_119x135.png?v=1652634796",
      alt: "Pebbles"
    },
    {
      href: "https://www.amazon.in/s?k=accessories+for+garden&crid=3665U317E3QG6&sprefix=accessories+for+garden%2Caps%2C318&ref=nb_sb_noss_1",
      imgSrc: "https://nurserylive.com/cdn/shop/files/nurserylive-accessories-menu_119x135.png?v=1652634796",
      alt: "Garden Accessories"
    }
  ];

  return (
    
    <div className="circles">
        
      {links.map((link, index) => (
        <div key={index}>
          <a href={link.href}>
            <img
              className="offerlogo"
              src={link.imgSrc}
              style={{ height: '130px' }}
              width="130px"
              alt={link.alt}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Circles;
