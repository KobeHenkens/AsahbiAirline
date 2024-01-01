<?php

	$name = isset($_GET['name']) ? $_GET['name'] : false;

?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1,0">
    <title>Contact - Thank you</title>
    <link href="https://unpkg.com/@csstools/normalize.css" rel="stylesheet" />
    <!--Icons-->
    <script src="https://kit.fontawesome.com/1ae8808211.js" crossorigin="anonymous"></script>
    <!--Fonts-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <!--CSS-->
    <link rel="stylesheet" href="../css/styles.css">
<body>
    <header></header>
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
