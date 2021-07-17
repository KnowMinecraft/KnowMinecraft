var twoSolved = "2.js";
function wrong() {
    location.href = "wrong.html";
}
function done() {
    var random = ~~(Math.random() * facts.length);
    var showfact = prompt("Minecraft fact", facts[random]);
    if (showfact == true) {
        location.href = '3.html';
    } else {
        location.href = '3.html';
    }
}
function quiz() {
var q = confirm("Minecraft is made by Mojang.");
if (q == true) {
    var q = confirm("There is a iron pickaxe in Minecraft.");
    if (q == true) {
        var q = confirm('Can we kill spider with hands?');
        if (q == false) {
            wrong()
        } else {
            var q = confirm("There are torches in Minecraft");
            if (q == false) {
                wrong()
            } else {
                var q = confirm("One of the crops in Minecraft is Wheat.");
                if (q == false) {
                    wrong()
                } else {
                    var q = confirm("There are 3 levels of difficulty in Minecraft.");
                    if (q == true) {
                        wrong()
                    } else {
                        var q = confirm("Minecraft haves water");
                        if (q == false) {
                            wrong()
                        } else {
                            var q = confirm('Breaking stone with normal pickaxe gives us cobblestone.');
                            if (q == false) {
                                wrong()
                            } else {
                                var q = confirm('We cannot hold a map in our off-hand.');
                                if (q == true) {
                                    wrong()
                                } else {
                                    var q = confirm('There are shields in Minecraft.');
                                    if (q == false) {
                                        wrong()
                                    } else {
                                        var q = confirm('No one can jump over fence - even Steve.');
                                        if (q == false) {
                                            wrong()
                                        } else {
                                            var q = confirm('We can make chainmail armor ourself.');
                                            if (q == true) {
                                                wrong()
                                            } else {
                                                done()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        wrong()
    }
} else {
    wrong()
}
}