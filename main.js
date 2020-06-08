function text(){
    
    var word = document.getElementById("box").value;
    console.log(word);
    let len = word.length;
    console.log("Length of word :"+len);
    var new_word = new Array(len);
    var ano = "";
    var i;
    for(i = 0; i < len;i++){
        console.log(word.charAt(i));
        if(word.charAt(i) == 'Q' || word.charAt(i) == 'q'){
            new_word[i] = '1';
        }
        else if(word.charAt(i) == 'W' || word.charAt(i) == 'w'){
            new_word[i] = '2';
        }
        else if(word.charAt(i) == 'E' || word.charAt(i) == 'e'){
            new_word[i] = '3';
        }
        else if(word.charAt(i) == 'R' || word.charAt(i) == 'r'){
            new_word[i] = '4';
        }
        else if(word.charAt(i) == 'T' || word.charAt(i) == 't'){
            new_word[i] = '5';
        }
        else if(word.charAt(i) == 'Y' || word.charAt(i) == 'y'){
            new_word[i] = '6';
        }
        else if(word.charAt(i) == 'U' || word.charAt(i) == 'u'){
            new_word[i] = '7';
        }
        else if(word.charAt(i) == 'I' || word.charAt(i) == 'i'){
            new_word[i] = '8';
        }
        else if(word.charAt(i) == 'O' || word.charAt(i) == 'o'){
            new_word[i] = '9';
        }
        else if(word.charAt(i) == 'P' || word.charAt(i) == 'p'){
            new_word[i] = '0';
        }
        else if(word.charAt(i) == 'A' || word.charAt(i) == 'a'){
            new_word[i] = '-';
        }
        else if(word.charAt(i) == 'S' || word.charAt(i) == 's'){
            new_word[i] = '/';
        }
        else if(word.charAt(i) == 'D' || word.charAt(i) == 'd'){
            new_word[i] = ':';
        }
        else if(word.charAt(i) == 'F' || word.charAt(i) == 'f'){
            new_word[i] = ';';
        }
        else if(word.charAt(i) == 'G' || word.charAt(i) == 'g'){
            new_word[i] = '(';
        }
        else if(word.charAt(i) == 'H' || word.charAt(i) == 'h'){
            new_word[i] = ')';
        }
        else if(word.charAt(i) == 'J' || word.charAt(i) == 'j'){
            new_word[i] = '$';
        }
        else if(word.charAt(i) == 'K' || word.charAt(i) == 'k'){
            new_word[i] = '@';
        }
        else if(word.charAt(i) == 'L' || word.charAt(i) == 'l'){
            new_word[i] = ']';
        }
        else if(word.charAt(i) == 'Z' || word.charAt(i) == 'z'){
            new_word[i] = '}';
        }
        else if(word.charAt(i) == 'X' || word.charAt(i) == 'x'){
            new_word[i] = ',';
        }
        else if(word.charAt(i) == 'C' || word.charAt(i) == 'c'){
            new_word[i] = '?';
        }
        else if(word.charAt(i) == 'V' || word.charAt(i) == 'v'){
            new_word[i] = '!';
        }
        else if(word.charAt(i) == 'B' || word.charAt(i) == 'b'){
            new_word[i] = '[';
        }
        else if(word.charAt(i) == 'N' || word.charAt(i) == 'n'){
            new_word[i] = '#';
        }
        else if(word.charAt(i) == 'M' || word.charAt(i) == 'm'){
            new_word[i] = '%';
        }
        else{
            new_word[i] = ' ';
        }
        
        

        
    } 
    

    for(i=0;i<len;i++){
        ano +=new_word[i];
    }
    document.getElementById("ans").innerHTML = ano;+"<br>"



    
}
console.log("Js runing");
function textde(){
    
    var word = document.getElementById("box").value;
    console.log(word);
    let len = word.length;
    console.log("Length of word :"+len);
    var new_word = new Array(len);
    var ano = "";
    var i;
    for(i = 0; i < len;i++){
        console.log(word.charAt(i));
        if(word.charAt(i) == '1'){
            new_word[i] = 'q';
        }
        else if(word.charAt(i) == '2'){
            new_word[i] = 'w';
        }
        else if(word.charAt(i) == '3'){
            new_word[i] = 'e';
        }
        else if(word.charAt(i) == 'r'){
            new_word[i] = '4';
        }
        else if(word.charAt(i) == '5'){
            new_word[i] = 't';
        }
        else if(word.charAt(i) == '6'){
            new_word[i] = 'y';
        }
        else if(word.charAt(i) == '7'){
            new_word[i] = 'u';
        }
        else if(word.charAt(i) == '8'){
            new_word[i] = 'i';
        }
        else if(word.charAt(i) == '9'){
            new_word[i] = 'o';
        }
        else if(word.charAt(i) == '0'){
            new_word[i] = 'p';
        }
        else if(word.charAt(i) == '-'){
            new_word[i] = 'a';
        }
        else if(word.charAt(i) == '/'){
            new_word[i] = 's';
        }
        else if(word.charAt(i) == ':'){
            new_word[i] = 'd';
        }
        else if(word.charAt(i) == ';'){
            new_word[i] = 'f';
        }
        else if(word.charAt(i) == '('){
            new_word[i] = 'g';
        }
        else if(word.charAt(i) == '('){
            new_word[i] = 'h';
        }
        else if(word.charAt(i) == '$'){
            new_word[i] = 'j';
        }
        else if(word.charAt(i) == '@'){
            new_word[i] = 'k';
        }
        else if(word.charAt(i) == ']'){
            new_word[i] = 'l';
        }
        else if(word.charAt(i) == '}'){
            new_word[i] = 'z';
        }
        else if(word.charAt(i) == ','){
            new_word[i] = 'x';
        }
        else if(word.charAt(i) == '?'){
            new_word[i] = 'c';
        }
        else if(word.charAt(i) == '!'){
            new_word[i] = 'v';
        }
        else if(word.charAt(i) == '['){
            new_word[i] = 'b';
        }
        else if(word.charAt(i) == '#'){
            new_word[i] = 'n';
        }
        else if(word.charAt(i) == '%'){
            new_word[i] = 'm';
        }
        else{
            new_word[i] = ' ';
        }
        
        

        
    } 
    

    for(i=0;i<len;i++){
        ano +=new_word[i];
    }
    document.getElementById("ans").innerHTML = ano;+"<br>"



    
}

