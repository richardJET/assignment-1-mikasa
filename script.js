const itemIndex = li => {
    let i = 0;
    while (li.previousElementSibling) {
        li = li.previousElementSibling;
        i++;
    }
    return i;
}

const timelineOl = document.querySelector('.timeline ol');

timelineOl.addEventListener('click', e => {
    let timelineLiSelect;
    if(e.target.tagName === 'H3' || e.target.tagName === 'I'){
        timelineLiSelect = e.target.parentElement.parentElement;
    }else if(e.target.tagName === 'BUTTON'){
        timelineLiSelect = e.target.parentElement;
    }
        const timelineLiAll = document.querySelectorAll('.timeline li');
        const galleryDivAll = document.querySelectorAll('.gallery-month');
        const galleryDivSelect = galleryDivAll[itemIndex(timelineLiSelect)];
        
        timelineLiAll.forEach( li => {
            li.children[0].children[1].classList.remove('paw-select');
        });
        timelineLiSelect.children[0].children[1].classList.add('paw-select');

        galleryDivAll.forEach(div => {
            if (div.classList.contains('div-select')){
                if(itemIndex(div) < itemIndex(timelineLiSelect)){
                    div.classList.add('div-up-out');
                    galleryDivSelect.classList.add('div-up-in');
                }else{
                    div.classList.add('div-down-out');
                    galleryDivSelect.classList.add('div-down-in');
                }
                
                div.addEventListener('animationend', () => { 
                    div.classList.remove('div-up-out', 'div-up-in', 'div-down-out', 'div-down-in', 'div-select');
                    galleryDivSelect.classList.remove('div-up-out', 'div-up-in', 'div-down-out', 'div-down-in');
                    galleryDivSelect.classList.add('div-select'); 
                },{once: true})   
            }
        }); 
});


