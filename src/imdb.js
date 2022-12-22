const api_key = "f129b837e6d7de705ea8aae051c31e9d";
const api_base = "https://api.themoviedb.org/3";

const basicFetch = async (end) =>{
    const req = await fetch(`${api_base}${end}`);
    const json = await req.json();
    return json;
}
export default{
        getHomeList: async ()=>{
            return[
                {
                    slug: "originals",
                    title: "Originais da Netflix",
                    items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${api_key}`)
                },
                {
                    slug: "trending",
                    title: "Recomendados",
                    items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${api_key}`)                
                },
                {
                    slug: "toprated",
                    title: "Em Alta",
                    items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${api_key}`)
                },
                {
                    slug: "action",
                    title: "Ação",
                    items:await basicFetch(`/discover/movie?with_generes=288&language=pt-BR&api_key=${api_key}`)
                },
                {
                    slug: "comedy",
                    title: "Comédia",
                    items:await basicFetch(`/discover/movie?with_generes=35&language=pt-BR&api_key=${api_key}`)
                },
                {
                    slug: "horror",
                    title: "Terror",
                    items:await basicFetch(`/discover/movie?with_generes=27&language=pt-BR&api_key=${api_key}`)
                },
                {
                    slug: "romance",
                    title: "Romance",
                    items:await basicFetch(`/discover/movie?with_generes=10749&language=pt-BR&api_key=${api_key}`)
                },
                {
                    slug: "documentary",
                    title: "Documentários",
                    items:await basicFetch(`/discover/movie?with_generes=99&language=pt-BR&api_key=${api_key}`)
                },
            ];
        },
        getMovieFeature: async (movie, type)=>{
            let FeatureInfo = {}
            if(movie){
                switch(type){
                    case 'movie':
                        FeatureInfo = basicFetch(`/movie/${movie}?laguage=pt-BR&api_key=${api_key}`)
                        break;
                    case 'tv':
                        FeatureInfo = basicFetch(`/tv/${movie}?laguage=pt-BR&api_key=${api_key}`)
                        break;
                    default: null
                    break;
                }
            }     
            return FeatureInfo
        
        }
}