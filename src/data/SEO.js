import React from 'react'
import Head from 'next/head';

const SEO = ({
	title = 'Shopperbird - The first on demand Slow Fashion Platform',
	desc = 'We are Shopperbird, the first on demand Slow Fashion Platform based in London.',
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