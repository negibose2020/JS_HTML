function creatQuestion_Multi3_1(){
    let numA = Math.floor(Math.random()*899)+101 ;
    let numB = Math.floor(Math.random()*8)+2 ;
    let question_Multi3_1 = numA + "×" + numB + "＝";
    let answer_Multi3_1 = numA * numB ;
    return [question_Multi3_1 ,answer_Multi3_1];
}

function M3_1(){
    let QM31 = creatQuestion_Multi3_1();
    let QM31_Q = QM31[0]
    let QM31_A = QM31[1]
    document.getElementById("Question31").innerHTML = QM31_Q ;
    document.getElementById("Answer31").innerHTML = QM31_A ;
    document.getElementById("Answer31").style.visibility="hidden"
    document.getElementById("trueOrFalse").innerHTML=""
    document.getElementById("yourAnswer").value=""

}

function A3_1(){
    let ans = document.getElementById("Answer31");
    let ansValue = document.getElementById("Answer31").textContent;
    let yourAns= document.getElementById("yourAnswer").value;
    
    console.log(ans)
    console.log(yourAns)
    console.log(ansValue==yourAns)

    if (ansValue == yourAns){
        document.getElementById("trueOrFalse").innerHTML = "正解です。"
        if (ans.style.visibility=="hidden"){
            ans.style.visibility="visible";
        }else{
        // pass
        }    
    }else{
        document.getElementById("trueOrFalse").innerHTML = "もう一回チャレンジ！"
        if (ans.style.visibility=="visible"){
            ans.style.visibility="hidden";
        }else{
        // pass
        }
    }
}