window.onload = function(){

const nomeTxt = document.getElementById('nomeTxt');
const emailTxt = document.getElementById('emailTxt');
const whatsappTxt = document.getElementById('whatsappTxt');
const assuntoTxt = document.getElementById('assuntoTxt');
const descTxt = document.getElementById('descTxt');
const botao = document.getElementById('btn');
botao.onclick = function(e) {
  e.preventDefault();
  const conteudoNome = nomeTxt.value;
  const conteudoEmail = emailTxt.value;
  const conteudoWhatsapp = whatsappTxt.value;
  const conteudoAssunto = assuntoTxt.value;
  const conteudoDesc = descTxt.value;
  alert(`nome: ${conteudoNome} email: ${conteudoEmail} whatsapp: ${conteudoWhatsapp} assunto: ${conteudoAssunto} descrição: ${conteudoDesc}`);
}
nomeTxt.onblur = validaNome;
emailTxt.onblur = validaEmail;
whatsappTxt.onblur = validaZap;
}
function validaNome(e){
  (e).preventDefault();
    const conteudoNome = nomeTxt.value.trim();
    const nomeCompleto = conteudoNome.split(' ');
    const ajudaNome = document.getElementById('ajudaNome');
    if(conteudoNome.length < 5){
      ajudaNome.innerHTML += "Nome muito curto!!!"
      ajudaNome.style.color = "#f00";
      nomeTxt.style.borderColor = '#f00';
      nomeTxt.style.borderWidth = '3px';
      nomeTxt.style.borderStyle = 'solid';
    }
    else if(nomeCompleto.length < 2){
      ajudaNome.innerHTML = "Coloque o sobrenome!!!"
      ajudaNome.style.color = "#f00";
      nomeTxt.style.borderColor = '#f00';
      nomeTxt.style.borderWidth = '3px';
      nomeTxt.style.borderStyle = 'solid';
    }
    else{
      ajudaNome.innerHTML = "";
      nomeTxt.style.borderColor = '#0f0';
      nomeTxt.style.borderWidth = '3px';
      nomeTxt.style.borderStyle = 'solid';
    }
  }
function validaEmail(e){
  const conteudoEmail = emailTxt.value.trim();
  const ajudaEmail = document.getElementById('ajudaEmail');
  if(conteudoEmail.length === 0){
      ajudaEmail.innerHTML = "Email não pode estar vazio!!!"
      ajudaEmail.style.color = "#f00";
      emailTxt.style.borderColor = '#f00';
      emailTxt.style.borderWidth = '3px';
      emailTxt.style.borderStyle = 'solid';
  }
  else if(conteudoEmail.indexOf('@') < 0){  
    ajudaEmail.innerHTML = "Email inválido! Não possui @!!!"
      ajudaEmail.style.color = "#f00";
      emailTxt.style.borderColor = '#f00';
      emailTxt.style.borderWidth = '3px';
      emailTxt.style.borderStyle = 'solid';
  }
  else if(conteudoEmail.indexOf('.') < 0){
    ajudaEmail.innerHTML = "Email inválido! Não possui ponto!!!"
    ajudaEmail.style.color = "#f00";
    emailTxt.style.borderColor = '#f00';
    emailTxt.style.borderWidth = '3px';
    emailTxt.style.borderStyle = 'solid';
  }
  else if(conteudoEmail.length > 60){
    ajudaEmail.innerHTML = "Email inválido! Muito grande.!!!"
    ajudaEmail.style.color = "#f00";
    emailTxt.style.borderColor = '#f00';
    emailTxt.style.borderWidth = '3px';
    emailTxt.style.borderStyle = 'solid';
  }else{
    ajudaEmail.innerHTML = "";
    emailTxt.style.borderColor = '#0f0';
    emailTxt.style.borderWidth = '3px';
    emailTxt.style.borderStyle = 'solid';

  }
  
  }
  function validaZap(e){
    const reg = /[0-9]/gm;
    const ajudaWhatsapp = document.getElementById('ajudaWhatsapp');
    const valido = reg.test(whatsappTxt.value);
    if(valido === true){
      whatsappTxt.style.borderColor = '#0f0';
      whatsappTxt.style.borderWidth = '3px';
      whatsappTxt.style.borderStyle = 'solid';

    }else{
      ajudaWhatsapp.innerHTML = "Whatsapp ERRADO!!!"
      ajudaWhatsapp.style.color = "#f00";
      whatsappTxt.style.borderColor = '#f00';
      whatsappTxt.style.borderWidth = '3px';
      whatsappTxt.style.borderStyle = 'solid';
    }
}