export function Informacao() {
    return (
        <>
            <div class="grid">
                <h1 className="titulo">Saiba mais sobre doação de sangue!</h1>
                <img className="foto" src="https://www.gov.br/saude/pt-br/composicao/saes/sangue/imagens/como-doar_sangue-home.png/@@images/5125b2bd-0ce2-4cf3-b615-cd78dafb5ad5.png" alt="desenho de medica negra, com jaleco branco ela tem um cabelo preto curto ondulado" />
                <div className="info">
                    <h3 className="discricao">Quais são os requisitos para doação de sangue?</h3>
                    <p className="discricao">
                        Podem doar sangue pessoas entre 16 e 69 anos e que estejam pesando mais de 50kg. Além disso, é preciso apresentar documento oficial com foto e menores de 18 anos só podem doar com consentimento formal dos responsáveis, <span>Pessoas com febre, gripe ou resfriado, diarreia recente, grávidas e mulheres no pós-parto não podem doar temporariamente. </span> O procedimento para doação de sangue é simples, rápido e totalmente seguro. Não há riscos para o doador, porque nenhum material usado na coleta do sangue é reutilizado, o que elimina qualquer possibilidade de contaminação.
                    </p>
                    <h3 className="discricao">Requisitos para doar sangue, e Recomendações.</h3>
                    <ul className="discricao">
                        <li>Ter idade entre 16 e 69 anos, desde que a primeira doação tenha sido feita até 60 anos menores de 18 anos devem possuir
                            consentimento formal do responsável legal; Pessoas com idade entre 60 e 69 anos só poderão doar sangue se já o tiverem
                            feito antes dos 60 anos.</li>
                        <li>Apresentar documento de identificação com foto emitido por órgão oficial Carteira de Identidade, Carteira Nacional de
                            Habilitação, Carteira de Trabalho, Passaporte, Registro Nacional de Estrangeiro, Certificado de Reservista e Carteira
                            Profissional emitida por classe, serão aceitos documentos digitais com foto.</li>
                        <li>Pesar no mínimo 50 kg</li>
                        <li>Ter dormido pelo menos 6 horas nas últimas 24 horas.</li>
                        <li>Estar alimentado. Evitar alimentos gordurosos nas 3 horas que antecedem a doação de sangue. Caso seja após o almoço,
                            aguardar 2 horas.</li>
                        <li>Pessoas com idade entre 60 e 69 anos só poderão doar sangue se já o tiverem feito antes dos 60 anos.</li>
                        <li>A frequência máxima é de quatro doações de sangue anuais para o homem e de três doações de sangue anuais para as mulher.</li>
                        <li>O intervalo mínimo entre uma doação de sangue e outra é de dois meses para os homens e de três meses para as mulheres.</li>
                    </ul>
                    <h3 className="discricao">Impendimentos temporários para doar </h3>
                    <ul className="discricao">
                        <li>Gripe, resfriado e febre: aguardar 7 dias após o desaparecimento dos sintomas;</li>
                        <li>Período gestacional;</li>
                        <li>Período pós-gravidez: 90 dias para parto normal e 180 dias para cesariana;</li>
                        <li>Amamentação: até 12 meses após o parto;</li>
                        <li>Ingestão de bebida alcoólica nas 12 horas que antecedem a doação;</li>
                        <li>Tatuagem e/ou piercing nos últimos 12 meses piercing em cavidade oral ou região genital impedem a doação;</li>
                        <li>Extração dentária: 72 horas;</li>
                        <li>Apendicite, hérnia, amigdalectomia, varizes: 3 meses;</li>
                        <li>Colecistectomia, histerectomia, nefrectomia, redução de fraturas, politraumatismos sem seqüelas graves, tireoidectomia,
                            colectomia:
                            6 meses;</li>
                        <li>Vacinação: o tempo de impedimento varia de acordo com o tipo de vacina;</li>
                        <li>Exames/procedimentos com utilização de endoscópio nos últimos
                            6 meses;</li>
                        <li>Ter sido exposto a situações de risco acrescido para infecções sexualmente transmissíveis aguardar 12 meses após a
                            exposição</li>
                    </ul>
                </div>
            </div>
            <div className="grid">
                <h3>Impedimentos definitivos para doar sangue</h3>
                <img className="foto2" src="https://img.freepik.com/vetores-premium/medico-coletando-amostra-de-sangue-do-paciente-da-ilustracao-isolada-do-vetor-2d-da-veia_151150-9765.jpg" alt="Medico negro coletando amostra de sague de uma mulher de pela branca" />
                <div className="info">
                    <ul className="discricao">
                        <li>Ter passado por um quadro de hepatite após os 11 anos de idade;</li>
                        <li>Evidência clínica ou laboratorial das seguintes doenças transmissíveis pelo sangue:</li>
                        <li>Hepatites B e C, AIDS vírus HIV, doenças associadas ao vírus HTLV I e II e Doenças de Chagas;</li>
                        <li>Uso de drogas ilícitas injetáveis;</li>
                        <li>Malária</li>
                    </ul>
                    <h3>Como doar sangue?</h3>
                    <p className="discricao">
                        Para doar sangue, basta procurar as unidades de coleta de sangue, como os Hemocentros, parachecar se você atende aos requisitos necessários para a doação. Existem impedimentos temporários e também impedimentos definitivos. No mais, basta estar imbuído pelo desejo de ajudar o próximo.
                        <a className="link" href="https://medicoresponde.com.br/quem-nao-pode-doar-sangue/" target="_blank" rel="noopener noreferrer">Saiba mais</a>
                    </p>
                    <h3 className="discricao" >Qual o intervalo entre doações de sangue?</h3>
                    <p className="discricao"> <ins><span>Homens:</span>de 2 em 2 meses, sendo, no máximo, 4 vezes ao ano.</ins></p>
                    <p className="discricao"> <ins><span>Mulheres:</span> 3 em 3 meses, sendo, no máximo, 3 doações anuais.</ins>
                    </p>
                </div>
            </div>

        </>


    )
}