// Call the dataTables jQuery plugin
$(document).ready(function() {
   cargarUsuarios();
   document.getElementById("userName").innerHTML = localStorage.userName ;
  $('#usuarios').DataTable();
});

async function cargarUsuarios(){


      const request = await fetch('api/usuarios', {
        method: 'GET',
        headers: {
                                      'Accept': 'application/json',
                                      'Content-Type': 'application/json',
                                      'Authorization':localStorage.token
                                    }

      });

      const usuarios = await request.json();

      let listadoHtml = '';
            for (let usuario of usuarios){
            let telefono = usuario.telefono == null ? '-' : usuario.telefono;
             let botonEliminar = '<a href="#"  onclick = "eliminarUsuario('+usuario.id+')" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a>';
             let usuarioHtml = '<tr><td>'+usuario.id+'</td><td>'+usuario.nombre+' '+usuario.apellido+'</td><td>'+usuario.email+'</td><td>'+telefono+'</td><td>'+botonEliminar+'</td></tr>';
              listadoHtml += usuarioHtml;
            }
      document.querySelector('#usuarios tbody').outerHTML = listadoHtml;
      console.log(usuarios);


}
async function getHeaders(){

    return {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json',
                     'Authorization':localStorage.token
                   }
}
async function eliminarUsuario(id){
        if(!confirm("Desea eliminar este usuario")){
            return;
        }
      const request = await fetch('api/usuario/'+id, {
        method: 'DELETE',
        headers: getHeaders()

      });


     location.reload()


}