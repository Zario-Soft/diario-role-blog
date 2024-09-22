import { useNavigate } from "react-router-dom";
import PresentationCard from "src/components/PresentationCard";
import { pageRoutes } from "src/routes";

export default function Clients() {
    const navigator = useNavigate();
    
    return <>
    <h2 id="parceria">Nossos Clientes</h2>
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <PresentationCard
            hideButton
            id="sobre"
            key={123}
            pictureRound={'100px'}
            pictureWidth={'200px'}
            pictureHeight={'200px'}
            buttonCaption="+ Assessoria"
            pictureUrl="/BarbaraBruno.jpeg"
            title="Bábara e Bruno"
            summary={[
                "Nós somos uma casal de BH com planos de mudança para a Espanha!Conhecemos a Gaby e o Éro pela internet e marcamos uma consultoria com eles! ",
                "Pensa em um casal gente finíssima… São eles! Fizemos a consultoria, que foi muito massa. ",
                "Eles tiraram milhões de dúvidas e deram outras milhões de dicas super importantes pra quem está de mudança, principalmente pra região que eles moram! ",
                "Além do tempo que ficaram com a gente na ligação, se disponibilizam a responder e ajudar sempre quando as dúvidas aparecessem. Só gratidão!",
                "Agora, na espera agora pra conhecê-los pessoalmente (e o Logan também)! Obrigada, e até breve!"]}
            style={{
                maxWidth: '700px',
                backgroundColor: '#829BEF'
            }}
            onClick={() => navigator(pageRoutes.FORMULARIO)}
        />

        <PresentationCard
            hideButton
            id="sobre"
            key={123}
            pictureRound={'100px'}
            pictureWidth={'200px'}
            pictureHeight={'200px'}
            buttonCaption="+ Assessoria"
            pictureUrl="/ateneia.jpeg"
            title="Atenéia"
            summary={[
                "A consultoria da Gaby e do Éro foi essencial para eu decidir em qual cidade iniciar minha aventura na Espanha: Málaga. ",
                "Pude tirar dúvidas e ouvir as experiências que eles possuem sobre moradia, trabalho e vida social. ",
                "Me senti mais segura para imigrar SOZINHA a partir da conversa que tive com eles. ",
                "Além de tudo, a Gaby me ajudou a encontrar o quarto que eu alugo e vivo hoje (muito obrigada, Gabizinha). ",
                "Na hora de mudar de país, existem muitas dúvidas, inseguranças, medos e ansiedade. ",
                "Acredito que a consultoria pode desbloquear uma boa parte desses sentimentos e nos ajudar a fazer uma transição mentalmente mais tranquila."]}
            style={{
                maxWidth: '700px',
                backgroundColor: '#BDE8FA'
            }}
            onClick={() => navigator(pageRoutes.FORMULARIO)}
        />

    </div>
    </>}