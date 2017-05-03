/*!
 * GTRW Fold; version: 0.1 build: 20170503
 * http://ghotriw.pro/
 * Copyright (c) 2017 Andrew Goncharov;
 */
(function(e){
    var methods = {
        folding : function( options ) {
            return this.each(function() {

                var selfElement = this,
                    $body = $('body'),
                    defaults = {
                        block: '.block',
                        toggle: '.block__toggle',
                        visibleCssClass: 'block_visible',
                        bind: 'click',
                        closeOutClick: true
                    },
                    settings = e.extend(defaults, options);

                $body
                    .on(settings.bind, settings.toggle, function () {
                        $(this).closest(selfElement).toggleClass(settings.visibleCssClass);
                    });

                if (settings.closeOutClick) {
                    $body
                        .on("click", function (e) {
                            if (( $(e.target).closest(selfElement).length && $(settings.block).filter('.'+settings.visibleCssClass).length > 0 )
                                ||
                                ( $(e.target).closest(selfElement).length ))  {

                            } else {
                                $(this).find('.'+settings.visibleCssClass).removeClass(settings.visibleCssClass);
                            }
                        });
                }
            })
        }
    };

    $.fn.gtrwFold = function( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.folding.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.gtrwFold' );
        }
    };
})(jQuery);
