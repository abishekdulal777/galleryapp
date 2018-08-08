const UnsplashAPIUrl = "https://api.unsplash.com/photos/?client_id=ed3da82e8b5b04f5b0bbbfe1e47998bc31a237ef0b8055078ec7309df661939a";

const callAPI = () => {
  fetch(UnsplashAPIUrl)
    .then(resp => resp.json())
    .then(data => {
      data;
      data.map((obj,index) => {
        // prepare images at Carousel
        let carouselitem = document.createElement("div");
        let carouselimage = document.createElement("img");
        let carouseltext = document.createElement("h5");
        carouselitem.className = "mySlides";
        carouselimage.src = obj.urls.small;
        carouselimage.className = "d-block w-100";
        carouseltext.className = "carousel-cap text-primary";
        carouseltext.innerText = obj.id;

        carouselitem.appendChild(carouselimage);
        carouselitem.appendChild(carouseltext);
        document.getElementById("modalContent").appendChild(carouselitem);

        // display images at home 
        let newimagebox = document.createElement("div");
        let newimage = document.createElement("img");
        newimagebox.className = "card";
        console.log(obj);
        newimage.src = obj.urls.small;
        newimage.className = "card-img-top";
        newimage.setAttribute("data-toggle","modal");
        newimage.setAttribute("data-target","#ModalCenter");
        newimage.addEventListener('click', function(){
          currentSlide(index+1);
        });
        newimagebox.appendChild(newimage);
        document.getElementById("image-box").appendChild(newimagebox);

      }) 
    })
    .catch((error) => console.log(error))
}

callAPI();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  if(slides.length !== 0){
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
}

document.getElementById("prevSign").addEventListener("click", function(){
  plusSlides(1);
});

document.getElementById("nextSign").addEventListener("click", function(){
  plusSlides(-1);
});