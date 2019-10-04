
import _ from "lodash";
import "./style.scss";
import "./buttons/button.scss";

import {calendarOneField} from "./calendar/calendarOneField";
import {findHotelNumber} from"./find-hotel-number/find-hotel-number";
import "./reserve/reserve";
import {header} from "./header/header";
import "./first-page/first-page";
import "./footer/footer";
import { slider } from "./buttons/slider/slider";

$(document).ready(function(){
    calendarOneField();
    findHotelNumber();
    slider();
    header();

    
})



