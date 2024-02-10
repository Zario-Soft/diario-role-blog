import SocialMedias from "./components/SocialMedias";
import GlobalStyle from "./global";
import Card from "./components/Card";
import StickyHeader from "./components/StickyHeader";

function App() {
  return <>
    <GlobalStyle />
    <StickyHeader />

    <Card
      buttonCaption="Saiba mais"
      pictureUrl="http://i.stack.imgur.com/Dj7eP.jpg"
      title="Blog dos titulos lorem"
      summary="A partir de £ 25 por pessoa. Temas e datas pré-definidos. Pubs históricos ou locais históricos do rock. Tem uma Londres pra tudo que é gosto!"
      style={{
        maxWidth: '600px'
      }}
    />
    <SocialMedias instagram youtube facebook tiktok twitter />
    <SocialMedias instagram youtube facebook tiktok twitter />
    <SocialMedias instagram youtube facebook tiktok twitter />
    <SocialMedias instagram youtube facebook tiktok twitter />
    <SocialMedias instagram youtube facebook tiktok twitter />
    <SocialMedias instagram youtube facebook tiktok twitter />
    <SocialMedias instagram youtube facebook tiktok twitter />
    <SocialMedias instagram youtube facebook tiktok twitter />
    <SocialMedias instagram youtube facebook tiktok twitter />
    <SocialMedias instagram youtube facebook tiktok twitter />
    <SocialMedias instagram youtube facebook tiktok twitter />
    <SocialMedias instagram youtube facebook tiktok twitter />
    <SocialMedias instagram youtube facebook tiktok twitter />
    <SocialMedias instagram youtube facebook tiktok twitter />

  </>
}

export default App;