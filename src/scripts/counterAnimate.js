const counters = document.querySelectorAll('.counter-quantity');
const speed = 140;

counters.forEach( counter => {
    const updateCounter = () => {
        //pluses converts strings to number
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target) {
            counter.innerText = Math.floor(count + inc);
            setTimeout(updateCounter, 10);
        } else {
            count.innerText = target;
        }
    };
    updateCounter();
});