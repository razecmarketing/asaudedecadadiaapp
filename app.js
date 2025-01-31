import { PersonalityMapper } from './personalityMapper.js';
import { ChallengeGenerator } from './challengeGenerator.js';
import { ChallengeTracker } from './challengeTracker.js';
import { Notebook } from './notebook.js';
import { Calculator } from './calculator.js';

class SaudeDeCadaDia {
    constructor() {
        this.personalityMapper = new PersonalityMapper();
        this.challengeGenerator = new ChallengeGenerator();
        this.challengeTracker = new ChallengeTracker();
        this.challenges = [];
        this.challengeCompletionStatus = [];
        this.selectedFocus = null;
        this.initEventListeners();
        this.positiveMessages = this.generatePositiveMessages();
        this.negativeMessages = this.generateNegativeMessages();
        this.initFooterIcons();
        this.progressChart = null;
        this.notebook = null;
        this.calculator = null;
        this.initInteractiveFeatures();
    }

    initEventListeners() {
        // Focus selection buttons
        const weightLossBtn = document.getElementById('weight-loss-btn');
        const generalHealthBtn = document.getElementById('general-health-btn');
        const combinedHealthBtn = document.getElementById('combined-health-btn');

        weightLossBtn.addEventListener('click', () => this.selectFocus('weightLoss'));
        generalHealthBtn.addEventListener('click', () => this.selectFocus('generalHealth'));
        combinedHealthBtn.addEventListener('click', () => this.selectFocus('combinedHealth'));

        const form = document.getElementById('personal-info');
        if (form) {
            form.addEventListener('submit', this.handleFormSubmit.bind(this));
        }

        const birthdateInput = document.getElementById('birthdate');
        if (birthdateInput) {
            birthdateInput.addEventListener('change', this.updatePersonalityQuestion.bind(this));
        }

        const motivationOverlay = document.getElementById('motivation-overlay');
        if (motivationOverlay) {
            motivationOverlay.addEventListener('click', this.closeMotivation.bind(this));
        }

        const nextDayBtn = document.getElementById('proceed-to-next-day-btn');
        if (nextDayBtn) {
            nextDayBtn.addEventListener('click', this.proceedToNextDay.bind(this));
        }
    }

    selectFocus(focus) {
        this.selectedFocus = focus;
        document.getElementById('challenge-focus-selection').classList.add('hidden');
        document.getElementById('registration-form').classList.remove('hidden');
    }

    closeMotivation() {
        const motivationSection = document.getElementById('motivation-section');
        const motivationOverlay = document.getElementById('motivation-overlay');
        
        motivationSection.classList.add('hidden');
        motivationOverlay.style.display = 'none';
    }

    updatePersonalityQuestion() {
        const birthdateInput = document.getElementById('birthdate');
        const birthDate = new Date(birthdateInput.value);
        const month = birthDate.getMonth() + 1;
        const day = birthDate.getDate();

        const questionContainer = document.getElementById('personality-question');
        questionContainer.textContent = this.personalityMapper.getRandomPersonalityQuestion(month, day);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const birthplace = document.getElementById('birthplace').value;
        const personalityAnswer = document.getElementById('personality-answer').value;

        const personalityData = this.processPersonalityData(birthdate, birthplace);
        this.displayResults(name, personalityData);
    }

    processPersonalityData(birthdate, birthplace) {
        const birthDateObj = new Date(birthdate);
        return this.personalityMapper.getPersonalityProfile(
            birthDateObj.getMonth() + 1, 
            birthDateObj.getDate(), 
            birthplace
        );
    }

