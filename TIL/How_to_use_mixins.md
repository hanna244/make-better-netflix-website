# Mixin 사용 방법
포트폴리오에 사용된 mixin 라이브러리의 사용 방법을 정리합니다.


## margin

```scss
@include margin(left 1.8rem right 1.8rem);
```
```css
margin-left: 1.8rem;
margin-right: 1.8rem;
```
<br />

```scss
@include margin(0 1.8rem);
```
```css
margin: 0 1.8rem;
/* margin-top: 0px;
margin-right: 1.8rem;
margin-bottom: 0px;
margin-left: 1.8rem; */
```

## include-media
반응형 미디어 쿼리  `mixin`이다. 
[include-media 라이브러리 홈페이지 바로가기](https://eduardoboucas.github.io/include-media/)


아래의 중단점 변수를 `config`(구성) 파일에 작성한다. 
```scss
$breakpoints: (
  mobile: 357px,
  tablet: 640px,
  desktop: 960px,
);
```

[예시 1]

`tablet`(640px)부터 적용된다. 
```scss
@include meida('>=tablet') {
  width: 50%;
}
```

[주의] 위의 코드 처럼 입력하면 오류가 발생할 수 있음! 원래 미디어 쿼리를 사용하는 것처럼 어떤 요소에 속성을 적용할 건지 지정해야 한다. 이런 작은 부분에서 실수가 발생하니 꼼꼼하게 보기
```scss
@include meida('>=tablet') {
  .container {
    width: 50%;
  }
}
```

[예시 2]

`mobile`(375px)초과부터 `tablet`(640px)까지 적용된다. 
```scss
@include media(">mobile", "<=tablet") {
  .container {
    width: 50%;
  }
}
```



