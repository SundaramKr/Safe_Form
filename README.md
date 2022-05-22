# Safe_Form
The site link --> https://safeform.tk/
- Safe Form is a platform to prevent cheating in Google Forms by securing it with tab change detection and terminating the student's session once he/she crosses the click off limit.
- It contains a built-in timer which terminates the form as soon the student exceeds the allotted time.
- Once on the form, the student will be presented with an instructions page (which can be customised by the teacher) in order to go about different sections of the test.
- Observing the behaviour of students we found out that students tend to take the easy way out if they have the option to do so. In this case, the "easy way" is "cheating" to pass the test. By forcing the form to be only visible in a full screen mode, we try to avoid the fragile minds of students from getting distracted.
- While filling the form, if a student opens another tab or deviates from the form, they will be warned. The warn limit on the form is 3.
- If the number of warns increases more than 3, the student's session will be terminated and since auto-save is off, all their progress will be lost.
- The session termination might also happen if the timer in the navigation menu hits 00:00, i.e., he/she exceeds the time limit.
- Once the session is terminated, the student can't fill the form again even if he reloads or goes back.
- Even if a student disables JS for the website, they won't be able to attempt the test.
