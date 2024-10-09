import { map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';
import {
    FETCH_NOTIFICATIONS_SUCCESS,
    SET_TYPE_FILTER,
    MARK_AS_READ
} from '../actions/notificationAction';

const initialState = Map({
    notifications: Map(),
});

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            const normalized = notificationsNormalizer(action.data);
            return state.merge(Map(normalized.entities.notifications));
        }

        case SET_TYPE_FILTER: {
            return state.set('filter', action.filter);
        }

        case MARK_AS_READ: {
            return state.Setin(['notifications', action.notificationId, 'isRead'], true);
        }

        default:
            return state;
    }
};