function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

function randomize() {
    var rand1 = setInterval(
        function () {
          var randomColor = Math.floor(Math.random()*16777215).toString(16);
          document.getElementById("color1").style.color = "#"+randomColor;
        },250);
    
    var rand2 = setInterval(
        function () {
          var randomColor = Math.floor(Math.random()*16777215).toString(16);
          document.getElementById("color1").style.borderColor = "#"+randomColor;
          document.getElementById("color1").style["boxShadow"] = "0 0 5px #999999";
        },250);        

    setTimeout(stop_interval, 5000);

    function stop_interval()
    {
      clearInterval(rand1);
      clearInterval(rand2);
      document.getElementById("color1").style.color = "black";
      document.getElementById("color1").style.borderColor = "black";
      document.getElementById("color1").style["boxShadow"] = "0 0 0px #999999";
    }

}

var logoHover = document.getElementById("color1");

logoHover.addEventListener('mouseenter', e => {
    logoHover.style.boxShadow = "-1px 1px 1px black";
});

logoHover.addEventListener('mouseleave', e => {
    logoHover.style.boxShadow = "0px 0px 0px black";
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.icon')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myGunction()};

// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myGunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
