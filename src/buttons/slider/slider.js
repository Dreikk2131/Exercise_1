require('webpack-jquery-ui/slider');
require('webpack-jquery-ui/css');

import "./slider.scss";

export function slider(){
    $( ".slider__price-output-first" ).text("2000");
    $( ".slider__price-output-second" ).text("7000");
    $(".slider__chose-price").slider(
        {
            range: true,
            min: 1000,
            max: 20000,
            step:1000,
            values: [ 2000, 7000 ],
            slide: function( event, ui ) {
                $( ".slider__price-output-first" ).text(ui.values[ 0 ]);
                $( ".slider__price-output-second" ).text(ui.values[ 1 ]);
            }
        }
    );
}
