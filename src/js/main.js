/**
 * 섹션 스크롤 이벤트 핸들러
 * - 마우스휠 방향에 따라 다음/이전 섹션으로 이동
 * - 헤더 높이(80px) 보정 포함
 */
const section02 = document.getElementById('section02');
let currentScrollY = 0;

window.addEventListener('wheel', (event) => {
  const headerHeight = 80;
  const scrollTarget = section02.offsetTop - headerHeight;
  const isScrollingDown = event.deltaY > 0;
  const scrollDelta = isScrollingDown > 0 ? scrollTarget : -scrollTarget;
  currentScrollY += scrollDelta;
  window.scrollTo({ top: currentScrollY, behavior: 'smooth' });
});

/**
 * 마우스 스크롤 이벤트를 이용해 초기이벤트 설정
 * Last updated: 2025‑08‑09
 * 헤더: 섹션04에서 다크 스타일(배경/글자/로고) 전환
 * 섹션: 섹션04 높이 91.5vh-40px → 100vh로 전환 및 트랜지션 추가
 * Last updated: 2025‑08‑10
 * 헤더: 섹션06에서 다크 스타일(배경/글자/로고) 전환
 * 섹션: 섹션06 wrap의 높이를 100vh으로 전환
 * 에러: 스크롤 이벤트시 변경되는 헤더 다크 스타일부분이 겹쳐 else의 영향을 받음 (섹션04 작동안함)
 * 해결: 공통 스타일을 요구하는 범위는 같이 묶어줌 ✅
 * Last updated: 2025‑08‑10
 * 섹션 01에서 초기이벤트 설정 (transform:Delay)
 * Last updated: 2025‑08‑11
 */

// function scrollEvent() {
//   let wsy = window.scrollY;
//   const min = document.getElementById('section01').offsetTop;
//   const s01Ps = document.querySelectorAll('#section01 p');
//   const header = document.getElementById('head');
//   if (wsy >= min - 82 && wsy < section02.offsetTop - 82) {
//     document.getElementById('section01').classList.add('active');
//     s01Ps.forEach((item) => {
//       item.classList.add('txtDelay');
//     });
//     header.classList.add('on');
//   } else {
//     document.getElementById('section01').classList.remove('active');
//   }

//   const section03 = document.getElementById('section03');
//   const section04 = document.getElementById('section04');
//   const inS02 =
//     wsy >= section02.offsetTop - 82 && wsy < section03.offsetTop - 82;
//   const inS03 =
//     wsy >= section03.offsetTop - 82 && wsy < section04.offsetTop - 82;
//   const s04 = document.getElementById('section04').offsetTop;
//   const inS04 = wsy >= s04 - 82 && wsy < 3503;
//   const s06 = document.getElementById('s06_wrap').offsetTop;
//   const inS05 = wsy >= 3504 && wsy < s06 - 82;
//   const inS06 = wsy > s06 && wsy < 5256;
//   const s07 = document.getElementById('section07').offsetTop;
//   const s08 = document.getElementById('section08').offsetTop;
//   const inS07 = wsy >= s07 - 115 && wsy < s08 - 82;
//   const inS08 = wsy >= s08 - 82;

