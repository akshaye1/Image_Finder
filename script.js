const accessKey = 'LnTuONC2MzAaok-UFQWaAYbyOChylNxzeatllo6aXvc';

const btn = document.getElementById('btn');
const inputBox = document.getElementById("inputBox");
const showImage = document.getElementById("search-result");
const searchForm = document.getElementById("search-form");
const showBtn = document.getElementById("show-more-btn");
const showMore = document.getElementById("show-more-btn");

let keyword = '';
let page = 1;
let items = 12;

async function searchImages(){
    keyword = inputBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=${items}`

    const response = await fetch(url);
    const data = await response.json();

    if(page===1){
        showImage.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);

        showImage.appendChild(imageLink);
    })
    showMore.style.display = "block";
}



searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page=1;
    searchImages();
    
})

showMore.addEventListener("click",()=>{
    page++;
    searchImages();
})