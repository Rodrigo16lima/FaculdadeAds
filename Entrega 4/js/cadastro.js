// --- MENU HAMBURGUER RESPONSIVO ---
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  btnMenu.classList.toggle('ativo');
});




// --- Validação do formulário ---
document.getElementById("cadastro").addEventListener("submit", function(e){
    e.preventDefault(); // impede envio automático

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const estado = document.getElementById("estado").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if(!nome || !email || !cpf || !telefone || !cep || !estado || !assunto || !mensagem){
        alert("Preencha todos os campos!");
        return;
    }

    alert("Formulário enviado com sucesso!");
    this.submit(); // envia o formulário
});



// --- MÁSCARAS DE INPUT ---
  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  function apenasNumeros(valor) {
    return valor.replace(/\D/g, '');
  }

  // Máscara CPF
  cpf.addEventListener('input', () => {
    let v = apenasNumeros(cpf.value);
    if(v.length > 9) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
    else if(v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
    else if(v.length > 3) v = v.replace(/(\d{3})(\d{0,3})/, "$1.$2");
    cpf.value = v;
  });

  // Máscara Telefone
  telefone.addEventListener('input', () => {
    let v = apenasNumeros(telefone.value);
    if(v.length > 10) v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    else if(v.length > 5) v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    else if(v.length > 2) v = v.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    telefone.value = v;
  });

  // Máscara CEP
  cep.addEventListener('input', () => {
    let v = apenasNumeros(cep.value);
    if(v.length > 5) v = v.replace(/(\d{5})(\d{0,3})/, "$1-$2");
    cep.value = v;
  });





  