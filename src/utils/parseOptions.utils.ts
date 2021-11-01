import arg from 'arg';

import { Args } from '../types';

export type Options = ReturnType<typeof parseArgumentsIntoOptions>;

export const parseArgumentsIntoOptions = (rawArgs: Args) => {
    const args = arg(
        {
            '--init': Boolean,
            '--install': Boolean,
            '-i': '--install',
        },
        {
            argv: rawArgs.slice(2),
        },
    );

    return {
        init: args['--init'] || false,
        installDeps: args['--install'] || false,
        template: args._[0],
        githubUser: args._[1],
    };
};
