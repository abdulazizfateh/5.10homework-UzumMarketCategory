const URL = "https://dummyjson.com";
export const getData = async (endpoint, renderCallback) => {
    const response = await fetch(`${URL}${endpoint}`);
    const data = response.json();
    data.then((result) => {
        renderCallback(result);
    }).catch((err) => {
        console.log(err);
    })
}