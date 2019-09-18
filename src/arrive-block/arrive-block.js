import "./arrive-block.scss";

export function arriveBlock(){
    //Вызов календаря из инпутов "Прибытие" и "Выезд"
    $(".arrive-block__exit-date").click(function(){
        let myDatepicker = $(".calendar__date-input").datepicker().data("datepicker");
        myDatepicker.show();
    })
    $(".arrive-block__arrive-date").click(function(){
        let myDatepicker = $(".calendar__date-input").datepicker().data("datepicker");
        myDatepicker.show();
    })
}