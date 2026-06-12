import {
  QUESTIONS,
  buildLeadPayload,
  calculateScore,
  getResultForScore,
} from './src/quizData.js';

const state = {
  currentQuestionIndex: 0,
  answers: {},
  score: 0,
  result: null,
  leadPayload: null,
};

const screens = {
  start: document.querySelector('[data-screen="start"]'),
  quiz: document.querySelector('[data-screen="quiz"]'),
  contact: document.querySelector('[data-screen="contact"]'),
  final: document.querySelector('[data-screen="final"]'),
};

const questionCount = document.querySelector('[data-question-count]');
const questionTitle = document.querySelector('[data-question-title]');
const optionsNode = document.querySelector('[data-options]');
const progressFill = document.querySelector('[data-progress-fill]');
const scorePreview = document.querySelector('[data-score-preview]');
const quizError = document.querySelector('[data-quiz-error]');
const formError = document.querySelector('[data-form-error]');
const contactForm = document.querySelector('[data-contact-form]');
const resultBox = document.querySelector('[data-result-box]');
const resultLink = document.querySelector('[data-result-link]');

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove('is-active'));
  screens[name].classList.add('is-active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion() {
  const question = QUESTIONS[state.currentQuestionIndex];
  const selectedAnswer = state.answers[question.id];
  const questionNumber = state.currentQuestionIndex + 1;
  const isLastQuestion = questionNumber === QUESTIONS.length;

  questionCount.textContent = `Вопрос ${questionNumber} из ${QUESTIONS.length}`;
  scorePreview.textContent = 'Выберите один вариант';
  progressFill.style.width = `${(questionNumber / QUESTIONS.length) * 100}%`;
  questionTitle.textContent = question.title;
  quizError.textContent = '';

  optionsNode.replaceChildren(
    ...question.options.map((option) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `option-button${selectedAnswer === option.id ? ' is-selected' : ''}`;
      button.textContent = option.label;
      button.dataset.optionId = option.id;
      button.addEventListener('click', () => {
        state.answers[question.id] = option.id;
        renderQuestion();
      });
      return button;
    }),
  );

  document.querySelector('[data-action="back"]').disabled = state.currentQuestionIndex === 0;
  document.querySelector('[data-action="next"]').textContent = isLastQuestion ? 'К контактам' : 'Далее';
}

function moveNext() {
  const question = QUESTIONS[state.currentQuestionIndex];

  if (!state.answers[question.id]) {
    quizError.textContent = 'Выберите один вариант ответа, чтобы продолжить.';
    return;
  }

  if (state.currentQuestionIndex < QUESTIONS.length - 1) {
    state.currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  state.score = calculateScore(state.answers);
  state.result = getResultForScore(state.score);
  showScreen('contact');
}

function moveBack() {
  if (state.currentQuestionIndex === 0) {
    return;
  }

  state.currentQuestionIndex -= 1;
  renderQuestion();
}

function validateContact(formData) {
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const phone = formData.get('phone').trim();
  const consent = formData.get('consent') === 'on';

  if (!name || !email || !phone) {
    return 'Заполните ФИО, email и телефон.';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Введите корректный email.';
  }

  if (phone.replace(/\D/g, '').length < 10) {
    return 'Введите корректный телефон.';
  }

  if (!consent) {
    return 'Подтвердите согласие на обработку персональных данных.';
  }

  return '';
}

function renderFinal() {
  const result = state.result;

  resultBox.innerHTML = `
    <span class="result-tag">${result.tag}</span>
    <h3>${result.title}</h3>
    <p>${result.text}</p>
  `;
  resultLink.href = result.url;
  resultLink.textContent = result.buttonText;
}

function handleContactSubmit(event) {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const error = validateContact(formData);

  if (error) {
    formError.textContent = error;
    return;
  }

  formError.textContent = '';
  state.leadPayload = buildLeadPayload({
    contact: {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    },
    answers: state.answers,
  });

  console.info('Lead payload for backend:', state.leadPayload);
  renderFinal();
  showScreen('final');
}

function restartQuiz() {
  state.currentQuestionIndex = 0;
  state.answers = {};
  state.score = 0;
  state.result = null;
  state.leadPayload = null;
  contactForm.reset();
  renderQuestion();
  showScreen('start');
}

document.querySelector('[data-action="start"]').addEventListener('click', () => {
  renderQuestion();
  showScreen('quiz');
});

document.querySelector('[data-action="next"]').addEventListener('click', moveNext);
document.querySelector('[data-action="back"]').addEventListener('click', moveBack);
document.querySelector('[data-action="restart"]').addEventListener('click', restartQuiz);
contactForm.addEventListener('submit', handleContactSubmit);

renderQuestion();
