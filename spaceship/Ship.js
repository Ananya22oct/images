class Ship{
    constructor(x){
      this.x=x;
      this.y=350;
      this.width=20;
      this.height=30;
      this.image=loadImage("images/spaceship3.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,20,30);
}

   
   

}