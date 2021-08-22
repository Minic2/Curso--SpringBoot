// Call the dataTables jQuery plugin
$(document).ready(function() {
//
});

async function iniciarSesion(){
        let datos = {};

            datos.email = document.getElementById('txtEmail').value;
            datos.password = document.getElementById('txtPassword').value;






      const request = await fetch('api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });

        const respuesta = await request.json();


       if(respuesta[0]!= "FAIL"){
            localStorage.token = respuesta[0];
            localStorage.email = datos.email;
            localStorage.userName = respuesta[1];
            window.location.href = 'usuarios.html'

        }else{
            alert("No se encuentra registrado")


        }





}
