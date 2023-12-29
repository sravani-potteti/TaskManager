import { takeEvery, put } from 'redux-saga/effects';
import { ADD_TASK } from '../actions/taskActions';

function* handleAddTask(action) {
  // Perform async API call here if needed
  // Example: const result = yield call(api.addTask, action.payload);

  // For simplicity, just dispatch the action directly
  yield put({ type: ADD_TASK, payload: action.payload });
}

function* taskSaga() {
  yield takeEvery(ADD_TASK, handleAddTask);
}

export default taskSaga;
