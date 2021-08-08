/**
 * Generate additional configuration files when used for packaging. The file can be configured with some global variables, so that it can be changed directly externally without repackaging
 */
import { GLOB_CONFIG_FILE_NAME, OUTPUT_DIR } from '../constant';
import fs, { writeFileSync } from 'fs-extra';
import chalk from 'chalk';

import { getRootPath, getEnvConfig } from '../utils';
import { getConfigFileName } from '../getConfigFileName';

import pkg from '../../package.json';

function createConfig(
  {
    configName,
    config,
    configFileName = GLOB_CONFIG_FILE_NAME,
    outputDir,
  }: { configName: string; config: any; configFileName?: string; outputDir: string } = {
    configName: '',
    config: {},
    outputDir: '',
  }
) {
  try {
    const windowConf = `window.${configName}`;
    // Ensure that the variable will not be modified
    const configStr = `${windowConf}=${JSON.stringify(config)};
      Object.freeze(${windowConf});
      Object.defineProperty(window, "${configName}", {
        configurable: false,
        writable: false,
      });
    `.replace(/\s/g, '');
    fs.mkdirp(getRootPath(outputDir));
    writeFileSync(getRootPath(`${outputDir}/${configFileName}`), configStr);

    console.log(chalk.cyan(`✨ [${pkg.name}]`) + ` - configuration file is build successfully:`);
    console.log(chalk.gray(outputDir + '/' + chalk.green(configFileName)) + '\n');
  } catch (error) {
    console.log(chalk.red('configuration file configuration file failed to package:\n' + error));
  }
}

export function runBuildConfig() {
  const config = getEnvConfig();
  const configFileName = getConfigFileName(config);
  const outputDir = (process.env.OUTPUT_DIR as string) || (OUTPUT_DIR as string);
  createConfig({ config, configName: configFileName, outputDir });
}