//   // 텍스트이벤트
//   if (inS02) {
//     document
//       .querySelectorAll('.s2btot')
//       .forEach((item) => item.classList.add('s2--activey'));
//     document.querySelector('.s2rtol').classList.add('s2--activex');
//   } else {
//     document
//       .querySelectorAll('.s2btot')
//       .forEach((item) => item.classList.remove('s2--activey'));
//     document.querySelector('.s2rtol').classList.remove('s2--activex');
//   }
//   if (inS03) {
//     document
//       .querySelectorAll('.s3btot')
//       .forEach((item) => item.classList.add('s3--activey'));
//     document.querySelector('.s3rtol').classList.add('s3--activex');
//   } else {
//     document
//       .querySelectorAll('.s3btot')
//       .forEach((item) => item.classList.remove('s3--activey'));
//     document.querySelector('.s3rtol').classList.remove('s3--activex');
//   }
//   if (inS04) {
//     document
//       .querySelectorAll('.s4btot')
//       .forEach((item) => item.classList.add('s4--activey'));
//     document.querySelector('.s4rtol').classList.add('s4--activex');
//   } else {
//     document
//       .querySelectorAll('.s4btot')
//       .forEach((item) => item.classList.remove('s4--activey'));
//     document.querySelector('.s4rtol').classList.remove('s4--activex');
//   }
//   if (inS05) {
//     document
//       .querySelectorAll('.s5btot')
//       .forEach((item) => item.classList.add('s5--activey'));
//     document.querySelector('.s5rtol').classList.add('s5--activex');
//   } else {
//     document
//       .querySelectorAll('.s5btot')
//       .forEach((item) => item.classList.remove('s5--activey'));
//     document.querySelector('.s5rtol').classList.remove('s5--activex');
//   }
//   if (inS06) {
//     document
//       .querySelectorAll('.s6btot')
//       .forEach((item) => item.classList.add('s6--activey'));
//     document.querySelector('.s6rtol').classList.add('s6--activex');
//   } else {
//     document
//       .querySelectorAll('.s6btot')
//       .forEach((item) => item.classList.remove('s6--activey'));
//     document.querySelector('.s6rtol').classList.remove('s6--activex');
//   }
//   if (inS07) {
//     document
//       .querySelectorAll('.s7btot')
//       .forEach((item) => item.classList.add('s7--activey'));
//     document.querySelector('.s7rtol').classList.add('s7--activex');
//     document.querySelector('.section07__itembox02').classList.add('w--active');
//   } else {
//     document
//       .querySelectorAll('.s7btot')
//       .forEach((item) => item.classList.remove('s7--activey'));
//     document.querySelector('.s7rtol').classList.remove('s7--activex');
//   }
//   if (inS08) {
//     document
//       .querySelectorAll('.s8btot')
//       .forEach((item) => item.classList.add('s8--activey'));
//     document.querySelector('.s8rtol').classList.add('s8--activex');
//   } else {
//     document
//       .querySelectorAll('.s8btot')
//       .forEach((item) => item.classList.remove('s8--activey'));
//     document.querySelector('.s8rtol').classList.remove('s8--activex');
//   }

//   const headerImgLogo = document.querySelector('.header__logo');
//   const naviItem = document.querySelectorAll('.navi__item');
//   if (wsy >= s04 - 82 && wsy < 3503) {
//     header.style.backgroundColor = '#000000';
//     document.getElementById('section04').style.height = '100vh';
//   } else {
//     header.style.backgroundColor = 'transparent';
//     document.getElementById('section04').style.height = 'calc(91.5vh - 40px)';
//   }

//   const span = document.querySelectorAll('.icon__menu');

//   if (inS04 || inS06) {
//     headerImgLogo.src = './assets/images/common/logo2.png'; //✅
//     naviItem.forEach((item) => (item.style.color = '#fff')); //✅
//     document.querySelector('.icon_lang').src =
//       './assets/images/common/lang_icon2.png';
//     document.querySelector('.icon_search').src =
//       './assets/images/common/search_icon2.png';
//     span.forEach((item) => (item.style.backgroundColor = '#fff'));
//   } else {
//     headerImgLogo.src = './assets/images/common/logo.png'; //✅
//     naviItem.forEach((item) => (item.style.color = 'rgb(85, 85, 85)')); //✅
//     document.querySelector('.icon_lang').src =
//       './assets/images/common/lang_icon.png';
//     document.querySelector('.icon_search').src =
//       './assets/images/common/search_icon.png';
//     span.forEach((item) => (item.style.backgroundColor = '#000'));
//   }
//   if (wsy > s06 && wsy < 5256) {
//     // wsy의 수치를 기준으로 다음 섹션의 탑 위치를 잡아줘야함
//     document.getElementById('s06_wrap').style.height = '100vh';
//     document.getElementById('s06_wrap').style.backgroundImage =
//       'url(./assets/images/main/s6_brand_bg.jpg';
//     document.getElementById('s06_wrap').style.backgroundPosition = 'center';
//     document.getElementById('s06_wrap').style.filter = 'brightness(90%)';
//   } else {
//     document.getElementById('s06_wrap').style.height = 'auto';
//     document.getElementById('s06_wrap').style.backgroundImage = '';
//     document.getElementById('s06_wrap').style.backgroundPosition = '';
//     document.getElementById('s06_wrap').style.filter = 'brightness(100%)';
//   }
// }
// scrollEvent();
// window.addEventListener('scroll', scrollEvent);
