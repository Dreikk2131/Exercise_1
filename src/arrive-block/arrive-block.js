import "./arrive-block.scss";

export function arriveBlock(){
    $(".arrive-block__exit-date").click(function(){
        let myDatepicker = $(".calendar__date-input").datepicker().data("datepicker");
        myDatepicker.show();
    })
}