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
            if(title_page === "Asahbi Cruise-Caribbean"){
                project_title.textContent = "Discover the Caribbean!"
                title_1.textContent = "Bahamas"
                title_2.textContent = "Jamaica"
                content.textContent = "Enjoy paradisiacal beaches, crystal clear waters and a relaxing atmosphere in the Bahamas. Discover the colorful coral reefs while snorkeling, get to know the local culture and taste the delicious Caribbean cuisine."
                content_2.textContent = "Explore Jamaica's vibrant culture, known for reggae music, beautiful waterfalls and friendly locals. Take an adventurous excursion to Dunn's River Falls and enjoy the relaxed atmosphere on the beaches."
                afsluiten.textContent = "Be enchanted by the beauty of the Caribbean. Book now and experience an unforgettable cruise full of sun, sea and adventure!"
            } else if (title_page === "Asahbi Cruise-Middellandsezee"){
                project_title.textContent = "Explore the beautiful Mediterranean!"
                title_1.textContent = "Greece"
                title_2.textContent = "Italy"
                content.textContent = "Discover the historic charm of Greece with its ancient ruins, whitewashed buildings and azure waters. Visit iconic places such as Athens, Santorini and Mykonos on your Mediterranean cruise."
                content_2.textContent = "Be enchanted by the beauty of Italy with its ancient cities, art treasures and delicious cuisine. Explore the romantic canals of Venice, admire the beautiful Amalfi Coast and enjoy the cultural riches of Rome."
                afsluiten.textContent = "Experience the magic of the Mediterranean on a cruise full of culture, history and breathtaking landscapes. Book now for an unforgettable trip!"
            } else if (title_page === "Asahbi Cruise-Alaska"){
                project_title.textContent = "Experience the magic of an Alaska cruise!"
                title_1.textContent = "Alaska Cruise"
                content.textContent = "Step aboard our luxury cruise and be enchanted by the pristine beauty of Alaska. Cruise past majestic glaciers, admire breathtaking scenery and experience unique wildlife encounters, all from the comfort of your cruise boat."
            }

        } else {
            vakanties.textContent = "vakanties"
            talen.textContent = 'Taal ▾'

            console.log('Taal ingesteld op Nederlands');
            if(title_page === "Asahbi Cruise-Caribbean"){
                project_title.textContent = "Ontdek de Caribbean!"
                title_1.textContent = "Bahamas"
                title_2.textContent = "Jamaica"
                content.textContent = "Geniet van paradijselijke stranden, kristalhelder water en een ontspannen sfeer in de Bahamas. Ontdek de kleurrijke koraalriffen tijdens het snorkelen, maak kennis met de lokale cultuur en proef de heerlijke Caribische keuken."
                content_2.textContent = "Verken de levendige cultuur van Jamaica, bekend om reggaemuziek, prachtige watervallen en vriendelijke locals. Maak een avontuurlijke excursie naar Dunn's River Falls en geniet van de relaxte sfeer op de stranden."
                afsluiten.textContent = "Laat je betoveren door de schoonheid van de Caribbean. Boek nu en beleef een onvergetelijke cruise vol zon, zee en avontuur!"
        
            }else if (title_page === "Asahbi Cruise-Middellandsezee"){
                project_title.textContent = "Verken de prachtige Middellandse Zee!"
                title_1.textContent = "Griekenland"
                title_2.textContent = "Italië"
                content.textContent = "Ontdek de historische charme van Griekenland met zijn oude ruïnes, witgekalkte gebouwen en azuurblauwe wateren. Bezoek iconische plaatsen zoals Athene, Santorini en Mykonos tijdens je cruise door de Middellandse Zee."
                content_2.textContent = "Laat je betoveren door de schoonheid van Italië met zijn eeuwenoude steden, kunstschatten en heerlijke keuken. Verken de romantische kanalen van Venetië, bewonder de prachtige kust van Amalfi en geniet van de culturele rijkdom van Rome."
                afsluiten.textContent = "Ervaar de magie van de Middellandse Zee tijdens een cruise vol cultuur, geschiedenis en adembenemende landschappen. Boek nu voor een onvergetelijke reis!"     

            }else if (title_page === "Asahbi Cruise-Alaska"){
                project_title.textContent = "Ervaar de magie van een cruise in Alaska!"
                title_1.textContent = "Alaska Cruise"
                content.textContent = "Stap aan boord van onze luxe cruise en laat je betoveren door de ongerepte schoonheid van Alaska. Vaar langs majestueuze gletsjers, bewonder het adembenemende landschap en ervaar de unieke wildlife-ontmoetingen, allemaal vanaf het comfort van je cruiseboot."
            }
        }

    }

});