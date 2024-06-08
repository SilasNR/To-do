import { CreateTaggedDto } from './tagged.dto';

describe('TaggedDto', () => {
  it('should be defined', () => {
    expect(new CreateTaggedDto()).toBeDefined();
  });
});
