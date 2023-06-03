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

























