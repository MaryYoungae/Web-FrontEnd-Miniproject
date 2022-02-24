import {goToIndex} from './function.js';

// section 부분 이미지 슬라이드
const section = document.querySelector('section');

const imgSrc = ['./images/img1.JPG', './images/img2.JPG', './images/img3.JPG']
const index = [0, 1, 2];

function showImage() {
    const imgNum = Math.floor(Math.random() * 3);
    const targetImg = document.getElementById('introImg');
    targetImg.src = imgSrc[imgNum];
    setTimeout(showImage, 2000);
} 

section.onload = showImage();


// 검색 버튼 - 이동 to 'basicInfo.html'
const search = document.querySelector('button');
search.addEventListener('click', () => {
    location.href='basicInfo.html'
});

// 로고 클릭 - 첫 페이지로 이동
const logo = document.querySelector('#logo');
logo.addEventListener('click', ()=>{
    goToIndex();
});
// const logo = document.querySelector('#logo');
// logo.addEventListener('click', () => {
//     location.href='index.html';
// });

// 마우스오버
logo.addEventListener('mouseover', () => {
    logo.title = 'logo of this site';
})

search.addEventListener('mouseover', () => {
    search.title = 'search';
});

const mikeIcon = document.querySelector('.Header__main__menu>li>i');
mikeIcon.addEventListener('mouseover', () => {
    mikeIcon.title = 'search by voice';
});



