// Note that this is for simplicity. You should use an actual API for each question for security purposes.
import { writable } from "svelte/store";


let demo_quiz = {
    "title":"Vocabulary Test",
    "questions":[
        {
            "question-text": "what is the meaning of Vigilant?",
            "quesion-image": null,
            "options": [
                "Brave",
                "Watchful",
                "Hesitant",
                "Confused"
            ],
            "correct-option": "Watchful",
            "description": "The correct answer, 'Watchful,' accurately describes the meaning of the term 'Vigilant.' Being vigilant means being alert, attentive, and observant",
            "time": 30
        },
        {
            "question-text": "what is the meaning of Ecstatic?",
            "quesion-image": null,
            "options": [
                "Happy",
                "Sad",
                "Angry",
                "Bored"
            ],
            "correct-option": "Happy",
            "description": "'Ecstatic' is an adjective used to describe an intense and overwhelming feeling of joy, happiness, or delight.",
            "time":30
        },
        {
            "question-text": "what is the meaning of Concatenate?",
            "quesion-image": null,
            "options": [
                "To combine or link together",
                "To separate or divide into parts",
                "To analyze or examine closely",
                "To prioritize or organize"
            ],
            "correct-option": "To combine or link together",
            "description": 'Concatenate" is a verb that refers to the act of combining or linking together separate items or elements to form a single entity. ',
            "time":30
        },
        {
            "question-text": "what is the meaning of Amalgamate?",
            "quesion-image": null,
            "options": [
                "To combine or merge different elements or entities",
                "To separate or disassemble into smaller parts",
                "To evaluate or assess critically",
                "To resolve or settle a dispute"
            ],
            "correct-option": "To combine or merge different elements or entities",
            "description": '"Amalgamate" is a verb that signifies the act of combining or merging different elements, entities, or components to form a unified whole. ',
            "time":30
        },
        {
            "question-text": "What is the meaning of vivacios?",
            "quesion-image": null,
            "options": [
                "Lively and high-spirited",
                "Dull and lethargic",
                "Fearful and hesitant",
                "Strict and disciplined"
            ],
            "correct-option": "Lively and high-spirited",
            "description": '"Vivacious" is an adjective used to describe someone who is lively, energetic, and full of enthusiasm.',
            "time":30
        }
    ]
}


export let questionStore = writable([]);
export let titleStore = writable("");

//Import json quiz-data json file and set into writable store
async function quizFetch() {
    questionStore.set(demo_quiz["questions"]);
    titleStore.set(demo_quiz["title"]);
};

quizFetch();
