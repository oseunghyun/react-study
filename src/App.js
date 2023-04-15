import logo from './logo.svg';
import './App.css';

// 사용자 정의 태그 -> 컴포넌트 만들기
// function 키워드
// 대문자 사용
function Header() {
  return (
    <header>
      <h1>
        <a href='/'>WEB</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href='/read/1'>html</a>
        </li>
        <li>
          <a href='/read/2'>css</a>
          <li>
            <a href='/read/3'>js</a>
          </li>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>welcome</h2>
      Hello, WEB
    </article>
  );
}

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
