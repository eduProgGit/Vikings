function Viking (name,health,strength){
	this.name=name;
	this.health=health;
	this.strength=strength;
}

function Saxon(health,strength){
	this.health=health;
	this.strength=strength;
}


Viking.prototype.hit = function(enemy){
	var vikingDamage=this.strength;
	enemy.health -= vikingDamage;
}
Saxon.prototype.hit = function(enemy){
	var saxonDamage=this.strength;
	enemy.health -= saxonDamage;
}

function Pit(viking1,viking2,turns){
	this.viking1 = viking1;
	this.viking2 = viking2;
	this.turns= turns;
}

function Battle(armyViking,armySaxon){
	this.armyViking=armyViking;
	this.armySaxon=armySaxon;
	this.turns=Math.floor(Math.random() * (8 - 5) + 5);
}
Battle.prototype.fight= function(){/*Yo de mñn el segundo bucle sobra con un while t vale ya que los saxon army no hay que recorrerlo ya que accedes a una posicion aleatoria */
	var saxonRandom;
	while(this.turns >0){
			
			for (var i = 0; i < this.armyViking.length; i++) {

			saxonRandom=Math.floor(Math.random()*this.armySaxon.length);	
			var enemySaxon=this.armySaxon[saxonRandom];
			var enemyViking=this.armyViking[i];

			
			enemyViking.hit(enemySaxon);
			if(this.armySaxon[saxonRandom].health<= 0){
					this.armySaxon.splice(saxonRandom,1);
					if(this.armySaxon.length < 0){
					 this.turns=0;
					 break;
					}

			}else{
				enemySaxon.hit(enemyViking);
			}

			if(this.armyViking[i].health <= 0 ){
					this.armyViking.splice(i,1);
					if(this.armyViking.length < 0){
					 this.turns=0;
					 break;
				}
			}
		}
		this.turns--;
	}

	this.winner=this.armyViking.length > this.armySaxon.length ? this.armyViking.name="Vikingos" : this.armySaxon.name="Saxons";
}

Battle.prototype.showWinner = function (){
	console.log("And the winner is: "+this.winner);
}

Pit.prototype.figth = function(){

	var minHealth = 1;
	while(this.turns>0 && this.viking1.health > minHealth && this.viking2.health > minHealth){
		
		this.viking1.hit(this.viking2);
		this.viking2.hit(this.viking1);
		this.turns--;
	}

	this.winner = this.viking1.health > this.viking2.health ? this.viking1 : this.viking2;

	
}

Pit.prototype.showWinner = function (){
	console.log("And the winner is: "+this.winner.name);
}

function generarViking(max,min){

	var viking;
	return viking=new Viking("Viking"+Math.floor(Math.random() * (max - min) + min),Math.floor(Math.random() * (max - min) + min),Math.floor(Math.random() * (max - min) + min));
	
}
function generarSaxon(max,min){

	var saxon;
	return saxon = new Saxon(Math.floor(Math.random() * (max - min) + min),Math.floor(Math.random() * (max - min) + min));

}
function generateArmyViking(numVik,max,min){
		var armyVikings= new Array();
		var viking;

		for (var i = 0; i < numVik; i++) {
			viking=new Viking("Viking"+Math.floor(Math.random() * (max - min) + min),Math.floor(Math.random() * (max - min) + min),Math.floor(Math.random() * (max - min) + min));
			armyVikings.push(viking);
		}
	
	return armyVikings;
}

function generateArmySaxon(numSax,max,min){
		var armySaxon= new Array();
		var saxon;

		for (var i = 0; i < numSax; i++) {
			saxon=new Saxon(Math.floor(Math.random() * (max - min) + min),Math.floor(Math.random() * (max - min) + min));
			armySaxon.push(saxon);
		}
	
	return armySaxon;
}


var v1= generarViking(100,10);
var v2= generarSaxon(50,10);
var pit = new Pit(v1,v2,2);
var armySaxon=generateArmySaxon(10,50,10);
var armyViking=generateArmyViking(15,100,50);
var battle= new Battle(armyViking,armySaxon);

var army = generateArmySaxon(1000,100,0);

/*var v1_vidaInicial=viking1.health;
	var v2_vidaInicial=viking2.health;
	for (var i = 0; i < turns; i++){
	

		
		console.log("El vikingo "+viking1.name+" tiene de salud :"+viking1.health);
		console.log("El vikingo "+viking1.name+" golpea a "+viking2.name);
		viking2.health=viking2.health-viking1.strength;


		if(viking2.health <= 0 && viking2.health < viking1.health){
			console.log("The winner is:"+viking1.name);
			viking2.health=0;
			console.log("La vida de "+viking2.name+" es: "+viking2.health);
			
			break;
		}
		
		console.log("El vikingo "+viking2.name+" golpea a "+viking1.name);
		viking1.health=viking1.health-viking2.strength;
		console.log("El vikingo "+viking2.name+" tiene de salud :"+viking2.health);
		
	}

	viking1.health = v1_vidaInicial;
	viking2.health=v2_vidaInicial;*/