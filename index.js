
// promise練習
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

promise
  .then(() => console.log('完了'))
  .then(() => console.log('完了2回目'))
  .catch(() => console.log('問題発生'));

console.log(promise);
// ---------------------------------------------------

// fetch練習
const url = 'https://jsonplaceholder.typicode.com/posts/';
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));

// ------------------------------------------------

/* asyncの練習
- async Promiseを返却する関数の宣言を行う
- async == Promiseのようなもの?
- await Promiseを返却する関数の非同期処理が完了するまで待つ
*/

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/');
  const json = await response.json(); // .jsonでjsonfileを取ってくる
  console.log(json);
  for (const user of json) {
    console.log(`I'm ${user.name}, email address ${user.email} `);
  }
}

fetchUsers();

fetch('https://jsonplaceholder.typicode.com/posts/').then(
  (response) => console.log(response) // responseだけとってくると通信がちゃんと行われているかがわかる！
);
