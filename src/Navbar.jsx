import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faComments, faCartShopping, faBasketShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <header>
      <div className="navbar" id="navbar">
        <a className="menu-icon" id="menu-button" href="/">
          <FontAwesomeIcon icon={faBars} />
        </a>
        <ul className="menu-list" id="menu-list">
          <li><a className="element" href="#navbar">Home</a></li>
          <li><a className="element" href="#winter">Imported winter flowers bulbs</a></li>
          <li><a className="element" href="#decor">Garden Decor and care</a></li>
          <li><a className="element" href="#bonsai">Trending</a></li>
          <li><a className="element" href="#blog-name">Blogs and forums</a></li>
          <li><a className="element" href="#ytlink">Youtube link</a></li>
        </ul>

        <div className="nav-logo border">
          <div className="logo"></div>
        </div>

        <div className="nav-search">
          <select className="search-select">
            <option>All</option>
            <option>Gardening</option>
            <option>Plants</option>
            <option>Seeds</option>
            <option>Bulbs</option>
            <option>Pots</option>
            <option>Fertilizers</option>
            <option>Corporate</option>
            <option>Pebbles</option>
            <option>Accessories</option>
          </select>
          <form className="form" action="http://www.google.com/search" method="GET" target="_blank" rel="noopener noreferrer">
            <input placeholder="What are you searching for?" className="search-input" name="q" required />
            <button type="submit" className="search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>

        <div>
          <a className="flowers" rel="noreferrer" href="https://support.nurserylive.com/support/home" target="_blank">
            <FontAwesomeIcon icon={faComments} />
          </a>
        </div>

        <div className="nav-support">
          <p><span>Expert support</span></p>
          <p className="nav-second">Available 24/7</p>
        </div>

        <div className="nav-cart">
          <FontAwesomeIcon icon={faCartShopping} /> Cart
        </div>
      </div>

      <div className="panel">
        <div className="panel-all">
          <FontAwesomeIcon icon={faBasketShopping} />
          <a className="ladyfinger" href="https://www.amazon.in/s?k=GARDENING&s=price-asc-rank&crid=ODZTCDAMXB49&qid=1713005903&sprefix=gardenin%2Caps%2C229&ref=sr_st_price-asc-rank&ds=v1%3An83lMKK4MiQtXY7WMRYV8FH%2BihrCmKNlmPu8gMJ9DOk">All</a>
        </div>

        <div className="panel-ops">
          <SelectOptions />
        </div>

        <div className="panel-deals">
          Shop deals in gardening
        </div>
      </div>
    </header>
  );
};

