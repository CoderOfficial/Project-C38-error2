class AddFood{
constructor(){

}
display(){
    var addFood=createButton("Add Food");
    addFood.position(500,125);

    if(addFood.mousePressed(function(){
      foods=foods+1;
      gameState=2;
      database.ref('/').update({'gameState':gameState});
    }));

}

}