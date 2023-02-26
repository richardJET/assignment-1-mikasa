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
    const timelineOl = document.querySelector('.timeline ol');
    timelineOl.addEventListener('click', e => {
        let timelineLiSelect;
        if (e.target.tagName === 'H3' || e.target.tagName === 'I') {
            timelineLiSelect = e.target.parentElement.parentElement;
        } else if (e.target.tagName === 'BUTTON') {
            timelineLiSelect = e.target.parentElement;
        };
        timelineOl.scroll({
            left: timelineLiSelect.offsetLeft - window.innerWidth/2 + 59 ,
            behavior: "smooth",
        });
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
                    div.classList.add('div-left-out');
                    galleryDivSelect.classList.add('div-right-in');
                } else {
                    div.classList.add('div-right-out');
                    galleryDivSelect.classList.add('div-left-in');
                }
                div.addEventListener('animationend', () => {
                    div.classList.remove('div-right-out', 'div-right-in', 'div-left-out', 'div-left-in', 'div-select'); 
                    galleryDivSelect.classList.remove('div-right-out', 'div-right-in', 'div-right-out', 'div-left-in');
                    galleryDivSelect.classList.add('div-select');
                    galleryApp.modal();
                }, { once: true });
            };
        });
    });
    document.querySelector('.fa-chevron-right').addEventListener('click', () => {
        document.querySelector('.timeline ol').scrollLeft += 100;
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

galleryApp.leftScroll = () => {
    document.querySelector('.timeline ol').scrollLeft -= 200;    
}

galleryApp.rightScroll = () => {
    document.querySelector('.timeline ol').scrollLeft += 200;
}
                        
galleryApp.init = () => {
    galleryApp.timeline();
    galleryApp.modal();
    galleryApp.timelineArrows();
};







galleryApp.init();