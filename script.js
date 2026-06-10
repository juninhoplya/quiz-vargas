/* ══════════════════════════════════════════DADOS══════════════════════════════════════════ */
var allQuestions = [
  {
    question: "Qual foi o período completo da Era Vargas?",
    options: ["1889–1930", "1930–1945", "1930–1945 e 1951–1954", "1945–1960"],
    correct: 2,
    bonus: false,
    explanation: "Vargas governou de 1930 a 1945 (Provisório, Constitucional e Estado Novo) e de 1951 a 1954, eleito democraticamente."
  },
  {
    question: "Como Getúlio Vargas chegou ao poder em 1930?",
    options: ["Eleição direta", "Golpe de Estado com apoio militar e oligarquias dissidentes", "Nomeação do Congresso", "Herança do cargo de Washington Luís"],
    correct: 1,
    bonus: false,
    explanation: "Um golpe encerrou a República Velha, apoiado por tenentistas e oligarquias de MG e RS insatisfeitas com o 'café com leite'."
  },
  {
    question: "O que foi o Estado Novo proclamado em 1937?",
    options: ["Regime democrático liberal", "Ditadura com fechamento do Congresso e Constituição autoritária", "Movimento operário no poder", "Terceiro mandato de Vargas"],
    correct: 1,
    bonus: false,
    explanation: "O Estado Novo dissolveu o Congresso e outorgou a 'Polaca', Constituição de inspiração fascista que centralizou todo o poder."
  },
  {
    question: "O DIP — Departamento de Imprensa e Propaganda — tinha como função principal:",
    options: ["Organizar eleições livres", "Censurar a mídia e promover o culto a Vargas", "Financiar jornais independentes", "Regular o comércio exterior"],
    correct: 1,
    bonus: false,
    explanation: "Criado em 1939, o DIP controlava rádio, imprensa e cinema, exaltando Vargas como o 'pai dos pobres' e suprimindo críticas."
  },
  {
    question: "A CLT foi criada em qual ano?",
    options: ["1930", "1937", "1943", "1950"],
    correct: 2,
    bonus: false,
    explanation: "Assinada em 1.º de maio de 1943, a CLT regulamentou férias, salário mínimo, jornada de 8 horas e carteira de trabalho."
  },
  {
    question: "⭐ BÔNUS: Qual era o apelido carinhoso dado ao Getúlio Vargas pelas classes trabalhadoras?",
    options: ["O Presidente Eterno", "O Pai dos Pobres", "O Grande Líder", "O Herói Nacional"],
    correct: 1,
    bonus: true,
    explanation: "Vargas foi chamado de 'pai dos pobres' por sua política trabalhista, embora os direitos fossem usados como instrumento de controle político."
  },
  {
    question: "Qual modelo econômico Vargas adotou para superar a dependência agrária?",
    options: ["Liberalismo com capital estrangeiro", "Industrialização por substituição de importações", "Privatização em massa", "Especialização na exportação de café"],
    correct: 1,
    bonus: false,
    explanation: "Vargas investiu em industrialização com forte papel do Estado, criando indústrias de base como siderurgia e energia elétrica."
  },
  {
    question: "Qual empresa estatal foi criada durante a Era Vargas, em 1953?",
    options: ["Embraer", "Petrobras", "Vale do Rio Doce", "Eletrobras"],
    correct: 1,
    bonus: false,
    explanation: "A Petrobras foi fundada em 1953 sob o lema 'O petróleo é nosso', símbolo máximo do nacionalismo econômico varguista."
  },
  {
    question: "Qual Constituição foi promulgada no período democrático de Vargas?",
    options: ["Constituição de 1891", "Constituição de 1934", "Constituição de 1946", "Constituição de 1937"],
    correct: 1,
    bonus: false,
    explanation: "A Constituição de 1934 incluiu direitos sociais, trabalhistas, voto feminino e voto secreto — a mais democrática até então."
  },
  {
    question: "Como terminou a Era Vargas em agosto de 1954?",
    options: ["Perdeu eleições para JK", "Foi deposto e exilado", "Suicidou-se com um tiro no coração", "Morreu de causas naturais"],
    correct: 2,
    bonus: false,
    explanation: "Em 24 de agosto de 1954, pressionado pelos militares, Vargas se suicidou e deixou uma carta-testamento apresentando-se como mártir do povo."
  },
  {
    question: "Qual das alternativas abaixo apresenta uma medida que não foi implementada durante o governo de Getúlio Vargas?",
    options: ["A instituição do salário mínimo no país.", "A consolidação das leis trabalhistas (CLT).", "O direito ao voto das mulheres brasileiras.", "A criação do programa de privatização das indústrias de base."],
    correct: 3,
    bonus: false,
    explanation: "Getúlio Vargas tinha uma política econômica de caráter nacionalista e estatizante. Em vez de privatizar, ele criou grandes indústrias estatais de base, como a CSN e a Vale do Rio Doce. As outras alternativas foram todas conquistas da Era Vargas."
  },
  {
    question: "O período da Era Vargas marcado pelo fechamento do Congresso Nacional, censura rígida aos meios de comunicação e centralização total do poder ficou conhecido como:",
    options: ["Governo Provisório.", "República das Oligarquias.", "Estado Novo.", "Governo Constitucional."],
    correct: 2,
    bonus: false,
    explanation: "O Estado Novo (1937-1945) foi a fase abertamente ditatorial da Era Vargas, instaurado após o pretexto do 'Plano Cohen' e caracterizado pela forte repressão política e pelo uso do DIP."
  },
  {
    question: "A Revolução Constitucionalista de 1932 foi liderada por qual estado, insatisfeito com a centralização política do Governo Provisório de Vargas?",
    options: ["Minas Gerais.", "Rio Grande do Sul.", "São Paulo.", "Rio de Janeiro."],
    correct: 2,
    bonus: false,
    explanation: "As elites de São Paulo lideraram a revolta de 1932 exigindo o fim do governo provisório, a nomeação de um interventor civil e paulista, e a convocação imediata de uma Assembleia Constituinte."
  },
  {
    question: "Durante a fase do Governo Constitucional (1934-1937), qual era o grupo de inspiração fascista que polarizava a política brasileira?",
    options: ["Aliança Nacional Libertadora (ANL).", "Ação Integralista Brasileira (AIB).", "Partido Trabalhista Brasileiro (PTB).", "União Democrática Nacional (UDN)."],
    correct: 1,
    bonus: false,
    explanation: "A AIB, liderada por Plínio Salgado, era o grupo de extrema-direita inspirado no fascismo europeu, utilizando o lema 'Deus, Pátria e Família' e a saudação 'Anauê'."
  },
  {
    question: "Qual foi a principal contradição política que contribuiu diretamente para o fim do Estado Novo em 1945?",
    options: ["O Brasil enviar tropas para combater ditaduras fascistas na Europa enquanto vivia sob uma ditadura internamente.", "A recusa do governo brasileiro em assinar acordos comerciais com os Estados Unidos.", "O alinhamento total e oficial do Brasil com a Alemanha nazista durante toda a guerra.", "A proibição do funcionamento de sindicatos trabalhistas pelo presidente."],
    correct: 0,
    bonus: false,
    explanation: "O Brasil enviou a FEB para lutar ao lado dos Aliados contra o nazi-fascismo. Essa postura tornou insustentável a manutenção da ditadura do Estado Novo, gerando pressões pela redemocratização."
  },
  {
    question: "⭐ BÔNUS: Qual era o principal objetivo ideológico da intervenção do DIP nas letras de samba durante o Estado Novo?",
    options: ["Banir elementos de matriz africana das composições para 'embranquecer' a cultura nacional.", "Estimular o sentimento de revolta das classes populares contra as elites cafeicultoras.", "Combater a malandragem e exaltar a ética do trabalho e a disciplina fabril.", "Proibir manifestações românticas, exigindo apenas hinos de exaltação ao presidente."],
    correct: 2,
    bonus: true,
    explanation: "O DIP promoveu uma 'limpeza' nas letras de samba para adequá-las à ideologia do regime, censurando músicas que faziam apologia ao ócio e estimulando letras que cantavam o orgulho do trabalho assalariado."
  },
  {
    question: "A 'Política Pendular' de Vargas, que viabilizou recursos para a construção da CSN em Volta Redonda, refere-se à habilidade do governo de:",
    options: ["Negociar o apoio militar ao Eixo em troca de investimentos tecnológicos da Alemanha nazista.", "Barganhar vantagens econômicas entre os EUA e a Alemanha, aproveitando-se do cenário pré-Segunda Guerra Mundial.", "Alternar o foco econômico entre a exportação de café para a Europa e a importação de manufaturados asiáticos.", "Manter a neutralidade absoluta no comércio internacional para forçar o autofinanciamento da indústria de base."],
    correct: 1,
    bonus: false,
    explanation: "A 'Política Pendular' consistia em não se alinhar a nenhum dos blocos antes da guerra. Os EUA, para garantir o apoio do Brasil no conflito, cederam empréstimos e suporte técnico para a CSN através do Eximbank."
  },
  {
    question: "Qual era a principal evidência da inspiração corporativista fascista italiana no modelo sindical varguista?",
    options: ["A total autonomia dos sindicatos para organizar greves gerais sem interferência do judiciário.", "A obrigatoriedade de filiação partidária para que o trabalhador votasse nas eleições sindicais.", "O atrelamento dos sindicatos ao Estado através do imposto sindical e do reconhecimento oficial pelo Ministério.", "A proibição de trabalhadores urbanos se organizarem, permitindo sindicatos apenas no setor agrário."],
    correct: 2,
    bonus: false,
    explanation: "O modelo varguista eliminou o pluralismo sindical e a autonomia das associações. O sindicato precisava de aprovação do Ministério do Trabalho, e o imposto sindical obrigatório financiava essa estrutura controlada pelo Estado."
  },
  {
    question: "Qual era a real origem do 'Plano Cohen', utilizado para justificar o Golpe do Estado Novo em 1937?",
    options: ["Foi forjado por militares vinculados ao próprio governo para disseminar o pânico anticomunista e legitimar a ditadura de Vargas.", "Foi um documento real interceptado da inteligência soviética que planejava assassinar Getúlio Vargas.", "Tratava-se de um manifesto legítimo da AIB para derrubar Vargas e instalar um regime puramente fascista.", "Foi uma armação das oligarquias cafeicultoras paulistas para forçar a realização das eleições de 1938."],
    correct: 0,
    bonus: false,
    explanation: "O Plano Cohen foi um documento fictício escrito pelo capitão Olímpio Mourão Filho. Dutra e Vargas utilizaram o falso plano para criar comoção pública, cancelar as eleições de 1938 e fechar o Congresso, iniciando o Estado Novo."
  },
  {
    question: "O 'Manifesto dos Mineiros' (1943) é considerado um marco para a queda de Vargas em 1945 porque:",
    options: ["Defendia o alinhamento definitivo do Brasil com as forças do Eixo na Segunda Guerra Mundial.", "Exigia a estatização imediata das minas de ferro e a expulsão do capital estrangeiro.", "Rompeu abertamente o silêncio imposto pela censura, exigindo a redemocratização do país e o fim do regime autoritário.", "Propunha a criação de um partido único fascista para unificar as forças armadas e os trabalhistas."],
    correct: 2,
    bonus: false,
    explanation: "O Manifesto dos Mineiros foi a primeira grande contestação pública e de peso político-elitário contra o Estado Novo, usando a participação brasileira na guerra contra o fascismo como argumento moral para exigir a restauração da democracia."
  },
  {
    question: "Qual era o objetivo central do programa 'A Hora do Brasil', transmitido pelo DIP durante o Estado Novo?",
    options: ["Transmitir debates políticos ao vivo entre a oposição e os defensores do governo de Vargas.", "Padronizar a informação nacional, exaltar as realizações do regime e construir a imagem de Vargas como protetor da nação.", "Divulgar exclusivamente as cotações internacionais do café e fechar acordos de exportação.", "Difundir correntes artísticas de vanguarda europeia para modernizar o gosto musical da população rural."],
    correct: 1,
    bonus: false,
    explanation: "Em uma época de alto analfabetismo, o rádio era o meio ideal para o DIP unificar o discurso nacionalista, criar uma identidade cultural homogênea e consolidar o culto à personalidade de Getúlio Vargas."
  },
  {
    question: "Qual característica marcante apresentou a Constituição de 1934?",
    options: ["A oficialização do catolicismo como religião única e obrigatória do Estado brasileiro.", "A extinção do cargo de Presidente da República e a criação do parlamentarismo monárquico.", "A incorporação do sufrágio universal feminino e a criação da Justiça do Trabalho e da Justiça Eleitoral.", "A proibição total da existência de sindicatos e associações de classe em território nacional."],
    correct: 2,
    bonus: false,
    explanation: "A Constituição de 1934 foi muito progressista para a época: constitucionalizou direitos trabalhistas, garantiu o voto secreto e feminino, e criou a Justiça Eleitoral para combater as fraudes da República Velha."
  },
  {
    question: "Qual foi o impacto político decisivo da 'Intentona Comunista' de 1935 na história republicana?",
    options: ["Forçou Getúlio Vargas a renunciar imediatamente e convocar eleições gerais diretas.", "Serviu de pretexto político para o governo endurecer o regime, decretar estado de sítio e preparar o caminho para o golpe do Estado Novo em 1937.", "Resultou na proibição definitiva do cultivo e da exportação de café para países do bloco socialista.", "Consolidou uma aliança entre os operários urbanos e os grandes latifundiários do café."],
    correct: 1,
    bonus: false,
    explanation: "A revolta de 1935, liderada por Luís Carlos Prestes, foi utilizada por Vargas para espalhar o medo do 'perigo vermelho'. Essa atmosfera de pânico anticomunista legitimou a repressão e pavimentou o caminho para o golpe de 1937."
  },
  {
    question: "A 'Industrialização por Substituição de Importações' (ISI), modelo econômico da Era Vargas, baseava-se em:",
    options: ["Abrir totalmente o mercado nacional para produtos manufaturados estrangeiros de baixo custo.", "Estimular a produção interna de bens que antes eram comprados do exterior, com forte investimento estatal nos setores de base.", "Focar toda a capacidade produtiva na exportação de bens de luxo para a Europa Ocidental.", "Proibir a instalação de indústrias para proteger a tradição da atividade agrícola."],
    correct: 1,
    bonus: false,
    explanation: "Diante das crises internacionais (Crise de 1929 e Segunda Guerra), o Brasil encontrou dificuldades para importar manufaturados. Vargas assumiu o papel de investidor nos setores de base para desenvolver a indústria nacional e suprir o mercado interno."
  },
  {
    question: "O movimento 'Queremismo', surgido no fim do Estado Novo em 1945, caracterizava-se por:",
    options: ["Defender a entrega imediata da presidência aos líderes da oposição vinculados à UDN.", "Exigir a volta do sistema de governança oligárquica liderado por São Paulo e Minas Gerais.", "Apoiar a continuidade de Getúlio Vargas no poder durante o processo de transição e convocação da Assembleia Constituinte.", "Propor a divisão do território brasileiro em estados independentes com governos militares próprios."],
    correct: 2,
    bonus: false,
    explanation: "O 'Queremismo' surgiu do slogan 'Queremos Getúlio'. Impulsionado por setores trabalhistas e sindicais, o movimento temia perder os direitos trabalhistas conquistados e defendia que Vargas liderasse a redemocratização sem se afastar da presidência."
  }
];

