export const QUESTIONS = [
  {
    id: 'method_familiarity',
    title: 'Насколько вы знакомы с методом Леонида Тальписа?',
    options: [
      { id: 'first_time', label: 'Слышу впервые', score: 1 },
      { id: 'watched_materials', label: 'Смотрел(а) видео или читал(а) материалы, но на программах не был(а)', score: 2 },
      { id: 'visited_events', label: 'Уже был(а) на бесплатных встречах или МВС', score: 3 },
    ],
  },
  {
    id: 'current_state',
    title: 'Как бы вы описали своё состояние прямо сейчас?',
    options: [
      { id: 'mostly_ok', label: 'Всё в целом нормально, просто хочу лучше понять себя', score: 1 },
      { id: 'something_wrong', label: 'Чувствую, что что-то идёт не так, но не могу понять что', score: 2 },
      { id: 'specific_pain', label: 'Есть конкретная боль — отношения, деньги, реализация, внутренний разлад', score: 3 },
    ],
  },
  {
    id: 'main_concern',
    title: 'Что вас больше всего беспокоит в жизни прямо сейчас?',
    options: [
      { id: 'hard_to_formulate', label: 'Пока не могу сформулировать', score: 1 },
      { id: 'relationships', label: 'Отношения с близкими или партнёром', score: 2 },
      { id: 'money_work', label: 'Деньги, работа, реализация', score: 2 },
      { id: 'inner_state', label: 'Внутреннее состояние, тревога, ощущение потери себя', score: 3 },
    ],
  },
  {
    id: 'duration',
    title: 'Как давно вы замечаете эту ситуацию?',
    options: [
      { id: 'recently', label: 'Недавно, только начал(а) задумываться', score: 1 },
      { id: 'months', label: 'Несколько месяцев, пробовал(а) что-то менять', score: 2 },
      { id: 'long_circle', label: 'Давно, и ощущение что хожу по кругу', score: 3 },
    ],
  },
  {
    id: 'prior_work',
    title: 'Пробовали ли вы раньше работать с психологом, терапевтом или на тренингах?',
    options: [
      { id: 'first_experience', label: 'Нет, это был бы первый опыт', score: 1 },
      { id: 'partly_helped', label: 'Да, пробовал(а) — частично помогло', score: 2 },
      { id: 'need_different', label: 'Да, и понимаю, что нужно что-то принципиально другое', score: 3 },
    ],
  },
  {
    id: 'unconscious_practices',
    title: 'Как вы относитесь к работе с бессознательным, телесными и трансовыми практиками?',
    options: [
      { id: 'curious_unclear', label: 'Интересно, но пока непонятно что это', score: 1 },
      { id: 'open_to_try', label: 'Открыт(а), хочу попробовать', score: 2 },
      { id: 'want_deeper', label: 'Уже работал(а) с чем-то подобным, хочу глубже', score: 3 },
    ],
  },
  {
    id: 'priority',
    title: 'Что для вас важнее прямо сейчас?',
    options: [
      { id: 'understand_method', label: 'Понять, что вообще из себя представляет этот метод', score: 1 },
      { id: 'first_experience', label: 'Получить первый реальный опыт и почувствовать изменения', score: 2 },
      { id: 'deep_request', label: 'Глубоко проработать конкретный запрос и сдвинуться с места', score: 3 },
    ],
  },
  {
    id: 'investment_readiness',
    title: 'Насколько вы готовы инвестировать в изменения прямо сейчас?',
    options: [
      { id: 'free_first', label: 'Хочу сначала познакомиться бесплатно', score: 1 },
      { id: 'small_paid_step', label: 'Готов(а) на небольшой платный шаг', score: 2 },
      { id: 'serious_step', label: 'Готов(а) на серьёзный шаг, если увижу ценность', score: 3 },
    ],
  },
  {
    id: 'request_type',
    title: 'Что ближе всего описывает ваш запрос?',
    options: [
      { id: 'self_understanding', label: 'Хочу разобраться в себе в целом', score: 1 },
      { id: 'specific_topic', label: 'Есть конкретная тема, которая мешает жить', score: 2 },
      { id: 'deep_root', label: 'Понимаю, что корень проблем глубже — нужна настоящая трансформация', score: 3 },
    ],
  },
  {
    id: 'decision_style',
    title: 'Как вы обычно принимаете решение попробовать что-то новое в сфере личного роста?',
    options: [
      { id: 'study_long', label: 'Долго изучаю, смотрю со стороны', score: 1 },
      { id: 'start_free', label: 'Начинаю с бесплатного, потом решаю', score: 2 },
      { id: 'act_fast', label: 'Если понимаю ценность — действую быстро', score: 3 },
    ],
  },
];

export const RESULTS = [
  {
    id: 'free-events',
    min: 10,
    max: 17,
    title: 'Ваш следующий шаг — бесплатные интенсивы',
    tag: 'Первый шаг',
    text: 'Познакомьтесь с методом без обязательств. На бесплатных онлайн-встречах вы увидите, как работает Вселенская терапия, услышите реальные примеры работы и почувствуете, резонирует ли это с вами.',
    buttonText: 'Посмотреть ближайшие мероприятия',
    url: 'https://leonidtalpis.com/free-events',
  },
  {
    id: 'mvs',
    min: 18,
    max: 24,
    title: 'Ваш следующий шаг — МВС',
    tag: 'Готов(а) к работе',
    text: 'У вас есть живой запрос и готовность двигаться. Мировоззренческий семинар — это первый настоящий опыт с методом в группе: живая работа с запросами, реальные сдвиги, погружение в практику.',
    buttonText: 'Узнать о ближайшем МВС',
    url: 'https://leonidtalpis.com/mvs-seminar',
  },
  {
    id: 'assembly-point',
    min: 25,
    max: 30,
    title: 'Ваш следующий шаг — Точка Сборки',
    tag: 'Готов(а) к трансформации',
    text: 'Вы готовы к глубокой работе. Точка Сборки — интенсивный двухдневный формат для тех, кто уже знает метод и хочет настоящей трансформации. Проработка предыдущего опыта, а не убеждений.',
    buttonText: 'Подробнее о Точке Сборки',
    url: 'https://leonidtalpis.com/the_assembly_point/payment',
  },
];

export function calculateScore(answers) {
  return QUESTIONS.reduce((sum, question) => {
    const selectedOptionId = answers[question.id];
    const selectedOption = question.options.find((option) => option.id === selectedOptionId);

    if (!selectedOption) {
      throw new Error(`Missing answer for question: ${question.id}`);
    }

    return sum + selectedOption.score;
  }, 0);
}

export function getResultForScore(score) {
  const result = RESULTS.find((item) => score >= item.min && score <= item.max);

  if (!result) {
    throw new Error(`Score is outside quiz result ranges: ${score}`);
  }

  return result;
}

export function buildLeadPayload({ contact, answers }) {
  const score = calculateScore(answers);
  const result = getResultForScore(score);

  return {
    name: contact.name.trim(),
    email: contact.email.trim(),
    phone: contact.phone.trim(),
    score,
    resultId: result.id,
    resultTitle: result.title,
    answers: QUESTIONS.map((question) => {
      const selectedOption = question.options.find((option) => option.id === answers[question.id]);

      return {
        questionId: question.id,
        question: question.title,
        answerId: selectedOption.id,
        answer: selectedOption.label,
        score: selectedOption.score,
      };
    }),
  };
}

