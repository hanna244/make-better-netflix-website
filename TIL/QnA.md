# QnA

## 목차

1. [`:root`에 적용한 속성이 왜 전체(다른 요소)에 적용이 안되나요?](#q1-질문)
1. [`ourStory` 부분에서 본문의 줄바꿈 하는 방법](#q2-질문)
1. [`<input>` 안에서 `<label>` 텍스트 위치 잡는 방법](#q3-질문)
1. [`<article>`요소가 `<figure>`요소를 자식요소로 생각하지 않습니다. 왜그럴까요?](#q4-질문)
1. [감춤 스타일링 하는 방법](#q5-질문)
1. [브라우저의 크기를 줄일 때 보이는 여백의 차이는 왜 생기는 건가요?](#q6-질문)
1. [`<input>`과 `<button>`의 레이아웃을 잡을 때 높이를 딱 맞게 맞추는 방법이 있나요?](#q7-질문)

## Q1. 질문

`:root`에 적용한 속성이 왜 전체(다른 요소)에 적용이 안되나요?

<details>
  <summary>A1. 답변</summary>
  <br/>
  
  아래와 같이 루트에 속성을 적용해도 다른 요소에는 적용이 되지 않습니다. `:root`에 적용하는 것이 `html`요소에 적용하는 것 아닌가요?
  ```css
  :root {
    display: block;
    margin: 0;
    padding: 0;
    font-size: 10px;
  }
  ```

답변 : 공간에 대한 속성은 상속이 되지 않는다. `*`를 사용해서 전체에 공간 설정을 하는 것은 무책임하다 그냥 사용하지 말자

</details>

<br/>

## Q2. 질문

`ourStory` 부분에서 본문의 줄바꿈 하는 방법

<details>
  <summary>A2. 답변</summary>
  <br/>

답변 내용을 작성합니다.

</details>

<br/>

## Q3. 질문

`<input>` 안에서 `<label>` 텍스트 위치 잡는 방법

<details>
  <summary>A3. 답변</summary>
  <br/>
  
  `<input>` 자식 요소인 `<label>`요소에 `position: absolute; left: 2rem;` 주었는데 `<input>`컨텐츠 밖으로 나갑니다 왜그럴까요?

답변 : `<input>`요소를 기준으로 `<label>`의 위치를 고정 하고 싶다면 `<input>`과 `<label>`를 랩핑해주면 된다. 즉, `<input>`
에 `p:r`, `<label>`에 `p:a`를 적용한다.
![](./assets/netflix_TIL_attached_file1.jpg)

```css
input {
  border: 0;
  padding: 0;
}

.promotion input {
  position: relative;
  width: 22.8rem;
  height: 4rem;
  border-radius: 50px;
}

.promotion label {
  position: absolute;
  left: 5rem;
  font: normal 1.3rem spoqaHanSans;
  line-height: 4rem;
  color: var(--netflix-gray);
}
```

</details>

<br/>

## Q4. 질문

`<article>`요소가 `<figure>`요소를 자식요소로 생각하지 않습니다. 왜그럴까요?

<details>
  <summary>A4. 답변</summary>
  <br/>

- 이미지와 비디오에 `absolute`가 설정되어 있기때문에 뒤에 요소가 이미지의 자리를 인식하지 못한다. 그러면 피규어에 마지막 자식 가상요소를 사용해야 할까?

![](./assets/netflix_TIL_attached_file2.jpg)

```css
article {
  display: flex;
  flex-flow: column wrap;
  padding: 8rem 0;
}

figure {
  margin: 0;
}

/* --------------------- netflixIntro */

.netflixIntro {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--netflix-white);
}

.netflixIntro h4 {
  font: bold 2.4rem spoqaHanSans;
  line-height: 120%;
  color: var(--netflix-white);
}

.netflixIntro p {
  margin-top: 30px;
  font: normal 1.6rem spoqaHanSans;
  line-height: 150%;
  color: var(--netflix-white);
}

.netflixIntro__watchOnTV {
  display: flex;
  flex-flow: column wrap;
}

.netflixIntro__figure {
  position: relative;
}

.netflixIntro__watchOnTV img {
  position: absolute;
  z-index: 100;
  width: 338px;
}

.netflixIntro__watchOnTV video {
  position: absolute;
  top: 52px;
  left: 43px;
  z-index: 10;
  width: 250px;
}
```

</details>

<br/>

## Q5. 질문

감춤 스타일링 하는 방법

<details>
  <summary>A5. 답변</summary>
  <br/>
  
  ```css
  .a11yHidden {
      overflow: hidden;
      position: absolute;
      clip: rect(0, 0, 0, 0);
      /* clip-path: inset(50%); */
      clip-path: circle(0%);
      width: 1px;
      height: 1px;
      margin: -1px;
      white-space: nowrap;
  }
  ```

```css
white-space: nowrap;
```

- `text`가 많을 때 개행 된다면 아래의 공간으로 `text`가 보일 수 있다. 그래서 `norwrap` 속성을 사용하면 텍스트가 개행되지 않아 감출 수 있게 된다.

```css
overflow: hidden;
```

```css
width: 1px;
height: 1px;
```

- 박스의 공간을 최소 한으로 줄인다.

```css
position: absolute;
```

</details>

<br/>

## Q6. 질문

브라우저의 크기를 줄일 때 보이는 여백의 차이는 왜 생기는 건가요?

<details open>
  <summary>A6. 답변</summary>
  <br/>
  
  보여지는 컨텐츠를 감싸는 컨테이너는 동일 합니다. 그런데 브라우저의 크기를 줄였을때 헤더의 여백은 일정하게 보이지만 아래 버튼의 오른쪽 공백은 공간이 없이 보입니다. 같은 스타일링을 준 컨테이너로 감싼 컨텐츠인데 왜 여백의 공간이 다른건가요?

[참고 -> 깃허브 코드 저장](https://github.com/hanna244/netflix_fixed_design/commit/cc299eae00e98ef38a9e7bc071699d590f1f4281)

![](./assets/netflix_TIL_attached_file3.jpg)

</details>

<br/>

## Q7. 질문

`<input>`과 `<button>`의 레이아웃을 잡을 때 높이를 딱 맞게 맞추는 방법이 있나요?

<details open>
  <summary>A7. 답변</summary>
  <br/>

아래의 레이아웃을 잡을 때는 `margin-left: -0.4rem; padding-top: 0.8em;`을 사용해서 임의로 위치를 비슷해 보이도록 설정했습니다. 위치를 딱 알맞게 하기 위한 방법이 있을 까요?

[참고 -> 깃허브 코드 저장](https://github.com/hanna244/netflix_fixed_design/commit/cc299eae00e98ef38a9e7bc071699d590f1f4281)

![](./assets/netflix_TIL_attached_file4.jpg)

```css
.promotion input {
  width: 22.8rem;
  height: 4rem;
  border-radius: 50px;
}

.promotion button {
  background-color: var(--netflix-red);
  font: normal 1.2rem spoqaHanSans;
  line-height: 135%;
  color: var(--netflix-white);
  padding: 0.9375em 1.25em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  border-radius: 90px;
}

@media (min-width: 750px) {
  .promotion input {
    width: 54rem;
    border-radius: 0;
  }
  .promotion button {
    display: inline;
    margin: 0;
    border-radius: 0;
    margin-left: -0.4rem;
    height: 4rem;
    padding-top: 0.8em;
    /* font-size: 2.2rem; */
    width: 20rem;
  }
}
```

</details>

<br/>

## 스타일링

1. 버튼이나 링크 요소의 크기에 이미지를 딱 맞출 때 사용하는 속성

- 이미지에 크기 속성을 적용한다.
- 버튼이나 링크 요소에는 `display: block;` 설정

```css
img {
  display: inherit;
  vertical-align: middle;
}
```

## 기억하기

1. `<a>`요소는 `inline`요소이다. <del>항상</del> `block`으로 바꾸는 습관 들이기. 어디서 뭐가 잘못됐지 하고 시간 버리는 일 없도록!