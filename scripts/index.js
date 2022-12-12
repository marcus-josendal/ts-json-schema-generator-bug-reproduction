const tsj = require("ts-json-schema-generator");

const config = {
    path: "types/except.ts",
    tsconfig: "tsconfig.json",
    type: "*"
};

const schema = tsj.createGenerator(config).createSchema(config.type);

console.log(schema)
