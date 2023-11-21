let arr_eng = ["banana", "apple", "watermelon" ];
let arr_vni = ["chuối", "táo", "dưa hấu"];

function trans() {
    let checkinput = document.getElementById("nhapTu").value;
    let index = -1;
    for (let i = 0; i < arr_eng.length; i++) {
        if (checkinput == arr_eng[i]){
            index = i;
        }
    }

    if (index>=0){
        document.getElementById("kq").innerText = arr_vni[index];
    } else {
        alert("khong tim thay")
    }


}