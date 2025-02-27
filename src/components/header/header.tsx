import { useLocation } from 'preact-iso';
import "./header.css";

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<h1>SARA JENKINS</h1>
			<nav>
				<a href="/" className={'navLink ' + (url == '/' ? 'active' : '')}>
					Home
				</a>
				<a href="/about" className={'navLink ' + (url == '/about' ? 'active' : '')}>
					About 
				</a>
				{/* dropdown : statement / bio / cv */}
				<a href="/work" className={'navLink ' + (url == '/work' ? 'active' : '')}>
					Work
				</a>
				{
					() => (
						<a href="/shop" className={'navLink ' + (url == '/shop' ? 'active' : '')}>
							Shop
						</a>
					)
				}
			</nav>
		</header>
	);
}
