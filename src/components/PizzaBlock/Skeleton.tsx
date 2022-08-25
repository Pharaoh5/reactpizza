import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton:React.FC<{}> = (props) => (
	<ContentLoader
		className="pizza-block"
		speed={2}
		width={280}
		height={500}
		viewBox="0 0 280 500"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="0" y="268" rx="10" ry="10" width="280" height="22" />
		<rect x="0" y="309" rx="10" ry="10" width="280" height="84" />
		<rect x="0" y="416" rx="10" ry="10" width="95" height="30" />
		<rect x="127" y="415" rx="25" ry="25" width="152" height="40" />
		<circle cx="134" cy="122" r="124" />
	</ContentLoader>
)

export default Skeleton

