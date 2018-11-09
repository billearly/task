import gql from 'graphql-tag';

export const DELETE_TODO = gql`
    mutation deleteTask($_id: String) {
        deleteTask(_id: $_id) {
            _id
        }
    }
`;
