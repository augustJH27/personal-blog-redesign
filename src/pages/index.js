// import Head from "next/head";
import React from 'react';
import Header from '../components/layout/Header';
// import Header from '../organisms/Header';
import Hero from '../organisms/Hero';
import About from '../organisms/About';
import Footer from '../organisms/Footer';
import AnimationBoxRight from '../atoms/AnimationBox/AnimationBoxRight';
import AnimationBoxFirst from '../atoms/AnimationBox/AnimationBoxFirst';
import AnimationBoxSecond from '../atoms/AnimationBox/AnimationBoxSecond';
import EmptyBox from '../molecules/EmptyBox';
import FirstSection from "../organisms/FirstSection";
import SecondSection from "../organisms/SecondSection";
import ThirdSection from "../organisms/ThirdSection";
import SEO from '../data/SEO';

const Home = () => {
	return (
		<div>
			<SEO title='Joy Agustian | My Inner Thought' />
			{/* <Head>
        <title>Shopperbird</title>
        <meta name="description" content="Slow Fashion App" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
			<Header />
			<Hero />
			<About />
			<AnimationBoxRight />
			<FirstSection />
			<AnimationBoxFirst />
			<SecondSection />
			<AnimationBoxSecond />
			<ThirdSection />
			<EmptyBox />
			<Footer />
		</div>
	);
};

export default Home;