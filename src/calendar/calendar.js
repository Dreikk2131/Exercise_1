import '../../node_modules/air-datepicker/dist/css/datepicker.min.css';
import '../../node_modules/air-datepicker/dist/js/datepicker.min';
import './calendar.scss';

export function calendar(){
    $('.calendar__date-input').datepicker({
        multipleDates: 2,
        clearButton: true,
        onSelect: function onSelect(formDate,date){
            let options = {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric'
            }
            let d = date[0] - date[1];
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
}
