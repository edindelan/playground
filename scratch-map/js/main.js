$(document).ready(function () {
    var map = $('#map');

    var countries = ['Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia', 'Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia', 'Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia', 'Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia', 'Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia', 'Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia', 'Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia', 'Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia', 'Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia', 'Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia', 'Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia', 'Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia', 'Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia', 'Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia', 'Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia', 'Spain', 'Germany', 'Thailand', 'Italy', 'Maroco', 'Australia',
        'Thailand', 'Italy', 'Maroco', 'Australia'];

    countries.forEach(function (country, index) {
        map.append('<div class="country ' + country + '">' +
            '<span class="country-name country-name-1">' + country +'</span>' +
            '<span class="country-name country-name-2">' + country +'</span>' +
            '</div>');
    });

    function onScratchDown(e) {
        var elm = $(e.currentTarget).parent().find('.country-name-1').hide();
     }

    var options = {
        size        : 8,          // The size of the brush/scratch.
        bg          : '#000',  // Background (image path or hex color).
        fg          : '#151414',  // Foreground (image path or hex color).
        realtime    : true,       // Calculates percentage in realitime.
        scratchDown : onScratchDown,       // Set scratchDown callback.
        scratchUp   : null,       // Set scratchUp callback.
        scratchMove : null,       // Set scratcMove callback.
        cursor      : 'url("images/coin.png") 5 5, default' // Set cursor
    };

    $('.country').wScratchPad(options);
 });