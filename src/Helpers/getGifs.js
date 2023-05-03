
export const getGifs = async({category}) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=4&api_key=CcdfUnivGYoURQcawOVTwed7q57fVgvM`;
    const resp = await fetch(url); // Await va a delante de mi codigo asincronico // Fetch resuelve la promesa
    const {data} = await resp.json(); // json transforma un string en un objeto

    const gifs = data.map(img => { 
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_large.url
        }
    })

    return gifs;

}


