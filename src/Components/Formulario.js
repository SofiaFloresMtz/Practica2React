import '../App.css';

const Formulario = (props) => {
    return ( 
        <div className="Form">
        <form onSubmit={props.enviar}>
        <div>
          <label htmlFor="idProducto">Código</label>
          <input
            type="text"
            placeholder="1234"
            onChange={props.guardarCambios}
            value={props.producto.idproducto}
            name="idproducto"
            disabled={props.desactivado}
          />
        </div>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            onChange={props.guardarCambios}
            value={props.producto.nombre}
            name="nombre"
          />
        </div>
        <div>
          <label htmlFor="proveedor">Proveedor</label>
          <input
            type="text"
            placeholder="Ej. Fruteria Flores"
            onChange={props.guardarCambios}
            value={props.producto.proveedor}
            name="proveedor"
          />
        </div>
        <div>
          <label htmlFor="tipo">Tipo</label>
          <select name="tipo" value={props.producto.tipo} onChange={props.guardarCambios}>
            <option value="selecciona">- Selecciona -</option>
            <option value="Extranjero">Extranjero</option>
            <option value="Local">Local</option>
            <option value="Interior">Interior</option>
          </select>
        </div>
        <button>Enviar</button>
        </form>
      </div>
    );
}
 
export default Formulario;