var SHAPES = ["▲", "◆", "●", "■"];
var COLORS_TEXT = ["(vermelho)", "(azul)", "(amarelo)", "(verde)"];

/* ══════════════════════════════════════════ESTADO══════════════════════════════════════════ */
var questions     = [];
var current       = 0;
var score         = 0;
var userAnswers   = [];
var pointsLog     = [];
var playerName    = "Jogador";
var timerInt      = null;
var timeLeft      = 15;
var TIMER_MAX     = 15;
var CIRC          = 113;
var answeredThisQ = false;
var achievements  = [];

/* ══════════════════════════════════════════ÁUDIO (Web Audio API)══════════════════════════════════════════ */
var actx = null;
function getACtx() {
  if (!actx) {
    try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  }
  return actx;
}
function tone(freq, type, dur, vol, delay) {
  vol   = vol   || 0.25;
  delay = delay || 0;
  try {
    var c = getACtx(); if (!c) return;
    var o = c.createOscillator();
    var g = c.createGain();
    o.connect(g); g.connect(c.destination);
    o.type = type;
    o.frequency.setValueAtTime(freq, c.currentTime + delay);
    g.gain.setValueAtTime(vol, c.currentTime + delay);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + delay + dur);
    o.start(c.currentTime + delay);
    o.stop(c.currentTime + delay + dur + 0.01);
  } catch(e) {}
}
function sndCorrect()  { tone(523,'sine',0.12); tone(659,'sine',0.12,0.25,0.13); tone(784,'sine',0.22,0.25,0.26); }
function sndWrong()    { tone(300,'sawtooth',0.1); tone(200,'sawtooth',0.18,0.3,0.12); }
function sndTimeout()  { tone(440,'square',0.07); tone(330,'square',0.07,0.3,0.1); tone(220,'square',0.14,0.3,0.19); }
function sndBonus()    { [523,659,784,1047,1319].forEach(function(f,i){ tone(f,'sine',0.15,0.3,i*0.1); }); }
function sndFinish()   { [523,659,784,1047].forEach(function(f,i){ tone(f,'sine',0.2,0.3,i*0.18); }); }
function sndCountdown(){ tone(880,'sine',0.08); }

