import React from 'react';
import { TaskList, TaskForm } from '../components/task';
import { CursiveTitle } from '../components/generic';
import { theme } from '../theme/main';

const Tasks: React.SFC = () => {
    return (
        <>
            <CursiveTitle color={theme.colorGrayDark}>True Task</CursiveTitle>
            <TaskList />
            <TaskForm />
        </>
    );
}

export default Tasks;