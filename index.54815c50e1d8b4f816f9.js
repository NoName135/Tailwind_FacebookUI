/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
 // 深色模式

var darkMode = document.getElementById('dark-mode');
var darkModeState = true;
darkMode.addEventListener('click', function () {
  darkModeState ? darkModeState = false : darkModeState = true;
  renderDarkMode();
});

function renderDarkMode() {
  var item = '';

  if (darkModeState) {
    item = "\n    <div class=\"bg-fb-light-input dark:bg-fb-input rounded-full flex justify-center items-center p-2 mr-2\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"white\" class=\"w-6 h-6\">\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z\" />\n      </svg>\n    </div>\n    <p class=\"flex-1 text-black dark:text-white\">\u6DF1\u8272\u6A21\u5F0F\uFF1A\u95DC\u9589</p>";
    console.log(document.documentElement.classList);
    document.documentElement.classList.add('dark');
  } else {
    item = "\n    <div class=\"bg-fb-light-input dark:bg-fb-input rounded-full flex justify-center items-center p-2 mr-2\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"white\" class=\"w-6 h-6\">\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z\" />\n      </svg>\n    </div>\n    <p class=\"flex-1 text-black dark:text-white\">\u6DF1\u8272\u6A21\u5F0F\uFF1A\u958B\u555F</p>";
    document.documentElement.classList.remove('dark');
  }

  darkMode.innerHTML = item;
}

renderDarkMode(); // 導覽列

var plusBtn = document.getElementById('plus-btn');
var msgBtn = document.getElementById('msg-btn');
var notifyBtn = document.getElementById('notify-btn');
var moreBtn = document.getElementById('more-btn');
var plusPanel = document.getElementById('plus-panel');
var msgPanel = document.getElementById('msg-panel');
var notifyPanel = document.getElementById('notify-panel');
var morePanel = document.getElementById('more-panel');
var navButtons = [plusBtn, msgBtn, notifyBtn, moreBtn];
var navPanels = [plusPanel, msgPanel, notifyPanel, morePanel];

function openPanel(index) {
  navPanels.forEach(function (data, i) {
    if (index === i) {
      if (data.classList.contains('hidden')) {
        data.classList.remove('hidden');
      } else {
        data.classList.add('hidden');
      }
    } else {
      data.classList.add('hidden');
    }
  });
}

window.addEventListener('click', function () {
  openPanel(-1);
});
navButtons.forEach(function (data, i) {
  data.addEventListener('click', function (e) {
    e.stopPropagation();
    openPanel(i);
  });
}); // 取消 window 冒泡 event，點擊 panel 裡面不會關閉

navPanels.forEach(function (data) {
  data.addEventListener('click', function (e) {
    e.stopPropagation();
  });
}); // 左側資訊欄

function renderLeftItems(name, imgUrl) {
  var item = "\n    <div class=\"flex items-center justify-content-center w-full p-2 mb-1 rounded cursor-pointer hover:bg-fb-light-input dark:hover:bg-fb-input\">\n      <div class=\"w-[32px] rounded-full overflow-hidden mr-4\">\n        <img src=\"".concat(imgUrl, "\" alt=\"\">\n      </div>\n      <p class=\"text-black dark:text-white text-[.9rem]\">").concat(name, "</p>\n    </div>");
  return item;
}

var leftBlock = document.getElementById('left-block');

var renderLeftBlock = function () {
  var arr = [{
    name: '布魯斯',
    img: 'https://bruce-fe-fb.web.app/image/avator.png'
  }, {
    name: '活動',
    img: 'https://bruce-fe-fb.web.app/image/left/activity.svg'
  }, {
    name: '天氣',
    img: 'https://bruce-fe-fb.web.app/image/left/cloudy.png'
  }, {
    name: '災害應變中心',
    img: 'https://bruce-fe-fb.web.app/image/left/dynamic.svg'
  }, {
    name: '新冠病毒資訊中心',
    img: 'https://bruce-fe-fb.web.app/image/left/facemask.svg'
  }, {
    name: '社團',
    img: 'https://bruce-fe-fb.web.app/image/left/friend.svg'
  }, {
    name: '企業管理平台',
    img: 'https://bruce-fe-fb.web.app/image/left/job.png'
  }, {
    name: 'Messenger',
    img: 'https://bruce-fe-fb.web.app/image/left/messenger.svg'
  }, {
    name: '近期廣告動態',
    img: 'https://bruce-fe-fb.web.app/image/left/pay.png'
  }, {
    name: '朋友名單',
    img: 'https://bruce-fe-fb.web.app/image/left/sale.png'
  }, {
    name: '最愛',
    img: 'https://bruce-fe-fb.web.app/image/left/star.svg'
  }, {
    name: 'Marketplace',
    img: 'https://bruce-fe-fb.web.app/image/left/store.svg'
  }, {
    name: 'Watch',
    img: 'https://bruce-fe-fb.web.app/image/left/watchingTv.svg'
  }];
  var htmlStr = '';
  arr.forEach(function (data) {
    htmlStr += renderLeftItems(data.name, data.img);
  });
  leftBlock.innerHTML = htmlStr;
}(); // 右側聯絡人


var rightBlock = document.getElementById('right-block');

