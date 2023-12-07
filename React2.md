# 🚒 JSX 문법
![image](https://github.com/yeon2716/web111/assets/145514579/8506ae00-4887-4c6f-9173-17be9f8973c0)

https://react.dev/learn#writing-markup-with-jsx (위 내용 주소)

- 컴퍼넌트의 return()에서는 반드시 하나의 태그로 싸여있어야한다
- 태그대신 <> </>   -> Fragment를 사용할 수 있다.
- class명을 className= "class명"
- javaScipt코드를 JSX 문법안에서 사용해야할때는 {javaScript 코드 } 형식으로 사용해야한다.
- {}을 사용하지 않으면 변수가 그냥 문자로 출력된다.
- 인라인스타일로 css를 작성할때 ==> 밖의 {}는 자바스크립트를 사용한다는 의미, 안의 {} 는 객채를 사용한다는 의미
-  <div style={{ width: "300px", height: "200px" }}>추가하기</div>




````

import "./App.css";

function App() {
  const name = "강아지";
  return (
    <>
      <div className="App">
        <P>{`${name}시작하기`}</P>
      </div>
      <div style={{ width: "300px", height: "200px" }}>추가하기</div>
    </>
  );
}

export default App;

````


![image](https://github.com/yeon2716/web111/assets/145514579/de477567-6b5b-4041-90a1-2c3b09e930c0)







````````
import "./App.css";

function App() {
  const name = "강아지";
  const list = ["기침", "감기", "약"];
  return (
    <>
      <h1 className="dog">{name} 안녕같은 소리하고 자빠졌네!!</h1>
      <h1 className="dog">{`${name} 안녕!!`}</h1>
      <ul>
        <li>기침</li>
        <li>감기</li>
        <li>약</li>
      </ul>
      <ul>
        {/* {list.map((item) => {
          return (<li>{item}</li>);
        })} */}
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img style={{width:"450px", height:" 500px"}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvPP3oIAuYd30mub_XhlMzpoNuKQz_xYqPw&usqp=CAU"
        alt="img"
      ></img>
    </>
  );
}

export default App;
```````````
