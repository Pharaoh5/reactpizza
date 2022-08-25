import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories';
import Sort, { list } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PaginationSize from '../components/Pagination'
import { fetchPizzas, selectFilter, selectPizza } from '../redux/slices/pizzasSlice';
import { selectPage } from '../redux/slices/PageSlice';
import { selectSearch } from '../redux/slices/searchSlice';
// import { setFilter } from '../redux/slices/filterSlice.js';
// import { setPage } from '../redux/slices/PageSlice.js';

export const Home:React.FC = () => {
	const dispatch = useDispatch();
	const { categoryId, sort } = useSelector(selectFilter);
	const currentPage = useSelector(selectPage);
	const { items, status } = useSelector(selectPizza);
	const { searchValue } = useSelector(selectSearch);

	// React.useEffect(() => { 		// Парсим из Url в обьект
	// 	if (window.location.search) {// это вместо useSearchParams
	// 		const params = qs.parse(window.location.search.substring(1));
	// 		const sorttwo = list.find(obj => obj.sort === params.sort)
	// 		dispatch(
	// 			setFilter({
	// 				...params,
	// 				sorttwo,
	// 			})
	// 		)
	// 		dispatch(
	// 			setPage({
	// 				...params
	// 			})
	// 		)
	// 	}
	// }, [])

	const getPizzas = async () => {
		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const sortBy = sort.sort.replace('-', '');
		const order = sort.sort.includes('-') ? 'asc' : 'desc'; // если надо сделать по возрастанию сортировку , то добавляем в массив параметр , с -sort
		const search = searchValue ? `&search=${searchValue}` : ''; // поиск через Бэкэнд
		const limit = `page=${currentPage}&limit=4&`

		const sp = {// fetch(`https://62e7c0c093938a545bd8578b.mockapi.io/items?
			// ${limit}${category}&sortBy=${sortBy}&order=${order}${search}`,
			// )

			// 	.then((res => {
			// 		return res.json();
			// 	}))
			// 	.then((arr) => {
			// 		setpizzas(arr);
			// 		setisLoading(false);
			// 	});

			// axios.get(`https://62e7c0c093938a545bd8578b.mockapi.io/items?${limit}${category}&sortBy=${sortBy}&order=${order}${search}`)
			// 	.then((res) => {
			// 		setpizzas(res.data);
			// 		setisLoading(false);
			// 	})
			// .catch((err) => {
			// 	setisLoading(false);
			// });
		}

		try {
			window.scrollTo(0, 0);
			dispatch(fetchPizzas({
				category,
				sortBy,
				order,
				search,
				limit,
			}));
		} catch (error) {
			console.log("Error", error);
			alert('Ошибка при получении пицц')
		}
	};

	React.useEffect(() => { // Запрос на бэкэнд
		getPizzas()
	}, [categoryId, sort.sort, searchValue, currentPage]);

	// React.useEffect(() => { // Передайем в строку Url параметры
	// 	const queryString = qs.stringify({
	// 		sort: sort.sort,
	// 		categoryId,
	// 		currentPage,
	// 	});
	// 	navigate(`?${queryString}`)
	// }, [categoryId, sort.sort, currentPage])

	const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);
	const pizzaItem = items
		// .filter((obj) => {																							Для статичного сайта
		// 	if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
		// 		return true;
		// 	}
		// 	return false
		// })
		.map((obj:any) => (<PizzaBlock key={obj.id} {...obj} />));

	return (
		<>
			<div className="container">
				<div className="content__top">
					<Categories />
					<Sort />
				</div>
				<h2 className="content__title">Все пиццы</h2>
				<div className="content__items">
					{status === 'error' ? <div>Ошибка</div> :
						status === 'loading'
							? skeletons
							: pizzaItem}
				</div>
				<PaginationSize />
			</div>
		</>
	)
}

export default Home;