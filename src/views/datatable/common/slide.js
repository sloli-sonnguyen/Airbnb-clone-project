import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'


import './slide.css';
import { CCarouselCaption, CCarouselItem, CCarousel, CCarouselIndicators, CCarouselInner, CCarouselControl, CCol, CRow } from '@coreui/react';
import axios from 'axios';



const Slider = () => {

    const [images, setImages] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation();
    const array = location.pathname.split('/');
    const id = array[array.length - 1];
    useEffect(() => {
        axios.get(`http://localhost:5000/images/by-roomId/${id}`)
            .then(function (res) {
                setImages(res.data);
            })
    }, [id])
    return (
        <div className="slide-wrapper">
            <CRow>
                <CCol sm={12}>
                    {
                        images.length > 0 ? (<CCarousel activeIndex={activeIndex}>
                            <CCarouselIndicators />
                            <CCarouselInner>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={images[0].url_image} alt="slide 1" />
                                    <CCarouselCaption><h3>Slide 1</h3><p>Slide 1</p></CCarouselCaption>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={images[1].url_image} alt="slide 2" />
                                    <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={images[2].url_image} alt="slide 3" />
                                    <CCarouselCaption><h3>Slide 3</h3><p>Slide 3</p></CCarouselCaption>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={images[3].url_image} alt="slide 3" />
                                    <CCarouselCaption><h3>Slide 4</h3><p>Slide 4</p></CCarouselCaption>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <img className="d-block w-100" src={images[4].url_image} alt="slide 3" />
                                    <CCarouselCaption><h3>Slide 5</h3><p>Slide 5</p></CCarouselCaption>
                                </CCarouselItem>
                            </CCarouselInner>
                            <CCarouselControl direction="prev" />
                            <CCarouselControl direction="next" />
                        </CCarousel>) : (<h1>Không có ảnh</h1>)
                    }
                </CCol>
            </CRow>
        </div>
    )
}

export default Slider;
