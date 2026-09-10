import type { BlocoCorpo, Configuracoes, Editoria, Imagem, Materia } from "./types";

// CONTEÚDO ILUSTRATIVO para desenvolvimento e demonstração do layout.
// Não é apuração: pessoas entrevistadas são fictícias e as imagens são de banco genérico.
// Assim que o Sanity estiver configurado, este arquivo deixa de ser usado pelo site.
// Também alimenta scripts/gerar-seed.mjs, por isso usa apenas imports de tipo.

let contador = 0;
const k = () => `demo${++contador}`;

function bloco(style: "normal" | "h2", texto: string): BlocoCorpo {
  return {
    _type: "block",
    _key: k(),
    style,
    markDefs: [],
    children: [{ _type: "span", _key: k(), text: texto, marks: [] }],
  };
}

const p = (texto: string) => bloco("normal", texto);
const h2 = (texto: string) => bloco("h2", texto);

const citacao = (texto: string, autor: string, contexto?: string): BlocoCorpo => ({
  _type: "citacao",
  _key: k(),
  texto,
  autor,
  contexto,
});

const pr = (pergunta: string, resposta: string): BlocoCorpo => ({
  _type: "perguntaResposta",
  _key: k(),
  pergunta,
  resposta,
});

function foto(seed: string, largura = 1600, altura = 1066): Imagem {
  return {
    url: `https://picsum.photos/seed/replica-${seed}/${largura}/${altura}?grayscale`,
    alt: "Imagem ilustrativa de demonstração",
    credito: "Imagem ilustrativa",
    width: largura,
    height: altura,
  };
}

const fotoVertical = (seed: string) => foto(seed, 900, 1600);

const data = (dia: number, hora: string) => `2026-09-${String(dia).padStart(2, "0")}T${hora}:00-03:00`;

export const EDITORIAS_DEMO = {
  cidade: { titulo: "Cidade", slug: "cidade" },
  politica: { titulo: "Política", slug: "politica" },
  economia: { titulo: "Economia", slug: "economia" },
  servicos: { titulo: "Serviços", slug: "servicos" },
  saude: { titulo: "Saúde", slug: "saude" },
  educacao: { titulo: "Educação", slug: "educacao" },
} satisfies Record<string, Editoria>;

const E = EDITORIAS_DEMO;

export const CONFIGURACOES_DEMO: Configuracoes = {};

