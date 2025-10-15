import "./Home.css";

export default function Home() {
    return (
        <main className="conteudo-principal main-with-sidebar">
            <section className="secao-info">
                <div className="card o-que-e">
                    <h2>O QUE É?</h2>
                    <p>
                        MEU DIARIO PET É SEU MAIS NOVO ESPAÇO VIRTUAL DE GERENCIAMENTO DE
                        ANIMAIS DE ESTIMAÇÃO. CONSULTAS, VACINAS, HISTÓRICO, TUDO DISPONÍVEL
                        COM UM SIMPLES CLIQUE.
                    </p>
                    <p>
                        CADASTRE GRATUITAMENTE QUANTOS ANIMAIS QUISER. RECEBA DICAS E
                        NOTÍCIAS DE COMO CUIDAR MELHOR DO SEU PET.
                    </p>
                </div>

                <div className="card seus-pets">
                    <h2>SEUS PETS</h2>
                    <div className="lista-pets">
                        <div className="pet-item">
                            <span className="pet-icone cat-icon" />
                            <div className="pet-detalhes">
                                <h3>ALFREDO</h3>
                                <a href="#">INFORMAÇÕES</a><br>
                                </br>
                                <a href="#">VACINAS</a><br></br>
                                <a href="#">REGISTROS</a>
                            </div>
                        </div>

                        <div className="pet-item">
                            <span className="pet-icone dog-icon" />
                            <div className="pet-detalhes">
                                <h3>VALENTINA</h3>
                                <a href="#">INFORMAÇÕES</a><br></br>
                                <a href="#">VACINAS</a><br></br>
                                <a href="#">REGISTROS</a><br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Uncomment and use these sections if needed*/
            <section className="secao-extras">
                <div className="card noticias">
                    <h2>ÚLTIMAS NOTÍCIAS</h2>
                </div>
                <div className="card produtos">
                    <h2>PRODUTOS</h2>
                </div>
            </section>
            };
        </main>
    
    );
}


