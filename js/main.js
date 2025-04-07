/* 메인비주얼 스와이퍼 */
const mainSwiper = new Swiper('.main_swiper', {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  effect: 'fade',
  // speed: 1500,

  navigation: {
    nextEl: '.btn_next',
    prevEl: '.btn_prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
})



/* 교수진 안내 - 스와이퍼 */

const facultySwiper = new Swiper('.faculty_swiper', {
  // Optional parameters
  // direction: 'vertical',
  // autoplay: true, /* 자동실행 */
  autoplay: {
    delay: 0, /* 다음 애니메이션 시작시간과의 간격 */
  },
  speed: 3000, /* 애니메이션 지속시간 (= animation duration) */
  loop: true, /* 무한반복 */
  slidesPerView: 'auto', /* 화면에 보여질 슬라이드 갯수 */
  spaceBetween: 60, /* 슬라이드 사이 간격 */
});

/* 헤더 스타일 변경 */
// - scroll 클래스를 넣다 뺐다
// const header = document.querySelector('header')
// const gnbDep1 = document.querySelector('#gnb .dep1>li')

// gnbDep1.addEventListener('mouseover', function() {
//   header.classList.add('scroll')
// })
// gnbDep1.addEventListener('mouseout', function() {
//   header.classList.remove('scroll')
// })


// 여러 요소에 적용하려면 두가지 요소가 더 필요함
// querySelector > All <
// > gnbDep1.forEach(function(item)) <

const header = document.querySelector('header')
const gnbDep1 = document.querySelectorAll('#gnb .dep1>li')
const gnbDep2 = document.querySelectorAll('#gnb .dep2')

gnbDep1.forEach(function(item, index) {

  const dep2 = gnbDep2[index];

  item.addEventListener('mouseover', function() {
    header.classList.add('scroll')
    if (dep2.style.display === 'none' || dep2.style.display === '') {
      // dep.style.display === '' - 없으면 처음 한번은 동작 안함 말 그대로 '' 상태기 때문
      dep2.style.display = 'flex'; // mouseover 시 dep2 보이기
    }
  })
  item.addEventListener('mouseout', function() {
    if(window.scrollY <= 100) {
      header.classList.remove('scroll')
    }
    dep2.style.display = 'none'; // mouseout 시 dep2 숨기기
  })
})
window.addEventListener('scroll', function() {
  if(window.scrollY > 100) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

window.addEventListener('scroll', function() {
  if(window.scrollY >10) {
    header.classList.add('header_on')
  } else {
    header.classList.remove('header_on')
  }
  // console.log(window.scrollY)
})



/* 헤더 랭귀지 */
// const langBtn = document.querySelector('')
const langBtn = document.querySelector('.lang_wrap button')
const langList = document.querySelector('.lang_wrap ul')
const langIco = document.querySelector('.lang_wrap button i')
const langA = document.querySelectorAll('.lang_wrap a')

langBtn.addEventListener('click', function() {
  langList.classList.toggle('active')
  langIco.classList.toggle('iactive')
})
langA.forEach(function(item) {
  item.addEventListener('click', function() {
    langList.classList.toggle('active')
  })
})



/* 헤더 검색 */
const searchBtn = document.querySelector('.search_wrap button')
const searchBox = document.querySelector('.search_box')

searchBox.style.display = 'none';
searchBtn.addEventListener('click', function() {
  if(searchBox.style.display === 'none') {
    searchBox.style.display = 'block'
  } else {
    searchBox.style.display = 'none'
  }
})
// searchBtn.addEventListener('click', function() {
//   searchBox.classList.toggle('active')
// })
// 이 형식으로 쓰면 css에도 따로 작성해야 함



/* 전체 메뉴 */
const allmenuOpenBtn = document.querySelector('.btn_allmenu_open')
const allmenuCloseBtn = document.querySelector('.btn_allmenu_close')
const allmenu = document.querySelector('.allmenu_popup')

allmenuOpenBtn.addEventListener('click', function() {
  allmenu.style.display = 'flex'
})
allmenuCloseBtn.addEventListener('click', function() {
  allmenu.style.display = 'none'
})



/* 뉴스 메뉴 */
const tabsBtn = document.querySelectorAll('.news_tab .tabs li')
const newsCon = document.querySelectorAll('.news_contents .conbox')
const newsConF = document.querySelector('.news_wrap .news_contents .conbox:first-child')

newsCon[0].classList.add('conbox_visible');
tabsBtn.forEach(function(item, i) {
  const newsConI = newsCon[i];

  
  item.addEventListener('click', function() {
    tabsBtn.forEach(function(t) {
      t.classList.remove('active') // 클릭하지 않은 요소는 remove()
    })
    this.classList.add('active') // 클릭한 요소에 클래스 추가

    
    newsCon.forEach(function(con) {
      con.classList.remove('conbox_visible')
    })
    newsConI.classList.add('conbox_visible')
  })
})



/* 푸터 패밀리사이트 */
const famBtn = document.querySelector('.family_site button')
const famList = document.querySelector('.family_site ul')

/* famBtn.addEventListener('click', function() {}) */
famBtn.addEventListener('click', function() {
  if (famList.style.display === 'none') {
    famList.style.display = 'block'
  } else {
    famList.style.display = 'none'
  }
  
})