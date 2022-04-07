import {call, takeEvery, put} from 'redux-saga/effects';
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from './actions';
import axios from 'axios';

async function usersFetch() {
  try {
    const users = await axios.get('https://www.breakingbadapi.com/api/characters'); 
    return users.data; 

  } catch (error) {
    console.log(error);
  }
}

function* workGetUsersFetch(){
  const users = yield call(usersFetch);
  yield put({ type: GET_USERS_SUCCESS, users })
}

function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch)
}

export default mySaga; 