    displayResults(name, personalityData) {
        const resultSection = document.getElementById('profile-result');
        const personalityNameEl = document.getElementById('personality-name');
        const personalityDescriptionEl = document.getElementById('personality-description');
        const challengesList = document.getElementById('daily-challenges');

        personalityNameEl.textContent = personalityData.name;
        personalityDescriptionEl.textContent = personalityData.description;

        this.challenges = this.challengeGenerator.generateChallenges(this.selectedFocus);
        challengesList.innerHTML = this.challenges 
            .map((challenge, index) => `
                <li class="challenge-item" data-index="${index}">
                    ${challenge}
                    <div class="challenge-actions">
                        <div class="challenge-status-buttons">
                            <button type="button" class="btn-success challenge-success-btn">Concluí</button>
                            <button type="button" class="btn-fail challenge-fail-btn">Não Concluí</button>
                        </div>
                    </div>
                </li>
            `)
            .join('');

        const challengeDayTitle = document.getElementById('challenge-day-title');
        challengeDayTitle.textContent = `Seus 10 Desafios Diários - Dia ${this.challengeTracker.getCurrentDay()}`;

        this.challengeCompletionStatus = new Array(this.challenges.length).fill(false);

        const successButtons = document.querySelectorAll('.challenge-success-btn');
        const failButtons = document.querySelectorAll('.challenge-fail-btn');

        successButtons.forEach(button => {
            button.addEventListener('click', this.handleChallengeSuccess.bind(this));
        });

        failButtons.forEach(button => {
            button.addEventListener('click', this.handleChallengeFail.bind(this));
        });

        resultSection.classList.remove('hidden');
        
        const motivationSection = document.getElementById('motivation-section');
        const motivationMessage = document.getElementById('motivation-message');
        motivationSection.classList.add('hidden');
        motivationMessage.textContent = '';
    }

    handleChallengeSuccess(event) {
        const challengeItem = event.target.closest('.challenge-item');
        const index = parseInt(challengeItem.getAttribute('data-index'));

        challengeItem.classList.add('challenge-completed');
        challengeItem.classList.remove('challenge-failed');
        this.challengeCompletionStatus[index] = true;
        this.showMotivation(true);

        this.checkAllChallengesCompletion();
    }

    handleChallengeFail(event) {
        const challengeItem = event.target.closest('.challenge-item');
        const index = parseInt(challengeItem.getAttribute('data-index'));

        challengeItem.classList.add('challenge-failed');
        challengeItem.classList.remove('challenge-completed');
        this.challengeCompletionStatus[index] = false;
        this.showMotivation(false);

        this.checkAllChallengesCompletion();
    }

    checkAllChallengesCompletion() {
        const challengeItems = document.querySelectorAll('.challenge-item');
        const allTasksAddressed = Array.from(challengeItems).every(item => 
            item.classList.contains('challenge-completed') || 
            item.classList.contains('challenge-failed')
        );
        
        if (allTasksAddressed) {
            this.trackDayProgress();
            this.showNextDayOption();
            
            // Always show motivation when all tasks are addressed
            const allCompleted = Array.from(challengeItems).every(item => 
                item.classList.contains('challenge-completed')
            );
            
            if (allCompleted) {
                this.showFinalMotivation(true);
            } else {
                this.showMotivation(false);
            }
        }
    }

    trackDayProgress() {
        const completionStatus = this.challenges.map(challenge => 
            this.challengeCompletionStatus[this.challenges.indexOf(challenge)] || false
        );

        this.challengeTracker.trackDayProgress(
            this.challenges, 
            completionStatus
        );
    }

    showNextDayOption() {
        const nextDaySection = document.getElementById('next-day-section');
        nextDaySection.classList.remove('hidden');
    }

    proceedToNextDay() {
        if (this.challengeTracker.isLastDay()) {
            this.showChallengeSeriesCompletionMessage();
            return;
        }

        const nextDay = this.challengeTracker.startNewDay();

        const challengeDayTitle = document.getElementById('challenge-day-title');
        challengeDayTitle.textContent = `Seus 10 Desafios Diários - Dia ${nextDay}`;

        this.challenges = this.challengeGenerator.generateChallenges();
        
        const challengesList = document.getElementById('daily-challenges');
        challengesList.innerHTML = this.challenges 
            .map((challenge, index) => `
                <li class="challenge-item" data-index="${index}">
                    ${challenge}
                    <div class="challenge-actions">
                        <div class="challenge-status-buttons">
                            <button type="button" class="btn-success challenge-success-btn">Concluí</button>
                            <button type="button" class="btn-fail challenge-fail-btn">Não Concluí</button>
                        </div>
                    </div>
                </li>
            `)
            .join('');

        this.challengeCompletionStatus = new Array(this.challenges.length).fill(false);

        this.addChallengeButtonListeners();

        const nextDaySection = document.getElementById('next-day-section');
        nextDaySection.classList.add('hidden');

        this.closeMotivation();
    }

