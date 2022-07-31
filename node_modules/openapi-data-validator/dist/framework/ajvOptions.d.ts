import { Options as AjvSdkOptions } from 'ajv';
import { OpenApiValidatorOpts, RequestValidatorOptions } from './types';
export declare class AjvOptions {
    private options;
    constructor(options: OpenApiValidatorOpts);
    get preprocessor(): AjvSdkOptions;
    get request(): RequestValidatorOptions;
    private baseOptions;
}
