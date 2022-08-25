import React from 'react'

const  NotFound:React.FC = () =>{
	return (
		<>
			<div className="container notfound-container">
				<h2>
					<span>:(</span>
					<br />
					Ничего не найдено
				</h2>
				<p>
					К сожалению данная страница отсутствует
				</p>
			</div>
		</>
	)
}

export default NotFound