// первая карусель
    let news = document.querySelector('.news');
    let newsButtons = news.querySelectorAll('button');
    let newsCarousel = news.querySelector('ul');
    let newsWidth = parseInt(getComputedStyle(news.querySelector('li')).width) + 
                        parseInt(getComputedStyle(news.querySelector('li')).marginRight) +
                            parseInt(getComputedStyle(news.querySelector('li')).marginLeft) + 3
        console.log();
    let position = 0;

    newsButtons[0].onclick = function() {
        if(parseInt(newsCarousel.style.marginLeft) < 0) {
            position  = position + newsWidth;
            newsCarousel.style.marginLeft = position + 'px';
        }
    }
    newsButtons[1].onclick = function(){
        if(parseInt(newsCarousel.style.marginLeft) <= -3060) {
            position = 0
            newsCarousel.style.marginLeft = position + 'px';
        } else {
            position = position - newsWidth;
            newsCarousel.style.marginLeft = position + 'px';
        }
    }
// вторая карусель 
    let features = document.querySelector('.featured');
    let featuresButtons = features.querySelectorAll('button');
    let featuresCarusel = features.querySelector('ul');
    let featuresWidth = parseInt(getComputedStyle(features.querySelector('li')).width) + 
                            parseInt(getComputedStyle(features.querySelector('li')).marginRight) +
                                parseInt(getComputedStyle(features.querySelector('li')).marginLeft) + 5


    featuresButtons[0].onclick = function() {
        if(parseInt(featuresCarusel.style.marginLeft) < 0) {
            position = position + featuresWidth;
            featuresCarusel.style.marginLeft = position + 'px';
        }
    }
    featuresButtons[1].onclick = function() {
        if(parseInt(featuresCarusel.style.marginLeft) <= -1900){
            position = 0
            featuresCarusel.style.marginLeft = position + 'px';
        } else {
        position = position - featuresWidth;
        featuresCarusel.style.marginLeft = position + 'px';
        }
    }
