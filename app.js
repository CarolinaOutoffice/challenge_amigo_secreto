// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let participantes=[];

function agregarAmigo()
{
    console.log("Ya entre a la funcion");
    let nombre_amigo= document.getElementById('amigo').value;
    // console.log(`Nombre amigo: ${nombre_amigo}`);
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    

    if (!nombre_amigo) 
    {
        alert("El nombre no puede estar vacío.");
        return;
    }else if (!regex.test(nombre_amigo)) 
        {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }else if (participantes.includes(nombre_amigo)) {
        alert("Este nombre ya está registrado.");
        return;
    }else{
        participantes.push(nombre_amigo);
        let li=document.createElement("li");
        li.textContent=nombre_amigo;
        document.getElementById("listaAmigos").appendChild(li);
        document.getElementById("amigo").value = "";
        
    };
}

function elegirAmigo()
{
   let indice=Math.floor(Math.random()* participantes.length);
   return participantes[indice];
 
}


function sortearAmigo(){
    let ul=document.getElementById("resultado");
    let li =document.createElement("li");
    li.textContent=elegirAmigo(participantes);
    ul.appendChild(li)
}



