//Contains all API call functions

// Define base url and parameters stored in .env file
const baseurl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const engineID = process.env.REACT_APP_ENGINE_ID;

async function getImagesByKey(searchKey, start){

    console.log(baseurl);
    console.log(apiKey);
    console.log(engineID);

    // nota '&start='
    const url = new URL(`${baseurl}?cx=${encodeURIComponent(engineID)}&q=${encodeURIComponent(searchKey)}&searchType=image&start=${encodeURIComponent(start)}&key=${encodeURIComponent(apiKey)}`);

    const response = await fetch(url.href);

    if(!response.ok) {
        return null;
    }

    const res = await response.json();
    return res; 
}


export{
    getImagesByKey,
}