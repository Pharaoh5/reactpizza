import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux'
import { selectPage, setcurrentPage } from '../../redux/slices/PageSlice.js'

export default function PaginationSize() {
	const dispatch = useDispatch()
	const currentPage = useSelector(selectPage)

	return (
		<Stack spacing={2}>
			<Pagination count={3} shape="rounded" onChange={(_, num) => dispatch(setcurrentPage(num))} page={currentPage} />
		</Stack>
	);
}