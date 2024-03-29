import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RouteTest from './components/RouterTest';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

import MyHeader from './MyHeader';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<MyHeader />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new" element={<New />} />
					<Route path="/edit" element={<Edit />} />
					<Route path="/diary/:id" element={<Diary />} />
				</Routes>
				<RouteTest />
			</div>
		</BrowserRouter>
	);
}

export default App;
