// xhr.responseText // ['한미약품', '한국약품'];

// const para = document.createElement('p');
// para.textContent = 


import {goToIndex} from './function.js';
// 로고 클릭 - 첫 페이지로 이동
const logo = document.querySelector('#logo');
logo.addEventListener('click', ()=>{
    goToIndex();
});
