import { CreateTagDto } from './tag.dto';

describe('TagDto', () => {
  it('should be defined', () => {
    expect(new CreateTagDto()).toBeDefined();
  });
});
