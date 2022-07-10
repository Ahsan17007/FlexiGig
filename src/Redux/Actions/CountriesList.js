import { COUNTRIES_DATA } from '../Types/Index'

const countriesData = (payload) => ({
    type: COUNTRIES_DATA,
    payload
})

export { countriesData }