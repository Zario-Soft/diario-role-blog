import SocialMedias from "./components/SocialMedias";
import GlobalStyle from "./global-style";
import Card from "./components/Card";
import StickyHeader from "./components/StickyHeader";
import StaticFooter from "./components/StaticFooter";
import PresentationCard from "./components/PresentationCard";
import Video from "./components/Video";
import { pageRoutes } from "./routes";
import { useNavigate } from "react-router-dom";
import Clients from "./features/clients";

function App() {
  const navigator = useNavigate();

  return <>
    <GlobalStyle />
    <StickyHeader />
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <PresentationCard
        hideButton
        id="sobre"
        key={99}
        buttonCaption="+ Assessoria"
        pictureUrl="/pres3.png"
        title="Salve galera!"
        summary={[
          "Se você caiu aqui de paraquedas, nós somos Gabi e Éro, um casal brasileiro que decidiu construir uma vida juntos na ensolarada Málaga, na Espanha.",
          "Compartilhamos o nosso dia a dia, dicas sobre a vida na Espanha, curiosidades locais e tudo o que envolve a imigração e a adaptação a um novo país.",
          "Mostramos a vida como ela é, seus luxos, perrengues, viagens e trabalho... muito trabalho!!"]}
        style={{
          maxWidth: '1200px'
        }}
        onClick={() => navigator(pageRoutes.FORMULARIO)}
      />
      <br />
      <PresentationCard
        hideButton
        id="malaga"
        key={919}
        pictureUrl="/malaga.jpg"
        pictureHeight="350px"
        pictureWidth="350px"
        title="Por que Málaga?"
        summary={[
          "Praia, mar azul, clima mediterrâneo, cultura, arte e muita animação, Málaga é tudo isso. Essa cidade espanhola que fica no sul do país, na região da Andaluzia, foi eleita a melhor do mundo para se viver para expatriados pelo Expat City Ranking de 2023.",
          "A lista é baseada em dados coletados de forma online pela pesquisa Expat Insider. Em 2023, ela foi realizada pela InterNations, que é uma comunidade global de pessoas que vivem e trabalham no exterior. Foram elas que levaram a cidade da Andaluzia à primeira posição.",
          "Malaga tem 300 dias de sol, um clima maravilhoso e único em comparação com outras cidades espanholas ou européias.",
          "O povo malaguenho é muito parecido com o brasileiro, sempre solícito, alegre e não dispensa um bom boteco para confraternizar com os amigos!"]}
        style={{
          maxWidth: '1200px',
          backgroundColor: '#BDE8FA'
        }}
        onClick={() => navigator(pageRoutes.FORMULARIO)}
      />
      <br />
      <PresentationCard
        id="como-podemos-ajudar-id"
        key={919}
        pictureUrl="/ajuda.jpeg"
        pictureHeight="350px"
        pictureWidth="350px"
        title="Como podemos te ajudar?"
        buttonCaption="+ Assessoria"
        summary={[
          "Na nossa consultoria via videochamada o objetivo é que você possa tirar as suas duvidas. Solicitamos que preencha um formulário explicando a sua situação para que possa chegar aqui mais preparado pra essa grande mudança.",
          "Com certeza esse processo vai ser mais tranquilo com informações direcionadas que te ajudarão no seu planejamento.",
          "Mas... que tipo de dúvidas vocês podem esclarecer?",
          "- Qual o melhor mês do ano pra me mudar pra Málaga?",
          "- Como funciona o processo de aluguel de imóveis na região? Vocês podem me ajudar na busca ou até mesmo visitar um imóvel por mim?",
          "- Como posso buscar trabalho? Quais as áreas de trabalho com mais vagas na região?",
          "- Quanto preciso de dinheiro pra recomeçar minha vida na Espanha?",
          "- Que tipo de visto eu preciso pra trabalhar em Málaga?",
          "- Quais as cidades indicam pra viver segundo as necessidades da nossa família?",
          "Se necessário vamos conectar você a advogados parceiros (que podem te ajudar tanto em solucionar duvidas quanto fazer algum processo burocrático), corretores de imóveis de confiança e professora de espanhol pra começar a se preparar com o idioma!",
          "",
          "* todos os serviços serão realizados mediante comprovante de pagamento enviado 24 horas antes do atendimento."]}
        style={{
          maxWidth: '1200px',
          backgroundColor: '#FAD593'
        }}
        onClick={() => navigator(pageRoutes.FORMULARIO)}
      />

      <hr />
      <br />

      <Clients />

      <hr />

      <h2 id="contato">Siga nossas redes sociais</h2>
      <SocialMedias
        instagramUrl="https://www.instagram.com/diario.derole"
        youtubeUrl="https://www.youtube.com/@diarioderole"
        tiktokUrl="https://www.tiktok.com/@diario.derole"
        size='3x' />
      <hr />
      <br />
      <h2 id="parceria">Nossas Parcerias</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Card
          key={1}
          buttonCaption="Saiba mais"
          pictureUrl="/espanol.png"
          title="Aprenda Espanhol desde já!"
          summary={["Faça aulas de castelhano falado na Espanha com a professora Gabriela Proença.",
            "Lições focadas nas suas necessidades. Aulas via google meet, podendo ser em grupo ou individuais. ",
            "Encaixe em sua rotina, com a frequência que funciona pra você. Use o cupom DIARIO2024 e ganhe uma aula experimental!"]}
          style={{
            maxWidth: '600px'
          }}
          onClick={() => window.open("https://wa.link/t94a0e", "_blank")}
        />

        <Card
          key={2}
          buttonCaption="Saiba mais"
          pictureUrl="/assessoria.jpg"
          title="Assessoria jurídica"
          summary={["Uma parceria com a advogada Beatriz Guimarães, especializada em \"extranjería\".",
            "Com nossa assessoria, iremos te ajudar em diversos trâmites burocráticos aqui na Espanha, com o respaldo de uma profissional muito competente, com vários anos de experiência.",
            "Agende sua videochamada e tire todas as suas dúvidas!"]}
          style={{
            maxWidth: '600px'
          }}
          onClick={() => navigator(pageRoutes.FORMULARIO)}
        />

      </div>

      <hr />
      <h2 id="videos">Nossos vídeos imperdíveis</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Video url="https://www.youtube.com/embed/NcXahr80JhA?si=HL96yNL6UgRNtoJG" />
        <Video url="https://www.youtube.com/embed/pyX-p7Edn2E?si=sWsjlTRoTvmKFt3a" />
        <Video url="https://www.youtube.com/embed/YL1RHrTTzJs?si=J5nF-w7aiTuhiaLg" />
      </div>

      <hr />
      <br />
    </div>
    <StaticFooter spinLogo />
  </>
}

export default App;
