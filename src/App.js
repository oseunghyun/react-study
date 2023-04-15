import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// 사용자 정의 태그 -> 컴포넌트 만들기
// function 키워드
// 대문자 사용
function Header(props) {
  console.log('props', props.title);
  return (
    <header>
      <h1>
        <a
          href='/'
          onClick={function (event) {
            event.preventDefault();
            // 클릭해도 리로드 되지 않도록 함
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
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
        <a
          id={t.id}
          href={'/read/' + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
            // event를 유발시킨 타겟을 의미함 -> a태그
          }}
        >
          {t.title}
        </a>
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
  // const _mode = useState('WELCOME'); // 초기값
  // const mode = _mode[0]; // state의 값
  // const setMode = _mode[1]; // state의 값을 바꿀 때

  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

  const topics = [
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'css is...' },
    { id: 3, title: 'js', body: 'js is...' },
  ];

  let content = null;

  if (mode === 'WELCOME') {
    content = <Article title='Welcome' body='hello, WEB'></Article>;
  } else if (mode === 'READ') {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  }

  return (
    <div className='App'>
      <Header
        title='REACT'
        onChangeMode={() => {
          setMode('WELCOME');
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode('READ');
          setId(_id);
        }}
      ></Nav>
      {content}
    </div>
  );
}

export default App;
