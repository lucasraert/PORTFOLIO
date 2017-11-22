const callback = function() {
const fadeIn = document.querySelectorAll('.fade-in');
  fadeIn.forEach(function(x)  {
    return x.classList.add('active');
  });
};
document.addEventListener("DOMContentLoaded", callback)
