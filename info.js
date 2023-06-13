$(function () {
  var num = 72; //total image 개수

  //preload all the images into hidden div
  for (var i = 1; i <= num; i++) {
    var img = document.createElement("img");
    if (i < 10) {
      img.src =
        "https://www.kia.com/content/dam/kwp/kr/ko/configurator/niro-ev/trim/exterior/air/swp/swp_0" +
        i +
        ".png";
    } else {
      img.src =
        "https://www.kia.com/content/dam/kwp/kr/ko/configurator/niro-ev/trim/exterior/air/swp/swp_" +
        i +
        ".png";
    }
    document.getElementById("preload-imgs").appendChild(img);
  }

  //control swipes using jquery.touchSwipe.min.js
  //http://labs.rapinteractive.co.uk/touchSwipe
  var swipeOptions = {
    triggerOnTouchEnd: true,
    swipeStatus: swipeStatus,
    allowPageScroll: "vertical",
    threshold: 75,
  };

  $(function () {
    imgs = $(".img-container");
    //the element that will be swipeable
    imgs.swipe(swipeOptions);
  });

  function swipeStatus(event, phase, direction, distance) {
    var duration = 0;
    if (direction == "left") {
      changeImg(distance);
    } else if (direction == "right") {
      changeImgR(-distance);
    }
  }

  function changeImg(imgNum) {
    imgNum = Math.floor(imgNum / 8);
    if (imgNum < 1) {
      imgNum += num;
    }
    if (imgNum > num) {
      imgNum -= num;
    }
    //change image src
    if (imgNum < 10) {
      document.getElementById("myImg").src =
        "https://www.kia.com/content/dam/kwp/kr/ko/configurator/niro-ev/trim/exterior/air/swp/swp_0" +
        imgNum +
        ".png";
    } else {
      document.getElementById("myImg").src =
        "https://www.kia.com/content/dam/kwp/kr/ko/configurator/niro-ev/trim/exterior/air/swp/swp_" +
        imgNum +
        ".png";
    }
  }

  function changeImgR(imgNum) {
    imgNum = Math.floor(imgNum / 8);

    var num2 = -Math.abs(num);
    if (imgNum > num2) {
      imgNum += num;
    }
    if (imgNum <= num2) {
      imgNum += num * 2;
    }
    //change image src
    if (imgNum < 10) {
      document.getElementById("myImg").src =
        "https://www.kia.com/content/dam/kwp/kr/ko/configurator/niro-ev/trim/exterior/air/swp/swp_0" +
        imgNum +
        ".png";
    } else {
      document.getElementById("myImg").src =
        "https://www.kia.com/content/dam/kwp/kr/ko/configurator/niro-ev/trim/exterior/air/swp/swp_" +
        imgNum +
        ".png";
    }
  }
});
