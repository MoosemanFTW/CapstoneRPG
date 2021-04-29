var readlineSync = require('readline-sync');

let name = readlineSync.question('please enter your name: ');

readlineSync.question('Welcome ' + name + ' to Terminal Land simulator! Please press Enter to begin.');

const enemys = ['Barbarian', 'Fighter', 'Necromancer', 'Wizard'];
const items = ['Long Sword', 'Health Potion', 'Great Shield', 'Nice Boots'];
var loot = [];
let playerHealth = 50;
const options = ['Walk', 'Exit', 'Print'];
let pickUp = items[Math.floor(Math.random()*items.lenght)];

function game(){
    const attackPower = Math.floor(Math.random() * 11 + 1);
    const enemy = enemys[Math.floor(Math.random() * enemys.lenght)];
    let enemyHealth = 50;
    const enemyPower = Math.floor(Math.random()* 11);

    const index = readlineSync.keyInSelect(options, 'What would you like to do next Adventurer?');

    if(options[index] == 'Exit'){
        return playerHealth = 0;
    }
    else if(options[index] == 'Print'){
        console.log(name + ':\n' + playerHealth + '\nInventory: ' + pickUp);
    }
    else if(options[index] === 'Walk'){
        let Key = Math.random();
        if(Key <= .3){
            console.log('Walking...');
        } else if(Key >= .3){
            console.log('You have been ATTACKED by ' + enemy);
        
            while(enemyHealth >= 0 && playerHealth >= 0){

                const choice = readlineSync.question('What do you want to do? Enter "r" to try to escape or "a" to attack: ');

                switch (choice){
                    case 'r':
                        let run = Math.random();
                        if(run > .5){
                            console.log('You tried to run away but the ' + enemy + ' hits you for: ' + enemyPower + ' damage and your escape fails');
                        } else {
                            console.log('You get away safely!');
                            break;
                        }

                    case 'a':
                        enemyHealth -= attackPower;
                        console.log('You hit the enemy for: ' + attackPower + ' Damage!');

                        playerHealth -= enemyPower;
                        console.log('The ' + enemy + ' attacks you back for: ' + enemyPower + ' Damage');

                        if(enemyHealth <= 0){
                            console.log('You have defeated the ' + enemy + '\nYou loot: ' + pickUp);
                            let tresure = Math.random();
                            if(tresure <= .5){
                                loot.push(pickUp);
                            }
                            } else if(playerHealth <= 0){
                                console.log('The ' + enemy + ' has killed you. Your great adventurs will not be forgoten');
                            }
                    }
                }
            }
        }
}




while(playerHealth > 0){
    userRestore = function(){
        userActive = true;
        playerHealth = 50;
    };
    userRestore();
    game();
}