/* ══════════════════════════════════════════CONQUISTAS══════════════════════════════════════════ */
var achDefs = [
  { id:'first',   label:'🎯 Primeiro Acerto'   },
  { id:'streak3', label:'🔥 3 Seguidas'         },
  { id:'speed',   label:'⚡ Resposta Relâmpago' },
  { id:'halfway', label:'⚡ Meio Caminho'        },
  { id:'perfect', label:'🏆 Quiz Perfeito'       },
  { id:'expert',  label:'🥇 Especialista'        }
];
function hasAch(id) {
  for (var i=0;i<achievements.length;i++) if(achievements[i]===id) return true;
  return false;
}
function giveAch(id) {
  if (hasAch(id)) return;
  achievements.push(id);
  for (var i=0;i<achDefs.length;i++) {
    if (achDefs[i].id===id) { showToast(achDefs[i].label); break; }
  }
}
function showToast(txt) {
  var t = document.getElementById('ach-toast');
  t.textContent = txt;
  t.classList.add('show');
  setTimeout(function(){ t.classList.remove('show'); }, 2300);
}
function checkAch() {
  var n = userAnswers.length;
  if (score===1 && !hasAch('first')) giveAch('first');
  if (n>=3) {
    var ok=true;
    for (var i=n-3;i<n;i++) { if(userAnswers[i]!==questions[i].correct){ok=false;break;} }
    if (ok) giveAch('streak3');
  }
  if (timeLeft>=12 && userAnswers[n-1]===questions[n-1].correct) giveAch('speed');
  if (n===5 && score>=3) giveAch('halfway');
  if (n===10 && score===10) giveAch('perfect');
  if (n===10 && score>=8)  giveAch('expert');
}

