import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../organisms/Footer';
// import AnimationBoxFirst from '../atoms/AnimationBox/AnimationBoxFirst';
// import AnimationBoxSecond from '../atoms/AnimationBox/AnimationBoxSecond';
import SEO from '../data/SEO';
import Home from '../pages/home';


const Main = () => {
	return (
		<div>
			<SEO title='Joy Agustian | My Inner Thought' />
			<Header />
			<Home />
			<Footer />
		</div>
	);
};

export default Main;