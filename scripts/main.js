import { OwnJeansChoices } from "./OwnsJeans.js"
import { locationTypeChoices } from "./urbanDweller.js"


const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = OwnJeansChoices()
    const locationHTML = await locationTypeChoices()
    
    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationHTML}`
}

render()