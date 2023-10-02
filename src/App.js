import React from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Rooms from './components/rooms';
import Services from './components/services';
import NearbyArea from './components/nearby';
import CommonRules from './components/rules';
import Contact from './components/contact';
import Footer from './components/footer';

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
	const [width, setWidth] = React.useState(window.innerWidth);
	const [height, setHeight] = React.useState(window.innerHeight);
	const handleWindowResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	React.useEffect(() => {
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	return (
		<viewportContext.Provider value={{ width, height }}>
			{children}
		</viewportContext.Provider>
	);
};

const useViewport = () => {
	const { width, height } = React.useContext(viewportContext);
	return { width, height };
};

const MobileComponent = () => <p>"Mobile Screen"</p>;
const DesktopComponent = () =>
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
		<CommonRules />
		<NearbyArea />
		<Contact />
		<Footer />
		<div id="back-to-top" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}></div>
	</div>;

const MyComponent = () => {
	const { width } = useViewport();
	const breakpoint = 620;

	return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function App() {
	return (
		<ViewportProvider>
			<MyComponent />
		</ViewportProvider>
	);
}
