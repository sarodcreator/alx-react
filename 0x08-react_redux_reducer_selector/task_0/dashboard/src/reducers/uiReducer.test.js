import uiReducer from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from '..actions/uiActionTypes';

describe('uiReducer', () => {
    const initialState = {
        isNotificationDrawerVisible: false,
        isUserLoggedin: false,
        user: {},
    };

    it('return the initial state if no action is passed', () => {
        const state = uiReducer(undefined, {});
        expect(state).toequal(initialState);
    });
    it('return the initial state when SELECT_COURSE is passed', () => {
        const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
        expect(state).toequal(initialState);
    });
    it('changes the isNotificationDrawerVisible when DISPLAY_NOTIFICATIO_DRAWER action is passed', () => {
        const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(state.isNotificationDrawerVisible).tobe(true)
    });   
});