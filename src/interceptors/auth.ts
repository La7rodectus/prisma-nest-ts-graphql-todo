import { verify } from 'jsonwebtoken';

type JWTPayload = {
  sub: string;
  name: string;
  iat: number;
  role: string;
};
export class GraphQLContextHandler {
  async handle({ req, res, connection }) {
    if (connection) {
      return {
        req: connection.context
      };
    }
    const { authorization: token } = req.headers;

    const payload: JWTPayload = (await verify(token, process.env.JWT_SECRET)) as JWTPayload;

    return {
      req,
      res,
      user: {
        role: payload?.role
      }
    };
  }
}
