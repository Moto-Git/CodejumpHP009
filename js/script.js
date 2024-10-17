// ハンバーガーメニューをクリックしたときにactiveクラスを付け外しする
// ハンバーガーメニューをクリックしたときの動作
document.getElementById('hamburger').addEventListener('click', function () {
    // ハンバーガーメニューのアニメーション
    this.classList.toggle('active');

    // 全画面メニューの表示・非表示を切り替え
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});
// ハンバーガーメニュー end

// スクロールイベント
// スクロールイベントを監視
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 要素が表示領域に入ったらクラスを追加してスライドイン
            entry.target.classList.add('show');

            // 10秒後にクラスを保持したまま（何もしない）
            setTimeout(() => {
                // その後、元に戻るように処理
                entry.target.isInView = true; // フラグで状態を保持
            }, 
            // 10000 // 10秒待つ
        ); 
        } else {
            // 要素が表示領域から外れた場合
            if (entry.target.isInView) {
                // 10秒が経過してから、元に戻す処理
                setTimeout(() => {
                    entry.target.classList.remove('show');
                    entry.target.isInView = false; // 状態をリセット
                }, 0); // 即時に戻る
            }
        }
    });
});

// .slide-in を自分の好きな文字列に変更してもOK
// .slide-in に反応して動くコードとなっている
const slideInElements = document.querySelectorAll('.slide_in_left, .slide_in_right');
slideInElements.forEach(el => {
    el.isInView = false; // 状態フラグ初期化
    observer.observe(el);
});
