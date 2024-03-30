document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here'
    var x=["Scam","Mirzapur","Ishq"]
    document.getElementById(x[0]).addEventListener('click',function(){
        document.getElementById('popup').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
        console.log('clicked');
        PopUp();
    });
    document.getElementById(x[1]).addEventListener('click',function(){
        document.getElementById('popup2').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
        console.log('clicked');
        PopUp2();
    });
    document.getElementById(x[2]).addEventListener('click',function(){
        document.getElementById('popup3').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
        console.log('clicked');
        PopUp3();
    });
    document.getElementById('viewAll').addEventListener('click',()=>{
        alert(`
        Don't Click 😒😒😒😒! 
        I am just Practicing 😒.
        Visit official website to know more about it.`);
    })

    
  });
  function PopUp(){
    document.getElementById('close-1').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
      });
    document.getElementById('overlay').addEventListener('click',function(){
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        console.log("clciked");
    });
    }
    function PopUp2(){
        document.getElementById('close-2').addEventListener('click',function(){
            document.getElementById('popup2').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
          });
        document.getElementById('overlay').addEventListener('click',function(){
            document.getElementById('popup2').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
            console.log("clciked");
        });
    }
    function PopUp3(){
        document.getElementById('close-3').addEventListener('click',function(){
            document.getElementById('popup3').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
          });
        document.getElementById('overlay').addEventListener('click',function(){
            document.getElementById('popup3').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
            console.log("clciked");
        });
    }

  
