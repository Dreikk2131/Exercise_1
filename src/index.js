import _ from "lodash";
import "./style.scss";
import "./buttons/button.scss";


import {calendarTwoField} from "./calendar/calendarTwoField";
import {calendarOneField} from "./calendar/calendarOneField";
import { dropdown } from "./dropdown/dropdown";
import "./find-hotel-number/find-hotel-number";
import {arriveBlock} from "./arrive-block/arrive-block";
import "./reserve/reserve";
import {header} from "./header/header";
import "./first-page/first-page";
import "./footer/footer";

$(document).ready(function(){
    calendarTwoField();
    calendarOneField();
    dropdown();
    header();
    arriveBlock();
})



