import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId,selectCategory } from '../redux/slices/filterSlice.js'
// import { useSearchParams } from 'react-router-dom';

const Categories = () =>{
	// const [searchParams, setSearchParams] = useSearchParams();
	const dispatch = useDispatch()
	const categoryId = useSelector(selectCategory)

	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
	return (
		<div className="categories">
			<ul>
				{categories.map(
					(value, i) => (
						<li key={i} onClick={() => {
							dispatch(setCategoryId(i));
							// setSearchParams({ category: i })
						}} className={categoryId === i ? 'active' : ''}>
							{value}
						</li>
					)
				)}
			</ul>
		</div >
	)
}

export default Categories