var renderRightBlock = function () {
  var item = "\n  <div class=\"flex items-center justify-content-center w-full rounded cursor-pointer px-1 py-2 hover:bg-fb-light-input dark:hover:bg-fb-input\">\n    <div class=\"w-[32px] cursor-pointer mr-4 relative\">\n      <div class=\"rounded-full overflow-hidden\">\n        <img src=\"https://bruce-fe-fb.web.app/image/avator.png\" alt=\"\">\n      </div>\n      <div class=\"w-[8px] h-[8px] rounded-full bg-green-500 absolute bottom-0 right-0 ring ring-fb-light-bg dark:ring-gray-900\"></div>\n    </div>\n    <p class=\"text-black dark:text-white text-[.9rem]\">\u5E03\u9B6F\u65AF</p>\n  </div>";
  var htmlStr = '<p class="text-gray-800 dark:text-gray-400 text-lg mb-2">聯絡人</p>';

  for (var i = 0; i < 10; i++) {
    htmlStr += item;
  }

  rightBlock.innerHTML = htmlStr;
}(); // 限時動態
// const storyList = document.querySelector('.story-list .swiper-wrapper');
// const renderStoryItem = function () {
//   for (let i = 0; i < 4; i++) {
//     const divBox = document.createElement('div');
//     divBox.classList.add(
//       'flex-1',
//       'px-[4px]',
//       'min-w-[120px]',
//       'cursor-pointer'
//     );
//     divBox.innerHTML = `
//       <div class="relative overflow-hidden" id="story-${i}">
//         <div id="story-mask-${i}" class="hidden absolute w-full h-full top-0 left-0 bg-black/20 z-20"></div>
//         <div class="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/30 to-transparent z-20"></div>
//         <div class="w-[32px] h-[32px] absolute top-4 left-4 ring-4 ring-fb bg-fb-card rounded-full flex justify-center items-center z-30">
//           <p class="text-white text-sm">布</p>
//         </div>
//         <img id="story-image-${i}" class="w-full h-full duration-200" src="https://bruce-fe-fb.web.app/image/story.png" />
//         <p class="absolute bottom-2 left-2 text-white">布魯斯</p>
//       </div>
//     `;
//     divBox.addEventListener('mouseover', function () {
//       const mask = document.getElementById(`story-mask-${i}`);
//       const image = document.getElementById(`story-image-${i}`);
//       image.classList.add('scale-105');
//       mask.classList.remove('hidden');
//     });
//     divBox.addEventListener('mouseout', function () {
//       const mask = document.getElementById(`story-mask-${i}`);
//       const image = document.getElementById(`story-image-${i}`);
//       image.classList.remove('scale-105');
//       mask.classList.add('hidden');
//     });
//     storyList.appendChild(divBox);
//   }
// }()
// // SwiperJS
// const storySwiper = new Swiper('.story-list', {
//   slidesPerView: 'auto',
//   slidesPerGroupAuto: true,
//   loop: false,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
// const fbLiveSwiper = new Swiper('.fb-live', {
//   slidesPerView: 'auto',
//   slidesPerGroupAuto: true,
//   loop: false,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
// 限時動態


var storyList = document.querySelector('.story-list .swiper-wrapper');

var renderStoryItem = function () {
  for (var i = 0; i < 10; i++) {
    var divBox = document.createElement('div');
    divBox.classList.add('flex-1', 'px-[4px]', 'min-w-[120px]', 'cursor-pointer', 'group', 'swiper-slide');
    divBox.innerHTML = "\n    <div class=\"relative h-full rounded-lg overflow-hidden\">\n      <img src=\"https://bruce-fe-fb.web.app/image/story.png\" class=\"object-cover w-full h-full duration-500 group-hover:scale-105\">\n      <div class=\"absolute w-full h-full top-0 left-0 group-hover:bg-black/20\"></div>\n      <div class=\"absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/30 to-transparent\"></div>\n      <div class=\"absolute top-4 left-4 w-[32px] h-[32px] ring-4 ring-fb bg-fb-card rounded-full flex justify-center items-center z-10\">\n        <p class=\"text-white text-sm\">\u5E03</p>\n      </div>\n      <p class=\"absolute bottom-2 left-2 text-white z-10\">\u5E03\u9B6F\u65AF</p>\n    </div>";
    storyList.appendChild(divBox);
  }
}(); //建立包廂


var fbLive = document.querySelector('.fb-live .swiper-wrapper');

var fbLiveItem = function () {
  for (var i = 0; i < 30; i++) {
    var divBox = document.createElement('div');
    divBox.classList.add('w-[40px]', 'relative', 'ml-4', 'swiper-slide');
    divBox.innerHTML = "\n    <div class=\"rounded-full overflow-hidden cursor-pointer relative\">\n      <img src=\"https://bruce-fe-fb.web.app/image/avator.png\">\n      <div class=\"absolute w-full h-full top-0 left-0 hover:bg-black/20 dark:hover:bg-white/20 overflow-hidden\"></div>\n    </div>\n    <div class=\"w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-0 right-0 ring ring-white dark:ring-gray-900\"></div>";
    fbLive.appendChild(divBox);
  }
}(); // SwiperJS


var storySwiper = new Swiper('.story-list', {
  slidesPerView: 'auto',
  slidesPerGroupAuto: true,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var fbLiveSwiper = new Swiper('.fb-live', {
  slidesPerView: 'auto',
  slidesPerGroupAuto: true,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.54815c50e1d8b4f816f9.js.map