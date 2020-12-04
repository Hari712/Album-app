const url = "https://jsonplaceholder.typicode.com/albums/";

const delay = ms => new Promise(r => setTimeout(r, ms));


 export const FetchList = async () =>{
    const res = await fetch(url);
    const data = await res.json();
    await delay(1000);
    return data;
}

export const FetchUserData = async (e) =>{
    const res = await fetch(url + e.target.id);
    const data = await res.json();
    await delay(1000);
    return data;
}

export const FetchImages = async (e)=>{
    const res = await fetch(url + e.target.id +"/photos");
    const data = await res.json();
    await delay(1000);
    return data;
}