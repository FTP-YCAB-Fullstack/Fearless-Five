import {createStore} from "redux"
import reducerUser from "./reducers/reducerUser"

const store = createStore(reducerUser)

export default store