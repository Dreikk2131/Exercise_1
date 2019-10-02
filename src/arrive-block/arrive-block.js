import "./arrive-block.scss";
import {calendarTwoField} from "../calendar/calendarTwoField";

export function arriveBlock(){
    calendarTwoField();
    //Вызов календаря из инпутов "Прибытие" и "Выезд"
    let myDatepicker = $(".calendar__date-input").datepicker().data("datepicker");
    $(".arrive-block__exit-date").click(function(){
        myDatepicker.show();
    })
    $(".arrive-block__arrive-date").click(function(){
        myDatepicker.show();
    })

    function background(){
        let i = $(".datepicker--cell.datepicker--cell-day.-selected-");
        if(i.length == 2){
            let nextEl = $(i[0]).next();
            $(i[0]).addClass("first-date");
            $(i[1]).addClass("second-date");
            while(nextEl.hasClass("-selected-")==false){
                nextEl.css("background","#ece6ff");
                nextEl = nextEl.next();

            }
        }
    }

    $(".arrive-block__arrive-date").click(function(){
        background();
    })

    $(".arrive-block__exit-date").click(function(){
        background();
    })
}