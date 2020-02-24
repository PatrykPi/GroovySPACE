(function () {
    console.log(window.innerWidth);
    var toggler =
            {
                navToggle: document.querySelector('.mainNav__toggler'),
                nav: document.querySelector('.mainNav__list'),
                doToggle: function (e)
                    {
                        e.preventDefault();
                        e.stopPropagation();
                        this.navToggle.classList.toggle('mainNav__toggler--expanded');
                        this.nav.classList.toggle('mainNav__list--expanded');
                    },
                addHover: function ()
                    {
                        if(window.innerWidth > 720)
                            {
                                console.log("true");
                                this.nav.classList.add('mainNav__list--expanded');
                            }
                    },
                removeHover: function ()
                    {
                        if(window.innerWidth > 720)
                            {
                                console.log("true");
                                this.nav.classList.remove('mainNav__list--expanded');
                            }
                    }
            };
 
    toggler.navToggle.addEventListener('click', function (e) {toggler.doToggle(e); }, false);
    toggler.nav.addEventListener('mouseenter', function () {toggler.addHover(); }, false);
    toggler.nav.addEventListener('mouseleave', function () {toggler.removeHover(); }, false);
    
    window.addEventListener('click', function(e)
                                    {
                                        if (e.target != toggler.nav)
                                            {
                                                toggler.navToggle.classList.remove('mainNav__toggler--expanded');
                                                toggler.nav.classList.remove('mainNav__list--expanded');
                                            }
                                    }, false);
}());
