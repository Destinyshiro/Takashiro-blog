document.querySelector(".heads").onmouseenter = function () {
  document.querySelector(".contain").style.display = "inline-block";
};
document.querySelector(".heads").onmouseleave = function () {
  var t = document.documentElement.scrollTop || document.body.scrollTop > 0;
  if (t <= 0) {
    document.querySelector(".contain").style.display = "none";
  }
};

window.onscroll = function () {
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  var top_div = document.querySelector(".contain");
  var back_top = document.querySelector(".backtop");
  if (t > 0) {
    top_div.style.display = "inline";
    if(t>800){
      back_top.style.display = 'block';
    }
  } else {
    top_div.style.display = "none";
    back_top.style.display = 'none';
  }
};

function heightToTop(ele) {
  //ele为指定跳转到该位置的DOM节点
  let root = document.body;
  let height = 0;
  do {
    height += ele.offsetTop;
    ele = ele.offsetParent;
  } while (ele !== root);
  return height;
}
//某按钮点击时
document.querySelector(".down").addEventListener("click", function (e) {
  window.scrollTo({
    top: heightToTop(document.getElementById("anchorpage")),
    behavior: "smooth",
  });
});

document.querySelector(".page1").onmouseenter = function () {
  document
    .querySelector(".page1")
    .setAttribute("style", "box-shadow: 0 5px 22px 2px rgb(0 0 0 / 50%);");
  document
    .querySelector(".yuris1")
    .setAttribute("style", "transform: scale(1.05);");
};
document.querySelector(".page1").onmouseleave = function () {
  document
    .querySelector(".page1")
    .setAttribute("style", "box-shadow: 0 1px 20px 1px rgb(0 0 0 / 50%);");
  document
    .querySelector(".yuris1")
    .setAttribute("style", "transform: scale(1);");
};

document.querySelector(".page2").onmouseenter = function () {
  document
    .querySelector(".page2")
    .setAttribute("style", "box-shadow: 0 5px 22px 2px rgb(0 0 0 / 50%);");
  document
    .querySelector(".yuris2")
    .setAttribute("style", "transform: scale(1.05);");
};
document.querySelector(".page2").onmouseleave = function () {
  document
    .querySelector(".page2")
    .setAttribute("style", "box-shadow: 0 1px 20px 1px rgb(0 0 0 / 50%);");
  document
    .querySelector(".yuris2")
    .setAttribute("style", "transform: scale(1);");
};

document.querySelector(".page3").onmouseenter = function () {
  document
    .querySelector(".page3")
    .setAttribute("style", "box-shadow: 0 5px 22px 2px rgb(0 0 0 / 50%);");
  document
    .querySelector(".yuris3")
    .setAttribute("style", "transform: scale(1.05);");
};
document.querySelector(".page3").onmouseleave = function () {
  document
    .querySelector(".page3")
    .setAttribute("style", "box-shadow: 0 1px 20px 1px rgb(0 0 0 / 50%);");
  document
    .querySelector(".yuris3")
    .setAttribute("style", "transform: scale(1);");
};

document.querySelector(".page4").onmouseenter = function () {
  document
    .querySelector(".page4")
    .setAttribute("style", "box-shadow: 0 5px 22px 2px rgb(0 0 0 / 50%);");
  document
    .querySelector(".yuris4")
    .setAttribute("style", "transform: scale(1.05);");
};
document.querySelector(".page4").onmouseleave = function () {
  document
    .querySelector(".page4")
    .setAttribute("style", "box-shadow: 0 1px 20px 1px rgb(0 0 0 / 50%);");
  document
    .querySelector(".yuris4")
    .setAttribute("style", "transform: scale(1);");
};

// 轮播图类
class Slide {
  constructor() {
    this.slideBoxDOM = document.querySelector('.slide-box');
    this.slideLeftBtnDOM = this.slideBoxDOM.querySelector('.slide-left-btn');
    this.slideRightBtnDOM = this.slideBoxDOM.querySelector('.slide-right-btn ');
    this.bannerBoxDOM = this.slideBoxDOM.querySelector('.banner-box');
    this.paginationBoxDOM = this.slideBoxDOM.querySelector('.pagination-box');

    // 记数器，记录当前所展示的横幅序号（不可直接操作变值）
    this._currentIndex = 0;
    this.bannerItemDOMs = null;
    // bannerItemDOMs length
    this.bannerItemDOMsLen = 0;

    // 图片对象数组
    this.banners = [
      {
        imageName: "01.jpg",
      },
      {
        imageName: "02.jpg",
      },
      {
        imageName: "03.jpg",
      },
      {
        imageName: "04.jpg",
      },
      {
        imageName: "05.jpg",
      },
      {
        imageName: "06.jpg",
      },
      {
        imageName: "07.jpg",
      },
      // 可以继续增加图片
    ];
    this.imageUrl = './image/';

    // 定时器
    this.timer = null;
  }

