#react에서는 이 data를 변할 수 있는 값이며 값이 변할 때 마다 UI를 변경해 달라고(화면을 다시 다려달라) 알려야 한다. 그럴 때 사용하는 것이 useState()이다

```
const [num, setNum]=useState(0)
이 데이터를 변하게 하는 값 ==> num
num을 변하게 하는 함수 ==> setNum  --> 함수를 이용하여 num을 변경한다
useState(0)의 0은 num의 초기값

```

# 부분적으로 값 받기

![image](https://github.com/yeon2716/react/assets/145514579/04d12aa6-2806-4715-9135-4990eff0cc34)
![image](https://github.com/yeon2716/react/assets/145514579/39d979ee-ba42-424b-8bcd-47b36243e94a)


  || --> 또는 A || B  둥중 하나라도 true 면 true   
  || 하나가 트루이면 검사하지 않음  고로 통과하지 못함
  
  && --> 그리고 A && B 둘중 하나라도 false 이면 false
  하나라도 false이면 통과하기 때문에 화면에 뿌려짐





#구조분해
![image](https://github.com/yeon2716/react/assets/145514579/8db2278b-a868-4d44-8d1d-bc773733d1ac)
--->결과 똑같음

```
//rafce

import React from "react";

const Profile = (img, name, title, isNew) => {
  // console.log(props);
  //const img = props.img;
  // const name = props.name;
  // const title = props.title;

  // const {img,name,title}=props;
  return (
    <div className="profile">
      <img src={img} alt="avatar" />
      {/*  {props.isNew?<span className="new">신입</span>:""} */}
      {isNew && <span className="new">신입</span>}
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
};

export default Profile;

```