/* ══════════════════════════════════════════UTILS══════════════════════════════════════════ */
function shuffle(arr) {
  var a=arr.slice();
  for(var i=a.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var t=a[i]; a[i]=a[j]; a[j]=t;
  }
  return a;
}
function showScreen(id) {
  var all = document.querySelectorAll('.screen');
  for(var i=0;i<all.length;i++) all[i].classList.remove('active');
  document.getElementById(id).classList.add('active');
}

/* ══════════════════════════════════════════TIMER══════════════════════════════════════════ */
function startTimer() {
  timeLeft = TIMER_MAX;
  answeredThisQ = false;
  updateTimer();
  clearInterval(timerInt);
  timerInt = setInterval(function(){
    timeLeft--;
    updateTimer();
    if (timeLeft<=0) { clearInterval(timerInt); onTimeout(); }
  }, 1000);
}
function stopTimer() { clearInterval(timerInt); }
function updateTimer() {
  var lbl  = document.getElementById('timer-num');
  var ring = document.getElementById('t-fg');
  if (!lbl||!ring) return;
  lbl.textContent = timeLeft;
  ring.style.strokeDashoffset = CIRC*(1-timeLeft/TIMER_MAX);
  ring.className = 't-fg';
  if      (timeLeft<=5) ring.className='t-fg danger';
  else if (timeLeft<=9) ring.className='t-fg warn';
}
function onTimeout() {
  if (answeredThisQ) return;
  answeredThisQ = true;
  sndTimeout();
  var buttons = document.querySelectorAll('.ans-btn');
  for(var i=0;i<buttons.length;i++) buttons[i].disabled=true;
  buttons[questions[current].correct].classList.add('correct');
  userAnswers.push(-1);
  pointsLog.push(0);
  showFeedback(false, true);
}

