const modalShadow = document.getElementById('modal-shadow');
const modalTrigger = document.getElementById('modal-trigger'); // кнопка вызова

const openModal = () => {      
    modalShadow.classList.toggle('modal-shadow_hidden');
};
    
// Если клик вне модального окна - закрой модалку
window.onclick = (e) => { e.target == modalShadow ? openModal() : null; };

modalTrigger.addEventListener('click', openModal);


/*
const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.getElementById('modal-btn-close');
const modal = document.getElementById('modal')

const scrollY = document.body.style.top;

const windowReturn = () => {
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}



modalBtn.addEventListener('click', () => {
    modal.classList.toggle('modal-show');
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;

    
});

closeBtn.addEventListener('click', () =>{
    modal.classList.toggle('modal-show');
    windowReturn();
});


window.onclick = e => {   
    if (e.target == modal) {
        modal.classList.toggle('modal-show');
        windowReturn();
    }
}
*/
