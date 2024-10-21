
function validarFormulario(){
    var txtNombre = document.getElementById('nombre').value;
    var txtdireccion = document.getElementById('direccion').value;
    var txttelefono = document.getElementById('telefono').value;
    var txtcorreo = document.getElementById('correo').value;
    var txtciudad = document.getElementById('ciudad').value;
    var txtedad = document.getElementById('edad').value;
    
    //Test campo obligatorio
    if(txtNombre == null || txtNombre.length == 0 ){
    alert('ERROR: debes ingresar un nombre');
    return false;
    }
    if(txtdireccion == null || txtdireccion.length == 0 ){
        alert('ERROR: debes ingresar una direccion');
        return false;
        }
        if(txttelefono == null || txtNombre.length == 0 ){
            alert('ERROR: debes ingresar un telefono');
            return false;
            }
            if(txtcorreo == null || txtcorreo.length == 0 ){
                alert('ERROR: debes ingresar un correo');
                return false;
                }
                if(txtciudad == null || txtciudad.length == 0 ){
                    alert('ERROR: debes ingresar una ciudad');
                    return false;
                    }
                    if(txtedad == null || txtedad.length == 0 ){
                        alert('ERROR: debes ingresar una edad');
                        return false;
                        }
    alert('DATOS CORRECTOS, ENVIANDO INFORMACIÓN AL SERVIDOR');
    return true;
    }
