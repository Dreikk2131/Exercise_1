import './dropdown.scss'

export function dropdown(){
    let amount = 0;
    $(".dropdown__value").text(amount);
    $(".dropdown__operations_minus").attr("disabled", "disabled");


    //Уменьшение переменной "amount"
    $(".dropdown__operations_minus").click(function(){
        amount -=1;
        $(".dropdown__value").text(amount);
        if(amount<=0){
            $(".dropdown__operations_minus").attr("disabled", "disabled");
        }
    })

    //Увеличение переменной "amount"
    $(".dropdown__operations_plus").click(function(){
        amount = amount +1; 
        $(".dropdown__operations_minus").removeAttr("disabled");
        $(".dropdown__value").text(amount);
    })

    
}
