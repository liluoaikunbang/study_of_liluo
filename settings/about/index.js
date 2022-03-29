const editBtn = document.querySelector(".edit")
const statement = document.querySelector(".statement .title")
const detail = document.querySelector(".statement .detail")
const updateTime = document.querySelector("#updateTime")

console.log(updateTime);
updateTime.innerHTML=`2022-3-9`
editBtn.onclick = function () {
  if (document.designMode === "off") {
    document.designMode = "on"
    this.className = "btn2 onEdit"
    this.innerText = "退出编辑"
  } else {
    document.designMode = "off"
    this.className = "btn2 edit"
    this.innerText = "编辑"
  }

}

// statement.onclick = function () {
//   detail.classList.toggle('hidden');
// }

// import htmlToPdf from './utils/htmlToPdf'
// console.log(htmlToPdf);