<?php 
$adresa_sajta = "https://otkljucajlako.rs/kontakt";
$adresa_sajta = filter_var($adresa_sajta, FILTER_VALIDATE_URL);
$email_primaoca = "boba@otkljucajlako.rs";
$email_primaoca = filter_var($email_primaoca, FILTER_VALIDATE_EMAIL);

$email_posiljaoca = $poruka = $name = $predmet = $adresa_sajta = "";
$naslov_poruke = "Poruka poslata sa sajta: $adresa_sajta";
$posiljalac_atributi = "From: $email_posiljaoca\n\r ime: $name\n\r predmet: $predmet";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $email_posiljaoca = test_input($POST["email"]);
  $email_posiljaoca = filter_var($POST["email"], FILTER_VALIDATE_EMAIL);
  $poruka = test_input($POST["poruka"]);
  $name = test_input($POST["name"]);
  $predmet = test_input($POST["predmet"]);
  
  mail($email_primaoca, $naslov_poruke, $poruka, 
  $posiljalac_atributi);
}

function test_input($data) {
  $data = trim($data);
  $data = htmlspecialchars($data);
  $data = stripslashes($data);
  return $data;
}
?>

<html>
  <head>
    <title>Poruka je uspešno poslata</title>
  </head>
  <body>
    <h4>Zahvaljujemo! Vaša poruka je uspešno poslata.</h4>
    <a href="<?php $adresa_sajta ?>">Kliknite ovde</a> da se vratite na prethodnu stranicu.
  </body> 
</html>