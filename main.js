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
 * 헤더: 섹션06에서 다크 스타일(배경/글자/로고) 전환
 * 섹션: 섹션06 wrap의 높이를 100vh으로 전환
 * 에러: 스크롤 이벤트시 변경되는 헤더 다크 스타일부분이 겹쳐 else의 영향을 받음 (섹션04 작동안함)
 * 해결: 공통 스타일을 요구하는 범위는 같이 묶어줌 ✅
 * Last updated: 2025‑08‑10
 * 섹션 01에서 초기이벤트 설정 (transform:Delay)
 * Last updated: 2025‑08‑11
 */

function scrollEvent() {
    let wsy = window.scrollY;
    const min = document.getElementById('section01').offsetTop;
    const s01Ps = document.querySelectorAll('#section01 p');
    const header = document.getElementById('head');
    if (wsy >= min - 82 && wsy < section02.offsetTop - 82) {
        document.getElementById('section01').classList.add('active');
        s01Ps.forEach((item) => {
            item.classList.add('txtDelay');
        });
        header.classList.add('on');
    } else {
        document.getElementById('section01').classList.remove('active');
    }

    const section03 = document.getElementById('section03');
    if (wsy >= section02.offsetTop - 82 && wsy < section03.offsetTop - 82) {
    } else {
    }

    const s04 = document.getElementById('section04').offsetTop;
    const inS04 = wsy >= s04 - 82 && wsy < 3503;
    // const header = document.getElementById('head');
    const headerImgLogo = document.querySelector('.header__logo');
    const naviItem = document.querySelectorAll('.navi__item');
    if (wsy >= s04 - 82 && wsy < 3503) {
        header.style.backgroundColor = '#000000';
        document.getElementById('section04').style.height = '100vh';
    } else {
        header.style.backgroundColor = 'transparent';
        document.getElementById('section04').style.height = 'calc(91.5vh - 40px)';
    }

    const s06 = document.getElementById('s06_wrap').offsetTop;
    const inS06 = wsy > s06 && wsy < 5256;
    const span = document.querySelectorAll('.icon__menu');

    if (inS04 || inS06) {
        headerImgLogo.src = './assets/images/common/logo2.png'; //✅
        naviItem.forEach((item) => (item.style.color = '#fff')); //✅
        document.querySelector('.icon_lang').src = './assets/images/common/lang_icon2.png';
        document.querySelector('.icon_search').src = './assets/images/common/search_icon2.png';
        span.forEach((item) => (item.style.backgroundColor = '#fff'));
    } else {
        headerImgLogo.src = './assets/images/common/logo.png'; //✅
        naviItem.forEach((item) => (item.style.color = 'rgb(85, 85, 85)')); //✅
        document.querySelector('.icon_lang').src = './assets/images/common/lang_icon.png';
        document.querySelector('.icon_search').src = './assets/images/common/search_icon.png';
        span.forEach((item) => (item.style.backgroundColor = '#000'));
    }
    if (wsy > s06 && wsy < 5256) {
        // wsy의 수치를 기준으로 다음 섹션의 탑 위치를 잡아줘야함
        document.getElementById('s06_wrap').style.height = '100vh';
        document.getElementById('s06_wrap').style.backgroundImage = 'url(./assets/images/main/s6_brand_bg.jpg';
        document.getElementById('s06_wrap').style.backgroundPosition = 'center';
        document.getElementById('s06_wrap').style.filter = 'brightness(90%)';
    } else {
        document.getElementById('s06_wrap').style.height = 'auto';
        document.getElementById('s06_wrap').style.backgroundImage = '';
        document.getElementById('s06_wrap').style.backgroundPosition = '';
        document.getElementById('s06_wrap').style.filter = 'brightness(100%)';
    }
}
scrollEvent();
window.addEventListener('scroll', scrollEvent);
