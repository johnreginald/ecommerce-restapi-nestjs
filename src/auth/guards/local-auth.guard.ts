import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  handleRequest(err, user, info) {
    if (info && !user) {
      throw new UnauthorizedException({
        error: info.message,
      });
    }

    if (err || !user) {
      throw err || new UnauthorizedException();
    }

    return user;
  }
}
