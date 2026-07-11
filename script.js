// 60 STEM Questions Database
const questions = [
    // Chemistry (1-10)
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "O2", "H2"],
        correct: 0
    },
    {
        question: "What is the atomic number of Carbon?",
        options: ["4", "6", "8", "12"],
        correct: 1
    },
    {
        question: "What is the process of water turning into vapor?",
        options: ["Condensation", "Evaporation", "Sublimation", "Freezing"],
        correct: 1
    },
    {
        question: "What is the pH of pure water?",
        options: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "What is the chemical symbol for Gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correct: 2
    },
    {
        question: "What are the three states of matter?",
        options: ["Solid, Liquid, Gas", "Solid, Liquid, Plasma", "Hard, Soft, Gas", "Solid, Water, Air"],
        correct: 0
    },
    {
        question: "What is the most abundant element in the Earth's crust?",
        options: ["Iron", "Silicon", "Oxygen", "Nitrogen"],
        correct: 2
    },
    {
        question: "What is the process of breaking down food for energy called?",
        options: ["Synthesis", "Photosynthesis", "Metabolism", "Digestion"],
        correct: 2
    },
    {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
        correct: 0
    },
    {
        question: "What is the process where molecules spread from high to low concentration?",
        options: ["Osmosis", "Diffusion", "Absorption", "Adsorption"],
        correct: 1
    },

    // Physics (11-20)
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "200,000 km/s"],
        correct: 0
    },
    {
        question: "What is the SI unit of force?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        correct: 1
    },
    {
        question: "What is the acceleration due to gravity on Earth?",
        options: ["8.8 m/s²", "9.8 m/s²", "10.8 m/s²", "7.8 m/s²"],
        correct: 1
    },
    {
        question: "What does Newton's first law of motion state?",
        options: ["F=ma", "Objects in motion stay in motion", "Action equals reaction", "Energy is conserved"],
        correct: 1
    },
    {
        question: "What is the SI unit of energy?",
        options: ["Watt", "Newton", "Joule", "Pascal"],
        correct: 2
    },
    {
        question: "What type of wave requires a medium to travel?",
        options: ["Light wave", "Radio wave", "Sound wave", "Electromagnetic wave"],
        correct: 2
    },
    {
        question: "What is the SI unit of power?",
        options: ["Joule", "Newton", "Watt", "Volt"],
        correct: 2
    },
    {
        question: "What is the speed of sound in air at room temperature?",
        options: ["343 m/s", "200 m/s", "500 m/s", "100 m/s"],
        correct: 0
    },
    {
        question: "What is the process where light bends when passing through different materials?",
        options: ["Reflection", "Refraction", "Diffraction", "Interference"],
        correct: 1
    },
    {
        question: "What is the formula for kinetic energy?",
        options: ["E=mc²", "E=mgh", "E=½mv²", "E=Pt"],
        correct: 2
    },

    // Biology (21-35)
    {
        question: "What is the process by which plants make their own food?",
        options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
        correct: 1
    },
    {
        question: "How many bones are in the adult human body?",
        options: ["186", "206", "226", "246"],
        correct: 1
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
        correct: 1
    },
    {
        question: "What is the basic unit of life?",
        options: ["Atom", "Molecule", "Cell", "Tissue"],
        correct: 2
    },
    {
        question: "What is the process of cell division that produces gametes?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Interphase"],
        correct: 1
    },
    {
        question: "What percentage of the human body is water?",
        options: ["50%", "60%", "75%", "85%"],
        correct: 1
    },
    {
        question: "What is the genetic material in most organisms?",
        options: ["RNA", "DNA", "Protein", "Lipid"],
        correct: 1
    },
    {
        question: "How many chambers does a human heart have?",
        options: ["2", "3", "4", "5"],
        correct: 2
    },
    {
        question: "What is the process by which organisms adapt to their environment over time?",
        options: ["Mutation", "Evolution", "Natural Selection", "Adaptation"],
        correct: 2
    },
    {
        question: "What is the smallest unit of a protein?",
        options: ["Nucleotide", "Monosaccharide", "Amino Acid", "Fatty Acid"],
        correct: 2
    },
    {
        question: "What is photosynthesis's primary product besides oxygen?",
        options: ["Water", "Glucose", "Carbon Dioxide", "Nitrogen"],
        correct: 1
    },
    {
        question: "What is the study of heredity called?",
        options: ["Ecology", "Genetics", "Evolution", "Taxonomy"],
        correct: 1
    },
    {
        question: "What is the layer of tissue that covers the human body?",
        options: ["Dermis", "Epidermis", "Hypodermis", "Subcutaneous"],
        correct: 1
    },
    {
        question: "What is the process by which organisms break down food for energy?",
        options: ["Photosynthesis", "Fermentation", "Cellular Respiration", "Digestion"],
        correct: 2
    },
    {
        question: "What is the pH range where most enzymes work best?",
        options: ["1-3", "4-6", "7-9", "10-12"],
        correct: 2
    },

    // Mathematics (36-45)
    {
        question: "What is the value of π (pi) approximately?",
        options: ["2.14", "3.14", "4.14", "5.14"],
        correct: 1
    },
    {
        question: "What is the area formula for a circle?",
        options: ["2πr", "πr²", "πr", "2πr²"],
        correct: 1
    },
    {
        question: "What is the Pythagorean theorem?",
        options: ["a+b=c", "a²+b²=c²", "a-b=c", "ab=c²"],
        correct: 1
    },
    {
        question: "What is the sum of angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correct: 1
    },
    {
        question: "What is the formula for the perimeter of a circle?",
        options: ["πr", "2πr", "πr²", "πd"],
        correct: 1
    },
    {
        question: "What is the volume formula for a sphere?",
        options: ["4πr²", "4/3πr³", "2πr³", "πr³"],
        correct: 1
    },
    {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "13"],
        correct: 2
    },
    {
        question: "What is 25% of 200?",
        options: ["25", "50", "75", "100"],
        correct: 1
    },
    {
        question: "What is the value of x in the equation: 2x + 5 = 15?",
        options: ["5", "10", "7.5", "15"],
        correct: 0
    },
    {
        question: "What is the slope-intercept form of a line?",
        options: ["y=x+b", "y=mx+b", "x=my+b", "y=m+x"],
        correct: 1
    },

    // Earth Science (46-55)
    {
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Neptune", "Jupiter", "Uranus"],
        correct: 2
    },
    {
        question: "How many planets are in our solar system?",
        options: ["8", "9", "10", "11"],
        correct: 0
    },
    {
        question: "What is the closest planet to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        correct: 1
    },
    {
        question: "What is the layer of Earth's atmosphere closest to the surface?",
        options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
        correct: 1
    },
    {
        question: "What causes the seasons on Earth?",
        options: ["Distance from the Sun", "Tilt of Earth's axis", "Speed of Earth's orbit", "Solar flares"],
        correct: 1
    },
    {
        question: "What is the process of water cycling in the environment?",
        options: ["Nitrogen cycle", "Carbon cycle", "Water cycle", "Rock cycle"],
        correct: 2
    },
    {
        question: "What type of rock is formed from molten magma?",
        options: ["Sedimentary", "Igneous", "Metamorphic", "Fossil"],
        correct: 1
    },
    {
        question: "What scale measures the hardness of minerals?",
        options: ["Richter Scale", "Mohs Scale", "pH Scale", "Beaufort Scale"],
        correct: 1
    },
    {
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        correct: 2
    },
    {
        question: "What is the phenomenon where Earth's surface temperature rises?",
        options: ["Ozone depletion", "Global warming", "Acid rain", "Eutrophication"],
        correct: 1
    },

    // Technology & Engineering (56-60)
    {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Central Program Utility", "Computer Personal Unit", "Core Processor Utility"],
        correct: 0
    },
    {
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correct: 1
    },
    {
        question: "What is the chemical symbol for the element with atomic number 92?",
        options: ["U (Uranium)", "Pu (Plutonium)", "Th (Thorium)", "Am (Americium)"],
        correct: 0
    },
    {
        question: "What is the process of converting heat energy into electrical energy?",
        options: ["Conduction", "Thermoelectric effect", "Induction", "Photoelectric effect"],
        correct: 1
    },
    {
        question: "What is Ohm's Law?",
        options: ["V=IR", "I=VR", "R=V/I²", "V=I/R"],
        correct: 0
    }
];

