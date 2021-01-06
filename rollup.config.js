import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from "rollup-plugin-terser"

export default [ {
    input: "./lib/index.js",
    output: {
        file: "dist/vaddc.js",
        name: "ddc",
        format: "iife"
    },
    plugins: [nodeResolve()]
},
{
    input: "./lib/index.js",
    output: {
        file: "dist/vaddc.min.js",
        name: "ddc",
        format: "iife"
    },
    plugins: [nodeResolve(), terser()]
}
]