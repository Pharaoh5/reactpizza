import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentPage: 1,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setcurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		setPage(state, action) {
			state.currentPage = Number(action.payload.currentPage);
		}
	},
})

export const selectPage = (state) => state.counter.currentPage

export const { setcurrentPage, setPage } = counterSlice.actions

export default counterSlice.reducer