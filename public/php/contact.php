Formulaire de contact (mais sans backend)	⚠️ À améliorerif ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = strip_tags(trim($_POST["name"]));
    $email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $address = strip_tags(trim($_POST["address"]));
    $message = strip_tags(trim($_POST["message"]));

    $to      = "morais.issac9@hotmail.com";  // Ton email
    $subject = "Nouveau message de $name via le site Morais Cleaning";
    $body    = "Nom: $name\nEmail: $email\nAdresse: $address\n\nMessage:\n$message";

    $headers = "From: $name <$email>\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message envoyé avec succès !'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Erreur lors de l’envoi du message.'); history.back();</script>";
    }
} else {
    http_response_code(403);
    echo "Méthode non autorisée.";
}