$(function(){
    function tab(oNav,oContent,oEvent){
        oContent.removeClass('active').eq(0).addClass('active')
        var aLi = oNav.children()
        aLi.each(function(index){
            $(this).on(oEvent,function(){
                aLi.removeClass('current').eq(index).addClass('current')
                oContent.removeClass('active').eq(index).addClass('active')
            })
        })
    }
    tab($('.nav'),$('.content'),'click')

})





