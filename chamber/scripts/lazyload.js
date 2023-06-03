const targets = document.querySelectorAll('img');

const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log('sucess');

            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');

                img.setAttribute('src', src);
                img.classList.add('fade');

                observer.disconnect();
            }
        })
    });
    io.observe(target);

};

targets.forEach(lazyLoad);



var numberOfVisits = localStorage.getItem("numberOfVisits");

if (!numberOfVisits) {
  numberOfVisits = 0;
}
numberOfVisits = +numberOfVisits + 1; 

localStorage.setItem("numberOfVisits", numberOfVisits);
document.getElementById("visit").innerHTML = numberOfVisits;

if (numberOfVisits < 2) {
  document.getElementById("special-message").innerHTML = 
  "Thanks for visiting!";
}

function clearCacheAndReload() {
  localStorage.removeItem("numberOfVisits");
  location.reload();
}

function reload() {    
  location.reload();
}