import { useNavigate } from "react-router-dom";
import PresentationCard from "src/components/PresentationCard";
import { pageRoutes } from "src/routes";

export default function Partners() {
    const navigator = useNavigate();

    return <><h2 id="indicacoes">Indicações do Rolê</h2>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <PresentationCard
                id="divulgue"
                key={8719}
                pictureUrl="/anuncie.jpeg"
                pictureHeight="200px"
                pictureWidth="400px"
                pictureRound="25px"
                title="Quer divulgar seu trabalho?"
                summary={[
                    "Nossas redes sociais são focadas em brasileiros que vivem ou estão de mudança para Málaga! 🏖️",                    
                    "Uma ótima vitrine para o seu negócio, produto ou serviço! 💰",
                    "Entre em contato conosco e saiba mais! 📧"
                ]}
                style={{
                    maxWidth: '1200px',
                    
                }}
                buttonCaption="Anuncie aqui"
                onClick={() => navigator(pageRoutes.ANUNCIE)}
            />

        </div>
    </>
}