
const state = {
  registerEvents: {},
  sessions: {},
  isLoggedIn: false,
};


export function login () {
  state.isLoggedIn = true;
}

export function logout () {
  state.isLoggedIn = false;
  registerEvents = {};
  sessions = {};
}


export function setRegisterEvents (registerEvents) {
  state.registerEvents = registerEvents;
}


export function setSessions (sessions) {
  state.sessions = sessions;
}


export default state;
