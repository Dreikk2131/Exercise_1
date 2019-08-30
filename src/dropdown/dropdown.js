import './dropdown.scss'

export function dropdown(){

    let amountPeople = 0;
    let amountChildren = 0;
    let amountBaby = 0;
    let amountOver = 0;

    $(".dropdown__value.people").text(amountPeople);
    $(".dropdown__value.children").text(amountChildren);
    $(".dropdown__value.baby").text(amountBaby);

    $(".dropdown__operations_minus").attr("disabled", "disabled");

    //Уменьшение переменной "amount"
    $(".dropdown__operations_minus.people").click(function(){
        amountPeople -=1;
        $(".dropdown__value.people").text(amountPeople);
        if(amountPeople<=0){
            $(".dropdown__operations_minus.people").attr("disabled", "disabled");
        }
    })

    //Увеличение переменной "amount"
    $(".dropdown__operations_plus.people").click(function(){
        amountPeople = amountPeople +1; 
        $(".dropdown__operations_minus.people").removeAttr("disabled");
        $(".dropdown__value.people").text(amountPeople);
    })

    $(".dropdown__operations_minus.children").click(function(){
        amountChildren -=1;
        $(".dropdown__value.children").text(amountChildren);
        if(amountChildren<=0){
            $(".dropdown__operations_minus.children").attr("disabled", "disabled");
        }
    })

    $(".dropdown__operations_plus.children").click(function(){
        amountChildren +=1; 
        $(".dropdown__operations_minus.children").removeAttr("disabled");
        $(".dropdown__value.children").text(amountChildren);
    })

    $(".dropdown__operations_minus.baby").click(function(){
        amountBaby -=1;
        $(".dropdown__value.baby").text(amountBaby);
        if(amountBaby<=0){
            $(".dropdown__operations_minus.baby").attr("disabled", "disabled");
        }
    })

    $(".dropdown__operations_plus.baby").click(function(){
        amountBaby +=1; 
        $(".dropdown__operations_minus.baby").removeAttr("disabled");
        $(".dropdown__value.baby").text(amountBaby);
    })

    $(".dropdown__button-clear").click(function(){
        amountPeople = 0;
        amountChildren = 0;
        amountBaby = 0;
        $(".dropdown__value.people").text(amountPeople);
        $(".dropdown__value.children").text(amountChildren);
        $(".dropdown__value.baby").text(amountBaby);
        $(".dropdown__common-num-people").text("Сколько гостей");
    })

    $(".dropdown__button-apply").click(function(){
        amountOver = amountBaby + amountChildren + amountPeople;
        $(".dropdown__common-num-people").text(amountOver + " гостей");
    })

    amountOver = amountBaby + amountChildren + amountPeople;
    
}
