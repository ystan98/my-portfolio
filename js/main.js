(function($) {
    $(document).ready(function() {
        $.jScrollability([
            {
                'selector': '.slide-in-l1',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'left': {
                        'start': -50,
                        'end': -20,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.slide-in-t1',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'top': {
                        'start': 50,
                        'end': 0,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.slide-in-r1',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'left': {
                        'start': 60,
                        'end': 20,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.reveal-demo1',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'top': {
                        'start': 70,
                        'end': 0,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.text-wrapper',
                'start': function($el) { return $el.offset().top + $el.height() },
                'end': 'parent',
                'fn': function($el,pcnt) {
                    var $spans = $el.find('span');
                    var point = Math.floor(($spans.length+1) * pcnt);
                    $spans.each(function(i,el) {
                        var $span = $(el);
                        if (i < point) {
                            $span.addClass('visible');
                        } else {
                            $span.removeClass('visible');
                        }
                    });
                }
            }
        ]);
    });
})(jQuery);