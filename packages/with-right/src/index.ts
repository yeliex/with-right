export interface CopyContent {
    rich: string;
    plain: string;
}

export interface TransformInput extends CopyContent {
    copyright?: Options['copyright'];
}

export interface Options {
    preventDebug?: boolean;
    copyright?: string | string[];
    transformCopy?: (input: TransformInput) => CopyContent;
    onCopy?: (content: CopyContent, e: ClipboardEvent) => void;
    onDebug?: () => void;
    container?: HTMLElement;
}

class WithRight {
    static getRangeHtml(range: Range) {
        const div = window.document.createElement('div');
        div.appendChild(range.cloneContents());

        return div.innerHTML;
    }

    static getSelections(): undefined | [string, string] {
        if (!window.getSelection) {
            return;
        }

        const selected = window.getSelection();

        if (!selected || selected.rangeCount < 1) {
            return;
        }

        const range = selected.getRangeAt(0);

        if (range.collapsed) {
            return;
        }

        const text = range.toString().trim();

        if (!text) {
            return;
        }

        const html = WithRight.getRangeHtml(range);

        return [text, html];
    }

    static appendToText(text: string, copyright: Options['copyright']): string {
        if (!copyright) {
            return text;
        }

        return Array.isArray(copyright) ? `${text}\n${copyright.join('\n')}` : `${text}\n${copyright}`;
    }

    static appendToHtml(html: string, copyright: Options['copyright']): string {
        if (!copyright) {
            return html;
        }

        const container = window.document.createElement('div');
        container.innerHTML = html;

        const { children } = container;

        const copyrightElement = window.document.createElement('q');
        copyrightElement.innerHTML = Array.isArray(copyright) ? copyright.join(' ') : copyright;

        if (!children.length) {
            container.appendChild(copyrightElement);

            return container.outerHTML;
        }

        Array.from(children).forEach((element: HTMLElement) => {
            const text = element.innerText;

            if (text.length < 64) {
                return;
            }

            element.appendChild(copyrightElement.cloneNode(true));
        });

        return container.outerHTML;
    }

    private readonly options: Options;

    constructor(options: Options = {}) {
        const mergedOptions = this.options = {
            ...options,
        };

        if (!options.container) {
            mergedOptions.container = window.document.body;
        }

        this.initCopy();
        options.preventDebug && this.initDebug();
    }

    private get container(): HTMLElement {
        return this.options.container!;
    }

    private transformCopyRight(plain: string, rich: string): [string, string] {
        const { copyright, transformCopy } = this;

        if (transformCopy) {
            const res = transformCopy({
                rich,
                plain,
                copyright: copyright,
            });

            return [res.plain, res.rich];
        }

        if (!copyright) {
            return [plain, rich];
        }

        if (plain.length < 64) {
            return [plain, plain];
        }

        return [
            WithRight.appendToText(plain, copyright),
            WithRight.appendToHtml(rich, copyright),
        ];
    }

    private initCopy() {
        this.container.addEventListener('copy', this.handleCopy);
    }

    private handleCopy = (e: ClipboardEvent) => {
        const selections = WithRight.getSelections();

        if (!selections) {
            return;
        }

        const [plain, rich] = this.transformCopyRight(...selections);

        this.options.onCopy && this.options.onCopy({ plain, rich }, e);
        console.log(rich);
        if (e.defaultPrevented) {
            return;
        }

        const { clipboardData } = e;

        if (clipboardData && typeof clipboardData === 'object') {
            clipboardData.setData('text/html', `<meta charset="utf-8">${rich}`);
            clipboardData.setData('text/plain', plain);

            const plainData = clipboardData.getData('text/plain');
            if (plainData && plainData.length > 0) {
                e.preventDefault();
                return;
            }
        }

        const container = window.document.createElement('div');
        container.innerHTML = rich;
        const target = container.firstElementChild as HTMLDivElement;
        if (!target) {
            return;
        }
        target.style.position = 'fixed';
        target.style.left = '-100%';
        window.document.body.appendChild(target);

        const selection = window.getSelection()!;
        const originRange = selection.getRangeAt(0);
        selection.selectAllChildren(target);
        setTimeout(() => {
            window.document.body.removeChild(target);
            selection.removeAllRanges();
            selection.addRange(originRange);
        }, 50);
    };

    private debugTimeout?: NodeJS.Timer;

    private handleDebug() {
        this.options.onDebug && this.options.onDebug();
        (function () {
            return false;
        }['constructor']('debugger')['call']());
    }

    private initDebug() {
        if (this.options.preventDebug && !this.debugTimeout) {
            try {
                this.debugTimeout = setInterval(() => {
                    this.handleDebug && this.handleDebug();
                }, 50);
            } catch (e) {
            }

            return;
        }

        if (!this.options.preventDebug && this.debugTimeout) {
            window.clearInterval(this.debugTimeout);
            this.debugTimeout = undefined;
        }
    }

    get preventDebug() {
        return this.options.preventDebug;
    }

    set preventDebug(value: Options['preventDebug']) {
        this.options.preventDebug = value;
        this.initDebug();
    }

    get copyright() {
        return this.options.copyright;
    }

    set copyright(value: Options['copyright']) {
        this.options.copyright = value;
    }

    get transformCopy() {
        return this.options.transformCopy;
    }

    set transformCopy(value: Options['transformCopy']) {
        this.options.transformCopy = value;
    }
}

export default WithRight;
