import React from 'react'
import Head from 'next/head';

const SEO = ({
	title = 'Joy Agustian - My Inner Thought',
	desc = 'Blank for now',
}) => {
	return (
		<Head>
			<title>{title}</title>
			<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
			<meta name='description' content={desc} />
			<meta name='viewport' content='width=device-width, initial-scale=1'></meta>
		</Head>
	)
}

export default SEO;