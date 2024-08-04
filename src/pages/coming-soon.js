// import React from 'react'
// import styled from 'styled-components';

// const DarkContainer = styled.div`
// 	width: 100vw;
// 	height: 100%;
// 	padding: 72px 48px;
// 	background-color: #000;
// `;

// export default function ComingSoon() {
// 	return (
// 		<DarkContainer />
// 	)
// }

import CountDownTimer from '../molecules/CountDownTimer';
import React from 'react';
import Header from '../organisms/Header';
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
          <h2>We're launching soon</h2>
          <CountDownTimer />
        </main>
      </div>
			<Footer />
    </div>
  );
};

export default ComingSoon;