// === COMMON HEADER FOR ALL PAGES ===

function createHeader() {
  const headerHTML = `
    <header class="header">
      <nav class="nav">
        <div class="nav-container">
          <div class="nav-logo">
            <img
              src="./images/無題27_20250724154900.PNG"
              alt="VALIARK - 次世代の知性が、ビジネスを加速させる"
              class="logo"
            />
          </div>
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="index.html" class="nav-link" data-page="home">ホーム</a>
            </li>
            <li class="nav-item">
              <a href="about.html" class="nav-link" data-page="about">私たちについて</a>
            </li>
            <li class="nav-item">
              <a href="services.html" class="nav-link" data-page="services">事業内容</a>
            </li>
            <li class="nav-item">
              <a href="works.html" class="nav-link" data-page="works">実績紹介</a>
            </li>
            <li class="nav-item">
              <a href="contact.html" class="nav-link" data-page="contact">お問い合わせ</a>
            </li>
          </ul>
          <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  `;

  return headerHTML;
}

function initCommonHeader() {
  // ヘッダーを挿入
  const headerContainer = document.getElementById("header-container");
  if (headerContainer) {
    headerContainer.innerHTML = createHeader();
  } else {
    // header-containerが存在しない場合、bodyの最初に挿入
    document.body.insertAdjacentHTML("afterbegin", createHeader());
  }

  // 現在のページをアクティブにする
  setActiveNavLink();

  // ヘッダーの初期化（背景色を常に暗く設定）
  initHeaderStyling();
}

function setActiveNavLink() {
  // 現在のページのファイル名を取得
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");

    // ページに応じてactiveクラスを追加
    const href = link.getAttribute("href");
    if (
      ((currentPage === "index.html" || currentPage === "") &&
        href === "index.html") ||
      currentPage === href
    ) {
      link.classList.add("active");
    }
  });
}

function initHeaderStyling() {
  const header = document.querySelector(".header");
  if (header) {
    // 常に暗い背景色に設定
    header.style.backgroundColor = "rgba(20, 20, 20, 0.95)";
    header.style.boxShadow = "0 2px 20px rgba(255, 255, 255, 0.1)";

    // スクロール時の色変更を無効化
    window.addEventListener("scroll", function () {
      // 色を固定（変更しない）
      header.style.backgroundColor = "rgba(20, 20, 20, 0.95)";
      header.style.boxShadow = "0 2px 20px rgba(255, 255, 255, 0.1)";
    });
  }
}

// DOMが読み込まれたら共通ヘッダーを初期化
document.addEventListener("DOMContentLoaded", function () {
  initCommonHeader();
});
