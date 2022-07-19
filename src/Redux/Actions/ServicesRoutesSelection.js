import { SERVICES_DATA_SELECTION, ROUTES_DATA_SELECTION } from '../Types/Index'

const setSelectedServices = (payload) => ({
    type: SERVICES_DATA_SELECTION,
    payload
})

const setSelectedRoutes = (payload) => ({
    type: ROUTES_DATA_SELECTION,
    payload
})

export { setSelectedServices, setSelectedRoutes }