import "../../node_modules/air-datepicker/dist/css/datepicker.min.css";
import "../../node_modules/air-datepicker/dist/js/datepicker.min";
import "./calendar.scss";

export function calendar(){
    $(".calendar__date-input").datepicker({
        multipleDates: 2,
        clearButton: true,
        navTitles: {
            days: 'MM yyyy'
        },
        prevHtml:'<div class=datepicker__arrow><span class=datepicker__arrow-prev></span></div>',
        nextHtml:'<div class=datepicker__arrow><span class=datepicker__arrow-next></span></div>',
        onSelect: function onSelect(formDate,date){
            let options = {
                day: "numeric",
                month: "numeric",
                year: "numeric"
            }
            let d = date[0] - date[1];
//Распределение чисел от меньшего к большему по input
            if(d<0){
                let o = date[0].toLocaleString("ru", options);
                $(".find-hotel-number__arrive-date").val(o);
                let a = date[1].toLocaleString("ru", options); 
                $(".find-hotel-number__exit-date").val(a);
            } else if(d>0){
                let a = date[1].toLocaleString("ru", options);
                $(".find-hotel-number__arrive-date").val(a);
                let o = date[0].toLocaleString("ru", options);
                $(".find-hotel-number__exit-date").val(o);
            }
            
        }
    });
    let myDatepicker = $('.calendar__date-input').datepicker().data('datepicker');
    $(".datepicker--buttons").append("<input type = button value=Применить class= date-picker__button-accept />");

    $(".datepicker--button").click(function(){
        $(".find-hotel-number__arrive-date").val("ДД.ММ.ГГГГ");
        $(".find-hotel-number__exit-date").val("ДД.ММ.ГГГГ");
    })

    $(".date-picker__button-accept").click(function(){
        myDatepicker.hide();
    })
}
