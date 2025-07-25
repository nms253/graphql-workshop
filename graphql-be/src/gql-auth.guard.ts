import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
    //getRequest() is called automatically by NestJS when you extend AuthGuard.
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}

// Why it's needed: Because the default AuthGuard('jwt') expects a traditional HTTP request,
// but GraphQL wraps it differently. This override adapts it to GraphQL.