module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        node: true,
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:jest/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/jsx-runtime",
        "plugin:storybook/recommended",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        // disable error on explicit types where type could be inferred
        "@typescript-eslint/no-inferrable-types": 0,
    },
};
