import { saveSurveySubmission } from "./TransientState.js"


const handleSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        saveSurveySubmission()
    }
}


export const SaveSubmission = () => {

    document.addEventListener("click", handleSubmissionClick)

    return `<button id="saveSubmission">Save Submission</button>`
}
