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
