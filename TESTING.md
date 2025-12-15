# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.

## Code Validation

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
|  | [404.html](https://rubina1978.github.io/Just-Quizly/404) | [HTML Validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Frubina1978.github.io%2FJust-Quizly%2F404) | ![screenshot](documentation/validation/screenshot-no-error-404.png) |  |
|  | [index.html](https://rubina1978.github.io/Just-Quizly/index) | [HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Frubina1978.github.io%2FJust-Quizly%2F) | ![screenshot](documentation/validation/screenshot-no-errors-index-page.png) |  |
|  | [modal.html](https://github.com/Rubina1978/Just-Quizly/blob/main/modal.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Frubina1978.github.io%2FJust-Quizly%2F#textarea) | ![screenshot](documentation/validation/screeshot-no-errors-modal.png) |  |


### CSS 


I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [style.css](https://github.com/Rubina1978/Just-Quizly/blob/main/assets/css/style.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Frubina1978.github.io%2FJust-Quizly%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) | ![screenshot](documentation/validation/screenshot-no-errors-CSS.png) |  |


### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
|  | [script.js](https://github.com/Rubina1978/Just-Quizly/blob/51e65759deacaf7a8c079191cdfad157c1ce332f/script.js) |  | ![screenshot](documentation/validation/screenshot-jshint.png) | No error mentioned just undefined and one unused variable all are external |


## Responsiveness

I've tested my deployed project to check for responsiveness issues.

| Page | Mobile | Tablet | Desktop | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](documentation/responsiveness/screenshot-home-mobile.png) | ![screenshot](documentation/responsiveness/screenshot-home-tablet.png) | ![screenshot](documentation/responsiveness/screenshot-home-desktop.png) | Works as expected |
| Quiz | ![screenshot](documentation/responsiveness/screenshot-mobile-quiz-page.png) | ![screenshot](documentation/responsiveness/screenshot-tablet-quiz.png) | ![screenshot](documentation/responsiveness/screenshot-desktop-quiz-page.png) | Works as expected |
| End Screen | ![screenshot](documentation/responsiveness/screenshot-mobile-end-screen.png) | ![screenshot](documentation/responsiveness/screenshot-tablet-end-screen.png) | ![screenshot](documentation/responsiveness/screenshot-desktop-end-screen.png) | Works as expected |
| 404 | ![screenshot](documentation/responsiveness/screenshot-mobile-404.png) | ![screenshot](documentation/responsiveness/screenshot-tablet-404.png) | ![screenshot](documentation/responsiveness/screenshot-desktop-404.png) | Works as expected |

## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Page | Chrome | Firefox | Edge | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](documentation/compatibility/screenshot-chrome-home.png) | ![screenshot](documentation/compatibility/screenshot-firefox-dev-ed-desktop.png) | ![screenshot](documentation/responsiveness/screenshot-home-desktop.png) | Works as expected |
| Quiz | ![screenshot](documentation/compatibility/screenshot-chrome-quiz-page.png) | ![screenshot](documentation/compatibility/screenshot-firefox-dev-ed-quiz.png) | ![screenshot](documentation/responsiveness/screenshot-desktop-quiz-page.png) | Works as expected |
| End-screen | ![screenshot](documentation/compatibility/screenshot-chrome-end-screen.png) | ![screenshot](documentation/compatibility/screenshot-firefox-dev-ed-end-page.png) | ![screenshot](documentation/responsiveness/screenshot-desktop-end-screen.png) | Works as expected |
| 404 | ![screenshot](documentation/compatibility/screenshot-chrome-404.png) | ![screenshot](documentation/compatibility/screenshot-firefox-dev-ed-404-page.png) | ![screenshot](documentation/responsiveness/screenshot-desktop-404.png) | Works as expected |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues. Some warnings are outside of my control, and mobile results tend to be lower than desktop.

| Page | Mobile | Desktop |
| --- | --- | --- |
| Index | ![screenshot](documentation/lighthouse-testing/screenshot-lighthouse-mobile-home.png) | ![screenshot](documentation/lighthouse-testing/screenshot-lighthouse-desktop-home.png) |
| 404 | ![screenshot](documentation/lighthouse-testing/screenshot-lighthouse-mobile-404.png) | ![screenshot](documentation/lighthouse-testing/screenshot-lighthouse-desktop-404.png) |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page/Feature | Expectation | Test | Result | Screenshot |
| --- | --- | --- | --- | --- |
| Difficulty selector| Feature is expected to allow the user to select a level of difficulty of the quiz and selected difficulty should highlight to indicates what the user selected and display questions of the level difficulty selected | tested by selectiing difficulty level and check functionality of each button | Difficulty selector feature on all options worked as expected, when selected difficulty the level of difficulty questions were displayed. | ![screenshot](documentation/Defensive-testing/screenshot-difficulty-selector-functionality.png) |
| Topic selector | Feature is expected to allow the user to select a topic of the quiz and selected topic should higlight to indicate what was selected and display question of the topic selected. | tested by selecting topic and check functionality of each button | Topic selector feature on all options worked as expected, quiz contained questions on selected topic. | ![screenshot](documentation/defensive-testing/screenshot-topic-selector-functionality.png) |
| Alert | User cannot start quiz without selecting difficulty and topic. If topic and/or difficulty is not selected alert prompting to make selection pops up | tested by trying to  commence quiz without selection one or both selectors. | Alert feature works as expected, does not let user to commence quiz without making a selection to both difficulty and topic. | ![screenshot](documentation/defensive-testing/screenshot-alert.png) | 
| Rules modal | Feature is expected to allow user to check rules how to play the quiz if wish to do so. When user click ok modal with rules should close off| tested by clicking modal button to see rules and clicked ok button to close it off. | Modal feature with rules opened up and when ok button was clicked, it closed off. | ![screenshot](documentation/defensive-testing/screenshot-rules-modal.png) |
| Mute button | Feature is expected to control wether user will play quiz with audio or on silence by clicking mute icon default to silence, audio included or silent play should indicate icon changing to volume on icon and go back to silence with icon off when user restart game. | Test play quiz with sound on and off | icon changed to volume on when pressed and all sounds played. For sound off mute icon went back to default sound off icon and no sounds were played | ![screenshot](documentation/defensive-testing/screenshot-audio-on.png) ![screenshot](documentation/defensive-testing/screenshot-audio-off.png) |
| Start button | Feature is expected to take user to quiz page with questions and options after difficulty and topic is selected | tested by selecting difficulty and topic then pressed Start | Start button worked as expected user taken to quiz page | ![screenshot](documentation/defensive-testing/screenshot-start-button-transfer-to-quiz-page.png) |
| Quiz window | Feature is expected display one question and four possible answers question number on default 1 of 10, score default zero on quiz start and progress bar to default empty. | Stested by selecting difficulty and topic and pressed start. | quiz window worked as expected, question was displayed, four options for an answer displayed correctly, question number was on default 1 of 10, score on zero and progress bar empty | ![screenshot](documentation/defensive-testing/screenshot-question-window.png) |
| Error Handling | Feature is expected to display correct answer only (green) and play correct sound if sound is on and correct answer is selected or incorrect answer (red) together with slightly dimmed correct answer and sound of incorrect answer of sound is on. The rest of answers are disabled so user cannot change mind | entered number of incorrect answers and correct ones. | Correct results were displayed for all tested cases in case the answer was correct and when incorrect answer pressed red was displayed with dimmed correct answer green color. All other answers were disabled so user cannot change mind | ![screenshot](documentation/features/screenshot-quiz-page.png) |
| Questions calculator | Feature is expected to calculate number of question and show user how many questions the user has left to answer | tested by playing the quiz number of times and check questions left to answer | questions calculator work as expected, displays number of question left to answer out of total (10) | ![screenshot](documentation/defensive-testing/screenshot-questions-calculator.png) |
| Score Tracker | Feature is expected to track the number of correct answers. | Played quiz and answer questions and checked the score tracker. | Score tracker worked as expected and updated correctly for all correct answers. | ![screenshot](documentation/defensive-testing/screenshot-score-tracker.png) |
| Progress tracker | Feature is expected to track progress by filling bar with orange color accordingly after each question answered | tested by playing the quiz and check progress in progress bar | progress bar worked as expected, progress was tracked after each question answered | ![screenshot](documentation/defensive-testing/screenshot-progress-bar.png) |
| End of quiz display | Feature is expected to show total score of correct answers out of 10 when quiz is finished and all questions answered. It is expected show positive message, which changing according to number of total correct answers as well as play an animation of confetti and audio if sound is on | tested by playing quiz until the end number of times to get every time different total score of correct answers and associated message | feature worked as expected, total score of correct answers out of 10 was displayed and according to the number of correct answers a specific message was displayed and sound played if set to on. Confetti played most of the cases with ocassional miss which is noted in known  and unclosed issues | ![screenshot](documentation/defensive-testing/screenshot-total-score-and-message.png) |
|Restard button | feature is expected to take user back to start screen when pressed to play again | Tested by playing the quiz until the end and pressed restart quiz button to get back to start page | restart button worked as expected and taken me back to start screen after pressing | ![screenshot](documentation/defensive-testing/screenshot-restart-button.png) |
| 404 Error Page | Feature is expected to display a 404 error page for non-existent pages and offer user to go back to index page. | Navigated to an invalid URL (e.g., `/test`) to test error handling. | A custom 404 error page was displayed as expected and home button sent me back to index page. | ![screenshot](documentation/features/screenshot-404-page.png) |
| Contrast checker | the contrast ratio is expected to be fully accessible with correct contrast level | Checked contrast ratios using accessibility tools (Lighthouse, Wave) | contras ratio passed without any error | ![screenshot](documentation/defensive-testing/screenshot-contrast-checker.png) |

## User Story Testing

| Target | Expectation | Outcome | Screenshot |
| --- | --- | --- | --- |
| As a user | I would like to have easy, straight forward overview of Just Quizly | so I know what is the app about and whether it meets my needs | ![screenshot](documentation/features/screenshot-introduction.png) |
| As a user | I would like to test my knowledge and learn something new when having time | so that I can spend my free time productively | ![screenshot](documentation/features/screenshot-quiz-page.png) |
| As a user | I would like to have the choice of difficulty and topic to choose from | so that I could test my knowledge on various subjects and different complexities | ![screenshot](documentation/features/screenshot-difficulty-topic.png) |
| As a user | I want my selected choices to be clearly highlighted, and I want the option to modify those choices before continuing | so I have a clarity and flexibility of choice | ![screenshot](documentation/defensive-testing/screenshot-topic-selector-functionality.png)
| As a user | I would like to know how many questions I have left | so that I plan my time accordingly. | ![screenshot](documentation/defensive-testing/screenshot-questions-calculator.png) |
| As a user | I would like the application to have high-contrast colors and accessible fonts | so that I can easily read and interact with it. | ![screenshot](documentation/defensive-testing/screenshot-contrast-checker.png) |
| As a user | I want clear indication whether my answer was right or wrong and if wrong, I want to know the correct answer | so I feel like I have learned something new | ![screenshot](documentation/features/screenshot-quiz-page.png) |
| As a user | I would like the app to show how many answers I got right and how many wrong | so that I can see where I need to improve. | ![screenshot](documentation/features/screenshot-confetti-animation.png) |
| As a user | I would like clear labels and instructions | so that I understand how to use the app without confusion. | ![screenshot](documentation/features/screenshot-modal.png) |
| As a user |  I would like to have different questions whenever I play | so I can keep motivated and focused | ![screenshot](documentation/defensive-testing/screenshot-question-window.png)
| As a user | I would like to see a 404 error page if I get lost | so that it's obvious that something gone wrong and I have hit a wrong path. | ![screenshot](documentation/features/screenshot-404-page.png) |
|As a user | I want to be alerted in case i forget to make selection | so I do not wonder what happen, why the quiz does not start | ![screenshot](documentation/features/screenshot-alert.png) |
| As a user | I want uplifting feedback that recognizes my effort | so I can stay motivated to continue learning and return to play again. | ![screenshot](documentation/features/screenshot-end-page.png) |
|As a user | I want the option to play audio during the game | so I can feel more engaged | ![screenshot](documentation/defensive-testing/screenshot-audio-on.png) |


## Bugs

### Fixed Bugs

[![GitHub issue custom search](https://img.shields.io/github/issues-search/Rubina1978/Just-Quizly?query=is%3Aissue%20is%3Aclosed%20label%3Abug&label=Fixed%20Bugs&color=green)](https://github.com/Rubina1978/Just-Quizly/issues?q=is%3Aissue%20label%3Abug)

I've used [GitHub Issues](https://www.github.com/Rubina1978/Just-Quizly/issues) to track and manage bugs and issues during the development stages of my project.

All previously closed/fixed bugs can be tracked [here](https://www.github.com/Rubina1978/Just-Quizly/issues?q=is%3Aissue+is%3Aclosed+label%3Abug).

![screenshot](documentation/bugs-report/closed-issues.png)

### Unfixed Bugs

[![GitHub issue custom search](https://img.shields.io/github/issues-search/Rubina1978/Just-Quizly?query=is%3Aissue%2Bis%3Aopen%2Blabel%3Abug&label=Unfixed%20Bugs&color=red)](https://www.github.com/Rubina1978/Just-Quizly/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

Any remaining open issues can be tracked [here](https://github.com/Rubina1978/Just-Quizly/issues?q=is%3Aissue%20label%3Abug%20state%3Aopen).

![screenshot](documentation/bugs-report/open-issues.png)

### Known Issues

| Issue | Screenshot |
| --- | --- |
| The project is designed to be responsive from `375px` and upwards, in line with the material taught on the course LMS. Minor layout inconsistencies may occur on extra-wide (e.g. 4k/8k monitors), or smart-display devices (e.g. Nest Hub, Smart Watches, Gameboy Color, etc.), as these resolutions are outside the project’s scope, as taught by Code Institute.On small mobiles up to `320px`it was not responsive, I have made it responsive regardless even Code Institute requires responsiveness from `375px` | ![screenshot](documentation/known-issues/nesthub-responsiveness.png) |
| When checking with Wave, it showed alerts about h1-h6 but nothing in HTML validator | ![screenshot](documentation/known-issues/screenshot-wave-alert.png) |
|Confetti sometimes does not play, usually when user goes directly from one game to another but refresh usually fix that, noted in bugs report | ![screenshot](documentation/bugs-report/open-issues.png)


> [!IMPORTANT]  
> There are no remaining bugs that I am aware of, though, even after thorough testing, I cannot rule out the possibility.

