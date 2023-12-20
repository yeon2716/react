# useEffect

# useEffect (()=>{},[])

# useEffect (()=>{},[]) --> 배열이 비어있을 경우에는 component가 실행될때 처음 한번만 실행된다.
![image](https://github.com/yeon2716/react/assets/145514579/1e412b17-ab9b-40c4-80fe-ad2f6261825e)

# useEffect (()=>{},[products]) --> component가 실행될때 처음 한번 실행된 후 products의 값이 바뀔때 마다 useEffect가 실행됨 (component가 실행될 때 처음 한번 실행됨.)
![image](https://github.com/yeon2716/react/assets/145514579/2e85367c-9f7b-489a-a654-f329afb5b638)


# useEffect (()=>{},[products, count]) --> component가 실행될때 처음 한번 실행된 후 products와 count중 하나라도 값이 바뀌면 useEffect가 실행됨 (2개 다 바뀌어도 한번만 실행됨)


