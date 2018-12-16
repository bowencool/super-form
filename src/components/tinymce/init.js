import zh_CN from './zh_CN.json';

export default () => new Promise((resolve, reject) => {
  if (window.tinymce) {
    resolve(window.tinymce);
  } else {
    const script = document.createElement('script');
    script.onload = () => {
      window.tinymce.addI18n('zh_CN', zh_CN);
      resolve(window.tinymce);
    };
    script.onerror = () => {
      reject(new Error('无法加载脚本'));
    };
    script.src = '/tinymce4.7.5/tinymce.min.js';
    document.head.appendChild(script);
  }
});
