import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import avatarsReducer from "./avatars-reducer";
import settingsReducer from "./settings-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    avatarsPage: avatarsReducer,
    settingsPage: settingsReducer
});

let store = createStore(reducers);

window.store = store;



export default store;