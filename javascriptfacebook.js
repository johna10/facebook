$(document).ready(function(){
    $("#email").mouseenter(function(){
        $(this).css({"background":"red"})
    })
    $("#thirdbasediv").validate({
        rules:{
            emaill:{
                required:true,
                email:true
            }
        }
        
    })
})