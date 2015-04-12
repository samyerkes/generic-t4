$(document).ready(function(){
    $('span[class^=currentbranch]').each(function() {
      var linkToChange = $(this).children('a');
      $(linkToChange).closest('li').prepend(linkToChange);
      $(this).parent('li').addClass('active');
      $(this).remove();
    });
    $("#mobile-nav").mmenu({
        "header": {
            "title": "Menu",
            "add": true,
            "update": true
        }
    });
});

$(window).resize(function() {
    if ($("#mobile-nav").hasClass("mm-opened") === true ) {
        $( "#mobile-nav" ).trigger( "close.mm" );
    }
});

$(document).ready(function(){
    $(".video").fitVids();
});

$(document).ready(function () {

    (function ($) {

        $('#filter').keyup(function () {

            var rex = new RegExp($(this).val(), 'i');
            $('.searchable .listing').hide();
            $('.searchable .listing').filter(function () {
                return rex.test($(this).text());
            }).show();

        })

    }(jQuery));

});

$(document).ready(function(){

    var searchBtn = $('.search-toggle');
    var search = $('.search-container');

    $(search).removeClass('active');

    $(searchBtn).click(function(e) {
        e.preventDefault();
        $(search).toggleClass('active');
    })

});