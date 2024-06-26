import * as Styled from './styles'
import Logo from '../Logo';

interface StaticFooterProps {
    spinLogo?: boolean;
}

function StaticFooter({ spinLogo }: StaticFooterProps) {
    return <Styled.Container>
        <Logo spin={spinLogo} />
        <Styled.Detail>
            <p>Diário de Rolê - 2024</p>
            <p>Todos os direitos reservados</p>
        </Styled.Detail>
        <h3>...</h3>

        <Styled.DevFooter>
            <p>2024 - Desenvolvido por <a href='https://linktr.ee/zariosoft' target='_blank' rel="noreferrer">ZarioSoft</a></p>
        </Styled.DevFooter>
    </Styled.Container>
}

export default StaticFooter;
