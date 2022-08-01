import React, { useEffect } from "react";
import axios from 'axios'
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";



function Home() {
  
  const formik = useFormik({
    initialValues: {
      email: '',
      senha: '',
    },
    onSubmit: search,
  });
  
  const { handleChange, values, handleSubmit } = formik
  const { email, senha } = values
  
  function search(values: any) {
    alert(JSON.stringify(values, null, 2));
  }
  
  function sendToCatalog() {
    navigate(`/catalogo`)
  }

  const navigate = useNavigate()
  
  return (
    <>
      <body className="login-imagem-body" style={{
        backgroundImage: 'url(https://assets.b9.com.br/wp-content/uploads/2016/10/netflix-catalogo.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '99vh',
        width: '100%',
        zIndex: 1,
      }}>

       
        <div style={{
          background: 'linear-gradient(to top, #0f0f0f 1%, transparent 40%',
          height: 'inherit',
        }}>
          <div style={{
          background: 'linear-gradient(to bottom, #0f0f0f 1%, transparent 40%',
          height: 'inherit',
        }}>

        <div className="login-container" style={{
          padding: '60px',
          zIndex: 90,
          position: 'relative',
          maxWidth: '450px',
          height: '470px',
          left: '50%',
          top: '25%',
          backgroundColor: 'rgba(0,0,0, 0.8)',
          borderRadius: '5px',
          boxSizing: 'border-box',
          transform: 'translateX(-50%)',
        }}>
          <div className="login-box">
            <h2>Entrar</h2>
            <form>
              <div className="input-box">
                <input required type={email} placeholder="E-mail" ></input>
              </div>
              <div className="input-box">
                <input required type={senha} placeholder="Senha"></input>
              </div>

              <div>
                <button onClick={sendToCatalog} className="submit">Entrar</button>
              </div>
            </form>

            <div className="support-container">
              <div className="login-remember">
                <span><input type="checkbox" style={{
                  margin: '0',
                  padding: '0',
                  height: '13px'
                }} /></span>
                <span>Lembre-se de Mim</span>
              </div>
              <div className="help">
                <a href="#">Precisa de ajuda ?</a>
              </div>
            </div>

          </div>
              
              </div>
            </div>
          </div>
        
                
                
      </body>
    </>
  );
}


export default Home