/* ══════════════════════════════════════════CARREGAR PERGUNTA══════════════════════════════════════════ */
function loadQuestion() {
  var q   = questions[current];
  var pct = Math.round((current/questions.length)*100);
  document.getElementById('q-counter').textContent    = (current+1)+'/'+questions.length;
  document.getElementById('prog-bar').style.width     = pct+'%';
  document.getElementById('question-text').textContent = q.question;
  var badge = document.getElementById('q-points-badge');
  if (q.bonus) {
    badge.textContent = '⭐ BÔNUS x2';
    badge.className   = 'points-badge bonus';
  } else {
    badge.textContent = '⚡ Normal';
    badge.className   = 'points-badge';
  }
  var grid = document.getElementById('answers-grid');
  grid.innerHTML = '';
  for(var i=0;i<q.options.length;i++){
    (function(idx){
      var btn = document.createElement('button');
      btn.className = 'ans-btn';
      btn.innerHTML =
        '<span class="shape">'+SHAPES[idx]+'</span>'+
        '<span class="ans-text">'+q.options[idx]+'</span>';
      btn.addEventListener('click', function(){ selectAnswer(idx); });
      grid.appendChild(btn);
    })(i);
  }
  startTimer();
}

/* ══════════════════════════════════════════SELECIONAR RESPOSTA══════════════════════════════════════════ */
function calcPoints(correct, bonus, tLeft) {
  if (!correct) return 0;
  var base  = bonus ? 2000 : 1000;
  var speed = Math.round((tLeft/TIMER_MAX)*500);
  return base + speed;
}
function selectAnswer(idx) {
  if (answeredThisQ) return;
  answeredThisQ = true;
  stopTimer();
  var q       = questions[current];
  var buttons = document.querySelectorAll('.ans-btn');
  for(var i=0;i<buttons.length;i++) buttons[i].disabled=true;
  var correct = (idx===q.correct);
  userAnswers.push(idx);
  if (correct) {
    score++;
    var pts = calcPoints(true, q.bonus, timeLeft);
    pointsLog.push(pts);
    document.getElementById('live-score').textContent = score;
    buttons[idx].classList.add('correct');
    if (q.bonus) sndBonus(); else sndCorrect();
  } else {
    pointsLog.push(0);
    buttons[idx].classList.add('wrong');
    buttons[q.correct].classList.add('correct');
    sndWrong();
  }
  checkAch();
  setTimeout(function(){ showFeedback(correct, false); }, 600);
}

