import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Gallery = ({ pokemon }) => {
  const renderCarouselItems = (sprites) => {
    const items = [];

    const extractImages = (obj, parentKey = '') => {
      let count = 0;
      let rowItems = [];

      for (let key in obj) {
        if (typeof obj[key] === 'string') {
          rowItems.push(
            <div key={count++}>
              <img src={obj[key]} alt={key} />
              <p style={{ textAlign: 'center', marginTop: '5px' }}>
                {parentKey ? `${parentKey}.${key}` : key}
              </p>
            </div>
          );
        } else if (typeof obj[key] === 'object') {
          extractImages(obj[key], parentKey ? `${parentKey}.${key}` : key); // Recursively extract images from nested objects
        }

        if (count === 4) {
          items.push(rowItems);
          rowItems = [];
          count = 0;
        }
      }

      if (rowItems.length > 0) {
        items.push(rowItems);
      }
    };

    extractImages(sprites);
    return items;
  };

  return (
    <Carousel
      showArrows={true}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      dynamicHeight={false}
    >
      {renderCarouselItems(pokemon.sprites).map((row, index) => (
        <div key={index} style={{ display: 'flex' }}>
          {row}
        </div>
      ))}
    </Carousel>
  );
};

export default Gallery;
