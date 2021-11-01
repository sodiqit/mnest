import chalk from 'chalk';
import execa from 'execa';
import ora from 'ora';

import { Options } from '../utils/parseOptions.utils';
import { installDeps } from './installDeps';

export const initNestTemplate = async (options: Options) => {
    const spinner = ora('Clonning in progress...').start();

    try {
        await execa('git', [
            'clone',
            `git@${
                options.githubUser ?? 'github.com'
            }:fullstack-development/nestjs-starter-kit.git`,
            `${options.template ?? '.'}`,
        ]);

        spinner.succeed(chalk.green('Cloning is success'));

        if (options.installDeps) {
            await installDeps(options.template);
        }
    } catch (e) {
        spinner.fail(
            chalk.red(
                "Failure clone project. Maybe you use miltiple account on github? If it's true - you need pass you login in args after template name.",
            ),
        );
        process.exit(1);
    }
};