let answeredQuestions = new Set();
let currentQuestion = null;
let selectedAnswer = null;

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', function() {
    generateQuestionButtons();
});

// Generate question buttons dynamically
function generateQuestionButtons() {
    const grid = document.getElementById('questionsGrid');
    grid.innerHTML = '';
    
    questions.forEach((q, index) => {
        const button = document.createElement('button');
        button.className = 'question-btn';
        if (answeredQuestions.has(index)) {
            button.classList.add('answered');
        }
        button.innerHTML = `
            <span class="question-number">Q${index + 1}</span>
            <span class="question-text">${q.question}</span>
        `;
        button.onclick = () => openQuestion(index);
        grid.appendChild(button);
    });
    
    updateScore();
}

// Update score display
function updateScore() {
    document.getElementById('scoreCount').textContent = answeredQuestions.size;
}

// Open question modal
function openQuestion(index) {
    currentQuestion = index;
    selectedAnswer = null;
    
    const question = questions[index];
    const modal = document.getElementById('questionModal');
    const modalQuestion = document.getElementById('modalQuestion');
    const optionsContainer = document.getElementById('optionsContainer');
    const resultMessage = document.getElementById('resultMessage');
    
    // Clear previous result message
    resultMessage.textContent = '';
    resultMessage.className = 'result-message';
    
    // Set question text
    modalQuestion.textContent = `Q${index + 1}: ${question.question}`;
    
    // Build options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, optionIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <input 
                type="radio" 
                id="option${optionIndex}" 
                name="answer" 
                value="${optionIndex}"
                onchange="selectedAnswer = ${optionIndex}"
            >
            <label for="option${optionIndex}">${option}</label>
        `;
        optionsContainer.appendChild(optionDiv);
    });
    
    // Show modal
    modal.style.display = 'block';
}

// Close question modal
function closeQuestion() {
    const modal = document.getElementById('questionModal');
    modal.style.display = 'none';
}

// Submit answer
function submitAnswer() {
    if (selectedAnswer === null) {
        alert('Please select an answer');
        return;
    }
    
    const question = questions[currentQuestion];
    const resultMessage = document.getElementById('resultMessage');
    const submitBtn = document.querySelector('.submit-btn');
    
    if (selectedAnswer === question.correct) {
        resultMessage.textContent = '✓ Correct! Well done!';
        resultMessage.className = 'result-message correct';
        
        // Mark as answered
        answeredQuestions.add(currentQuestion);
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';
        submitBtn.style.cursor = 'not-allowed';
        
        // Update grid and score
        setTimeout(() => {
            generateQuestionButtons();
        }, 1500);
    } else {
        const correctOption = question.options[question.correct];
        resultMessage.textContent = `✗ Incorrect. The correct answer is: ${correctOption}`;
        resultMessage.className = 'result-message incorrect';
    }
}

// Reset all answers
function resetQuiz() {
    if (confirm('Are you sure you want to reset all answers? This cannot be undone.')) {
        answeredQuestions.clear();
        closeQuestion();
        generateQuestionButtons();
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('questionModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}