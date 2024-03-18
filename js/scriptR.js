// Create a simple chatbot using an object
const chatbot = {
    greeting: "Olá, Sou o 13 bot, estou aqui para sanar suas dúvidas. Digite sua pergunta...",
    responses: {
      "O que é JavaScript?": "JavaScript é uma linguagem de programação popular para desenvolvimento web, geralmente executada no navegador.",
      "Como posso aprender JavaScript?": "Existem muitos recursos online para aprender JavaScript, como w3schools, MDN Web Docs, e cursos na plataforma Codecademy.",
      "Quem criou JavaScript?": "JavaScript foi criada por Brendan Eich enquanto trabalhava na Netscape Communications em 1995."
    },
    askQuestion(userQuestion) {
      if (this.responses[userQuestion]) {
        console.log(this.responses[userQuestion]);
      } else {
        console.log("Desculpe, não entendi a sua pergunta.");
      }
    }
  };
  
  // Test the chatbot
  chatbot.askQuestion("O que é JavaScript?");
  chatbot.askQuestion("Como posso aprender JavaScript?");
  chatbot.askQuestion("Quem criou JavaScript?");
  chatbot.askQuestion("Qual é a minha idade?"); // This question is not in the chatbot's knowledge base