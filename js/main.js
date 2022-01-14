$(document).ready(()=>{

    let contador = 0;

    $("#agregar").click(()=>{
        let lista = $("#listaCosas").val();
        let listaTres;

        if (lista != ""){
            listaTres =  $(".textoHijo").append(
                "<div id='"+contador+"'><p class='t1'></p>"+lista+"<button class='verde ready' value='"+contador+"'>S</button><button class='rojo no' value='"+contador+"'>N</button></div>")
        }

        $(".ready").click(()=>{
            $("#tareaHecha").append(listaTres); 
        })

        $(".no").click(()=>{
            $(listaTres).empty(); 
        })
    })



    $("#agregarDos").click(()=>{
        let lista = $("#listaCosas").val();
        let listaTres;
        
        if (lista != ""){
            listaTres = $(".textoHijo2").append("<p>"+lista+"</p><button class='verde ready'>S</button><button class='rojo no'>N</button>")
            
        }

        $(".ready").click(()=>{
            $("#tareaHecha").append(listaTres); 
        })

        $(".no").click(()=>{
            $(listaTres).empty(); 
        })
    })


    

    $("#agregarTres").click(()=>{
        let lista = $("#listaCosas").val();
        let listaTres;
        
        if (lista != ""){
            listaTres = $(".textoHijo3").append("<p>"+lista+"</p><button class='verde ready'>S</button><button class='rojo no'>N</button>")
            
        }

        $(".ready").click(()=>{
            $("#tareaHecha").append(listaTres); 
        })

        $(".no").click(()=>{
            $(listaTres).empty(); 
        })
    })

})


