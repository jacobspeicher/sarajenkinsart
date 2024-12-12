import { useLocation } from 'preact-iso';
import "./header.css";

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<h1>Sara Jenkins</h1>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/about" class={url == '/about' && 'active'}>
					About 
				</a>
				{/* dropdown : statement / bio / cv */}
				<a href="/work" class={url == '/work' && 'active'}>
					Work	
				</a>
				<a href="/shop" class={url == '/shop' && 'active'}>
					Shop
				</a>
			</nav>
		</header>
	);
}
