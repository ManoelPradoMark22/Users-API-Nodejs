import { IncomingHttpHeaders } from "http";

interface IHeaderRequest extends IncomingHttpHeaders {
  user_id: string;
}

export { IHeaderRequest };
