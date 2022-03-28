// eslint-disable-next-line import/no-anonymous-default-export
export default {
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
};
