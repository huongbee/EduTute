import { Action, ActionReducer } from '@ngrx/store';
import { UserInfo, UserInfoAction } from '../../services/helper';

export function userInfoReducer(state = null, action: UserInfoAction): UserInfo | null {
    if (action.type === 'USER_SIGN_IN' || action.type === 'USER_UPDATE_INFO' || action.type === 'USER_SIGN_UP') return action.user;
    if (action.type === 'USER_SIGN_OUT') return null;
    return state;
}
