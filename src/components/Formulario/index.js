import CampoTexto from '../CampoTexto'
import ListaSupensa from '../ListaSuspensa'
import Botao from '../Botao'
import { Link } from 'react-router-dom';

import './Formulario.css'

const Formulario = () => {

    const servidores = [
        '192.168.0.8',
        '192.168.0.2',
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <ListaSupensa label="Servidores:" itens={servidores} />
                <CampoTexto label="Usuario:" />
                <CampoTexto label="Senha:" />
                <div className='area-botao'>
                    <table>
                        <tr>
                            <td>
                                <div className="botao-ok">
                                    <Botao>
                                        <Link to={"/home"}> OK </Link>
                                    </Botao>
                                </div>
                            </td>
                            <td>
                                <div className="botao-calcelar">
                                    <Botao >
                                        Cancelar
                                    </Botao>
                                </div>
                            </td>
                        </tr>
                    </table>

                </div>


            </form>
        </section>
    )
}

export default Formulario