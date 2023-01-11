const DELAY = 3000;
const robotCheckboxElement = document.querySelector('#robot-checkbox');
const arrayEmoji = ['comment_hi', 'comment_joke'];
var isLoop = false;

(function loop() {
  setTimeout(() => {
    if (isLoop){
      let strName = getNameMemberInData();
      let strComment = getCommentMemberInData();
      let strImgSrc = 'asset/images/avatars/' + getImageMemberInData()
      sendContent(strImgSrc, strName, strComment);
    }
    loop();
 }, DELAY);
})();

robotCheckboxElement.addEventListener('click', () => {
  isLoop = !isLoop;
});

function getCommentMemberInData() {
  let strEmoji = arrayEmoji[getRndInteger(0, arrayEmoji.length - 1)];
  let numJoke = getRndInteger(0, DATA_COMMENT[strEmoji].length - 1);
  return DATA_COMMENT[strEmoji][numJoke];
}

function getNameMemberInData() {
  let numName = getRndInteger(0, DATA_COMMENT['name'].length - 1);
  return DATA_COMMENT['name'][numName];
}

function getImageMemberInData() {
  let numImgSrc = getRndInteger(0, DATA_COMMENT['imgSrc'].length - 1);
  return DATA_COMMENT['imgSrc'][numImgSrc];
}