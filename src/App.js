import { useReducer } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

// COMPONENTS

const reducer = (state, action) => {
	let newState = [];
	switch (action.type) {
		case 'INIT': {
			return action.data;
		}
		case 'CREATE': {
			const newItem = {
				...action.data,
			};
			newState = [newItem, ...state];
			break;
		}
		case 'REMOVE': {
			newState = state.filter((it) => it.id !== action.targetId);
			break;
		}
		case 'EDIT': {
			newState = state.map((it) =>
				it.id === action.data.id ? { ...action.data } : it,
			);
			break;
		}
		default:
			return state;
	}
	return newState;
};

function App() {
	// const env = process.env;
	// env.PUBLIC_URL = env.PUBLIC_URL || '';

	const [data, dispatch] = useReducer(reducer, []);

	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new" element={<New />} />
					<Route path="/edit" element={<Edit />} />
					<Route path="/diary/:id" element={<Diary />} />
				</Routes>
				{/* <MyHeader
					headText={'App'}
					leftChild={
						<MyButton
							text={'왼쪽 버튼'}
							onClick={() => {
								alert('왼쪽 클릭');
							}}
						/>
					}
					rightChild={
						<MyButton
							text={'오른쪽 버튼'}
							onClick={() => {
								alert('오른쪽 클릭');
							}}
						/>
					}
				/> */}

				{/* <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} /> */}

				{/* <h2>App.js</h2>
				<MyButton
					text={'버튼'}
					onClick={() => alert('버튼 클릭')}
					type={'positive'}
				/>
				<MyButton
					text={'버튼'}
					onClick={() => alert('버튼 클릭')}
					type={'negative'}
				/>
				<MyButton text={'버튼'} onClick={() => alert('버튼 클릭')} /> */}
			</div>
		</BrowserRouter>
	);
}

export default App;
