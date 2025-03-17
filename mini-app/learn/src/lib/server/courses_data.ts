export interface LessonContent {
  dir: string;
  time: string;
}

export interface Lessons {
  [lessonTitle: string]: {
    [topic: string]: LessonContent;
  };
}

export interface ICourses {
  title: string;
  time: string;
  value: string;
  about: string;
  cover_image: string;
  lessons: Lessons
}

const courses: ICourses[] = [
  {
    "title": "Artificial Intelligence (AI)",
    "time": "1 hr",
    "value": "ai_learn",
    "about": "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines. This course explores AI fundamentals and how it’s shaping the future of technology.",
    "cover_image": "https://i.ibb.co/Y4YHCH6S/ai.jpg",
    "lessons": {
      "Understanding AI": {
        "What is AI?": {
          "dir": "/courses/content/ai_learn/understandingAI/whatIsAI.md",
          "time": "5min"
        },
        "AI in Daily Life": {
          "dir": "/courses/content/ai_learn/understandingAI/AIinDailyLife.md",
          "time": "5min"
        }
      },
      "AI in Everyday Tools": {
        "AI in Phone Apps": {
          "dir": "/courses/content/ai_learn/AIinEverydayTools/AIinPhoneApps.md",
          "time": "7min"
        },
        "AI in Virtual Assistants": {
          "dir": "/courses/content/ai_learn/AIinEverydayTools/AIinVirtualAssistants.md",
          "time": "7min"
        }
      },
      "AI in Healthcare": {
        "AI in Disease Diagnosis": {
          "dir": "/courses/content/ai_learn/AIinHealthcare/AIinDiseaseDiagnosis.md",
          "time": "6min"
        },
        "AI in Doctor Decisions": {
          "dir": "/courses/content/ai_learn/AIinHealthcare/AIinDoctorDecisions.md",
          "time": "6min"
        }
      },
      "The Challenges of AI": {
        "AI Bias": {
          "dir": "/courses/content/ai_learn/challengesOfAI/AIBias.md",
          "time": "4min"
        },
        "Privacy Concerns in AI": {
          "dir": "/courses/content/ai_learn/challengesOfAI/privacyConcernsAI.md",
          "time": "4min"
        }
      }
    }
  },
  {
    "title": "Web3",
    "time": "1 hr",
    "value": "web3_learn",
    "about": "Web3 is the next generation of the internet that aims to decentralize control and enable peer-to-peer interactions. This course introduces Web3 concepts and its applications.",
    "cover_image": "https://i.ibb.co/Y4YHCH6S/web3.jpg",
    "lessons": {
      "Introduction to Web3": {
        "What is Web3?": {
          "dir": "/courses/content/web3_learn/introductionToWeb3/whatIsWeb3.md",
          "time": "5min"
        },
        "Web3 vs Web2": {
          "dir": "/courses/content/web3_learn/introductionToWeb3/Web3vsWeb2.md",
          "time": "5min"
        }
      },
      "Blockchain and Cryptocurrencies": {
        "Understanding Blockchain": {
          "dir": "/courses/content/web3_learn/blockchainAndCryptos/understandingBlockchain.md",
          "time": "7min"
        },
        "What is Cryptocurrency?": {
          "dir": "/courses/content/web3_learn/blockchainAndCryptos/whatIsCryptocurrency.md",
          "time": "7min"
        }
      },
      "Decentralized Applications (DApps)": {
        "What are DApps?": {
          "dir": "/courses/content/web3_learn/DAppsExplained/whatAreDApps.md",
          "time": "6min"
        },
        "DApps Changing the Internet": {
          "dir": "/courses/content/web3_learn/DAppsExplained/DAppsChangingInternet.md",
          "time": "6min"
        }
      },
      "The Future of Web3": {
        "Web3 Privacy and Security": {
          "dir": "/courses/content/web3_learn/futureOfWeb3/Web3PrivacySecurity.md",
          "time": "4min"
        },
        "Challenges of Web3": {
          "dir": "/courses/content/web3_learn/futureOfWeb3/challengesOfWeb3.md",
          "time": "4min"
        }
      }
    }
  },
  {
    "title": "The Future of Work",
    "time": "1 hr",
    "value": "future_work_learn",
    "about": "This course explores the changing landscape of work, focusing on automation, the gig economy, and the skills needed for future success.",
    "cover_image": "https://i.ibb.co/Y4YHCH6S/futureofwork.jpg",
    "lessons": {
      "The Changing Workplace": {
        "Technology Reshaping Jobs": {
          "dir": "/courses/content/future_work_learn/changingWorkplace/technologyReshapingJobs.md",
          "time": "5min"
        },
        "The Rise of Remote Work": {
          "dir": "/courses/content/future_work_learn/changingWorkplace/riseOfRemoteWork.md",
          "time": "5min"
        }
      },
      "Automation and AI at Work": {
        "Jobs AI Takes Over": {
          "dir": "/courses/content/future_work_learn/automationAndAIatWork/jobsAItakesOver.md",
          "time": "7min"
        },
        "How Automation is Improving Work Efficiency": {
          "dir": "/courses/content/future_work_learn/automationAndAIatWork/automationImprovingEfficiency.md",
          "time": "7min"
        }
      },
      "The Gig Economy": {
        "What is the Gig Economy?": {
          "dir": "/courses/content/future_work_learn/gigEconomy/whatIsGigEconomy.md",
          "time": "6min"
        },
        "The Benefits and Challenges of Gig Work": {
          "dir": "/courses/content/future_work_learn/gigEconomy/benefitsAndChallengesGigWork.md",
          "time": "6min"
        }
      },
      "Skills for the Future": {
        "Important Skills for the Future": {
          "dir": "/courses/content/future_work_learn/skillsForTheFuture/importantFutureSkills.md",
          "time": "4min"
        },
        "How to Stay Relevant in a Changing Job Market": {
          "dir": "/courses/content/future_work_learn/skillsForTheFuture/stayingRelevantJobMarket.md",
          "time": "4min"
        }
      }
    }
  }
];

export default courses;
