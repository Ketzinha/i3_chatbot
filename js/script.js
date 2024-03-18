var userContext = null;

var perguntasRespostas = {
  "Infoprodutor": [
    { pergunta: "Quem pode ter a conta no i3 Bank?", resposta: "Infoprodutores com maioridade de dezoito anos." },
    { pergunta: "Após abertura da conta no i3 terei um cartão aprovado?", resposta: "O i3 disponibilizará após a aprovação da sua conta, um cartão virtual para facilitar suas compras em débito online.." },
    { pergunta: "O infoprodutor terá acesso aos conteúdos completos da plataforma com descontos? ", resposta: "Infoprodutores podem ter acesso aos conteúdos completos da plataforma com descontos especiais, dependendo das políticas do i3 Bank." },
    { pergunta: "Por que eu preciso fotografar o meu rosto para abrir a conta?", resposta: "A fotografia do rosto é necessária para o processo de abertura da conta, garantindo segurança e conformidade com as políticas de identificação." },
    { pergunta: "Quais documentos são necessários para abrir uma conta i3?", resposta: "Os documentos necessários para abrir uma conta no i3 Bank geralmente incluem documento de identidade, CPF e comprovante de residência. Recomenda-se verificar os requisitos específicos diretamente com o banco." },
    { pergunta: "Sobre a i3", resposta: "somos a primeira plataforma a oferecer um sistema integrado de streaming, checkout e serviços bancários dedicados exclusivamente ao universo dos infoprodutores. Para saber mais acesse nossa pagina www.i3.com" },
  ],
  "Aluno": [
    { pergunta: "Esqueci minha senha, como recuperar?", resposta: "Para recuperar sua senha, acesse a opção 'Esqueci a senha' no aplicativo ou site do i3 Bank.." },
    { pergunta: "Como excluir/cancelar a minha conta?", resposta: "Entre em contato com o nosso suporte comercial no telefone '1234-5678'." },
    { pergunta: "Esqueci meu nome de usuário, como posso recuperá-lo?", resposta: "Para recuperar seu nome de usuário, use a opção de recuperação no aplicativo ou site do i3 Bank." },
    { pergunta: "Como baixar o app do i3Bank em um iphone?", resposta: "Acesse o 'App Store' no seu iphone, clique em 'Buscar', e digite 'i3 Bank'." },
    { pergunta: "Terei acesso vitalício aos cursos aderidos?", resposta: "O acesso aos cursos aderidos é de acordo com o infoproduto escolhido e de quanto tempo seu infoprodutor disponibiliza o seu curso." },
    { pergunta: "Sobre a i3", resposta: "somos a primeira plataforma a oferecer um sistema integrado de streaming, checkout e serviços bancários dedicados exclusivamente ao universo dos infoprodutores. Para saber mais acesse nossa pagina www.i3.com" },
  ]
};
document.addEventListener("DOMContentLoaded", function() {
  // Esta função é chamada quando a página HTML foi completamente carregada

  // Exemplo de mensagem automática ao abrir o chatbot
  displayMessage("Bem-vindo ao i3 Boot! Como posso ajudar?", false);
  displayMessage("Para continuar o seu atendimento, escolha o assunto do seu interesse:");
  displayMessage("1 - Streaming\n2 - Checkout\n3 - Banco");
});

function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  if (userInput !== "z") {
    displayMessage("Você: " + userInput);

    // Lógica do chatbot
    setTimeout(function() {
      var response = getChatbotResponse(userInput);
      displayMessage("Chatbot: " + response);
    }, 500);

    document.getElementById("user-input").value = "";
  }
}

