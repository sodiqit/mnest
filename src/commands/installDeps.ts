import chalk from 'chalk';
import execa from 'execa';
import ora from 'ora';

export const installDeps = async (template: string) => {
    const cwd = `${process.cwd()}${template ? `/${template}` : ''}`;

    const spinner = ora('Loading deps...').start();

    try {
        await execa('git', ['checkout', 'nestjs-startup'], { cwd });

        await execa('yarn', { cwd: `${cwd}/eslint-plugin` });

        await execa('yarn', { cwd });

        spinner.succeed(`Success loading. ${template ? `Run "cd ${template}"` : ''}`);
    } catch (e) {
        console.log(e);
        spinner.fail(
            chalk.red(
                'Failure install. Starter kit used "yarn". Make sure that yarn is installed on your system.',
            ),
        );
        process.exit(1);
    }
};
