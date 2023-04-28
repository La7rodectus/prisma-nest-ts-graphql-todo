import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';
import { defaultFieldResolver, GraphQLSchema } from 'graphql';

export function hasRoleDirectiveTransformer(schema: GraphQLSchema, directiveName: string) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: fieldConfig => {
      const directiveArgs = getDirective(schema, fieldConfig, directiveName)?.[0];

      if (directiveArgs) {
        const { resolve = defaultFieldResolver } = fieldConfig;
        fieldConfig.resolve = async function (source, args, context, info) {
          const { role } = directiveArgs;

          const ok = role === context.user.role;
          if (!ok)
            return {
              __typename: 'UnauthorizedError',
              message: 'Unauthorized!'
            };
          return await resolve(source, args, context, info);
        };
        return fieldConfig;
      }
    }
  });
}
