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
}

function A3_1(){
    let ans = document.getElementById("Answer31");

    if (ans.style.visibility=="hidden"){
        ans.style.visibility="visible";
    }else{
        ans.style.visibility="visible";
    }
}