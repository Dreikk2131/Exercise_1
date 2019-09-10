import _ from "lodash";
import "./style.scss";


import {calendar} from "./calendar/calendar";
import { dropdown } from "./dropdown/dropdown";
import {findHotelNumber} from "./find-hotel-number/find-hotel-number";

$(document).ready(function(){
    calendar();
    dropdown();
    findHotelNumber();
})



