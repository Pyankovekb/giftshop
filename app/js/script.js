
(function() {
  let buttons = document.querySelectorAll('.slider');

    //вешаем обработчик события на кнопку и в зависимости от
    // направления выбираем функцию
    for(let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        button.addEventListener('click', function(event) {
            let viewport = event.target.parentNode.parentNode.nextElementSibling;
            if(event.target.className.indexOf('prev') > 0) {
                prev(viewport);
            } else {
                next(viewport);
            }
        })
    }

    //пролистать назад
    function prev(elem) {
        let carousel = elem.querySelector('ul');
        let elementWidth = elem.querySelector('li').offsetWidth + 
                parseInt(getComputedStyle(elem.querySelector('li')).marginRight) + 
                    parseInt(getComputedStyle(elem.querySelector('li')).marginLeft);
        let position = parseInt(carousel.style.marginLeft);
   
        if(position && position < elementWidth) {
            position += elementWidth;
            carousel.style.marginLeft = position + 'px';
        }

    }
    //пролистать вперед
    function next(elem) {
        let carousel = elem.querySelector('ul');
        let carouselElemsCount = carousel.children.length;
        let elementWidth = elem.querySelector('li').offsetWidth + 
                parseInt(getComputedStyle(elem.querySelector('li')).marginRight) + 
                    parseInt(getComputedStyle(elem.querySelector('li')).marginLeft);
            // если marginleft изначально нет, задаем его
        let position = parseInt(carousel.style.marginLeft) ? parseInt(carousel.style.marginLeft) : 0 ;
            
        if( position <= -((carouselElemsCount -2 ) * elementWidth)) {
            carousel.style.marginLeft = '0px';
        } else {
            position = position - elementWidth;
            carousel.style.marginLeft = position + 'px';
        }
    }
})()
