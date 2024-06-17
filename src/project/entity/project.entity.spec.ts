import { Project } from './project.entity';

describe('ProjectEntity', () => {
  it('should be defined', () => {
    expect(new Project()).toBeDefined();
  });
});
