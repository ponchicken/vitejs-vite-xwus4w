import path from 'path';

// import { DEFAULT_EXTENSIONS } from 'vite-plugin-utils/constant'
import {
  singlelineCommentsRE,
  multilineCommentsRE,
} from 'vite-plugin-utils/constant';

const DEFAULT_EXTENSIONS = ['.ts', '.tsx'];

// ------------------------------------------------- RegExp

export const dynamicImportRE = /\bimport[\s\r\n]*?\(/;
// this is probably less accurate
export const normallyImporteeRE = /^\.{1,2}\/[.-/\w]+(\.\w+)$/;
export const viteIgnoreRE = /\/\*\s*@vite-ignore\s*\*\//;
export const bareImportRE = /^[\w@](?!.*:\/\/)/;
export const deepImportRE = /^([^@][^/]*)\/|^(@[^/]+\/[^/]+)\//;

// ------------------------------------------------- function

export function hasDynamicImport(code) {
  code = code
    .replace(singlelineCommentsRE, '')
    .replace(multilineCommentsRE, '');
  return dynamicImportRE.test(code);
}

export function dynamicImportCache() {
  let extensions = DEFAULT_EXTENSIONS;

  return {
    name: 'dynamicImportCache',
    // async transform(code, id) {
    //   if (/node_modules\/(?!\.vite\/)/.test(id)) return
    //   if (!extensions.includes(path.extname(id))) return
    //   if (!hasDynamicImport(code)) return

    //   console.log(id);
    // }
    async generateBundle(options, bundle) {
      console.log(options, bundle);
    },
  };
}
