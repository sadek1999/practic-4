import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  {
    ignores: ["**/node_modules/", "./dist"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      "no-unused-vars": "error",
      "prefer-const": "error",
      "no-console": "warn",
    },
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);
