import config from './config'

function refit_keys(o, map){
    var build, key, destKey, ix, value;

    build = {};
    for (key in o) {
        // Get the destination key
        destKey = map(key) || key;

        // Get the value
        value = o[key];

        // If this is an object, recurse
        if (typeof value === "object") {
            value = refit_keys(value);
        }

        // Set it on the result using the destination key
        build[destKey] = value;
    }
    return build;
}

export function usePrefix(prefix, config) {
    return {
        ...config,
        tokens: refit_keys(config.tokens, (key) => key.replace('$', prefix))
    }
}

function prepConfig(config) {
    const breakpoints = config.breakpoints;
    const breakpointFunctions = {};

    for (const size in breakpoints) {
        breakpointFunctions[size] = (rule) => `@media (min-width: ${breakpoints[size]}) { ${rule} }`;
    }

    return {
        ...config,
        breakpoints: breakpointFunctions
    }
}

const stitchwindConfig = prepConfig(config);

export default stitchwindConfig;