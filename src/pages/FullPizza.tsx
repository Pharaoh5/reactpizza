import axios from 'axios'
import React from 'react'
import Skeleton from '../components/PizzaBlock/Skeleton';

import { useParams, useNavigate } from 'react-router-dom'

const FullPizza: React.FC = () => {
	const navigate = useNavigate()
	const [pizza, setPizza] = React.useState<{
		imageUrl: string,
		title: string,
		price: number,
		types: [],
		sizes: [],
	}>()
	const { id } = useParams();
	const tipeNames = ['тонкое', 'традиционное'];

	React.useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get(`https://62e7c0c093938a545bd8578b.mockapi.io/items/` + id);
				setPizza(data)
			} catch (error) {
				alert('Ошибка при получении пиццы')
				navigate('/')
			}
		}
		fetchPizza()
	}, [])

	if (!pizza) {
		return (
			<div className='container'>
				<div className='pizza-block'><Skeleton/></div>
			</div>
		)
	}

	return (
		<div className='container'>
			<div className='pizza-block'>
				<img src={pizza.imageUrl} alt="ImageURL" className="pizza-block__image" />
				<h2>{pizza.title}</h2>
				<div className='pizza-block__selector'>
					<ul>
						{
							pizza.types.map((tipe, i) => <li key={tipe} >{tipeNames[tipe]}</li>)
						}
					</ul>
					<ul>
						{
							pizza.sizes.map((size, i) => <li key={size} >{size} см.</li>)
						}
					</ul>
				</div>
				<h4 className="pizza-block__price">от {pizza.price} ₽</h4>
			</div>
		</div>
	)
}

export default FullPizza