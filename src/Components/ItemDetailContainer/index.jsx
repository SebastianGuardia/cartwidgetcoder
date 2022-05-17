import React,{useState, useEffect}  from 'react'
import ItemDetail from '../ItemDetail'

const  film = { id: 1, image: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/interstellar/posters/18799170-1-esl-ES/Posters.jpg?resize=980:*", title: "Interestellar"};

export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(film);
            }, 3000);
        });

        getData.then(res => setData(res));
    },[])

  return (
    <ItemDetail data ={data}/>
  );
}

export default ItemDetailContainer