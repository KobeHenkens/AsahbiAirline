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
            content.innerHTML = content.innerHTML = `<section class="start-vakanties">
            <h1>Holidays</h1>
            <!--Image-->
            <img src="../img/contact-achtergrond.jpg" alt="Water, boten en huizen">
            <div class="custom-shape-divider-bottom-1701943727">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="white-bg"></div>
        </section>

        <section class="populair container">
            <h2 class="underlined">Popular trips</h2>

            <div class="cards">
                <div class="card">
                    <div class="data">   
                        <h3>Bali</h3>
                        <h4>Indonesia</h4>
                    </div>
                    <img src="../img/bali.jpg" alt="bali natuur, gebouw">
                </div>

                <div class="card">
                    <div class="data">
                        <h3>Sydney</h3>
                        <h4>Australia</h4>
                    </div>
                    <img src="../img/sydney.jpg" alt="Sydney landschap stad">
                </div>

                <div class="card">
                    <div class="data">
                        <h3>Miami</h3>
                        <h4>USA</h4>
                    </div>
                    <img src="../img/miami.jpg" alt="Miami landschap stad">
                </div>

                <div class="card">
                    <div class="data">
                        <h3>Bangkok</h3>
                        <h4>Thailand</h4>
                    </div>
                    <img src="../img/bangkok.jpg" alt="Bangkok landschap stad">
                </div>

                <div class="card">
                    <div class="data">
                        <h3>Dubai</h3>
                        <h4>United Arab Emirates</h4>
                    </div>
                    <img src="../img/dubai.jpg" alt="Dubai landschap stad">
                </div>

                <div class="card">
                    <div class="data">
                        <h3>Rio de Janeiro</h3>
                        <h4>Brazil</h4>
                    </div>
                    <img src="../img/Riodejaneiro.jpg" alt="Rio de janeiro landschap stad">
                </div>

            </div>
        </section>

        <section class="seizoen container">
            <div class="zomer">
                <h2 class="underlined">Summer vacation</h2>
                <div class="cards">
                    <div class="card">
                        <div class="data">
                            <h3>Santorini</h3>
                            <h4>Greece</h4>
                        </div>
                        <img src="../img/santorini.avif" alt="Santorini landschap stad">
                    </div>

                    <div class="card">
                        <div class="data">
                            <h3>Barcelona</h3>
                            <h4>Spain</h4>
                        </div>
                        <img src="../img/barcelona.jpg" alt="Barcelona landschap stad">
                    </div>

                    <div class="card">
                        <div class="data">
                            <h3>Dubrovnik</h3>
                            <h4>Croatia</h4>
                        </div>
                        <img src="../img/dubrovnik.jpeg.crdownload" alt="Dubrovnik landschap stad">
                    </div>
                </div>
            </div>

            <div class="winter">
                <h2 class="underlined">Winter vacation</h2>
                <div class="cards">
                    <div class="card">
                        <div class="data">
                            <h3>Zermatt</h3>
                            <h4>Switzerland</h4>
                        </div>
                        <img src="../img/zermatt.jpg" alt="Zermatt landschap stad">
                    </div>

                    <div class="card">
                        <div class="data">
                            <h3>Kitzbühel</h3>
                            <h4>Austria</h4>
                        </div>
                        <img src="../img/Kitzbühel.webp.crdownload" alt="Barcelona landschap stad">
                    </div>

                    <div class="card">
                        <div class="data">
                            <h3>Whistler</h3>
                            <h4>Canada</h4>
                        </div>
                        <img src="../img/Whistler.jpg" alt="Santorini landschap stad">
                    </div>
                </div>
            </div>
        </section>
        `

        } else {
            console.log('Language set to Dutch');
            vakanties.textContent = "vakanties"
            content.innerHTML = `<section class="start-vakanties">
            <h1>Vakanties</h1>
            <!--Image-->
            <img src="../img/contact-achtergrond.jpg" alt="Water, boten en huizen">
            <div class="custom-shape-divider-bottom-1701943727">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="white-bg"></div>
        </section>

        <section class="populair container">
            <h2 class="underlined">Populaire reizen</h2>

            <div class="cards">
                <div class="card">
                    <div class="data">   
                        <h3>Bali</h3>
                        <h4>Indonasië</h4>
                    </div>
                    <img src="../img/bali.jpg" alt="bali natuur, gebouw">
                </div>

                <div class="card">
                    <div class="data">
                        <h3>Sydney</h3>
                        <h4>Australië</h4>
                    </div>
                    <img src="../img/sydney.jpg" alt="Sydney landschap stad">
                </div>

                <div class="card">
                    <div class="data">
                        <h3>Miami</h3>
                        <h4>USA</h4>
                    </div>
                    <img src="../img/miami.jpg" alt="Miami landschap stad">
                </div>

                <div class="card">
                    <div class="data">
                        <h3>Bangkok</h3>
                        <h4>Thailand</h4>
                    </div>
                    <img src="../img/bangkok.jpg" alt="Bangkok landschap stad">
                </div>

                <div class="card">
                    <div class="data">
                        <h3>Dubai</h3>
                        <h4>Verenigde Arabische Emiraten</h4>
                    </div>
                    <img src="../img/dubai.jpg" alt="Dubai landschap stad">
                </div>

                <div class="card">
                    <div class="data">
                        <h3>Rio de Janeiro</h3>
                        <h4>Brazilië</h4>
                    </div>
                    <img src="../img/Riodejaneiro.jpg" alt="Rio de janeiro landschap stad">
                </div>

            </div>
        </section>

        <section class="seizoen container">
            <div class="zomer">
                <h2 class="underlined">Zomervakantie</h2>
                <div class="cards">
                    <div class="card">
                        <div class="data">
                            <h3>Santorini</h3>
                            <h4>Griekenland</h4>
                        </div>
                        <img src="../img/santorini.avif" alt="Santorini landschap stad">
                    </div>

                    <div class="card">
                        <div class="data">
                            <h3>Barcelona</h3>
                            <h4>Spanje</h4>
                        </div>
                        <img src="../img/barcelona.jpg" alt="Barcelona landschap stad">
                    </div>

                    <div class="card">
                        <div class="data">
                            <h3>Dubrovnik</h3>
                            <h4>Kroatië</h4>
                        </div>
                        <img src="../img/dubrovnik.jpeg.crdownload" alt="Dubrovnik landschap stad">
                    </div>
                </div>
            </div>

            <div class="winter">
                <h2 class="underlined">Wintervakantie</h2>
                <div class="cards">
                    <div class="card">
                        <div class="data">
                            <h3>Zermatt</h3>
                            <h4>Zwitserland</h4>
                        </div>
                        <img src="../img/zermatt.jpg" alt="Zermatt landschap stad">
                    </div>

                    <div class="card">
                        <div class="data">
                            <h3>Kitzbühel</h3>
                            <h4>Oostenrijk</h4>
                        </div>
                        <img src="../img/Kitzbühel.webp.crdownload" alt="Barcelona landschap stad">
                    </div>

                    <div class="card">
                        <div class="data">
                            <h3>Whistler</h3>
                            <h4>Canada</h4>
                        </div>
                        <img src="../img/Whistler.jpg" alt="Santorini landschap stad">
                    </div>
                </div>
            </div>
        </section>`
        }
    }
});
