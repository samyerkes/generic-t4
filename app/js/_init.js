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