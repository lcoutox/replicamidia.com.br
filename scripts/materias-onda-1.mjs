// Primeira onda: 6 matérias redigidas para a estreia da Réplica.
// Institucional e opinião são publicáveis após revisão de tom.
// As notas de serviço e a análise têm trechos [CONFIRMAR: ...] a fechar em fonte primária.

const p = (t) => ["p", t];
const h = (t) => ["h2", t];
const ul = (...itens) => ["ul", itens];
const fonte = (nome, url) => (url ? { nome, url } : { nome });

export const ONDA_1 = [
  // ---------------------------------------------------------------- 1
  {
    slug: "a-replica-comeca-hoje",
    formato: "nota",
    editoria: null,
    titulo: "A Réplica começa hoje. Veja a que ela se propõe.",
    linhaFina:
      "Nasce em Nova Serrana um veículo para informar com fonte e data, opinar com clareza e cobrar o que foi prometido.",
    seo: {
      metaTitulo: "A Réplica começa hoje em Nova Serrana",
      metaDescricao:
        "Um novo veículo para informar, questionar e conversar sobre Nova Serrana — com fonte e data em tudo, opinião identificada e correção à vista.",
    },
    corpo: [
      p("A Réplica nasce em Nova Serrana com um propósito simples de enunciar e difícil de manter: informar com clareza, questionar com fundamento e conversar com quem vive a cidade."),
      p("Todo dia tem notícia por aqui — obra que começa, lei que é aprovada, campanha que é lançada. O que costuma faltar é o segundo capítulo. O prazo foi cumprido? A lei saiu do papel? Quem ficou responsável? É nesse espaço, entre o anúncio e a consequência, que a Réplica quer trabalhar."),
      h("Como vamos trabalhar"),
      p("Toda informação publicada aqui vem com fonte e data. Quando o texto é análise ou opinião, dizemos isso com todas as letras. As entrevistas preservam o contexto de quem fala, e aspas só aparecem em citações verificadas."),
      p("Não assinamos as matérias com nomes de pessoas. Quem publica é a Réplica, e é a Réplica que responde pelo que publica."),
      h("Quando erramos"),
      p("Erro acontece. Quando acontecer aqui, a correção fica na própria página, com data e a descrição do que mudou. O texto anterior não desaparece em silêncio."),
      h("Fale com a gente"),
      p("Viu algo que merece apuração? Foi citado e quer responder? Escreva. Os canais estão no rodapé do site e no nosso perfil no Instagram. [CONFIRMAR: e-mail e WhatsApp de contato]"),
    ],
    fontes: [],
  },

  // ---------------------------------------------------------------- 2
  {
    slug: "transparencia-nao-e-favor",
    formato: "opiniao",
    editoria: "cidade",
    titulo: "Transparência não é favor. É o mínimo.",
    linhaFina:
      "Dado público difícil de achar produz o mesmo efeito que dado escondido. O teste é se o morador consegue usar.",
    seo: {
      metaTitulo: "Transparência não é favor. É o mínimo",
      metaDescricao:
        "Publicar contrato e salário no portal cumpre a lei, mas não basta: transparência de verdade é a que o cidadão de Nova Serrana consegue usar.",
    },
    corpo: [
      p("A lei é clara: órgãos públicos precisam divulgar receitas, despesas, contratos, licitações e salários. Essa parte, em geral, é cumprida. O problema mora na distância entre publicar e informar."),
      h("Publicado não é o mesmo que acessível"),
      p("Uma planilha sem explicação, um PDF que não abre direito no celular, um relatório em formato que ninguém consegue filtrar, um link que muda de endereço a cada troca de gestão. Nada disso é ilegal. E, ainda assim, produz o mesmo efeito prático de esconder: afasta justamente quem mais precisa da informação e tem menos tempo para caçá-la."),
      h("O teste é simples"),
      p("Transparência que funciona é a que um morador comum consegue usar para responder a uma pergunta concreta: quanto custou aquela obra, quem ganhou aquela licitação, quanto ganha aquele cargo. Se a resposta exige conhecer o caminho por dentro, a transparência existe no papel e falha na prática."),
      h("Vale para a Réplica também"),
      p("Esse padrão não é só uma cobrança que fazemos ao poder público. É o que tentamos aplicar aqui: fonte identificada em cada informação, método explicado quando o assunto é complexo e correção visível quando erramos."),
    ],
    fontes: [
      fonte(
        "Lei de Acesso à Informação (Lei nº 12.527/2011)",
        "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm",
      ),
    ],
  },

  // ---------------------------------------------------------------- 3
  {
    slug: "ano-eleitoral-publicidade-oficial",
    formato: "opiniao",
    editoria: "politica",
    titulo: "Ano eleitoral: o que pode e o que não pode na publicidade oficial",
    linhaFina:
      "A lei restringe a propaganda dos governos até a eleição. Ela não autoriza o poder público a parar de informar o cidadão.",
    seo: {
      metaTitulo: "Publicidade oficial no ano eleitoral: o que muda",
      metaDescricao:
        "Até outubro, a lei limita a propaganda institucional de União e Estado. Serviço essencial — saúde, obra, segurança — continua sendo dever informar.",
    },
    corpo: [
      p("Estamos em ano de eleição geral, e isso muda o que os governos podem divulgar. A regra costuma gerar confusão nas duas pontas: quem acha que ela proíbe qualquer comunicação e quem a trata como desculpa para não informar nada."),
      h("O que a lei restringe"),
      p("A Lei das Eleições veda a publicidade institucional dos órgãos públicos nos três meses que antecedem o pleito, com duas exceções: a propaganda de produtos e serviços que competem no mercado e os casos de grave e urgente necessidade pública reconhecida pela Justiça Eleitoral. A intenção é impedir que a máquina do Estado — verba, outdoor, rede social oficial — promova candidaturas."),
      p("Em 2026, os cargos em disputa são federais e estaduais. A vedação recai, portanto, sobre a União e o governo de Minas. A prefeitura de Nova Serrana, cujos cargos não estão em jogo neste ano, tem margem legal maior — o que não a dispensa do bom senso. [CONFIRMAR: datas exatas do período vedado no calendário eleitoral 2026 do TSE]"),
      h("O que a lei não autoriza"),
      p("Restringir propaganda não é o mesmo que suspender o dever de informar. Campanha de vacinação, mutirão de exames, interdição de via, alerta de defesa civil, prazo de matrícula: nada disso é propaganda de gestão. É informação de serviço, e o silêncio sobre ela não cumpre a lei eleitoral — apenas prejudica quem precisa do dado."),
      h("O que a Réplica vai cobrar"),
      p("A mesma régua para os dois lados. De um lado, nada de propaganda de realização de governo vestida de utilidade pública. De outro, nada de apagão de serviço com a lei eleitoral como álibi. Quando a linha for cruzada em qualquer direção, a gente aponta — com o artigo da lei ao lado."),
    ],
    fontes: [
      fonte(
        "Lei das Eleições (Lei nº 9.504/1997), art. 73, inciso VI",
        "https://www.planalto.gov.br/ccivil_03/leis/l9504.htm",
      ),
      fonte(
        "TSE — Condutas vedadas a agentes públicos: propaganda institucional",
        "https://temasselecionados.tse.jus.br/temas-selecionados/condutas-vedadas-a-agentes-publicos/propaganda-institucional",
      ),
    ],
  },

  // ---------------------------------------------------------------- 4
  {
    slug: "como-acompanhar-a-camara-de-nova-serrana",
    formato: "nota",
    editoria: "politica",
    titulo: "Como acompanhar as sessões da Câmara de Nova Serrana",
    linhaFina:
      "As sessões são públicas e transmitidas. Veja onde achar a pauta, a transmissão ao vivo e o voto de cada vereador.",
    seo: {
      metaTitulo: "Como acompanhar a Câmara de Nova Serrana",
      metaDescricao:
        "Pauta, transmissão ao vivo e placar de votação da Câmara Municipal de Nova Serrana: os links oficiais e como usar cada um.",
    },
    corpo: [
      p("As sessões da Câmara Municipal de Nova Serrana são públicas. Dá para acompanhar de casa, ao vivo ou depois — e é assim que se vê como cada vereador votou, detalhe que nem sempre aparece nos resumos que circulam."),
      h("Quando acontecem"),
      p("As sessões ordinárias seguem calendário fixo durante o ano legislativo. [CONFIRMAR: dia da semana e horário — checar na página de pautas do site ou pelo telefone (37) 3225-9200]"),
      h("Onde ver a pauta"),
      p("A pauta de cada reunião plenária é publicada com antecedência no site da Câmara, em novaserrana.cam.mg.gov.br, na área de matérias legislativas. Nela estão os projetos que serão discutidos e votados. Vale olhar com atenção votações sobre orçamento, criação ou reajuste de cargos, concessão de serviço público e mudanças no plano diretor."),
      h("Onde assistir"),
      p("A transmissão ao vivo fica no próprio site e no canal da Câmara no YouTube. As gravações de sessões ordinárias, extraordinárias e solenes ficam disponíveis depois."),
      h("Como conferir o voto de cada um"),
      p("As atas e os placares de votação ficam publicados na área de downloads do site, por categoria. É ali que se confirma quem votou a favor, contra ou se absteve em cada projeto."),
      p("A Réplica vai publicar um resumo sempre que houver votação relevante para a cidade."),
    ],
    perguntasEmAberto: ["As votações nominais de anos anteriores ficam disponíveis para consulta?"],
    fontes: [
      fonte("Câmara Municipal de Nova Serrana — site oficial", "https://www.novaserrana.cam.mg.gov.br/"),
      fonte(
        "Câmara Municipal de Nova Serrana — canal no YouTube",
        "https://www.youtube.com/c/camaramunicipaldenovaserrana",
      ),
    ],
  },

  // ---------------------------------------------------------------- 5
  {
    slug: "leilao-de-imoveis-publicos-de-nova-serrana",
    formato: "nota",
    editoria: "cidade",
    titulo: "Nova Serrana leiloa dois imóveis públicos em 16 de setembro",
    linhaFina:
      "É a retomada do formato presencial depois de pregões eletrônicos sem proposta. O que o edital traz e o que ainda falta esclarecer.",
    seo: {
      metaTitulo: "Nova Serrana leiloa 2 imóveis públicos em setembro",
      metaDescricao:
        "Leilão Presencial nº 006/2026 marcado para 16 de setembro, no Centro Administrativo. É a retomada do presencial após pregões eletrônicos fracassados.",
    },
    resumo: [
      "O Leilão Presencial nº 006/2026 vende duas áreas do município, com data marcada para 16 de setembro de 2026.",
      "É a retomada do formato presencial depois de tentativas eletrônicas sem propostas válidas.",
      "O edital está no portal da Prefeitura; a Réplica busca a localização e o lance mínimo de cada imóvel.",
    ],
    corpo: [
      p("A Prefeitura de Nova Serrana publicou o Leilão Presencial nº 006/2026 para vender duas áreas de propriedade do município. É a retomada do formato presencial depois de tentativas no pregão eletrônico, neste ano, terminarem sem propostas válidas ou interessados suficientes."),
      h("O que o edital traz"),
      ul(
        "Data e hora: 16 de setembro de 2026, às 9h [CONFIRMAR no edital]",
        "Local: Centro Administrativo, Rua João Martins do Espírito Santo, 12, Park Dona Gumercinda Martins [CONFIRMAR sala e endereço]",
        "Imóveis: duas áreas do município [CONFIRMAR bairro, tamanho e matrícula de cada]",
        "Lance mínimo: [CONFIRMAR por imóvel]",
        "Leis autorizadoras: [CONFIRMAR — a checar se são as Leis Municipais nºs 3.478/2025 e 3.479/2025]",
      ),
      h("Como pagar"),
      p("Pelas condições divulgadas, quem arrematar pode pagar o valor integral em até 24 horas após a homologação ou parcelar em até 10 vezes, com a primeira parcela também vencendo em 24 horas. [CONFIRMAR no edital]"),
      h("Onde ver o documento"),
      p("O edital completo, com o anexo que descreve os imóveis, está no portal da Prefeitura, em novaserrana.mg.gov.br, na área de editais de licitações."),
    ],
    perguntasEmAberto: [
      "Quais são os dois imóveis e por que estão sendo vendidos?",
      "Para onde vai o dinheiro da venda no orçamento?",
    ],
    fontes: [
      fonte(
        "Prefeitura de Nova Serrana — Editais de Licitações",
        "https://www.novaserrana.mg.gov.br/portal/editais/1",
      ),
      fonte(
        "O Popular NS — cobertura do leilão de imóveis",
        "https://www.opopularns.com.br/prefeitura-coloca-imoveis-publicos-em-leilao-com-lances-a-partir-de-r-21-milhoes-em-nova-serrana/",
      ),
    ],
  },

  // ---------------------------------------------------------------- 6
  {
    slug: "febrac-automacao-e-o-emprego-no-calcado",
    formato: "analise",
    editoria: "economia",
    titulo: "A FEBRAC aposta na automação. E o emprego no calçado?",
    linhaFina:
      "A feira do polo colocou máquina e inteligência artificial na vitrine. Para uma cidade que vive de calçado, a pergunta que fica é sobre o trabalho.",
    seo: {
      metaTitulo: "FEBRAC, automação e o emprego no calçado",
      metaDescricao:
        "A 15ª FEBRAC, em Nova Serrana, teve a automação como vitrine. Como ler o efeito disso no emprego do polo calçadista sem exagero nem alarme.",
    },
    resumo: [
      "A 15ª FEBRAC, de 25 a 27 de agosto, teve a automação e a inteligência artificial como foco.",
      "O polo calçadista de Nova Serrana concentra centenas de fábricas e dezenas de milhares de empregos.",
      "Automação corta custo; o efeito sobre postos de trabalho e produção em domicílio precisa ser acompanhado mês a mês.",
    ],
    corpo: [
      p("A 15ª FEBRAC, a feira de máquinas e componentes para calçados de Nova Serrana, aconteceu de 25 a 27 de agosto no Centro de Convenções, com mais de cem marcas expositoras e cerca de três mil visitantes. O tema central da edição foi a automação — máquinas, linhas integradas e inteligência artificial aplicada à produção."),
      p("Para uma cidade cuja economia é o calçado, uma feira sobre automatizar a produção levanta uma pergunta que vai além do balanço de expositores: o que isso faz com o emprego?"),
      h("O tamanho do que está em jogo"),
      p("O polo calçadista de Nova Serrana e municípios vizinhos concentra centenas de indústrias e responde por dezenas de milhares de empregos, diretos e indiretos, além de produção que passa das cem milhões de pares por ano. [CONFIRMAR: números atualizados de empresas, empregos e produção junto ao Sindinova e à FIEMG]. Parte relevante desse trabalho acontece fora das fábricas, em bancas e na produção feita em casa — arranjo que gera renda e, ao mesmo tempo, escapa de boa parte das estatísticas."),
      h("Por que a leitura mês a mês engana"),
      p("O emprego no calçado é sazonal. Sobe no segundo semestre, quando as fábricas produzem para as vendas de fim de ano, e recua depois. Comparar um mês com o anterior quase sempre confunde ciclo com tendência. A comparação honesta é com o mesmo mês do ano anterior — e esse dado existe: o Novo Caged, do Ministério do Trabalho, divulga admissões e desligamentos por município todo mês."),
      h("O que a Réplica vai acompanhar"),
      p("Três sinais, ao longo dos próximos meses: o saldo de empregos formais no setor calçadista da cidade no acumulado do ano; o comportamento das atividades ligadas à cadeia, como componentes e embalagens; e o que dizem indústrias, trabalhadores e o sindicato sobre o efeito concreto da automação — se ela cria funções novas, substitui funções antigas, ou as duas coisas ao mesmo tempo."),
      h("O que falta saber"),
      p("Quanto do trabalho no polo é formal e quanto fica fora das estatísticas. E como a produção em domicílio aparece — ou não — nos números oficiais de emprego."),
    ],
    perguntasEmAberto: [
      "A automação está criando ou substituindo postos no polo?",
      "Como a produção feita em casa aparece nos números oficiais de emprego?",
    ],
    fontes: [
      fonte("Sindinova / FEBRAC — página oficial da feira", "https://www.feirafebrac.com.br/"),
      fonte(
        "Novo Caged — Ministério do Trabalho e Emprego",
        "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/novo-caged",
      ),
      fonte(
        "Portal Gerais — cobertura da 15ª FEBRAC",
        "https://portalgerais.com/15a-febrac-em-nova-serrana-reune-mais-de-100-marcas-e-tecnologia",
      ),
    ],
  },
];
