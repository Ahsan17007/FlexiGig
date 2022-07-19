import { ID_DOCUMENT_FILE, EDU_DOCUMENT_FILE, REV_DOCUMENT_FILE } from '../Types/Index'

const idDocument = (payload) => ({
    type: ID_DOCUMENT_FILE,
    payload
})

const eduDocument = (payload) => ({
    type: EDU_DOCUMENT_FILE,
    payload
})

const revDocument = (payload) => ({
    type: REV_DOCUMENT_FILE,
    payload
})

export { idDocument, eduDocument, revDocument }