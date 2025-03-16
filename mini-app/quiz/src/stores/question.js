import { writable } from "svelte/store";

let quesions = {
  "AI Knowledge Test": {
  "title": "AI Knowledge Test",
  "questions": [
    {
      "question-text": "What is Artificial Intelligence (AI)?",
      "question-image": null,
      "options": [
        "A type of natural human intelligence",
        "A branch of computer science that creates intelligent systems",
        "A new programming language",
        "A hardware component in computers"
      ],
      "correct-option": "A branch of computer science that creates intelligent systems",
      "description": "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines, allowing them to perform tasks such as learning and problem-solving.",
      "time": 30
    },
    {
      "question-text": "Which of the following is an example of AI in daily life?",
      "question-image": null,
      "options": [
        "Using a light switch",
        "Talking to a virtual assistant like Siri or Alexa",
        "Writing with a pen",
        "Reading a book"
      ],
      "correct-option": "Talking to a virtual assistant like Siri or Alexa",
      "description": "Virtual assistants like Siri and Alexa use AI to process voice commands, answer questions, and perform tasks.",
      "time": 30
    },
    {
      "question-text": "Which type of AI is capable of performing only specific tasks?",
      "question-image": null,
      "options": [
        "General AI",
        "Strong AI",
        "Narrow AI",
        "Human-level AI"
      ],
      "correct-option": "Narrow AI",
      "description": "Narrow AI (or Weak AI) is designed to perform a specific task, such as language translation or facial recognition.",
      "time": 30
    },
    {
      "question-text": "What is Machine Learning in AI?",
      "question-image": null,
      "options": [
        "A technique where machines learn from data",
        "A process where AI programs are coded manually",
        "A type of hardware used in AI",
        "A new programming language"
      ],
      "correct-option": "A technique where machines learn from data",
      "description": "Machine learning allows AI systems to learn patterns from data and improve performance without explicit programming.",
      "time": 30
    },
    {
      "question-text": "Which AI technique is used for recognizing faces in images?",
      "question-image": null,
      "options": [
        "Neural Networks",
        "Blockchain",
        "SQL Databases",
        "Cloud Computing"
      ],
      "correct-option": "Neural Networks",
      "description": "Neural networks, a type of machine learning model, are commonly used for image recognition, including facial recognition.",
      "time": 30
    }
  ]
},

  "Web3 Knowledge Test": {
    "title": "Web3 Knowledge Test",
    "questions": [
      {
        "question-text": "What is Web3?",
        "question-image": null,
        "options": [
          "The latest version of the internet that is decentralized",
          "A social media platform",
          "A web design tool",
          "A programming language"
        ],
        "correct-option": "The latest version of the internet that is decentralized",
        "description": "Web3 refers to the new evolution of the internet built on blockchain technology, emphasizing decentralization and user control.",
        "time": 30
      },
      {
        "question-text": "What technology powers Web3?",
        "question-image": null,
        "options": [
          "Cloud Computing",
          "Blockchain",
          "Centralized Servers",
          "Artificial Intelligence"
        ],
        "correct-option": "Blockchain",
        "description": "Web3 relies on blockchain technology for decentralized and secure data transactions.",
        "time": 30
      },
      {
        "question-text": "Which of the following is a key feature of Web3?",
        "question-image": null,
        "options": [
          "Data is owned and controlled by big corporations",
          "Users own their own data and digital assets",
          "Websites track user activity without consent",
          "Web3 relies on centralized databases"
        ],
        "correct-option": "Users own their own data and digital assets",
        "description": "In Web3, users have control over their data and digital assets, unlike traditional Web2 platforms.",
        "time": 30
      },
      {
        "question-text": "What are smart contracts?",
        "question-image": null,
        "options": [
          "Digital agreements that execute automatically when conditions are met",
          "Traditional paper contracts signed online",
          "AI-generated legal documents",
          "Email-based contracts"
        ],
        "correct-option": "Digital agreements that execute automatically when conditions are met",
        "description": "Smart contracts are self-executing agreements written in code, operating on blockchain networks.",
        "time": 30
      },
      {
        "question-text": "What is a Decentralized Application (DApp)?",
        "question-image": null,
        "options": [
          "A traditional app that runs on a centralized server",
          "An application built on blockchain that runs without central control",
          "A type of social media app",
          "A programming framework for mobile apps"
        ],
        "correct-option": "An application built on blockchain that runs without central control",
        "description": "DApps operate on blockchain networks and provide services without relying on central authorities.",
        "time": 30
      }
    ]
  },

  "Future of Work Knowledge Test": {
    "title": "Future of Work Knowledge Test",
    "questions": [
      {
        "question-text": "How is automation changing the workplace?",
        "question-image": null,
        "options": [
          "By replacing all jobs with robots",
          "By improving efficiency and reducing repetitive tasks",
          "By making work harder",
          "By decreasing productivity"
        ],
        "correct-option": "By improving efficiency and reducing repetitive tasks",
        "description": "Automation helps workers by handling repetitive tasks, increasing efficiency, and allowing employees to focus on more complex tasks.",
        "time": 30
      },
      {
        "question-text": "What is the gig economy?",
        "question-image": null,
        "options": [
          "A system where people work short-term or freelance jobs",
          "A traditional office-based job structure",
          "An economic crisis",
          "A new type of government regulation"
        ],
        "correct-option": "A system where people work short-term or freelance jobs",
        "description": "The gig economy consists of short-term, freelance, or contract-based work instead of traditional long-term employment.",
        "time": 30
      },
      {
        "question-text": "Which skill is becoming more important for the future workforce?",
        "question-image": null,
        "options": [
          "Basic handwriting",
          "Manual labor skills",
          "Digital literacy and adaptability",
          "Memorizing phone numbers"
        ],
        "correct-option": "Digital literacy and adaptability",
        "description": "As technology evolves, digital literacy and adaptability are key skills for success in the modern workforce.",
        "time": 30
      },
      {
        "question-text": "How is remote work affecting employees?",
        "question-image": null,
        "options": [
          "It provides flexibility but also requires self-discipline",
          "It completely replaces office jobs",
          "It reduces work efficiency",
          "It forces people to work in isolation"
        ],
        "correct-option": "It provides flexibility but also requires self-discipline",
        "description": "Remote work allows flexibility but also requires workers to manage their own schedules and stay productive.",
        "time": 30
      },
      {
        "question-text": "What industries are most impacted by AI and automation?",
        "question-image": null,
        "options": [
          "Manufacturing and customer service",
          "Cooking and baking",
          "Traditional art",
          "Handwriting industry"
        ],
        "correct-option": "Manufacturing and customer service",
        "description": "AI and automation are transforming industries like manufacturing and customer service by automating repetitive tasks.",
        "time": 30
      }
    ]
  }
}

export let questionStore = writable([]);
export let titleStore = writable("");

async function quizFetch() {
    questionStore.set(quesions["AI Knowledge Test"]["questions"]);
    titleStore.set(quesions["AI Knowledge Test"]["title"]);
};

quizFetch();
