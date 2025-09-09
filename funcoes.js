// Variáveis de estado
let currentQuestionIndex = 0;
let teamAScore = 0;
let teamBScore = 0;
let currentTeam = null;
let gameActive = false;
let revealInterval;
let answerSelected = false;
let questions = [];

// Elementos DOM
const teamACard = document.getElementById('teamA-card');
const teamBCard = document.getElementById('teamB-card');
const teamAScoreElement = document.getElementById('teamA-score');
const teamBScoreElement = document.getElementById('teamB-score');
const finalTeamAScore = document.getElementById('final-teamA-score');
const finalTeamBScore = document.getElementById('final-teamB-score');
const buzzerTeamA = document.getElementById('buzzer-teamA');
const buzzerTeamB = document.getElementById('buzzer-teamB');
const quizArea = document.getElementById('quiz-area');
const resultsArea = document.getElementById('results-area');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const progressBar = document.getElementById('progress');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const winnerText = document.getElementById('winner-text');
const winnerBox = document.getElementById('winner-box');
const revealAllBtn = document.getElementById('reveal-all-btn');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notification-message');
const closeNotification = document.getElementById('close-notification');

// Função para selecionar 10 questões aleatórias
function selectRandomQuestions() {
    // Remover duplicatas usando o texto da questão
    const uniqueQuestions = questionBank.filter(
        (q, index, self) =>
            index === self.findIndex(other => other.question === q.question)
    );

    // Embaralhar as questões únicas
    for (let i = uniqueQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [uniqueQuestions[i], uniqueQuestions[j]] = [uniqueQuestions[j], uniqueQuestions[i]];
    }

    // Retornar as primeiras 10
    return uniqueQuestions.slice(0, 10);
}


// Função para mostrar notificação
function showNotification(message, type = 'success') {
    notification.className = `notification is-${type} show`;
    notificationMessage.textContent = message;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Inicializar quiz
function initQuiz() {
    // Selecionar 10 questões aleatórias
    questions = selectRandomQuestions();
    
    totalQuestionsElement.textContent = questions.length;
    loadQuestion();
    gameActive = true;
    answerSelected = false;
    
    showNotification("Novo jogo iniciado! 10 questões selecionadas aleatoriamente.");
}

// Carregar questão
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    questionText.textContent = currentQuestion.question;
    
    // Atualizar barra de progresso
    progressBar.value = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Limpar opções anteriores
    optionsContainer.innerHTML = '';
    answerSelected = false;
    
    // Reiniciar o estado dos buzzers
    resetBuzzers();
    
    // Esconder o botão de próxima pergunta inicialmente
    nextBtn.classList.add('is-hidden');
    
    // Iniciar a revelação automática das opções
    startAutoReveal();
}

// Iniciar revelação automática das opções
function startAutoReveal() {
    clearInterval(revealInterval);
    
    const currentQuestion = questions[currentQuestionIndex];
    let optionIndex = 0;
    
    revealInterval = setInterval(() => {
        if (optionIndex < currentQuestion.options.length) {
            revealOption(optionIndex);
            optionIndex++;
        } else {
            clearInterval(revealInterval);
        }
    }, 1000);
}

// Revelar uma alternativa específica
function revealOption(index) {
    const currentQuestion = questions[currentQuestionIndex];
    const option = document.createElement('button');
    option.className = 'button option-button is-info fade-in';
    option.textContent = currentQuestion.options[index];
    option.dataset.index = index;
    option.addEventListener('click', () => checkAnswer(index));
    optionsContainer.appendChild(option);
}

// Revelar todas as alternativas de uma vez
function revealAllOptions() {
    clearInterval(revealInterval);
    const currentQuestion = questions[currentQuestionIndex];
    optionsContainer.innerHTML = '';
    
    currentQuestion.options.forEach((option, index) => {
        revealOption(index);
    });
    
    showNotification("Todas as alternativas foram reveladas!");
}

// Resetar buzzers
function resetBuzzers() {
    currentTeam = null;
    teamACard.classList.remove('active');
    teamBCard.classList.remove('active');
    buzzerTeamA.disabled = false;
    buzzerTeamB.disabled = false;
    buzzerTeamA.classList.remove('is-success', 'is-light');
    buzzerTeamB.classList.remove('is-danger', 'is-light');
    gameActive = true;
}

// Desativar buzzers
function disableBuzzers() {
    buzzerTeamA.disabled = true;
    buzzerTeamB.disabled = true;
    gameActive = false;
}

