import React from "react";





const Contacto = () => {
     


    return(
<div>
        <h1> Contactenos </h1> 
        <label><input name="name" className="name" placeholder="Nombre" type="text" /></label>
        <label><input name="email" className="email" placeholder="Email" type="text" /></label>
        <label><input name="consulta" className="text" placeholder="Escriba su consulta" type="textarea" /></label>
        <label><input type="submit" className="btn btn-submit" value="Submit" /></label>
</div>

    )
}

export default Contacto