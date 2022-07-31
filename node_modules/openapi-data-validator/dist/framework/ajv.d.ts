import Ajv from 'ajv';
import { OpenAPIV3, Options } from './types';
export declare function createRequestAjv(openApiSpec: OpenAPIV3.Document, options?: Options): Ajv;
