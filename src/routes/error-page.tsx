import './routes.css';
import StickyHeader from "src/components/StickyHeader";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, useThemeMode } from "src/global-style";

export default function ErrorPage() {
  const { themeMode } = useThemeMode();

  return <ThemeProvider theme={{themeMode}}>
    <GlobalStyle theme={themeMode} />
    <StickyHeader hideMenu />
    <div className='main'>
      <h1>Ops!</h1>
      <p>Página não encontrada!</p>
      <a href='/'>Clique aqui para voltar</a>
    </div>
  </ThemeProvider>;
}