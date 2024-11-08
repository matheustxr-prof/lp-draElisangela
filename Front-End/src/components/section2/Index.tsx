
import Slider from "../swiper/Index";

import elisangela2 from '../../assets/elisangela2.webp'
import depoiment1 from '../../assets/depoimento1.png'
import depoiment2 from '../../assets/depoimento2.png'
import phone from '../../assets/phone-call.png'


export default function Section2() {

    {/* inicio do conteudo do slide */}
    function ContentSlideDepoiment1(){
        return(
            <div className="flex flex-col items-center">
                <img key={1} src={depoiment1} alt="imagem tiago tessmann" className="w-[150px] rounded-full"/>
                <h3 className="text-[26px] font-semibold ">Magna Ranielle de Oliveira</h3>
                <span className="text-[18px] ">Mãe do Bernardo e do Heitor</span>
                <p className="text-lg font-semibold mt-4 text-center">
                    Eu conheci a Dra. Elisângela no HNSF final de 2014. Meu primeiro filho nasceu em agosto de 2014, devido a prematuridade dele, ele não conseguiu segurar no ceio. A gente vivia trocando o leite pois ele chorava muito com cólicas e vivia resmugando. Foi quando eu conheci a Dra. Elisângela, que mudou completamente a nossa vida e o bem-estar do Bernardo. Com o passar do tempo ele foi desenvolvendo uma rinite alérgica. Chegou a acontecer dele dar um líquido no ouvido e os otorrinos querendo drenar, mas a Dra., apenas com remédio e orientações, conseguiu resolver. Já estou no segundo filho e é ela quem cuida, com todo carinho e dedicação, todo profissionalismo que ela tem, dos meus meninos. Eu adoro e sou eternamente grata por todo o cuidado que ela tem com meus filhos, por tudo o que ela faz por eles e não troco. Espero que ela esteja conosco até eles passarem para a fase adulta. Dra. Elisângela, eu só tenho a agradecer. Você como mãe possui o mesmo tratamente com os meus filhos, com muito carinho e muito profissionalismo, tanto é que eles adoram a Tia Elisângela!
                </p>
            </div>
        )
    }

    function ContentSlideDepoiment2(){
        return(
            <div className="flex flex-col items-center">
                <img key={1} src={depoiment2} alt="imagem tiago tessmann" className="w-[150px] rounded-full"/>
                <h3 className="text-[26px] font-semibold ">Dalila Viviane de Barros</h3>
                <span className="text-[18px] ">Mãe da Luana e do Lorenzo</span>
                <p className="text-lg font-semibold mt-4 text-center">
                    Falar da Dra. Elisângela para mim é muito gratificante pois ela cuidou do Lorenzo em momentos difíceis e fez isso com muita segurança. O momento que me fez conhecer ela foi quando ele tinha um aninho (hoje já está com quatros anos) e teve suspeita de alergia alimentar. Ela prontamente fez os exames e tudo o que era necessário e verificou que essa alergia não existia. Pouco tempo depois conseguimos identificar que existia alergia de outras coisas que levavam ele a quadros respiratórios complicados e ela, com muita capacidade, começou com um tratamente de imunidade que tem dado muito certo com vacina. Estamos muito felizes e ele está muito bem. A Dra. Elisângela é uma excelente profissional, com conhecimento científico formidável, que passa confiança pra gente e graças a Deus temos ela em nossa vida.
                </p>
            </div>
        )
    }

    const slideContent = [
        <ContentSlideDepoiment1 key={1} />,
        <ContentSlideDepoiment2 key={2} />
    ];
    {/* final do conteudo do slide */}

    const slideCount = slideContent.length;


    return (
        <section className="py-10 w-full min-h-[50vh] lg:min-h-screen bg-[#26074f] flex flex-col  items-center max-w-screen text-white">
            
            <div className="w-full flex flex-col items-center gap-10 mb-14 md:mb-20 px-8">
                <h2 className="text-[38px] md:text-5xl font-bold">Dra. Elisângela Menezes</h2>
                <div className="flex flex-col-reverse lg:flex-row items-center">
                    <div className="flex flex-col  justify-center max-w-xl">
                        <ul className=" flex flex-col gap-2 lg:ml-[50px] xl:ml-0 text-xl font-semibold">
                            <li>Graduada em Medicina pela Universidade Federal de Minas Gerais - CRMMG 44756</li>
                            <li>Professora de Medicina do UNIPAM</li>
                            <li>Alergista e Imunologista pela Sociedade Brasileira de Alergia e Imunologia (adultos e crianças) – RQE 51741</li>
                            <li>Especialista em alergia e imunologia pediátrica pela Sociedade Brasileira de Pediatria – RQE 51540</li>
                            <li>Pediatra pelo Hospital das Clínicas da UFMG – RQE 21395</li>
                        </ul>
                    </div>
                    <img src={elisangela2} alt="" className="max-w-full md:w-[80%] lg:max-w-md xl:max-w-xl mb-10 lg:mb-0 "/>
                </div>
            </div>

            <div className="w-full flex flex-col items-center gap-10 mb-10 md:mb-14 p-5">
                <h2 className="text-[38px] md:text-5xl font-bold">Minha história com a Pediatria</h2>
                <div className=" w-full lg:min-h-[450px] flex justify-center items-center video ">
                    <iframe className="w-full lg:w-[80%] h-[200px] md:h-[350px] lg:h-[450px] " src="https://www.youtube.com/embed/JNmp9kBcu5w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            
            <div className="mb-14 md:mb-16 px-5 w-full md:w-[90%] xl:w-[60%] flex flex-col items-center ">
                <h2 className="text-[38px] md:text-5xl font-bold">Sobre a Dra. Elisângela Menezes</h2>
                <p className="lg:text-center  mt-8 text-xl ">
                    Como médica, meu objetivo é promover a saúde em sua totalidade, atendendo crianças e adultos. Busco alcançar isso através de uma abordagem preventiva e integral, focada no bem-estar físico, mental e social. Acredito na importância de adotar hábitos saudáveis e estimular a prevenção, reversão e tratamento de doenças. Meu objetivo é capacitar os pacientes a tomar decisões conscientes para melhorar sua qualidade de vida. Ao oferecer cuidados médicos, busco ser uma parceira ativa na busca por uma vida saudável e feliz, trabalhando juntos para alcançar o equilíbrio e o bem-estar integral.
                </p>
            </div>

            <div className="w-full flex flex-col items-center gap-10 mb-10 md:mb-14 p-5">
                <h2 className="text-[38px] md:text-5xl font-bold">Minha história com a Alergia e Imunologia</h2>
                <div className="mb-10 w-full lg:min-h-[450px] flex justify-center items-center video ">
                    <iframe className="w-full lg:w-[80%] h-[200px] md:h-[350px] lg:h-[450px] " src="https://www.youtube.com/embed/NAL80R4zN3M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            
            <Slider
                slideContent= {slideContent}
                slideCount= {slideCount}
            />
             {/* VENDAS */}
             <div data-aos="zoom-in-up" data-aos-duration="2000">
                <div className="w-full px-4 py-14 lg:p-[50px] flex gap-5 flex-col items-center text-white">
                    <h2 className="w-full lg:w-max font-bold text-3xl lg:text-5xl">
                        <strong>Gostaria de marcar uma consulta? </strong> 
                    </h2><h3 className="w-full lg:w-max font-bold text-[28px]"> <strong> Contate-nos: </strong></h3>
                    
                    <div className="w-full flex flex-col lg:flex-row lg:gap-10 justify-evenly">
                        <div className="flex lg:items-center lg:justify-center gap-5 ">
                            <img src={phone} alt=""/>
                            <h2 className="font-bold text-2xl lg:text-4xl"> 
                                <a href="tel:+5534999353532"> 
                                    +55 (34) 9 9935-3532
                                </a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </section>
    )
}