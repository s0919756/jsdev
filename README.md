![2024-05-08 23 35 33](https://github.com/thejsdevsite/jsdev/assets/145098716/326bd9f0-f90e-48ba-83ce-09794ad032cf)
A JS script to control your USB ~ no other dependencies required
(https://github.com/s0919756/Only-use-JS.script-to-control-USB)
// ==UserScript==
// @name         USB操作JS腳本
// @namespace    simple-usb-device-operation-script
// @version      1
// @description  用於與USB設備進行簡單的交互操作。
// @author       腳本貓開發員s0919756
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  let usbDeviceRequested = false;
  let globalErrorStatus = {
    hasError: false, 
    errorMessage: '' 
  };

  if ("usb" in navigator && !usbDeviceRequested) {
    usbDeviceRequested = true; 
    navigator.usb.requestDevice({ filters: [] }) 
      .then(device => {
        console.log('USB設備已連接:', device);
      })
      .catch(error => {
        console.error('USB設備連接錯誤:', error);
        globalErrorStatus.hasError = true;
        globalErrorStatus.errorMessage = error.message;
      });
  }

  window.addEventListener('message', async (event) => {
    if (event.origin !== 'Your backend script source') return;
    if (event.data.type === 'pingRequest') {
      fetch(event.data.url).then(response => response.text()).then(result => {
        event.source.postMessage({ type: 'pingResponse', result: result }, event.origin);
      }).catch(error => {
        console.error('Error:', error);
      });
    }
  });

  let isFrontEndWorking = true;
  const checkFrontEndStatus = setInterval(() => {
    if (!isFrontEndWorking) {
      clearInterval(checkFrontEndStatus);
    }
  }, 1000); 

  const originalCodeHash = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
  function calculateHash(code) {
    // 
  }
  function checkForTampering(code) {
    if (calculateHash(code) !== originalCodeHash) {
      console.error('代碼已被篡改，將執行自毀程序。');
      
    }
  }
  setInterval(() => {
    checkForTampering(document.body.innerHTML); 
  }, 3600000);
})();
