import { Map } from 'immutable';
import { courseNormalizer } from '../schema/course';
import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
} from '../actions/courseActions';

const initialState = Map({
    courses: Map(),
});

const courseReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_COURSE_SUCCESS: {
            const normalized = courseNormalizer(action.data);
            return state.mergeDeep(Map(normalized.entities.courses))
        }

        case SELECT_COURSE: {
            return state.setIn(['courses', action.courseId, 'selected'], true);
        }

        case UNSELECT_COURSE: {
            return state.setIn(['courses', action.courseId, 'selected'], false);
        }

        default:
            return state;
    }
};