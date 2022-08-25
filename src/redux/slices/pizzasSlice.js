import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPizzas = createAsyncThunk(
	'pizza/fetchPizzasStatus',
	async (params, { dispatch, rejectWithValue }) => {
		const { category,
			sortBy,
			order,
			search,
			limit, } = params;
		const { data } = await axios.get(`https://62e7c0c093938a545bd8578b.mockapi.io/items?${limit}${category}&sortBy=${sortBy}&order=${order}${search}`);
		if (data.lenght === 0) {
			return rejectWithValue('Нету пицц')
		}
		return dispatch(setItems(data));
	}
)

const initialState = {
	items: [],
	status: 'loading'
};

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
	},
	extraReducers: {
		[fetchPizzas.fulfilled]: (state, action) => {
			// console.log(state, 'Выполнилось')
			state.status = 'success';
			// или state.items = action.payload;
			// вместо dispatch в async ({dispatch})
		},
		[fetchPizzas.pending]: (state, action) => {
			// console.log('Идет отправка')
			state.status = 'loading';
			// или state.items = [];
			// вместо dispatch в async ({dispatch})
		},
		[fetchPizzas.rejected]: (state, action) => {
			// console.log('Была ошибка')
			state.status = 'error';
			// или state.items = [];
			// вместо dispatch в async ({dispatch})
		},
	},

});

export const selectFilter = (state) => state.counter.currentPage
export const selectPizza = (state) => state.pizza

export const { setItems, } = pizzaSlice.actions;

export default pizzaSlice.reducer;