import { mount } from 'enzyme';
import { Task } from '../';
import {
    TASK_STANDARD,
    TASK_REASON_EMPTY,
    TASK_REASON_LEADING_WHITESPACE
} from './fixtures';

describe.skip('The Task Component', () => {
    it('should display the title and reason correctly', () => {
        const component = mount(<Task taskInfo={TASK_STANDARD} />);

        expect(component.find('p[data-target="task-title"]').text()).toEqual('Test the components');
        expect(component.find('p[data-target="task-reason"]').text()).toEqual('So that I know that it works');
    });

    it('should handle an empty reason', () => {
        const component = mount(<Task taskInfo={TASK_REASON_EMPTY} />);

        expect(component.find('p[data-target="task-reason"]').text()).toEqual('So that');
    });

    it('should handle a reason with leading white space', () => {
        const component = mount(<Task taskInfo={TASK_REASON_LEADING_WHITESPACE} />);

        expect(component.find('p[data-target="task-reason"]').text()).toEqual('So that it works with leading whitespace');
    });
});
