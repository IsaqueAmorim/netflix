import './header.css'
import {FaSistrix} from 'react-icons/fa';
import { useState,useEffect } from 'react';
export const Header =({black})=>{
 

    return(
        <div className={`header ${(black ? 'blackHeader': "")}`} >
            <div className='logo'>
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="Logo Netflix"></img>
            </div>
            <div className='profile'>
                <FaSistrix style={{margin: '0px 20px 0px 0px', cursor:'pointer'}} color={'white'} size={25}/>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="Profile-Image" />
            </div>
        </div>
    );
} 


export const MovieFeatured = ({item})=>{
   
    const firstDate = new Date(item.last_air_date);
       
    return(
        <section>
            <div style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition:'center'}} 
            className='bbackdrop'></div>
            <div className="wrapper--top">
                <div className="wrapper-left">
                    <div className="info">
                        <h2>{item.original_name}</h2>
                        <div className="spans">
                            <span style={{color: '#00ff00'}}>{`${item.vote_average} Pontos`}</span>
                            <span>{firstDate.getFullYear().toString()}</span>
                            <span>{`${item.number_of_seasons} ${(item.number_of_seasons > 1 ? "Temporadas":"Temporada")}`}</span>
                        </div>
                        <p>{item.overview}</p>
                        <div className="buttons">
                            <button>► Assistir</button>
                            <button>+ Adicionar a Lista</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}