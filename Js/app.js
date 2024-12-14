let nextDon = document.getElementById('next');
let prevDon = document.getElementById('prev');
let carouselDon = document.querySelector('.carousel');
let listItemDon = document.querySelector('.carousel .list');
let thumbnailDon = document.querySelector('.carousel .thumbnail');

nextDon.onclick = function(){
    showSlider('next');
}
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail');
}
