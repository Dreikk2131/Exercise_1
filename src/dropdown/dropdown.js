import './dropdown.scss'

export function dropdown(){
    let amount = {
        first:0,
        second:0,
        third:0
    }

    let amountOver = 0;

    $(".dropdown__value.first").text(amount.first);
    $(".dropdown__value.second").text(amount.second);
    $(".dropdown__value.third").text(amount.third);

    $(".dropdown__operations_minus").attr("disabled", "disabled");

    //Шаблон по уменьшению переменных
    function minus(a){
        amount[a] -=1;
        $(".dropdown__value." + a).text(amount[a]);
        if(amount[a]<=0){
            $(".dropdown__operations_minus." + a).attr("disabled", "disabled");
        }
    }

    //Шаблон по увеличению переменных
    function plus(b){
        amount[b] += 1;
        $(".dropdown__operations_minus." + b).removeAttr("disabled");
        $(".dropdown__value." + b).text(amount[b]);
    }

    //Увеличение количества взрослых
    $(".dropdown__operations_minus.first").click(function(){
        minus("first");
        
    })

    //Увеличение количества взрослых
    $(".dropdown__operations_plus.first").click(function(){
        plus("first");
        
    })

    //Увеличение количества детей
    $(".dropdown__operations_minus.second").click(function(){
        minus("second");
    })

    //Увеличение количества детей
    $(".dropdown__operations_plus.second").click(function(){
        plus("second");
    })

    //Увеличение количества малышей
    $(".dropdown__operations_minus.third").click(function(){
        minus("third");
    })

    //Увеличение количества малышей
    $(".dropdown__operations_plus.third").click(function(){
        plus("third");
    })



//Кнопки гостевого dropdown

    //Появление блока выбора номеров или людей
    $(".dropdown__article").click(function(){
        let hidden = $(".dropdown__field-types-people").attr("hidden");
        if(hidden == "hidden"){
            $(".dropdown__field-types-people").removeAttr("hidden");
        } else {
            $(".dropdown__field-types-people").attr("hidden", "true");
        }
        
    })

    //Кнопка очистки поля
    $(".dropdown__button-clear").click(function(){
        amount.third = 0;
        amount.second = 0;
        amount.first = 0;
        $(".dropdown__operations_minus").attr("disabled", "disabled");
        $(".dropdown__value.first").text(amount.first);
        $(".dropdown__value.second").text(amount.second);
        $(".dropdown__value.third").text(amount.third);
        $(".dropdown__common-num-people").text("Сколько гостей");
    })

    //Кнопка применение выбранного количества человек
    $(".dropdown__button-apply").click(function(){
        amountOver = amount.first + amount.second + amount.third;
        let remain = amountOver%10;
        if(amountOver == 0){
            $(".dropdown__common-num-people").text("Сколько гостей");
        }
        else if(amountOver>10 && amountOver<15){
            $(".dropdown__common-num-people").text(amountOver + " гостей");
        }
        else if(remain<2){
            $(".dropdown__common-num-people").text(amountOver + " гость");
        } else if (remain<5){
            $(".dropdown__common-num-people").text(amountOver + " гостя");
        } else {
            $(".dropdown__common-num-people").text(amountOver + " гостей");
        }
        
    })

//Исчезновение поля выбора при нажатии "Применить"
    $(".dropdown__button-apply").click(function(){
        $(".dropdown__field-types-people").attr("hidden", "true");
    })

//Появление и исчезновение кнопки "очистить"
    $(".dropdown__operations_plus").click(function(){
        $(".dropdown__button-clear").addClass("dropdown__button-visible");
    });
    $(".dropdown__operations_minus").click(function(){
        let sumPeople=0;
        sumPeople = amount.first + amount.second + amount.third;
        if(sumPeople==0){
            $(".dropdown__button-clear").removeClass("dropdown__button-visible");
        }
    })
    $(".dropdown__button-clear").click(function(){
        $(".dropdown__button-clear").removeClass("dropdown__button-visible");
    })

    


//Dropdown кнопки номеров
    //Кнопка очистки поля
    $(".dropdown__but-clear").click(function(){
        amount.third = 0;
        amount.second = 0;
        amount.first = 0;
        $(".dropdown__operations_minus").attr("disabled", "disabled");
        $(".dropdown__value.first").text(amount.first);
        $(".dropdown__value.second").text(amount.second);
        $(".dropdown__value.third").text(amount.third);
        $(".dropdown__common-num-people").text("");
    })


    //Появление и исчезновение кнопки "очистить"
    $(".dropdown__operations_plus").click(function(){
        $(".dropdown__but-clear").addClass("dropdown__button-visible");
    });
    $(".dropdown__operations_minus").click(function(){
        let sumPeople=0;
        sumPeople = amount.first + amount.second + amount.third;
        if(sumPeople==0){
            $(".dropdown__but-clear").removeClass("dropdown__button-visible");
        }
    })
    $(".dropdown__but-clear").click(function(){
        $(".dropdown__but-clear").removeClass("dropdown__button-visible");
    })



   


    //Кнопка применение выбранного количества человек
    $(".dropdown__but-apply").click(function(){
        $(".dropdown__common-num-people").text("");
        let masName = [[" спален, ", " спальня, ", " спальни, "], [" кроватей, ", " кровать, ", " кровати, "], [" ванных комнат", " ванная комната", " ванные комнаты"]];
        let amountGuest = [];
        for(let key in amount){
            amountGuest.push(amount[key]);
        }

        $(".dropdown__common-num-people").find(".first").remove();
        for(let i = 0; i<amountGuest.length; i++){
            let room = amountGuest[i]%10;
            if(room == 0){
                $(".dropdown__common-num-people").text("");
            }
            else if(room>10 && room<15){
                $(".dropdown__common-num-people").append(amountGuest[i] + masName[i][0]);
            }
            else if(room<2){
                $(".dropdown__common-num-people").append(amountGuest[i] + masName[i][1]);
            } else if (room<5){
                $(".dropdown__common-num-people").append(amountGuest[i] + masName[i][2]);
            } else {
                $(".dropdown__common-num-people").append(amountGuest[i] + masName[i][0]);
            }  
        }
        
    })

    $(".dropdown__but-apply").click(function(){
        $(".dropdown__field-types-people").attr("hidden", "true");
    })

}


