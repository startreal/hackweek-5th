(function () {
    var pages = [].slice.call(document.querySelectorAll('.pages > .page'));
    var currentPage = 0;
    var $header = document.getElementById('header');

    var revealerOpts = {
        // the layers are the elements that move from the sides
        nmbLayers: 3,
        // bg color of each layer
        bgcolor: ['#0092DD', '#fff', '#3E3A35'],
        // effect classname
        effect: 'anim--effect-3',
        onStart: function (direction) {
            // next page gets class page--animate-[direction]
            var nextPage;

            if (currentPage === pages.length - 1) {
                nextPage = 0;
            } else {
                nextPage = currentPage + 1;
            }

            if (nextPage !== 0) {
                classie.add($header, 'hide');
            }

            classie.add(pages[nextPage], 'page--animate-' + direction);
        },
        onEnd: function () {
            // remove class page--animate-[direction] from next page
            var nextPage;

            if (currentPage === pages.length - 1) {
                nextPage = 0;
            } else {
                nextPage = currentPage + 1;
            }

            nextPage.className = 'page';
        }
    };
    var revealer = new Revealer(revealerOpts);

    // clicking the page nav buttons
    // document.querySelector('button.pagenav__button--top').addEventListener('click', function() { reveal('top'); });
    // document.querySelector('button.pagenav__button--left').addEventListener('click', function() { reveal('left'); });
    // document.querySelector('button.pagenav__button--right').addEventListener('click', function() { reveal('right'); });
    document.querySelector('button.pagenav__button--bottom').addEventListener('click', function() { reveal('bottom'); });
    // document.querySelector('button.pagenav__button--cornertopleft').addEventListener('click', function() { reveal('cornertopleft'); });
    // document.querySelector('button.pagenav__button--cornertopright').addEventListener('click', function() { reveal('cornertopright'); });
    // document.querySelector('button.pagenav__button--cornerbottomleft').addEventListener('click', function() { reveal('cornerbottomleft'); });
    // document.querySelector('button.pagenav__button--cornerbottomright').addEventListener('click', function() { reveal('cornerbottomright'); });

    // triggers the effect by calling instance.reveal(direction, callbackTime, callbackFn)
    function reveal(direction) {
        var callbackTime = 750,
            callbackFn = function() {
                var nextPage;

                if (currentPage === pages.length - 1) {
                    nextPage = 0;
                } else {
                    nextPage = currentPage + 1;
                }

                classie.remove(pages[currentPage], 'page--current');
                classie.add(pages[nextPage], 'page--current');

                currentPage = nextPage;

                if (currentPage === 0) {
                    classie.remove($header, 'hide');
                }
            };

        revealer.reveal(direction, callbackTime, callbackFn);
    }

    var carousel = document.querySelector('.carousel');

    var flkty = new Flickity(carousel, {
        // options
        autoPlay: true,
        wrapAround: true,
        cellAlign: 'center',
        initialIndex: 0,
        setGallerySize: false,
        pageDots: false,
        arrowShape: {
            x0: 10,
            x1: 60, y1: 50,
            x2: 70, y2: 40,
            x3: 30
        }
    });
})();
