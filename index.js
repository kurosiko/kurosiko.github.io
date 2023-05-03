window.onload = function(){
    return TEST();
}
const imgs = [
    "https://images.unsplash.com/photo-1677868902699-0c5fb02d85ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1682687218608-5e2522b04673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
    "https://images.unsplash.com/photo-1682918917006-e78e1dab7dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1682603812564-88b0a2896682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1683002668970-1a63fc4c55ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1683061748664-750263c93c26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1682849066928-8a9af5f892be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1682961941145-e73336a53bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ]
let count = -1;
function TEST(){
    count++
    if (count > imgs.length - 1) count = 0;
    cover.src = imgs[count]
    console.log(count)
    setTimeout("TEST()",4000)
}
var element = document.getElementById("cover");
element.addEventListener("mousemove", function(e) {
var rect = element.getBoundingClientRect(); // 要素の位置とサイズを取得
var x = e.clientX - (rect.left+rect.width); // x座標を計算
var y = e.clientY - (rect.top+rect.height); // y座標を計算
var heading = document.getElementById("test"); // h1要素を取
var heading2 = document.getElementById("test2"); // h1要素を取得
relativeX = e.clientX-rect.left-((rect.right-rect.left)/2);
relativeY = e.clientY-rect.top-((rect.bottom-rect.top)/2);
if (relativeX >= 100) relativeX = 100;
if (relativeX <= -100) relativeX = -100;
if (relativeY >= 100) relativeY = 100;
if (relativeY <= -100) relativeY = -100;
let moveX = relativeX*-0.1
let moveY = relativeY*-0.1
element.style.left = `${moveX}px`
element.style.top = `${moveY}px`
heading.textContent =`X:${Math.round(relativeX)}`
heading2.textContent = `Y:${Math.round(relativeY)}`;
});