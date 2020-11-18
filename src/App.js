import './App.css';
import React, { Component } from 'react';
//import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';
import firebase from './Settings/ConfigFirebase.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      producto:{
        idproducto:"",
        nombre:"",
        proveedor:"",
        tipo:""
      },
      lista:[],
      desactivado:false,
    };
  }
  
  componentDidMount(){
    firebase.database().ref('MenuReact').on('value', snapshot=> {
      let productosLista=[];
      snapshot.forEach(row=>{
          productosLista.push({
            idproducto:row.key,
            nombre:row.val().nombre,
            proveedor:row.val().proveedor,
            tipo:row.val().tipo
          })
      })
      this.setState({
        ...this.state,
        lista:productosLista
      })
    });
  }


  guardarCambios=(e)=>{
    this.setState({ 
      ...this.state,
      producto:{
      ...this.state.producto,  
      [e.target.name]: e.target.value
      } 
      //nombre:e.target.value 
    });
  }
  
  eliminar=(id)=>{

    // firebase.database().ref('Alumnos/' + id).set(null).then(() => {
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'error',
    //     title: 'Eliminado',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    // });

    const temporal = this.state.lista.filter(a=>a.idproducto!==id)
    this.setState({
      ...this.state,
      lista:temporal
    })
  }

  modificar=(id)=>{
    const temporal = this.state.lista.find(a=>a.idproducto===id);
    this.setState({
      ...this.state,
      producto:{
        idproducto:temporal.idproducto,
        nombre:temporal.nombre,
        proveedor:temporal.proveedor,
        tipo:temporal.tipo
      },
      desactivado:true
    })
  }
  enviar=(e)=>{
    e.preventDefault();

    const {idproducto,nombre, proveedor, tipo} = this.state.producto;
      
    const vacios = (idproducto.length===0 && nombre.length===0 && proveedor.length===0 && tipo.length===0) || tipo==="selecciona" 

    if(!vacios){

      // firebase.database().ref('Alumnos/' + matricula).update(this.state.alumno).then(() => {
      //   Swal.fire({
      //     position: 'center',
      //     icon: 'success',
      //     title: 'Alumno agregado',
      //     showConfirmButton: false,
      //     timer: 1500
      //   })
      // });


      
      
      let temporal = this.state.lista;

      if(this.state.desactivado===true){
        temporal= temporal.filter(a=>a.idproducto!==idproducto)
      }

      this.setState({
        ...this.state,
        lista:[...temporal,this.state.producto],
        producto:{
          idproducto:"",
          nombre:"",
          proveedor:"",
          tipo:""
        },
        desactivado:false
      })
    }
    else{
      // Swal.fire({
      //   position: 'center',
      //   icon: 'error',
      //   title: 'Llena todos los campos',
      //   showConfirmButton: false,
      //   timer: 1500
      // })
      // return;
    }
    
  }
  
  render() {
    
    return (
      <div className="App">
        <Header/>
        <div className="Containers">
          <Formulario
              enviar={this.enviar}
              guardarCambios={this.guardarCambios}
              producto={this.state.producto}
              desactivado={this.state.desactivado}
          />
          <div className="resul">
          <h2>Datos Generales</h2></div>
          <Listado
            lista={this.state.lista}
            eliminar={this.eliminar}
            modificar={this.modificar}
          />
        </div>
      </div>
    )
  }
}

export default App;