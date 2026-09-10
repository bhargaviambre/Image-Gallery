const gallery = document.querySelector(".gallery");

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const closeButton = document.querySelector(".close");

const images = [
    //Nature
    {src: "https://picsum.photos/id/10/800/600", category:"Nature"},
    {src: "https://picsum.photos/id/11/800/600", category:"Nature"},
    {src: "https://picsum.photos/id/12/800/600", category:"Nature"},
    //Animals
    {src: "https://picsum.photos/id/237/800/600", category:"Animals"},
    {src: "https://picsum.photos/id/219/800/600", category:"Animals"},
    {src: "https://picsum.photos/id/1025/800/600", category:"Animals"},
    //Travel
    {src: "https://picsum.photos/id/15/800/600", category:"Travel"},
    {src: "https://picsum.photos/id/16/800/600", category:"Travel"},
    {src: "https://picsum.photos/id/17/800/600", category:"Travel"},
    //Food
    {src: "https://picsum.photos/id/292/800/600", category:"Food"},
    {src: "https://picsum.photos/id/326/800/600", category:"Food"},
    {src: "https://picsum.photos/id/493/800/600", category:"Food"}
];

images.forEach(function(image){

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.category;
    img.dataset.category = image.category;
    gallery.appendChild(img);
});
    
    gallery.addEventListener("click",function(){
        if(event.target.tagName === "IMG"){
         
        lightboxImage.src = event.target.src;
        lightboxImage.alt = event.target.alt;
        lightbox.style.display="flex";
        }
    });

    const categoryButtons = document.querySelectorAll(".categories button");
    categoryButtons.forEach(function(button){
        button.addEventListener("click",function(){
            const selectedCategory = button.textContent;
            const galleryImages = gallery.querySelectorAll("img");
            galleryImages.forEach(function(img){
                if(selectedCategory === "All" ||
                    img.dataset.category ===selectedCategory
                ){
                    img.style.display="block";
                }
                else{
                    img.style.display = "none";
                }
            });
        });
    });

    
    closeButton.addEventListener("click",function(){
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click",function(event){
        if(event.target === lightbox)
            {
            lightbox.style.display = "none";
        }
    });

    const searchInput = document.querySelector(".search-box input");
    searchInput.addEventListener("input",function(){

        const searchText = searchInput.value.toLowerCase().trim();
        
        const galleryImages = gallery.querySelectorAll("img");
        
        galleryImages.forEach(function(img){
        const category = img.dataset.category.toLowerCase();
        if(category.includes(searchText)){
            img.style.display = "block";
        }
        else{
            img.style.display = "none";
        }
        });
    });