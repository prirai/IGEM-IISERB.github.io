import React from 'react';

function Harddrive(props) {
	const title = props.title || "harddrive";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.5 1.3h-31c-4 0-7.3 3.3-7.3 7.3v46.8c0 4 3.3 7.3 7.3 7.3h31.1c4 0 7.3-3.3 7.3-7.3V8.6c0-4.1-3.3-7.3-7.4-7.3zm3.9 54.1c0 2.1-1.7 3.8-3.8 3.8H16.5c-2.1 0-3.8-1.7-3.8-3.8V8.6c0-2.1 1.7-3.8 3.8-3.8h31.1c2.1 0 3.8 1.7 3.8 3.8v46.8z"/>
		<path d="M32.1 20.5c-6.4 0-11.5 5.2-11.5 11.5 0 2.5.8 4.9 2.3 6.9-2.2 1.4-4.2 3-5 4.3-1 1.7-1.3 3.7-.8 5.6.5 1.9 1.7 3.5 3.4 4.5 1.1.7 2.4 1 3.7 1 .6 0 1.3-.1 1.9-.2 1.9-.5 3.5-1.7 4.5-3.4.8-1.4 1.2-4.3 1.3-7h.2c6.4 0 11.5-5.2 11.5-11.5s-5.2-11.7-11.5-11.7zm-4.6 28.3c-.5.9-1.3 1.5-2.3 1.8-1 .3-2 .1-2.9-.4-.9-.5-1.5-1.3-1.8-2.3-.3-1-.1-2 .4-2.9.7-1.2 4.3-3.5 7.6-5.4 0 4-.4 8.1-1 9.2zm4.6-8.8H32c0-1.6 0-2.9-.1-3.4 0-.6-.4-1.1-.9-1.4-.5-.3-1.2-.3-1.7 0-.6.3-1.9 1-3.5 1.9-1.1-1.4-1.8-3.2-1.8-5 0-4.4 3.6-8 8-8s8 3.6 8 8-3.5 7.9-7.9 7.9z"/>
		<path d="M44 48.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7z"/>
	</g>
</svg>
	);
};

export default Harddrive;