import { ValidationOptions } from "../ValidationOptions";
import { buildMessage, ValidateBy } from "../common/ValidateBy";
import validator from "validator";

export const IS_LOWERCASE = "isLowercase";

/**
 * Checks if the string is lowercase.
 * If given value is not a string, then it returns false.
 */
export function isLowercase(value: unknown): boolean {
    return typeof value === "string" && validator.isLowercase(value);
}

/**
 * Checks if the string is lowercase.
 * If given value is not a string, then it returns false.
 */
export function IsLowercase(validationOptions?: ValidationOptions): PropertyDecorator {
    return ValidateBy(
        {
            name: IS_LOWERCASE,
            validator: {
                validate: (value, args) => isLowercase(value),
                defaultMessage: buildMessage(
                    (eachPrefix) => eachPrefix + "$property must be a lowercase string",
                    validationOptions
                )
            }
        },
        validationOptions
    );
}