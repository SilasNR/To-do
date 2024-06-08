import { CreateProjectDto } from './project.dto';

describe('ProjectDto', () => {
  it('should be defined', () => {
    expect(new CreateProjectDto()).toBeDefined();
  });
});
