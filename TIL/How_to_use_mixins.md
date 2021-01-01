# Mixin 사용 방법
포트폴리오에 사용된 mixin 라이브러리의 사용 방법을 정리합니다.


## fsp (fontsize-padding)

`link`와 같이 `padding`을 `fontsize`에 따라 가변되게 하기 위해 `em`단위를 사용해야 한다.

`fontsize`를 `px`로 입력하면 `rem`단위가 적용된다.` 

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
[include-media 홈페이지 바로가기](https://eduardoboucas.github.io/include-media/)

### 설치하기 
[[npm] include-media](https://www.npmjs.com/package/include-media)

npm을 이용해 설치한다. 
```zsh
npm i include-media
```
그리고 홈페이지에서 제공하는 `mixin`파일을 다운받아 사용하려는 프로젝트에 적용한다. 
[include-media → download the file manually](https://raw.githubusercontent.com/eduardoboucas/include-media/master/dist/_include-media.scss)

### 사용하기 

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

또는 중첩해서 사용하면 더 위와 같은 오류를 방지 할 수 있다. 

```scss
.Container {
  width: 80%;

  @include media('>=lg') {
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



