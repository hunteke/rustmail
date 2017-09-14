import { h, Component } from 'preact';
import style from './style.less';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<div class={style.folderSidebar}>
					<div class={style.folderContainer}>
						<ul class={style.folders}>
							<li>Inbox<div class={style.counter}>33</div></li>
							<li>Favorites</li>
							<li>Outbox</li>
							<li>Drafts<div class={style.counter}>2</div></li>
							<li>Trash<div class={style.counter}>17</div></li>
						</ul>
					</div>
				</div>
				<div class={style.listPanel}>
					<ul class={style.emailList}>
						<li>
							<h4>Sender</h4>
							<div class={style.actionList}>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<p>Subject Line</p>
							<p>Body copy goes here with a little snippet of the email to show the user what they might be seeing...</p>
						</li>
						<li>
							<h4>Sender</h4>
							<div class={style.actionList}>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<p>Subject Line</p>
							<p>Body copy goes here with a little snippet of the email to show the user what they might be seeing...</p>
						</li>
						<li>
							<h4>Sender</h4>
							<div class={style.actionList}>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<p>Subject Line</p>
							<p>Body copy goes here with a little snippet of the email to show the user what they might be seeing...</p>
						</li>
						<li>
							<h4>Sender</h4>
							<div class={style.actionList}>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<p>Subject Line</p>
							<p>Body copy goes here with a little snippet of the email to show the user what they might be seeing...</p>
						</li>
						<li>
							<h4>Sender</h4>
							<div class={style.actionList}>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<p>Subject Line</p>
							<p>Body copy goes here with a little snippet of the email to show the user what they might be seeing...</p>
						</li>
						<li>
							<h4>Sender</h4>
							<div class={style.actionList}>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<p>Subject Line</p>
							<p>Body copy goes here with a little snippet of the email to show the user what they might be seeing...</p>
						</li>
						<li>
							<h4>Sender</h4>
							<div class={style.actionList}>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<p>Subject Line</p>
							<p>Body copy goes here with a little snippet of the email to show the user what they might be seeing...</p>
						</li>
						<li>
							<h4>Sender</h4>
							<div class={style.actionList}>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<p>Subject Line</p>
							<p>Body copy goes here with a little snippet of the email to show the user what they might be seeing...</p>
						</li>
						<li>
							<h4>Sender</h4>
							<div class={style.actionList}>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<p>Subject Line</p>
							<p>Body copy goes here with a little snippet of the email to show the user what they might be seeing...</p>
						</li>
						<li>
							<h4>Sender</h4>
							<div class={style.actionList}>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<p>Subject Line</p>
							<p>Body copy goes here with a little snippet of the email to show the user what they might be seeing...</p>
						</li>
						<li>
							<h4>Sender</h4>
							<div class={style.actionList}>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<p>Subject Line</p>
							<p>Body copy goes here with a little snippet of the email to show the user what they might be seeing...</p>
						</li>
						<li>
							<h4>Sender</h4>
							<div class={style.actionList}>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<p>Subject Line</p>
							<p>Body copy goes here with a little snippet of the email to show the user what they might be seeing...</p>
						</li>
						<li>
							<h4>Sender</h4>
							<div class={style.actionList}>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<p>Subject Line</p>
							<p>Body copy goes here with a little snippet of the email to show the user what they might be seeing...</p>
						</li>
						<li>
							<h4>Sender</h4>
							<div class={style.actionList}>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<p>Subject Line</p>
							<p>Body copy goes here with a little snippet of the email to show the user what they might be seeing...</p>
						</li>
						<li>
							<h4>Sender</h4>
							<div class={style.actionList}>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<p>Subject Line</p>
							<p>Body copy goes here with a little snippet of the email to show the user what they might be seeing...</p>
						</li>
					</ul>
				</div>
				<div class={style.readPanel}>
					<div class={style.emailHeader}>
						<h1>This is the subject line of the E-mail</h1>
						<p>From: email@email.com</p>
						<p>CC: email2@email2.com, email3@email3.com</p>
					</div>
					<div class={style.emailContainer}>
						HTML EMAIL / PLAIN TEXT EMAIL GOES HERE
					</div>
				</div>
			</div>
		);
	}
}
