var perguntasRespostas = [
  { pergunta: "Oi", resposta: "Olá! Como posso ajudar?" },
  { pergunta: "Como está o tempo hoje?", resposta: "Desculpe, eu não sei verificar o tempo no momento." },
  { pergunta: "Qual é o seu nome?", resposta: "Eu sou um chatbot mascote!" },
  { pergunta: "Qual é a sua cor favorita?", resposta: "Eu gosto de amarelo, é claro!" },
  { pergunta: "O que você faz?", resposta: "Eu estou aqui para responder suas perguntas e ajudar no que precisar." }
];

function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  if (userInput !== "") {
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
  // Lógica do chatbot avançada - substitua com a lógica real desejada
  userInput = userInput.toLowerCase(); // Convertendo para minúsculas para tornar a comparação de texto case-insensitive

  for (var i = 0; i < perguntasRespostas.length; i++) {
    var perguntaAtual = perguntasRespostas[i].pergunta.toLowerCase();
    if (userInput.includes(perguntaAtual)) {
      return perguntasRespostas[i].resposta;
    }
  }

  return "Desculpe, não entendi. Pode reformular ou perguntar algo diferente?";
}
