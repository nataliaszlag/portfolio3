const imgs = [
    {
         url: './gallery/kraftdesign.png',
    },
    {
        url: './gallery/leafletaccounting.png',
    },
    {
         url: './gallery/leafletaphotovoltaics.png',
    },
    {
        url: './gallery/logoaccounting.png',
    },
    {
        url: './gallery/logophotovoltaics.png',
    },
    {
        url: './gallery/naturamed.png',
    }
  ];

  new Vue({
    el: '#gallery-app',
    data: {
      imgs: imgs,
    },
    methods: {}
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
    else if(window.pageYOffset > (aboutHeight+homeHeight)&& window.pageYOffset <= (aboutHeight+homeHeight+portfolioHeight)){
      currentId3();
    }
    else if(window.pageYOffset > (portfolioHeight+homeHeight+aboutHeight)&& window.pageYOffset <= (aboutHeight+homeHeight+portfolioHeight+galleryHeight)){
      currentId4();
    }
    else if(window.pageYOffset > (portfolioHeight+homeHeight+aboutHeight+galleryHeight)){
      currentId5();
    }
})