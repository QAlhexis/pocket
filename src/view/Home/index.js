import './Home.css'
import Topo from "../../components/Topo"
import BotaoNav from '../../components/BotaoNav'

function Home() {
    return (
        <div>
            <Topo />
            <div className="container">
            <table>
                <tr>
                    <td>
                        <div className="botao-ok">
                            <BotaoNav>
                                Conferência de
                                    Entrada
                            </BotaoNav>
                        </div>
                    </td>
                    <td>
                        <div className="botao-calcelar">
                            <BotaoNav >
                                Separar Itens
                            </BotaoNav>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="botao-ok">
                            <BotaoNav>
                                Reabastecimento de Picking
                            </BotaoNav>
                        </div>
                    </td>
                    <td>
                        <div className="botao-calcelar">
                            <BotaoNav >
                                Conferir Embalaveis
                            </BotaoNav>
                        </div>
                    </td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Home