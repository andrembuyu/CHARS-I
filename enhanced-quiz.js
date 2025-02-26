// Color scheme configuration
const sectionColors = {
    health: {
        primary: '#8ac5ff',
        secondary: '#6aa9ff',
        background: '#e0f2ff'
    },
    economic: {
        primary: '#568255',
        secondary: '#466a45',
        background: '#d9e8d9'
    },
    social: {
        primary: '#ffa564',
        secondary: '#ff8a3d',
        background: '#ffe8d6'
    },
    psychological: {
        primary: '#d6afe8',
        secondary: '#c08bd6',
        background: '#f3e8f9'
    }
};

// Define the base directory for PDF files
const pdfBaseDirectory = './reports/';

// Question management system
const questionManager = {
    questions: {
        health: [
            {
                text: "How would you say your health in general is?",
                weight: 0.8,
                options: ["Excellent", "Good", "Fair", "Poor", "Very Poor"]
            },
            {
                text: "Have you noticed any changes in your weight?",
                weight: 0.4,
                options: ["No change", "Slight change", "Moderate change", "Significant change", "Drastic change"]
            },
            {
                text: "How often do you engage in physical activities for at least 10 minutes that cause either heavy sweating and large increases in breathing or heart rate?",
                weight: 0.8,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "How often have you noticed a decrease in your ability to smell food or taste food?",
                weight: 0.11,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "In the past month, how many times have you had a persistent cough or burning sensation or throat irritation?",
                weight: 0.13,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "How many times have you visited a doctor for a normal illness (like fever or cough) that became aggravated due to your smoking habits?",
                weight: 0.15,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "How many cigarettes do you smoke per day on average?",
                weight: 0.25,
                options: ["1 to 5", "6 to 10", "11 to 15", "16 to 20", "21 or more"]
            },
            {
                text: "How would you rate your sleep quality at night and the impact which smoking has on it?",
                weight: 0.1,
                options: ["Excellent", "Good", "Fair", "Poor", "Very Poor"]
            },
            {
                text: "In the last few months, how often have you noticed any changes in your dental health, such as increased sensitivity, discoloration, or gum issues?",
                weight: 0.6,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            }
        ],
        economic: [
            {
                text: "How often does point-of-sale advertising influence a smoker to include cigarettes in their purchase when visiting stores, vendors, kiosks, etc., in the past 30 days?",
                weight: 0.06,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost always"]
            },
            {
                text: "Have you noticed health warnings on cigarette packs but ignored them?",
                weight: 0.04,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "Have you ever considered quitting smoking purely for financial reasons?",
                weight: 0.11,
                options: ["Seriously considering it", "Often", "Sometimes", "Hardly ever", "Not at all"]
            },
            {
                text: "Over the past month, have you had to adjust your spending in other areas (e.g., entertainment, dining out, hobbies etc.) to accommodate your smoking expenses?",
                weight: 0.16,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "When you think about your daily or weekly expenses, how often do you notice that smoking takes up a significant portion of your budget?",
                weight: 0.15,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "Have you ever delayed paying bills or making important purchases to ensure you have enough money for cigarettes?",
                weight: 0.12,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "To what extent has smoking influenced your ability to not save money for long-term goals (e.g., vacation, car, home, education, wedding, medical expenses, or emergencies)?",
                weight: 0.14,
                options: ["Not impacted at all (Never)", "Minimally impacted (Rarely)", "Somewhat impacted (Occasionally)", "Significantly impacted (Frequently)", "Severely impacted (Almost always)"]
            },
            {
                text: "Has your smoking habit ever caused tension in your household or affected shared financial responsibilities (e.g., splitting bills with family, roommates, or friends) due to the financial strain it creates?",
                weight: 0.13,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "How often do you borrow money from family or friends, or use credit to support your smoking habit?",
                weight: 0.09,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            }
        ],
        social: [
            {
                text: "How often are you surrounded by smokers in your daily life (e.g., at home, work, social gatherings, or public places)?",
                weight: 0.09,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "To what extent do you agree that the number of cigarettes you smoke each day depend on factors like your mood, activities, or surroundings (e.g., feeling stressed, relaxing, socializing, or being at a party)?",
                weight: 0.10,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "How likely is it for someone personally close to you to be smoking beside you whenever you go out?",
                weight: 0.1,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "When you spend time with your friends, how often do you find smoking to be a shared activity?",
                weight: 0.13,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "If one of your closest friends offered you a cigarette (e.g., at a party, during a hangout, or while hanging out at home), how likely are you to accept it?",
                weight: 0.15,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "How often do you avoid visiting non-smoking friends because you feel uncomfortable about smoking in their presence (e.g., at their home, during social gatherings, at restaurants, or on trips)?",
                weight: 0.11,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "How many members of your family smoke tobacco (e.g., father, mother, siblings, or other close relatives)?",
                weight: 0.15,
                options: ["No one in my family smokes", "A few family members smoke occasionally", "Some family members smoke regularly", "Many family members smoke frequently", "The majority of my family members smoke"]
            },
            {
                text: "When you’re around friends or family who don’t smoke, do you feel more disconnected or anxious compared to when you are with people who smoke?",
                weight: 0.08,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "How often have you noticed anti-cigarette smoking information in digital media (e.g., television, social media, websites, YouTube, streaming platforms, mobile apps, or online ads) but chosen to ignore it?",
                weight: 0.09,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            }
        ],
        psychological: [
            {
                text: "If I always smoke at a specific place, it is hard to be there and not smoke.",
                weight: 0.03,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "Cigarettes control me.",
                weight: 0.05,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "Smoking helps me feel confident.",
                weight: 0.03,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "I can only go for a couple of hours between cigarettes.",
                weight: 0.05,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "There are sights and smells that trigger strong urges to smoke.",
                weight: 0.05,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "I would continue smoking, even if it meant spending less time on my hobbies, studies and other important tasks.",
                weight: 0.05,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "I feel alone without my cigarettes.",
                weight: 0.01,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "A lot of my friends and family smoke.",
                weight: 0.05,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "It would take a pretty serious medical problem to make me quit smoking.",
                weight: 0.06,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "How often do you feel like smoking a cigarette as the first thing in the morning?",
                weight: 0.05,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "To what extent do you believe smoking tobacco makes people appear 'cool' or more attractive?",
                weight: 0.09,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "How often do you feel when you’re craving a cigarette but can’t smoke at that time?",
                weight: 0.05,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "How often have you experienced periods of smoking much more than you intended?",
                weight: 0.06,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "Do you experience changes in your thinking patterns when you haven’t smoked for a while?",
                weight: 0.06,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "Do you find it harder to control your emotions when you haven’t had a cigarette for a while?",
                weight: 0.05,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "How often do you feel a strong, hard-to-ignore urge to smoke again after your last cigarette?",
                weight: 0.04,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "How easy or difficult do you find to go without smoking for as long as a week?",
                weight: 0.07,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "How difficult do you find to focus on tasks when you haven’t smoked for a while?",
                weight: 0.05,
                options: ["Never", "Rarely", "Occasionally", "Frequently", "Almost Always"]
            },
            {
                text: "Do you think you could have stopped smoking if you wanted to?",
                weight: 0.05,
                options: ["Almost Always", "Frequently", "Occasionally", "Rarely", "Never"]
            }
        ]
    },

    getQuestions() {
        return this.questions;
    },

    getSectionQuestions(category) {
        return this.questions[category] || [];
    }
};

