const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    document.querySelector(".second_title").textContent = "[속보] 밥준서, 사실 동방에서 잠든채로 발견돼";
    document.querySelector(".second_body").textContent = "동방에서 과제하다 발견돼 아기사자 모두 큰 충격을..";
    document.querySelector('.second').style.backgroundColor='orange';
    const p = document.createElement('p');
        p.textContent="수정완료."
        const parent=document.getElementById("parent");
        body.appendChild(p)
});
