// When hover remove current selection button style
// when click change current selection style
// when click change gallery div that is visible

const listItemIndex = li => {
    let i = 0;
    while (li.previousElementSibling) {
        li = li.previousElementSibling;
        i++;
    }
    return i;
}

const timelineOl = document.querySelector('.timeline ol');
console.log(timelineOl);
timelineOl.addEventListener('click', e => {
    console.log(e.target.parentElement.parentElement);

    const galleryDivAll = document.querySelectorAll('.gallery div');
    
    galleryDivAll.forEach(div => {
        div.classList.remove('div-select');
    });
    
    const galleryDivSelect = galleryDivAll[listItemIndex(e.target.parentElement.parentElement)];
    galleryDivSelect.classList.add('div-select');
});
