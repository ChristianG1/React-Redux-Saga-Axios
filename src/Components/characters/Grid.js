import React from 'react';
import Item from './Item';

const Grid = ({ loading, items }) => {
  return (
    loading 
    ? 
      <div className='center'>
        <iframe src="https://giphy.com/embed/AQbiUzxhIlM6k" width="400" height="480" frameBorder="0" class="giphy-embed" allowFullScreen />
      </div> 
    : 
      <section className='cards'>
        {items && items.map(item => (
          <Item key={item.char_id} item={item}></Item>
        ))}
      </section>
  )
}

export default Grid;