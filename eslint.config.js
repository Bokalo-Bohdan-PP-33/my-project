import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import configPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
  {
    ignores: ["dist/", "coverage/", "playwright-report/"],
  },
  
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  configPrettier,
  
  {
    files: ["**/*.js", "**/*.vue"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "error", 
      "no-console": "warn",      
      "vue/multi-word-component-names": "off",
    },
  },
];