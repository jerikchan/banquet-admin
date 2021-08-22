import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import Mock from 'mockjs';

const modules = import.meta.globEager('./**/*.ts');

const mockModules: any[] = [];
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return;
  }
  mockModules.push(...modules[key].default);
});

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}

if (window._XMLHttpRequest) {
  Mock.XHR.prototype.upload = window._XMLHttpRequest().upload;
}
