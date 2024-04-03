// Mostra detalhes do projeto ao clicar em um mini quadradinho
function showProjectDetails(projectId) {
    var modal = document.getElementById("projectDetailsModal");
    modal.style.display = "block";
}

// Fecha modal de detalhes do projeto
function closeProjectDetailsModal() {
    var modal = document.getElementById("projectDetailsModal");
    modal.style.display = "none";
}

// Valida o formulário de contato antes de enviar
document.getElementById("contactForm").addEventListener("submit", function(event) {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
    if (nome == "" || email == "" || mensagem == "") {
        alert("Por favor, preencha todos os campos do formulário.");
        event.preventDefault();
    }
});

// Função para alternar a visibilidade do conteúdo e alterar a cor de fundo do botão
function toggleContent(interest) {
    var content = document.getElementById(interest + '-content');
    content.classList.toggle('active');
    
    // Remover a classe 'selected' de todos os botões
    var interests = document.querySelectorAll('.interest');
    interests.forEach(function(item) {
        item.classList.remove('selected');
    });
    
    // Adicionar a classe 'selected' ao botão clicado
    var selectedInterest = document.getElementById(interest);
    selectedInterest.classList.add('selected');
}
