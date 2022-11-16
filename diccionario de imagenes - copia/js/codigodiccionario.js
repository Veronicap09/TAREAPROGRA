$(document).ready(function (){
    $(".foto").click(function(){
        $(".descripcion").slideToggle("slow")

    })
    $(function(){
        $(".elemento").click(function(){
            $(".elemento").removeClass("resaltado");
            $(this).addClass("resaltado")
        })
    })
    $("#txtbuscar").on("keyup",function(){
        let valor=$(this).val().toLowerCase();
        $(".elemento").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(valor)>-1)
        })
        
    })
})

