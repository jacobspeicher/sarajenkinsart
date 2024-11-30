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
				<a href="/shop" class={url == '/shop' && 'active'}>
					Shop
				</a>
			</nav>
		</header>
	);
}
