let toogle;

// const onClickButton = () => {
// 	if (toogle) {
// 		toogle = false;
// 	} else {
// 		toogle = true;
// 	}
// 	renderVisibityToggle();
// };

const onClickButton = () => {
	toogle = !toogle;
	renderVisibityToggle();
};

const appRoot = document.getElementById('app');

// Meu codigo original abaixo
// {
// 	toogle ? 
// 	<button onClick={onClickButton}>Hide Details</button> 
// 	: <button onClick={onClickButton}>Show Details</button>
// }

const renderVisibityToggle = () => {
	const template = (
		<div>
			<h1>Visibility Toogle</h1>
			<button onClick={onClickButton}>
				{toogle ? Hide Details : Show Details}
			</button> 
			
			{toogle && <p>Hey. These are some details in can now see</p>}
		</div>
	);

	ReactDOM.render(template, appRoot);

};

renderVisibityToggle();