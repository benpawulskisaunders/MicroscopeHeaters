//CUSTOM FUNCTIONS//

// jQuery animated scroll for menu
$(function () {
    $('#primary-menu a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
                return false;
            }
        }
    });
});

// initiate slideshow
$(function () {
    $('#ei-slider').eislideshow({
        easing: 'easeOutExpo',
        titleeasing: 'easeOutExpo',
        titlespeed: 1200
    });
});

//Toggle accordion with navbar
function OpenZeiss() {
    if ($("#collapseOne").hasClass("in")) {
        return;
    }
    else {
        document.getElementById("Zeiss-anchor").click();
    }
};

function OpenLeica() {
    if ($("#collapseTwo").hasClass("in")) {
        return;
    }
    else {
        document.getElementById("Leica-anchor").click();
    }
};

function OpenOlympus() {
    if ($("#collapseThree").hasClass("in")) {
        return;
    }
    else {
        document.getElementById("Olympus-anchor").click();
    }
};

function OpenNikon() {
    if ($("#collapseFive").hasClass("in")) {
        return;
    }
    else {
        document.getElementById("Nikon-anchor").click();
    }
};

function OpenThirdParty() {
    if ($("#collapseSix").hasClass("in")) {
        return;
    }
    else {
        document.getElementById("ThirdParty-anchor").click();
    }
};

function OpenHeatedInserts() {
    if ($("#collapseSeven").hasClass("in")) {
        return;
    }
    else {
        document.getElementById("HeatedInserts-anchor").click();
    }
};

function OpenGas() {
    if ($("#collapseEight").hasClass("in")) {
        return;
    }
    else {
        document.getElementById("Gas-anchor").click();
    }
};

function OpenVibFree() {
    if ($("#collapseNine").hasClass("in")) {
        return;
    }
    else {
        document.getElementById("VibFree-anchor").click();
    }
};



