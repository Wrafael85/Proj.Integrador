import React from "react";
import "./PetCare.css";

const PetCare: React.FC = () => {
  return (
    <main className="conteudo-principal main-with-sidebar">
      <div className="petcare-container">
        <div className="card petcare-card">
          <h2>Como cuidar do seu pet?</h2>
          
          <div className="petcare-content">
            {/* Seção Cachorros */}
            <section className="petcare-section">
              <h3 className="petcare-subtitle">🐕 Cachorros</h3>
              <p className="petcare-text">
                Além de comprar rações de qualidade de fontes confiáveis, é importante manter seu cachorro 
                vacinado contra doenças como raiva, cinomose, parvovirose, através de vacinas como a V8 e a V10. 
                Para evitar pulgas e carrapatos, a cada 35 dias pode-se dar medicamentos específicos contra pragas, 
                evitando doenças como a do carrapato. Também é importante manter seu amigo anualmente vermifugado, 
                já que tem o hábito de se alimentar de outras coisas além da ração.
              </p>
            </section>

            {/* Seção Gatos */}
            <section className="petcare-section">
              <h3 className="petcare-subtitle">🐈 Gatos</h3>
              <p className="petcare-text">
                Além de comprar rações de qualidade de fontes confiáveis, é importante manter seu gato 
                vacinado contra doenças como raiva, FIV e FeLV, que podem ser mortais para seu felino. 
                Anualmente, é importante dar a vacina V5 e de raiva, mantendo seu amigo de quatro patas 
                protegidos. Se possível, é essencial que seu gato não tenha acesso à rua, evitando 
                atropelamentos, ataques e até mesmo predação à fauna selvagem. Além do mais, a vermifugação 
                anual é recomendada.
              </p>
            </section>

            {/* Seção Animais Exóticos */}
            <section className="petcare-section">
              <h3 className="petcare-subtitle">🐹 Animais Exóticos</h3>
              <p className="petcare-text">
                Cada pet exótico tem sua própria exigência. Roedores, como porquinhos da índia, coelhos, 
                ferrets e chinchilas são semelhantes a cães e gatos, precisando de castração e vacinação. 
                Répteis necessitam de uma alimentação diferenciada, e aves precisam ser cuidadas com muita atenção.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PetCare;