/**
 * Created by FZPP_ on 29-06-2015.
 */


window.addEventListener("load",loadactivity);

    var count=0;
    function loadactivity(){
        document.getElementById('11').addEventListener("click",change);
        document.getElementById('12').addEventListener("click",change);
        document.getElementById('13').addEventListener("click",change);
        document.getElementById('21').addEventListener("click",change);
        document.getElementById('22').addEventListener("click",change);
        document.getElementById('23').addEventListener("click",change);
        document.getElementById('31').addEventListener("click",change);
        document.getElementById('32').addEventListener("click",change);
        document.getElementById('33').addEventListener("click",change);

        }

function change() {
    var image=document.getElementById(this.id);

    if(count==0 || count%2==0){


        if(image.src.match("white.jpg")){
            document.getElementById(this.id).src="cross.png";
            count++;
            check();
        }
    }
    else{
        if(image.src.match("white.jpg")){
            document.getElementById(this.id).src="circle.png";
            count++;
            check();
        }
    }
}

function check(){


    if(document.getElementById('11').src.match("cross.png")){
        if(document.getElementById('22').src.match("cross.png") && document.getElementById('33').src.match("cross.png")){
            alert("Cross Wins");
        }

        if(document.getElementById('21').src.match("cross.png") && document.getElementById('31').src.match("cross.png")){
            alert("Cross Wins");
        }

        if(document.getElementById('12').src.match("cross.png") && document.getElementById('13').src.match("cross.png")){
            alert("Cross Wins");
        }
    }

    if(document.getElementById('31').src.match("cross.png")){
        if(document.getElementById('22').src.match("cross.png") && document.getElementById('13').src.match("cross.png")){
            alert("Cross Wins");
        }

        if(document.getElementById('32').src.match("cross.png") && document.getElementById('33').src.match("cross.png")){
            alert("Cross Wins");
        }
    }

    if(document.getElementById('23').src.match("cross.png")){
        if(document.getElementById('13').src.match("cross.png") && document.getElementById('33').src.match("cross.png")){
            alert("Cross Wins");
        }

        if(document.getElementById('22').src.match("cross.png") && document.getElementById('21').src.match("cross.png")){
            alert("Cross Wins");
        }
    }

    if(document.getElementById('12').src.match("cross.png")){
        if(document.getElementById('22').src.match("cross.png") && document.getElementById('32').src.match("cross.png")){
            alert("Cross Wins");
        }
   }


    if(document.getElementById('11').src.match("circle.png")){
        if(document.getElementById('22').src.match("circle.png") && document.getElementById('33').src.match("circle.png")){
            alert("circle Wins");
        }

        if(document.getElementById('21').src.match("circle.png") && document.getElementById('31').src.match("circle.png")){
            alert("circle Wins");
        }

        if(document.getElementById('12').src.match("circle.png") && document.getElementById('13').src.match("circle.png")){
            alert("circle Wins");
        }
    }

    if(document.getElementById('31').src.match("circle.png")){
        if(document.getElementById('22').src.match("circle.png") && document.getElementById('13').src.match("circle.png")){
            alert("circle Wins");
        }

        if(document.getElementById('32').src.match("circle.png") && document.getElementById('33').src.match("circle.png")){
            alert("circle Wins");
        }
    }

    if(document.getElementById('23').src.match("circle.png")){
        if(document.getElementById('13').src.match("circle.png") && document.getElementById('33').src.match("circle.png")){
            alert("circle Wins");
        }

        if(document.getElementById('22').src.match("circle.png") && document.getElementById('21').src.match("circle.png")){
            alert("circle Wins");
        }
    }

    if(document.getElementById('12').src.match("circle.png")){
        if(document.getElementById('22').src.match("circle.png") && document.getElementById('32').src.match("circle.png")){
            alert("circle Wins");
        }
    }


}

