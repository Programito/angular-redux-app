

import * as fromAuth from './auth.actions';
import { User } from './user.model';
import { from } from 'rxjs';

export interface AuthState {
    user: User;
}

const estadoInicial: AuthState = {
    user: null
};

export function authReudcer( state = estadoInicial, action: fromAuth.acciones): AuthState {
    switch( action.type ){
        case fromAuth.SET_USER:
            return {
                user: {...action.user}
            };
        default:
            return state;
    }
}
