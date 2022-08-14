import React from 'react';
import './Login.css';
import Topo from '../../components/Topo';
import Formulario from '../../components/Formulario';


function Login() {
  return (
    <div className="corpo">
      <Topo label="Versão 2022.08.01" />
      <Formulario />
    </div>
  );

}

export default Login;
