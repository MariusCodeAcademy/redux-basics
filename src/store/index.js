import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterRedux';
import authReducer from './authRedux';

// export store for use
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;

// panaudoti musu gilias js zinias su es6 import/export ir padalinti sita faila i atskirus
// counterRedux.js ir authRedux.js failus ir islaikyti ta pati funkcionaluma

// pranesti vartotojui jei neteisingai ivesti duomenys

// rodyti vartotojo emaila headeryje netoli logout mygtuko

// sukurti footeri, ir jame prideti logout mygtuka, padaryti veikianciu

// sukurti nauja componenta arba pernaudoti esama Auth componenta tam kad
// suteikti galimybe prisiregistruoti vartotojui.
// ivesties laukai turetu buti email, pass ir repeatPass
// suvedus email ir jei abu pass sutampa, mes pridedam vartotoja i authState.users masyva

// pakeisti prisiloginimo logika: ieskoti userio users masyve
