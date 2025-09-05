// data/projects.js
export const projectsData = [
  {
  id: "omi-ai-agent",
  title: "Self-Learning Omi Card Game Agent",
  subtitle: "AI agent mastering the Sri Lankan card game Omi through self-play and deep reinforcement learning.",
  technologies: ["Python", "PyTorch", "NumPy"],
  overview: "This project demonstrates the development of an AI agent capable of mastering the Sri Lankan card game Omi through deep reinforcement learning and self-play. The agent starts with zero prior knowledge and improves its strategy by competing against itself, showcasing how AI can learn complex games with incomplete information without human intervention.",
  features: [
    "Self-learning via self-play with no human gameplay data or pre-programmed strategies.",
    "Custom neural network design with a CardGameState encoder and PolicyNetwork.",
    "Implemented REINFORCE algorithm with baseline for policy optimization.",
    "Experience replay buffer for storing and learning from past gameplay.",
    "Training performance: ~85% win rate against a random-choice bot after 200,000 episodes (~12 hours on NVIDIA Tesla P100 GPU).",
    "Optimization techniques including gradient clipping and batch normalization for stable, efficient learning."
  ],
  githubLink: "https://github.com/jv-ransika/RL-OomiCardGame",
  liveDemoLink: null
},
{
  id: "google-map-scraper",
  title: "Google Map Scraper",
  subtitle: "Automated web scraper to extract place details from Google Maps search queries.",
  technologies: ["Python", "Selenium", "CSV"],
  overview: "A Python-based web scraper that automates Google Maps searches to collect place details such as name, address, and contact information. The scraper uses Selenium WebDriver for automation and outputs results into a structured CSV file for easy use in further analysis or integration.",
  features: [
    "Automates Google Maps searches using Selenium WebDriver.",
    "Extracts detailed place information including name, address, and contact details.",
    "Input-driven scraping via input.csv and outputs data into output.csv.",
    "Fully customizable for additional fields or integration with external tools.",
    "Simple setup with pip-installable dependencies."
  ],
  githubLink: "https://github.com/jv-ransika/Google-Map-Scraper", 
  liveDemoLink: null
},
  
];