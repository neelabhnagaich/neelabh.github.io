class TypeWriter{

    constructor(txtElement,words,wait=3000){

        this.txtElement = txtElement;
        this.words = words;
        this.wait = parseInt(wait,10);
        this.txt = '';
        this.wordIndex = 0;
        this.type();
        this.isDeleting = false;



    
    }

    type(){

        if(this.wordIndex >2){
            this.wordIndex = 0;
        }

        const current = this.wordIndex;

        const fullText = this.words[current];

        if(this.isDeleting){

            this.txt = fullText.substring(0,this.txt.length-1);


        }
        else{

            this.txt = fullText.substring(0,this.txt.length+1);

        }
        let typespeed = 300;

        if(this.isDeleting) {
            typespeed /= 2;
          }




       document.querySelector(".txt-type").innerHTML=`<span>${this.txt}</span>`;

        if(!this.isDeleting && this.txt===fullText){

            this.isDeleting=true;
            typespeed = this.wait;


        }
        else if(this.isDeleting && this.txt===''){

            this.isDeleting=false;
            typespeed = 500;
            this.wordIndex++;

        }

        setTimeout(()=>this.type(),typespeed);






}
}



document.addEventListener("DOMContentLoaded",init);

function init(){
    const txtElement = document.querySelector(".txt-type");

    const words = JSON.parse(txtElement.getAttribute("data-attribute"));

    const wait  = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement,words,wait);

}