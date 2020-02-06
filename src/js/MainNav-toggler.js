(function () {
    var toggler = 
    {
    navToggle: document.querySelector('.mainNav__toggler'),
    nav: document.querySelector('.mainNav__list'),
    doToggle: function(e) 
        {
            e.preventDefault();
            this.navToggle.classList.toggle('mainNav__toggler--expanded');
            this.nav.classList.toggle('mainNav__list--expanded');
        }
    };
  toggler.navToggle.addEventListener('click', function(e) {toggler.doToggle(e); });
  toggler.nav.addEventListener('click', function(e) {toggler.doToggle(e); });
}());
