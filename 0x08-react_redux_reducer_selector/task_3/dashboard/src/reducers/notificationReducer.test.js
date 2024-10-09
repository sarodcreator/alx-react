import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificatioActionTypes';

describe('notificatioReducer', () => {
    it('handles FETCH_NOTIFICATIONS_SUCCESS', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                {id: 1, type: "default", value: "New course available"},
                {id: 2, type: "urgent", value: "New resume available"},
                {id: 3, type: "urgent", value: "New data available"},
            ]
        }

        const expectedState = {
            filter: "DEFAULT",
            data: [
                {id: 1, isRead: false, type: "default", value: "New course available"},
                {id: 2, isRead: false, type: "urgent", value: "New resume available"},
                {id: 3, isRead: false, type: "urgent", value: "New data available"},
            ]
        };

        const state = notificationReducer(undefined, action);
        expect(state).toequal(expectedState);
    });

    it('should handle MARK_AS_READ', () => {
        const initialState = {
            filter: "DEFAULT",
            Notifications: [
                {id: 1, isRead: false, type: "default", value: "New course avilable"},
                {id: 2, isRead: false, type: "urgent", value: "New resume available"},
                {id: 3, isRead: false, type: "urgent", value: "New data available"},
            ]
        };

        const action = {
            type: MARK_AS_READ,
            index: 2,
        };

        const expectedState = {
            filter: "DEFAULT",
            Notifications: [
                {id: 1, isRead: false, type: "default", value: "New course avilable"},
                {id: 2, isRead: true, type: "urgent", value: "New resume available"},
                {id: 3, isRead: false, type: "urgent", value: "New data available"},
            ]
        };

        const state = notificationReducer(undefined, action);
        expect(state).toequal(expectedState);
    });

    it('should handle SET_TYPE_FILTER', () => {
        const action = {
            type: SET_TYPE_FILTER,
            filter: "urgent",
        };

        const expectedState = {
            filter: "URGENT",
            Notifications: []
        };

        const state = notificationReducer(undefined, action);
        expect(state).toequal(expectedState);
    });
});