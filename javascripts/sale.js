const productElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

// 商品情報をIDに基づいて管理
const products = {
  1: { name: "オリジナルブレンド200g", price: 500 },
  2: { name: "オリジナルブレンド500g", price: 900 },
  3: { name: "スペシャルブレンド200g", price: 700 },
  4: { name: "スペシャルブレンド500g", price: 1200 }
};

function add() {
  const productId = parseInt(productElement.value, 10); // 商品ID
  const number = parseInt(numberElement.value, 10);     // 数量

  // バリデーション: 商品IDと数量が有効かを確認
  if (isNaN(productId) || isNaN(number) || productId <= 0 || number <= 0 || !products[productId]) {
    window.alert("正しい商品と数量を選択してください。");
    return;
  }

  // 選択された商品の情報を取得
  const selectedProduct = products[productId];

  // 購入情報を保存
  let purchase = {
    name: selectedProduct.name,
    price: selectedProduct.price,
    number: number,
  };
  purchases.push(purchase);

  // 追加した商品を表示
  window.alert(`${purchase.name} を ${purchase.number} 個追加しました。`);

  // フィールドをクリア
  productElement.value = "0";
  numberElement.value = "";
}

function calc() {
  let sum = 0;

  // 購入リストが空でないか確認
  if (purchases.length === 0) {
    window.alert("購入リストが空です。アイテムを追加してください。");
    return;
  }

  // 合計金額を計算
  for (let i = 0; i < purchases.length; i++) {
    sum += purchases[i].price * purchases[i].number;
  }

  window.alert(`合計金額は ${sum} 円です。`);

  // リセット処理（カートを空にする）
  purchases = [];
}
