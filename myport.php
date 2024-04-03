<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    // Email para onde será enviado
    $destino = "carlosnand4@gmail.com";
    $assunto = "Portifolio contt";

    $conteudo = "Nome: $nome\n";
    $conteudo .= "Email: $email\n";
    $conteudo .= "Mensagem:\n$mensagem\n";

    // Envia o email
    $enviado = mail($destino, $assunto, $conteudo);

    if ($enviado) {
        echo "<p>Obrigado por entrar em contato. Seu e-mail foi enviado com sucesso!</p>";
    } else {
        echo "<p>Ocorreu um erro ao enviar seu e-mail. Por favor, tente novamente mais tarde.</p>";
    }
}
?>
