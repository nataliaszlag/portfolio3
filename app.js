const imgs = [
    {
        url: './img/gallery/anthurium.webp',
        type: ['wedding','all'],
    },
    {
        url: './img/gallery/baby set1.webp',
        type: ['other','all'],
    },
    {
        url: './img/gallery/kraftdesign.webp',
        type: ['business','all'],
    },
    {
        url: './img/gallery/leafletaccounting.webp',
        type: ['business','all'],
    },
    {
        url: './img/gallery/logophotovoltaics.webp',
        type: ['business','all'],
    },
    {
        url: './img/gallery/naturamded_big.webp',
        type: ['business','all'],
    },
    {
        url: './img/gallery/loko-ns-2.webp',
        type: ['business','all'],
    },
    {
        url: './img/gallery/logoaccounting.webp',
        type: ['business','all'],
    },
    {
        url: './img/gallery/mountain memories.webp',
        type: ['wedding','all'],
    },
    {
        url: './img/gallery/leafletaphotovoltaics.webp',
        type: ['business','all'],
    },
  ];

  new Vue({
    el: '#gallery-app',
    data: {
      imgs: imgs,
      type: '',
    },
  });

//////toogle menu/////////////////
  function showLi() {
    for(let i= 1; i<=5; i++){
      let el = document.getElementById("nav"+i);
      if(el.classList.contains("show-li") ){
        el.classList.remove("show-li")
      }
      else{
        el.classList.add("show-li")
      }
    }
  }

  function closeLi() {
    for(let i= 1; i<=5; i++){
      let el = document.getElementById("nav"+i)
           el.classList.remove("show-li")
        }
      }
  //////////arrow///////////

  function currentId1() {
        document.getElementById("circle-home").classList.add("current");
        document.getElementById("circle-about").classList.remove("current");
        document.getElementById("circle-portfolio").classList.remove("current");
        document.getElementById("circle-gallery").classList.remove("current");
        document.getElementById("circle-contact").classList.remove("current");

  }

  function currentId2() {
    document.getElementById("circle-home").classList.remove("current");
    document.getElementById("circle-about").classList.add("current");
    document.getElementById("circle-portfolio").classList.remove("current");
    document.getElementById("circle-gallery").classList.remove("current");
    document.getElementById("circle-contact").classList.remove("current");

}

  function currentId3() {
    document.getElementById("circle-home").classList.remove("current");
    document.getElementById("circle-about").classList.remove("current");
    document.getElementById("circle-portfolio").classList.add("current");
    document.getElementById("circle-gallery").classList.remove("current");
    document.getElementById("circle-contact").classList.remove("current");

  }

function currentId4() {
  document.getElementById("circle-home").classList.remove("current");
  document.getElementById("circle-about").classList.remove("current");
  document.getElementById("circle-portfolio").classList.remove("current");
  document.getElementById("circle-gallery").classList.add("current");
  document.getElementById("circle-contact").classList.remove("current");

}

function currentId5() {
  document.getElementById("circle-home").classList.remove("current");
  document.getElementById("circle-about").classList.remove("current");
  document.getElementById("circle-portfolio").classList.remove("current");
  document.getElementById("circle-gallery").classList.remove("current");
  document.getElementById("circle-contact").classList.add("current");

}

  let idCurrent1 = document.getElementById("home");
  let idCurrent2 = document.getElementById("about");
  let idCurrent3 = document.getElementById("portfolio");
  let idCurrent4 = document.getElementById("gallery");
  let idCurrent5 = document.getElementById("contact");

  let homeHeight = idCurrent1.offsetHeight;
  let aboutHeight = idCurrent2.offsetHeight;
  let portfolioHeight = idCurrent3.offsetHeight;
  let galleryHeight = idCurrent4.offsetHeight;


window.addEventListener("scroll", () => {

    if(window.pageYOffset <= homeHeight){
      currentId1();
    }
    else if(window.pageYOffset > homeHeight && window.pageYOffset <= (aboutHeight+homeHeight)){
      currentId2();
    }
    else if(window.pageYOffset > (aboutHeight+homeHeight)&& window.pageYOffset <= (aboutHeight+homeHeight+portfolioHeight+500)){
      currentId3();
    }
    else if(window.pageYOffset > (portfolioHeight+homeHeight+aboutHeight)&& window.pageYOffset <= (aboutHeight+homeHeight+portfolioHeight+galleryHeight+500)){
      currentId4();
    }
    else if(window.pageYOffset > (portfolioHeight+homeHeight+aboutHeight+galleryHeight+900)){
      currentId5();
    }
})

function filterGallery(e) {
  const gallery = document.querySelectorAll(".gallery-list li"); // select all gallery divs
  let filter = e.target.dataset.filter; // grab the value in the event target's data-filter attribute
  if (filter === '*') {
  gallery.forEach(gallery => gallery.classList.remove('hidden'));
}
  gallery.forEach(gallery => {
    gallery.classList.contains(filter) // does the gallery have the filter in its class list?
    ? gallery.classList.remove('hidden') // if yes, make sure .hidden is not applied
    : gallery.classList.add('hidden'); // if no, apply .hidden
  });
};
