import { CreateTaskDto } from './task.dto';

describe('TaskDto', () => {
  it('should be defined', () => {
    expect(new CreateTaskDto()).toBeDefined();
  });
});
