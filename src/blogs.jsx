import React from 'react';

const PlantItem = ({ title, link, imageSrc }) => (
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
        alt={title}
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          boxShadow: '1px 1px 10px black',
          transition: 'transform 0.2s ease-in-out',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
    </a>
    <br />
    {title}
  </div>
);

const BigCircles = () => {
  const plantData = [
    {
      title: 'Kamini Plant',
      link: 'https://kadiyamnursery.com/blogs/plant-guide/the-kamini-plant-a-rare-unique-and-exceptionally-potent-medicinal-herb-for-healing',
      imageSrc: 'https://nurserylive.com/cdn/shop/articles/kamini-plant-1-828068_374x313_crop_center.jpg?v=1685038968',
    },
    {
      title: 'Parijat flowers',
      link: 'https://www.floweraura.com/blog/everything-you-need-to-know-about-parijat-flowers',
      imageSrc: 'https://nurserylive.com/cdn/shop/articles/parijat-flowers-434576_600x250_crop_center.jpg?v=1695135291',
    },
    {
      title: 'The Peace Lily',
      link: 'https://www.floweraura.com/blog/plants-care-n-tips/peace-lily-plant-care-tips-and-more',
      imageSrc: 'https://nurserylive.com/cdn/shop/articles/peace-lily-1-693607_402x250_crop_center.jpg?v=1693576937',
    },
    {
      title: 'Mogra Flowers',
      link: 'https://www.floweraura.com/blog/what-is-a-mogra-plant-and-its-benefits',
      imageSrc: 'https://nurserylive.com/cdn/shop/articles/mogra1-117762_374x313_crop_center.jpg?v=1685879630',
    },
    {
      title: 'Jade Plant',
      link: 'https://mybageecha.com/blogs/articles/how-to-grow-jade-plants',
      imageSrc: 'https://nurserylive.com/cdn/shop/articles/nurserylive-combo-packs-plants-pack-of-3-good-luck-jade-plants-in-ceramic-pots-16969154297996_600x600_5aeb0844-aecb-41bb-8574-27ca51c6aa19_600x250_crop_center.jpg?v=1685864032',
    },
  ];

  return (<>
    <div class="blog-name" id="blog-name">BLOGS AND FORUMS</div>
    <hr style={{ border: '2px solid grey' }} />

    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        backgroundColor:'rgb(217, 227, 179)',
        color:'white',
      }}
    >
      {plantData.map((plant, index) => (
        <PlantItem
          key={index}
          title={plant.title}
          link={plant.link}
          imageSrc={plant.imageSrc}
        />
      ))}
    </div>
    </>
  );
};

export default BigCircles;
