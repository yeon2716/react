

![image](https://github.com/yeon2716/react/assets/145514579/20366101-3b76-4a56-956e-a08dc6ba50fb)


```
npm install -g json-server
```



json 서버 실행 -->기본적으로 3000번에서 시작하는데 reac가 3000번을 사용하고 있기때문에 다은 포트번호를 알려줘야한다.
```
json-server --watch db.json --port 3004
```




# 혹시 안되면

```
npx json-server --watch db.json --port 3004
```


![image](https://github.com/yeon2716/react/assets/145514579/8cb1140f-cbbc-44b4-ad5b-d522d6a0c78b)
node 추가해서 json-server --watch db.json --port 3004 입력








# 새창을 열고 주소창에 
```
http://localhost:3004/products
```
json 파일의 내용이 보이게 된다

![image](https://github.com/yeon2716/react/assets/145514579/25ebb0de-7d58-4109-996e-fc8ced56c67c)
