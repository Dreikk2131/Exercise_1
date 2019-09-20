import _ from "lodash";
import "./style.scss";
import "./buttons/button.scss";


import {calendar} from "./calendar/calendar";
import { dropdown } from "./dropdown/dropdown";
import "./find-hotel-number/find-hotel-number";
import {arriveBlock} from "./arrive-block/arrive-block";
import "./reserve/reserve";
import "./header/header";

$(document).ready(function(){
    calendar();
    dropdown();
    arriveBlock();
    $(".class").click(function(){
        alert("class");
    })
    $(".bar.foo").click(function(){
        alert("bar");
    })
})



