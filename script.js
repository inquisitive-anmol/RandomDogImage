let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";


btn.addEventListener("click", async () => {
    let link = await getFacts();
    let imgage = document.querySelector("#result");
    if(link == "/"){
        imgage.setAttribute("alt", "No image found");
    }
    imgage.setAttribute("src", link);
    console.log(link);
})

async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.message;
    } catch(e){
        console.log(e);
        return "/";
    }
}