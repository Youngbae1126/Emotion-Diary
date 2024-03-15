import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
	{
		id: 1,
		author: '천재적인 블랙홀',
		content: 'hi',
		emotion: 5,
		created_date: new Date().getTime(),
	},
	{
		id: 2,
		author: '블랙홀',
		content: 'hi1',
		emotion: 5,
		created_date: new Date().getTime(),
	},
	{
		id: 3,
		author: '천재',
		content: 'hi2',
		emotion: 5,
		created_date: new Date().getTime(),
	},
	{
		id: 4,
		author: '천블',
		content: 'hi3',
		emotion: 5,
		created_date: new Date().getTime(),
	},
	{
		id: 5,
		author: '홍길동',
		content: 'hi4',
		emotion: 5,
		created_date: new Date().getTime(),
	},
];

function App() {
	return (
		<div className="App">
			<DiaryEditor />
			<DiaryList diaryList={dummyList} />
		</div>
	);
}

export default App;
