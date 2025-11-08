import './About.css';

function About() {
  return (
    <div className='about-container'>
      <section className="secao-sobre">
        <h2>SOBRE</h2>
        <div>
          Este projeto nasceu da paixão dos desenvolvedores por animais de estimação e pelo desejo de trazer mais acessibilidade a informações relacionadas a saúde dos animais, facilitando a visualização de vacinas, informações e consultas médicas que antes só eram acessíveis por meio de papel carteirinhas de vacinação e registros do próprio veterinário.
          Agora, com um único site, o tutor é capaz de registrar informações de seu pet e ter acesso a um chatbot que funciona 24 horas por dia, que ajuda a compartilhar conhecimentos sobre os cuidados adequados sobre animais de estimação.
        </div>

        <h2>O PROCESSO DE DESENVOLVIMENTO</h2>
        <div>
          Para a construção do front-end, foi utilizada a linguagem React com Typescript no Visual Studio Code, permitindo um desenvolvimento dinâmico e em tempo real entre a dupla. Antes do processo de escrever o código, se realizou todo um levantamento de requisitos e análise mercadológica para entender porque e como o software deveria ser desenvolvido, se comparado com produtos semelhantes do mercado.
          No código, os principais elementos do front-end foram componentizados, permitindo a criação de um código limpo e dividido por trechos. O chatbot criado foi uma API do Gemini.
        </div>
      </section>

      <section className="secao-devs">
        <h2>OS DEVS</h2>
        <div className="devs-container">

          <div className="dev-card">
            <h3>DIANA</h3>
            <p>
              Aluna do sexto semestre de Sistemas de Informação da FGP, programou as páginas (em Typescript e CSS) <b>diário pet</b> e <b>como cuidar de seu pet</b>, auxiliando também na documentação e planejamento do projeto em detalhes. Apaixonada por livros e jogos, em sua vida profissional almeja o desenvolvimento full-stack.
            </p>
          </div>

          <div className="dev-card">
            <h3>WILLI</h3>
            <p>
              Aluno do sexto semestre de Sistemas de Informação da FGP, programou as páginas (em Typescript e CSS) <b>home</b>, <b>sobre</b> e implementou a API do chatbot, também garantindo a funcionalidade e dinamicidade do site em diferentes dispositivos. Apaixonado por seus cachorros e esposa, na vida profissional busca atingir o desenvolvimento full-stack.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;