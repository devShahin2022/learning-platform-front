import React from 'react';
import { Container } from 'react-bootstrap';
import './PrevStdReviews.css';
import Slider from "react-slick";

const PrevStdReviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

      const homeSlider = [
        {
            url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3bQlljod-AMBeQQJDMtOgaugGBBuz1LI2w&usqp=CAU",
            text : "This is good course . One of the most good course. This is good course . One of the most good course",
            name : "Md Shahin Alam",
            batch : 4,
            time : "23 aug, 2022"
        },
        {
            url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsmSxrJpycLq-Wk5T79AOYAn81ZH-GKGpUA&usqp=CAU",
            text : "This is good course . One of the most good course. This is good course . One of the most good course",
            name : "Md Shahin Alam",
            batch : 5,
            time : "23 aug, 2022"
        },
        {
            url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkyzJEjAn7ORDJtvJq8KaFhyOapQ9KkDEvQ&usqp=CAU",
            text : "This is good course . One of the most good course. This is good course . One of the most good course",
            name : "Md Shahin Alam",
            batch : 7,
            time : "23 aug, 2022"
        },
        {
            url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsQ1LxB2U7W7Jgc7l-WD_5M3WvfzxtY18-Q&usqp=CAU",
            text : "This is good course . One of the most good course. This is good course . One of the most good course",
            name : "Md Shahin Alam",
            batch : 1,
            time : "23 aug, 2022"
        }
      ];
    return (
        <Container className='mb-5'>
            <h2 className='my-4'>Students reviews</h2>
            <Slider {...settings}>
                {
                    homeSlider.map(element => {
                        return(
                        <>
                            <div className='row'>
                            <div className='col-6 d-flex w-50 flex-column'>
                                <img className='img-fluid w-100' src={element.url} alt="" />
                                <div className='d-flex justify-content-between'>
                                    <div>
                                    <p>{element.name}</p>
                                    <small>batch {element.batch}</small>
                                    </div>
                                    <p><i>{element.time}</i></p>
                                </div>
                            </div>
                            <div className='col-6 d-flex w-50 border bordered-2'>
                                <p className='lead'>{element.text}</p>
                            </div>
                            </div>
                        </>
                        );
                    })
                }
            </Slider>
        </Container>
    );
};

export default PrevStdReviews;