import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = (props) => {
    return ( 
        <div className="List">
        {
                    
            props.lista.length===0   
            ? <p>No hay productos</p>
            : 
        
             <Table striped bordered hover>
            <thead>
              <tr>
                <th>IdProducto</th>
                <th>Nombre</th>
                <th>Proveedor</th>
                <th>Tipo</th>
                <th></th>
                <th></th> 
              </tr>
            </thead>
              <tbody>
            {
              props.lista.map((a,index)=>
                <tr key={index}>
                    <td>{a.idproducto}</td>
                    <td>{a.nombre}</td>
                    <td>{a.proveedor}</td>
                    <td>{a.tipo}</td>
                    <td><Button onClick={()=>props.eliminar(a.idproducto)} variant="danger">Eliminar</Button></td>
                    <td><Button onClick={()=>props.modificar(a.idproducto)}variant="success">Modificar</Button></td>
                </tr>
              )
            }
              </tbody>
            </Table>
          }

          </div>
     );
}
 
export default Listado;