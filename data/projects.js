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

  {
    id: "story-engine",
    title: "Multi‑Agent Storyworld Simulator ( Ongoing )",
    subtitle: "Stateful, multi‑agent narrative simulation with resumable episodic workflows and per‑character memory.",
    technologies: ["Python", "Pydantic", "LangGraph", "SQLite", "Google Generative API (LLM integrations)", "LangChain-style messaging", "Git"],
    overview: "A Python-based narrative simulation platform that orchestrates autonomous character agents, an environment workflow, and a story initializer to produce goal-directed, episodic narratives. Uses state-graph workflows and Pydantic models for robust state management, and SQLite checkpointing for pause/resume and reproducibility. LLM backends are pluggable so agents can be driven by Google Generative models or other providers.",
    features: [
      "Multi-agent orchestration: separate agents for story initialization, environment orchestration, and character behavior.",
      "Stateful workflow design using LangGraph; scenes, moments, and goal checks are represented in a compiled workflow.",
      "Per-character memory units (short/long-term) modelled with Pydantic to influence agent decisions and create emergent behavior.",
      "Checkpointing and resumability via SQLite (SqliteSaver) with thread‑scoped namespaces (thread_id environment variable).",
      "Pluggable LLM backends (Google Generative API or other providers) to drive agent responses.",
      "CLI driver (main.py) to start a fresh story or resume from checkpoints; easy to extend for experiments and tests.",
      "Designed for reproducibility and testability — supports mocking LLMs for CI and offline tests.",
      "Extensible data models and workflows for adding new agent types, scene validators, or external integrations."
    ],
    githubLink: "https://github.com/jv-ransika/story_engine",
    liveDemoLink: null
  }

];