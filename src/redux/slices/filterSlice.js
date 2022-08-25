import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	categoryId: 0,
	sort: {
		name: 'популярности',
		sort: 'rating'
	}
};

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
		setSort(state, action) {
			state.sort = action.payload;
		},
		setFilter(state, action) {
			state.categoryId = action.payload.categoryId;
			state.sort = action.payload.categoryId;
		}
	}
});

export const selectCategory = state => state.filter.categoryId;
export const selectSort = state => state.filter.sort;

export const { setCategoryId, setSort, setFilter, } = filterSlice.actions;

export default filterSlice.reducer;