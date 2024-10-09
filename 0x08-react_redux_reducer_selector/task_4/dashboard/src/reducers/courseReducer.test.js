import { fromJS } from 'immutable';
import courseReducer from '../reducers/courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActions';

describe('courseReducer', () => {
    it('should handle FETCH_COURSE_SUCCESS', () => {
        const initialState = fromJS({
            courses: {},
        });
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [/* mock course data */],
        };
        const newState = courseReducer(initialState, action);
        // Add assertions here to check the normalized state
    });

    it('should handle SELECT_COURSE', () => {
        const initialState = fromJS({
            courses: {
                1: { selected: false },
            },
        });
        const action = { type: SELECT_COURSE, courseId: 1 };
        const newState = courseReducer(initialState, action);
        expect(newState.getIn(['courses', 1, 'selected'])).toBe(true);
    });

});
