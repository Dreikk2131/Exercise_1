import './find-hotel-number.scss';

export function findHotelNumber(){
    $(".find-hotel-number__exit-date").click(function(){
        var myDatepicker = $('.calendar__date-input').datepicker().data('datepicker');
        myDatepicker.show();
    })
}
