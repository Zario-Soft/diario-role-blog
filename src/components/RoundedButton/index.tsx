import * as Styled from './styles'
import { CSSProperties } from 'react'

interface RoundedButtonProps {
    caption: string,
    onClick?: (e: any) => void,
    style?: CSSProperties,
}

export default function RoundedButton({ style, onClick, caption }: RoundedButtonProps) {
    return <Styled.Container style={style} onClick={onClick}>
        <h5>{caption}</h5>
    </Styled.Container>
}