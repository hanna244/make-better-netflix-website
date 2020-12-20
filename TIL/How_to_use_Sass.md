# Sass 사용 방법

## html 연결하기

`<link>`요소를 사용해서 연결해주면 된다. 컴파일된 `css` 파일을 연결해주면 된다. `Sass`를 연결하면 스타일이 먹지 않는 상황을 만나게 될 것이다💦

Sass가 하는 일은 css로 컴파일하는 역할을 하기 떄문이다. 만약 `parcel`을 사용한다면 Sass로 바로 연결가능!

## Sass에서 파일을 불러오는 경우 (`url()`, `src()`)
먼저 `Sass`는 `CSS`로 컴파일 해주는 전처리기일 뿐이다. 그러니 직접적으로 스타일링을 하는 파일은 `CSS`파일이다. 

예를 들어 `background-image`를 사용해 이미지를 불러오는 경우 작성하고 있는 `sass` 파일을 기준으로 이미지를 탐색하는 것이 아닌 컴파일 되는 `css` 파일을 기준으로 이미지를 탐색해야 한다. 

## Sass를 배우자

### Nesting (중첩)

`CSS`에서는 매번 자식 선택자를 입력하는 번거로움이 있었지만 `Sass`에서는 중첩 기능을 사용하여 자식요소를 쉽게 입력할 수 있다. 또한 중첩되어 있기 때문에 해당 부모 요소의 자식들인 것을 한 눈에 알아 볼 수 있다는 장점이 있다. 

```scss
ul {
  font-size: 11px;

  li {
    background: #fff;
  }
}
```

#### 가상클래스를 중첩 할 때 
가상클래스를 중첩 할 때 `&`(`ampersand`)가 필요하다. 


```scss
.class {
  margin:20px;
  
  &:hover {
    color:yellow;
  }
}
```

#### BEM 표기법 중첩 할 때
BEM 표기법을 중첩 할 때 `&`(`ampersand`)가 필요하다. 

```scss
.class {
  margin:20px;
  
  &__description {
    color:yellow;
  }

  &__description--open {
    color:blue;
  }
}
```

#### 인접 형제 선택자
두 요소가 인접한 형제관계일 때, CSS 와 같이 `+`를 사용하여 선택할 수 있다. 

```html
<input type="text" id="Promotion__ourstory" />
<label for="Promotion__ourstory">이메일 주소</label>
```

```scss
// 1
input:focus + label {
  background-color: aqua;
  top: 3px;
  left: 20px;
  font-size: rem(11px);
}

// 2
input:focus {
  + label {
    background-color: aqua;
    top: 3px;
    left: 20px;
    font-size: rem(11px);
  }
}
```

#### 선택자 정리

[[Sass]parent-selector](https://sass-lang.com/documentation/style-rules/parent-selector)

```scss
div { 
  color:black; 
  .foo {   // 자손(descendant) 선택자 
    color: black; 
  }
  > .foo { // 자식(child) combinator 
    color: black; 
  }
  + .foo { // 인접형제(adjacent sibling) 선택자 
    color: #000; 
  }
  ~ .foo { // 일반형제(general sibling) 선택자 
    color: yellow; 
  }
  & .foo { // Sass 부모(Parent) 참조 선택자 
    color: #fff; 
  }
  .foo & { // Sass 부모(Parent) 참조 선택자 
    color: red; 
  }
  &.bar { 
    color: green; 
  }
}
```


