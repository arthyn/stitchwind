import config from './config'
import { StitchwindInternalConfig } from '../stitches'

type index = string | number;

type AnObject = {
    [key in index]: any;
}

function refit_keys(o: AnObject, map: (key: string) => string): object {
    var build: AnObject, key: index, destKey: index, value: any;

    build = {};
    for (key in o) {
        // Get the destination key
        destKey = map(key) || key;

        // Get the value
        value = o[key];

        // If this is an object, recurse
        if (typeof value === "object") {
            value = refit_keys(value, map);
        }

        // Set it on the result using the destination key
        build[destKey] = value;
    }
    return build;
}

export function usePrefix<T extends StitchwindInternalConfig>(prefix: string, config: T): T {
    return {
        ...config,
        tokens: refit_keys(config.tokens, (key) => key.replace('$', prefix))
    }
}

type BreakpointSet<T extends StitchwindInternalConfig> = Record<keyof T['breakpoints'], (css: string) => string>;

function prepConfig<T extends StitchwindInternalConfig>(config: T): T & { breakpoints: BreakpointSet<T>} {  
    const breakpoints = config.breakpoints;
    const breakpointFunctions: BreakpointSet<T> = {} as BreakpointSet<T>;

    for (const size in breakpoints) {
        breakpointFunctions[size as keyof T['breakpoints']] = (rule: string): string => `@media (min-width: ${breakpoints[size]}) { ${rule} }`;
    }

    return {
        ...config,
        breakpoints: breakpointFunctions
    }
}

const stitchwindConfig = prepConfig(config);

export default stitchwindConfig;