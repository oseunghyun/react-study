import logo from './logo.svg';
import './App.css';

// 사용자 정의 태그 -> 컴포넌트 만들기
// function 키워드
// 대문자 사용
function Header(props) {
  console.log('props', props.title);
  return (
    <header>
      <h1>
        <a href='/'>{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a href={'/read/' + t.id}>{t.title}</a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'css is...' },
    { id: 3, title: 'js', body: 'js is...' },
  ];
  return (
    <div className='App'>
      <Header title='REACT'></Header>
      <Nav topics={topics}></Nav>
      <Article title='Welcome' body='hello, WEB'></Article>
    </div>
  );
}

export default App;
