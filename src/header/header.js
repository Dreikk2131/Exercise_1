import "./header.scss";

export function header(){
    $(document).click(function (e){ 
        let buttons = $(".main-menu__buttons"); 
        let mediaButton = $(".main-menu__media-button");
        if(mediaButton.is(e.target)){
            $(buttons).toggleClass("main-menu__buttons-display");
        } else if (!mediaButton.is(e.target)&& buttons.has(e.target).length === 0) {
			buttons.removeClass("main-menu__buttons-display"); 
        }
        
        let burgerButton = $(".main-menu__burger-background");
        let list =  $(".main-menu__list");
        if(burgerButton.is(e.target)){
            $(list).toggleClass("main-menu__list-display");
        } else if (!burgerButton.is(e.target)&& list.has(e.target).length === 0) {
			list.removeClass("main-menu__list-display"); 
        }
	});
}