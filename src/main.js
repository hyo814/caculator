var numberClicked = false; 

function add (char) { //add를 통해 문자가 추가적으로 입력 됩니다.
        if(numberClicked == false) { 
            if(isNaN(char) == true) {
                
            } else {
                document.getElementById('display').value += char;
//display로 표현 될 예정 입니다.
            }
        } else {
            document.getElementById('display').value += char;
			//숫자 입력 이후로 기호도 입력 되는지에 따라 선택 클릭됩니다.
        }
 
        if(isNaN(char) == true) { 
            numberClicked = false;
        } else {
            numberClicked = true;
        }
    }

function caculate(){
	var display=document.getElementById('display'); 
	//표시한 값에 대한 값을
	var result=eval(display.value);
	document.getElementById('result').value=result;// caculate를 통해 결과 값을 표출 하라.
}


function reset(){
	document.getElementById('display').value="";//추후에 ac를 누르면 초기화를 만들기 위해 설치
	document.getElementById('result').value=""; //추후에 ac를 누르면 초기화를 만들기 위해 설치
}