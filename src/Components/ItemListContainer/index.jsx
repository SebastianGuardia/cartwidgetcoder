import React from 'react';
import Title from '../Title';
import ItemCounter  from '../ItemCounter';

export const ItemListContainer = ({ texto }) => {

  return (
    <>
    <Title greeting={texto} />
    <ItemCounter initial={1} stock={10}/>
    </>
  )
}

export default ItemListContainer;