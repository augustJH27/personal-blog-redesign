import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../organisms/Footer';
import AnimationBoxFirst from '../atoms/AnimationBox/AnimationBoxFirst';
import AnimationBoxSecond from '../atoms/AnimationBox/AnimationBoxSecond';
import SEO from '../data/SEO';


const Home = () => {
	return (
		<div>
			<SEO title='Joy Agustian | My Inner Thought' />
			<Header />
			<AnimationBoxFirst />
			<AnimationBoxSecond />
			<Footer />
		</div>
	);
};

export default Home;