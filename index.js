const images = [
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
function ImageC(){
    count++
    if (count > images.length - 1) count = 0;
    cover.src = images[count]
    setTimeout("ImageC()",4000)
}
let fream = document.getElementById("cover");
fream.addEventListener("mousemove", function(e) {
let rect = fream.getBoundingClientRect(); // 要素の位置とサイズを取得
let textX = document.getElementById("testX"); // h1要素を取
let textY = document.getElementById("testY"); // h1要素を取得
relativeX = e.clientX-rect.left-((rect.right-rect.left)/2);
relativeY = e.clientY-rect.top-((rect.bottom-rect.top)/2);
if (relativeX >= 100) relativeX = 100;
if (relativeX <= -100) relativeX = -100;
if (relativeY >= 100) relativeY = 100;
if (relativeY <= -100) relativeY = -100;
let moveX = relativeX*-0.1
let moveY = relativeY*-0.1
fream.style.left = `${moveX}px`
fream.style.top = `${moveY}px`
textX.textContent =`X:${Math.round(relativeX)}`
textY.textContent = `Y:${Math.round(relativeY)}`;
});

window.onload = function(){
    return ImageC()
}