const SelectOptions = () => {
  const options = [
    {
      title: 'Gardening',
      links: [
        { label: 'Gardening INFO', url: 'https://en.wikipedia.org/wiki/Gardening' },
        { label: 'Bestsellers', url: 'https://nurserylive.com/collections/bestsellers-in-gardening' },
        { label: 'Indoor Gardening', url: 'https://nurserylive.com/collections/indoor-garden' },
        { label: 'Vertical Garden', url: 'https://nurserylive.com/collections/vertical-garden' },
        { label: 'Balcony and Terrace Garden', url: 'https://nurserylive.com/collections/balcony-and-terrace-garden' },
        { label: 'Monsoon Special Plants Packs', url: 'https://nurserylive.com/collections/monsoon-special-plants-packs' },
        { label: 'Air Purifying Plants Packs', url: 'https://nurserylive.com/collections/air-purifying-plants-packs' },
        { label: 'Garden Kits', url: 'https://nurserylive.com/collections/garden-kits' }
      ]
    },
    {
      title: 'Seeds',
      links: [
        { label: 'Seeds INFO', url: 'https://www.britannica.com/science/seed-plant-reproductive-part' },
        { label: 'Trending Seeds', url: 'https://nurserylive.com/collections/best-seller-seeds' },
        { label: 'Vegetable Seeds', url: 'https://nurserylive.com/collections/exotic-vegetable-seeds' },
        { label: 'Herb Seeds', url: 'https://nurserylive.com/collections/indian-herb-seeds' },
        { label: 'Imported Hybrid Flower Seeds', url: 'https://nurserylive.com/collections/imported-hybrid-flower-seeds' },
        { label: 'Flowering Tree and Shrub Seeds', url: 'https://nurserylive.com/collections/flowering-tree-and-shrub-seeds' },
        { label: 'Easy To Grow Fruit Seeds', url: 'https://nurserylive.com/collections/easy-to-grow-fruit-seeds' },
        { label: 'Easy to Grow Microgreens', url: 'https://nurserylive.com/collections/easy-to-grow-microgreens' },
        { label: 'Vegetable Seeds to Sow in All Seasons', url: 'https://nurserylive.com/collections/vegetable-seeds-to-sow-in-all-seasons' },
        { label: 'Rainy Sowing Herb Seeds', url: 'https://nurserylive.com/collections/rainy-sowing-herb-seedss' }
      ]
    },
    {
      title: 'Plantsbulbs',
      links: [
        { label: 'Bulbs INFO', url: 'https://www.britannica.com/science/bulb' },
        { label: 'Trending Flower Bulbs', url: 'https://nurserylive.com/collections/trending-flower-bulbs' },
        { label: 'Bulbs by Sowing Time', url: 'https://nurserylive.com/collections/bulbs-by-sowing-time' },
        { label: 'Bulbs by Flower Color', url: 'https://nurserylive.com/collections/bulbs-by-flower-color' },
        { label: 'Flower Bulbs Garden Kits', url: 'https://nurserylive.com/collections/flower-bulbs-garden-kits' },
        { label: 'Bulbs by Name', url: 'https://nurserylive.com/collections/bulbs-by-name' }
      ]
    },
    {
      title: 'Pots',
      links: [
        { label: 'Pots INFO', url: 'https://harshdeepindia.com/garden-pots/#:~:text=Choose%20the%20material%20that%20best,your%20garden%20or%20outdoor%20space.' },
        { label: 'Planters', url: 'https://nurserylive.com/collections/planters' },
        { label: 'Planter Accessories', url: 'https://nurserylive.com/collections/planters-accessories' },
        { label: 'Planters by Color', url: 'https://nurserylive.com/collections/planters-by-color' },
        { label: 'Planters by Material', url: 'https://nurserylive.com/collections/planters-by-material' },
        { label: 'Planters by Finish', url: 'https://nurserylive.com/collections/planters-by-finish' },
        { label: 'Planters by Location', url: 'https://nurserylive.com/collections/planters-by-location' }
      ]
    },
    {
      title: 'Fertilizers',
      links: [
        { label: 'Fertilizers INFO', url: 'https://www.britannica.com/topic/fertilizer' },
        { label: 'Best Seller Soil and Fertilizer', url: 'https://nurserylive.com/collections/best-seller-soil-and-fertilizer' },
        { label: 'Organic Fertilizers', url: 'https://nurserylive.com/collections/organic-fertilizer' },
        { label: 'Potting Soil', url: 'https://nurserylive.com/collections/potting-soil' },
        { label: 'Cocopeat', url: 'https://nurserylive.com/collections/cocopeat' },
        { label: 'Soil Additives', url: 'https://nurserylive.com/collections/soil-additives' },
        { label: 'Organic Manure', url: 'https://nurserylive.com/collections/organic-manure' },
        { label: 'Fertilizers by NPK Ratio', url: 'https://nurserylive.com/collections/fertilizers-by-npk-ratio' }
      ]
    },
    {
      title: 'Accessories',
      links: [
        { label: 'Gardening Accessories INFO', url: 'https://www.britannica.com/science/gardening' },
        { label: 'Gardening Tools', url: 'https://nurserylive.com/collections/gardening-tools' },
        { label: 'Garden Decor', url: 'https://nurserylive.com/collections/garden-decor' }
      ]
    }
  ];

  const handleSelectChange = (event) => {
    const selectedUrl = event.target.value;
    if (selectedUrl) {
      window.open(selectedUrl, "_blank", "noopener,noreferrer"); // Open the link in a new tab
    }
  };

  return options.map((option, index) => (
    <select className="gardening" key={index} id={`mySelect${index + 1}`} onChange={handleSelectChange}>
      <option value="">{option.title}</option> {/* Default option should have an empty value */}
      {option.links.map((link, idx) => (
        <option key={idx} value={link.url}>{link.label}</option>
      ))}
    </select>
  ));
};

export default Navbar;

