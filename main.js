// DOM操作でどっかの画像押されたよと反応モーダルでアラートだす
// OK押したら消すようにする

// 呼び出す
// イベントをつくる
//  アラート出す

const myElement = document.querySelector('.newsTit');
myElement.addEventListener("click", () => {
    alert("クリックすんなよ");
})

