import { CSSProperties } from 'react'
import RoundedButton from '../RoundedButton'
import * as Styled from './styles'

interface PresentationCardProps {
    id: string,
    pictureUrl?: string,
    pictureWidth?: string,
    pictureHeight?: string,
    pictureRound?: string,
    title?: string,
    subtitle?: string,
    summary?: string[],
    buttonCaption?: string,
    onClick?: (e: any) => void,
    style?: CSSProperties,
    hideButton?:boolean,
}

export default function PresentationCard(props: PresentationCardProps) {
    return <Styled.Container style={props.style} id={props.id} >
        <Styled.LeftPanel key={`${props.id}-left-panel`}>
            <Styled.Picture
                src={props.pictureUrl}
                $width={props.pictureWidth}
                $height={props.pictureHeight}
                $round={props.pictureRound}
            />
        </Styled.LeftPanel>
        <Styled.RightPanel key={`${props.id}-right-panel`}>
            <h2>{props.title}</h2>
            {props.subtitle && <>
                <h4>{props.subtitle}</h4>
                <br />
            </>}
            {props.summary && props.summary.map((value, index) => <span key={index}><p>{value}</p></span>)}
            {!props.hideButton && <RoundedButton caption={props.buttonCaption ?? 'Saiba mais'} style={{
                textAlign: 'center',
                maxWidth: '200px',
                borderRadius: '10px',
                border: '2px solid var(--text-secondary-color)',
                backgroundColor: 'transparent',
                color: 'black'
            }}
                onClick={props.onClick}
            />}
        </Styled.RightPanel>

    </Styled.Container>
}