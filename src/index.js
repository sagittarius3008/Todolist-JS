import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  // ボックスを初期化する
  document.getElementById("add-text").value = "";

  // divタグ生成
  const div = document.createElement("div");
  // クラスlist-rowを付与
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(divタグ=todo本文と完了、削除タグ)を完了リストから削除
    const completeTarget = completeButton.parentNode; //parentNodeでdivタグと中身を選択取得
    document.getElementById("complete-list").createElement(completeTarget);
  });

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(divタグ=todo本文と完了、削除タグ)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を入れる
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから引数の要素を削除、関数化
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target); //removeChildで削除
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
