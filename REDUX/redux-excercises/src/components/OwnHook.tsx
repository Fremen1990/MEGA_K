import React, {useState} from 'react';

// CUSTOM HOOK "UseToggle" to toggle view
const useToggle= (initial:boolean):[boolean, ()=>void]=>{
	const [toggled,setToggled] = useState<boolean>(initial)

	const toggle = ()=>{
		setToggled(prev=>!prev)
	}

	return [toggled, toggle]
}

export const OwnHook = ()=>{

	const [toggled,toggle] = useToggle(false)


	return <div>
		<button onClick={toggle}>
			{toggled? "Minimize":"maximize"}
		</button>
		<p style={{
			height: toggled? 'auto':'75px',
			overflow: 'hidden'

		}}>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut blanditiis corporis culpa itaque laboriosam maiores nobis numquam quia unde! Aliquam asperiores consectetur eum harum ipsum labore obcaecati ratione sit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi cumque, earum excepturi impedit minus molestiae odio ut. Atque commodi doloremque dolores dolorum enim fuga, maiores optio quaerat reprehenderit sed.lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, architecto cumque, ea et exercitationem in laborum nam nisi optio quas quia quibusdam, quidem quo similique sint soluta unde vero.
		</p>
	</div>

}
