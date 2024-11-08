import inquirer from 'inquirer';

const newsletterQuestions = [
  {
    type: 'input',
    name: 'email',
    message: 'Sisesta oma e-mail:',
    validate: (input) => /\S+@\S+\.\S+/.test(input) ? true : 'Sisesta kehtiv e-maili aadress.'
  },
  {
    type: 'password',
    name: 'password',
    message: 'Sisesta oma parool:'
  },
  {
    type: 'number',
    name: 'age',
    message: 'Sisesta oma vanus:',
    validate: (input) => input > 0 ? true : 'Sisesta õige vanus.'
  },
  {
    type: 'list',
    name: 'subscriptionFrequency',
    message: 'Kui tihti soovid saada uudiskirja?',
    choices: ['Iganädalaselt', 'Kord kuus', 'Kord kvartalis']
  },
  {
    type: 'checkbox',
    name: 'topics',
    message: 'Milliseid teemasid soovid uudiskirjas lugeda?',
    choices: ['Tehnoloogia', 'Äri', 'Sport', 'Kultuur', 'Arvutimängud', 'Meelelahutus']
  },
  {
    type: 'rawlist',
    name: 'preferredLanguage',
    message: 'Millises keeles soovid uudiskirja saada?',
    choices: [
      { name: 'Eesti keel', value: 'et' },
      { name: 'Inglise keel', value: 'en' },
      { name: 'Soome keel', value: 'fi' }
    ]
  },
  {
    type: 'confirm',
    name: 'agreeToTerms',
    message: 'Kas nõustud tingimustega?',
    default: false
  },
];

function subscribeToNewsletter() {
  inquirer.prompt(newsletterQuestions)
    .then(answers => {
      if (answers.agreeToTerms) {
        console.log('Õnnestus! Sinu andmed:', answers);
      } else {
        console.log('Pead nõustuma tingimustega.');
      }
    })
    .catch(error => {
      console.error('Viga tellimisel:', error);
    });
}

subscribeToNewsletter();
