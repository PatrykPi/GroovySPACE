(function ()
{
        const imagesSources = ["images/instruments-mic.jpg",
                         "images/instruments-guitar.jpg",
                         "images/instruments-drums.jpg",
                         "images/instruments-keyboard.jpg",
                         "images/instruments-speakers.jpg"],
          
          headings = ["Mikrofon Mozos MKIT-900PRO",
                    "Gitara Yamaha Pacifica 112V ",
                    "Perkusja Gretsch Catalina Club Jazz 18",
                    "Keyboard Casio CT-S200 BK",
                    "Marshall Code 25W"],
          
          paragraphs = [
                        "Mikrofon ma znakomity biegunowy wzorzec kardioidalny, wysoką moc wyjściową, niski szum własny i dokładne nagrywanie nawet najbardziej subtelnego dźwięku.</br></br>Idealny zwłaszcza dla studiów nagraniowych, stacji radiowych, występów scenicznych i wokalistów.",
                        "Magnesy Alico V stosowane są zarówno w przystawkach jednocewkowych (single-col), jak i w przetwornikach humbucker, dostarczając czyste, jasne brzmienie, ze świetną projekcją, które na pewno nie zaniknie w muzyce całego zespołu.</br></br>Funkcja Coil Cap na tylnej przystawce humbucker zapewnia szeroki zakres możliwości brzmieniowych, od ciężkiego distortion, aż po przejrzyste brzmienie pojedynczej przystawki jednocewkowej (single-coil).",
                        "Gretsch Catalina Club to połączenie tradycji i klasyki ze współczesnymi rozwiązaniami sprzętowymi. Korpusy wykonane z mahoniu (7 warstw drewna) z klasycznymi krawędziami 30 stopni dają bardzo ciepłe brzmienie z samego korpusu. To właśnie rodzaj krawędzi oraz mahoniowy materiał zapewniły temu zestawowi sławę. Na obręczach tomów i werbla zastosowano potrójnie gięte obręcze Triple Flanged 1,6mm, które maksymalnie otwierają i ocieplają brzmienie.",
                        "Posiadający 61 klawiszy i wygodny uchwyt do noszenia model CT-S200 zapewnia wspaniałe doznania muzyczne zarówno w domu, w studiu, jaki w drodze. Dzięki Trybowi Dance Music nawet początkujący muzycy będą mogli tworzyć wspaniałą muzykę taneczną. Urządzenie można podłączyć do darmowej aplikacji Chordana Play for Keyboard oraz do komputera przez port USB.",
                        "W pełni programowalny i oferujący sto edytowalnych programów! CODE łączy w sobie autentyczne brzmienia wzmacniaczy i kolumn Marshall z zestawem profesjonalnych efektów. Wśród efektów znajdują się między innymi: kompresor, klasyczne przestery typu Stompbox, kilka chorusów oraz efekty typu Delay i Reverb."],
          
          buttons = document.querySelectorAll(".instruments__button"),
          image = document.querySelector('.instruments__main-photo'),
          heading = document.querySelector('.instruments__heading'),
          paragraph = document.querySelector('.instruments__paragraph');
    
          function activate (e){
              let currentInstrumentNumber = parseInt(e.target.dataset.instrumentNumber) - 1;
              
              buttons.forEach(button => {
                  button.classList.remove('instruments__button--active');
              });
              
              buttons[currentInstrumentNumber].classList.add('instruments__button--active');
              image.src = imagesSources[currentInstrumentNumber];
              heading.innerText = headings[currentInstrumentNumber];
              paragraph.innerHTML = paragraphs[currentInstrumentNumber];
          }
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => activate(e), false);
    });
}());
