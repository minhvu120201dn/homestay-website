import React from 'react';
import './App.css';

import Header from './components/header';
import About from './components/about';
import Rooms from './components/rooms';
import Services from './components/services';
// import Comments from './components/comments';
import NearbyArea from './components/nearby';
import CommonRules from './components/rules';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
	return (
		<div id="App">
			<Header />
			<About />
			<Rooms />
			<Services />

			<div id="testimonial" className="section md-padding">
				<div className="bg-img" style={{ backgroundImage: "url('./img/bienvungtau2.jpg')" }}>
					<div className="overlay"></div>
				</div>
			</div>

			{/* <Comments /> */}
			<CommonRules />
			<NearbyArea />
			<Contact />
			<Footer />

			<div id="back-to-top" onClick={() => window.scrollTo({top:0,left:0,behavior:'smooth'})}></div>
		</div>
	);
}

export default App;
