function wrong() {
    location.href = 'wrong.html';
    // Take the user to wrong.html when the answer is incorrect.
}
function done() {
    // Show a fact when this page is done
    var random = ~~(Math.random() * facts.length);
    var showfact = prompt("Minecraft fact", facts[random]);
    if (showfact == true || false) {
        location.href = '2.html';
    }
}
function quiz() {
    // Create a question
var q1 = "Is Minecraft block game?";
// Show the question to user
var q1show = confirm(q1);
// Confirm if user's answer is correct
if (q1show == true) {
    // Answer is correct
    // Show next question
var q2 = "Is birch a type of wood in Minecraft";
var q2show = confirm(q2);
if (q2show == true) {
    var q3 = "Can we break wood with hands in Minecraft?"
    var q3show = confirm(q3);
    if (q3show == true) {
        q4show = confirm("Can we kill a mob with hands?");
        if (q4show == true) {
            q5show = confirm("Minecraft haves tigers.")
            if (q5show == true) {
                wrong()
            } else {
                var q = confirm("We can collect stone broken with hands.");
                if (q == true) {
                    wrong()
                } else {
                var q = confirm("We can create stone tools in Minecraft.");
                 if (q == true) {
                     var q = confirm("We can create stone tools without sticks.");
                     if (q == true) {
                         wrong()
                     } else {
                        var q = confirm("There is a coal ore in Minecraft.");
                        if (q == true) {
                          var q = confirm("Minecraft does not have any villagers or villages.");
                          if (q == true) {
                              wrong()
                          } else {
                              var q = confirm("We can collect iron ores broken with stone pickaxe.");
                              if (q == true) {
                                  var q = confirm("The default character of Minecraft is Steve.");
                                  if (q == true) {
                                      var q = confirm ("Minecraft is a High-Graphics game.");
                                      if (q == true) {
                                          wrong()
                                      } else {
                                          var q = confirm("Minecraft haves a desert biome.");
                                          if (q == true) {
                                              var q = confirm("Minecraft haves a badlands/mesa biome.");
                                              if (q == true) {
                                                  var q = confirm("Minecraft can be played in multiplayer mode.");
                                                  if (q == true) {
                                                      var q = confirm("There are lots of colors of wool in Minecraft");
                                                      if (q == true) {
                                                          var q = confirm("We can cook food in Minecraft");
                                                          if (q == true) {
                                                              var q = confirm("Minecraft haves only these tools: Pickaxe, Axe, Sword, Hoe.");
                                                              if (q == true) {
                                                              wrong()
                                                            } else {
                                                                var q = confirm("Hunting a sheep in Minecraft also drops wool.");
                                                                if (q == true) {
                                                                    var q = confirm("Making a crafting table also requires stone.");
                                                                    if (q == true) {
                                                                        wrong()
                                                                    } else {
                                                                        done()
                                                                    }
                                                                } else {
                                                                    wrong()
                                                                }
                                                            }
                                                          } else {
                                                              wrong()
                                                          }
                                                      } else {
                                                          wrong()
                                                      }
                                                  } else {
                                                      wrong()
                                                  }     
                                              } else {
                                                  wrong()
                                              }
                                          } else {
                                              wrong()
                                          }
                                      }
                                  } else {
                                      wrong()
                                  }
                              } else {
                                  wrong()
                              }
                          }
                        } else {
                            wrong()
                        }
                     }
                 } else {
                     wrong()
                 }  
                }
            }
        } else {
            wrong()
        }
    }
} else {
wrong();
}
} else {
wrong();
}
}
