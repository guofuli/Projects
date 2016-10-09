 $(function() {
        $('.input-expense').hide();
        $('input[name="optionsRadios"]').click(function(event) {
            $value = $(this).val();
            if ($value == 'free') {
                $('.input-expense').hide();
            } else {
                $('.input-expense').show();
            }
        });

    })