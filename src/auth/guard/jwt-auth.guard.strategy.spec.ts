import { JwtAuthGuard } from './jwt-auth.guard.strategy';

describe('JwtAuthGuard', () => {
  it('should be defined', () => {
    expect(new JwtAuthGuard()).toBeDefined();
  });
});
