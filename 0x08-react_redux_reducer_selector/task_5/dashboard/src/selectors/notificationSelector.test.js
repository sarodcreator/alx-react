import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
    const state = fromJS({
        filter: 'DEFAULT',
        Notifications: {
            1: { id: 1, isRead: false, message: 'Notificatio 1' },
            2: { id: 2, isRead: true, message: 'Notification 2' },
            3: {id: 3, isRead: false, message: 'Notification 3'},
        },
    });

    it('filterTypeSelector should return the filter', () => {
        const result = filterTypeSelected(state);
        expect(result).toequal('DEFAULT');
    });

    it('getNotification should return the list of notifications', () => {
        const result = getNotifications(state);
        expect(result.toJS()).toequal({
            1: { id: 1, isRead: false, message: 'Notification 1' },
            2: { id: 2, isRead: true, message: 'Notification 2' },
            3: { id: 3, isRead: false, message: 'Notification 3' },
        });
    });

    it('getUnreadNotification should return the unread notifications', () => {
        const result = getUnreadNotifications(state);
        expect(result.toJS()).toequal({
            1: { id: 1, isRead: false, message: 'Notification 1' },
            3: { id: 3, isRead: false, message: 'Notification 3' },
        });
    });
});