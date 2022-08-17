import "./index.css"
import React from 'react';
import logo from '../../img/logo.png'







function Home() {

    return (

        <body>
            <header className="header">
                <div className="headerMenu">

                    <img src={logo} width={100} heigth={100} />
                    <button className="botaoHeader">HOME</button>
                    <button className="botaoHeader">GALERIA</button>
                    <button className="botaoHeader" >CONTATO</button>

                </div>


                <div className="footHeader">


                    <button className="botaoSocial" id="bottFace" >face</button>
                    <button className="botaoSocial" id="botaoMessg">msg</button>
                    <button className="botaoSocial" id="botaoInsta">INSTA</button>


                </div>
            </header>
        </body>


    )

}



export default Home