import React from 'react';
const TrendItem = ({ title, price, description, link, backgroundImage }) => (
  <div
    className="trend-item"
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', // Assuming white text for better contrast
        padding: '20px', 
        height: '300px', // Fixed height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width:'100%',
        marginTop:'0px'
    }}
  >
    <h1>{title} - Starting ₹{price}</h1>
    <p>{description}</p>
    <div className="shopin">
      <a href={link} target="_blank" rel="noopener noreferrer">Shop Now</a>
    </div>
  </div>
);

const Trends = () => {
  const trendData = [
    {
      title: 'Planters',
      price: 129,
      description: 'Add color to your garden. 400+ pots of different colors, shapes, and materials.',
      link: 'https://nurserylive.com/collections/planters',
      backgroundImage: 'https://nurserylive.com/cdn/shop/files/nurserylive-home-page-planters_7b92b1a7-6c8b-4dd0-9b93-1026eff0a09c_832x413.jpg?v=1633894835',
    },
    {
      title: 'Soil & Fertilizers',
      price: 100,
      description: 'Healthy food is a key for healthy plants. Choose from a wide range of soil and fertilizers.',
      link: 'https://nurserylive.com/collections/soil-and-fertilizers',
      backgroundImage: 'https://nurserylive.com/cdn/shop/files/nurserylive-home-page-soil-and-fertilizers_ee17c551-750c-46ff-a546-45f9c6835abc_1200x595.jpg?v=1633894835',
    },
    {
      title: 'Pebbles',
      price: 79,
      description: 'Add visuals and textural features to your garden with a wide range of natural pebbles.',
      link: 'https://nurserylive.com/collections/pebbles',
      backgroundImage: 'https://nurserylive.com/cdn/shop/files/nurserylive-home-page-pebbles-1_1034x513.jpg?v=1634739961',
    },
    {
      title: 'Tools',
      price: 129,
      description: 'Get a tool for every gardening activity and make it a fun experience.',
      link: 'https://nurserylive.com/collections/gardening-tools',
      backgroundImage: 'https://nurserylive.com/cdn/shop/files/nurserylive-home-page-tools-1_757x375.jpg?v=1634739985',
    },
  ];

  return (
    <><div class="trend-name" id="decor">Garden Decor & Care</div>
          <hr style={{ border: '1px solid grey' }} />

    <div className="trends">
      <div className="trendA" style={{ color: "rgb(211, 53, 77)"}}>
        {trendData.slice(0, 2).map((item, index) => (
          <TrendItem
            key={index}
            title={item.title}
            price={item.price}
            description={item.description}
            link={item.link}
            backgroundImage={item.backgroundImage}
          />
        ))}
      </div>
      <div className="trendB">
        {trendData.slice(2, 4).map((item, index) => (
          <TrendItem
            key={index + 2}
            title={item.title}
            price={item.price}
            description={item.description}
            link={item.link}
            backgroundImage={item.backgroundImage}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Trends;
