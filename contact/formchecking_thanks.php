<?php

	$name = isset($_GET['name']) ? $_GET['name'] : false;

?><!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Contact - Thank you</title>
        <link rel="stylesheet" href="https://unpkg.com/@csstools/normalize.css">
        <!--Fonts-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,800;1,300;1,500;1,800&family=Poppins:ital,wght@0,100;0,300;0,500;0,800;1,100;1,300;1,400;1,500;1,800&display=swap" rel="stylesheet">
        <!--Css-->
        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="../css/contact.css">
    </head>
    <body>
        <header>
            <nav class="navbar">
                <a href="../index.html"><img src="../img/Logo_airline.png" alt="logo website" class="logo"></a>
                    <ul>
                        <li><a href="../about/">About</a></li>
                        <li><a href="../vakanties/">Vakanties</a></li>
                        <li><a href="../cruises/">Cruises</a></li>
                        <li><a href="../contact/">Contact</a></li>
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
            <!--Thanks Section Start-->
            <section class="form_sent_successfully container">
                <div class="container-page">
                    <h1>Thank you for your submission, <?php echo htmlentities($name)?>!</h1>
                    <p>You will receive an email as soon as possible.</p>
                </div>
            </section>
            <!--Thanks Section End-->
        </main>
        
        <footer>
        </footer>

    </body>
</html>
