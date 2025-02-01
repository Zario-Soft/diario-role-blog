import { useNavigate } from "react-router-dom";
import PresentationCard from "src/components/PresentationCard";
import { pageRoutes } from "src/routes";

export default function Clients() {
    const navigator = useNavigate();

    return <>
        <h2 id="clientes">Nossos Clientes</h2>
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
                title="Bárbara e Bruno"
                summary={[
                    "Nós somos uma casal de BH com planos de mudança para a Espanha! Conhecemos a Gaby e o Éro pela internet e marcamos uma consultoria com eles! ",
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
                pictureUrl="/patricia-celsimar.jpeg"
                title="Patricia e Celsimar"
                summary={[
                    "Sabe aquela mistura de ansiedade e medo que sentimos ao mudar toda a nossa vida para outro país e cidade? Foi exatamente nesse momento que o Ero e a Gaby, do Diário de Role, entraram em cena e fizeram toda a diferença.",
                    "Com uma atenção carinhosa e tranquilizadora, eles nos ajudaram a entender que Málaga era (e está sendo) a escolha perfeita para nós.",
                    "Logo de cara, sentimos que não estávamos sozinhos. Eles rapidamente se tornaram mais do que assessores — viraram amigos de verdade.",
                    "Nos guiaram com tanto cuidado, desde a escolha do bairro até a busca por casas, garantindo que não cairíamos em golpes, algo que nos trouxe uma paz enorme no meio da crise imobiliária europeia. Principalmente pra uma família de 2 humanos e 2 caninos.",
                    "Além disso, nos ofereceram uma visão sincera e realista de Málaga, sem vender ilusões, mas mostrando as belezas e desafios da cidade como verdadeiros moradores locais.",
                    "E não parou por aí! Com a assessoria deles, descobrimos desde o melhor mercado até as praias mais encantadoras, passando por parques para nossos cães e restaurantes incríveis.",
                    "Foi uma experiência completa e essencial para quem está de mudança para cá. Estamos imensamente felizes e gratos por toda a ajuda, que tornou essa transição muito mais leve e segura."]
                }
                style={{
                    maxWidth: '700px',
                    backgroundColor: '#BDE8FA'
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
                pictureUrl="/CarlaAriel.png"
                title="Carla e Ariel"
                summary={[
                    "Conhecer a Gabi e o Ero foi um grade presente, arriscaríamos em dizer que foi a materialização da resposta de Deus para o que estávamos buscando!",
                    "O processo de Migração não é fácil, e eu diria que é uma das decisões mais dificeis que nós tomamos! Sair da zona de conforto, deixar quem amamos, arriscar...",
                    "Mas quando decidimos fazer a consultoria do Diário do Rolê, foi porque a Gabi e o Éro  nos inspiraram, e melhor, mostravam em seus videos que mesmo não sendo confortável, era possível!",
                    "São humanos, bons ouvintes, sinceros, então podemos afirmar que o investimento vale cada centavo!",
                    "Foi incrível a conexão que sentimos quando fizemos a chamada, parecia que eramos amigos de anos, e isso é importante no migrar! Conexão!",
                    "Estamos sensíveis em encontrar pessoas que nos identificamos, sensíveis em depositar nosso sonho e em fazer uma nova história, e com a consultoria foi possível criar essa conexão.",
                    "Só temos que agradecer vcs por todos as orientações, obrigada! Que esse projeto continue abençoando a vida de muita gente ❤️"]}
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
                pictureUrl="/luciana-walney-pedro.png"
                title="Luciana, Walney e Pedro"
                summary={[
                    "Éro e Gaby vocês são uns amores. São tão gentis e educados!", 
                    "Tiraram todas as nossas dúvidas e foi além com informações depois da consultoria, estão sempre dispostos a ajudar e responder as nossas dúvidas.",
                    "Deus abençoes vocês! Nós amamos 🥰 fora que o preço cabe no bolso é maravilhoso 🙏🏼🙏🏼🙏🏼🙏🏼🙏🏼 gratidão por nos ajudar no caminho dos nossos sonhos 🥰🙏🏼"]}
                style={{
                    maxWidth: '700px',
                    backgroundColor: '#BDE8FA'
                }}
                onClick={() => navigator(pageRoutes.FORMULARIO)}
            />
            
        </div>
    </>
}