export const MATERIAS_DEMO: Materia[] = [
  {
    _id: "demo-obra-prazo",
    slug: "obra-passou-do-prazo-nova-previsao",
    formato: "reportagem",
    editoria: E.cidade,
    titulo: "O prazo informado terminou. Qual é a nova previsão de entrega?",
    linhaFina:
      "A Réplica reuniu o cronograma divulgado, o que se vê no canteiro e as perguntas que seguem sem resposta sobre a obra.",
    imagem: foto("obra"),
    publicadoEm: data(10, "07:30"),
    atualizadoEm: data(10, "11:00"),
    resumo: [
      "O cronograma divulgado previa a conclusão para o fim do mês passado.",
      "No local, parte das frentes de trabalho está sem atividade visível.",
      "A Réplica pediu uma nova previsão ao órgão responsável e vai atualizar este texto.",
    ],
    corpo: [
      p(
        "O prazo informado para a entrega terminou. Quem passa pelo trecho ainda encontra tapumes, desvios e máquinas paradas em parte do dia. A pergunta que motivou esta reportagem é simples: qual é a nova previsão?",
      ),
      h2("O que foi prometido"),
      p(
        "O cronograma apresentado no início da obra dividia o trabalho em três etapas: drenagem, pavimentação e sinalização. A última delas deveria estar concluída no fim do mês passado.",
      ),
      p(
        "Contratos e aditivos costumam ficar disponíveis no portal da transparência. É ali que se verifica se o prazo foi formalmente prorrogado e por qual motivo.",
      ),
      h2("O que se vê no local"),
      p(
        "Em visitas feitas em dias e horários diferentes, a equipe observou atividade em apenas uma das frentes. Comerciantes do trecho relatam queda no movimento desde o início dos desvios.",
      ),
      citacao(
        "A gente entende que obra atrasa. O que falta é alguém dizer até quando.",
        "Comerciante do trecho",
        "em conversa com a Réplica",
      ),
      h2("O que a Réplica perguntou"),
      p(
        "Enviamos ao órgão responsável três perguntas: se houve aditivo de prazo, qual é a nova data de entrega e quais medidas estão previstas para reduzir o impacto no comércio. Este texto será atualizado quando houver resposta.",
      ),
    ],
    perguntasEmAberto: [
      "Houve aditivo formal de prazo? Com qual justificativa?",
      "Qual é a nova data de entrega?",
      "O atraso altera o valor final do contrato?",
    ],
    fontes: [
      { nome: "Portal da transparência do município" },
      { nome: "Visitas da equipe ao local" },
      { nome: "Conversas com comerciantes do trecho" },
    ],
  },
  {
    _id: "demo-calcado-sazonalidade",
    slug: "emprego-no-calcado-o-que-observar",
    formato: "analise",
    editoria: E.economia,
    titulo: "Emprego no calçado sobe e desce com as encomendas. O que observar até dezembro",
    linhaFina:
      "A produção da cidade segue o calendário do varejo. Entender esse ciclo ajuda a ler os números de contratação sem exagero nem alarme.",
    imagem: foto("calcado"),
    publicadoEm: data(9, "18:00"),
    resumo: [
      "O emprego industrial na cidade tem forte componente sazonal.",
      "Comparar um mês com o anterior pode enganar; o mesmo mês do ano passado é referência melhor.",
      "Dados de admissões e desligamentos são públicos e mensais.",
    ],
    corpo: [
      p(
        "Nova Serrana é conhecida pela produção de calçados esportivos, e o ritmo das fábricas acompanha o calendário do varejo. Encomendas para as vendas de fim de ano costumam movimentar contratações no segundo semestre.",
      ),
      h2("Por que o mês a mês engana"),
      p(
        "Quando um setor é sazonal, uma queda entre dois meses pode ser apenas o ciclo normal. A comparação mais honesta é com o mesmo período do ano anterior.",
      ),
      p(
        "Os dados de admissões e desligamentos com carteira assinada são divulgados mensalmente pelo governo federal e permitem esse tipo de leitura por município.",
      ),
      h2("O que observar"),
      p(
        "Três sinais ajudam a separar ciclo de tendência: o saldo acumulado no ano, a comparação com o mesmo mês do ano anterior e o comportamento de atividades ligadas ao calçado, como componentes e embalagens.",
      ),
      p("Esta análise será atualizada quando os próximos dados mensais forem publicados."),
    ],
    perguntasEmAberto: [
      "Quanto do trabalho no setor é formal e quanto fica fora das estatísticas?",
      "Como a produção feita em casa aparece, ou deixa de aparecer, nos números oficiais?",
    ],
    fontes: [{ nome: "Novo Caged, Ministério do Trabalho e Emprego" }],
  },
  {
    _id: "demo-conversa-associacao",
    slug: "lideranca-comunitaria-cobra-calendario",
    formato: "entrevista",
    editoria: E.cidade,
    titulo: "Liderança comunitária cobra calendário para asfalto e iluminação",
    linhaFina:
      "Em conversa com a Réplica, ela explica como a associação acompanha pedidos feitos ao poder público e o que muda quando as respostas têm data.",
    frase: "Bairro não quer favor. Quer saber quando o serviço chega.",
    entrevistado: {
      nome: "Ana Ribeiro",
      descricao: "presidente de associação de moradores (personagem fictícia de demonstração)",
    },
    imagem: foto("conversa-ana"),
    publicadoEm: data(8, "09:00"),
    corpo: [
      p(
        "A associação de moradores reúne pedidos do bairro e acompanha cada protocolo aberto. A Réplica conversou com a presidente da entidade sobre o que funciona, o que trava e como a cobrança pode ser mais eficiente. A entrevista foi editada para concisão.",
      ),
      pr(
        "Como a associação organiza os pedidos dos moradores?",
        "A gente anota tudo numa planilha: o que foi pedido, quando, o número do protocolo e a resposta. Sem isso, cada reunião começa do zero.",
      ),
      pr(
        "Qual é a reclamação mais frequente hoje?",
        "Iluminação e asfalto. Tem rua que recebeu promessa de obra mais de uma vez. Bairro não quer favor. Quer saber quando o serviço chega.",
      ),
      pr(
        "O que muda quando existe uma data?",
        "Muda tudo. Com data, dá para cobrar. Sem data, a resposta vira \"está em estudo\" e ninguém sabe o que isso significa.",
      ),
      pr(
        "Que conselho você dá para quem quer cobrar um serviço público?",
        "Guardar o protocolo, pedir a resposta por escrito e procurar a Câmara quando o prazo passar.\n\nE conversar com os vizinhos: pedido coletivo pesa mais.",
      ),
    ],
    fontes: [{ nome: "Entrevista concedida à Réplica" }],
  },
  {
    _id: "demo-opiniao-prometido",
    slug: "a-cidade-merece-saber-o-que-foi-prometido",
    formato: "opiniao",
    editoria: E.politica,
    titulo: "A cidade merece saber o que foi prometido e o que foi entregue",
    linhaFina: "Prestação de contas não é peça de campanha. É um calendário público, com datas, valores e responsáveis.",
    publicadoEm: data(9, "08:00"),
    corpo: [
      p(
        "Toda gestão apresenta planos. O problema começa quando o plano vira anúncio e o anúncio não volta a ser mencionado. Sem acompanhamento, a promessa perde a data e a cobrança perde a força.",
      ),
      p(
        "A Réplica defende uma prática simples: cada compromisso público deveria ter prazo, valor estimado e um responsável identificado. Essas informações já existem em documentos oficiais; falta reuni-las em linguagem clara.",
      ),
      h2("Por que isso importa"),
      p(
        "Quando o cidadão sabe o que foi prometido, consegue perguntar o que mudou. Quando não sabe, o debate fica refém da versão mais barulhenta.",
      ),
      p(
        "Nos próximos meses, vamos acompanhar compromissos anunciados e publicar o andamento de cada um. Se o prazo terminar, vamos perguntar: qual é a nova previsão?",
      ),
    ],
    fontes: [{ nome: "Plano plurianual e leis orçamentárias do município" }],
  },
  {
    _id: "demo-opiniao-transparencia",
    slug: "transparencia-nao-e-favor",
    formato: "opiniao",
    editoria: E.cidade,
    titulo: "Transparência não é favor. É o mínimo",
    linhaFina: "Dados públicos difíceis de encontrar produzem o mesmo efeito que dados escondidos.",
    publicadoEm: data(6, "10:00"),
    corpo: [
      p(
        "A lei obriga órgãos públicos a divulgar receitas, despesas, contratos e salários. Cumprir a lei no papel, porém, é diferente de tornar a informação compreensível.",
      ),
      p(
        "Uma planilha sem explicação, um arquivo que não abre no celular ou um link que muda de endereço a cada ano afastam justamente quem mais precisa da informação.",
      ),
      p(
        "Transparência de verdade é aquela que o morador consegue usar. É esse o padrão que a Réplica vai cobrar e aplicar ao próprio trabalho, com fontes identificadas e correções visíveis.",
      ),
    ],
    fontes: [{ nome: "Lei de Acesso à Informação (Lei nº 12.527/2011)" }],
  },
  {
    _id: "demo-opiniao-calcada",
    slug: "calcada-tambem-e-politica-publica",
    formato: "opiniao",
    editoria: E.servicos,
    titulo: "Calçada também é política pública",
    linhaFina: "Quem anda a pé, empurra carrinho ou usa cadeira de rodas sabe que a cidade começa no meio-fio.",
    publicadoEm: data(3, "09:00"),
    corpo: [
      p(
        "Discussões sobre mobilidade costumam começar pelos carros. Mas boa parte dos deslocamentos curtos começa e termina a pé, e é na calçada que a falta de planejamento aparece primeiro.",
      ),
      p(
        "Buracos, rampas improvisadas e obstáculos transformam trajetos simples em risco, principalmente para idosos e pessoas com deficiência.",
      ),
      p(
        "Fiscalizar, orientar e dar prazo para adequação é responsabilidade do poder público. Tratar a calçada como assunto privado de cada lote é uma escolha, e ela tem consequências.",
      ),
    ],
  },
  {
    _id: "demo-nota-documentos",
    slug: "atendimento-documentos-horario-estendido",
    formato: "nota",
    editoria: E.servicos,
    titulo: "Atendimento para emissão de documentos terá horário estendido nesta semana",
    linhaFina: "Leve documento original com foto e comprovante de endereço atualizado.",
    publicadoEm: data(10, "09:15"),
    corpo: [
      p(
        "O atendimento para emissão de documentos funcionará em horário estendido nesta semana. É preciso levar documento original com foto e comprovante de endereço atualizado.",
      ),
      p("Confirme endereço e horário nos canais oficiais antes de sair de casa. Esta nota será atualizada se houver mudança."),
    ],
    fontes: [{ nome: "Comunicado oficial do serviço de atendimento" }],
  },
  {
    _id: "demo-nota-vacinacao",
    slug: "vacinacao-onde-procurar-atendimento",
    formato: "nota",
    editoria: E.saude,
    titulo: "Vacinação: onde procurar atendimento e o que levar",
    linhaFina: "Unidades básicas de saúde atendem em horário regular; leve o cartão de vacina.",
    publicadoEm: data(9, "14:40"),
    corpo: [
      p(
        "A vacinação está disponível nas unidades básicas de saúde, em horário regular de funcionamento. Leve documento com foto e, se tiver, o cartão de vacina.",
      ),
      p("Quem tem dúvida sobre doses pendentes pode pedir a avaliação da caderneta na própria unidade."),
    ],
    fontes: [{ nome: "Secretaria Municipal de Saúde" }],
  },
  {
    _id: "demo-nota-camara",
    slug: "sessoes-da-camara-pela-internet",
    formato: "nota",
    editoria: E.politica,
    titulo: "Sessões da Câmara podem ser acompanhadas pela internet",
    linhaFina: "As gravações permitem conferir votações e discursos depois da sessão.",
    publicadoEm: data(8, "17:20"),
    corpo: [
      p(
        "As sessões ordinárias da Câmara Municipal são abertas ao público e podem ser acompanhadas pela internet. As gravações permitem conferir como cada vereador votou.",
      ),
      p("A pauta costuma ser divulgada antes da sessão. Sempre que houver votação relevante, a Réplica publica um resumo do que foi decidido."),
    ],
    fontes: [{ nome: "Câmara Municipal" }],
  },
  {
    _id: "demo-nota-transito",
    slug: "mudanca-de-sentido-rua-do-centro",
    formato: "nota",
    editoria: E.cidade,
    titulo: "Mudança de sentido em rua do Centro começa a valer na segunda",
    linhaFina: "Agentes de trânsito vão orientar motoristas nos primeiros dias.",
    publicadoEm: data(7, "11:00"),
    corpo: [
      p(
        "A alteração no sentido de circulação começa a valer na segunda-feira. Nos primeiros dias, agentes de trânsito vão orientar motoristas e pedestres no local.",
      ),
      p("A Réplica pediu o estudo que embasou a mudança e publicará os detalhes assim que o documento for enviado."),
    ],
    fontes: [{ nome: "Comunicado do órgão municipal de trânsito" }],
  },
  {
    _id: "demo-video-audiencia",
    slug: "em-60-segundos-audiencia-publica",
    formato: "video",
    editoria: E.politica,
    titulo: "Em 60 segundos: o que é uma audiência pública e como participar",
    linhaFina: "Qualquer morador pode acompanhar e, em muitos casos, se inscrever para falar.",
    imagem: fotoVertical("video-audiencia"),
    video: { orientacao: "vertical", duracao: "1:00" },
    publicadoEm: data(10, "12:00"),
    corpo: [
      p(
        "Audiências públicas são encontros abertos em que o poder público apresenta um tema e ouve a população. Orçamento, plano diretor e grandes obras costumam passar por elas.",
      ),
      p("Neste vídeo, explicamos como saber quando uma audiência vai acontecer e o que levar para participar."),
    ],
  },
  {
    _id: "demo-video-transparencia",
    slug: "portal-da-transparencia-tres-buscas",
    formato: "video",
    editoria: E.servicos,
    titulo: "Portal da transparência: três buscas para fazer pelo celular",
    linhaFina: "Contratos, salários e despesas: onde clicar e como ler o que aparece.",
    imagem: fotoVertical("video-transparencia"),
    video: { orientacao: "vertical", duracao: "1:30" },
    publicadoEm: data(8, "12:00"),
    corpo: [p("Um passo a passo curto para encontrar contratos, despesas e salários no portal da transparência.")],
  },
  {
    _id: "demo-video-transporte",
    slug: "perguntamos-nas-ruas-transporte",
    formato: "video",
    editoria: E.cidade,
    titulo: "Perguntamos nas ruas: o que precisa mudar no transporte?",
    linhaFina: "Horários, pontos e integração aparecem entre as respostas.",
    imagem: fotoVertical("video-transporte"),
    video: { orientacao: "vertical", duracao: "2:10" },
    publicadoEm: data(5, "12:00"),
    corpo: [p("Ouvimos moradores em diferentes pontos da cidade sobre o transporte coletivo.")],
  },
  {
    _id: "demo-video-projeto-de-lei",
    slug: "explicamos-caminho-de-um-projeto-de-lei",
    formato: "video",
    editoria: E.politica,
    titulo: "Explicamos: o caminho de um projeto de lei na Câmara",
    linhaFina: "Da apresentação à sanção, quem decide em cada etapa.",
    imagem: foto("video-lei"),
    video: { orientacao: "horizontal", duracao: "4:30" },
    publicadoEm: data(2, "12:00"),
    corpo: [p("Um projeto de lei passa por protocolo, comissões, votação em plenário e sanção ou veto. Explicamos cada etapa.")],
  },
  {
    _id: "demo-video-coleta",
    slug: "em-60-segundos-coleta-seletiva",
    formato: "video",
    editoria: E.servicos,
    titulo: "Em 60 segundos: como separar o lixo reciclável",
    linhaFina: "O básico que evita contaminar o material coletado.",
    imagem: fotoVertical("video-coleta"),
    video: { orientacao: "vertical", duracao: "1:00" },
    publicadoEm: data(1, "12:00"),
    corpo: [p("Seco, limpo e separado: o essencial para a coleta seletiva funcionar.")],
  },
  {
    _id: "demo-fila-especialista",
    slug: "fila-por-consulta-com-especialista",
    formato: "reportagem",
    editoria: E.saude,
    titulo: "Fila por consulta com especialista: o que os dados públicos mostram e o que escondem",
    linhaFina: "O tempo de espera depende da especialidade, e nem sempre a informação está disponível por município.",
    imagem: foto("saude"),
    publicadoEm: data(7, "08:00"),
    atualizadoEm: data(7, "15:00"),
    resumo: [
      "A espera varia muito entre especialidades.",
      "Nem toda fila é publicada de forma aberta e atualizada.",
      "Pacientes podem pedir informações sobre a própria posição.",
    ],
    corpo: [
      p(
        "Quem precisa de consulta com especialista pelo sistema público costuma ouvir a mesma resposta: é preciso aguardar. Quanto tempo, porém, é uma pergunta que nem sempre tem resposta clara.",
      ),
      h2("Como a fila funciona"),
      p(
        "O encaminhamento parte da atenção básica. A partir daí, a marcação depende da oferta de vagas, que pode ser municipal ou regional, conforme a especialidade.",
      ),
      p(
        "Por isso, a espera para uma especialidade pode ser curta enquanto outra acumula meses. Uma média geral esconde essas diferenças.",
      ),
      h2("O que o paciente pode fazer"),
      p(
        "É possível pedir, na unidade de saúde, informações sobre a situação do próprio encaminhamento. Guardar o comprovante e anotar datas ajuda a acompanhar.",
      ),
    ],
    perguntasEmAberto: [
      "Quais especialidades têm a maior espera hoje?",
      "A fila é publicada de forma aberta e atualizada?",
    ],
    fontes: [{ nome: "Secretaria Municipal de Saúde" }, { nome: "Regras de regulação do SUS" }],
    correcoes: [
      {
        data: data(7, "15:00"),
        texto:
          "Uma versão anterior deste texto afirmava que toda a marcação é municipal. A oferta de vagas pode ser municipal ou regional, conforme a especialidade.",
      },
    ],
  },
  {
    _id: "demo-creche",
    slug: "vagas-em-creche-lista-de-espera",
    formato: "reportagem",
    editoria: E.educacao,
    titulo: "Vagas em creche: como funciona a lista de espera e como acompanhar sua posição",
    linhaFina: "Critérios de prioridade, documentos e prazos que as famílias precisam conhecer.",
    imagem: foto("creche"),
    publicadoEm: data(4, "08:00"),
    resumo: [
      "A inscrição costuma exigir documentos da criança e do responsável.",
      "Critérios de prioridade definem a ordem de chamada.",
      "Famílias podem pedir informação sobre a própria posição.",
    ],
    corpo: [
      p(
        "A procura por vagas em creche costuma ser maior que a oferta. Entender como a lista funciona ajuda as famílias a não perder prazos nem chamadas.",
      ),
      h2("Quem tem prioridade"),
      p("Os critérios de prioridade são definidos pela rede municipal e devem estar publicados em norma própria."),
      h2("Como acompanhar"),
      p("Mantenha telefone e endereço atualizados e peça, por escrito, a confirmação da inscrição."),
    ],
    perguntasEmAberto: ["Quantas crianças aguardam vaga hoje?", "Qual é o tempo médio de espera por bairro?"],
    fontes: [{ nome: "Secretaria Municipal de Educação" }],
  },
  {
    _id: "demo-orcamento",
    slug: "orcamento-municipal-quem-decide",
    formato: "analise",
    editoria: E.politica,
    titulo: "Orçamento municipal: onde está o dinheiro e quem decide como gastar",
    linhaFina: "Três leis organizam o gasto público. Saber ler cada uma é o primeiro passo para cobrar.",
    imagem: foto("orcamento"),
    publicadoEm: data(5, "18:00"),
    resumo: [
      "Plano plurianual, diretrizes orçamentárias e orçamento anual formam o ciclo.",
      "A Câmara vota as três leis; a população pode acompanhar as audiências.",
      "Planejado não é executado: vale comparar as duas colunas.",
    ],
    corpo: [
      p(
        "O dinheiro público da cidade passa por um ciclo de planejamento com três leis. Cada uma responde a uma pergunta diferente, e juntas mostram prioridades.",
      ),
      h2("As três leis"),
      p(
        "O plano plurianual define metas para quatro anos. A lei de diretrizes orçamentárias estabelece regras para o ano seguinte. A lei orçamentária anual distribui os valores.",
      ),
      h2("Planejado não é gasto"),
      p(
        "Um valor previsto no orçamento não significa que será executado. A comparação entre o autorizado e o efetivamente pago revela prioridades reais.",
      ),
    ],
    perguntasEmAberto: ["Quanto do orçamento previsto para obras foi executado neste ano?"],
    fontes: [{ nome: "Leis orçamentárias do município" }, { nome: "Portal da transparência" }],
  },
  {
    _id: "demo-conversa-urbanista",
    slug: "urbanista-crescimento-desordenado",
    formato: "entrevista",
    editoria: E.cidade,
    titulo: "Urbanista explica por que o crescimento desordenado custa caro para todos",
    linhaFina: "Loteamentos, transporte e saneamento: como decisões de hoje viram contas de amanhã.",
    frase: "A cidade cresceu mais rápido do que o planejamento conseguiu acompanhar.",
    entrevistado: { nome: "Carlos Menezes", descricao: "urbanista (personagem fictício de demonstração)" },
    imagem: foto("conversa-carlos"),
    publicadoEm: data(1, "09:00"),
    corpo: [
      p("Conversamos com um urbanista sobre os efeitos do crescimento acelerado. A entrevista foi editada para concisão."),
      pr(
        "O que caracteriza um crescimento desordenado?",
        "É quando a ocupação chega antes da infraestrutura. A casa fica pronta e só depois vêm asfalto, esgoto e transporte.",
      ),
      pr(
        "Quem paga essa conta?",
        "Todo mundo. Levar infraestrutura para uma área já ocupada é mais caro do que planejar antes. A cidade cresceu mais rápido do que o planejamento conseguiu acompanhar.",
      ),
      pr(
        "Por onde começar a corrigir?",
        "Pelo plano diretor, com participação de verdade. E por dados abertos: sem saber onde a cidade cresce, não dá para decidir onde investir.",
      ),
    ],
    fontes: [{ nome: "Entrevista concedida à Réplica" }],
  },
  {
    _id: "demo-coleta-seletiva",
    slug: "coleta-seletiva-como-saber-se-seu-bairro-e-atendido",
    formato: "reportagem",
    editoria: E.servicos,
    titulo: "Coleta seletiva: como separar o lixo e como saber se seu bairro é atendido",
    linhaFina: "O que vai em cada saco, os dias de coleta e para onde vai o material.",
    imagem: foto("coleta"),
    publicadoEm: data(2, "08:00"),
    corpo: [
      p("A separação correta em casa é o primeiro passo para que o material reciclável tenha destino adequado."),
      h2("Como separar"),
      p("Separe recicláveis secos e limpos do lixo orgânico. Vidro deve ser embalado para evitar acidentes."),
      h2("Dias e bairros"),
      p("O calendário de coleta por bairro deve ser informado pelo serviço de limpeza urbana."),
    ],
    fontes: [{ nome: "Serviço municipal de limpeza urbana" }],
  },
  {
    _id: "demo-producao-domicilio",
    slug: "producao-em-casa-direitos-e-riscos",
    formato: "reportagem",
    editoria: E.economia,
    titulo: "Produção em casa: direitos e riscos de quem trabalha para as fábricas",
    linhaFina: "Parte da produção de calçados acontece fora das fábricas. Entenda o que a lei garante.",
    imagem: foto("producao"),
    publicadoEm: data(6, "08:00"),
    resumo: [
      "Trabalho em domicílio também pode gerar vínculo e direitos.",
      "Informalidade dificulta acesso a benefícios.",
      "Segurança e saúde no trabalho valem dentro de casa.",
    ],
    corpo: [
      p(
        "Costura, colagem e acabamento de calçados muitas vezes acontecem em casa. Esse arranjo gera renda, mas também dúvidas sobre direitos e responsabilidades.",
      ),
      h2("O que diz a lei"),
      p("A legislação trabalhista não distingue o trabalho feito no estabelecimento do empregador daquele feito no domicílio, quando há relação de emprego."),
      h2("Riscos"),
      p("Produtos químicos, ventilação inadequada e jornadas longas estão entre os riscos citados por especialistas em saúde do trabalhador."),
    ],
    fontes: [{ nome: "Consolidação das Leis do Trabalho, art. 6º" }],
  },
  {
    _id: "demo-plano-diretor",
    slug: "plano-diretor-o-que-decide-sobre-seu-bairro",
    formato: "analise",
    editoria: E.cidade,
    titulo: "Plano diretor: o que ele decide sobre o seu bairro",
    linhaFina: "Altura de prédios, áreas industriais e expansão urbana passam por uma única lei.",
    imagem: foto("plano-diretor"),
    publicadoEm: data(3, "18:00"),
    corpo: [
      p("O plano diretor é a lei que orienta como a cidade cresce. Ele define onde pode haver indústria, comércio e moradia."),
      h2("Por que acompanhar"),
      p("Revisões do plano diretor exigem participação popular. É o momento de apresentar demandas do bairro."),
    ],
    perguntasEmAberto: ["Quando está prevista a próxima revisão do plano diretor?"],
    fontes: [{ nome: "Estatuto da Cidade (Lei nº 10.257/2001)" }],
  },
];