// Quiz state management
const state = {
    currentSection: 0,
    currentQuestion: 0,
    responses: {},
    sections: ['health', 'economic', 'social', 'psychological']
};

// Helper function to check if all questions are answered
function areAllQuestionsAnswered() {
    let totalQuestions = 0;
    let answeredQuestions = 0;

    state.sections.forEach(section => {
        const sectionQuestions = questionManager.questions[section];
        totalQuestions += sectionQuestions.length;
        
        sectionQuestions.forEach((_, index) => {
            if (state.responses[`${section}_${index}`] !== undefined) {
                answeredQuestions++;
            }
        });
    });

    return totalQuestions === answeredQuestions;
}

// Navigation functions
function navigate(direction) {
    const currentResponse = state.responses[`${state.sections[state.currentSection]}_${state.currentQuestion}`];
    
    if (direction === 1 && currentResponse === undefined) {
        alert('Please select an option before proceeding.');
        return;
    }

    if (direction === 1 && isLastQuestion()) {
        if (areAllQuestionsAnswered()) {
            showResults();
        } else {
            alert('Please answer all questions before proceeding.');
        }
        return;
    }

    updateQuestion(direction);
    updateProgressBar();
    updateNavigationButtons();
}

function isLastQuestion() {
    const isLastSection = state.currentSection === state.sections.length - 1;
    const currentSectionQuestions = questionManager.questions[state.sections[state.currentSection]];
    const isLastQuestionInSection = state.currentQuestion === currentSectionQuestions.length - 1;
    
    return isLastSection && isLastQuestionInSection;
}

