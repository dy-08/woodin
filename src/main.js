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
 */
function scrollEvent() {
  let wsy = window.scrollY;
  console.log(wsy);
  const min = document.getElementById('section01').offsetTop;
  console.log(min);
  if (wsy >= min - 82 && wsy < section02.offsetTop - 82) {
    console.log(section02.offsetTop);
    document.getElementById('section01').classList.add('active');
  } else {
    document.getElementById('section01').classList.remove('active');
  }
}
scrollEvent();
window.addEventListener('scroll', scrollEvent);