// Um time pressiona o buzzer
function teamBuzzIn(team) {
    if (!gameActive || answerSelected) return;
    
    gameActive = false;
    currentTeam = team;
    disableBuzzers();
    
    if (team === 'A') {
        teamACard.classList.add('active');
        buzzerTeamA.classList.add('is-success');
        buzzerTeamB.classList.add('is-light');
        showNotification("Time A pressionou o buzzer primeiro!");
    } else {
        teamBCard.classList.add('active');
        buzzerTeamB.classList.add('is-danger');
        buzzerTeamA.classList.add('is-light');
        showNotification("Time B pressionou o buzzer primeiro!");
    }
}

// Verificar resposta
function checkAnswer(optionIndex) {
    if (!currentTeam || answerSelected) return;
    
    answerSelected = true;
    const currentQuestion = questions[currentQuestionIndex];
    const options = optionsContainer.querySelectorAll('.button');
    
    // Desabilitar todos os botões após a seleção
    options.forEach(button => {
        button.disabled = true;
    });
    
    // Verificar se a resposta está correta
    if (optionIndex === currentQuestion.correct) {
        options[optionIndex].classList.remove('is-info');
        options[optionIndex].classList.add('is-success');
        
        // Adicionar pontos
        if (currentTeam === 'A') {
            teamAScore += 10;
            teamAScoreElement.textContent = teamAScore;
            showNotification("Time A acertou! +10 pontos", "success");
        } else {
            teamBScore += 10;
            teamBScoreElement.textContent = teamBScore;
            showNotification("Time B acertou! +10 pontos", "success");
        }
        
        questionText.textContent = "Resposta correta! +10 pontos";
    } else {
        options[optionIndex].classList.remove('is-info');
        options[optionIndex].classList.add('is-danger');
        options[currentQuestion.correct].classList.remove('is-info');
        options[currentQuestion.correct].classList.add('is-success');
        
        // MODIFICAÇÃO AQUI: Transferir pontos para o outro time
        if (currentTeam === 'A') {
            teamBScore += 10; // Time B ganha os pontos
            teamBScoreElement.textContent = teamBScore;
            showNotification("Time A errou! Time B ganha +10 pontos!", "warning");
            questionText.innerHTML = "Resposta incorreta! <span class='points-transfer'>+10 pontos para o Time B</span>";
        } else {
            teamAScore += 10; // Time A ganha os pontos
            teamAScoreElement.textContent = teamAScore;
            showNotification("Time B errou! Time A ganha +10 pontos!", "warning");
            questionText.innerHTML = "Resposta incorreta! <span class='points-transfer'>+10 pontos para o Time A</span>";
        }
    }
    
    // Parar a revelação automática
    clearInterval(revealInterval);
    
    // Mostrar o botão de próxima pergunta
    nextBtn.classList.remove('is-hidden');
}

// Próxima questão
function nextQuestion() {
    // Avançar para a próxima pergunta
    currentQuestionIndex++;
    
    // Verificar se ainda há perguntas
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Mostrar resultados
function showResults() {
    quizArea.classList.add('is-hidden');
    resultsArea.classList.remove('is-hidden');
    
    finalTeamAScore.textContent = teamAScore;
    finalTeamBScore.textContent = teamBScore;
    
    // Determinar o vencedor
    if (teamAScore > teamBScore) {
        winnerText.textContent = "Vencedor: Time A!";
        winnerBox.className = "box has-background-primary-light";
        showNotification("Time A venceu o quiz!", "primary");
    } else if (teamBScore > teamAScore) {
        winnerText.textContent = "Vencedor: Time B!";
        winnerBox.className = "box has-background-danger-light";
        showNotification("Time B venceu o quiz!", "danger");
    } else {
        winnerText.textContent = "Empate!";
        winnerBox.className = "box has-background-info-light";
        showNotification("O quiz terminou em empate!", "info");
    }
}

// Reiniciar quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    teamAScore = 0;
    teamBScore = 0;
    teamAScoreElement.textContent = "0";
    teamBScoreElement.textContent = "0";
    resultsArea.classList.add('is-hidden');
    quizArea.classList.remove('is-hidden');
    
    // Selecionar novas questões aleatórias
    questions = selectRandomQuestions();
    
    loadQuestion();
    showNotification("Novo jogo iniciado! 10 questões selecionadas aleatoriamente.");
}

// Event Listeners
buzzerTeamA.addEventListener('click', () => teamBuzzIn('A'));
buzzerTeamB.addEventListener('click', () => teamBuzzIn('B'));
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
revealAllBtn.addEventListener('click', revealAllOptions);
closeNotification.addEventListener('click', () => {
    notification.classList.remove('show');
});

// Iniciar o quiz quando a página carregar
window.addEventListener('load', initQuiz);