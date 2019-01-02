declare global {
    interface Document { pointerLockElement: any; }
}

document.pointerLockElement = document.pointerLockElement || {};