  get currentIndex() {
    return this._currentIndex;
  }

  // 用来监听记数器变化，根据变换来改变当前的横幅
  set currentIndex(num) {
    // 将所有横幅归初始
    Object.values(this.bannerItemDOMs).forEach((item, i) => {
      item.classList.remove('left', 'middle', 'right');
      item.onclick = null;
      this.paginationBoxDOM.children[i].classList.remove('chose');
    });

    if (num < 0) {
      this._currentIndex = this.bannerItemDOMsLen - 1;
    } else if (num >= this.bannerItemDOMsLen) {
      this._currentIndex = 0;
    } else {
      this._currentIndex = num;
    }
    this.paginationBoxDOM.children[this._currentIndex].classList.add('chose');

    if (this._currentIndex === 0) {
      this.showCurrentBanner(this.bannerItemDOMsLen - 1, this._currentIndex, this._currentIndex + 1);
    } else if (this._currentIndex === this.bannerItemDOMsLen - 1) {
      this.showCurrentBanner(this._currentIndex - 1, this._currentIndex, 0);
    } else {
      this.showCurrentBanner(this._currentIndex - 1, this._currentIndex, this._currentIndex + 1);
    }
  }

  // 显示当前横幅
  showCurrentBanner(leftIndex, middleIndex, rightIndex) {
    console.log(leftIndex, rightIndex, middleIndex)
    this.bannerItemDOMs[leftIndex].classList.add('left');
    this.bannerItemDOMs[middleIndex].classList.add('middle');
    this.bannerItemDOMs[rightIndex].classList.add('right');
    this.bannerItemDOMs[leftIndex].onclick = () => {
      this.currentIndex--;
    };
    this.bannerItemDOMs[rightIndex].onclick = () => {
      this.currentIndex++;
    }
  }

  // 获取 bannerItemDOMs
  getBannerItemDOMs() {
    return this.slideBoxDOM.querySelectorAll('.banner-item');
  }

  // 获取 banner-itemDOM 字符串，用来渲染 DOM
  getBannerItemHTML(imageName) {
    return `<div class="banner-item"><img src="${this.imageUrl+imageName}"></div>`
  }

  // 渲染 DOM
  drawDOM(banners) {
    this.bannerBoxDOM.innerHTML = banners.reduce((html, item) => {
      return html + this.getBannerItemHTML(item.imageName);
    }, '');

    this.banners.forEach((item,i) => {
      const span = document.createElement('span');
      span.addEventListener('mouseover', () => {
        this.currentIndex = i;
      });
      this.paginationBoxDOM.append(span);
    });
  }

  // 启动定时器
  openTimer() {
    this.timer = setInterval(() => {
      this.currentIndex++;
    }, 3000);
  }

  // 清除定时器
  stopTimer() {
    clearInterval(this.timer);
  }

  init() {
    // 初始化
    this.drawDOM(this.banners);
    this.bannerItemDOMs = this.getBannerItemDOMs();
    this.bannerItemDOMsLen = this.bannerItemDOMs.length;
    this.currentIndex = 0;

    // 监听事件
    this.slideLeftBtnDOM.addEventListener('click', () => {
      this.currentIndex--;
    });
    this.slideRightBtnDOM.addEventListener('click', () => {
      this.currentIndex++;
    });

    // 自动轮播
    this.openTimer();
    this.slideBoxDOM.addEventListener('mouseover', () => {
      this.stopTimer();
    });
    this.slideBoxDOM.addEventListener('mouseout', () => {
      this.openTimer();
    })
  }
}

new Slide().init();
function getDate() {
  //获取当前时间
  var date = new Date();
  //格式化为本地时间格式
  var date1 = date.toLocaleString();
  //获取div
  var div1 = document.querySelector(".clock");
  //将时间写入div
  div1.innerHTML = date1;
}
//使用定时器每秒向div写入当前时间
setInterval("getDate()", 1000);

document.querySelector(".backtop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});




window.onresize = function(){
  if(document.body.clientWidth<800){
    document.querySelector('.logo')
  }
}