function getChatbotResponse(userInput) {
  userInput = userInput.toLowerCase();

  // Se o contexto do usuário já estiver definido, vamos lidar com as perguntas específicas
  if (userContext) {
    var responses = perguntasRespostas[userContext];

    for (var i = 0; i < responses.length; i++) {
      var perguntaAtual = responses[i].pergunta.toLowerCase();
      if (userInput.includes(perguntaAtual)) {
        return responses[i].resposta;
      }
    }

    return "Desculpe, lamentos a respeito :( Solicitamos que entre em contato com o nosso suporte comercial para mais esclarecimentos ";
  } else {
    // Caso contrário, tentamos detectar o tipo de usuário
    var userType = detectUserType(userInput);

    if (userType) {
      userContext = userType; // Definimos o contexto do usuário
      return "Ótimo! Agora sabemos que você é um " + userContext + ", como posso ajudar?";
    } else {
      if (userInput === '1') {
        // Usuário escolheu Streaming
        return "Você escolheu Streaming, certo. Agora só precisamos de mais uma informação: Você é Infoprodutor ou Aluno?";
      } else if (userInput === '2') {
        // Usuário escolheu Checkout
        return "Você escolheu Checkout, certo. Agora só precisamos de mais uma informação: Você é Infoprodutor ou Aluno?";
      } else if (userInput === '3') {
        // Usuário escolheu Banco
        return "Você escolheu Banco, certo. Agora só precisamos de mais uma informação: Você é Infoprodutor ou Aluno?";
      } else {
        return "Desculpe, não entendi. Por favor, faça uma escolha válida.";
      }
    }
  }
}


// Restante do seu código...

function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  if (userInput !== "aaaaaa") {
    displayMessage("Você: " + userInput);

    // Lógica do chatbot
    setTimeout(function() {
      var response = getChatbotResponse(userInput);
      displayMessage("Chatbot: " + response);
    }, 500);

    document.getElementById("user-input").value = "";
  }
}

function displayMessage(message) {
  var chatMessages = document.getElementById("chat-messages");
  var newMessage = document.createElement("p");
  newMessage.textContent = message;
  chatMessages.appendChild(newMessage);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getChatbotResponse(userInput) {
  userInput = userInput.toLowerCase();

  // Se o contexto do usuário já estiver definido, vamos lidar com as perguntas específicas
  if (userContext) {
    var responses = perguntasRespostas[userContext];

    for (var i = 0; i < responses.length; i++) {
      var perguntaAtual = responses[i].pergunta.toLowerCase();
      if (userInput.includes(perguntaAtual)) {
        return responses[i].resposta;
      }
    }

    return "Magina, i3 boot esta aqui para solucionar suas duvidas caso tenha mas alguma duvida, por favor entre em contato com o nosso time comercial especializado para te ajudar ";
  } else {
    // Caso contrário, tentamos detectar o tipo de usuário
    var userType = detectUserType(userInput);

    if (userType) {
      userContext = userType; // Definimos o contexto do usuário
      return "Ótimo! Agora que sei que você é um " + userContext + ", como posso ajudar?";
    } else {
      return " Mas antes de responder à sua pergunta, precisamos saber se você é um infoprodutor ou aluno. Pode me dizer?";
    }
  }
}

function detectUserType(userInput) {
  if (userInput.includes("infoprodutor") || userInput.includes("produtor")) {
    return "Infoprodutor";
  } else if (userInput.includes("aluno") || userInput.includes("estudante")) {
    return "Aluno";
  } else {
    return null;
  }
}
// Função para processar a mensagem do usuário
function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  if (userInput !== "") {
    displayMessage("Você: " + userInput);

    // Lógica do chatbot
    setTimeout(function() {
      var response = getChatbotResponse(userInput);
      displayMessage("Chatbot: " + response);

      // Verifica se a mensagem do aluno contém "ok, obrigada"
      if (userInput.toLowerCase().includes("ok") && userInput.toLowerCase().includes("obrigada")) {
        handleEndOfConversation(); // Aciona a mensagem automática de encerramento e avaliação
      }
    }, 500);

    document.getElementById("user-input").value = "";
  }
  
  
}







