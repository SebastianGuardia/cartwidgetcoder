import React,{useState, useEffect}  from 'react'
import ItemDetail from '../ItemDetail'
import { useParams } from 'react-router-dom';

const  films = [
  { id: 1, image: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/interstellar/posters/18799170-1-esl-ES/Posters.jpg?resize=980:*",category:'peliculas', title: "Interestellar"},
  { id: 2, image: "https://areajugones.sport.es/wp-content/uploads/2021/09/star-trek.jpeg", category:'peliculas', title: "Star Trek"},
  { id: 3, image: "https://i.blogs.es/1da08b/1366_2000-9-/450_1000.jpeg",category:'peliculas', title: "Start Wars"},
  { id: 4, image: "https://media.tycsports.com/files/2022/03/18/404212/los-simuladores_862x485_wmk.jpg",category:'series', title: "Los Simuladores"},
  { id: 5, image: "https://cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/OSCPJQLK4NEOFJN6FPMZBAEAZY.jpg",category:'series', title: "Brooklyn 99"},
];
export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 1000);
        });

        getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    },[])

  return (
    <ItemDetail data ={data}/>
  );
}

export default ItemDetailContainer