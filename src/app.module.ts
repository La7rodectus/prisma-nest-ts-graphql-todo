import { Module, UseInterceptors } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { CommentModule } from './comment/comment.module';
import { constraintDirectiveTypeDefs, constraintDirective } from 'graphql-constraint-directive';
import { hasRoleDirectiveTransformer } from './directives/directives';
import { GraphQLContextHandler } from './interceptors/auth';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['defaults.graphql', './**/*.graphql'],
      typeDefs: constraintDirectiveTypeDefs,
      transformSchema: schema => {
        schema = constraintDirective()(schema);
        schema = hasRoleDirectiveTransformer(schema, 'hasRole');
        return schema;
      },
      definitions: {
        path: join(process.cwd(), 'src/types/graphql.ts'),
        outputAs: 'class'
      },
      context: new GraphQLContextHandler().handle
    }),
    NoteModule,
    CommentModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
