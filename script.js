const listItemIndex = li => {
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
        const galleryDivAll = document.querySelectorAll('.gallery div');
        
        timelineLiAll.forEach( li => {
            li.children[0].children[1].classList.remove('paw-select');
        });
        timelineLiSelect.children[0].children[1].classList.add('paw-select');

        galleryDivAll.forEach(div => {
            div.classList.remove('div-select');
        });
        
        const galleryDivSelect = galleryDivAll[listItemIndex(timelineLiSelect)];
        galleryDivSelect.classList.add('div-select');    
});


