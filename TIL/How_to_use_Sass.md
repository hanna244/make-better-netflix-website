# Sass 사용 방법

## html 연결하기

`<link>`요소를 사용해서 연결해주면 된다. 컴파일된 css 파일을 연결해주면 된다. Sass를 연결하면 스타일이 먹지 않는 상황을 만나게 될 것이다💦

Sass가 하는 일은 css로 컴파일하는 역할을 하기 떄문이다. 만약 parcel을 사용한다면 Sass로 바로 연결가능!

## Sass에서 파일을 불러오는 경우 (`url()`, `src()`)
먼저 `Sass`는 `CSS`로 컴파일 해주는 전처리기일 뿐이다. 그러니 직접적으로 스타일링을 하는 파일은 `CSS`파일이다. 

예를 들어 `background-image`를 사용해 이미지를 불러오는 경우 작성하고 있는 `sass` 파일을 기준으로 이미지를 탐색하는 것이 아닌 컴파일 되는 `css` 파일을 기준으로 이미지를 탐색해야 한다. 

## Sass를 배우자

### Nesting (중첩)

CSS에서는 매번 자식 선택자를 입력하는 번거로움이 있었지만 Sass에서는 중첩 기능을 사용하여 자식요소를 쉽게 입력할 수 있다. 또한 중첩되어 있기 때문에 해당 부모 요소의 자식들인 것을 한 눈에 알아 볼 수 있다는 장점이 있다. 

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
