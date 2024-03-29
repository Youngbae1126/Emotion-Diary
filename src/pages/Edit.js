import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {
	const navigate = useNavigate();

	const [searchParams, setSearchParams] = useSearchParams();

	const id = searchParams.get('id');
	// console.log('id : ', id);

	const mode = searchParams.get('mode');
	// console.log('mode: ', mode);
	return (
		<div>
			<h1>Edit</h1>
			<p>이곳은 Edit 페이지 입니다.</p>
			<button
				onClick={() => {
					setSearchParams({ who: 'bbbaaa' });
				}}
			>
				QS 바꾸기
			</button>

			<button
				onClick={() => {
					navigate('/home');
				}}
			>
				Home
			</button>
		</div>
	);
};

export default Edit;
