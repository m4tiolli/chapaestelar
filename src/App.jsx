/* eslint-disable react/no-unescaped-entities */
import { useRef, useEffect } from "react";
import "./App.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import txtbranco from './assets/txtbranco.jpg'
import iconbranco from './assets/iconbranco.png'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  const somos = useRef(null);
  const propostas = useRef(null);
  const campeonatos = useRef(null);
  const concursos = useRef(null);
  const junina = useRef(null);
  const halloween = useRef(null);
  const gincanas = useRef(null);
  const uniao = useRef(null);
  const integracoes = useRef(null);
  const campanhas = useRef(null);
  const feira = useRef(null);
  const auloes = useRef(null);
  const gruposestudo = useRef(null);
  const paisagismo = useRef(null);
  const jardinagem = useRef(null);
  const bartolove = useRef(null);

  const handleSomos = () => {
    somos.current.scrollIntoView({ behavior: "smooth" });
  };
  const handlePropostas = () => {
    propostas.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleCampeonatos = () => {
    campeonatos.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleConcursos = () => {
    concursos.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleJunina = () => {
    junina.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleHalloween = () => {
    halloween.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleGincanas = () => {
    gincanas.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleUniao = () => {
    uniao.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleIntegracoes = () => {
    integracoes.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleCampanhas = () => {
    campanhas.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleFeira = () => {
    feira.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleAuloes = () => {
    auloes.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleGruposestudo = () => {
    gruposestudo.current.scrollIntoView({ behavior: "smooth" });
  };
  const handlePaisagismo = () => {
    paisagismo.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleJardinagem = () => {
    jardinagem.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleBartolove = () => {
    bartolove.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div id="container">
      <div id="initial">
        <img className="imginitial" src={txtbranco} />
        <h1 className="titleinitial">estelar, uma nova constelação</h1>
        <AiOutlineArrowDown
          className="scroll"
          size={"2em"}
          color={"#fff"}
          onClick={handleSomos}
        />
      </div>
      <div id="somos" ref={somos}>
        <h1 className="title" data-aos="fade-up">

          Quem somos
        </h1>
        <p className="text" data-aos="fade-up">

          &nbsp;A chapa "Estelar, uma nova constelação" é formada por estudantes
          que têm interesse em representar os alunos perante a escola,
          promovendo a participação, interatividade e ações para fazer a
          diferença no ambiente acadêmico.
        </p>
        <img
          data-aos="fade-up"
          src={iconbranco}
          className="imgleft"
          alt=""
        />
        <AiOutlineArrowDown
          className="scroll"
          size={"2em"}
          color={"#fff"}
          onClick={handlePropostas}
        />
      </div>

      <div id="propostas" >
        <div id="a">
          <h1> Propostas </h1>
        </div>
        <div id="campeonatos" ref={propostas}>
          <h2 className="subtitle" data-aos="fade-left">

            Campeonatos esportivos
          </h2>
          <p className="text" data-aos="fade-left">

            &nbsp;Ter eventos esportivos bimestrais para os alunos, com regras
            pré-estabelecidas, é importante para combater o sedentarismo,
            estimular a integração entre as turmas, melhorar o convívio social,
            melhorar a coordenação motora e ajudar no combate ao estresse e à
            ansiedade.
          </p>
          <p className="text" data-aos="fade-left">

            <b> Esportes </b>
          </p>
          <p className="text" data-aos="fade-left">

            &nbsp;Futebol, vôlei, basquetebol, queimada, tênis de mesa, xadrez e
            damas.
          </p>
          <AiOutlineArrowDown
            className="scroll"
            size={"2em"}
            color={"#fff"}
            onClick={handleConcursos}
          />
        </div>
        <div id="concursos"  ref={concursos} data-aos="fade-right">
          <h2 className="subtitle" data-aos="fade-right">
            Concurso de talentos (com o apoio da Bartolove)
          </h2>
          <p className="text" data-aos="fade-right">
            &nbsp;O evento tem como proposta descobrir novos talentos, valorizar a
            capacidade criativa e as habilidades artísticas dos alunos e
            proporcionar momentos de lazer para os alunos.
          </p>
          <AiOutlineArrowDown
            className="scroll"
            size={"2em"}
            color={"#fff"}
            onClick={handleJunina}
          />
        </div>
        <div id="junina"  ref={junina}>
          <h2 className="subtitle" data-aos="fade-left"> Festa junina </h2>
          <p className="text" data-aos="fade-left">
            &nbsp;A festa junina é uma oportunidade para as pessoas celebrarem as
            tradições e os costumes do país, além de promover a integração
            social entre as comunidades. Durante a festa, as pessoas se vestem
            com roupas típicas, dançam quadrilha e comem comidas típicas. O
            evento também é uma ótima oportunidade para arrecadação de fundos
            para a escola.
          </p>
          <AiOutlineArrowDown
            className="scroll"
            size={"2em"}
            color={"#fff"}
            onClick={handleHalloween}
          />
        </div>
        <div id="halloween" ref={halloween} data-aos="fade-right">
          <h2 className="subtitle" data-aos="fade-right"> Halloween </h2>
          <p className="text" data-aos="fade-right">
            &nbsp;O Halloween é uma celebração cultural que oferece muitas
            oportunidades para as pessoas se divertirem, mostrarem sua
            criatividade e se conectarem com suas raízes culturais.
          </p>
          <p className="text" data-aos="fade-right">
            <b> Atividades do Halloween </b>
          </p>
          <ul className="text" data-aos="fade-right">
            <li> Assistir filmes com temas de terror (com pipoca); </li>
            <li> Confeccionar fantasias e decoração; </li>
            <li> Organizar um Concurso de melhor fantasia. </li>
          </ul>
          <AiOutlineArrowDown
            className="scroll"
            size={"2em"}
            color={"#fff"}
            onClick={handleBartolove}
          />
        </div>
        <div id="bartolove" ref={bartolove}>
          <h2 className="subtitle" data-aos="fade-left">

            Parceria com a Bartolove para eventos pedagógicos
          </h2>
          <p className="text" data-aos="fade-left">
            &nbsp;Ter uma parceria com a rádio bartolove é fundamental para ajuda em
            ambas das partes.
          </p>
          <AiOutlineArrowDown
            className="scroll"
            size={"2em"}
            color={"#fff"}
            onClick={handleGincanas}
          />
        </div>
        <div id="gincanas" ref={gincanas} data-aos="fade-right">
          <h2 className="subtitle" data-aos="fade-right"> Gincanas de conhecimento </h2>
          <p className="text" data-aos="fade-right">
            &nbsp;Essa ideia busca dar estimulo ao aprendizado, desenvolver
            habilidades socioeconômicas, a integração entre os alunos,
            identificação e valorização de talentos e melhoria no desempenho
            escolar.
          </p>
          <AiOutlineArrowDown
            className="scroll"
            size={"2em"}
            color={"#fff"}
            onClick={handleUniao}
          />
        </div>
        <div id="uniao" ref={uniao}>

          <h2 className="subtitle" data-aos="fade-left"> União com chapas de outras ETECs </h2>
          <p className="text" data-aos="fade-left">
            &nbsp;Buscamos esse vínculo para melhorar o ambiente escolar. Essa união
            pode trazer novas experiências e conhecimentos entre professores e
            alunos, aprendizagem colaborativa, desenvolvimento de projetos em
            conjuntos, ampliação de recursos e um envolvimento da comunidade
            escolar. Em resumo, buscar vínculos com outras escolas pode trazer
            diversos benefícios para a instituição de ensino, possibilitando a
            troca de experiências, o desenvolvimento de projetos em conjunto, a
            promoção da cultura e diversidade, a ampliação de recursos e o
            envolvimento da comunidade escolar.
          </p>
          <AiOutlineArrowDown
            className="scroll"
            size={"2em"}
            color={"#fff"}
            onClick={handleIntegracoes}
          />
        </div>
        <div id="integracoes" ref={integracoes} data-aos="fade-right">
          <h2 className="subtitle" data-aos="fade-right"> Integrações no horário do almoço </h2>
          <p className="text" data-aos="fade-right">
            &nbsp;Essa ideia buscar melhorar o convívio social, combater o estresse
            através de jogos e brincadeiras no horário do almoço
          </p>
          <p className="text" data-aos="fade-right">
            <b> Atividades: </b>
          </p>
          <p className="text" data-aos="fade-right">
            &nbsp;Tênis de mesa, shows de rima, esportes na quadra, vídeo games,
            xadrez, damas e música.
          </p>
          <AiOutlineArrowDown
            className="scroll"
            size={"2em"}
            color={"#fff"}
            onClick={handleCampanhas}
          />
        </div>
        <div id="campanhas" ref={campanhas}>
          <h2 className="subtitle" data-aos="fade-left"> Campanhas de conscientização </h2>
          <p className="text" data-aos="fade-left">
            &nbsp;Essa ideia tem a função de alertar os alunos sobre a necessidade de
            se cuidar e se prevenir contra doenças graves. É uma forma que
            entidades do setor da saúde encontraram para reforçar o combate a
            esses males, como vários tipos de câncer, e intensificar a
            quantidade de informações e dicas para a conscientização da
            necessidade de idas frequentes ao médico e da realização de exames
            preventivos.
          </p>
          <AiOutlineArrowDown
            className="scroll"
            size={"2em"}
            color={"#fff"}
            onClick={handleFeira}
          />
        </div>
        <div id="feira" ref={feira} data-aos="fade-right">
          <h2 className="subtitle" data-aos="fade-right"> Feira cultural e ciências da natureza </h2>
          <p className="text" data-aos="fade-right">
            &nbsp;A feira cultural na escola é uma atividade que tem grande
            importância para o processo educativo dos alunos e para o
            desenvolvimento de uma cultura de valorização da diversidade
            cultural e das tradições populares. Dentre as principais razões
            pelas quais a feira cultural é importante na escola, podemos
            destacar:
          </p>
          <ol className="litext" data-aos="fade-right">
            <li data-aos="fade-right">
              &nbsp;Valorização da diversidade cultural: a feira cultural na escola
              pode ser uma oportunidade para valorizar e conhecer as diferentes
              culturas e tradições existentes no país e no mundo, promovendo o
              respeito à diversidade cultural e combatendo o preconceito e a
              discriminação.
            </li>
            <li data-aos="fade-right">
              &nbsp;Estímulo à criatividade e à inovação: a feira cultural pode ser
              uma forma de estimular a criatividade e a inovação dos alunos,
              permitindo que eles desenvolvam projetos e apresentações que
              envolvam diferentes linguagens artísticas, como música, dança,
              teatro, literatura, entre outras.
            </li>
            <li data-aos="fade-right">
              &nbsp;Integração entre os alunos: a feira cultural pode ser uma
              oportunidade para os alunos de diferentes turmas e séries se
              conhecerem melhor, interagirem de forma mais saudável e
              colaborativa e, assim, construírem laços de amizade e respeito
              mútuo.
            </li>
            <li data-aos="fade-right">
              &nbsp;Fortalecimento da identidade cultural da escola: a feira
              cultural pode ajudar a construir uma identidade cultural forte
              para a escola, valorizando suas tradições e promovendo a união da
              comunidade escolar.
            </li>
          </ol>
          <AiOutlineArrowDown
            className="scroll"
            size={"2em"}
            color={"#fff"}
            onClick={handleAuloes}
          />
        </div>
        <div id="auloes" ref={auloes}>
          <h2 className="subtitle" data-aos="fade-left"> Aulões - foco no vestibular </h2>
          <p className="text" data-aos="fade-left">
            &nbsp;Essa proposta tem o objetivo de ajudar alunos dos segundos e
            terceiros anos a aprender os conteúdos mais passados em
            vestibulares, o grêmio propõe a ideia de realizar aulas ministrados
            por alunos (que tenham estudo do tema) e professores.
          </p>
          <AiOutlineArrowDown
            className="scroll"
            size={"2em"}
            color={"#fff"}
            onClick={handleGruposestudo}
          />
        </div>
        <div id="gruposestudo" ref={gruposestudo} data-aos="fade-right">
          <h2 className="subtitle" data-aos="fade-right"> Grupos de estudo com ex alunos </h2>
          <p className="text" data-aos="fade-right">
            &nbsp;Esse grupo de estudo teria o foco de melhorar o rendimento escolar
            com alunos que teve experiências boas com vestibulares, estimulariam
            a motivação, a elucidação de dúvidas compartilhadas, a organização e
            o bom relacionamento com as pessoas.
          </p>
          <AiOutlineArrowDown
            className="scroll"
            size={"2em"}
            color={"#fff"}
            onClick={handlePaisagismo}
          />
        </div>
        <div id="paisagismo" ref={paisagismo}>
          <h2 className="subtitle" data-aos="fade-left"> Paisagismo dentro e fora da escola </h2>
          <p className="text" data-aos="fade-left">
            &nbsp;Trazer o paisagismo para a escola pode ter muitos benefícios,
            incluindo a melhora do ambiente escolar, estímulo à criatividade e
            aprendizagem, promoção de hábitos saudáveis, contribuição para o
            meio ambiente, fortalecimento da comunidade escolar e possibilidade
            de desenvolvimento de projetos interdisciplinares.
          </p>
          <AiOutlineArrowDown
            className="scroll"
            size={"2em"}
            color={"#fff"}
            onClick={handleJardinagem}
          />
        </div>
        <div id="jardinagem" ref={jardinagem} data-aos="fade-right">
          <h2 className="subtitle" data-aos="fade-right"> Grupos de jardinagem </h2>
          <p className="text" data-aos="fade-right">
            &nbsp;O grupo de jardinagem seria criado para a manutenção do projeto de
            paisagismo citado na proposta anterior e na manutenção da horta
          </p>
        </div>
        <p style={{ color: '#fff' }}>feito por Matiolli</p>
      </div>
    </div>
  );
}
