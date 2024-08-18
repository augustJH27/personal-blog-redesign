import CountDownTimer from '../molecules/CountDownTimer';
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../organisms/Footer';
import SEO from '../data/SEO';


const ComingSoon = () => {
  return (
    <div className="app-container">
			<SEO 
			title='Joy Agustian | Coming Soon'
			desc='Our App will be available by the end of the year. Please subscribe yourself and stay tune.' />
			<Header />
      <div className="container">
        <main>
          <h2>This page is being developed</h2>
          <CountDownTimer />
        </main>
      </div>
			<Footer />
    </div>
  );
};

export default ComingSoon;