import { NecCursor, Shape } from './classes/NecCursor';

const cursors = document.querySelectorAll('[data-cursor-object]');

for (const cursor of cursors) {
    if (!(cursor instanceof HTMLElement)) continue;
    const cursorHTML = cursor as HTMLElement;
    const cursorObj = new NecCursor(
        cursorHTML,
        cursorHTML.dataset.cursorShape as Shape,
        Number(cursorHTML.dataset.cursorSize)
    );
    cursorObj.setStyles();
}
