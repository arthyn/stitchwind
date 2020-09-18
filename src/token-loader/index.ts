import config from './config'
import { TokenSet, StitchesConfig } from '../stitches'

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

export function usePrefix(prefix: string, config: StitchesConfig): StitchesConfig {
    return {
        ...config,
        tokens: refit_keys(config.tokens, (key) => key.replace('$', prefix))
    }
}

function prepConfig(config: StitchesConfig): StitchesConfig {
    const breakpoints = config.breakpoints;
    const breakpointFunctions: TokenSet = {};

    for (const size in breakpoints) {
        breakpointFunctions[size] = (rule: string): string => `@media (min-width: ${breakpoints[size]}) { ${rule} }`;
    }

    return {
        ...config,
        breakpoints: breakpointFunctions
    }
}

const stitchwindConfig = prepConfig(config);

export default stitchwindConfig;