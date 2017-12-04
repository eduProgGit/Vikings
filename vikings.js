function Viking (name,health,strength){
	this.name = name;
	this.health = health;
	this.strength = strength;
}

Viking.prototype.hit = function(enemy){
	var vikingDamage=this.strength;
	enemy.health -= vikingDamage;
}

function Pit(viking1,viking2,turns){
	this.viking1 = viking1;
	this.viking2 = viking2;
	this.turns= turns;
}

Pit.prototype.figth = function(){

	var minHealth = 1;
	while(this.turns>0 && viking1.health > minHealth && viking2.health > minHealth){
		
		this.v1.hit(this.v2);//No es obligatorio el this
		this.v2.hit(this.v1);
		this.turns--;
	}
	
}

var v1= new Viking("Asdas",100,10);
var v2= new Viking("odor",99,11);
var pit = new Pit(v1,v2,2);
/*var v1_vidaInicial=viking1.health;
	var v2_vidaInicial=viking2.health;
	for (var i = 0; i < turns; i++){
	

		if(viking1.health <= 0 && viking1.health < viking2.health){
			console.log("The winner is:"+viking2.name);
			viking1.health=0;
			console.log("La vida de "+viking1.name+" es: "+viking1.health);
			
				break;
		}
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