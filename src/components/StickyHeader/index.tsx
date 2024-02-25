import * as Styled from './styles'

function StickyHeader() {
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
            <img src='/logo_panel.png' alt="Diário de Rolê - Blog" />
            <div className="header" id="myHeader">
                <nav>
                    <a href="/html/">Sobre</a> |&nbsp; 
                    <a href="/css/">Contato</a> |&nbsp;
                    <a href="/js/">Blog</a>
                </nav>
            </div>
        </Styled.Container>
    </>
}

export default StickyHeader;
