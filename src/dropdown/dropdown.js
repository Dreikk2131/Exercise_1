import './dropdown.scss'

export function dropdown(){
    let amount = {
        people:0,
        children:0,
        baby:0
    }

    let amountOver = 0;

    $(".dropdown__value.people").text(amount.people);
    $(".dropdown__value.children").text(amount.children);
    $(".dropdown__value.baby").text(amount.baby);

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
    $(".dropdown__operations_minus.people").click(function(){
        minus("people");
        
    })

    //Увеличение количества взрослых
    $(".dropdown__operations_plus.people").click(function(){
        plus("people");
        
    })

    //Увеличение количества детей
    $(".dropdown__operations_minus.children").click(function(){
        minus("children");
    })

    //Увеличение количества детей
    $(".dropdown__operations_plus.children").click(function(){
        plus("children");
    })

    //Увеличение количества малышей
    $(".dropdown__operations_minus.baby").click(function(){
        minus("baby");
    })

    //Увеличение количества малышей
    $(".dropdown__operations_plus.baby").click(function(){
        plus("baby");
    })

    $(".dropdown__button-clear").click(function(){
        amount.baby = 0;
        amount.children = 0;
        amount.people = 0;
        $(".dropdown__value.people").text(amount.people);
        $(".dropdown__value.children").text(amount.children);
        $(".dropdown__value.baby").text(amount.baby);
        $(".dropdown__common-num-people").text("Сколько гостей");
    })

    $(".dropdown__button-apply").click(function(){
        amountOver = amount.people + amount.children + amount.baby;
        $(".dropdown__common-num-people").text(amountOver + " гостей");
    })

    amountOver = amountBaby + amountChildren + amountPeople;
    
}
