document.addEventListener('DOMContentLoaded', function () {
    var talen = document.getElementById('talen');
    var project_title = document.getElementById('project_title');
    var title_1 = document.getElementById('title_1')
    var title_2 = document.getElementById('title_2')
    var content = document.getElementById('content');
    var content_2 = document.getElementById('content_2');
    var afsluiten = document.getElementById('afsluit')
    var vakanties = document.getElementById('vakanties')
    // Functie om cookie in te stellen
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
        var title_page = document.title;
        if (taalCode === 'en') {
            vakanties.textContent = "holidays"
            talen.textContent = "Language ▾"

            console.log('Taal ingesteld op Engels');
            if(title_page === "Asahbi Airline-Rusland"){
                project_title.textContent = "Welcome to Russia!"
                title_1.textContent = "Moscow"
                title_2.textContent = "St. Petersburg"
                content.textContent = "Moscow, the capital of Russia, is a city steeped in history and culture. Some highlights include Red Square, the Kremlin and St. Basil's Cathedral. Don't forget to explore the famous Trans-Siberian Railway and enjoy Russian cuisine in local restaurants."
                content_2.textContent = "Sint-Petersburg, ook wel het 'Venetië van het Noorden' genoemd, staat bekend om zijn prachtige grachten en indrukwekkende architectuur. Breng een bezoek aan de Hermitage, de Peter-en-Paulvesting en geniet van een wandeling langs de Nevski Prospekt. De stad biedt een rijke culturele ervaring en adembenemende bezienswaardigheden."
                afsluiten.textContent = "photo of saint petersburg St. Petersburg Saint Petersburg, also known as the 'Venice of the North', is known for its beautiful canals and impressive architecture. Visit the Hermitage, the Peter and Paul Fortress and enjoy a walk along Nevsky Prospekt. The city offers a rich cultural experience and breathtaking sights.Both cities have their unique charm and contribute to the diverse beauty of Russia. Whether you are interested in history, art, or just want to enjoy the atmosphere, Russia has something for everyone. Have fun planning your trip!"
            } else if (title_page === "Asahbi Airline-Spanje"){
                project_title.textContent = "Welcome to Spain"
                title_1.textContent = "Barcelona"
                title_2.textContent = "Madrid"
                content.textContent = "Barcelona, ​​the vibrant city on the Mediterranean Sea, is known for its architectural masterpieces by Gaudí, including the Sagrada Família and Park Güell. Explore the lively Ramblas, taste delicious tapas and enjoy Barceloneta beach."
                content_2.textContent = "Madrid, the capital of Spain, breathes culture and history. Visit the Royal Palace, wander through the lush Retiro Gardens and admire works of art at the world-famous Prado Museum. Enjoy the lively atmosphere of the Plaza Mayor and taste authentic Spanish dishes."
                afsluiten.textContent = "Both cities have their own unique character and contribute to the vibrant beauty of Spain. Whether you are interested in art, history or just want to relax under the Spanish sun, Spain has something for everyone. ¡Disfruta de tus vacaciones!"
            } else if (title_page === "Asahbi Airline-Ukraine"){
                project_title.textContent = "Welcome to Ukraine!"
                title_1.textContent = "Kiev"
                title_2.textContent = "Lviv"
                content.textContent = "Kiev, the capital of Ukraine, is a city steeped in history and culture. Some highlights include Independence Square, the Golden Gate and St. Sophia's Cathedral. Don't forget to taste local cuisine in traditional Ukrainian restaurants."
                content_2.textContent = "Lviv, a city in western Ukraine, is known for its charming old town and colorful architecture. Visit Rynok Square, Lviv High Castle and enjoy the cozy atmosphere in local cafes. The city offers a unique mix of history and modernity."
                afsluiten.textContent = "Both cities have their own unique charm and contribute to the diverse beauty of Ukraine. Whether you are interested in history, art, or just want to enjoy the atmosphere, Ukraine has something for everyone. Have fun planning your trip!"
            }

        } else {
            vakanties.textContent = "vakanties"
            talen.textContent = 'Taal ▾'

            console.log('Taal ingesteld op Nederlands');
            if(title_page === "Asahbi Airline-Rusland"){
                project_title.textContent = "Welkom in Rusland!" 
                title_1.textContent = "Moskou"
                title_2.textContent = "Sint-Petersburg"
                content.textContent = "Moskou, de hoofdstad van Rusland, is een stad doordrenkt van geschiedenis en cultuur. Enkele hoogtepunten zijn het Rode Plein, het Kremlin en de Basiliuskathedraal. Vergeet niet om de beroemde Trans-Siberische spoorlijn te verkennen en te genieten van de Russische keuken in lokale restaurants."
                content_2.textContent = "Sint-Petersburg, ook wel het 'Venetië van het Noorden' genoemd, staat bekend om zijn prachtige grachten en indrukwekkende architectuur. Breng een bezoek aan de Hermitage, de Peter-en-Paulvesting en geniet van een wandeling langs de Nevski Prospekt. De stad biedt een rijke culturele ervaring en adembenemende bezienswaardigheden."
                afsluiten.textContent = "Beide steden hebben hun unieke charme en dragen bij aan de diverse schoonheid van Rusland. Of je nu geïnteresseerd bent in geschiedenis, kunst, of gewoon wilt genieten van de sfeer, Rusland heeft voor elk wat wils. Veel plezier met het plannen van je reis!"
        
            }else if (title_page === "Asahbi Airline-Spanje"){
                project_title.textContent = "Welkom in Spanje"
                title_1.textContent = "Barcelona"
                title_2.textContent = "Madrid"
                content.textContent = "Barcelona, de bruisende stad aan de Middellandse Zee, staat bekend om zijn architectonische meesterwerken van Gaudí, waaronder de Sagrada Família en Park Güell. Verken de levendige Ramblas, proef heerlijke tapas en geniet van het strand van Barceloneta."
                content_2.textContent = "Madrid, de hoofdstad van Spanje, ademt cultuur en geschiedenis. Bezoek het Koninklijk Paleis, dwal door de weelderige Retiro-tuinen en bewonder kunstwerken in het wereldberoemde Prado Museum. Geniet van de levendige sfeer op de Plaza Mayor en proef authentieke Spaanse gerechten."
                afsluiten.textContent = "Beide steden hebben hun eigen unieke karakter en dragen bij aan de levendige schoonheid van Spanje. Of je nu geïnteresseerd bent in kunst, geschiedenis of gewoon wilt ontspannen onder de Spaanse zon, Spanje heeft voor elk wat wils. ¡Disfruta de tus vacaciones!"
            }else if (title_page === "Asahbi Airline-Ukraine"){
                project_title.textContent = "Welkom in Oekraïne!"
                title_1.textContent = "Kiev"
                title_2.textContent = "Lviv"
                content.textContent = "Kiev, de hoofdstad van Oekraïne, is een stad doordrenkt van geschiedenis en cultuur. Enkele hoogtepunten zijn het Onafhankelijkheidsplein, de Gouden Poort en de Sint-Sofiakathedraal. Vergeet niet om de lokale keuken te proeven in traditionele Oekraïense restaurants."
                content_2.textContent = "Lviv, een stad in het westen van Oekraïne, staat bekend om zijn charmante oude stad en kleurrijke architectuur. Breng een bezoek aan het Rynok-plein, het Lviv High Castle en geniet van de gezellige sfeer in de lokale cafés. De stad biedt een unieke mix van geschiedenis en moderniteit."
                afsluiten.textContent = "Beide steden hebben hun eigen unieke charme en dragen bij aan de diverse schoonheid van Oekraïne. Of je nu geïnteresseerd bent in geschiedenis, kunst, of gewoon wilt genieten van de sfeer, Oekraïne heeft voor elk wat wils. Veel plezier met het plannen van je reis!"
            }
        }

    }

});