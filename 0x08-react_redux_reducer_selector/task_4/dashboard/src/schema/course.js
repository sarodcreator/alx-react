import { normalize, schema } from 'normalizr';

const courseSchema = new schema.Entity('courses');

export const courseNormalizer = (data) => {
    return (normalize, [courseSchema]);
};