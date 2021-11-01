import { initNestTemplate } from './commands/initNestTemplate';
import { Args } from './types';
import { parseArgumentsIntoOptions } from './utils/parseOptions.utils';

export const cli = async (args: Args) => {
    const options = parseArgumentsIntoOptions(args);

    if (options.init) {
        await initNestTemplate(options);
    }
};
