const QUESTIONS = [
    {
        question: 'Сколько хромосом у здорового человека?',
        answer: '46',
        type: 'prompt',
    },
    {
        question: 'Путин - хуйло?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Сколько хромосом у Путина?',
        answer: '47',
        type: 'prompt',
    },
    {
        question: 'Сколько тупых овец в московии (в млн)?',
        answer: '144',
        type: 'prompt',
    },
    {
        question: 'Снесли ли памятник Екатерине-2 в Одессе?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Сколько черных пакетов выделяются на одного орка?',
        answer: '1',
        type: 'prompt',
    },
    {
        question: 'На сколько вы оцениваете работу ЗСУ от 1 до 10?',
        answer: '10',
        type: 'prompt',
    },
    {
        question: 'Со скольких позиций готовилось нападение на Беларусь?',
        answer: '4',
        type: 'prompt',
    },
    {
        question: 'Нужно ли сжигать сосийский флаг?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Поддерживаете ли вы уход иностранных компаний из московии?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Считаете ли вы сосию своим домом?',
        answer: false,
        type: 'confirm',
    }
];
let sum = 0

alert(`Вы набрали ${quiz()} баллов!`)
function quiz() {
    for (const question_of_quiz of QUESTIONS) {
        switch (question_of_quiz.type) {
            case 'confirm':
                my_confirm(question_of_quiz)
                break
            case 'prompt':
                my_prompt(question_of_quiz)
                break
        }
    }
    return sum
}

function my_confirm(question) {
    if(confirm(question.question) === question.answer){
        return sum += 10
    }
}

function my_prompt(question) {
    if(prompt(question.question) === question.answer){
        return sum += 10
    }
}