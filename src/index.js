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

  // divタグの子要素に各要素を入れる
  div.appendChild(li);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
