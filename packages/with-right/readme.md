# with-right

copy, selection and right-click with ©copyright

# Installation

```bash
yarn add with-right
# OR
npm i with-right --save
```

# Usage

```typescript
import WithRight from 'with-right';

new WithRight({
    container: window.document.getElementById('main-content'),
    copyright: [
        'SOURCE: TEST',
        'LINK: https://mock.example/test ',
    ]
})
```

# API Reference

```typescript
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

declare class WithRight {
    constructor(options?: Options);
    get preventDebug(): Options['preventDebug'];
    set preventDebug(value: Options['preventDebug']);
    get copyright(): Options['copyright'];
    set copyright(value: Options['copyright']);
    get transformCopy(): Options['transformCopy'];
    set transformCopy(value: Options['transformCopy']);
}

export default WithRight;
```