    addChallengeButtonListeners() {
        const successButtons = document.querySelectorAll('.challenge-success-btn');
        const failButtons = document.querySelectorAll('.challenge-fail-btn');

        successButtons.forEach(button => {
            button.addEventListener('click', this.handleChallengeSuccess.bind(this));
        });

        failButtons.forEach(button => {
            button.addEventListener('click', this.handleChallengeFail.bind(this));
        });
    }

    showChallengeSeriesCompletionMessage() {
        const motivationSection = document.getElementById('motivation-section');
        const motivationOverlay = document.getElementById('motivation-overlay');
        const motivationMessage = document.getElementById('motivation-message');

        motivationOverlay.style.display = 'block';
        motivationSection.classList.remove('hidden');
        motivationSection.classList.add('positive-motivation');

        motivationMessage.innerHTML = `
            🎉 PARABÉNS! 🏆<br>
            Você completou os 30 dias de Desafio de Saúde!<br>
            Quer começar uma nova série de 30 dias? 
            <button id="restart-challenge-btn">Reiniciar Desafio</button>
        `;

        const restartBtn = document.getElementById('restart-challenge-btn');
        restartBtn.addEventListener('click', () => {
            this.challengeTracker.resetChallenges();
            this.proceedToNextDay();
        });
    }

    showMotivation(isPositive) {
        const motivationSection = document.getElementById('motivation-section');
        const motivationOverlay = document.getElementById('motivation-overlay');
        const motivationMessage = document.getElementById('motivation-message');

        motivationOverlay.style.display = 'block';
        motivationSection.classList.remove('hidden');
        motivationSection.classList.toggle('positive-motivation', isPositive);
        motivationSection.classList.toggle('negative-motivation', !isPositive);

        if (isPositive) {
            motivationMessage.textContent = this.getPositiveMotivation();
        } else {
            motivationMessage.textContent = this.getNegativeMotivation();
        }
    }

    showFinalMotivation(isAllCompleted) {
        const motivationSection = document.getElementById('motivation-section');
        const motivationMessage = document.getElementById('motivation-message');
        const motivationOverlay = document.getElementById('motivation-overlay');

        motivationOverlay.style.display = 'block';
        motivationSection.classList.remove('hidden');
        motivationSection.classList.add('positive-motivation');

        if (isAllCompleted) {
            motivationMessage.textContent = "🏅 SENSACIONAL! Você zerou o modo 'Saúde Ninja'! Seus desafios tremeram na base! 💥🌟";
        }
    }

    generatePositiveMessages() {
        return [
            // Saúde Física
            "🏋️ Você tá mais fit que um smartphone carregado!",
            "💪 Músculos tremendo de orgulho de você!",
            "🚀 Sua energia tá mais alta que post viral no TikTok!",
            "🌟 Missão saúde completada com mais estilo que influencer fitness!",
            "🔥 Seu corpo agradece mais que cachorro ganhando petisco!",

            // Nutrição e Humor
            "🥦 Mais verde que salada de consciente!",
            "🍎 Sua dieta tá mais equilibrada que cabo de guerra!",
            "🥤 Hidratação ON, preguiça OFF!",
            "🧘 Mais zen que meditação em dia de folga!",
            "🍇 Nutrição top, como meme perfeito!",

            // Motivação Criativa
            "👑 Rei/Rainha do autocuidado!",
            "🎉 Saúde em modo NINJA ativado!",
            "💥 Desafio nocauteado por você!",
            "🏆 Troféu de determinação chegando!",
            "🌈 Seu esforço brilha mais que filtro de Instagram!",

            // Humor Corporal
            "😂 Suas células estão fazendo festa agora!",
            "🤸 Corpo mais feliz que criança no parquinho!",
            "💓 Metabolismo batendo palmas pra você!",
            "🦸 Superhéroe da saúde em ação!",
            "🌞 Energia mais renovável que fonte alternativa!",

            // Motivação Divertida
            "🚀 Lançou mais rápido que série no Netflix!",
            "🎸 Saúde rockando mais que show de rock!",
            "🍦 Disciplina mais dura que sorvete no freezer!",
            "🤖 Modo saúde: upgrading sistema!",
            "🎳 Strike na saúde, spare no autocuidado!",

            // Motivação Incentivadora
            "💡 Brilhando mais que lâmpada nova!",
            "🌴 Zen como férias no Caribe!",
            "🎈 Leveza mais alta que balão!",
            "🚲 Pedal da vida girando perfeito!",
            "🌊 Fluindo mais que correnteza positiva!",

            // Motivação Corporal
            "💪 Massa muscular mandando salve!",
            "🧬 DNA da saúde em modo turbo!",
            "🔬 Célula aplaudindo seu esforço!",
            "❤️ Coração batendo funk de alegria!",
            "🌡️ Temperatura do sucesso nos 40 graus!",

            // Extra Divertido
            "🤪 Saúde mais top que meme viral!",
            "🚀 Decolando mais rápido que avião!",
            "🎳 Strike na vida, spare no autocuidado!",
            "🌈 Arco-íris de determinação!",
            "🍭 Doçura da disciplina!"
        ];
    }

