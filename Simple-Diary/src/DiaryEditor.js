import { useState } from 'react';

const DiaryEditor = () => {
	const [state, setState] = useState({
		author: '',
		content: '',
		emotion: 1,
	});

	const handleChangeState = (e) => {
		// console.log(e.target.name);
		// console.log(e.target.value);

		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = () => {
		console.log(state);
		alert('저장 성공!');
	};

	// const [author, setAuthor] = useState('');
	// const [contents, setContents] = useState('');

	return (
		<div className="DiaryEditor">
			<h2>오늘의 일기</h2>
			<div>
				<input
					name="author"
					value={state.author}
					onChange={handleChangeState}
				/>
				{/* <input
					value={state.author}
					onChange={(e) => {
						setState({
							...state, // content: state.content 대신, 얘가 위로 오도록 순서 주의
							// 원래 있던 state를 먼저 펼쳐주고 변경되는 값을 작성해야 됨.
							author: e.target.value,
						});
					}}
				/> */}
			</div>
			<div>
				<textarea
					name="content"
					value={state.author}
					onChange={handleChangeState}
				></textarea>
				{/* <textarea
					value={state.content}
					onChange={(e) => {
						setState({
							author: state.author,
							content: e.target.value,
						});
					}}
				></textarea> */}
			</div>
			<div>
				<select
					name="emotion"
					value={state.emotion}
					onChange={handleChangeState}
				>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
				</select>
			</div>
			<div>
				<button onClick={handleSubmit}>일기 저장하기</button>
			</div>
		</div>
	);
};

export default DiaryEditor;
