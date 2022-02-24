import {goToIndex} from './function.js';

// 로고 클릭 - 첫 페이지로 이동
const logo = document.querySelector('#logo');
logo.addEventListener('click', ()=>{
    goToIndex();
});