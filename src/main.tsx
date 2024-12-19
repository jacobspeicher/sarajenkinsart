import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/header/header';
import { Home } from './pages/Home/index.js';
import { About } from './pages/About/index.js';
import { NotFound } from './pages/_404.js';
import './main.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
