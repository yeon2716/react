![image](https://github.com/yeon2716/react/assets/145514579/99f94157-4510-4d0e-8c8d-4ed4ebb8da06)

# Navigate 사용방법 -- 어떤 페이지로 강제 이동(redirect)
# react-router-dom 의 component

![image](https://github.com/yeon2716/react/assets/145514579/eb3fd128-b3c0-49e5-99a6-815d44e92e14)


# useParams  
# react-router-dom 의 hook

```
http://localhost:3004/products/1
```

# url 주소에서 파라미터는 제일뒤에 있는 1이라는 숫자이다 ID값이 들어와 있다.
# 파라미터값을 읽어와야할때 useParams hook이다


![image](https://github.com/yeon2716/react/assets/145514579/e6e53cbd-78a7-4d53-a3b9-97600476b644)

 product?.img == product가 있으면 product.img를 출력하라


# ❎ 쿼리 스트링
```
  쿼리스트링(query string)은 웹 주소(URL)에 추가적인 매개변수를 전달하는 방법 중 하나입니다.
    쿼리스트링은 URL의 끝에 "?" 문자로 시작하며, 이후에 "이름=값" 형태의 매개변수들이 "&" 문자로 구분되어 나열됩니다.
```

navigate(`/?q=${keyword}`)  --> 쿼리스트링(query string) 입력하기
