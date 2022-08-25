import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalPrice: 0,
	items: [],
};

const updateTotalPrice = (state) => {
	state.totalPrice = state.items.reduce((sum, obj) => {
		return sum - obj.price * obj.count;
	}, 0);
	state.totalPrice = state.items.reduce((sum, obj) => {
		return sum + obj.price * obj.count;
	}, 0);
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		// addItem(state, action) {
		// 	state.items.push(action.payload);
		// 	state.totalPrice = state.items.reduce((sum, obj) => {
		// 		return sum + obj.price;
		// 	}, 0);
		// },
		addItem(state, action) {
			const findItem = state.items.find((obj) => obj.id === action.payload.id)
			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				})
			}

			state.totalPrice = state.items.reduce((sum, obj) => {
				return sum + obj.price * obj.count;
			}, 0);
		},
		romoveItem(state, action) {
			state.items = state.items.filter(obj => obj.id !== action.payload);
			updateTotalPrice(state)
		},
		clearItem(state) {
			state.items = [];
			state.totalPrice = 0;
		},
		minusItem(state, action) {
			const findItem = state.items.find((obj) => obj.id === action.payload.id)
			if (findItem) {
				findItem.count--;
			}
			updateTotalPrice(state)
		}
	}
});

export const selectCart = state => state.cart
export const selectPizzaBlock = id => state => state.cart.items.find(obj => obj.id === id)

export const { addItem, romoveItem, clearItem, minusItem, } = cartSlice.actions;

export default cartSlice.reducer;