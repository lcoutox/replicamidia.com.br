// Pautas para a estreia da Réplica, criadas como RASCUNHOS no Sanity.
// Origem: varredura de portais locais (Atualiza Nova Serrana, Divinews, Rádio Santa Cruz FM,
// Portal Gerais, O Popular NS) + busca. NADA aqui é fato verificado: cada item é um ponto de
// partida que precisa de apuração em fonte primária antes de publicar.

export const EDITORIAS = [
  { slug: "cidade", titulo: "Cidade" },
  { slug: "politica", titulo: "Política" },
  { slug: "economia", titulo: "Economia" },
  { slug: "servicos", titulo: "Serviços" },
  { slug: "saude", titulo: "Saúde" },
];

export const PAUTAS = [
  // ---------------------------------------------------------------- Institucionais
  {
    slug: "a-replica-comeca-hoje",
    formato: "nota",
    titulo: "A Réplica começa hoje. Veja a que ela se propõe.",
    linhaFina:
      "Informação organizada, opinião assumida e disposição para cobrar respostas sobre Nova Serrana.",
    corpoTexto: [
      ["normal", "A Réplica nasce em Nova Serrana para organizar informações relevantes e ampliar o debate sobre a cidade. A proposta é falar com independência e clareza, e cobrar respostas quando um prazo termina ou uma promessa some do noticiário."],
      ["normal", "O trabalho se divide em informação, opinião e conversa. Toda informação vem com fonte e data. A opinião é sempre identificada como tal. As entrevistas preservam o contexto de quem fala."],
      ["normal", "Quando erramos, corrigimos na própria página, com data e descrição do que mudou. É esse o padrão que pedimos dos outros e aplicamos a nós."],
    ],
    aApurar: [
      "Confirmar canais de contato (e-mail, WhatsApp, Instagram) antes de publicar",
      "Definir a data oficial de estreia no ar",
    ],
  },
  {
    slug: "como-a-replica-se-organiza",
    formato: "nota",
    titulo: "Em pauta, análise, opinião e conversa: como a Réplica se organiza",
    linhaFina: "O que esperar de cada seção — e por que a marca fala sem assinatura pessoal.",
    corpoTexto: [
      ["normal", "Em pauta reúne o que aconteceu, com fonte e data. Análise volta ao fato depois: o que mudou, quem responde, o que falta saber. Opinião assume a interpretação da Réplica e mostra os fatos que a sustentam."],
      ["normal", "Conversa traz entrevistas que identificam quem fala e preservam o sentido. Vídeos levam a cidade explicada em poucos minutos, na mesma linguagem do nosso Instagram."],
      ["normal", "As publicações não levam assinatura pessoal. Quem fala é a marca, e é a marca que responde."],
    ],
  },
  {
    slug: "como-pedir-correcao",
    formato: "nota",
    titulo: "Errou? A Réplica corrige à vista. Veja como pedir.",
    linhaFina:
      "Correções ficam na própria página, com data e o que mudou. O texto anterior não some em silêncio.",
    corpoTexto: [
      ["normal", "Se você encontrou um erro em uma publicação da Réplica, escreva para a gente. A correção é avaliada com o mesmo cuidado da apuração e, quando confirmada, publicada junto ao texto original."],
      ["normal", "Foi citado e quer se manifestar? O direito de resposta usa o mesmo canal. A resposta pertinente é publicada ao lado da matéria."],
    ],
    aApurar: ["Confirmar o e-mail de correções e direito de resposta antes de publicar"],
  },
  {
    slug: "envie-sua-pauta",
    formato: "nota",
    titulo: "Viu algo que merece apuração? Envie sua pauta.",
    linhaFina:
      "Denúncias, documentos e sugestões pelo WhatsApp ou pelas redes. Sigilo garantido quando necessário.",
    corpoTexto: [
      ["normal", "A Réplica quer ouvir quem vive a cidade. Prazos que não foram cumpridos, serviços que pioraram, contratos que ninguém explica: mande para a gente com o máximo de detalhes e, se tiver, os documentos."],
      ["normal", "Quando a fonte pede sigilo, a identidade é preservada. O que publicamos é sempre verificado antes."],
    ],
    aApurar: ["Confirmar número do WhatsApp e a política de proteção de fontes"],
  },

  // ---------------------------------------------------------------- Em pauta / serviço
  {
    slug: "leilao-imoveis-publicos-setembro",
    formato: "nota",
    editoria: "cidade",
    titulo: "Prefeitura leiloa dois imóveis públicos em 16 de setembro",
    linhaFina:
      "Leilão presencial marcado para as 9h. Falta detalhar quais imóveis e o destino do dinheiro.",
    aApurar: [
      "Edital no Diário Oficial: endereço e matrícula dos dois imóveis",
      "Valor de avaliação de cada um e lance mínimo",
      "Rubrica orçamentária que vai receber a arrecadação",
      "Local, data-limite de habilitação e regras de participação",
    ],
    ganchos: [
      "Citado por O Popular NS (leilão em 16/09, às 9h)",
      "Confirmar em: Diário Oficial do Município e Secretaria de Administração",
    ],
    faltaSaber: [
      "Quais são os imóveis e por que estão sendo vendidos?",
      "O dinheiro do leilão entra em qual despesa?",
    ],
  },
  {
    slug: "vacimovel-20-e-21-de-setembro",
    formato: "nota",
    editoria: "saude",
    titulo: "Vacimóvel atende nos dias 20 e 21: veja os pontos e horários",
    linhaFina:
      "Serviço itinerante de vacinação passa pela cidade no fim de semana. Confirme o roteiro antes de sair de casa.",
    aApurar: [
      "Roteiro oficial: bairros, endereços e horários",
      "Quais vacinas estarão disponíveis e para quais públicos",
      "Documentos necessários (cartão de vacina, documento com foto)",
    ],
    ganchos: [
      "Citado pela Prefeitura para os dias 20 e 21/09",
      "Confirmar em: Secretaria Municipal de Saúde",
    ],
    faltaSaber: ["O roteiro cobre a zona rural?"],
  },
  {
    slug: "vacinacao-antirrabica-prorrogada",
    formato: "nota",
    editoria: "saude",
    titulo: "Vacinação antirrábica é prorrogada: até quando e onde levar o animal",
    linhaFina:
      "A campanha ganhou novo prazo. Restam definir os pontos fixos e o calendário por bairro.",
    aApurar: [
      "Nova data-limite da campanha",
      "Pontos fixos e cronograma volante por bairro",
      "Cobertura atingida até agora (meta x doses aplicadas)",
    ],
    ganchos: [
      "Citado por Divinews e Sucesso FM (prorrogação)",
      "Confirmar em: Centro de Controle de Zoonoses / Secretaria de Saúde",
    ],
    faltaSaber: ["Por que a meta não foi atingida no prazo original?"],
  },
  {
    slug: "outubro-rosa-como-agendar-mamografia",
    formato: "nota",
    editoria: "saude",
    titulo: "Outubro Rosa: como agendar mamografia pelo SUS em Nova Serrana",
    linhaFina:
      "Campanha da Prefeitura com a Acom promete ampliar exames. Falta o passo a passo do agendamento.",
    aApurar: [
      "Onde e como agendar (unidade, telefone, faixa etária com indicação)",
      "Quantos exames a mais a campanha prevê",
      "Tempo de espera atual pela mamografia na rede",
      "Programação de eventos do Outubro Rosa",
    ],
    ganchos: [
      "Citado por Divinews (lançamento da campanha 2026)",
      "Confirmar em: Secretaria de Saúde e Acom",
    ],
    faltaSaber: ["Qual é a fila hoje e quanto a campanha reduz?"],
  },
  {
    slug: "pedagio-br-262-mais-caro",
    formato: "nota",
    editoria: "servicos",
    titulo: "Pedágio da BR-262 fica mais caro em setembro: veja o novo valor",
    linhaFina:
      "A tarifa foi reajustada. Resta confrontar o aumento com as obras prometidas no trecho.",
    aApurar: [
      "Valor antigo e novo por categoria de veículo e por praça",
      "Data de início da cobrança nova",
      "Cláusula contratual que embasa o reajuste",
      "Obras previstas como contrapartida no trecho de Nova Serrana",
    ],
    ganchos: [
      "Citado por Divinews (reajuste em setembro)",
      "Confirmar em: ANTT e concessionária responsável pelo trecho",
    ],
    faltaSaber: ["O que foi entregue em obras desde o último reajuste?"],
  },
  {
    slug: "sessoes-da-camara-como-acompanhar",
    formato: "nota",
    editoria: "politica",
    titulo: "Sessões da Câmara: como acompanhar as votações desta semana",
    linhaFina: "Pauta, transmissão e como saber o voto de cada vereador.",
    aApurar: [
      "Dia e horário das sessões ordinárias",
      "Link oficial da transmissão e do arquivo de gravações",
      "Principais projetos na pauta da semana",
      "Onde ficam publicadas as atas e os painéis de votação",
    ],
    ganchos: ["Conferir a pauta no site da Câmara Municipal de Nova Serrana"],
    faltaSaber: ["As votações nominais ficam disponíveis para consulta depois da sessão?"],
  },

  // ---------------------------------------------------------------- Reportagem / Análise
  {
    slug: "novo-hospital-prometido-e-entregue",
    formato: "reportagem",
    editoria: "saude",
    titulo: "Novo Hospital: o que foi prometido e o que já foi entregue",
    linhaFina:
      "A Prefeitura reafirma que a unidade é pública e cita R$ 100 milhões em equipamentos. A Réplica foi checar o cronograma, o contrato e a data de abertura.",
    resumo: [
      "A gestão afirma que o hospital é público e menciona R$ 100 milhões em equipamentos.",
      "Não há data de inauguração divulgada de forma clara.",
      "A Réplica pediu o cronograma e o modelo de gestão e vai atualizar este texto.",
    ],
    aApurar: [
      "Contrato e aditivos da obra e da compra de equipamentos (Portal da Transparência)",
      "Cronograma oficial e etapa atual da construção",
      "Modelo de gestão: administração direta ou organização social",
      "Número de leitos, serviços previstos e origem do custeio mensal",
      "Visitas ao canteiro em dias e horários diferentes",
    ],
    ganchos: [
      "Citado por Atualiza Nova Serrana (Prefeitura reafirma propriedade pública; R$ 100 mi em equipamentos)",
      "Confirmar em: Secretaria de Saúde, Secretaria de Obras e Portal da Transparência",
    ],
    faltaSaber: [
      "Qual é a data de inauguração?",
      "Quem vai administrar o hospital e com qual orçamento mensal?",
      "O valor total já subiu em relação ao previsto?",
    ],
  },
  {
    slug: "lei-transparencia-centro-de-convencoes",
    formato: "reportagem",
    editoria: "cidade",
    titulo: "Centro de Convenções: como eram as reservas antes da lei de transparência",
    linhaFina:
      "A nova regra acaba com 'reservas informais' e exige agenda eletrônica pública. Vale entender o que mudou na prática e quem fiscaliza.",
    aApurar: [
      "Texto da lei e projeto original na Câmara",
      "Como as reservas eram feitas antes (havia critério publicado?)",
      "Onde a agenda eletrônica fica disponível ao público",
      "Quem responde por descumprimento",
      "Histórico de uso do espaço no último ano",
    ],
    ganchos: [
      "Citado por Atualiza Nova Serrana (lei aprovada)",
      "Confirmar em: Câmara Municipal e secretaria responsável pelo espaço",
    ],
    faltaSaber: [
      "A agenda dos meses anteriores também será divulgada?",
      "Já houve pedido de reserva negado sob a regra antiga?",
    ],
  },
  {
    slug: "hemodialise-sus-hospital-sao-jose",
    formato: "reportagem",
    editoria: "saude",
    titulo: "Hemodiálise pelo SUS no Hospital São José: o que muda para o paciente",
    linhaFina:
      "A unidade teria conquistado habilitação de R$ 2,2 milhões. Falta saber quantas vagas e qual a fila.",
    resumo: [
      "O hospital teria sido habilitado para oferecer hemodiálise pelo SUS.",
      "O valor citado é de R$ 2,2 milhões.",
      "A Réplica busca o número de vagas e o tamanho da fila atual.",
    ],
    aApurar: [
      "Portaria de habilitação (Ministério da Saúde / Diário Oficial da União)",
      "Número de máquinas e de vagas por turno",
      "Fila atual de pacientes em Nova Serrana e região",
      "Para onde os pacientes iam antes e a distância percorrida",
      "Data de início do atendimento",
    ],
    ganchos: [
      "Citado por Divinews (habilitação de R$ 2,2 mi)",
      "Confirmar em: Hospital São José, Secretaria de Saúde e DOU",
    ],
    faltaSaber: [
      "Quantos pacientes passam a ser atendidos na cidade?",
      "Quem está na fila entra automaticamente?",
    ],
  },
  {
    slug: "mutirao-catarata-quanto-falta",
    formato: "reportagem",
    editoria: "saude",
    titulo: "360 cirurgias de catarata no mutirão: quanto ainda falta",
    linhaFina:
      "A Prefeitura comemora o número. A pergunta é qual era a fila antes e quantas pessoas seguem esperando.",
    resumo: [
      "A gestão informou cerca de 360 cirurgias de catarata em mutirão.",
      "Não há número público sobre a fila remanescente.",
      "A Réplica pediu os dados de antes e depois do mutirão.",
    ],
    aApurar: [
      "Fila de catarata antes do mutirão (fonte oficial)",
      "Quantos pacientes seguem aguardando",
      "Critério de convocação e como entrar na fila",
      "Custo do mutirão e origem do recurso",
      "Próxima data prevista",
    ],
    ganchos: [
      "Citado por Divinews e Sucesso FM (mutirão concluído, cerca de 360 cirurgias)",
      "Confirmar em: Secretaria de Saúde",
    ],
    faltaSaber: ["Qual era a fila e quanto sobrou?", "Haverá novo mutirão e quando?"],
  },
  {
    slug: "febrac-automacao-e-emprego",
    formato: "analise",
    editoria: "economia",
    titulo: "A FEBRAC da automação e o emprego no calçado",
    linhaFina:
      "A feira do polo aposta em IA e máquinas. A cidade vive de calçado — vale entender o que automatizar a produção significa para quem trabalha no setor.",
    resumo: [
      "A 15ª FEBRAC teve foco em automação e inteligência artificial.",
      "O polo reúne centenas de indústrias e dezenas de milhares de empregos diretos e indiretos.",
      "Automação reduz custo, mas o efeito sobre postos de trabalho e produção em domicílio precisa ser acompanhado.",
    ],
    aApurar: [
      "Números da feira (expositores, visitantes, negócios) junto ao Sindinova",
      "Admissões e desligamentos no setor calçadista de Nova Serrana (Novo Caged, mês a mês e no acumulado do ano)",
      "Peso do trabalho em domicílio e da informalidade no polo",
      "O que dizem indústrias, trabalhadores e sindicato sobre automação",
    ],
    ganchos: [
      "Citado por Portal Gerais e Sindinova (15ª FEBRAC, foco em IA)",
      "Dados de base: FIEMG/SENAI e Novo Caged",
    ],
    faltaSaber: [
      "A automação está criando ou substituindo postos no polo?",
      "Como a produção feita em casa aparece — ou não — nas estatísticas?",
    ],
  },
  {
    slug: "recomposicao-do-secretariado",
    formato: "reportagem",
    editoria: "politica",
    titulo: "Recomposição do secretariado: quem entrou e o que prometeu",
    linhaFina:
      "O prefeito anunciou novos nomes para o primeiro escalão. Cabe apresentar cada um: trajetória, vínculo e prioridades.",
    aApurar: [
      "Lista oficial de nomeações e exonerações (Diário Oficial)",
      "Currículo e trajetória de cada novo secretário",
      "Salários e estrutura de cada pasta",
      "Prioridades declaradas para os próximos meses",
      "Motivo das saídas",
    ],
    ganchos: [
      "Citado por Atualiza Nova Serrana (anúncio de recomposição)",
      "Confirmar em: Diário Oficial e Gabinete do Prefeito",
    ],
    faltaSaber: [
      "Por que os antecessores saíram?",
      "Quais metas cada secretário assume publicamente?",
    ],
  },
  {
    slug: "mortes-na-br-262",
    formato: "reportagem",
    editoria: "cidade",
    titulo: "Mortes na BR-262: o trecho de Nova Serrana e o que a comunidade pede",
    linhaFina:
      "Mais uma vítima na rodovia. A Réplica foi levantar a série de acidentes no trecho e as demandas antigas por sinalização e travessia.",
    resumo: [
      "Um ciclista morreu ao ser atingido por um carro na BR-262, em Nova Serrana.",
      "Moradores cobram melhorias no trecho urbano da rodovia.",
      "A Réplica pediu os dados de acidentes e o plano da concessionária.",
    ],
    aApurar: [
      "Dados da PRF sobre o trecho: série histórica de acidentes e mortes",
      "Pontos mais críticos e pedidos anteriores de passarela, iluminação ou redutor",
      "Plano de obras da concessionária e prazos",
      "Manifestações de associações de moradores",
    ],
    ganchos: [
      "Citado pela Rádio Santa Cruz FM (ciclista morto na BR-262)",
      "Confirmar em: PRF, concessionária e associações de bairro",
    ],
    faltaSaber: [
      "Quantos acidentes e mortes o trecho registrou nos últimos anos?",
      "Há obra prevista e para quando?",
    ],
  },
  {
    slug: "seguranca-no-trabalho-morte-no-varejo",
    formato: "reportagem",
    editoria: "cidade",
    titulo: "Segurança no trabalho: uma morte no varejo e o que diz a fiscalização",
    linhaFina:
      "Um repositor morreu após cair de uma escada em um supermercado. A pauta é a prevenção de acidentes no comércio e na indústria da cidade — sem espetáculo.",
    aApurar: [
      "Comunicação de Acidente de Trabalho e apuração da Superintendência Regional do Trabalho",
      "Número de acidentes de trabalho registrados em Nova Serrana, por setor",
      "O que dizem os sindicatos patronal e dos trabalhadores sobre treinamento e EPI",
      "Se houve autuação no estabelecimento",
      "Decidir com critério se a vítima será identificada",
    ],
    ganchos: [
      "Citado por Atualiza Nova Serrana (queda fatal de um repositor)",
      "Confirmar em: MPT, Superintendência Regional do Trabalho e sindicatos",
    ],
    faltaSaber: [
      "Houve falha de segurança apontada na apuração?",
      "Como está a fiscalização de segurança do trabalho na cidade?",
    ],
  },

  // ---------------------------------------------------------------- Opinião
  {
    slug: "a-cidade-merece-um-calendario",
    formato: "opiniao",
    editoria: "politica",
    titulo: "A cidade merece saber o que foi prometido e o que foi entregue",
    linhaFina:
      "Prestação de contas não é peça de campanha. É um calendário público, com datas, valores e responsáveis.",
    corpoTexto: [
      ["normal", "Toda gestão apresenta planos. O problema começa quando o plano vira anúncio e o anúncio não volta a ser mencionado. Sem acompanhamento, a promessa perde a data e a cobrança perde a força."],
      ["normal", "A Réplica defende uma prática simples: cada compromisso público deveria ter prazo, valor estimado e um responsável identificado. Essas informações já existem em documentos oficiais; falta reuni-las em linguagem clara."],
      ["normal", "Nos próximos meses, vamos acompanhar compromissos anunciados e publicar o andamento de cada um. Se o prazo terminar, vamos perguntar: qual é a nova previsão?"],
    ],
    aApurar: [
      "Alinhar a tese com a linha editorial antes de publicar",
      "Listar de 3 a 5 compromissos públicos concretos que a Réplica vai acompanhar",
    ],
  },
  {
    slug: "transparencia-nao-e-favor",
    formato: "opiniao",
    editoria: "cidade",
    titulo: "Transparência não é favor. É o mínimo.",
    linhaFina: "Dado público difícil de achar produz o mesmo efeito que dado escondido.",
    corpoTexto: [
      ["normal", "A lei obriga órgãos públicos a divulgar receitas, despesas, contratos e salários. Cumprir a lei no papel, porém, é diferente de tornar a informação compreensível."],
      ["normal", "Uma planilha sem explicação, um arquivo que não abre no celular ou um link que muda de endereço a cada ano afastam justamente quem mais precisa da informação."],
      ["normal", "Transparência de verdade é a que o morador consegue usar. É esse o padrão que a Réplica vai cobrar e aplicar ao próprio trabalho."],
    ],
    aApurar: ["Citar exemplos locais concretos de dado público de difícil acesso"],
  },
  {
    slug: "ano-eleitoral-o-que-a-prefeitura-pode-divulgar",
    formato: "opiniao",
    editoria: "politica",
    titulo: "Ano eleitoral: o que muda no que a prefeitura pode divulgar",
    linhaFina:
      "As regras do período eleitoral existem para proteger o eleitor, não para sumir com a informação.",
    corpoTexto: [
      ["normal", "Durante a campanha, a publicidade institucional dos governos fica restrita. A regra evita o uso da máquina pública a favor de candidatos, e isso é saudável."],
      ["normal", "O que não pode acontecer é a restrição virar desculpa para um apagão de serviço. Informação sobre saúde, segurança e obras essenciais continua sendo dever do poder público."],
      ["normal", "A Réplica vai cobrar os dois lados: nada de propaganda disfarçada de informação, mas também nada de silêncio sobre o que o cidadão precisa saber."],
    ],
    aApurar: [
      "Conferir datas e vedações do período eleitoral vigente (Lei 9.504/1997, art. 73)",
      "Verificar as exceções previstas para publicidade de saúde e segurança",
    ],
  },

  // ---------------------------------------------------------------- Conversa
  {
    slug: "sindinova-automacao-e-emprego",
    formato: "entrevista",
    editoria: "economia",
    titulo: "Sindinova aposta em automação. E o emprego no polo?",
    linhaFina:
      "Entrevista com a direção do sindicato das indústrias de calçado sobre tecnologia, custo e futuro do trabalho em Nova Serrana.",
    aApurar: [
      "Agendar entrevista com a diretoria do Sindinova",
      "Levar dados do Novo Caged e da FEBRAC para confrontar",
      "Pedir posição sobre trabalho em domicílio e qualificação da mão de obra",
    ],
    faltaSaber: ["A automação amplia ou reduz o número de vagas no polo?"],
  },
  {
    slug: "rede-de-protecao-a-mulher",
    formato: "entrevista",
    editoria: "cidade",
    titulo: "Rede de proteção à mulher: o que existe hoje em Nova Serrana",
    linhaFina:
      "No mês dos 20 anos da Lei Maria da Penha e após um caso grave de violência doméstica, uma conversa sobre o que a cidade oferece a quem precisa de ajuda.",
    aApurar: [
      "Definir entrevistado (CREAS, delegacia, Patrulha Maria da Penha ou organização da sociedade civil)",
      "Mapear serviços, endereços e telefones de emergência",
      "Dados de medidas protetivas e denúncias na comarca",
    ],
    faltaSaber: ["Quanto tempo leva entre a denúncia e a concessão da medida protetiva?"],
  },
  {
    slug: "saude-mental-alem-do-setembro-amarelo",
    formato: "entrevista",
    editoria: "saude",
    titulo: "Saúde mental na cidade: o que o município oferece além do Setembro Amarelo",
    linhaFina:
      "A partir do I Seminário Municipal de Saúde Mental, uma conversa sobre CAPS, fila e acolhimento durante o ano todo.",
    aApurar: [
      "Definir entrevistado da rede (CAPS ou atenção básica)",
      "Levantar capacidade de atendimento, fila e fluxo de encaminhamento",
      "Programação e conclusões do seminário de 10/09 (Auditório Romeu Coelho)",
    ],
    faltaSaber: ["Qual é a espera por uma primeira consulta em saúde mental na rede pública?"],
  },

  // ---------------------------------------------------------------- Vídeos
  {
    slug: "em-60-segundos-o-que-a-eleicao-decide",
    formato: "video",
    editoria: "politica",
    video: { orientacao: "vertical" },
    titulo: "Em 60 segundos: o que a eleição de outubro decide sobre Nova Serrana",
    linhaFina:
      "Deputados, senador e governo definem emendas, obras federais e políticas que chegam à cidade. Um resumo direto.",
    aApurar: [
      "Roteiro: quais recursos e decisões passam por cargos federais e estaduais",
      "Exemplos locais (BR-262, financiamento do polo calçadista, repasses de saúde)",
      "Checar o calendário eleitoral e as regras de conteúdo no período",
    ],
  },
  {
    slug: "portal-da-transparencia-tres-buscas",
    formato: "video",
    editoria: "servicos",
    video: { orientacao: "vertical" },
    titulo: "Portal da transparência: três buscas para fazer pelo celular",
    linhaFina: "Contratos, despesas e salários: onde tocar e como ler o que aparece.",
    aApurar: [
      "Gravar a tela do portal do município, passo a passo",
      "Conferir se os links são estáveis",
      "Explicar a diferença entre valor empenhado, liquidado e pago",
    ],
  },
  {
    slug: "do-imovel-publico-ao-leilao",
    formato: "video",
    editoria: "cidade",
    video: { orientacao: "vertical" },
    titulo: "Do imóvel público ao leilão: como funciona",
    linhaFina:
      "No gancho do leilão de 16 de setembro, o caminho de avaliação, edital e destino do dinheiro.",
    aApurar: [
      "Roteiro com base no edital real",
      "Imagens dos imóveis, se forem públicas e permitidas",
      "Confirmar as regras de participação",
    ],
  },
  {
    slug: "perguntamos-nas-ruas-saude",
    formato: "video",
    editoria: "saude",
    video: { orientacao: "vertical" },
    titulo: "Perguntamos nas ruas: o que precisa melhorar na saúde da cidade?",
    linhaFina:
      "Vozes de moradores no gancho do hospital, do mutirão de catarata e da hemodiálise.",
    aApurar: [
      "Definir pontos de gravação e roteiro de perguntas",
      "Colher autorização de imagem dos entrevistados",
      "Levar dados oficiais sobre os temas citados, para contraponto",
    ],
  },
];