function updateQuestion(direction) {
    const currentSectionQuestions = questionManager.questions[state.sections[state.currentSection]];

    if (direction === 1 && state.currentQuestion >= currentSectionQuestions.length - 1) {
        if (state.currentSection < state.sections.length - 1) {
            state.currentSection++;
            state.currentQuestion = 0;
        }
    } else if (direction === -1 && state.currentQuestion === 0) {
        if (state.currentSection > 0) {
            state.currentSection--;
            const previousSectionQuestions = questionManager.questions[state.sections[state.currentSection]];
            state.currentQuestion = previousSectionQuestions.length - 1;
        }
    } else {
        state.currentQuestion += direction;
    }

    displayCurrentQuestion();
}

function displayCurrentQuestion() {
    const currentSection = state.sections[state.currentSection];
    const question = questionManager.questions[currentSection][state.currentQuestion];
    const sectionName = currentSection.charAt(0).toUpperCase() + currentSection.slice(1);
    const currentColor = sectionColors[currentSection];

    const questionHTML = `
        <h2 class="section-title" style="color: ${currentColor.primary}">
            ${sectionName} Assessment - Question ${state.currentQuestion + 1}/${questionManager.questions[currentSection].length}
        </h2>
        <div class="question" style="background-color: ${currentColor.background}">
            <p>${question.text}</p>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option ${getSelectedClass(currentSection, state.currentQuestion, index)}"
                         style="border-color: ${currentColor.primary}; 
                                ${getSelectedClass(currentSection, state.currentQuestion, index) ? 
                                `background-color: ${currentColor.primary}; color: white;` : ''}"
                         onclick="selectOption('${currentSection}', ${state.currentQuestion}, ${index})">
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.getElementById('current-section').innerHTML = questionHTML;
}

function updateProgressBar() {
    const progress = calculateProgress();
    const currentSection = state.sections[state.currentSection];
    const currentColor = sectionColors[currentSection];
    
    const progressBar = document.querySelector('.progress');
    progressBar.style.width = `${progress}%`;
    progressBar.style.backgroundColor = currentColor.primary;
    
    updateSectionProgress();
}

function calculateProgress() {
    let totalQuestions = 0;
    let answeredQuestions = 0;

    state.sections.forEach(section => {
        const sectionQuestions = questionManager.questions[section];
        totalQuestions += sectionQuestions.length;
        
        sectionQuestions.forEach((_, index) => {
            if (state.responses[`${section}_${index}`] !== undefined) {
                answeredQuestions++;
            }
        });
    });

    return (answeredQuestions / totalQuestions) * 100;
}

function updateSectionProgress() {
    const progressHTML = state.sections.map(section => {
        const sectionQuestions = questionManager.questions[section];
        const answered = sectionQuestions.filter((_, index) => 
            state.responses[`${section}_${index}`] !== undefined
        ).length;
        const total = sectionQuestions.length;
        const sectionColor = sectionColors[section];
        
        return `
            <div class="section-name" style="color: ${sectionColor.primary}">
                <span>${section.charAt(0).toUpperCase() + section.slice(1)}</span>
                <span>${answered}/${total}</span>
            </div>
            <div class="progress-bar">
                <div class="progress" style="width: ${(answered/total) * 100}%; background-color: ${sectionColor.primary}"></div>
            </div>
        `;
    }).join('');

    document.getElementById('section-progress').innerHTML = progressHTML;
}

function selectOption(section, questionIndex, optionIndex) {
    state.responses[`${section}_${questionIndex}`] = optionIndex + 1;
    displayCurrentQuestion();
    updateProgressBar();
    updateNavigationButtons();
}

function getSelectedClass(section, questionIndex, optionIndex) {
    return state.responses[`${section}_${questionIndex}`] === optionIndex + 1 ? 'selected' : '';
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    prevBtn.disabled = state.currentSection === 0 && state.currentQuestion === 0;
    
    const isLastQuestionFlag = isLastQuestion();
    nextBtn.style.display = isLastQuestionFlag ? 'none' : 'block';
    submitBtn.style.display = isLastQuestionFlag ? 'block' : 'none';
    
    if (isLastQuestionFlag) {
        submitBtn.disabled = !areAllQuestionsAnswered();
    } else {
        const currentResponse = state.responses[`${state.sections[state.currentSection]}_${state.currentQuestion}`];
        nextBtn.disabled = currentResponse === undefined;
    }
}

// Define the reports content for each category and level
const categoryReports = {
    health: {
        low: {
            title: "Low Health Risk Assessment",
            content: `
                <h2>Health Risk Assessment - Low Risk Level</h2>
                <p>Your health assessment indicates that while you are currently experiencing minimal physical effects from smoking, it's important to understand that any level of smoking carries health risks.</p>
                <h3>Key Findings</h3>
                <ul>
                    <li>Minimal current impact on physical health</li>
                    <li>Early stage of smoking-related health effects</li>
                    <li>Good opportunity for prevention</li>
                </ul>
                <h3>Recommendations</h3>
                <ul>
                    <li>Consider this an early warning sign</li>
                    <li>Schedule a preventive health check-up</li>
                    <li>Start monitoring your lung capacity</li>
                    <li>Begin a regular exercise routine</li>
                </ul>
                <h3>Preventive Measures</h3>
                <p>This is an ideal time to consider smoking cessation, as your body has likely sustained minimal damage and has strong recovery potential.</p>
            `
        },
        mid: {
            title: "Moderate Health Risk Assessment",
            content: `
                <h2>Health Risk Assessment - Moderate Risk Level</h2>
                <p>Your health assessment shows moderate effects from smoking. Some concerning symptoms may be present, but intervention now can prevent further deterioration.</p>
                <h3>Key Findings</h3>
                <ul>
                    <li>Noticeable impact on physical health</li>
                    <li>Presence of respiratory symptoms</li>
                    <li>Decreased physical stamina</li>
                    <li>Potential early warning signs of serious conditions</li>
                </ul>
                <h3>Recommendations</h3>
                <ul>
                    <li>Immediate consultation with healthcare provider</li>
                    <li>Lung function testing</li>
                    <li>Development of a cessation plan</li>
                    <li>Regular health monitoring</li>
                </ul>
                <h3>Action Plan</h3>
                <p>Medical intervention and lifestyle changes are recommended to prevent further health deterioration.</p>
            `
        },
        high: {
            title: "High Health Risk Assessment",
            content: `
                <h2>Health Risk Assessment - High Risk Level</h2>
                <p>Your health assessment indicates significant health impacts from smoking. Immediate medical attention and intervention are strongly recommended.</p>
                <h3>Critical Findings</h3>
                <ul>
                    <li>Severe impact on physical health</li>
                    <li>Significant respiratory issues</li>
                    <li>High risk of serious health complications</li>
                    <li>Compromised overall wellbeing</li>
                </ul>
                <h3>Urgent Recommendations</h3>
                <ul>
                    <li>Immediate medical evaluation</li>
                    <li>Comprehensive health screening</li>
                    <li>Emergency cessation plan</li>
                    <li>Regular medical monitoring</li>
                </ul>
                <h3>Critical Action Steps</h3>
                <p>Your health status requires immediate medical intervention and a structured cessation program.</p>
            `
        }
    },
    psychological: {
        low: {
            title: "Low Psychological Dependency Assessment",
            content: `
                <h2>Psychological Dependency Assessment - Low Level</h2>
                <p>Your assessment indicates a low level of psychological dependency on smoking. This suggests good potential for successful cessation.</p>
                <h3>Key Findings</h3>
                <ul>
                    <li>Minimal emotional attachment to smoking</li>
                    <li>Good control over smoking urges</li>
                    <li>Limited impact on daily functioning</li>
                </ul>
                <h3>Recommendations</h3>
                <ul>
                    <li>Develop simple coping strategies</li>
                    <li>Set a quit date</li>
                    <li>Create a basic support network</li>
                </ul>
            `
        },
        mid: {
            title: "Moderate Psychological Dependency Assessment",
            content: `
                <h2>Psychological Dependency Assessment - Moderate Level</h2>
                <p>Your assessment shows moderate psychological attachment to smoking, indicating some challenges in cessation but good potential for success with proper support.</p>
                <h3>Key Findings</h3>
                <ul>
                    <li>Moderate emotional reliance on smoking</li>
                    <li>Some difficulty managing stress without cigarettes</li>
                    <li>Noticeable impact on mood and behavior</li>
                </ul>
                <h3>Recommendations</h3>
                <ul>
                    <li>Consider counseling or support groups</li>
                    <li>Learn stress management techniques</li>
                    <li>Develop a comprehensive cessation plan</li>
                </ul>
            `
        },
        high: {
            title: "High Psychological Dependency Assessment",
            content: `
                <h2>Psychological Dependency Assessment - High Level</h2>
                <p>Your assessment indicates strong psychological dependency on smoking, suggesting the need for comprehensive support during cessation.</p>
                <h3>Key Findings</h3>
                <ul>
                    <li>Strong emotional attachment to smoking</li>
                    <li>Significant difficulty managing stress without cigarettes</li>
                    <li>Major impact on daily functioning</li>
                </ul>
                <h3>Recommendations</h3>
                <ul>
                    <li>Seek professional psychological support</li>
                    <li>Consider behavioral therapy</li>
                    <li>Develop comprehensive coping strategies</li>
                </ul>
            `
        }
    },
    social: {
        low: {
            title: "Low Social Impact Assessment",
            content: `
                <h2>Social Impact Assessment - Low Level</h2>
                <p>Your social smoking patterns show minimal impact on your social life and relationships.</p>
                <h3>Key Findings</h3>
                <ul>
                    <li>Limited social smoking behavior</li>
                    <li>Minimal peer pressure influence</li>
                    <li>Good boundary setting in social situations</li>
                </ul>
                <h3>Recommendations</h3>
                <ul>
                    <li>Maintain current social boundaries</li>
                    <li>Develop smoke-free social activities</li>
                    <li>Share cessation goals with friends</li>
                </ul>
            `
        },
        mid: {
            title: "Moderate Social Impact Assessment",
            content: `
                <h2>Social Impact Assessment - Moderate Level</h2>
                <p>Your social smoking patterns show moderate influence on your social interactions and relationships.</p>
                <h3>Key Findings</h3>
                <ul>
                    <li>Notable social smoking triggers</li>
                    <li>Some difficulty in smoke-free social situations</li>
                    <li>Moderate peer influence</li>
                </ul>
                <h3>Recommendations</h3>
                <ul>
                    <li>Develop new social strategies</li>
                    <li>Find supportive smoke-free environments</li>
                    <li>Build a support network</li>
                </ul>
            `
        },
        high: {
            title: "High Social Impact Assessment",
            content: `
                <h2>Social Impact Assessment - High Level</h2>
                <p>Your social smoking patterns significantly impact your social life and relationships.</p>
                <h3>Key Findings</h3>
                <ul>
                    <li>Strong social dependency on smoking</li>
                    <li>Significant difficulty in smoke-free environments</li>
                    <li>High peer influence</li>
                </ul>
                <h3>Recommendations</h3>
                <ul>
                    <li>Seek support group participation</li>
                    <li>Develop new social circles</li>
                    <li>Learn social coping strategies</li>
                </ul>
            `
        }
    },
    economic: {
        low: {
            title: "Low Economic Impact Assessment",
            content: `
                <h2>Economic Impact Assessment - Low Level</h2>
                <p>Your smoking habits have a minimal impact on your financial situation.</p>
                <h3>Financial Analysis</h3>
                <ul>
                    <li>Limited current financial impact</li>
                    <li>Minimal healthcare costs</li>
                    <li>Good opportunity for prevention</li>
                </ul>
                <h3>Recommendations</h3>
                <ul>
                    <li>Track smoking expenses</li>
                    <li>Consider future financial implications</li>
                    <li>Plan for prevention costs</li>
                </ul>
            `
        },
        mid: {
            title: "Moderate Economic Impact Assessment",
            content: `
                <h2>Economic Impact Assessment - Moderate Level</h2>
                <p>Your smoking habits have a noticeable impact on your financial situation.</p>
                <h3>Financial Analysis</h3>
                <ul>
                    <li>Significant monthly expenses on cigarettes</li>
                    <li>Growing healthcare costs</li>
                    <li>Impact on disposable income</li>
                </ul>
                <h3>Recommendations</h3>
                <ul>
                    <li>Create a cessation savings plan</li>
                    <li>Calculate long-term financial impact</li>
                    <li>Consider cessation support options</li>
                </ul>
            `
        },
        high: {
            title: "High Economic Impact Assessment",
            content: `
                <h2>Economic Impact Assessment - High Level</h2>
                <p>Your smoking habits have a major impact on your financial wellbeing.</p>
                <h3>Financial Analysis</h3>
                <ul>
                    <li>Substantial financial burden</li>
                    <li>High healthcare costs</li>
                    <li>Significant impact on quality of life</li>
                </ul>
                <h3>Recommendations</h3>
                <ul>
                    <li>Immediate financial planning</li>
                    <li>Calculate total smoking-related costs</li>
                    <li>Consider cessation programs</li>
                </ul>
            `
        }
    }
};

function getLevelFromScore(score) {
    if (score <= 33.3) return 'low';
    if (score <= 66.6) return 'mid';
    return 'high';
}

function calculateScores() {
    const scores = {};
    state.sections.forEach(section => {
        const sectionQuestions = questionManager.questions[section];
        let weightedSum = 0;
        let totalWeight = 0;

        sectionQuestions.forEach((q, i) => {
            const response = state.responses[`${section}_${i}`];
            if (response) {
                weightedSum += response * q.weight;
                totalWeight += q.weight;
            }
        });

        scores[section] = (weightedSum / totalWeight / 5) * 100;
    });

    scores.overall = Object.values(scores).reduce((sum, score) => sum + score, 0) /
        state.sections.length;

    return scores;
}

function showResults() {
    const scores = calculateScores();
    
    // Store the results in localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        currentUser.quizResults = scores; // Add quiz results to the user object
        localStorage.setItem('currentUser', JSON.stringify(currentUser)); // Save updated user object
    }

    // Rest of the code to display results...
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    // Display the results...
    const scoresHtml = Object.entries(scores)
        .filter(([category]) => category !== 'overall')
        .map(([category, score]) => {
            const level = getLevelFromScore(score);
            const roundedScore = Math.round(score);
            const scoreColor = roundedScore >= 70 ? '#ff4444' :
                             roundedScore >= 30 ? '#ffa700' : '#00C851';
            
            // Construct the PDF file path
            const pdfFilePath = `${pdfBaseDirectory}${category}/${level}.pdf`;
            
            return `
                <div class="result-card">
                    <h3>${category.charAt(0).toUpperCase() + category.slice(1)} Assessment</h3>
                    <div class="result-score" style="color: ${scoreColor}">${roundedScore}%</div>
                    <div class="level-indicator">Risk Level: ${level.toUpperCase()}</div>
                    <div class="risk-description">
                        ${getRiskDescription(category, level)}
                    </div>
                    <button onclick="window.open('${pdfFilePath}', '_blank')" 
                            class="view-pdf-btn">
                        View PDF Report
                    </button>
                </div>
            `;
        }).join('');

    const overallScore = Math.round(scores.overall);
    const overallLevel = getLevelFromScore(overallScore);
    const overallScoreHtml = `
        <div class="overall-score">
            <h2>Overall Assessment</h2>
            <div class="result-score">${overallScore}%</div>
            <div class="level-indicator">Overall Risk Level: ${overallLevel.toUpperCase()}</div>
        </div>
    `;

    document.getElementById('scores-container').innerHTML = overallScoreHtml + scoresHtml;

    // Update the action buttons
    const actionButtonsHtml = `
        <div class="action-buttons">
            <button onclick="restartQuiz()" class="download-btn">Retake Assessment</button>
            <button onclick="window.location.href = 'cai-website.html';" class="view-pdf-btn">Go Back to Home</button>
        </div>
    `;

    document.querySelector('.action-buttons').innerHTML = actionButtonsHtml;
}

function generatePDF() {
    const scores = calculateScores();
    const overallScore = Math.round(scores.overall);
    const overallLevel = getLevelFromScore(overallScore);

    // Define the content for the PDF
    const content = [
        { text: 'CHARS-index Cigarette Addiction Assessment Report', style: 'header' },
        { text: `Report Generated: ${new Date().toLocaleDateString()}`, style: 'subheader' },
        { text: `Overall Assessment Score: ${overallScore}%`, style: 'score' },
        { text: `Overall Risk Level: ${overallLevel.toUpperCase()}`, style: 'subheader' },
        { text: 'Detailed Results by Category', style: 'subheader' }
    ];

    // Add each category's results to the PDF content
    state.sections.forEach(section => {
        const score = Math.round(scores[section]);
        const level = getLevelFromScore(score);
        const report = categoryReports[section][level];

        content.push(
            { text: `${section.charAt(0).toUpperCase() + section.slice(1)} Assessment`, style: 'categoryHeader' },
            { text: `Score: ${score}%`, style: 'score' },
            { text: `Risk Level: ${level.toUpperCase()}`, style: 'subheader' },
            { text: report.content, style: 'content' },
            { text: '\n\n', style: 'spacer' } // Add space between sections
        );
    });

    // Define the document definition for pdfmake
    const docDefinition = {
        content: content,
        styles: {
            header: {
                fontSize: 24,
                bold: true,
                margin: [0, 0, 0, 10],
                alignment: 'center'
            },
            subheader: {
                fontSize: 18,
                bold: true,
                margin: [0, 10, 0, 5]
            },
            score: {
                fontSize: 20,
                bold: true,
                margin: [0, 10, 0, 10],
                color: '#3498db'
            },
            categoryHeader: {
                fontSize: 22,
                bold: true,
                margin: [0, 20, 0, 10],
                color: '#2c3e50'
            },
            content: {
                fontSize: 14,
                margin: [0, 10, 0, 10],
                lineHeight: 1.6
            },
            spacer: {
                fontSize: 10,
                margin: [0, 10, 0, 10]
            }
        },
        defaultStyle: {
            font: 'Helvetica'
        }
    };

    // Generate and download the PDF
    pdfMake.createPdf(docDefinition).download('CHARS-index_Assessment_Report.pdf');
}

function getRiskDescription(category, level) {
    const report = categoryReports[category][level];
    return report.content;
}

function restartQuiz() {
    state.currentSection = 0;
    state.currentQuestion = 0;
    state.responses = {};
    
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    
    displayCurrentQuestion();
    updateProgressBar();
    updateNavigationButtons();
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentQuestion();
    updateProgressBar();
    updateNavigationButtons();
});