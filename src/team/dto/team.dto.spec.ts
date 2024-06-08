import { CreateTeamDto } from './team.dto';

describe('TeamDto', () => {
  it('should be defined', () => {
    expect(new CreateTeamDto()).toBeDefined();
  });
});
