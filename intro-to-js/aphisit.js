function askMyName() {
  const name = prompt("Enter your name"); // เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp

  if (name != null) { // เป็นการเช็คว่าตัวแปร name ไม่ได้มีค่าเป็น null(ว่างเปล่า) ถ้าเงื่อนไขตรงให้ทำงานคำสั่งใน {} (ปีกกา)
    document.getElementById("name").innerHTML = "My name is " + name;
    // document.getElementById("name") ทำการเรียกหา Element ที่มี Id ที่ชื่อว่า name
    // .innerHTML ประมาณว่าเรียกใช้ ตัวจำพวก HTML ของ Element ที่เราเรียก
    // = "My name is " + name; ก็จะเป็นการ Set ค่าใน Element ของเราให้มีค่าเป็น "My name is " + name (โดย name คือตัวแปรที่เรากำหนดไว้ด้านบน) 
  }
}

function helloWorld() {
  const h1message = document.getElementById("name").innerText
  //document.getElementById("name").innerText เช่นเดียวกับด้านบน แต่ .innerText ก็จะเป็นการดึง Text ของ Element
  //เราทำการดึง Text ของ Element มาไว้ที่ตัวแปร h1message
  alert(h1message + " (บทจะมีก็มีไม่ขาด บทจะขาดสักบาทก็ไม่มี)"); // ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
  //ทำการ Alert Box โดยจะมีข้อความตามในวงเล็บ โดยนำ ตัวแปร h1message + String คำคม
}
