import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1><span class="rustOrange" style="color:#DB480B;font-weight:bold;">RUST</span>Mail 1.0</h1>
				<nav>
					
				</nav>
			</header>
		);
	}
}
