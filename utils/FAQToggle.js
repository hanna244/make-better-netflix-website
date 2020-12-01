// 만들어야 하는 변수
// FAQ 리스트, 질문, 설명 각각 찾기
// 찾아온 리스트 배열화 하기 makeArray() 헬퍼 함수 사용
// 질문(dt)에 클릭 이벤트 바인딩하기
// 클릭 했을 때 설명 박스가 토글되는 기능 함수로 만들기
// 토글되는 기능이라.. classList.toggle()??? 사용하면 되려나...? 일단 해보는 걸로!

var FAQList = document.querySelector(".netflixFAQ dl");

var FAQListItems = FAQList.querySelectorAll("dt");

var FAQListAnswers = FAQList.querySelectorAll("dd");
console.log(FAQListAnswers);

var makeArray = function (arrayLikeObject) {
  return [].slice.call(arrayLikeObject);
};

var FAQListItemsArr = makeArray(FAQListItems);

function handleFAQtoggle(index) {
  console.log(index);
}

// FAQListItemsArr.forEach((item, index) => {
//   console.log(item, index);
//   FAQListItemsArr[index].addEventListen("click", handleFAQtoggle.bind(index);
// });
