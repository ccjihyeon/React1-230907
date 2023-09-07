import logo from './logo.svg';
import './App.css';


const 제목임 = <h1>이건 제목이야</h1>;

let 컨텐츠임 = <p></p>;
for(let i = 0 ; i < 10 ; i ++){
  컨텐츠임 += <p>{i}번 컨텐츠임</p>
}
//  리액트에서 for문으로 컨텐츠 만그는건 권장X
// 닫는 태그가 무조건 있어야함 안에 내용이 들어가지 않는 태그일 경우 /태그 넣어주기
// 부모는 같은 태그를 사용할수 없음 but 자식은 같은태그를 여러번 사용할 수 있음


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {제목임}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {컨텐츠임}
      </header>
    </div>
  );
}

export default App;
