<?php

// Show all errors (for educational purposes)
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);

// Constanten (connectie-instellingen database)
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'contact_page');

date_default_timezone_set('Europe/Brussels');

// Connection with the database
try {
    $db = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4', DB_USER, DB_PASS);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Connection error: ' . $e->getMessage();
    exit;
}

$type_reis = isset($_POST['type_reis']) ? (string)$_POST['type_reis'] : '';
$bestemming = isset($_POST['bestemming']) ? (string)$_POST['bestemming'] : '';
$budget = isset($_POST['budget']) ? (string)$_POST['budget'] : '';
$volwassenen = isset($_POST['volwassenen']) ? (string)$_POST['volwassenen'] : '';
$kinderen = isset($_POST['kinderen']) ? (string)$_POST['kinderen'] : '';
$vertrekdatum = isset($_POST['vertrekdatum']) ? (string)$_POST['vertrekdatum'] : '';
$retourdatum = isset($_POST['retourdatum']) ? (string)$_POST['retourdatum'] : '';
$voornaam = isset($_POST['voornaam']) ? (string)$_POST['voornaam'] : '';
$familienaam = isset($_POST['familienaam']) ? (string)$_POST['familienaam'] : '';
$email = isset($_POST['email']) ? (string)$_POST['email'] : '';
$telefoonnummer = isset($_POST['telefoonnummer']) ? (string)$_POST['telefoonnummer'] : '';

$msgType_reis = '';
$msgBestemming = '';
$msgBudget = '';
$msgVertrekdatum = '';
$msgRetourdatum = '';
$msgVoornaam = '';
$msgFamilienaam = '';
$msgEmail = '';
$msgTelefoonnummer = '';


// form is sent: perform formchecking!
if (isset($_POST['btnSubmit'])) {

    $allOk = true;
    

    if (trim($type_reis) === '') {
        $msgType_reis = 'Vul je type reis in';
        $allOk = false;
    }

    if (trim($bestemming) === '') {
        $msgBestemming = 'Vul je bestemming in';
        $allOk = false;
    }

    if (trim($budget) === '') {
        $msgBudget = 'Vul je budget in';
        $allOk = false;
    }

    if (trim($vertrekdatum) === '') {
        $msgVertrekdatum = 'Vul je vertrekdatum in';
        $allOk = false;
    }

    if (trim($retourdatum) === '') {
        $msgRetourdatum = 'Vul je retourdatum in';
        $allOk = false;
    }

    if (trim($voornaam) === '') {
        $msgVoornaam = 'Vul je voornaam in';
        $allOk = false;
    }

    if (trim($familienaam) === '') {
        $msgFamilienaam = 'Vul je familienaam in';
        $allOk = false;
    }

    if (trim($email) === '') {
        $msgEmail = 'Vul je email in';
        $allOk = false;
    }

    if (trim($telefoonnummer) === '') {
        $msgTelefoonnummer = 'Vul je telefoonnummer in';
        $allOk = false;
    }

    
    // end of form check. If $allOk still is true, then the form was sent in correctly
    if ($allOk) {
        $stmt = $db->exec('INSERT INTO messages (type_reis, bestemming, budget, volwassenen, kinderen, vertrekdatum, retourdatum, voornaam, familienaam, email, telefoonnummer, added_on) VALUES (\'' . $type_reis . '\',\'' . $bestemming . '\',\'' . $budget . '\',\'' . $volwassenen . '\',\'' . $kinderen . '\',\'' . $vertrekdatum . '\',\'' . $retourdatum . '\',\'' . $voornaam . '\',\'' . $familienaam . '\',\'' . $email . '\',\'' . $telefoonnummer . '\',\'' . (new DateTime())->format('Y-m-d H:i:s') . '\')');

        // the query succeeded, redirect to this very same page
        if ($db->lastInsertId() !== 0) {
            header('Location: formchecking_thanks.php?name=' . urlencode($voornaam));
            exit();
        } // the query failed
        else {
            echo 'Database error.';
            exit;
        }

    }

}

