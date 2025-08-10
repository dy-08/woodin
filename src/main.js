/**
 * 마우스휠 이벤트로 섹션 이동 구현
 * Last updated: 2025‑08‑09
 */

const section02 = document.getElementById('section02');
let to = 0;

window.addEventListener('wheel', (event) => {
  const rv = section02.offsetTop - 82;
  console.log('rv: ', rv);
  const y = event.deltaY;
  console.log(y);
  let isPN = y > 0 ? rv : -rv;
  to += isPN;
  console.log(to);
  console.log('isPN: ', isPN);
  console.log('type: ', typeof isPN);
  window.scrollTo({ top: to, behavior: 'smooth' });
});

/**
 * 마우스 스크롤 이벤트를 이용해 초기이벤트 설정
 * Last updated: 2025‑08‑09
 * 헤더: 섹션04에서 다크 스타일(배경/글자/로고) 전환
 * 섹션: 섹션04 높이 91.5vh-40px → 100vh로 전환 및 트랜지션 추가
 * Last updated: 2025‑08‑10
 */
function scrollEvent() {
  let wsy = window.scrollY;
  console.log(wsy);
  const min = document.getElementById('section01').offsetTop;
  // console.log(min);
  if (wsy >= min - 82 && wsy < section02.offsetTop - 82) {
    console.log(section02.offsetTop);
    document.getElementById('section01').classList.add('active');
  } else {
    document.getElementById('section01').classList.remove('active');
  }

  const item04 = document.getElementById('section04').offsetTop;
  const item05 = document.getElementById('section05').offsetTop;
  const header = document.getElementById('head');
  const headerImgLogo = document.querySelector('.header__logo');
  const naviItem = document.querySelectorAll('.navi__item');

  if (wsy >= item04 - 82 && wsy < 3503) {
    // wsy < item05 - 82 = 3504
    header.style.backgroundColor = '#000000';
    headerImgLogo.src = '../assets/images/common/logo2.png';
    naviItem.forEach((item) => (item.style.color = '#fff'));
    document.getElementById('section04').style.height = '100vh';
  } else {
    header.style.backgroundColor = 'transparent';
    headerImgLogo.src = '../assets/images/common/logo.png';
    naviItem.forEach((item) => (item.style.color = 'rgb(85, 85, 85)'));
    document.getElementById('section04').style.height = 'calc(91.5vh - 40px)';
  }
}
scrollEvent();
window.addEventListener('scroll', scrollEvent);
