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
            props.onChangeMode(event.target.id);
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
  const topics = [
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'css is...' },
    { id: 3, title: 'js', body: 'js is...' },
  ];
  return (
    <div className='App'>
      <Header
        title='REACT'
        onChangeMode={() => {
          alert('Header');
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>
      <Article title='Welcome' body='hello, WEB'></Article>
    </div>
  );
}

export default App;
