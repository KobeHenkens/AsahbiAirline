document.addEventListener('DOMContentLoaded', function () {
    var vakanties = document.getElementById('vakanties')
    // Function to set cookie
    function setCookie(name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    }

    // Function to get cookie
    function getCookie(name) {
        var nameEQ = name + '=';
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }
        return null;
    }

    // Load saved language preference from cookie
    var savedLanguage = getCookie('preferredLanguage');
    if (savedLanguage) {
        stelTaalIn(savedLanguage);
    }

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('language-option')) {
            // When a language option is chosen
            var selectedLanguage = e.target.getAttribute('data-lang');
            stelTaalIn(selectedLanguage);
            // Save selected language in cookie
            setCookie('preferredLanguage', selectedLanguage, 30); // Valid for 30 days
        }
    });

    function stelTaalIn(taalCode) {
        var content = document.getElementById('content');
        if (taalCode === 'en') {
            console.log('Language set to English');
            vakanties.textContent = "holidays"
            content.innerHTML = content.innerHTML = `<section class="start-contact">
            <h1>Contact Us!</h1>
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
                <h2>Fill in your travel request!</h2>
                <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
                    <div>
                        <label for="type_travel">Type of travel</label>
                        <input type="text" id="type_travel" name="type_travel" placeholder="Cruise, Road trip, City trip, Flight, Round trip..." value="<?php echo $type_travel; ?>">
                        <span class="message_error"><?php echo $msgType_travel; ?></span>
        
                        <label for="destination">Destination</label>
                        <input type="text" id="destination" name="destination" placeholder="Country, City, Continent..." value="<?php echo $destination; ?>">
                        <span class="message_error"><?php echo $msgDestination; ?></span>
        
                        <label for="budget">What budget do you want to spend?</label>
                        <input type="text" id="budget" name="budget" placeholder="€" value="<?php echo $budget; ?>">
                        <span class="message_error"><?php echo $msgBudget; ?></span>
                    </div>
                    <div>
                        <label for="adults">Number of adults</label>
                        <input type="number" id="adults" name="adults" value="0">
        
                        <label for="children">Number of children</label>
                        <input type="number" id="children" name="children" value="0">
                    </div>
                    <div>
                        <label for="departure_date">Preferred departure date</label>
                        <input type="date" id="departure_date" name="departure_date" value="<?php echo $departure_date; ?>">
                        <span class="message_error"><?php echo $msgDeparture_date; ?></span>
        
                        <label for="return_date">Preferred return date</label>
                        <input type="date" id="return_date" name="return_date" value="<?php echo $return_date; ?>">
                        <span class="message_error"><?php echo $msgReturn_date; ?></span>
                    </div>
                    <div>
                        <label for="first_name">First name</label>
                        <input type="text" id="first_name" name="first_name" value="<?php echo $first_name; ?>">
                        <span class="message_error"><?php echo $msgFirst_name; ?></span>
        
                        <label for="last_name">Last name</label>
                        <input type="text" id="last_name" name="last_name" value="<?php echo $last_name; ?>">
                        <span class="message_error"><?php echo $msgLast_name; ?></span>
        
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" value="<?php echo $email; ?>">
                        <span class="message_error"><?php echo $msgEmail; ?></span>
        
                        <label for="phone_number">Phone number</label>
                        <input type="tel" id="phone_number" name="phone_number" minlength="10" maxlength="10" value="<?php echo $phone_number; ?>">
                        <span class="message_error"><?php echo $msgPhone_number; ?></span>
                    </div>
                    <div class="submit-button">
                        <input type="submit" id="btnSubmit" name="btnSubmit" value="Submit your request">
                    </div>
                </form>
            </section>
        
            <section class="info">
                <div class="column-border">
                    <i class="material-icons">local_phone</i>
                    <h2>Call us</h2>
                    <p>092658610</p>
                </div>
                <div class="column-border">
                    <i class="material-icons">email</i>
                    <h2>Email us</h2>
                    <p>contact@asahbiairline.be</p>
                </div>
                <div class="column-border">
                    <i class="material-icons">location_on</i>
                    <h2>Our office</h2>
                    <p>
                        Gebroeders De Smetstraat 1 <br>
                        9000 Gent
                    </p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.3040240849114!2d3.705938707988101!3d51.06018482348496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c37114843ed79d%3A0xdec8365c4a667ad6!2sBlok%20N%2C%20Gebroeders%20de%20Smetstraat%201%2C%209000%20Gent!5e0!3m2!1snl!2sbe!4v1703093793025!5m2!1snl!2sbe" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </div>
        `

        } else {
            console.log('Language set to Dutch');
            vakanties.textContent = "vakanties"
            content.innerHTML = `<section class="start-contact">
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
    </div>`
        }
    }
});
