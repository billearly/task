import gql from 'graphql-tag';

export const WRITE_TODO = gql`
    mutation writeTask($title: String, $bridge: String, $reason: String) {
        writeTask(title: $title, bridge: $bridge, reason: $reason) {
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
