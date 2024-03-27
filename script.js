const accessKey= `7uaXbDOZCRhibBOyfNMZWJ1h4C8-Y3Q9_FR1hp-YWwA`

const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const showmoreBtn = document.getElementById("show-more-btn")


let keyword = ""
let page = 1
async function searchImages(){
    keyword=searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`


    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    const results = data.results
    

    results.map((result)=>{
        const image = document.createElement("img")
        image.src = result.urls.small
        const imageLink = document.createElement("a")
        imageLink.href=result.links.html
        imageLink.target="_blank"

        imageLink.append(image)
        searchResult.append(imageLink)
    })
    showmoreBtn.style.display = "block";

    

}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    page=1
    searchImages()
})
showmoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});
