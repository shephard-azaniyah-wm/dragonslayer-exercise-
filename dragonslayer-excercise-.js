/**
 * Created by session1 on 9/28/15.
 */
slaying = 1;
youHit = Math.floor(Math.random()* 2);
damageThisRound = (Math.random()* 5 + 1);
totalDamage = 0
var slaying = 3;
while(slaying) {
    if (youHit) {
        console.log("You have have poked the dragon successfully! ");
        totalDamage += damageThisRound;
        if (totalDamage >= 9) {
            console.log("Congratulations young warrior you have slain the mighty beast!");
            slaying = 1;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("Gah, you have lost my friend. Will you take revenge?");
        console.log("You have missed your chance to poke the slithery feller!");
        slaying = Math.floor(Math.random()* 3);
    }

}