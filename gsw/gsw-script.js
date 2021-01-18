        var switchPage = function(page) {
            $(".page").css({
                display: "none"
            });
            $(page).css({
                display: "block"
            });
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            $('.footer-button').removeClass('active');
            $(page + "Button").addClass('active');
        };
        switchPage('#home');
        $(document).ready(function() {
            $("#search-team").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $("#members-cards div").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });
        $(document).ready(function() {
            $("#search-history").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $("#history-content div").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });
        $(document).ready(function() {
            $('[data-toggle="tooltip"]').tooltip();
        });
