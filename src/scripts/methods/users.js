import { users } from "../data/users"

export const instantiateUserObject = (id, name) => {
    users.value.push({
        id, name
    })
}