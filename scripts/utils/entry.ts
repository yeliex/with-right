import { glob } from 'glob';
import { resolve, relative, dirname } from 'path';
import { promisify } from 'util';

export type Entries = Record<string, string[]>;

export const getExamples = async (): Promise<Entries> => {
    const CWD = resolve(__dirname, '../..');

    const list = await promisify(glob)('examples/**/index.ts', {
        cwd: CWD,
        root: CWD,
        absolute: true,
    });

    return list.reduce((total: Entries, absolute) => {
        const path = relative(CWD, absolute);

        const name = dirname(path);

        total[name] = [resolve(path)];

        return total;
    }, {});
};

export const getEntries = async (cwd: string): Promise<Entries> => {
    return {
        index: [resolve(cwd, 'src/index.ts')],
    };
};
