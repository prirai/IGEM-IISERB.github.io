import React from 'react';

function CandyCane(props) {
	const title = props.title || "candy cane";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.8 14.8c-7.6-7.4-19.7-7.7-27-.6L3.2 40.1c-1.3 1.3-2 2.9-2 4.8S2 48.6 3.4 50c2.8 2.7 7.3 2.8 10 .2l26.2-25.6c1.8-1.8 4.9-1.9 6.9-.2 1.1 1 1.8 2.3 1.8 3.7 0 1.2-.4 2.4-1.3 3.3L35.1 43c-1.3 1.3-2 2.9-2 4.8s.8 3.7 2.2 5.1c1.4 1.4 3.3 2.1 5.2 2.1 1.8 0 3.5-.6 4.8-1.9l12.2-11.9c3.5-3.5 5.4-8.1 5.3-13.1-.2-5-2.3-9.7-6-13.3zM11 47.7c-1.4 1.3-3.6 1.2-5.1-.2-.7-.7-1.1-1.6-1.1-2.6 0-.9.3-1.7.9-2.3l6.8-6.7 7.1 3.3-8.6 8.5zm11.3-11.1l-7.1-3.3 7.1-6.9 7.1 3.3-7.1 6.9zm20.5 13.9c-1.4 1.3-3.6 1.2-5.1-.2-.7-.7-1.1-1.6-1.1-2.6 0-.9.3-1.7.9-2.3l3.1-3 7.1 3.3-4.9 4.8zM55 38.7l-4.5 4.4-7.1-3.3 6.1-6c1.6-1.5 2.4-3.6 2.4-5.8-.1-2.4-1.2-4.7-3-6.3-3.4-2.9-8.4-2.7-11.6.3l-5.1 5-7.2-3.2 7.3-7.1c5.9-5.8 15.8-5.5 22.1.6 3 3 4.8 6.8 4.9 10.9.1 4-1.5 7.7-4.3 10.5z"/>
	</g>
</svg>
	);
};

export default CandyCane;