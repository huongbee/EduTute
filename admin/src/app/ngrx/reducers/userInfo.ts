import { Action, ActionReducer } from '@ngrx/store';
import { UserInfo, UserInfoAction } from '../../services/server';

export function userInfoReducer(state = null, action: UserInfoAction): UserInfo | null {
    if (action.type === 'USER_SIGN_IN') return action.user;
    if (action.type === 'USER_UPDATE_INFO') return action.user;
    if (action.type === 'USER_SIGN_OUT') return null;
    return state;
}
