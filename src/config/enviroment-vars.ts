import * as joi from "joi";
import dotenv from "dotenv";

export type ReturnEnviromentVars = {
    PORT: number;
    
}

type ValidationEnviromentVars = {
    error: joi.ValidationError | undefined;
    value: ReturnEnviromentVars;
}

function validateEnvVars(vars:NodeJS.ProcessEnv): ValidationEnviromentVars {
    const envSchema = joi.object({
        PORT: joi.number().required()
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
        PORT: value.PORT
    }
}