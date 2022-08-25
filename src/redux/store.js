import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice.js'
import counter from './slices/PageSlice.js'
import cart from './slices/cartSlice.js'
import pizza from './slices/pizzasSlice.js'
import search from './slices/searchSlice.js'


export const store = configureStore({
	reducer: {
		filter,
		counter,
		cart,
		pizza,
		search,
	},
})