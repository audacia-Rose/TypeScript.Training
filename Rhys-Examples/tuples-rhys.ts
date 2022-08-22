import { question } from "readline-sync";

class QuestionAndAnswer {
    question: string;
    answer: string;

    constructor(question: string, answer: string) {
        this.question =   question;
        this.answer = answer;
    }
}

function askQuestions(questions: string[]): QuestionAndAnswer[] {
    let questionAndAnswers: QuestionAndAnswer[] = [];

    for (let index = 0; index < questions.length; index++) {
        const questionToAsk = questions[index];
        
        const answer = question(questionToAsk);
        const questionAndAnswer = new QuestionAndAnswer(questionToAsk, answer);

        questionAndAnswers.push(questionAndAnswer);
    }

    return questionAndAnswers;
}

const questions: string[] = [
    "What is your first name? ", 
    "What is your last name? ", 
    "Do you have any middle names? "
];

const questionAndAnswers = askQuestions(questions);

console.log(questionAndAnswers);
