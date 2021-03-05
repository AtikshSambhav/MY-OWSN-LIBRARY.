   
//Function definition-parameters
function istouching(obj1,obj2){
    // Collision detction- The algorithim states that whenever two objects collide the distance 
   // between them will be (equal to or) less than sum of half of their width or height.
 
   if(obj1.x-obj2.x < obj1.width/2 +obj2.width/2 &&
     obj2.x-obj1.x < obj1.width/2 + obj2.width/2 &&
     obj2.y-obj1.y < obj1.height/2+ obj2.height/2&&
     obj1.y-obj2.y < obj1.height/2+ obj2.height/2){
 
   return true;
  }
  else{
   return false;
  }
 
 }

 //Function BouceOff
 function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}