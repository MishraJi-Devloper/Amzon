document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelectorAll('.header-slider ul img');
    const prev_button = document.querySelector('.control_prev');
    const next_button = document.querySelector('.control_next');

    let n = 0;

    function changeSlide(){
        for (let i=0; i< img.length; i++) {
            img[i].style.display ='none';
        }
        img[n].style.display = 'block';
    }
    changeSlide();

    prev_button.addEventListener('click', (e)=>{
        if(n > 0){
            n--;
        }
        else{
            n = img.length - 1;
        }
        changeSlide();
    });

    next_button.addEventListener('click', (e)=>{
        if(n < img.length - 1){
            n++;
        }
        else{
            n = 0;
        }
        changeSlide();
    });
});
const scrollContainer = documen.querySelectorAll('products');
for (const item of scrollContainer){
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
    
}


