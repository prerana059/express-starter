module.exports = {
    // extends: [
    // //     
    // parser: '@typescri'eslint:recommended',
    // //     'plugin:@typescript-eslint/recommended',
    //     'plugin:@typescript-eslint/recommended-requiring-type-checking',
    //     'prettier',
    // ],pt-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
}