?><!DOCTYPE html>
<html lang="nl">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Contact</title>
        <link rel="stylesheet" href="https://unpkg.com/@csstools/normalize.css">
        <!--Fonts-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,800;1,300;1,500;1,800&family=Poppins:ital,wght@0,100;0,300;0,500;0,800;1,100;1,300;1,400;1,500;1,800&display=swap" rel="stylesheet">
        <!--Icons-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!--Css-->
        <link rel="stylesheet" href="../style.css">
        <link rel="stylesheet" href="./contact.css">
    </head>
    <body>
        <header>
            <nav class="navbar">
                <a href="../index.html"><img src="../img/Logo_airline.png" alt="logo website" class="logo"></a>
                    <ul>
                        <li><a href="../about/">About</a></li>
                        <li><a href="../vakanties/">Vakanties</a></li>
                        <li><a href="../cruises/">Cruises</a></li>
                        <li><a href="./index.php">Contact</a></li>
                    </ul>
                    <div class="dropdown">
                        <a href="#">Talen ▾</a>
                        <div class="dropdown-content">
                            <a href="#">Nederlands</a>
                            <a href="#">Engels</a>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <section class="start-contact">
                    <h1>Contacteer ons!</h1>
                    <!--Image-->
                    <img src="../img/contact-achtergrond.jpg" alt="Water, boten en huizen">
                    <div class="custom-shape-divider-bottom-1701943727">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                        </svg>
                    </div>
                    <div class="white-bg"></div>
                </section>
                <div class="container-contactinfo container">
                    <section class="contact">
                        <h2>Vul je reisaanvraag in!</h2>
                        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
                            <div>
                                <label for="type_reis">Type reis</label>
                                <input type="text" id="type_reis" name="type_reis" placeholder="Cruise, Autovakantie, Citytrip, Vliegvakantie, Rondreis ..." value="<?php echo $type_reis; ?>">
                                <span class="message_error"><?php echo $msgType_reis; ?></span>
                                
                                <label for="bestemming">Bestemming</label>
                                <input type="text" id="bestemming" name="bestemming" placeholder="Land, Stad, Werelddeel ..." value="<?php echo $bestemming; ?>">
                                <span class="message_error"><?php echo $msgBestemming; ?></span>

                                <label for="budget">Welk budget wens je te spenderen?</label>
                                <input type="text" id="budget" name="budget" placeholder="€" value="<?php echo $budget; ?>">
                                <span class="message_error"><?php echo $msgBudget; ?></span>
                            </div>
                            <div>
                                <label for="volwassenen">Aantal volwassenen</label>
                                <input type="number" id="volwassenen" name="volwassenen" value="0">

                                <label for="kinderen">Aantal kinderen</label>
                                <input type="number" id="kinderen" name="kinderen" value="0">
                            </div>
                            <div>
                                <label for="vertrekdatum">Gewenste vertrekdatum</label>
                                <input type="date" id="vertrekdatum" name="vertrekdatum" value="<?php echo $vertrekdatum; ?>">
                                <span class="message_error"><?php echo $msgVertrekdatum; ?></span>

                                <label for="retourdatum">Gewenste retourdatum</label>
                                <input type="date" id="retourdatum" name="retourdatum" value="<?php echo $retourdatum; ?>">
                                <span class="message_error"><?php echo $msgRetourdatum; ?></span>
                            </div>
                            <div>
                                <label for="voornaam">Voornaam</label>
                                <input type="text" id="voornaam" name="voornaam" value="<?php echo $voornaam; ?>">
                                <span class="message_error"><?php echo $msgVoornaam; ?></span>

                                <label for="familienaam">Familienaam</label>
                                <input type="text" id="familienaam" name="familienaam" value="<?php echo $familienaam; ?>">
                                <span class="message_error"><?php echo $msgFamilienaam; ?></span>

                                <label for="email">E-mail</label>
                                <input type="email" id="email" name="email" value="<?php echo $email; ?>">
                                <span class="message_error"><?php echo $msgEmail; ?></span>

                                <label for="telefoonnummer">Telefoonnummer</label>
                                <input type="tel" id="telefoonnummer" name="telefoonnummer" minlength="10" maxlength="10" value="<?php echo $telefoonnummer; ?>">
                                <span class="message_error"><?php echo $msgTelefoonnummer; ?></span>
                            </div>
                            <div class="submit-button">
                                <input type="submit" id="btnSubmit" name="btnSubmit" value="Verstuur je aanvraag" >
                            </div>
                    </form>
                    </section>

                    <section class="info">
                        <div class="column-border">
                            <i class="material-icons">local_phone</i>
                            <h2>Bel ons</h2>
                            <p>092658610</p>
                        </div>
                        <div class="column-border">
                            <i class="material-icons">email</i>
                            <h2>Mail ons</h2>
                            <p>contact@asahbiairline.be</p>
                        </div>
                        <div class="column-border">
                            <i class="material-icons">location_on</i>
                            <h2>Ons kantoor</h2>
                            <p>
                                Gebroeders De Smetstraat 1 <br>
                                9000 Gent
                            </p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.3040240849114!2d3.705938707988101!3d51.06018482348496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c37114843ed79d%3A0xdec8365c4a667ad6!2sBlok%20N%2C%20Gebroeders%20de%20Smetstraat%201%2C%209000%20Gent!5e0!3m2!1snl!2sbe!4v1703093793025!5m2!1snl!2sbe" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </section>
            </div>
        </main>
        <footer>

        </footer>
    </body>
</html>
