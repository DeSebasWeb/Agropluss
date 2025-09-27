import * as joi from "joi";
import dotenv from "dotenv";

export type ReturnEnviromentVars = {
    PORT: number;
    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
}

type ValidationEnviromentVars = {
    error: joi.ValidationError | undefined;
    value: ReturnEnviromentVars;
}

function validateEnvVars(vars:NodeJS.ProcessEnv): ValidationEnviromentVars {
    const envSchema = joi.object({
        PORT: joi.number().required(),
        DB_HOST: joi.string().required(),
        DB_PORT: joi.number().required().default(5432),
        DB_USER: joi.string().required(),
        DB_PASSWORD: joi.string().required(),
        DB_NAME: joi.string().allow("").optional(),
    }).unknown(true);

    const { error, value } = envSchema.validate(vars)

    return {error, value};
}

const loadEnvVars = (): ReturnEnviromentVars => {
    const result = validateEnvVars(process.env);
    if(result.error){
        throw new Error(`Error al validar las variables de entorno: ${result.error.message}`);
    }
    const value = result.value;
    return {
        PORT: value.PORT,
        DB_HOST: value.DB_HOST,
        DB_PORT: value.DB_PORT,
        DB_USER: value.DB_USER,
        DB_PASSWORD: value.DB_PASSWORD,
        DB_NAME: value.DB_NAME,
    };
}