/* ══════════════════════════════════════════TELA DE FEEDBACK══════════════════════════════════════════ */
function showFeedback(correct, timeout) {
  var q = questions[current];
  showScreen('screen-feedback');
  var icon  = document.getElementById('fb-icon');
  var title = document.getElementById('fb-title');
  var ans   = document.getElementById('fb-answer');
  var expl  = document.getElementById('fb-explanation');
  var pts   = document.getElementById('fb-points');
  var box   = document.getElementById('feedback-box');
  if (timeout) {
    icon.textContent  = '⏱️';
    title.textContent = 'Tempo esgotado!';
    title.style.color = '#e74c3c';
    box.style.borderTop = '6px solid #e74c3c';
    pts.textContent   = '+0 pts';
  } else if (correct) {
    icon.textContent  = '✅';
    title.textContent = 'Correto!';
    title.style.color = '#2ecc71';
    box.style.borderTop = '6px solid #2ecc71';
    var earned = pointsLog[pointsLog.length-1];
    pts.textContent = '+'+earned+' pts';
  } else {
    icon.textContent  = '❌';
    title.textContent = 'Incorreto!';
    title.style.color = '#e74c3c';
    box.style.borderTop = '6px solid #e74c3c';
    pts.textContent   = '+0 pts';
  }
  ans.textContent  = 'Resposta: ' + q.options[q.correct];
  expl.textContent = q.explanation;
  var nextBtn = document.getElementById('btn-next');
  nextBtn.textContent = current < questions.length-1 ? 'Próxima →' : 'Ver resultado';
}

