import './style.css';

export default function MeusPedidosPrincipal() {

    return (
        <section className='meus-pedidos-principal-container'>

            <ul>
                <li>Meu perfil</li>
                <li className='active-li'>Meus pedidos</li>
                <li>Minhas infomações</li>
                <li>Métodos de pagamento</li>
            </ul>

        </section>
    );
}