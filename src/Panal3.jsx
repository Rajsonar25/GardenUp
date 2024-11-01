import React from 'react';
const PanelElement = ({ href, iconClass, title, description }) => (
  <a
    className="panel-element"
    href={href}
    
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={iconClass} ></i>
    <h2 >{title}</h2>
    <p>{description}</p>
  </a>
);

const Panel3 = () => {
  const panelData = [
    {
      href: 'https://support.nurserylive.com/support/home',
      iconClass: 'fa-solid fa-mobile',
      title: 'Largest Nursery',
      description: '1.2 Million plant lovers connected with us',
    },
    {
      href: 'https://nurserylive.com/pages/order-tracking',
      iconClass: 'fa-solid fa-user-group',
      title: 'Lifetime Support',
      description: 'We help you to grow your garden for lifetime',
    },
    {
      href: '',
      iconClass: 'fa-solid fa-house-chimney',
      title: 'All India Delivery',
      description: 'Delivering greenery across India since 2024',
    },
    {
      href: 'https://nurserylive.com/pages/offers',
      iconClass: 'fa-solid fa-truck-fast',
      title: 'Secure Shipping',
      description: 'Diligent care taken to deliver healthy plants',
    },
  ];

  return (
    <div className="panel3" >
      {panelData.map((item, index) => (
        <PanelElement
          key={index}
          href={item.href}
          iconClass={item.iconClass}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Panel3;

