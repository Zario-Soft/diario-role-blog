import './routes.css';
import StickyHeader from "src/components/StickyHeader";
import { DiarioThemeProvider } from "src/global-style";

export default function ErrorPage() {
  return <DiarioThemeProvider>
    <StickyHeader hideMenu />
    <div className='main'>
      <h1>Ops!</h1>
      <p>Página não encontrada!</p>
      <a href='/'>Clique aqui para voltar</a>
    </div>
  </DiarioThemeProvider>
}