import { Task } from './task.entity';

describe('TaskEntity', () => {
  it('should be defined', () => {
    expect(new Task()).toBeDefined();
  });
});
