import "../../node_modules/air-datepicker/dist/css/datepicker.min.css";
import "air-datepicker/dist/js/datepicker";
import "./calendar.scss";

export function calendarOneField(){
    //Инициализация календаря на скрытом элементе
    $(".calendar__one-field").datepicker({
        classes:"window-size",
        multipleDates: 2,
        clearButton: true,
        multipleDatesSeparator:" - ",
        dateFormat:"dd M",
        navTitles: {
            days: 'MM yyyy'
        },
        prevHtml:'<div class=datepicker__arrow><span class=datepicker__arrow-prev></span></div>',
        nextHtml:'<div class=datepicker__arrow><span class=datepicker__arrow-next></span></div>'
    });
    //Доступ к экземпляру плагина
    let myDatepicker = $('.calendar__one-field').datepicker().data('datepicker');

    //Вставка кнопки "Применить"
    $(".datepicker--buttons").append("<input type = button value=Применить class= date-picker__button-accept />");
    
    //Функционал кнопки "Очистить"
    $(".datepicker--button").click(function(){
        $(".calendar__one-field").val("ДД.ММ.ГГГГ");
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