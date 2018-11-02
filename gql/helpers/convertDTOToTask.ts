import { ITask } from '../../model';
import { Bridge } from '../../enum';

export const convertDTOToTask = (task: any): ITask => {
    task.bridge = Bridge[task.bridge];
    task.creationDate = new Date(Number(task.creationDate));
    task.updateDate = new Date(Number(task.updateDate));
    task.completionDate = task.completionDate
        ? new Date(Number(task.completionDate))
        : null;

    return task;
}
