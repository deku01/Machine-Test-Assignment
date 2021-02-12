import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';
import './Card.css';

const Home = () => {
    //Set Initial  State
    const [photos,setPhotos] = useState([]);

    useEffect(() => {
        //Getting Data from API using axios
        async function getData() {
        const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
        console.log(res.data.length);
        const photo = res.data;
        const filterPhotos = photo.slice(0,9);
        console.log(filterPhotos.length);
        setPhotos(filterPhotos);
      }
      getData();
    }, []);

    //delete card
    const deleteCard = (id) => {
        const filterData = photos.filter((item, index) => {
            return id !== index
        })
        setPhotos(filterData)
    }

    return (
        <div className="container">
			<div className="header">
				<h1>Page Heading</h1>
					&nbsp;&nbsp;
				<h2 className="text-muted">Secondary Text</h2>
			</div>
			<hr/>
            <div className="customContainer">
            {photos.map((photo,index) => {
                return <Card 
                key={photo.id}
                id={index}
                url={photo.url}
                deleteCard={deleteCard}
            />
            })}
             </div>
			<hr/>
			<div className="footer">copyright © your website 2021</div>
		</div>
    )
}

export default Home;