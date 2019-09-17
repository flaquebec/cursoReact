import React from 'react';
import ReactDOM from 'react-dom';
import Dados from './componentReact';

class MeuReactApp extends React.Component{

	render(){
		const nomePessoa = "Pedro"
		const sobrenome = "Silva"
		return(
				<div>
					<h1>Bom dia!</h1>
					<Dados nome="Flavia" />
					<Dados nome="Ana" />
					<Dados nome={nomePessoa+" "+sobrenome} />
			
				</div>
			);
	}
} 


ReactDOM.render(<MeuReactApp/>, document.getElementById('root'));


/*

*/
