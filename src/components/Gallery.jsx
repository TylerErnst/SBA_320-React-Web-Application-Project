import React from 'react'
import Carousel from 'better-react-carousel'

const Gallery = ({pokemon}) => {
    const renderCarouselItems = (sprites) => {
        const items = [];
      
        const extractImages = (obj, parentKey = '') => {
          for (let key in obj) {
            if (typeof obj[key] === 'string') {
              items.push(
                <Carousel.Item key={items.length}>
                  <img width="100%" src={obj[key]} alt={key} />
                  <div style={{ textAlign: 'center', marginTop: '5px' }}>{parentKey ? `${parentKey}.${key}` : key}</div>
                </Carousel.Item>
              );
            } else if (typeof obj[key] === 'object') {
              extractImages(obj[key], parentKey ? `${parentKey}.${key}` : key); // Recursively extract images from nested objects
            }
          }
        };
      
        extractImages(sprites);
        return items;
      };
    
    return (
        <Carousel cols={4} rows={1} gap={10} loop>
          {renderCarouselItems(pokemon.sprites)}
        </Carousel>
      );
}

export default Gallery