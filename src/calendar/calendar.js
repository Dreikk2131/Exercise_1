import '../../node_modules/air-datepicker/dist/css/datepicker.min.css';
import '../../node_modules/air-datepicker/dist/js/datepicker.min';
import './calendar.scss';

export function calendar(){
    $('h1').css('color', 'red');
    $('.calendar__date-input').datepicker({
        multipleDates: true,
        clearButton: true
    })


    var date = new Date();
    var options = {
        year: 'numeric',
        month: 'long'
    }


    alert( date.toLocaleString("ru", options) );
}
