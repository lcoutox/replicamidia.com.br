// Textos das pautas de estreia. Dois estados:
//   status "pronta"  -> revisar tom e publicar. Sem fato local não verificado.
//   status "apurar"  -> lead e estrutura escritos; trechos [CONFIRMAR: ...] precisam
//                       de fonte primária. O script adiciona aviso + checklist.
// Nada aqui deve ir ao ar sem passar pela redação.

const p = (t) => ["p", t];
const h = (t) => ["h2", t];
const ul = (...itens) => ["ul", itens];

export const TEXTOS = {
  // ============================================================ INSTITUCIONAIS
  "a-replica-comeca-hoje": {
    status: "pronta",
    corpo: [
      p("A Réplica nasce em Nova Serrana com um propósito simples de enunciar e difícil de manter: informar com clareza, questionar com fundamento e conversar com quem vive a cidade."),
      p("Todo dia tem notícia por aqui — obra que começa, lei que é aprovada, campanha que é lançada. O que costuma faltar é o segundo capítulo. O prazo foi cumprido? A lei saiu do papel? Quem ficou responsável? É nesse espaço, entre o anúncio e a consequência, que a Réplica quer trabalhar."),
      h("Como vamos trabalhar"),
      p("Toda informação publicada aqui vem com fonte e data. Quando o texto é análise ou opinião, dizemos isso com todas as letras. As entrevistas preservam o contexto de quem fala, e aspas só aparecem em citações verificadas."),
      p("Não assinamos as matérias com nomes de pessoas. Quem publica é a Réplica, e é a Réplica que responde pelo que publica."),
      h("Quando erramos"),
      p("Erro acontece. Quando acontecer aqui, a correção fica na própria página, com data e a descrição do que mudou. O texto anterior não desaparece em silêncio. É o padrão que vamos cobrar dos outros — não faria sentido não aplicar a nós mesmos."),
      h("Fale com a gente"),
      p("Viu algo que merece apuração? Foi citado e quer responder? Escreva. Os canais estão no rodapé do site e no nosso perfil no Instagram. [CONFIRMAR: e-mail e WhatsApp de contato antes de publicar]"),
    ],
  },
  "como-a-replica-se-organiza": {
    status: "pronta",
    corpo: [
      p("A Réplica publica em cinco frentes. Elas não competem entre si: cada uma responde a uma pergunta diferente."),
      h("Em pauta"),
      p("O que aconteceu, quando, onde e segundo qual fonte. São notas curtas e reportagens sobre o dia a dia da cidade — serviço, decisões públicas, o que muda para quem mora aqui."),
      h("Análise"),
      p("O passo seguinte ao fato. O que mudou depois? Quem respondeu? O que ainda não se sabe? A análise não é opinião: é a tentativa de organizar um assunto complexo sem simplificá-lo à força."),
      h("Opinião"),
      p("Aqui a Réplica assume uma interpretação. Todo texto de opinião é identificado como tal, explica o argumento e aponta os fatos que o sustentam."),
      h("Conversa"),
      p("Entrevistas. Identificamos quem fala, preservamos o sentido do que foi dito e publicamos aspas apenas quando a citação foi verificada."),
      h("Vídeos"),
      p("A cidade explicada em poucos minutos, na linguagem que usamos no Instagram. Explicadores, bastidores e o que a rua tem a dizer."),
      p("Em todas as frentes, a regra é a mesma: fonte, data e correção visível quando for o caso."),
    ],
  },
  "como-pedir-correcao": {
    status: "pronta",
    corpo: [
      p("A Réplica trata correção como parte do trabalho, não como constrangimento."),
      h("Encontrou um erro?"),
      p("Escreva para a gente apontando a matéria, o trecho e qual é o erro. Se puder, envie a informação correta e a fonte. A gente checa com o mesmo cuidado da apuração original."),
      p("Quando o erro se confirma, a correção é publicada na própria página, com data e a descrição do que mudou. Ajustes menores são corrigidos direto; mudanças que afetam o sentido ganham uma nota visível."),
      h("Foi citado e quer responder?"),
      p("O direito de resposta usa o mesmo canal. A manifestação de quem foi mencionado é avaliada com atenção e, quando pertinente, publicada junto ao texto original — para que quem leu um lado leia também o outro."),
      h("Onde falar com a gente"),
      p("[CONFIRMAR: e-mail de correções e direito de resposta]. Você também pode nos chamar pelas redes."),
    ],
  },
  "envie-sua-pauta": {
    status: "pronta",
    corpo: [
      p("A Réplica quer ouvir quem convive com os problemas antes de eles virarem notícia."),
      p("Prazo que estourou, serviço que piorou, contrato que ninguém explica, obra parada: mande para a gente com o máximo de detalhe — o que aconteceu, quando, onde, e os documentos que você tiver."),
      h("Sigilo"),
      p("Quando a fonte pede para não ser identificada, a identidade é preservada. Nada do que você mandar é publicado sem antes ser verificado por outros caminhos."),
      h("Como enviar"),
      p("[CONFIRMAR: número do WhatsApp]. Nas redes, é só mandar mensagem. Quanto mais concreto o relato, mais rápido conseguimos apurar."),
    ],
  },

  // ============================================================ NOTAS DE SERVIÇO
  "leilao-imoveis-publicos-setembro": {
    status: "apurar",
    corpo: [
      p("A Prefeitura de Nova Serrana marcou para [CONFIRMAR: data, horário e local] um leilão de dois imóveis públicos. O que ainda não está claro para o morador é o básico: quais imóveis, quanto valem e o que a cidade vai fazer com o dinheiro."),
      h("O que se sabe"),
      ul(
        "Imóveis: [CONFIRMAR endereço e matrícula de cada um]",
        "Valor mínimo, conforme avaliação: [CONFIRMAR]",
        "Data, horário e local do leilão: [CONFIRMAR]",
        "Como participar e prazo de habilitação: [CONFIRMAR no edital]",
      ),
      h("O que precisa ser checado"),
      p("A lei que autorizou a venda de cada imóvel, o laudo de avaliação e a destinação da receita no orçamento. Assim que o edital sair, esta nota será atualizada com os detalhes."),
    ],
  },
  "vacimovel-20-e-21-de-setembro": {
    status: "apurar",
    corpo: [
      p("O Vacimóvel, unidade itinerante de vacinação, atende em Nova Serrana em [CONFIRMAR: datas]. Antes de sair de casa, confira o ponto e o horário — o roteiro muda a cada edição."),
      h("Serviço"),
      ul(
        "Datas e horários: [CONFIRMAR]",
        "Pontos de atendimento: [CONFIRMAR bairros e endereços]",
        "Vacinas disponíveis: [CONFIRMAR]",
        "Leve: documento com foto e o cartão de vacinação, se tiver",
      ),
      h("O que falta saber"),
      p("Se o roteiro inclui a zona rural e se haverá atendimento em horário estendido."),
    ],
  },
  "vacinacao-antirrabica-prorrogada": {
    status: "apurar",
    corpo: [
      p("A campanha de vacinação antirrábica de cães e gatos foi prorrogada em Nova Serrana. O novo prazo vai até [CONFIRMAR: data]."),
      h("Serviço"),
      ul(
        "Novo prazo: [CONFIRMAR]",
        "Pontos fixos e datas por bairro: [CONFIRMAR]",
        "Público: cães e gatos a partir de [CONFIRMAR idade mínima]",
      ),
      h("O contexto"),
      p("Prorrogação costuma significar que a meta de cobertura não foi atingida no prazo original. Pedir a [CONFIRMAR: órgão responsável] os números de animais vacinados e a meta da campanha."),
    ],
  },
  "outubro-rosa-como-agendar-mamografia": {
    status: "apurar",
    corpo: [
      p("A campanha Outubro Rosa em Nova Serrana, promovida pela Prefeitura em parceria com a Acom, promete ampliar o acesso à mamografia pelo SUS. Para quem quer marcar o exame, o caminho é [CONFIRMAR: unidade, telefone e forma de agendamento]."),
      h("Como agendar"),
      ul(
        "Onde: [CONFIRMAR]",
        "Quem tem indicação: [CONFIRMAR faixa etária e critérios]",
        "O que levar: cartão SUS e documento com foto",
      ),
      h("O que precisa ser checado"),
      p("Quantos exames a mais a campanha prevê em relação a um mês comum, e qual é o tempo médio de espera pela mamografia na rede hoje. Uma campanha se mede pelo que muda na fila, não pelo número de eventos."),
    ],
  },
  "pedagio-br-262-mais-caro": {
    status: "apurar",
    corpo: [
      p("A tarifa de pedágio da BR-262 no trecho que passa por Nova Serrana ficou mais cara em setembro. O novo valor é [CONFIRMAR] para carros de passeio, contra [CONFIRMAR] antes."),
      h("Serviço"),
      ul(
        "Novo valor por categoria de veículo: [CONFIRMAR]",
        "Praça ou praças afetadas: [CONFIRMAR]",
        "Desde quando vale: [CONFIRMAR]",
      ),
      h("A pergunta que fica"),
      p("Reajuste de pedágio costuma ser previsto em contrato e vinculado a um índice e a um cronograma de obras. Falta checar com a [CONFIRMAR: ANTT e concessionária] qual índice embasa o aumento e o que foi entregue de obra no trecho desde o último reajuste."),
    ],
  },
  "sessoes-da-camara-como-acompanhar": {
    status: "apurar",
    corpo: [
      p("As sessões da Câmara Municipal são públicas. Dá para acompanhar de casa, e é onde se vê como cada vereador votou — o que nem sempre aparece no resumo que circula depois."),
      h("Quando acontecem"),
      p("As sessões ordinárias seguem um calendário fixo. [CONFIRMAR: dia da semana e horário das sessões ordinárias da Câmara de Nova Serrana]"),
      h("Onde assistir"),
      p("A transmissão ao vivo e as gravações ficam nos canais oficiais da Câmara. [CONFIRMAR: link do canal de vídeo e da página de transmissão]"),
      h("Como saber o que está em jogo"),
      p("A pauta de cada sessão é divulgada antes e traz os projetos que serão discutidos e votados. Vale procurar, em especial, votações sobre orçamento, criação ou aumento de cargos, concessões de serviço público e mudanças no plano diretor."),
      h("Como conferir o voto de cada um"),
      p("Depois da sessão, as atas e os registros de votação ficam publicados. [CONFIRMAR: onde as atas e o painel de votação nominal ficam disponíveis]. A Réplica vai publicar um resumo sempre que houver votação relevante para a cidade."),
    ],
  },

  // ============================================================ REPORTAGEM / ANÁLISE
  "novo-hospital-prometido-e-entregue": {
    status: "apurar",
    corpo: [
      p("A Prefeitura de Nova Serrana voltou a afirmar que o novo hospital da cidade é um equipamento público e mencionou um investimento de [CONFIRMAR: valor citado] em equipamentos. A declaração respondeu a dúvidas sobre a natureza do projeto. Não respondeu, porém, à pergunta mais direta de quem espera pelo serviço: quando o hospital abre?"),
      p("A Réplica vai pedir à administração o cronograma da obra, o contrato de compra dos equipamentos e a definição do modelo de gestão. Até lá, este texto reúne o que já é público e o que segue em aberto."),
      h("O que se sabe até agora"),
      ul(
        "A gestão afirma que a unidade é pública, de propriedade do município. [CONFIRMAR: declaração oficial, data e contexto]",
        "Foi citado um valor de [CONFIRMAR] para equipamentos. [CONFIRMAR: origem e destino do número]",
        "Não há data de inauguração divulgada de forma oficial e clara.",
      ),
      h("O que precisa ser apurado"),
      p("São três frentes de apuração. A primeira é documental: o contrato da obra e seus aditivos, o empenho e a licitação dos equipamentos, todos disponíveis no Portal da Transparência. A segunda é o cronograma: em que etapa a construção está e qual a data-alvo. A terceira é a gestão: se o hospital será administrado diretamente pela Secretaria de Saúde ou por uma organização social, e de onde virá o dinheiro para manter a operação todo mês — que costuma pesar mais que a obra."),
      p("Uma quarta frente é ir ao canteiro em dias e horários diferentes e comparar o que se vê com o que o cronograma promete."),
      h("O que falta saber"),
      p("Qual é a data de inauguração. Quem vai administrar o hospital e com qual orçamento mensal. Quantos leitos e quais serviços. E se o custo total já subiu em relação ao previsto no início."),
      p("Este texto será atualizado conforme a Prefeitura responder."),
    ],
  },
  "lei-transparencia-centro-de-convencoes": {
    status: "apurar",
    corpo: [
      p("A Câmara de Nova Serrana aprovou uma lei que muda a forma como o Centro de Convenções é reservado. Pelo texto, acabam as chamadas reservas informais e passa a valer uma agenda eletrônica de acesso público. A mudança sugere que, até aqui, o critério de uso do espaço não era transparente. Vale checar como era antes e o que muda na prática."),
      h("O que a lei estabelece"),
      ul(
        "Fim das reservas informais. [CONFIRMAR: como a lei define isso]",
        "Agenda eletrônica pública e obrigatória. [CONFIRMAR: onde ficará disponível]",
        "Responsável pela gestão e pela fiscalização: [CONFIRMAR]",
      ),
      h("O que precisa ser apurado"),
      p("Como as reservas eram feitas antes da lei — se havia algum critério publicado ou se dependia de solicitação direta ao setor responsável. Quantas vezes o espaço foi usado no último ano e por quem. E se a agenda dos meses anteriores também será divulgada, ou se a transparência começa do zero."),
      h("O que falta saber"),
      p("Quem fiscaliza o cumprimento e o que acontece em caso de descumprimento. E se já houve, sob a regra antiga, pedido de reserva negado — com base em quê."),
    ],
  },
  "hemodialise-sus-hospital-sao-jose": {
    status: "apurar",
    corpo: [
      p("O Hospital São José, em Nova Serrana, teria sido habilitado para oferecer hemodiálise pelo SUS, com um repasse de [CONFIRMAR: valor]. Para o paciente renal, a notícia só tem peso se responder a duas perguntas: quantas vagas e a partir de quando."),
      h("O que se sabe"),
      ul(
        "Habilitação para serviço de hemodiálise pelo SUS. [CONFIRMAR: portaria e data]",
        "Valor citado: [CONFIRMAR]",
        "Início do atendimento: [CONFIRMAR]",
      ),
      h("O que precisa ser apurado"),
      p("O número de máquinas e de vagas por turno. O tamanho da fila atual de pacientes de Nova Serrana e das cidades da região que dependem daqui. Para onde esses pacientes iam antes e quanto tempo de estrada isso representava, três vezes por semana. E se quem já está na fila entra automaticamente ou precisa de novo encaminhamento."),
      h("O que falta saber"),
      p("Quantos pacientes passam efetivamente a ser atendidos na cidade e qual o critério de prioridade."),
    ],
  },
  "mutirao-catarata-quanto-falta": {
    status: "apurar",
    corpo: [
      p("A Prefeitura informou ter realizado cerca de [CONFIRMAR: número] cirurgias de catarata em um mutirão. É um número que impressiona sozinho. Ele ganha sentido, porém, só ao lado de outro: quantas pessoas estavam na fila antes — e quantas continuam nela."),
      h("O que se sabe"),
      ul(
        "Mutirão realizado em [CONFIRMAR: período]",
        "Cerca de [CONFIRMAR] cirurgias",
        "Fila remanescente: sem número público até o fechamento deste texto",
      ),
      h("O que precisa ser apurado"),
      p("A fila de catarata antes do mutirão e a que sobrou depois, com a Secretaria de Saúde. O critério de convocação dos pacientes e como entrar na fila. O custo do mutirão e a origem do recurso. E se há data para uma próxima edição."),
      h("O que falta saber"),
      p("Se o mutirão zerou a demanda represada ou apenas reduziu, e em quanto."),
    ],
  },
  "febrac-automacao-e-emprego": {
    status: "apurar",
    corpo: [
      p("A 15ª edição da FEBRAC, a feira de máquinas e componentes para calçados realizada em Nova Serrana, teve a automação e a inteligência artificial como vitrine. Para uma cidade cuja economia é o calçado, a feira levanta uma questão que vai além do balanço de expositores: automatizar a produção, o que faz com o emprego?"),
      h("O tamanho do que está em jogo"),
      p("O polo calçadista de Nova Serrana reúne centenas de indústrias e responde por dezenas de milhares de empregos, diretos e indiretos. [CONFIRMAR: números atualizados com Sindinova e FIEMG]. Parte relevante da produção acontece fora das fábricas, em bancas e no trabalho feito em casa — um arranjo que gera renda e, ao mesmo tempo, escapa de boa parte das estatísticas."),
      h("Por que a leitura mês a mês engana"),
      p("O emprego no calçado é sazonal: sobe no segundo semestre, quando as fábricas produzem para as vendas de fim de ano, e recua depois. Comparar um mês com o anterior quase sempre confunde ciclo com tendência. A comparação honesta é com o mesmo mês do ano anterior, e o dado existe: o Novo Caged divulga admissões e desligamentos por município, todo mês."),
      h("O que a Réplica vai acompanhar"),
      p("Três sinais, ao longo dos próximos meses: o saldo de empregos formais no setor calçadista da cidade no acumulado do ano; o comportamento das atividades ligadas à cadeia, como componentes e embalagens; e o que indústrias, trabalhadores e o sindicato dizem sobre o efeito prático da automação — se ela está criando funções novas, substituindo funções antigas, ou as duas coisas ao mesmo tempo."),
      h("O que falta saber"),
      p("Quanto do trabalho no polo é formal e quanto fica fora das estatísticas. E como a produção em domicílio aparece — ou não — nos números oficiais de emprego."),
    ],
  },
  "recomposicao-do-secretariado": {
    status: "apurar",
    corpo: [
      p("O prefeito de Nova Serrana, [CONFIRMAR: nome], anunciou uma recomposição no primeiro escalão do governo, com troca de nomes em [CONFIRMAR: quais e quantas] secretarias. Mudança de secretariado é rotina em qualquer gestão. O que não pode ser rotina é o morador não saber quem passou a decidir sobre saúde, obras ou educação na cidade."),
      h("O que se sabe"),
      ul(
        "Nomeações e exonerações: [CONFIRMAR lista no Diário Oficial]",
        "Pastas afetadas: [CONFIRMAR]",
        "Data do anúncio: [CONFIRMAR]",
      ),
      h("O que precisa ser apurado"),
      p("A trajetória de cada novo secretário: formação, experiência anterior, se ocupava outro cargo público. A estrutura e o orçamento de cada pasta. As prioridades que cada um assume publicamente para os próximos meses. E o motivo das saídas — pedido de demissão, decisão do prefeito, mudança de rota."),
      h("O que falta saber"),
      p("Por que os antecessores deixaram os cargos e quais metas concretas os novos nomes se comprometem a entregar."),
    ],
  },
  "mortes-na-br-262": {
    status: "apurar",
    corpo: [
      p("Um ciclista morreu ao ser atingido por um carro na BR-262, em Nova Serrana. [CONFIRMAR: data, trecho e circunstância básica, conforme boletim de ocorrência]. A morte reacende uma cobrança antiga de moradores sobre o trecho urbano da rodovia. Cabe levantar o histórico de acidentes e o que já foi pedido — e prometido — para o local."),
      h("O que se sabe"),
      ul(
        "Vítima: ciclista. [CONFIRMAR: decidir sobre identificação com a família]",
        "Local: [CONFIRMAR trecho ou km]",
        "Data: [CONFIRMAR]",
      ),
      h("O que precisa ser apurado"),
      p("A série histórica de acidentes e mortes no trecho, com a Polícia Rodoviária Federal. Os pontos considerados mais críticos e os pedidos anteriores de passarela, iluminação, redutor de velocidade ou travessia elevada. O plano de obras da concessionária que administra a rodovia e os prazos. E o que dizem as associações de moradores dos bairros lindeiros."),
      h("O que falta saber"),
      p("Quantos acidentes e mortes o trecho registrou nos últimos anos. E se existe obra de segurança prevista para o local, e para quando."),
      p("[Cuidado editorial: tratar a morte com sobriedade, sem detalhes gráficos.]"),
    ],
  },
  "seguranca-no-trabalho-morte-no-varejo": {
    status: "apurar",
    corpo: [
      p("Um trabalhador morreu após cair de uma escada enquanto repunha mercadorias em um supermercado de Nova Serrana. [CONFIRMAR: data e local; avaliar se o estabelecimento será nomeado]. O caso não deve ser tratado como crônica policial, mas como porta de entrada para um assunto que a cidade, com sua indústria e seu comércio, não pode ignorar: a prevenção de acidentes de trabalho."),
      h("O que se sabe"),
      ul(
        "Vítima: repositor. [CONFIRMAR idade; decidir sobre identificação]",
        "Circunstância: queda durante o trabalho. [CONFIRMAR]",
        "Apuração: [CONFIRMAR se há investigação da Superintendência Regional do Trabalho ou do MPT]",
      ),
      h("O que precisa ser apurado"),
      p("Se houve emissão de Comunicação de Acidente de Trabalho e se o órgão de fiscalização abriu apuração. O número de acidentes de trabalho registrados em Nova Serrana nos últimos anos, por setor — comércio, indústria calçadista, construção. E o que dizem os sindicatos, patronal e dos trabalhadores, sobre treinamento, equipamentos de proteção e ritmo de trabalho."),
      h("O que falta saber"),
      p("Se a apuração aponta falha de segurança no caso concreto. E como está, hoje, a fiscalização de segurança do trabalho na cidade."),
      p("[Cuidado editorial: foco na prevenção e na fiscalização, não no episódio isolado.]"),
    ],
  },

  // ============================================================ OPINIÃO
  "a-cidade-merece-um-calendario": {
    status: "pronta",
    corpo: [
      p("Toda gestão pública apresenta planos, e é assim que deve ser. O problema não está no anúncio — está no que vem depois dele. O plano vira manchete, a manchete circula por uma semana e, quando o prazo se aproxima, o assunto já saiu de cena. Sem acompanhamento, a promessa perde a data. E promessa sem data não se cobra."),
      h("O que já existe"),
      p("Boa parte da informação necessária para acompanhar um compromisso público já está registrada. Plano plurianual, leis orçamentárias, contratos, aditivos e cronogramas são documentos oficiais, disponíveis para consulta. O que falta, quase sempre, não é o dado — é reuni-lo em linguagem que o morador entenda e num lugar que ele encontre."),
      h("O que a Réplica propõe"),
      p("Uma regra simples: todo compromisso público relevante deveria ter três informações claras desde o anúncio — prazo, valor estimado e responsável. Com isso, a cobrança deixa de ser sobre intenção e passa a ser sobre entrega."),
      h("O que a Réplica vai fazer"),
      p("Nos próximos meses, vamos escolher um conjunto de compromissos anunciados na cidade e publicar, periodicamente, o andamento de cada um: no prazo, atrasado, concluído, abandonado. Quando um prazo terminar sem entrega, a pergunta será sempre a mesma — qual é a nova previsão?"),
      p("[APURAR antes de publicar: escolher e listar de 3 a 5 compromissos públicos concretos para abrir a série.]"),
    ],
  },
  "transparencia-nao-e-favor": {
    status: "pronta",
    corpo: [
      p("A lei é clara: órgãos públicos precisam divulgar receitas, despesas, contratos, licitações e salários. Essa parte, em geral, é cumprida. O problema mora na distância entre publicar e informar."),
      h("Publicado não é o mesmo que acessível"),
      p("Uma planilha sem explicação, um PDF que não abre direito no celular, um relatório em formato que ninguém consegue filtrar, um link que muda de endereço a cada troca de gestão. Nada disso é ilegal. E, ainda assim, produz o mesmo efeito prático de esconder: afasta justamente quem mais precisa da informação e tem menos tempo para caçá-la."),
      h("O teste é simples"),
      p("Transparência que funciona é a que um morador comum consegue usar para responder a uma pergunta concreta: quanto custou aquela obra, quem ganhou aquela licitação, quanto ganha aquele cargo. Se a resposta exige conhecer o caminho por dentro, a transparência existe no papel e falha na prática."),
      h("Vale para a Réplica também"),
      p("Esse padrão não é só uma cobrança que fazemos ao poder público. É o que tentamos aplicar aqui: fonte identificada em cada informação, método explicado quando o assunto é complexo e correção visível quando erramos."),
    ],
  },
  "ano-eleitoral-o-que-a-prefeitura-pode-divulgar": {
    status: "pronta",
    corpo: [
      p("Estamos em período eleitoral, e isso muda o que os governos podem divulgar. A regra costuma gerar confusão dos dois lados — quem acha que ela proíbe tudo e quem a usa como desculpa para não informar nada."),
      h("O que a lei restringe"),
      p("A legislação eleitoral limita, nos meses que antecedem a votação, a publicidade institucional dos órgãos públicos. A intenção é evitar que a estrutura do Estado — verba, carro de som, outdoor, rede social oficial — seja usada para promover candidaturas. É uma proteção ao eleitor, não à imprensa nem ao governo. [CONFIRMAR: período e vedações aplicáveis a esta eleição — Lei 9.504/1997, art. 73 — e o calendário do TSE]"),
      h("O que ela não autoriza"),
      p("A restrição de publicidade não suspende o dever de informar. Serviços essenciais — saúde, segurança, defesa civil, obras urgentes — continuam podendo e devendo ser comunicados. Silêncio sobre uma campanha de vacinação ou sobre a interdição de uma via não é cumprimento da lei eleitoral; é falha de comunicação pública."),
      h("O que a Réplica vai cobrar"),
      p("Os dois lados da mesma régua. De um lado, nada de propaganda de gestão disfarçada de informação de utilidade pública. De outro, nada de apagão de serviço com a lei eleitoral como álibi. Quando a linha for ultrapassada em qualquer direção, a gente aponta."),
    ],
  },

  // ============================================================ CONVERSA (briefings)
  "sindinova-automacao-e-emprego": {
    status: "apurar",
    corpo: [
      p("[Pauta de entrevista. O texto final será produzido depois da conversa.]"),
      h("Por que esta entrevista"),
      p("A FEBRAC colocou a automação no centro do debate do polo calçadista. O Sindinova organiza a feira e representa as indústrias. É a fonte certa para responder o que a tecnologia muda no chão de fábrica e no emprego."),
      h("Quem procurar"),
      p("[CONFIRMAR: presidente ou diretor do Sindinova — nome e cargo]"),
      h("Perguntas propostas"),
      ul(
        "Quantas indústrias e quantos empregos o polo reúne hoje? Como esse número evoluiu nos últimos cinco anos?",
        "A automação apresentada na FEBRAC substitui trabalhadores ou muda a função deles? Há exemplos concretos de fábricas da cidade?",
        "O trabalho feito em casa, nas bancas, cresce ou diminui com a automação das fábricas?",
        "O que o sindicato faz para qualificar o trabalhador para as funções novas?",
        "Qual é a sua previsão para o emprego no polo nos próximos dois anos?",
      ),
      h("Dados para levar à conversa"),
      p("[APURAR antes: saldo do Novo Caged para o setor em Nova Serrana no ano; números oficiais da FEBRAC.]"),
    ],
  },
  "rede-de-protecao-a-mulher": {
    status: "apurar",
    corpo: [
      p("[Pauta de entrevista. O texto final será produzido depois da conversa.]"),
      h("Por que esta entrevista"),
      p("Setembro marca os 20 anos da Lei Maria da Penha, e a cidade registrou recentemente um caso grave de violência doméstica. A conversa serve para mapear, de forma prática, o que existe em Nova Serrana para quem precisa de ajuda."),
      h("Quem procurar"),
      p("[DEFINIR uma ou mais fontes: coordenação do CREAS, delegacia, Patrulha Maria da Penha, Ministério Público ou organização da sociedade civil que atenda mulheres em situação de violência.]"),
      h("Perguntas propostas"),
      ul(
        "Quais serviços a cidade oferece hoje para uma mulher em situação de violência? Onde ficam e como funcionam?",
        "Passo a passo: o que acontece entre a denúncia e a concessão de uma medida protetiva? Quanto tempo leva?",
        "Quantas denúncias e quantas medidas protetivas a comarca registrou no último ano?",
        "Onde estão as maiores lacunas — acolhimento, abrigo, acompanhamento, prevenção?",
        "O que uma pessoa que testemunha um caso pode e deve fazer?",
      ),
      h("Serviço para publicar junto"),
      p("[MONTAR box com telefones e endereços de emergência checados: 180, 190, Polícia Civil local, CREAS.]"),
    ],
  },
  "saude-mental-alem-do-setembro-amarelo": {
    status: "apurar",
    corpo: [
      p("[Pauta de entrevista. O texto final será produzido depois da conversa.]"),
      h("Por que esta entrevista"),
      p("O Setembro Amarelo concentra a atenção em um mês. O I Seminário Municipal de Saúde Mental é o gancho para perguntar o que a rede oferece nos outros onze."),
      h("Quem procurar"),
      p("[DEFINIR: coordenação de saúde mental do município, equipe do CAPS ou profissional da atenção básica.]"),
      h("Perguntas propostas"),
      ul(
        "Que serviços de saúde mental a rede pública oferece na cidade? Qual a capacidade de cada um?",
        "Quanto tempo, em média, uma pessoa espera por uma primeira consulta?",
        "Como é o fluxo: a pessoa chega pela UBS, pela emergência, por conta própria?",
        "O que saiu de concreto do seminário de setembro?",
        "Onde faltam recursos — profissionais, leitos, medicação, espaço?",
      ),
      h("Dados para levar"),
      p("[APURAR: número de atendimentos por ano, fila, composição da equipe do CAPS.]"),
    ],
  },

  // ============================================================ VÍDEOS (roteiros)
  "em-60-segundos-o-que-a-eleicao-decide": {
    status: "pronta",
    corpo: [
      p("Roteiro — vídeo vertical, cerca de 60 segundos. Narração em off; imagens de apoio entre colchetes."),
      h("Abertura (0–8s)"),
      p("\"Em outubro, Nova Serrana vota para deputado estadual, deputado federal, senador, governador e presidente. Nenhum desses cargos fica na cidade. Mas todos decidem coisas que chegam aqui.\" [urna, fila de votação, placa de entrada da cidade]"),
      h("Desenvolvimento (8–45s)"),
      p("\"Deputado federal e senador definem o Orçamento da União e apresentam emendas — o dinheiro que pavimenta uma rua, equipa um posto de saúde, reforma uma escola. Deputado estadual faz o mesmo no Orçamento de Minas. O governo estadual manda na polícia, nas estradas estaduais e em parte da saúde. O governo federal define regras que afetam o polo calçadista: crédito, imposto, política industrial.\" [BR-262, fachada de indústria de calçado, posto de saúde, escola]"),
      h("Fechamento (45–60s)"),
      p("\"Ou seja: o voto de outubro não escolhe o prefeito, mas escolhe quem vai destravar — ou travar — recurso para a cidade nos próximos quatro anos. A Réplica vai acompanhar o que os eleitos de Minas fizerem por aqui.\" [assinatura da marca]"),
      p("[APURAR antes de publicar: confirmar com fonte oficial exemplos recentes de emenda destinada a Nova Serrana; checar as regras de conteúdo eleitoral para veículos no período.]"),
    ],
  },
  "portal-da-transparencia-tres-buscas": {
    status: "pronta",
    corpo: [
      p("Roteiro — vídeo vertical, cerca de 90 segundos. Gravação de tela do portal com narração."),
      h("Abertura"),
      p("\"Todo município é obrigado a manter um portal da transparência. O de Nova Serrana fica em [CONFIRMAR: endereço do portal]. Três buscas resolvem a maior parte das dúvidas.\""),
      h("Busca 1 — Para onde vai o dinheiro"),
      p("\"Procure por Despesas. Dá para filtrar por área — saúde, educação, obras — e por fornecedor. Preste atenção em três colunas: empenhado é o que o governo reservou; liquidado é o que já foi entregue; pago é o que saiu do caixa. As três raramente são iguais.\""),
      h("Busca 2 — Quem ganhou as licitações"),
      p("\"Em Licitações e Contratos, você vê o que foi comprado, por quanto e de quem. Contrato aditado várias vezes, ou dispensa de licitação repetida com o mesmo fornecedor, são sinais que merecem um segundo olhar.\""),
      h("Busca 3 — Quanto ganham os servidores"),
      p("\"Em Servidores ou Folha de Pagamento, aparecem os salários por cargo. É informação pública por lei.\""),
      h("Fechamento"),
      p("\"Achou algo que não fecha? Manda pra Réplica.\" [assinatura]"),
      p("[CONFIRMAR antes de publicar: endereço exato do portal e os nomes reais dos menus, que mudam de um sistema para outro.]"),
    ],
  },
  "do-imovel-publico-ao-leilao": {
    status: "pronta",
    corpo: [
      p("Roteiro — vídeo vertical, cerca de 60 segundos. Quadros simples com narração."),
      h("O que é"),
      p("\"Quando a prefeitura decide vender um imóvel que é do município, ela não pode simplesmente anunciar. Existe um caminho, e ele é público.\""),
      h("O caminho"),
      p("\"Primeiro, uma lei autoriza a venda daquele imóvel específico, aprovada pela Câmara. Depois, uma avaliação define o valor mínimo. Então sai o edital, com data, regras e o valor de partida. No dia, quem se habilitou dá lances; ganha o maior. O dinheiro entra no caixa do município, numa rubrica definida.\""),
      h("O que observar"),
      p("\"Três perguntas ajudam: o preço de avaliação está coerente com o mercado? O edital foi divulgado com antecedência suficiente? E para onde vai o dinheiro da venda?\""),
      h("Gancho"),
      p("\"Nova Serrana tem leilão de imóveis marcado para [CONFIRMAR: data]. A Réplica vai acompanhar.\" [assinatura]"),
    ],
  },
  "perguntamos-nas-ruas-saude": {
    status: "apurar",
    corpo: [
      p("Roteiro — vídeo vertical. Vox pop nas ruas, com cartelas de dados oficiais entre as falas."),
      h("Onde gravar"),
      p("[DEFINIR: 3 a 4 pontos de circulação — entorno de UBS, centro, saída de indústria em horário de troca de turno.]"),
      h("Perguntas (mesma ordem para todos)"),
      ul(
        "O que precisa melhorar na saúde da cidade?",
        "Você ou alguém da sua casa já esperou muito por consulta, exame ou cirurgia? Conte.",
        "Você sabe onde reclamar quando o atendimento não resolve?",
      ),
      h("Cartelas de dados (entram entre as falas)"),
      p("[APURAR e inserir números oficiais checados: fila de catarata antes e depois do mutirão; situação da hemodiálise no Hospital São José; data de inauguração do novo hospital.]"),
      h("Fechamento"),
      p("\"A Réplica vai atrás dessas respostas. Se você tem um caso pra contar, chama a gente.\""),
      p("[Colher autorização de imagem de cada entrevistado.]"),
    ],
  },
};
