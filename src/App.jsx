
import { useState, useEffect } from 'react';
import './App.css';
import Tmdb from './imdb';
import { MovieRow } from './components/movieRow/movieRow';
import {Header,MovieFeatured} from './components/Header/header';
import Footer from './components/footer/footer'





function App() {

  
  const [blackHeader, setBlackHeader] = useState();
  const [movieList, setMovieList] = useState([]);
  const [featureMovie, setFeatureMovie]= useState([]);
  
  
  

  useEffect(()=>{
    const loadAll = async ()=>{
      //pegando a Lista
      let list= await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o Feature
      let originals = list.filter(i=>i.slug === "originals");
      let random = Math.floor(Math.random()*(originals[0].items.results.length))
      let Chosen = originals[0].items.results[random]
      let chosenInfo = await Tmdb.getMovieFeature(Chosen.id, 'tv')
      
      setFeatureMovie(chosenInfo)
    }
    loadAll();
  }, [])

// Monitorando o Scoll 
  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY >50){
      setBlackHeader(true)}else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)
    return ()=> {
      window.removeEventListener('scroll', scrollListener)
    }
  },[]);


  return (
  <div className='page'>
    <Header black={blackHeader}/>
      {featureMovie &&
        <MovieFeatured item={featureMovie}/>
      }    
      <section className='listas'>
        {movieList.map((item, key)=>(
          <MovieRow
          title={item.title} 
          key={key} 
          items={item.items}/>
          
        ))}
      </section>
      <Footer/>
  </div>
  );
}

export default App
