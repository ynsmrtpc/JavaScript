export function styleTag() {
    let link = document.createElement('link');

    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = './style.css';
    document.getElementsByTagName('HEAD')[0].appendChild(link);
}