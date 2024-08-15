import { OwnJeansChoices } from "./OwnsJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./submissions.js"
import { locationTypeChoices } from "./urbanDweller.js"


const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = OwnJeansChoices()
    const locationHTML = await locationTypeChoices()
    const saveButton = await SaveSubmission()
    const subList = await SubmissionList()
    
    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationHTML}
    ${saveButton}
    ${subList}`
}

document.addEventListener("newSubmissionCreated", render)

render()