import React,{useState, useEffect} from 'react';
import Title from '../Title';
import ItemCounter  from '../ItemCounter';
import ItemList from '../ItemList';

const films = [
  { id: 1, image: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/interstellar/posters/18799170-1-esl-ES/Posters.jpg?resize=980:*", title: "Interestellar"},
  { id: 2, image: "https://areajugones.sport.es/wp-content/uploads/2021/09/star-trek.jpeg", title: "Star Trek"},
  { id: 3, image: "https://i.blogs.es/1da08b/1366_2000-9-/450_1000.jpeg", title: "Start Wars"},
];

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(films);
      },3000);
    });
    getData.then(res => setData(res))
  },[])

  const onAdd = (quantity) => {
    console.log('Comprastre  unidades');
  }

  return (
    <>
    <Title greeting={texto} />
    <ItemCounter initial={1} stock={10} onAdd={onAdd}/>
    <ItemList data = {data}/>
    </>
  );
}

export default ItemListContainer;