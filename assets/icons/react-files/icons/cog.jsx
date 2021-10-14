import React from 'react';

function Cog(props) {
	const title = props.title || "cog";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32.1 19.7c-6.8 0-12.3 5.5-12.3 12.3 0 6.8 5.5 12.3 12.3 12.3 6.8 0 12.3-5.5 12.3-12.3-.1-6.7-5.6-12.3-12.3-12.3zm0 21.1c-4.8 0-8.8-3.9-8.8-8.8s3.9-8.8 8.8-8.8 8.8 3.9 8.8 8.8c-.1 4.9-4 8.8-8.8 8.8z"/>
		<path d="M61.5 38.9l-6.2-3.4c.2-1.3.3-2.5.3-3.7 0-1.4-.1-2.6-.3-3.8l6.3-3.5c1.1-.6 1.5-1.9 1-3.1l-6-10.1c-.6-1-1.9-1.4-3.1-1L47 13.9c-.4-.3-.8-.7-1.2-1-1.1-1-2.2-1.9-3.7-2.6-.3-.1-.5-.5-.5-.8V5.6c0-2.4-2-4.4-4.4-4.4H26.8c-2.4 0-4.4 2-4.4 4.4v4c0 .3-.2.6-.5.8-1.5.7-2.6 1.6-3.8 2.7-.3.3-.7.6-1.1.9l-5.8-3.3c-1.9-1-3.2-.3-3.8.7l-5.7 9.8c-.3.6-.4 1.3-.2 1.9.2.6.6 1.2 1.2 1.5l6.2 3.5c-.2 1.1-.3 2.3-.3 3.7 0 1.3.1 2.5.2 3.7L2.4 39c-1.1.6-1.5 1.9-1 3.1l5.9 10.1c.6 1 1.9 1.4 3.1 1l6.5-3.6c.4.3.8.6 1.1.9 1.2 1 2.2 1.9 3.8 2.6.3.1.5.5.5.8v4.4c0 2.4 2 4.4 4.4 4.4h10.5c2.4 0 4.4-2 4.4-4.4v-4.6c0-.3.2-.6.5-.8 1.5-.7 2.5-1.6 3.7-2.6.4-.3.7-.6 1.1-1l5.8 3.3c1.9 1 3.2.3 3.7-.6l5.8-9.8c.3-.6.4-1.2.3-1.9 0-.6-.5-1.1-1-1.4zm-7.4 10.5l-5.5-3.1c-1.2-.7-2.7-.5-3.7.3-.5.4-.9.8-1.3 1.1-1.1.9-1.8 1.6-2.9 2.1-1.5.7-2.5 2.3-2.5 3.9v4.6c0 .5-.4.9-.9.9H26.8c-.5 0-.9-.4-.9-.9v-4.4c0-1.7-1-3.2-2.5-3.9-1.1-.5-2-1.2-3-2.1-.4-.3-.8-.7-1.3-1.1-.6-.5-1.4-.8-2.1-.8-.6 0-1.1.1-1.6.4l-5.5 3.1-4.7-8 5.3-3c1.3-.7 1.9-2.1 1.8-3.5-.1-1-.2-2.1-.2-3.2 0-1.2.1-2.2.2-3.1.3-1.5-.4-3-1.7-3.7l-5.3-2.9 4.7-8 5.5 3.1c1.2.7 2.7.5 3.7-.3.4-.4.8-.7 1.2-1 1.1-.9 1.9-1.6 3-2.2 1.5-.7 2.5-2.3 2.5-3.9v-4c0-.5.4-.9.9-.9h10.5c.5 0 .9.4.9.9v3.9c0 1.7 1 3.2 2.5 3.9 1.1.5 1.9 1.2 2.9 2.1.4.4.9.7 1.4 1.1 1 .8 2.5 1 3.7.3l5.5-3.1 4.7 8-5.3 2.9c-1.3.7-2 2.2-1.7 3.7.2.9.2 2 .2 3.1 0 1-.1 2.1-.3 3.2-.3 1.5.5 3 1.8 3.7l5.2 2.8-4.7 8z"/>
	</g>
</svg>
	);
};

export default Cog;