import './App.css';
import {UsersList} from "./components/UsersList/UsersList";
import {people} from "./data/people";
import {ColorBox} from "./components/ColorBox/ColorBox";
import {Dialog} from "./components/Dialog/Dialog";
import {ConfirmDialog} from "./components/Dialog/ConfirmDialog";
import {Button} from "./components/Button/Button";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/*<UsersList users={people}/>*/}
				{/*  <ColorBox/>*/}

				<div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cum, dolores eius facere iure
						nesciunt omnis quibusdam similique unde voluptas. Aliquam minus numquam porro quae quidem? At
						esse laborum magni.</p>


					{/*<Dialog title="Hi!!" children="Hi! Is that dialog component pass correctly the props? 😊"/>*/}

					{/*<Dialog children="Next re-usable dialog !! "/>*/}

					{/*<Dialog title="this is the Titile">*/}

					{/*	<h1>Some JSX</h1>*/}
					{/*	<h2>pasted into <strong>body</strong></h2>*/}
					{/*	<h3>JUST THROUGH PROPS!!</h3>*/}
					{/*</Dialog>*/}


					{/*<Dialog>*/}
					{/*	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam itaque saepe sint. Aliquam*/}
					{/*		culpa cum dolores earum eveniet ex hic, id labore perspiciatis placeat possimus qui quisquam*/}
					{/*		sit ullam voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo magnam*/}
					{/*		maxime modi molestiae, placeat saepe tempora temporibus voluptatem voluptatibus. Amet libero*/}
					{/*		pariatur quod sapiente soluta ullam veritatis! At, officiis quaerat!</p>*/}

					{/*</Dialog>*/}


					{/*<ConfirmDialog title="Do you...?">*/}
					{/*	Are you sure man?*/}
					{/*</ConfirmDialog>*/}

					<Button title="Click the button!" size="25"/>

					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error exercitationem neque nihil
						placeat possimus tempore totam. Alias deserunt dolor, eligendi incidunt iste nemo, omnis quaerat
						quasi reiciendis, suscipit unde voluptatum!</p>
				</div>
			</header>
		</div>
	);
}

export default App;


//TODO  23min Etap 6 React - Tydzień 4 - dzień 5 (19)

