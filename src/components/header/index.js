import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<nav>
					<div class={style.accountManager}>
						<div class={style.currentAccount}>
							<span>youremail@gmail.com</span><i class="fa fa-angle-down" aria-hidden="true"></i>

						</div>
					</div>
					<div class={style.listActionMenu}>
						<span class={style.listTool}>
							<i class="fa fa-square-o" aria-hidden="true"></i><span class={style.smallText}>SELECT ALL</span>
						</span>
						<span class={style.listTool}>
							<i class="fa fa-filter" aria-hidden="true"></i><span class={style.smallText}>FILTER</span><span class={style.filterArrow}><i class="fa fa-angle-down" aria-hidden="true"></i></span>
						</span>
						<span class={style.listTool}>
							<i class="fa fa-archive" aria-hidden="true"></i><span class={style.smallText}>ARCHIVE</span>
						</span>
						<span class={style.listTool}>
							<i class="fa fa-trash" aria-hidden="true"></i><span class={style.smallText}>DELETE</span>
						</span>
						<span class={style.listTool}>
							<i class="fa fa-flag" aria-hidden="true"></i><span class={style.smallText}>FLAG</span>
						</span>
						<span class={style.listTool}>
							<i class="fa fa-arrows" aria-hidden="true"></i><span class={style.smallText}>MOVE TO</span><span class={style.moveArrow}><i class="fa fa-angle-down" aria-hidden="true"></i></span>
						</span>
					</div>
					<div class={style.emailActionMenu}>
						<span class={style.emailTool}>
							<i class="fa fa-envelope" aria-hidden="true"></i><span class={style.smallText}>CREATE NEW</span>
						</span>
						<span class={style.emailTool}>
							<i class="fa fa-reply" aria-hidden="true"></i><span class={style.smallText}>REPLY</span>
						</span>
						<span class={style.emailTool}>
							<i class="fa fa-reply-all" aria-hidden="true"></i><span class={style.smallText}>REPLY ALL</span>
						</span>
						<span class={style.emailTool}>
							<i class="fa fa-share" aria-hidden="true"></i><span class={style.smallText}>FORWARD</span>
						</span>
						<span class={style.emailTool}></span>

						<h1><span class="rustOrange" style="color:#DB480B;font-weight:bold;">RUST</span>Mail 1.0</h1>
					</div>
				</nav>
			</header>
		);
	}
}
