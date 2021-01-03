
jQuery(function ($) {

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function () {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        // Check all animatables and animate them if necessary
        $animatables.each(function (i) {
            var $animatable = $(this);

            // Items that are "above the fold"
            if (($animatable.offset().top + $animatable.height()) < offset) {
                // Item previously wasn't marked as "above the fold": mark it now
                if (!$animatable.hasClass('animate-in')) {
                    let sentences = document.querySelectorAll('.sentence');
                    let characterCount = 0;

                    for (let i = 0; i < sentences.length; i++) {
                        let sentence = sentences[i];
                        let newContent = '';

                        // go through all characters of the sentence
                        for (let j = 0; j < sentence.textContent.length; j++) {
                            let substring = sentence.textContent.substr(j, 1);
                            // if we have a character, wrap it
                            if (substring !== " ") {
                                newContent += `<span style="--animation-order: ${characterCount + 1};">${substring}</span>`;
                            } else {
                                newContent += substring;
                            }
                            characterCount++;
                        }
                        sentence.innerHTML = newContent;
                    }

                    $animatable.removeClass('animate-out').css('top', $animatable.css('top')).addClass('animate-in');
                }

            }

            // Items that are "below the fold"
            else if (($animatable.offset().top + $animatable.height()) > offset) {
                // Item previously wasn't marked as "below the fold": mark it now
                if ($animatable.hasClass('animate-in')) {
                    $animatable.removeClass('animate-in').css('top', $animatable.css('top')).addClass('animate-out');
                }

            }

        });

    };


    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});

