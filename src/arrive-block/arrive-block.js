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