document.addEventListener('DOMContentLoaded', function () {
    vakanties = document.getElementById('vakanties')
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
            content.innerHTML = content.innerHTML = `<section class="start-home">
            <div class="data">
                <h1 class="animate__animated animate__fadeInDown">Welcome to Asahbi Airline</h1>
                <a class="button_contact" href="./contact/">Contact</a>
            </div>
            <!--Image-->
            <img src="./img/achtergrond_voorpagina.jpg" alt="Zonnebril op strand">
            <div class="custom-shape-divider-bottom-1701943727">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="white-bg"></div>
        </section>

        <section class="container">
            <h2 class="title-page underlined">Our favorite trips</h2>

            <div class="cards">
                <div class="card">
                    <div class="data">
                        <h3>Russia</h3>
                        <h4>For families who are pro-dictatorship.</h4>
                        <a href="#">read more</a>
                        <a href="./rusland/" class="overlay-link">read more</a>
                    </div>
                    <img src="./img/Rusland.jpg" alt="Rusland landschap, gebouw">
                </div>

                <div class="card">
                    <div class="data">
                        <h3>Ukraine</h3>
                        <h4>For families who like to take shelter from the sun.</h4>
                        <a href="#">read more</a>
                        <a href="./ukraine/" class="overlay-link">read more</a>
                    </div>
                    <img src="./img/Ukraine.jpg" alt="Ukraine landschap stad">
                </div>

                <div class="card">
                    <div class="data">
                        <h3>Spain</h3>
                        <h4>For families who want extra relationship problems.</h4>
                        <a href="#">read more</a>
                        <a href="./spanje/" class="overlay-link">read more</a>
                    </div>
                    <img src="./img/Spanje.jpg" alt="Spanje landschap stad">
                </div>
            </div>
        </section>

        <section class="quiz container">
            <h2 class="underlined">Our holiday quiz</h2>
            <div class="data">
                <p>For the people who don't know where they want to travel.</p>
                <h3>Take our quiz! How?</h3>
                <p>Click on the chatbot at the bottom right and ask the bot.</p>
            </div>
        </section>`

        } else {
            console.log('Language set to Dutch');
            vakanties.textContent = "vakanties"
            content.innerHTML = `<section class="start-home">
                    <div class="data">
                        <h1 class="animate__animated animate__fadeInDown">Welkom bij Asahbi Airline</h1>
                        <a class="button_contact" href="./contact/">Contact</a>
                    </div>
                    <!--Image-->
                    <img src="./img/achtergrond_voorpagina.jpg" alt="Zonnebril op strand">
                    <div class="custom-shape-divider-bottom-1701943727">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                        </svg>
                    </div>
                    <div class="white-bg"></div>
                </section>

                <section class="container">
                    <h2 class="title-page underlined">Onze favoriete reizen</h2>

                    <div class="cards">
                        <div class="card">
                            <div class="data">
                                <h3>Rusland</h3>
                                <h4>Voor families die pro dictatuur zijn.</h4>
                                <a href="#">Lees meer</a>
                                <a href="./rusland/" class="overlay-link">Lees meer</a>
                            </div>
                            <img src="./img/Rusland.jpg" alt="Rusland landschap, gebouw">
                        </div>

                        <div class="card">
                            <div class="data">
                                <h3>Ukraine</h3>
                                <h4>Voor families die graag eens schuilen voor de zon.</h4>
                                <a href="#">Lees meer</a>
                                <a href="./ukraine/" class="overlay-link">Lees meer</a>
                            </div>
                            <img src="./img/Ukraine.jpg" alt="Ukraine landschap stad">
                        </div>

                        <div class="card">
                            <div class="data">
                                <h3>Spanje</h3>
                                <h4>Voor families die extra relatie problemen wilt.</h4>
                                <a href="#">Lees meer</a>
                                <a href="./spanje/" class="overlay-link">Lees meer</a>
                            </div>
                            <img src="./img/Spanje.jpg" alt="Spanje landschap stad">
                        </div>
                    </div>
                </section>

                <section class="quiz container">
                    <h2 class="underlined">Onze vakantie quiz</h2>
                    <div class="data">
                        <p>Voor de mensen die niet weten naar waar ze op reis willen gaan.</p>
                        <h3>Neem onze quiz! Hoe?</h3>
                        <p>Klik op de chatbot rechtsonderen en vraag het aan de bot.</p>
                    </div>
                </section>`
        }
    }
});
