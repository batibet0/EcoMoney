var progressBar = document.getElementById("progress-bar");
var width = 1;
var interval = setInterval(function() {
  if (width >= 100) {
    clearInterval(interval);
    
    window.location.href = 'informacion.html';
  } else {
    width++;
    progressBar.style.width = width + "%";
  }
}, 100);
