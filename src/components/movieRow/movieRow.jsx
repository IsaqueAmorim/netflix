import './movieRow.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from "swiper";


 export const MovieRow = (props) =>{

    

    return(
        <section className="movies__list">
            <h2>{props.title}</h2>
            <div  className="list">
                <Swiper slidesPerView={4}
                spaceBetween={140}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
           breakpoints={{
               300:{
                width: 300,
                slidesPerView: 3,
                spaceBetween: 140
               },
               400:{
                width: 400,
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 2
               },
                640:{
                    width: 640,
                    slidesPerView: 4,
                    spaceBetween: 0,
                    slidesPerGroup: 3
                },
                768:{
                    width: 768,
                    slidesPerView: 5,
                    spaceBetween: 10,
                    slidesPerGroup: 4
                },
                1000:{
                    width: 1000,
                    slidesPerView: 6,
                    spaceBetween: 200,
                   
                },
                1300:{
                    width:1300,
                    slidesPerView: 7,
                    spaceBetween: 40,
                
                },
                1600:{
                    width: 1600,
                    slidesPerView: 6,
                    spaceBetween: 180,
            
                },
                1920:{
                    width:1920,
                    slidesPerView: 7,
                    spaceBetween: 160,
            
                }
                
           }}
            navigation={true}
            modules={[Pagination, Navigation]
            }
            >
                {props.items.results.length > 0 && props.items.results.map((item, key)=>(
                    <SwiperSlide key={key}  >
                    <img  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}alt="capa" />
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}