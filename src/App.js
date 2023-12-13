import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Profile
        img="https://media.istockphoto.com/id/103333011/ko/%EC%82%AC%EC%A7%84/%EB%91%90-gerbera-%EA%B5%AD%ED%99%94%EC%99%80-%EB%92%A4%EC%97%89%ED%82%B4.jpg?s=612x612&w=0&k=20&c=eo7UXhXSDjlGyzBXDzznhFCpYEpcqH1Bf_QYppYMrv8="
        name="오승연"
        title="디자이너"
      />
      <Profile
        img="https://media.istockphoto.com/id/173629264/ko/%EC%82%AC%EC%A7%84/%EB%8D%B0%EC%9D%B4%EC%A7%80-%EB%B6%80%EC%BC%80.jpg?s=612x612&w=0&k=20&c=od4UQoq4zlZtdxT8ediDaPoepa9xzIr20HHOXOONzsU="
        name="김하나"
        title="풀스텍개발자"
        isNew={true}
      />
      <Profile
        img="https://media.istockphoto.com/id/136754725/ko/%EC%82%AC%EC%A7%84/%EB%A0%88%EB%93%9C-gerbera-%EC%9E%88%EB%8A%94-%EA%B5%AC%EB%B6%80%EB%9F%AC%EC%A7%84-%EC%A4%84%EA%B8%B0.jpg?s=612x612&w=0&k=20&c=LFSMGiUsDSRB4-8j44Cwrc-hXozqXtKfNULmi9Gk9RY="
        name="이제니"
        title="백엔드"
      />
    </>
  );
}

export default App;
