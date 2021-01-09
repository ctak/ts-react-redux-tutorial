import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { GithubAction } from './types';
import { getUserProfile } from '../../api/github';
import { getUserProfile as request, getUserProfileSuccess, getUserProfileError} from './actions';

export function getUserProfileThunk(username: string): ThunkAction<void, RootState, null, GithubAction> {
  return async dispatch => {
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(getUserProfileSuccess(userProfile));
    } catch (e) {
      dispatch(getUserProfileError(e));
    }
  };
}