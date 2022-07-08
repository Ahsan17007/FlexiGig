import { SELECTED_LANGUAGE } from '../Types/Index'


const selectedLang = (payload) => ({
    type: SELECTED_LANGUAGE,
    payload
})




export { selectedLang }