import { ONGOING_PROJECTS, PAST_PROJECTS, ACTIVE_PROJECTS } from '../Types/Index'


const onGoing = (payload) => ({
    type: ONGOING_PROJECTS,
    payload
})

const Past = (payload) => ({
    type: PAST_PROJECTS,
    payload
})
const Active = (payload) => ({
    type: ACTIVE_PROJECTS,
    payload
})


export { onGoing, Past, Active }