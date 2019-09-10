import "./find-hotel-number.scss";

export function findHotelNumber(){
    $(".find-hotel-number__exit-date").click(function(){
        let myDatepicker = $(".calendar__date-input").datepicker().data("datepicker");
        myDatepicker.show();
    })
}
