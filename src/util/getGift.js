
  export const getGifs = async( categoria ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categoria ) }&limit=10&api_key=YJDf0n5EvNLIS7yKWQdeQdYd97OnQH0q`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gift = data.map( img =>  {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });
    return gift;
  }