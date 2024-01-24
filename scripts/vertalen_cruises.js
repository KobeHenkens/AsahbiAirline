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
            content.innerHTML = content.innerHTML = `<section class="achtergrond">
            <h1>Discover the world through a beautiful cruise!</h1>
            <!--Image-->
            <img src="../img/Main_image_cruises_cut.jpg" alt="cruise met eiland">
            <div class="custom-shape-divider-bottom-1701943727">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="white-bg"></div>
        </section>

        <section class="cruises container">
            <div class="cards">
                <a href="./caribbean/">
                    <div class="card">
                        <div class="data">
                            <h3>Caribbean Cruise</h3>
                            <h4>Explore the Caribbean Sea with its beautiful islands</h4>
                        </div>
                        <img src="../img/caribbean_cruise.avif" alt="cruise met palmbomen">
                    </div>
                </a>
                <a href="./middellandse_zee/">
                    <div class="card">
                        <div class="data">
                            <h3>Mediterranean Cruise</h3>
                            <h4>You will visit cities such as Barcelona, Rome, Athens and many more</h4>
                        </div>
                        <img src="../img/middelandsezee.webp" alt="mediterraanse kust">
                    </div>
                </a>
                <a href="./alaskacruise/">
                    <div class="card">
                        <div class="data">
                            <h3>Alaska cruise</h3>
                            <h4>You will visit the beautiful snow and ice landscapes of Alaska</h4>
                        </div>
                        <img src="../img/alaska.jpeg" alt="cruise met ijsbergen">
                    </div>
                </a>
            </div>
        </section>`

        } else {
            console.log('Language set to Dutch');
            vakanties.textContent = "vakanties"
            content.innerHTML = `<section class="achtergrond">
            <h1>Ontdek de wereld via een prachtige cruise!</h1>
            <!--Image-->
            <img src="../img/Main_image_cruises_cut.jpg" alt="cruise met eiland">
            <div class="custom-shape-divider-bottom-1701943727">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="white-bg"></div>
        </section>

        <section class="cruises container">
            <div class="cards">
                <a href="./caribbean/">
                    <div class="card">
                        <div class="data">
                            <h3>Caribbean Cruise</h3>
                            <h4>Verken de Caribische zee met zijn prachtige eilanden</h4>
                        </div>
                        <img src="../img/caribbean_cruise.avif" alt="cruise met palmbomen">
                    </div>
                </a>
                <a href="./middellandse_zee/">
                    <div class="card">
                        <div class="data">
                            <h3>Middellandse Zee Cruise</h3>
                            <h4>U bezoekt steden zoals, Barcelona, Rome, Athene en nog veel meer</h4>
    
                        </div>
                        <img src="../img/middelandsezee.webp" alt="mediterraanse kust">
                    </div>
                </a>
                <a href="./alaskacruise/">
                    <div class="card">
                        <div class="data">
                            <h3>Alaskacruise</h3>
                            <h4>U bezoekt de mooie sneeuw- en ijslandchappen van Alaska</h4>
                        </div>
                        <img src="../img/alaska.jpeg" alt="cruise met ijsbergen">
                    </div>
                </a>
            </div>
        </section>`
        }
    }
});
