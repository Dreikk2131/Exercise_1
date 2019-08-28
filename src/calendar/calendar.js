import '../../node_modules/air-datepicker/dist/css/datepicker.min.css';
import '../../node_modules/air-datepicker/dist/js/datepicker.min';
import './calendar.scss';

export function calendar(){
    $('h1').css('color', 'red');
    $('.calendar__date-input').datepicker({
        multipleDates: true,
        clearButton: true
    })
}
