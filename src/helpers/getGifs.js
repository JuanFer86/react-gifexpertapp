

export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=A6OwainTVajnKkVyqZ66iij30tROxxyA`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    //el signo de  ? en images, sirve como condicion de si existe la propiedad images
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    } )

    return gifs;

}