/* ══════════════════════════════════════════RESULTADO FINAL══════════════════════════════════════════ */
function showResult() {
  showScreen('screen-result');
  sndFinish();
  var totalPts = 0;
  for(var i=0;i<pointsLog.length;i++) totalPts+=pointsLog[i];
  var pct = Math.round((score/questions.length)*100);
  document.getElementById('prog-bar').style.width = '100%';
  document.getElementById('result-score').textContent = score+' / '+questions.length+' — '+totalPts+' pts';
  var emoji, title, msg;
  if (pct===100)      { emoji='🏆'; title='Perfeito! Você domina a Era Vargas!';      msg='Nota máxima — nenhuma pergunta te pegou de surpresa!'; }
  else if (pct>=80)   { emoji='🥇'; title='Especialista na Era Vargas!';              msg='Excelente! Você conhece muito bem esse período histórico.'; }
  else if (pct>=50)   { emoji='🥈'; title='Bom Conhecimento!';                        msg='Você foi bem, mas ainda há pontos para revisar.'; }
  else                { emoji='🥉'; title='Continue estudando!';                      msg='Leia o gabarito comentado e tente novamente.'; }
  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-msg').textContent   = msg;

  var achList = document.getElementById('ach-list');
  achList.innerHTML = '';
  if (achievements.length>0) {
    var hdr = document.createElement('p');
    hdr.style.cssText='color:#f5a623;font-weight:bold;margin-bottom:8px;width:100%;text-align:center';
    hdr.textContent='🎖️ Conquistas desbloqueadas';
    achList.appendChild(hdr);
    for(var i=0;i<achievements.length;i++){
      for(var j=0;j<achDefs.length;j++){
        if(achDefs[j].id===achievements[i]){
          var b=document.createElement('span');
          b.className='badge'; b.textContent=achDefs[j].label;
          achList.appendChild(b); break;
        }
      }
    }
  }
  var cert = document.getElementById('certificate');
  if (pct>=70) {
    cert.className='certificate show';
    cert.innerHTML='<h3>🎓 CERTIFICADO DE PARTICIPAÇÃO</h3>'+
      '<p>Certificamos que <strong>'+playerName+'</strong> concluiu o Quiz Era Vargas '+
      'com <strong>'+score+'/'+questions.length+' acertos</strong> e '+
      '<strong>'+totalPts+' pontos</strong>, demonstrando conhecimento sobre esse período histórico.</p>';
  } else {
    cert.className='certificate';
  }
  var gab = document.getElementById('gabarito');
  gab.innerHTML='<h3>📋 Gabarito Comentado</h3>';
  for(var i=0;i<questions.length;i++){
    var q  = questions[i];
    var ua = userAnswers[i];
    var isOk = ua===q.correct;
    var isTo = ua===-1;
    var item=document.createElement('div');
    item.className='gab-item';
    var qd=document.createElement('div');
    qd.innerHTML='<span class="gq">Q'+(i+1)+'.</span> '+q.question;
    var ad=document.createElement('div');
    ad.className='ga';
    ad.textContent='✔ '+q.options[q.correct];
    var ed=document.createElement('div');
    ed.className='ge';
    ed.textContent=q.explanation;
    item.appendChild(qd);
    item.appendChild(ad);
    if (!isOk&&!isTo){
      var wd=document.createElement('div');
      wd.className='gw';
      wd.textContent='✘ Sua resposta: '+q.options[ua];
      item.appendChild(wd);
    }
    if (isTo){
      var td=document.createElement('div');
      td.className='gw';
      td.textContent='⏱️ Tempo esgotado';
      item.appendChild(td);
    }
    item.appendChild(ed);
    gab.appendChild(item);
  }
}

