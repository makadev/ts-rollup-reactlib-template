import typescript from "@rollup/plugin-typescript";

const external = ["fs", "path", "react", "react-dom", "react/jsx-runtime"];

const libraryExcludes = ["tests/**", "src/**/*.{spec,test}.{ts,js,tsx,jsx}", "src/**/__test__/*.{ts,js,tsx,jsx}"];

// ES5 CommonJS Library Part
const libraryCJSBuild = {
    input: "./src/index.ts",
    external,
    plugins: [
        typescript({
            declaration: false,
            exclude: libraryExcludes,
            rootDir: "src/",
            outDir: "dist/cjs",
            target: "es5",
        }),
    ],

    output: [
        // CommonJS Module + SourceMaps (Node.js)
        {
            dir: "dist/cjs",
            format: "cjs",
            sourcemap: true,
        },
    ],
};

// ES2015 ESM Library Part
const libraryESMBuild = {
    input: "./src/index.ts",
    external,
    plugins: [
        typescript({
            declaration: false,
            exclude: libraryExcludes,
            rootDir: "src/",
            outDir: "dist/esm",
            target: "es2015",
        }),
    ],

    output: [
        // ESM + SourceMaps (Node.js)
        {
            format: "esm",
            sourcemap: true,
            dir: "dist/esm",
        },
    ],
};

export default [libraryCJSBuild, libraryESMBuild];
