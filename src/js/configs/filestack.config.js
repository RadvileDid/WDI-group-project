// set our API KEY
angular
  .module('vamApp')
  .config(FileStack);

FileStack.$inject = ['filepickerProvider'];
function FileStack(filepickerProvider) {
  filepickerProvider.setKey('AUCkYuCSDSayfSPwcEO64z');
}
