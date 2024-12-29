import * as Styled from './styles'

interface StickyHeaderProps {
    hideMenu?: boolean,
    menuItems?: {
        text: string,
        link: string
    }[]
}

function StickyHeader(props: StickyHeaderProps) {
    const menuItems = props.menuItems ?? [
        { text: 'Sobre', link: '/#sobre' },
        { text: 'Contato', link: '/#contato' },
        { text: 'Parcerias', link: '/#parceria' },
        { text: 'Videos', link: '/#videos' }
    ]

    window.onscroll = () => {
        const header = document.getElementById("myHeader");
        let sticky = header?.offsetTop ?? -1;

        if (sticky !== 0 && window.scrollY > sticky) {
            header?.classList.add("sticky");
        } else if (window.scrollY < 480) {
            header?.classList.remove("sticky");
        }
    }

    return <>
        <Styled.Container>
            <img src='/logo_panel.png' alt="Diário de Rolê - Logo do blog" />
            {!props.hideMenu && <div className="header" id="myHeader">
                <nav>
                    {menuItems.map((item, index) => <><a key={Date.now()} href={item.link}>{item.text}</a>{index === menuItems.length - 1 ? '' : ' | '}</>)}
                </nav>
            </div>
            }
        </Styled.Container>
    </>
}

export default StickyHeader;
