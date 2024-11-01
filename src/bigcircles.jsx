import React from 'react';

const Bulb = ({ link, imageSrc, altText, description }) => (
  <div className="bulbs">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="offerlogo1" src={imageSrc} style={{ width: '200px', height: '200px' }} alt={altText} />
    </a>
    {description}
  </div>
);

const BigCircles1 = () => {
  const bulbsData = [
    {
      link: 'https://theaffordableorganicstore.com/product/ranuculus-bulbs/?utm_source=Google%20Shopping&utm_campaign=Google-India-all-products&utm_medium=cpc&utm_term=353957358&gad_source=1&gclid=CjwKCAjw26KxBhBDEiwAu6KXt7nrAua1fsENoIyWNdOKrxKHYDDXAerduGU0jD7K3-WPEk953MRqYBoCoCoQAvD_BwE',
      imageSrc: 'https://nurserylive.com/cdn/shop/collections/208243ea2a5605e9943058a60a3cf1e7_0295f4b1-99cc-4e36-b809-58375436938b_260x260.jpg?v=1681381552',
      altText: '',
      description: 'Rananculus Flower Bulbs',
    },
    {
      link: 'https://nurserylive.com/collections/hyacinth-flower-bulbs',
      imageSrc: 'https://nurserylive.com/cdn/shop/collections/41645e2dc5e3bac2ae240a123fb17519-154423_260x260.jpg?v=1681381548',
      altText: '',
      description: 'Hyacinth Flower Bulbs',
    },
    {
      link: 'https://www.amazon.in/Tulip-Flower-Plant-Bulbs-Zabbus/dp/B0BQKQHP28/ref=asc_df_B0BQKQHP28/?tag=googleshopdes-21&linkCode=df0&hvadid=686199637604&hvpos=&hvnetw=g&hvrand=6677760247908466163&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062094&hvtargid=pla-2284138714318&psc=1&mcid=7af4d82a1a863f74bbc9217682c49ef5&gad_source=1',
      imageSrc: 'https://nurserylive.com/cdn/shop/collections/3deea72de3e1251177beb61e9648481d_177x177.jpg?v=1681381553',
      altText: '',
      description: 'Tulip Flower Bulbs',
    },
    {
      link: 'https://nurserylive.com/collections/daffodil-flower-bulbs',
      imageSrc: 'https://nurserylive.com/cdn/shop/collections/60713d771e8e222d7a50ff71da6fb980-334575_177x177.jpg?v=1681381694',
      altText: '',
      description: 'Daffodil Flower Bulbs',
    },
    {
      link: 'https://nurserylive.com/collections/iris-flower-bulbs',
      imageSrc: 'https://nurserylive.com/cdn/shop/collections/8357c7245d7d7e207ea248759b0dbfc0_177x177.jpg?v=1681381548',
      altText: '',
      description: 'Iris Flower Bulbs',
    },
    {
      link: 'https://nurserylive.com/collections/gladiolus-flower-bulbs',
      imageSrc: 'https://nurserylive.com/cdn/shop/collections/093cef4f08ff326611cb1ee1b82cbb77-507378_177x177.jpg?v=1681381548',
      altText: '',
      description: 'Gladiolus Flower Bulbs',
    },
  ];

  return (
    <>
    <div class="winter" id="winter">Imported Winter Flowers Bulbs</div>
    <hr style={{ border: '1px solid grey' }} />
    <div className="bigcircles">
      {bulbsData.map((bulb, index) => (
        <Bulb
          key={index}
          link={bulb.link}
          imageSrc={bulb.imageSrc}
          altText={bulb.altText}
          description={bulb.description}
        />
      ))}
    </div>
      <div className="View-More">
        <a href="https://nurserylive.com/collections/winter-sowing-flower-bulbs" target="_blank" rel="noopener noreferrer">
          View More
        </a>
      </div>
      </>
  );
};

export default BigCircles1;
