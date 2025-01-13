const question ='ゲーム機市場、最も売れたゲーム機は次の内どれ？';
const answers = [
'スーパーファミコン',
'プレステーション２',
'ニンテンドースイッチ',
'ニンテンドーＤＳ'
];
const correct = 'ニンテンドーＤＳ';

const $button = document.getElementsByTagName('button');
//const $button = document.getElementsByXPath('/html/body/div/div[2]/button[1]');
//document.getElementById('btn0').textContent = answers[0];
//document.getElementById('btn0').textContents = answers[0];


const buttonLength = $button.length;

const setupQuiz = () =>{
  document.getElementById('js-question').textContent= question;
  
  let buttonIndex = 0;
  while (buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}