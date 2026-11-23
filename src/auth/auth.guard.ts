import { CanActivate, ExecutionContext, ForbiddenException, Injectable,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  private static readonly ADMIN_TOKEN = 'admin-secret-token';

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];

    if (authHeader !== AuthGuard.ADMIN_TOKEN) {
      throw new ForbiddenException('Prohibido');
    }

    return true;
  }
}
