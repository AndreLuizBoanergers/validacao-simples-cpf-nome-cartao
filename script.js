const inputCpf = document.querySelector('#cpf');
inputCpf.addEventListener('keypress', ()=>{
    let inputlength = inputCpf.value.length;
	if(inputlength === 3 || inputlength === 7){
		inputCpf.value += '.';
	}else if (inputlength === 11) {
		inputCpf.value += '-';
	}
});
const inputNome = document.querySelector('#nome');
inputNome.addEventListener('keypress', (event)=>{
	if(!checkChar(event)){
		event.preventDefault();
	}
});
function checkChar(event){
	const char = String.fromCharCode(event.keyCode);
	const padrao = '[a-z-A-Z ]';
	if(char.match(padrao)){
		return true;
	}
}
const card = document.querySelector('#card');
const mes = document.querySelector('#mes');
const ano = document.querySelector('#ano');
const cvv = document.querySelector('#cvv');
card.addEventListener('keypress',(event)=>{
	if(!checkNum(event)){
		event.preventDefault();
	}
	let cardlength = card.value.length;
	if(cardlength === 4 || cardlength === 9 || cardlength === 14){
		card.value += '-';
	}
});
mes.addEventListener('keypress',(event)=>{
	if(!checkNum(event)){
		event.preventDefault();
	}
});
ano.addEventListener('keypress',(event)=>{
	if(!checkNum(event)){
		event.preventDefault();
	}
});
cvv.addEventListener('keypress',(event)=>{
	if(!checkNum(event)){
		event.preventDefault();
	}
});

function checkNum(event){
	const valNum = String.fromCharCode(event.keyCode);
	const Num = '[0-9]';
	if(valNum.match(Num)){
		return true;
	}	
}

