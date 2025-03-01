document.addEventListener('DOMContentLoaded', function () {
  const chatIframe = document.querySelector('.chat-iframe');

  chatIframe.addEventListener('load', function () {
    console.log('ChatBot loaded successfully.');
  });
});
