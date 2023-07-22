import React from 'react';
import './App.css';

import Header from './components/header';
import About from './components/about';
import Rooms from './components/rooms';
import Services from './components/services';
import Pricing from './components/pricing';
import Comments from './components/comments';
import NearbyArea from './components/nearby';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<About />
				<Rooms />
				<Services />
				<Pricing />

				<div id="testimonial" className="section md-padding">
					<div className="bg-img" style={{ backgroundImage: "url('./img/bienvungtau2.jpg')" }}>
						<div className="overlay"></div>
					</div>
				</div>

				<Comments />
				<NearbyArea />
				<Contact />
				<Footer />

				<div id="back-to-top"></div>
			</>
		);
	}
}

export default App;
