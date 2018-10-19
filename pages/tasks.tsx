import React from 'react';
import { TaskList } from '../components/task';
import { CursiveTitle } from '../components/generic';
import { theme } from '../theme/main';

const Tasks: React.SFC = () => {
    return (
        <>
            <CursiveTitle color={theme.colorGrayDark}>True Task</CursiveTitle>
            <TaskList />
        </>
    );
}

export default Tasks;