    generateNegativeMessages() {
        return [
            // Saúde Frustrada
            "🥱 Dormiu mais rápido que desafio de dieta!",
            "🍩 Motivação mais fugaz que último pedaço de pizza!",
            "🐌 Mais lento que internet de zap!",
            "🧊 Determinação mais congelada que picolé!",
            "🍟 Desistência mais rápida que batata na dieta!",

            // Humor Fitness
            "🏃 Corrida mais curta que story de Instagram!",
            "💤 Sono ganhou mais fácil que competição!",
            "🍦 Disciplina derreteu mais rápido que sorvete no sol!",
            "🥴 Desafio te venceu mais que ressaca!",
            "🚽 Motivação escapou mais que água no ralo!",

            // Motivação Irônica
            "🤡 Mais furado que meia velha de academia!",
            "🎈 Determinação mais vazia que promessa de político!",
            "🍭 Vontade mais sumida que último biscoito!",
            "🌪️ Foco mais perdido que carrinho no supermercado!",
            "🚲 Pedalada mais curta que intervalo comercial!",

            // Humor Corporal
            "💪 Músculos mais dormentes que segunda-feira!",
            "🧘 Zen mais distante que lua!",
            "🏋️ Treino mais fraco que café sem açúcar!",
            "🍎 Dieta mais quebrada que celular sem tela!",
            "❤️ Coração mais desanimado que prova de matemática!",

            // Motivação Cômica
            "🌡️ Temperatura do esforço nos zero graus!",
            "🚀 Decolagem mais cancelada que voo de baixo custo!",
            "🎳 Strike impossível, spare improvável!",
            "🌈 Arco-íris sumiu antes de aparecer!",
            "🍭 Doçura da desistência!"
        ];
    }

    getPositiveMotivation() {
        return this.positiveMessages[Math.floor(Math.random() * this.positiveMessages.length)];
    }

    getNegativeMotivation() {
        return this.negativeMessages[Math.floor(Math.random() * this.negativeMessages.length)];
    }

