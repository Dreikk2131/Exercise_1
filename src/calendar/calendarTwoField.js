import "../../node_modules/air-datepicker/dist/css/datepicker.min.css";
import "air-datepicker/dist/js/datepicker";
import "./calendar.scss";

export function calendarTwoField(){
    $(".calendar__date-input").datepicker({
        multipleDates: 2,
        clearButton: true,
        navTitles: {
            days: 'MM yyyy'
        },
        prevHtml:'<div class=datepicker__arrow><span class=datepicker__arrow-prev></span></div>',
        nextHtml:'<div class=datepicker__arrow><span class=datepicker__arrow-next></span></div>',
        onSelect: function onSelect(formDate,date,inst){
            let options = {
                day: "numeric",
                month: "numeric",
                year: "numeric"
            }
            let d = date[0] - date[1];
            if(date[0]){
                let o = date[0].toLocaleString("ru", options);
                $(".arrive-block__arrive-date").val(o);
            }

//Распределение чисел от меньшего к большему по input
            if(d<0){
                let o = date[0].toLocaleString("ru", options);
                $(".arrive-block__arrive-date").val(o);
                let a = date[1].toLocaleString("ru", options); 
                $(".arrive-block__exit-date").val(a);
            } else if(d>0){
                let a = date[1].toLocaleString("ru", options);
                $(".arrive-block__arrive-date").val(a);
                let o = date[0].toLocaleString("ru", options);
                $(".arrive-block__exit-date").val(o);
            }
            
        }
    });
    //Доступ к экземпляру плагина
    let myDatepicker = $('.calendar__date-input').datepicker().data('datepicker');

    //Вставка кнопки "Применить"
    $(".datepicker--buttons").append("<input type = button value=Применить class= date-picker__button-accept />");
    
    //Функционал кнопки "Очистить"
    $(".datepicker--button").click(function(){
        $(".arrive-block__arrive-date").val("ДД.ММ.ГГГГ");
        $(".arrive-block__exit-date").val("ДД.ММ.ГГГГ");
    });

    //Функционал кнопки "Применить"
    $(".date-picker__button-accept").click(function(){
        myDatepicker.hide();
    
    });

    
    //Установка background выбранному периоду дат
    $(".datepicker--days.datepicker--body").click(function(){
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

    })
}