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
            content.innerHTML = content.innerHTML = `<div class="containerachtergrond">
            <div class="achtergrond">
                <img src="../img/Odisee.jpg" alt="Odisee Gent">
                <div class="custom-shape-divider-bottom-1701943727">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="container">
            <section class="website">
                <h1>Who are we</h1>
                <p>With our website, we aim to provide a simple way to travel to your favorite vacation spot.
                    We also offer some tips on destinations that would perfectly suit you.
                    We have a rich selection of destinations such as a cruise to the Caribbean or a trip to fiery Russia.
                    In case you are looking for a trip but haven't decided on the destination yet, we have a quiz for you where you answer some questions,
                    and we provide you with a destination that meets your requirements. If you have any further questions, you can consult our chatbot,
                    and if necessary, you can reach us via the contact page.</p>
                    <a class="button_contact" href="../contact/">Contact</a>
            </section>
            <section class="whoarewe">
                <h2>The Asahbi's</h2>
                <div class="asahbis">
                        <div class="asahbi">
                            <h3>Brent Bové</h3>
                            <p>Hello, I'm Brent, an enthusiastic data scientist.
                                My focus is on exploring the world of big data and machine learning.
                                With a strong background in mathematics and statistics, I have a keen insight into discovering patterns and trends in complex datasets.
                                I use various programming languages and frameworks to develop predictive models and extract valuable insights from data.</p>
                            <img src="../img/221109-vladimir-putin-se-1143p-4c7bd0.jpg" alt="Putin">
                        </div>
                        <div class="asahbi">
                            <h3>Kobe Henkens</h3>
                            <p>Hey, I'm Kobe, a future web development specialist.
                                My interest lies in creating and optimizing engaging and functional websites.
                                With my sharp analytical skills, I work on implementing innovative web solutions.
                                I am fascinated by the dynamic world of web technologies and stay constantly updated on the latest trends and developments.
                                My goal is to create engaging user experiences and strengthen the online presence of businesses.</p>
                            <img src="../img/AndrewTate.avif" alt="Bald man with tattoo lighting a cigar">
                        </div>
                        <div class="asahbi">
                            <h3>Basile Van Hootegem</h3>
                            <p>Hello, I'm Basile, a passionate software developer in training.
                                My passion lies in solving complex problems and creating innovative solutions.
                                With a keen eye for detail, I have already developed impressive web applications and software prototypes.
                                I am constantly seeking new challenges and have a deep curiosity for the latest technologies.</p>
                            <img src="../img/Donald_Trump.webp" alt="Orange man with blond hair dancing">
                        </div>
                        <div class="asahbi">
                            <h3>Ritserd Vansteenland</h3>
                            <p>Hello there, I'm Ritserd, and my passion lies in the world of cybersecurity.
                                As a dedicated IT student, I am fascinated by protecting digital ecosystems from threats and attacks.
                                My in-depth understanding of security protocols enables me to identify and resolve vulnerabilities.
                                With my proactive approach to security and constant vigilance, I am working towards a promising career as a cybersecurity expert.</p>
                            <img src="../img/Nelson_Mandela.jpg" alt="Black man with gray hair">
                        </div>
                    </div>
            </section>
        </div>
        `

        } else {
            console.log('Language set to Dutch');
            vakanties.textContent = "vakanties"
            content.innerHTML = `<div class="containerachtergrond">
            <div class="achtergrond">
                <img src="../img/Odisee.jpg" alt="Odisee Gent">
                <div class="custom-shape-divider-bottom-1701943727">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="container">
        <section class="website">
            <h1>Wie zijn wij</h1>
            <p>Met onze website willen we een eenvoudige manier aanbieden om op reis te gaan naar uw favoriete vakantieplek. 
                We geven ook enkele tips welke bestemmingen perfect bij u zouden passen. 
                We hebben een rijk aanbod aan bestemmingen zoals een cruise naar de Caraïben of een reis naar het vurige Rusland. 
                In het geval u een reis zoekt maar er nog niet helemaal uit bent naar welke bestemming u wilt gaan hebben we een quiz voor u samengesteld waarbij je enkele vragen oplost 
                en geven we u een bestemming die aan uw eisen voldoet. Als u nog verdere vragen heeft kan u onze chatbot raadplegen en indien nodig kan je ons bereiken via de contact page. </p>
                <a class="button_contact" href="../contact/">Contact</a>
        </section>
        <section class="whoarewe">
            <h2>De Asahbi's</h2>
            <div class="asahbis">
                    <div class="asahbi">
                        <h3>Brent Bové</h3>
                        <p> Hallo, ik ben Brent, een enthousiaste datawetenschapper. 
                            Mijn focus ligt op het verkennen van de wereld van big data en machine learning. 
                            Met een sterke achtergrond in wiskunde en statistiek heb ik een scherp inzicht in het ontdekken van patronen en trends in complexe datasets. 
                            Ik gebruik verschillende programmeertalen en frameworks om voorspellende modellen te ontwikkelen en waardevolle inzichten uit gegevens te halen.</p>
                        <img src="../img/221109-vladimir-putin-se-1143p-4c7bd0.jpg" alt="Poetin">
                    </div>
                    <div class="asahbi">
                        <h3>Kobe Henkens</h3>
                        <p> Hé, ik ben Kobe, een toekomstige specialist in webontwikkeling. Mijn interesse ligt vooral in het creëren en optimaliseren van boeiende en functionele websites. 
                            Met mijn scherp analytisch vermogen werk ik aan het implementeren van innovatieve weboplossingen. 
                            Ik ben gefascineerd door de dynamische wereld van webtechnologieën en blijf constant op de hoogte van de nieuwste trends en ontwikkelingen. 
                            Mijn doel is om boeiende gebruikerservaringen te creëren en de online aanwezigheid van bedrijven te versterken.

                        </p>
                        <img src="../img/AndrewTate.avif" alt="Kale man met tattoo steekt sigaar aan">
                    </div>
                    <div class="asahbi">
                        <h3>Basile Van Hootegem</h3>
                        <p> Hallo, ik ben Basile, een gedreven softwareontwikkelaar in opleiding. Mijn passie ligt bij het oplossen van complexe problemen en het creëren van innovatieve oplossingen. 
                            Met een scherp oog voor detail heb ik al indrukwekkende webapplicaties en softwareprototypes ontwikkeld. 
                            Ik ben voortdurend op zoek naar nieuwe uitdagingen en heb een diepe nieuwsgierigheid naar de nieuwste technologieën.</p>
                        <img src="../img/Donald_Trump.webp" alt="oranje man met blond haar danst">
                    </div>
                    <div class="asahbi">
                        <h3>Ritserd Vansteenland</h3>
                        <p> Hallo daar, ik ben Ritserd, en mijn passie ligt in de wereld van cybersecurity. 
                            Als toegewijde IT-student ben ik gefascineerd door het beschermen van digitale ecosystemen tegen dreigingen en aanvallen. 
                            Mijn diepgaande begrip van beveiligingsprotocollen stelt me in staat om kwetsbaarheden te identificeren en op te lossen. 
                            Met mijn proactieve benadering van beveiliging en constante alertheid werk ik toe naar een veelbelovende carrière als cybersecurity-expert.</p>
                        <img src="../img/Nelson_Mandela.jpg" alt="Zwarte man met grijs haar">
                    </div>
                </div>
        </section>
        </div>`
        }
    }
});
