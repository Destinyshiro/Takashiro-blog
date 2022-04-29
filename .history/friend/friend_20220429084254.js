window.onresize = function () {
  if (document.body.clientWidth < 996) {
    document.querySelector(".logo").style.display = "none";
  } else {
    document.querySelector(".logo").style.display = "block";
  }
};
