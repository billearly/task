import gql from 'graphql-tag';

export const GET_TODOS = gql`
    query tasks {
        tasks {
            _id
            title
            bridge
            reason
            isComplete
            creationDate
            updateDate
            completionDate
        }
    }
`;
