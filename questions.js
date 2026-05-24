const questionBank = {

  general: [
    {
      question: "What is the capital city of Australia?",
      type: "single",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correct: [2]
    },
    {
      question: "Which of these are primary colors in traditional painting?",
      type: "multi",
      options: ["Red", "Green", "Blue", "Yellow"],
      correct: [0, 2, 3]
    },
    {
      question: "How many sides does a hexagon have?",
      type: "single",
      options: ["5", "6", "7", "8"],
      correct: [1]
    },
    {
      question: "Which of these animals are mammals?",
      type: "multi",
      options: ["Shark", "Dolphin", "Whale", "Salmon"],
      correct: [1, 2]
    },
    {
      question: "The Great Wall of China was primarily built during which dynasty?",
      type: "single",
      options: ["Han", "Tang", "Ming", "Qing"],
      correct: [2]
    },
    {
      question: "Which planet is known as the Red Planet?",
      type: "single",
      options: ["Venus", "Jupiter", "Mars", "Saturn"],
      correct: [2]
    },
    {
      question: "Which of these countries are in South America?",
      type: "multi",
      options: ["Argentina", "Mexico", "Brazil", "Colombia"],
      correct: [0, 2, 3]
    },
    {
      question: "What is the largest ocean on Earth?",
      type: "single",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: [3]
    },
    {
      question: "Which of these are Shakespeare plays?",
      type: "multi",
      options: ["Hamlet", "Don Quixote", "Othello", "Macbeth"],
      correct: [0, 2, 3]
    },
    {
      question: "How many days are in a leap year?",
      type: "single",
      options: ["364", "365", "366", "367"],
      correct: [2]
    }
  ],

  science: [
    {
      question: "What gas do plants absorb during photosynthesis?",
      type: "single",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
      correct: [2]
    },
    {
      question: "Which of these are noble gases?",
      type: "multi",
      options: ["Helium", "Oxygen", "Neon", "Argon"],
      correct: [0, 2, 3]
    },
    {
      question: "What is the chemical symbol for gold?",
      type: "single",
      options: ["Go", "Gd", "Au", "Ag"],
      correct: [2]
    },
    {
      question: "DNA stands for?",
      type: "single",
      options: ["Deoxyribonucleic Acid", "Dinitrogen Acid", "Dynamic Nucleic Agent", "None of these"],
      correct: [0]
    },
    {
      question: "Which of these are parts of a cell?",
      type: "multi",
      options: ["Nucleus", "Mitochondria", "Synapse", "Ribosome"],
      correct: [0, 1, 3]
    },
    {
      question: "What is the speed of light (approx) in km/s?",
      type: "single",
      options: ["150,000", "300,000", "450,000", "600,000"],
      correct: [1]
    },
    {
      question: "Which planet has the most known moons?",
      type: "single",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      correct: [1]
    },
    {
      question: "Which of these are types of electromagnetic radiation?",
      type: "multi",
      options: ["X-rays", "Sound waves", "Gamma rays", "UV rays"],
      correct: [0, 2, 3]
    },
    {
      question: "Water boils at what temperature at sea level?",
      type: "single",
      options: ["90°C", "95°C", "100°C", "105°C"],
      correct: [2]
    },
    {
      question: "Which of these are layers of the Earth?",
      type: "multi",
      options: ["Crust", "Mantle", "Core", "Troposphere"],
      correct: [0, 1, 2]
    }
  ],

  history: [
    {
      question: "In what year did World War II end?",
      type: "single",
      options: ["1943", "1944", "1945", "1946"],
      correct: [2]
    },
    {
      question: "Which of these were ancient civilizations?",
      type: "multi",
      options: ["Mesopotamia", "Roman Empire", "Ottoman Empire", "Indus Valley"],
      correct: [0, 1, 3]
    },
    {
      question: "Who was the first person to walk on the Moon?",
      type: "single",
      options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
      correct: [2]
    },
    {
      question: "The French Revolution began in which year?",
      type: "single",
      options: ["1769", "1779", "1789", "1799"],
      correct: [2]
    },
    {
      question: "Which of these leaders were part of the Allied powers in WWII?",
      type: "multi",
      options: ["Winston Churchill", "Adolf Hitler", "Franklin D. Roosevelt", "Joseph Stalin"],
      correct: [0, 2, 3]
    },
    {
      question: "The Berlin Wall fell in which year?",
      type: "single",
      options: ["1987", "1988", "1989", "1990"],
      correct: [2]
    },
    {
      question: "Which empire was ruled by Genghis Khan?",
      type: "single",
      options: ["Ottoman", "Mongol", "Roman", "Mughal"],
      correct: [1]
    },
    {
      question: "Which of these were signed during the American Revolutionary period?",
      type: "multi",
      options: ["Declaration of Independence", "Magna Carta", "Articles of Confederation", "US Constitution"],
      correct: [0, 2, 3]
    },
    {
      question: "Who invented the printing press around 1440?",
      type: "single",
      options: ["Leonardo da Vinci", "Galileo Galilei", "Johannes Gutenberg", "Isaac Newton"],
      correct: [2]
    },
    {
      question: "Which continents were involved in the Columbian Exchange?",
      type: "multi",
      options: ["Europe", "Americas", "Africa", "Antarctica"],
      correct: [0, 1, 2]
    }
  ],

  tech: [
    {
      question: "What does CPU stand for?",
      type: "single",
      options: ["Central Processing Unit", "Computer Power Unit", "Core Processing Utility", "Central Power Utility"],
      correct: [0]
    },
    {
      question: "Which of these are programming languages?",
      type: "multi",
      options: ["Python", "HTML", "Kotlin", "Rust"],
      correct: [0, 2, 3]
    },
    {
      question: "What does HTTP stand for?",
      type: "single",
      options: ["HyperText Transfer Protocol", "High Transfer Text Process", "Hyperlink Text Tool Protocol", "None of these"],
      correct: [0]
    },
    {
      question: "Which company developed the Android operating system?",
      type: "single",
      options: ["Apple", "Microsoft", "Google", "Samsung"],
      correct: [2]
    },
    {
      question: "Which of these are database systems?",
      type: "multi",
      options: ["MySQL", "Linux", "PostgreSQL", "MongoDB"],
      correct: [0, 2, 3]
    },
    {
      question: "What does RAM stand for?",
      type: "single",
      options: ["Rapid Access Memory", "Random Access Memory", "Read Accessible Module", "Runtime Application Memory"],
      correct: [1]
    },
    {
      question: "Which of these are JavaScript frameworks or libraries?",
      type: "multi",
      options: ["React", "Django", "Vue", "Angular"],
      correct: [0, 2, 3]
    },
    {
      question: "What is the binary representation of the decimal number 5?",
      type: "single",
      options: ["010", "100", "101", "110"],
      correct: [2]
    },
    {
      question: "Who co-founded Apple Inc.?",
      type: "single",
      options: ["Bill Gates", "Elon Musk", "Steve Jobs", "Jeff Bezos"],
      correct: [2]
    },
    {
      question: "Which of these are version control systems?",
      type: "multi",
      options: ["Git", "Docker", "Mercurial", "SVN"],
      correct: [0, 2, 3]
    }
  ]

};
