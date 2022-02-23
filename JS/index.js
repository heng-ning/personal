
//輪播
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})


//menu
Fancybox.bind('[data-fancybox="gallery"]', {
  dragToClose: false,

  Toolbar: false,
  closeButton: "top",

  Image: {
    zoom: false,
  },

  on: {
    initCarousel: (fancybox) => {
      const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
    "Carousel.change": (fancybox, carousel, to, from) => {
      const slide = carousel.slides[to];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
  },
  });



//News 詳情
// function showdiv(){
//   document.getElementById('news').style.display = 'block';
//   document.getElementById('strhref').innerHTML="-";
//   document.getElementById('strhref').href="javascript:hidediv()";
// }
// function hidediv(){
//   document.getElementById('news').style.display = 'none';
//   document.getElementById('strhref').innerHTML="+";
//   document.getElementById('strhref').href="javascript:showdiv()";

// }



// (function () {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms)
//     .forEach(function (form) {
//       form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }

//         form.classList.add('was-validated')
//       }, false)
//     })
// })()



// $(document).ready(function(){
//   $(".btn1").click(function(){
//   $(this).next(".card-text2").slideToggle();
//   });
// });
var btn1 = document.getElementsByClassName("btn1");
var i;
for (i = 0; i < btn1.length; i++) {
  btn1[i].addEventListener("click", function() {
  this.classList.toggle("showcontent");
  var showcontent = this.nextElementSibling;
  if (showcontent.style.display === "block") {
    showcontent.style.display = "none";
  } else {
    showcontent.style.display = "block";
  }
  });
}