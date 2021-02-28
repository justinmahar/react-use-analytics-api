const excludedVariableNames = ['_'];

/**
 * Use this to create a TypeScript interface for the loaded Google Analytics Embed API object.
 *
 * @param obj The object to build a TS interface for.
 * @param interfaceName The name of the interface.
 */
export const buildTypeScriptInterfaceFromObject = (obj: any, interfaceName: string): string => {
  let result = `interface ${interfaceName} {`;
  if (typeof obj === 'object') {
    const keys: string[] = Object.keys(obj);
    keys.forEach((key) => {
      result += buildTypeFromVariable(obj[key], key, excludedVariableNames) + ' ';
    });
  }
  result += '}';
  return result;
};

const buildTypeFromVariable = (
  variable: any,
  name: string,
  excludedVars: string[] = [],
  depth = 0,
  maxDepth = 5,
): string => {
  let result = `${name}: `;
  const typeofvariable = typeof variable;
  let keys: string[];
  if (depth >= maxDepth) {
    result += 'any';
  } else {
    switch (typeofvariable) {
      case 'object':
        if (excludedVars.includes(name)) {
          result += 'any';
        } else if (Array.isArray(variable)) {
          result += 'any[]';
        } else if (variable !== null) {
          result += '{';
          keys = Object.keys(variable);
          keys.forEach((key) => {
            result += buildTypeFromVariable(variable[key], key, excludedVars, depth + 1) + ' ';
          });
          result += '}';
        } else {
          result += 'any';
        }
        break;
      case 'function':
        if (variable !== null) {
          result += '(';
          for (let i = 0; i < variable.length; i++) {
            result += `arg${i}: any`;
            if (i < variable.length - 1) {
              result += ', ';
            }
          }
          result += ') => any';
        } else {
          result += 'any';
        }
        break;
      default:
        result += typeofvariable;
    }
  }
  result += ';';
  return result;
};
