import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="conteudo-principal main-with-sidebar">
            <section className="secao-info">
                <div className="card o-que-e">
                    <h2>O QUE É?</h2>
                    <p>
                        Meu Diario Pet é seu mais novo espaço virtual de gerenciamento de
                        animais de estimação. Consultas, vacinas, histórico, tudo disponível
                        com um simples clique.
                    </p>
                    <p>
                        Cadastre gratuitamente quantos animais quiser. Receba dicas e
                        notícias de como cuidar melhor do seu pet.
                    </p>
                </div>

                <div className="card seus-pets">
                    <h2>SEUS PETS</h2>
                    <div className="lista-pets">
                        {/* Pet 1 - Alfredo */}
                        <div className="pet-item">
                            <span className="pet-icone dog-icon" />
                            <div className="pet-detalhes">
                                <h3>ALFREDO</h3>
                                <Link to="/pet/1/info">INFORMAÇÕES</Link><br />
                                <Link to="/pet/1/vaccines">VACINAS</Link><br />
                                <Link to="/pet/1/records">REGISTROS</Link>
                            </div>
                        </div>

                        {/* Pet 2 - Valentina */}
                        <div className="pet-item">
                            <span className="pet-icone cat-icon" />
                            <div className="pet-detalhes">
                                <h3>VALENTINA</h3>
                                <Link to="/pet/2/info">INFORMAÇÕES</Link><br />
                                <Link to="/pet/2/vaccines">VACINAS</Link><br />
                                <Link to="/pet/2/records">REGISTROS</Link>
                            </div>
                        </div>

                        {/* Link para ver todos os pets no Diário Pet */}
                        <div className="pet-item ver-todos">
                            <span className="pet-icone add-icon" />
                            <div className="pet-detalhes">
                                <h3>GERENCIAR TODOS OS PETS</h3>
                                <Link to="/petdiary" className="link-destacado">
                                    ACESSAR DIÁRIO PET COMPLETO
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seções extras */}
            <section className="secao-extras">
                <div className="card noticias">
                    <h2>ÚLTIMAS NOTÍCIAS</h2>
                    <p>Fique por dentro das novidades do mundo pet...</p>
                </div>
                <div className="card produtos">
                    <h2>PRODUTOS RECOMENDADOS</h2>
                    <p>Descubra produtos incríveis para seu pet...</p>
                </div>
            </section>
        </main>
    );
}