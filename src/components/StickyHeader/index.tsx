import { pageRoutes } from 'src/routes';
import * as Styled from './styles'

interface StickyHeaderProps {
    hideMenu?:boolean,
}

function StickyHeader(props: StickyHeaderProps) {
    window.onscroll = () => {
        const header = document.getElementById("myHeader");
        const sticky = header?.offsetTop ?? -1;
        if (window.pageYOffset > sticky) {
            header?.classList.add("sticky");
        } else {
            header?.classList.remove("sticky");
        }
    }

    return <>
        <Styled.Container>
            <img src='/logo_panel.png' alt="Diário de Rolê - Logo do blog" />
            {(props.hideMenu === undefined || props.hideMenu === false) && <div className="header" id="myHeader">
                <nav>
                    <a href="/#sobre">Sobre</a> |&nbsp; 
                    <a href={pageRoutes.FORMULARIO}>Contato</a> |&nbsp;
                    <a href="/#parceria">Parcerias</a> |&nbsp;
                    <a href="/#indicacoes">Indicações</a> |&nbsp;
                    <a href="/#videos">Videos</a>
                </nav>
            </div>}
        </Styled.Container>
    </>
}

export default StickyHeader;
