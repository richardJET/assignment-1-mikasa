const galleryApp={};

galleryApp.itemIndex = li => {
    let i = 0;
    while (li.previousElementSibling) {
        li = li.previousElementSibling;
        i++;
    }
    return i;
};

galleryApp.timeline = () => {
    timelineOl = document.querySelector('.timeline ol');
    timelineOl.addEventListener('click', e => {
        let timelineLiSelect;
        if (e.target.tagName === 'H3' || e.target.tagName === 'I') {
            timelineLiSelect = e.target.parentElement.parentElement;
        } else if (e.target.tagName === 'BUTTON') {
            timelineLiSelect = e.target.parentElement;
        };
        const timelineLiAll = document.querySelectorAll('.timeline li');
        const galleryDivAll = document.querySelectorAll('.gallery-month');
        const galleryDivSelect = galleryDivAll[galleryApp.itemIndex(timelineLiSelect)];
    
        timelineLiAll.forEach(li => {
            li.children[0].children[1].classList.remove('paw-select');
        });
        timelineLiSelect.children[0].children[1].classList.add('paw-select');
    
        galleryDivAll.forEach(div => {
            if (div.classList.contains('div-select')) {
                if (galleryApp.itemIndex(div) < galleryApp.itemIndex(timelineLiSelect)) {
                    div.classList.add('div-up-out');
                    galleryDivSelect.classList.add('div-up-in');
                } else {
                    div.classList.add('div-down-out');
                    galleryDivSelect.classList.add('div-down-in');
                }
                div.addEventListener('animationend', () => {
                    div.classList.remove('div-up-out', 'div-up-in', 'div-down-out', 'div-down-in', 'div-select');
                    galleryDivSelect.classList.remove('div-up-out', 'div-up-in', 'div-down-out', 'div-down-in');
                    galleryDivSelect.classList.add('div-select');
                    galleryApp.modal();
                }, { once: true });
            };
        });
    });
};

galleryApp.modal = () => {
    galleryMonthDiv = document.querySelector('.div-select');
    galleryMonthDiv.addEventListener('click', e => {
        const modal = document.querySelectorAll('.modal-toggle');
        modal.forEach(div => {
            div.style.display = 'block';
        });
        let modalImage = modal[1].children[0].children[0];
        let modalCaption = modal[1].children[1];
        modalImage.src = e.target.src;
        modalCaption.innerHTML = e.target.parentElement.children[1].innerHTML;
        close = document.querySelector('.fa-xmark');
        close.addEventListener('click', e => {
            modal.forEach(div => {
                div.style.display = 'none';
            });
        });
    });
};

galleryApp.init = () => {
    galleryApp.timeline();
    galleryApp.modal();
};







galleryApp.init();