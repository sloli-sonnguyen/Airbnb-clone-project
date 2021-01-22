import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css';

function ImageGalerry(props) {
    const { id } = props;


    const [images, setImages] = useState([
        'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
        'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
        'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
        'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
        'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
    ]);


    useEffect(() => {
        axios.get(`http://localhost:5000/images/by-roomId/${id}`)
            .then(function (res) {
                setImages(res.data);
            })
    }, [id])





    console.log(images);
    return (
        <div className="album">
            <div className="item1 item">
                <img
                    src={images[0].url_image}
                    alt="sd"
                />
            </div>
            <div className="item2 item">
                <img
                    src={images[1].url_image}
                    alt="sd"
                />
            </div>
            <div className="item3 item">
                <img
                    src={images[2].url_image}
                    alt="sds"
                />
            </div>
            <div className="item4 item">
                <img
                    src={images[3].url_image}
                    alt="sds"
                />
            </div>
            <div className="item5 item">
                <img
                    src={images[4].url_image}
                    alt="asd"
                />
            </div>
        </div>
    );
}

export default ImageGalerry;