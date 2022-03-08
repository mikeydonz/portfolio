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
    logoHover.style.boxShadow = "0px 0px 0px black";});