/* ══════════════════════════════════════════CONTAGEM REGRESSIVA══════════════════════════════════════════ */
function runCountdown(cb) {
  showScreen('screen-countdown');
  var n   = 3;
  var lbl = document.getElementById('cd-number');
  lbl.textContent = n;
  sndCountdown();
  var iv = setInterval(function(){
    n--;
    if (n>0) {
      lbl.style.animation='none';
      void lbl.offsetWidth;
      lbl.style.animation='cdPop 0.5s ease';
      lbl.textContent = n;
      sndCountdown();
    } else {
      clearInterval(iv);
      lbl.textContent='▶';
      setTimeout(cb, 400);
    }
  }, 900);
}

/* ══════════════════════════════════════════INICIAR══════════════════════════════════════════ */
function startQuiz() {
  var inp = document.getElementById('player-name');
  playerName = (inp.value.trim()||'Jogador').substring(0,20);
  questions    = shuffle(allQuestions).slice(0, 10);
  current      = 0;
  score        = 0;
  userAnswers  = [];
  pointsLog    = [];
  achievements = [];
  document.getElementById('live-score').textContent = '0';
  document.getElementById('prog-bar').style.width   = '0%';
  runCountdown(function(){
    showScreen('screen-quiz');
    loadQuestion();
  });
}

/* ══════════════════════════════════════════EVENTOS══════════════════════════════════════════ */
document.getElementById('btn-start').addEventListener('click', function(){ startQuiz(); });
document.getElementById('btn-next').addEventListener('click', function(){
  current++;
  if (current<questions.length) {
    showScreen('screen-quiz');
    loadQuestion();
  } else {
    showResult();
  }
});
document.getElementById('btn-restart').addEventListener('click', function(){
  showScreen('screen-start');
  document.getElementById('player-name').value='';
});