    initFooterIcons() {
        // Desktop Sidebar Icons
        const challengeProgressIcon = document.getElementById('challenge-progress-icon');
        const progressGraphIcon = document.getElementById('progress-graph-icon');
        
        // Mobile Footer Icons
        const mobileChallengeProgressIcon = document.getElementById('mobile-challenge-progress-icon');
        const mobileProgressGraphIcon = document.getElementById('mobile-progress-graph-icon');
        
        const challengeProgressModal = document.getElementById('challenge-progress-modal');
        const progressGraphModal = document.getElementById('progress-graph-modal');
        
        const closeModalButtons = document.querySelectorAll('.close-modal');

        // Add event listeners for both desktop and mobile icons
        const iconListeners = [
            { icon: challengeProgressIcon, action: () => this.showChallengeProgress() },
            { icon: progressGraphIcon, action: () => this.showProgressGraph() },
            { icon: mobileChallengeProgressIcon, action: () => this.showChallengeProgress() },
            { icon: mobileProgressGraphIcon, action: () => this.showProgressGraph() }
        ];

        iconListeners.forEach(({ icon, action }) => {
            if (icon) {
                icon.addEventListener('click', () => {
                    // Add animation effect
                    gsap.fromTo(icon, 
                        { scale: 0.8, rotation: 0 }, 
                        { 
                            scale: 1.2, 
                            rotation: 360, 
                            duration: 0.5, 
                            ease: "elastic.out(1, 0.3)",
                            onComplete: action 
                        }
                    );
                });
            }
        });

        // Close modal when clicking on the close button
        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                challengeProgressModal.style.display = 'none';
                progressGraphModal.style.display = 'none';
            });
        });

        // Close modal when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === challengeProgressModal) {
                challengeProgressModal.style.display = 'none';
            }
            if (event.target === progressGraphModal) {
                progressGraphModal.style.display = 'none';
            }
        });
    }

    initInteractiveFeatures() {
        // Notebook and Calculator Modal Initialization
        const notebookIcon = document.getElementById('notebook-icon');
        const calculatorIcon = document.getElementById('calculator-icon');
        const notebookModal = document.getElementById('notebook-modal');
        const calculatorModal = document.getElementById('calculator-modal');
        const closeModalButtons = document.querySelectorAll('.close-modal');

        const initializeModals = () => {
            notebookIcon.addEventListener('click', () => {
                if (!this.notebook) {
                    this.notebook = new Notebook();
                }
                notebookModal.style.display = 'block';
            });

            calculatorIcon.addEventListener('click', () => {
                if (!this.calculator) {
                    this.calculator = new Calculator();
                }
                calculatorModal.style.display = 'block';
            });

            closeModalButtons.forEach(button => {
                button.addEventListener('click', () => {
                    notebookModal.style.display = 'none';
                    calculatorModal.style.display = 'none';
                });
            });

            window.addEventListener('click', (event) => {
                if (event.target === notebookModal) {
                    notebookModal.style.display = 'none';
                }
                if (event.target === calculatorModal) {
                    calculatorModal.style.display = 'none';
                }
            });
        };

        initializeModals();
    }

    showChallengeProgress() {
        const challengeHistory = this.challengeTracker.getChallengeHistory();
        const latestDayEntry = challengeHistory[challengeHistory.length - 1] || 
            { challenges: [], completionStatus: [] };

        const currentDayChallenges = latestDayEntry.challenges;
        const currentDayChallengeStatus = latestDayEntry.completionStatus;

        const totalChallenges = currentDayChallenges.length;
        const completedChallenges = currentDayChallengeStatus.filter(status => status === true).length;
        const incompleteChallenges = currentDayChallengeStatus.filter(status => status === false).length;

        document.getElementById('total-challenges').textContent = totalChallenges;
        document.getElementById('completed-challenges').textContent = completedChallenges;
        document.getElementById('incomplete-challenges').textContent = incompleteChallenges;

        const challengeProgressModal = document.getElementById('challenge-progress-modal');
        challengeProgressModal.style.display = 'block';
    }

    showProgressGraph() {
        const progressGraphModal = document.getElementById('progress-graph-modal');
        progressGraphModal.style.display = 'block';

        const challengeHistory = this.challengeTracker.getChallengeHistory();
        const labels = challengeHistory.map(entry => `Dia ${entry.day}`);
        const completedData = challengeHistory.map(entry => 
            entry.completionStatus.filter(status => status === true).length
        );
        const incompleteData = challengeHistory.map(entry => 
            entry.completionStatus.filter(status => status === false).length
        );

        if (this.progressChart) {
            this.progressChart.destroy();
        }

        const ctx = document.getElementById('progress-chart').getContext('2d');
        this.progressChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Desafios Concluídos',
                        data: completedData,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)'
                    },
                    {
                        label: 'Desafios Não Concluídos',
                        data: incompleteData,
                        backgroundColor: 'rgba(255, 99, 132, 0.6)'
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Número de Desafios'
                        }
                    }
                }
            }
        });
    }
}

function initGSAPAnimations() {
    gsap.fromTo('.header', 
        { opacity: 0, y: -50 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo('.challenge-focus-buttons button', 
        { scale: 0.5, opacity: 0 },
        { 
            scale: 1, 
            opacity: 1, 
            duration: 0.5, 
            stagger: 0.2,
            ease: "back.out(1.7)"
        }
    );
}

document.addEventListener('DOMContentLoaded', () => {
    new SaudeDeCadaDia();
    initGSAPAnimations();
});