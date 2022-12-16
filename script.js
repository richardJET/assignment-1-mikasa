// When hover remove current selection button style
// when click change current selection style


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
    const timelineLi = e.target.parentElement.parentElement;

    const galleryDivAll = document.querySelectorAll('.gallery div');
    
    galleryDivAll.forEach(div => {
        div.classList.remove('div-select');
    });
    
    const galleryDivSelect = galleryDivAll[listItemIndex(timelineLi)];
    galleryDivSelect.classList.add('div-select');
});


