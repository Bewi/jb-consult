(function () {
  var initialTime = new Date().getTime();
  var body = document.body;
  body.onscroll = function () {
    var currentTime = new Date().getTime();
    // Prevent initial scroll;
    if (currentTime - initialTime < 300) {
      body.scrollTop = 0;      
    } else {
      debounce(handleScroll, 300);
    }
  };
})();

function scrollDown() {
  document.body.scrollTop = document.body.scrollHeight;
}

function scrollUp() {
  document.body.scrollTop = 0
}

function debounce(method, delay) {
  clearTimeout(method._tId);
  method._tId = setTimeout(function () {
    method();
  }, delay);
}

function handleScroll() {
  var doc = document.documentElement;
  var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  if (top > 0) {
    document.getElementById('main').classList.add('scrolled');
    removeAnimation();
  } else {
    document.getElementById('main').classList.remove('scrolled');
    addAnimation();
  }
}

function removeAnimation(animationClass) {
  setTimeout(() => {
    document.getElementById('jb-image-1').classList.add('no-animate');
    document.getElementById('jb-image-2').classList.add('no-animate');
  }, 300)
}

function addAnimation(animationClass) {
  document.getElementById('jb-image-1').classList.remove('no-animate');
  document.getElementById('jb-image-2').classList.remove('no-animate');
}