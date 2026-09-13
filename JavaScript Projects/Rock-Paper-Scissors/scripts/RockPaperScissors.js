let score=JSON.parse(localStorage.getItem('score'));
     if(!score){
          score={
               wins:0,
               losses:0,
               ties:0
          };
     }
     updateScore();

     function updateScore(){
       document.querySelector('.js-score').innerHTML=`wins : ${score.wins} , losses: ${score.losses} ties: ${score.ties} `;
     }

     
     function pickComputerMove(){
          const randomNumber=Math.random();
          let computerMove='';
          if(randomNumber>=0 && randomNumber < 1/3){
                    computerMove='rock';
          }
          else if(randomNumber>=1/3 && randomNumber < 2/3){
          computerMove='paper';
          }
          else{
          computerMove='scissors';
          }
          return computerMove;
     }

     function matching(playerMove){
          let result='';
          const computerMove=pickComputerMove();
          console.log(computerMove);
          
          if(playerMove==='rock'){
               if(computerMove==='rock'){
                    result='Tie.';
               }
               else if(computerMove==='paper'){
               result='You Lose.';
               }
               else{
               result='You Win.'
               }


          }


          else if(playerMove==='paper'){
               if(computerMove==='rock'){
                    result='You Win.';
               }
               else if(computerMove==='paper'){
               result='Tie.';
               }
               else{
               result='You Lose.'
               }
          }
          else{
               if(computerMove==='scissors'){
                    result='Tie.';
               }
               else if(computerMove==='paper'){
               result='You Win.';
               }
               else{
               result='You Lose.'
               }
          }


          if(result==='You Win.'){
               score.wins+=1;
          }
          else if(result==='You Lose.'){
               score.losses+=1;
          }
          else{
               score.ties+=1;
          }


          localStorage.setItem('score',JSON.stringify(score));


          document.querySelector('.js-result').innerHTML=`${result}`;

          document.querySelector('.js-moves').innerHTML=`You 
              <img src="images/${playerMove}-emoji.png" class="move-icon">
              <img src="images/${computerMove}-emoji.png" class="move-icon">
              Computer
          `;

         updateScore();
        }
