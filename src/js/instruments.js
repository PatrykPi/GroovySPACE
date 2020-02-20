(function ()
{
    var imagesSources = ["images/instruments-mic.jpg",
                         "images/instruments-guitar.jpg",
                         "images/instruments-drums.jpg",
                         "images/instruments-keyboard.jpg",
                         "images/instruments-speakers.jpg"];
    
    var headings = ["Mikrofon Mozos MKIT-900PRO",
                    "Gitara Yamaha Pacifica 112V ",
                    "Perkusja Gretsch Catalina Club Jazz 18",
                    "Keyboard Casio CT-S200 BK",
                    "Marshall Code 25W"];
    
    var paragraphs = [
        "Mikrofon ma znakomity biegunowy wzorzec kardioidalny, wysoką moc wyjściową, niski szum własny i dokładne nagrywanie nawet najbardziej subtelnego dźwięku.</br></br>Idealny zwłaszcza dla studiów nagraniowych, stacji radiowych, występów scenicznych i wokalistów.",
        "Magnesy Alico V stosowane są zarówno w przystawkach jednocewkowych (single-col), jak i w przetwornikach humbucker, dostarczając czyste, jasne brzmienie, ze świetną projekcją, które na pewno nie zaniknie w muzyce całego zespołu.</br></br>Funkcja Coil Cap na tylnej przystawce humbucker zapewnia szeroki zakres możliwości brzmieniowych, od ciężkiego distortion, aż po przejrzyste brzmienie pojedynczej przystawki jednocewkowej (single-coil).",
        "Gretsch Catalina Club to połączenie tradycji i klasyki ze współczesnymi rozwiązaniami sprzętowymi. Korpusy wykonane z mahoniu (7 warstw drewna) z klasycznymi krawędziami 30 stopni dają bardzo ciepłe brzmienie z samego korpusu. To właśnie rodzaj krawędzi oraz mahoniowy materiał zapewniły temu zestawowi sławę. Na obręczach tomów i werbla zastosowano potrójnie gięte obręcze Triple Flanged 1,6mm, które maksymalnie otwierają i ocieplają brzmienie.",
        "Posiadający 61 klawiszy i wygodny uchwyt do noszenia model CT-S200 zapewnia wspaniałe doznania muzyczne zarówno w domu, w studiu, jaki w drodze. Dzięki Trybowi Dance Music nawet początkujący muzycy będą mogli tworzyć wspaniałą muzykę taneczną. Urządzenie można podłączyć do darmowej aplikacji Chordana Play for Keyboard oraz do komputera przez port USB.",
        "W pełni programowalny i oferujący sto edytowalnych programów! CODE łączy w sobie autentyczne brzmienia wzmacniaczy i kolumn Marshall z zestawem profesjonalnych efektów. Wśród efektów znajdują się między innymi: kompresor, klasyczne przestery typu Stompbox, kilka chorusów oraz efekty typu Delay i Reverb.</br></br>Aplikacja Marshall Gateway pozwala na zdalną kontrolę wzmacniacza z poziomu Androida lub iOS oraz przesyłanie audio za pośrednictwem Bluetooth."];
    
    var instruments =
            {
                micButton: document.querySelector('.instruments__button--mic'),
                guitarButton: document.querySelector('.instruments__button--guitar'),
                drumsButton: document.querySelector('.instruments__button--drums'),
                keyboardButton: document.querySelector('.instruments__button--keyboard'),
                speakersButton: document.querySelector('.instruments__button--speakers'),                
                image: document.querySelector('.instruments__main-photo'),                
                heading: document.querySelector('.instruments__heading'),                
                paragraph: document.querySelector('.instruments__paragraph'),                
                activate: function (e, instrumentNumber, imageSource, heading, paragraph)
                    {
                        e.preventDefault();
                        this.micButton.classList.remove('instruments__button--active');
                        this.guitarButton.classList.remove('instruments__button--active');
                        this.drumsButton.classList.remove('instruments__button--active');
                        this.keyboardButton.classList.remove('instruments__button--active');
                        this.speakersButton.classList.remove('instruments__button--active');
                        
                        if (instrumentNumber===0)
                            this.micButton.classList.add('instruments__button--active');
                        if (instrumentNumber===1)
                            this.guitarButton.classList.add('instruments__button--active');
                        if (instrumentNumber===2)
                            this.drumsButton.classList.add('instruments__button--active');
                        if (instrumentNumber===3)
                            this.keyboardButton.classList.add('instruments__button--active');
                        if (instrumentNumber===4)
                            this.speakersButton.classList.add('instruments__button--active');
                        
                        this.image.src = imageSource;
                        this.heading.innerText = heading;
                        this.paragraph.innerHTML = paragraph;
                    }
            };
    instruments.micButton.addEventListener('click', function (e) {instruments.activate(e, 0, imagesSources[0], headings[0], paragraphs[0]); });
    instruments.guitarButton.addEventListener('click', function (e) {instruments.activate(e, 1, imagesSources[1], headings[1], paragraphs[1]); });
    instruments.drumsButton.addEventListener('click', function (e) {instruments.activate(e, 2, imagesSources[2], headings[2], paragraphs[2]); });
    instruments.keyboardButton.addEventListener('click', function (e) {instruments.activate(e, 3, imagesSources[3], headings[3], paragraphs[3]); });
    instruments.speakersButton.addEventListener('click', function (e) {instruments.activate(e, 4, imagesSources[4], headings[4], paragraphs[4]); });
}());
