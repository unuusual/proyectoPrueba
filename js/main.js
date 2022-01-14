$(document).ready(()=>{

    let contador = 0;

    $("#agregar").click(()=>{
        let lista = $("#listaCosas").val();
        let listaP1;

        if (lista != ""){
            listaP1 =  $("#tarea").append("<p>"+lista+"</p><button class='verde ready'>S</button><button class='rojo no'>N</button>")
        }

        $(".ready").click(()=>{
            $("#tareaHecha").append(listaP1); 
        })

        $(".no").click(()=>{
            $(listaP1).empty(); 
        })
    })



    $("#agregarDos").click(()=>{
        let lista = $("#listaCosas").val();
        let listaP2;
        
        if (lista != ""){
            listaP2 = $("#tarea2").append("<p>"+lista+"</p><button class='verde ready'>S</button><button class='rojo no'>N</button>")
            
        }

        $(".ready").click(()=>{
            $("#tareaHecha").append(listaP2); 
        })

        $(".no").click(()=>{
            $(listaP2).empty(); 
        })
    })




    $("#agregarTres").click(()=>{
        let lista = $("#listaCosas").val();
        let listaP3;
        
        if (lista != ""){
            listaP3 = $("#tarea3").append("<p>"+lista+"</p><button class='verde ready'>S</button><button class='rojo no'>N</button>")
            
        }

        $(".ready").click(()=>{
            $("#tareaHecha").append(listaP3); 
        })

        $(".no").click(()=>{
            $(listaP3).empty(); 
        })

    })

})

/* LA IDEA PRINCIPAL ERA HACER UN CONTADOR PARA PODER MATCHEAR EL VALOR DE LOS BOTONES, CON EL VALOR DEL DIV..

ASI AL HACER CLICK AL BOTON CON EL VALOR 1, SE ELIMINABA EL DIV CON EL VALOR 1. Y ASI NO ME ELIMINA TODO 

EJ:
listaP3 = $("#tarea3").append("<div class="'+contador+'"></div><p>"+lista+"</p><button class='verde ready'>S</button><button class='rojo no'>N</button></div>")*/


