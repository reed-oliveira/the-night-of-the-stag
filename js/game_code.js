// First Menu
var btn_play, btn_exit, btn_new_game, menu_btn_play, menu_btn_exit, menu_btn_new_game;
// Menu In game
var InGame_menu_val, map_mission_goal, achiv_stag, isPlayingMinigame;
// blackout, prologue, first_cutscene
var blackout;
var timer_prologue, timer_prologue_cont;
var timer_first_cutscene, timer_first_cutscene_cont;
var timer_first_cutscene_2;
var timer_final_cutscene, timer_final_cutscene_cont;
var timer_final_cutscene_2;
// character
var character, character_movement_val, life_stage, character_moves_left, character_moves_right, character_moves_up_down,
    Up_Down_val, Fly_val, character_moves_fly;
// callie
var callie, callie_house, callie_IdleLeft_vel, timer_callie_IdleLeft, timer_callie_IdleLeft_cont;
var callie_house_talk;
// luca
var luca;
var luca_house, timer_luca_IdleRight, timer_luca_IdleRight_cont, luca_IdleRight_vel, luca_house_talk;
// character timers Stage (1)
var Stage1_IdleRight_vel, Stage1_IdleLeft_vel, Stage1_WalkRight_vel, Stage1_WalkLeft_vel, Stage1_ClimbUp_vel;
var timer_stage1_IdleRight, timer_stage1_WalkLeft, timer_stage1_IdleLeft, timer_stage1_WalkRight, timer_stage1_ClimbUp;
var timer_stage1_IdleRight_cont, timer_stage1_WalkLeft_cont, timer_stage1_IdleLeft_cont, timer_stage1_WalkRight_cont,
    timer_stage1_ClimbUp_cont;
var timer_stage1_IdleRight_val, timer_stage1_WalkLeft_val, timer_stage1_IdleLeft_val, timer_stage1_WalkRight_val,
    timer_stage1_ClimbUp_val;
// character timers Stage (2)
var Stage2_IdleRight_vel, Stage2_IdleLeft_vel, Stage2_WalkRight_vel, Stage2_WalkLeft_vel, Stage2_Fly_vel;
var timer_stage2_IdleRight, timer_stage2_WalkLeft, timer_stage2_IdleLeft, timer_stage2_WalkRight, timer_stage2_Fly;
var timer_stage2_IdleRight_cont, timer_stage2_WalkLeft_cont, timer_stage2_IdleLeft_cont, timer_stage2_WalkRight_cont,
    timer_stage2_Fly_cont;
var timer_stage2_IdleRight_val, timer_stage2_WalkLeft_val, timer_stage2_IdleLeft_val, timer_stage2_WalkRight_val,
    timer_stage2_Fly_val;
var character_side;
var timer_stage2_land, timer_stage2_land_vel, Stage2_land_val, block_Idle_walk, timer_stage2_miss_land,
    fly_left_right_mov, miss_stage2_drop, map_fly_val;
// map
var map_area, map_movment_val, map_movment_chat;
var map_a1_mobility, map_a1_id, map_a1_val;
var map_b1_mobility, map_b1_id;
var map_c1_mobility, map_c1_id;
var map_d1_mobility, map_d1_id;
var map_c2_mobility, map_c2_id;
var map_a2_mobility, map_a2_id;
var map_b2_mobility, map_b2_id;
// map timers
var timer_map_stage_1_vel, timer_map_stage_2_vel, timer_map_stage_1_Up_vel, timer_map_stage_2_Fly_vel;
var timer_map_left, timer_map_right, timer_map_Up;
// portal a1 - b1
var portal_madeira, portal_area, timer_map_ai_portal_cont, timer_map_ai_portal;
var portal_a1_b1_val, portal_b1_c1_val, portal_b1_d1_val, portal_d1_a2_val, portal_c2_a2_val, portal_b2_a2_val;
// chat
var chat_a1_callie_val_id, chat_c1_callie_val_id, chat_d1_luca_val_id, chat_b2_luca_house_val_id,
    chat_c2_library_val_id;
// for
var Ud;
// achievement
var quantidade_madeira, madeira1_achievement, madeira2_achievement, madeira3_achievement;
// minijogos
var m1_done, m2_done;
// transformation, orb
var transformation, timer_orb_cont, timer_orb, orb_vel, transformation_val;
var timer_transformation_cont, timer_transformation, transformation_vel;
// final
var final;
// sound
var global_bgm_volume, global_sfx_volume;
// outros
var tutorial_3;

// variáveis minijogo 1

let m1grubNumber, m1timerLength, m1timerCheck;
let m1grubImage, m1grubStatus, m1grubSpriteCycle;

// variáveis minijogo 2

let m2timerLength, m2timerCheck, m2hasFlippedBook, m2firstBook, m2secondBook, m2lockGame, m2bookPos, m2bookCounter,
    m2booksList;
const m2books = document.querySelectorAll('.m2book'); // lista que contém todos os elementos de livro
const m2booksArray = [];


/* ----------------------------------------------------------------------------------------------------------------------------- */

function fade_blackout() {
    if (blackout === 1) {
        document.getElementById("blackout").style.backgroundColor = "black";
        document.getElementById("blackout").style.zIndex = "10";
        document.getElementById("blackout").style.opacity = "1";
        setTimeout(function () {
            document.getElementById("blackout").style.opacity = "0.7";
        }, 1500);
    } else if (blackout === 2) {
        document.getElementById("blackout").style.backgroundColor = "black";
        document.getElementById("blackout").style.zIndex = "10";
        document.getElementById("blackout").style.opacity = "1";
        setTimeout(function () {
            document.getElementById("blackout").style.opacity = "0";
            setTimeout(function () {
                document.getElementById("blackout").style.zIndex = "0";
            }, 1500)
        }, 1500);
    } else if (blackout === 3) {
        document.getElementById("blackout").style.backgroundColor = "white";
        document.getElementById("blackout").style.zIndex = "10";
        document.getElementById("blackout").style.opacity = "1";
        setTimeout(function () {
            document.getElementById("blackout").style.opacity = "0";
            setTimeout(function () {
                document.getElementById("blackout").style.zIndex = "0";
            }, 1500)
        }, 1500);
    }
}

window.onload = function () {
    isPlayingMinigame = false;
    character_movement_val = "off";
    InGame_menu_val = "off";
    map_movment_chat = "off";
    character_moves_left = "off";
    character_moves_right = "off";
    character_moves_up_down = "off";
    character_moves_fly = "off";
    character_side = "right";
    Up_Down_val = "off";
    Fly_val = "on";
    Stage2_land_val = "off";
    block_Idle_walk = "off";
    fly_left_right_mov = "off";
    tutorial_3 = false;
    miss_stage2_drop = false;
    m1_done = false;
    m2_done = false;
    final = "deactivated";

    portal_b1_c1_val = "on";
    portal_b1_d1_val = "on";
    portal_d1_a2_val = "on";
    portal_c2_a2_val = "on";
    portal_b2_a2_val = "on";

    madeira1_achievement = "off";
    madeira2_achievement = "off";
    madeira3_achievement = "off";
    quantidade_madeira = 0;
    achiv_stag = 0;

    character = document.getElementById("character_id");
    map_a1_id = document.getElementById("map_a1");
    map_b1_id = document.getElementById("map_b1");
    map_c1_id = document.getElementById("map_c1");
    map_d1_id = document.getElementById("map_d1");
    map_c2_id = document.getElementById("map_c2");
    map_a2_id = document.getElementById("map_a2");
    map_b2_id = document.getElementById("map_b2");

    chat_d1_luca_val_id = false;

    callie_house_talk = false;
    callie_house = document.getElementById("callie_id_house");
    callie = document.getElementById("callie_id");
    callie_IdleLeft_vel = 200;

    luca_house_talk = false;
    luca = document.getElementById("luca_id");
    luca_house = document.getElementById("luca_id_house");
    luca_IdleRight_vel = 200;

    timer_stage1_WalkLeft_val = "off";
    timer_stage1_WalkRight_val = "off";
    timer_stage1_IdleLeft_val = "off";
    timer_stage1_IdleRight_val = "off";
    timer_stage1_ClimbUp_val = "off";

    timer_stage2_WalkLeft_val = "off";
    timer_stage2_WalkRight_val = "off";
    timer_stage2_IdleLeft_val = "off";
    timer_stage2_IdleRight_val = "off";
    timer_stage2_Fly_val = "off";

    Stage1_IdleRight_vel = 100;
    Stage1_IdleLeft_vel = 100;
    Stage1_WalkRight_vel = 100;
    Stage1_WalkLeft_vel = 100;
    Stage1_ClimbUp_vel = 100;

    transformation_vel = 160;
    orb_vel = 100;

    Stage2_IdleRight_vel = 150;
    Stage2_IdleLeft_vel = 150;
    Stage2_WalkRight_vel = 100;
    Stage2_WalkLeft_vel = 100;
    Stage2_Fly_vel = 100;

    timer_map_stage_1_vel = 9;
    timer_map_stage_1_Up_vel = 8;

    timer_map_stage_2_vel = 5;
    timer_map_stage_2_Fly_vel = 5.5;
    timer_stage2_land_vel = 6.5;

    /* sound control */

    global_bgm_volume = 0.10;
    global_sfx_volume = 0.09;

    menu_start();

    window.onkeydown = function (event) {
        if (character_movement_val === "on") {
            character_movement(event);
        }
    }
    window.onkeyup = function (event) {
        if (character_movement_val === "on") {
            character_stop(event);
        }
    }
}

function character_movement(event) {
    if (isPlayingMinigame === false) {

        switch (life_stage) {
            case 1:
                switch (event.key) {
                    case "c":
                        menu_ingame();
                        buttonClickSound();
                        break;
                    case "z":
                        chat_val();
                        portal_a1_b1_unlock();
                        apanhar_madeira_val();
                        if (map_mission_goal === 4) {
                            if (parseInt(map_a1_id.style.backgroundPositionX) <= -637 && parseInt(map_a1_id.style.backgroundPositionX) >= -746) {
                                if (transformation_val === "off") {
                                    transformation_func();
                                    transformation_val = "on";
                                }
                            }
                        }

                        break;
                    case "ArrowLeft":
                        if (character_moves_left === "off" && character_moves_right === "off" && character_moves_up_down === "off") {
                            character_moves_left = "on";
                            // clear IdleRight
                            timer_stage1_IdleRight_cont = 3;
                            clearInterval(timer_stage1_IdleRight);
                            // clear IdleLeft
                            timer_stage1_IdleLeft_cont = 3;
                            clearInterval(timer_stage1_IdleLeft);
                            // clear WalkRight
                            timer_stage1_WalkRight_cont = 3;
                            clearInterval(timer_stage1_WalkRight);
                            //clear climb Up
                            timer_stage1_ClimbUp_cont = 2;
                            clearInterval(timer_stage1_ClimbUp);

                            if (timer_stage1_WalkLeft_val === "off") {
                                timer_stage1_WalkLeft_val = "on";
                                timer_stage1_WalkLeft_cont = 1;
                                timer_stage1_WalkLeft = setInterval(function () {
                                    character.src = "img/character/WalkLeft/WalkLeft" + timer_stage1_WalkLeft_cont + ".png";
                                    if (timer_stage1_WalkLeft_cont === 5) {
                                        timer_stage1_WalkLeft_cont = 1;
                                    } else {
                                        timer_stage1_WalkLeft_cont++;
                                    }
                                }, Stage1_WalkLeft_vel);

                                setTimeout(function () {
                                    timer_map_left = setInterval(function () {
                                        if (map_movment_val === "on") {
                                            map_movement(map_area, "left", life_stage);
                                        }
                                    }, timer_map_stage_1_vel);
                                }, Stage1_WalkLeft_vel)
                            }
                        }

                        break;

                    case "ArrowRight":
                        if (character_moves_right === "off" && character_moves_left === "off" && character_moves_up_down === "off") {
                            character_moves_right = "on";
                            // clear IdleRight
                            timer_stage1_IdleRight_cont = 3;
                            clearInterval(timer_stage1_IdleRight);
                            // clear IdleLeft
                            timer_stage1_IdleLeft_cont = 3;
                            clearInterval(timer_stage1_IdleLeft);
                            // clear WalkLeft
                            timer_stage1_WalkLeft_cont = 3;
                            clearInterval(timer_stage1_WalkLeft);
                            //clear climb Up
                            timer_stage1_ClimbUp_cont = 2;
                            clearInterval(timer_stage1_ClimbUp);

                            if (timer_stage1_WalkRight_val === "off") {
                                timer_stage1_WalkRight_val = "on";
                                timer_stage1_WalkRight_cont = 1;
                                timer_stage1_WalkRight = setInterval(function () {
                                    character.src = "img/character/WalkRight/WalkRight" + timer_stage1_WalkRight_cont + ".png";
                                    if (timer_stage1_WalkRight_cont === 5) {
                                        timer_stage1_WalkRight_cont = 1;
                                    } else {
                                        timer_stage1_WalkRight_cont++;
                                    }

                                }, Stage1_WalkRight_vel);

                                setTimeout(function () {
                                    timer_map_right = setInterval(function () {
                                        if (map_movment_val === "on") {
                                            map_movement(map_area, "right", life_stage);
                                        }
                                    }, timer_map_stage_1_vel);
                                }, Stage1_WalkRight_vel)
                            }
                        }

                        break;

                    case "ArrowUp":
                        Up_Down_val_func_b1();
                        if (Up_Down_val === "on") {
                            if (character_moves_up_down === "off" && character_moves_right === "off" && character_moves_left === "off") {
                                character_moves_up_down = "on";
                                // clear IdleRight
                                timer_stage1_IdleRight_cont = 3;
                                clearInterval(timer_stage1_IdleRight);
                                // clear IdleLeft
                                timer_stage1_IdleLeft_cont = 3;
                                clearInterval(timer_stage1_IdleLeft);
                                // clear WalkLeft
                                timer_stage1_WalkLeft_cont = 3;
                                clearInterval(timer_stage1_WalkLeft);
                                // clear WalkRight
                                timer_stage1_WalkRight_cont = 3;
                                clearInterval(timer_stage1_WalkRight);

                                if (timer_stage1_ClimbUp_val === "off") {
                                    timer_stage1_ClimbUp_val = "on";
                                    timer_stage1_ClimbUp_cont = 1;
                                    timer_stage1_ClimbUp = setInterval(function () {
                                        character.src = "img/character/Climb/climb_" + timer_stage1_ClimbUp_cont + ".png";
                                        if (timer_stage1_ClimbUp_cont === 4) {
                                            timer_stage1_ClimbUp_cont = 1;
                                        } else {
                                            timer_stage1_ClimbUp_cont++;
                                        }
                                    }, Stage1_ClimbUp_vel);

                                    setTimeout(function () {
                                        timer_map_Up = setInterval(function () {
                                            if (map_movment_val === "on") {
                                                map_movement(map_area, "up", life_stage);
                                            }
                                        }, timer_map_stage_1_Up_vel);
                                    }, Stage1_ClimbUp_vel)
                                }
                            }
                        }
                        if (portal_a1_b1_val === "on") {
                            portal_a1_b1();
                        }
                        if (portal_b1_c1_val === "on") {
                            portal_b1_c1();
                        }
                        break;
                    case "ArrowDown":
                        Up_Down_val_func_b1();
                        if (Up_Down_val === "on") {
                            if (character_moves_up_down === "off" && character_moves_right === "off" && character_moves_left === "off") {
                                character_moves_up_down = "on";
                                // clear IdleRight
                                timer_stage1_IdleRight_cont = 3;
                                clearInterval(timer_stage1_IdleRight);
                                // clear IdleLeft
                                timer_stage1_IdleLeft_cont = 3;
                                clearInterval(timer_stage1_IdleLeft);
                                // clear WalkLeft
                                timer_stage1_WalkLeft_cont = 3;
                                clearInterval(timer_stage1_WalkLeft);
                                // clear WalkRight
                                timer_stage1_WalkRight_cont = 3;
                                clearInterval(timer_stage1_WalkRight);

                                if (timer_stage1_ClimbUp_val === "off") {
                                    timer_stage1_ClimbUp_val = "on";
                                    timer_stage1_ClimbUp_cont = 1;
                                    timer_stage1_ClimbUp = setInterval(function () {
                                        character.src = "img/character/Climb/climb_" + timer_stage1_ClimbUp_cont + ".png";
                                        if (timer_stage1_ClimbUp_cont === 4) {
                                            timer_stage1_ClimbUp_cont = 1;
                                        } else {
                                            timer_stage1_ClimbUp_cont++;
                                        }
                                    }, Stage1_ClimbUp_vel);

                                    setTimeout(function () {
                                        timer_map_Up = setInterval(function () {
                                            if (map_movment_val === "on") {
                                                map_movement(map_area, "down", life_stage)
                                            }
                                        }, timer_map_stage_1_Up_vel);
                                    }, Stage1_ClimbUp_vel)
                                }
                            }
                        }
                        break;
                }
                break;
            case 2:
                switch (event.key) {
                    case "c":
                        menu_ingame();
                        buttonClickSound();
                        break;
                    case "z":
                        chat_val();
                        break;
                    case "ArrowLeft":
                        if (character_moves_left === "off" && character_moves_right === "off") {
                            character_moves_left = "on";
                            character_side = "left";
                            // clear IdleRight
                            timer_stage2_IdleRight_cont = 3;
                            clearInterval(timer_stage2_IdleRight);
                            // clear IdleLeft
                            timer_stage2_IdleLeft_cont = 3;
                            clearInterval(timer_stage2_IdleLeft);
                            // clear WalkRight
                            timer_stage2_WalkRight_cont = 3;
                            clearInterval(timer_stage2_WalkRight);
                            // clear WalkLeft
                            timer_stage2_WalkLeft_cont = 3;
                            clearInterval(timer_stage2_WalkLeft);
                            //clear Fly
                            if (character_moves_fly === "off") {
                                clearInterval(timer_stage2_Fly);
                            }

                            if (timer_stage2_WalkLeft_val === "off") {
                                timer_stage2_WalkLeft_val = "on";
                                timer_stage2_WalkLeft_cont = 1;
                                timer_stage2_WalkLeft = setInterval(function () {
                                    if (block_Idle_walk === "off") {
                                        character.src = "img/character/Stage2/WalkLeft/WalkLeft" + timer_stage2_WalkLeft_cont + ".png";
                                    } else if (timer_stage2_Fly_val === "off") {
                                        character.src = "img/character/Stage2/FlyLeft/FlyLeft3.png";
                                    }
                                    if (timer_stage2_WalkLeft_cont === 5) {
                                        timer_stage2_WalkLeft_cont = 1;
                                    } else {
                                        timer_stage2_WalkLeft_cont++;
                                    }
                                }, Stage2_WalkLeft_vel);

                                setTimeout(function () {
                                    timer_map_left = setInterval(function () {
                                        if (map_movment_val === "on") {
                                            map_movement(map_area, "left", life_stage);
                                        }
                                    }, timer_map_stage_2_vel);
                                }, Stage2_WalkLeft_vel)
                            }

                        }

                        break;

                    case "ArrowRight":
                        if (character_moves_right === "off" && character_moves_left === "off") {
                            character_moves_right = "on";
                            character_side = "right";
                            // clear IdleRight
                            timer_stage2_IdleRight_cont = 3;
                            clearInterval(timer_stage2_IdleRight);
                            // clear IdleLeft
                            timer_stage2_IdleLeft_cont = 3;
                            clearInterval(timer_stage2_IdleLeft);
                            // clear WalkLeft
                            timer_stage2_WalkLeft_cont = 3;
                            clearInterval(timer_stage2_WalkLeft);
                            // clear WalkRight
                            timer_stage2_WalkRight_cont = 3;
                            clearInterval(timer_stage2_WalkRight);
                            if (character_moves_fly === "off") {
                                //clear Fly
                                clearInterval(timer_stage2_Fly);
                            }

                            if (timer_stage2_WalkRight_val === "off") {
                                timer_stage2_WalkRight_val = "on";
                                timer_stage2_WalkRight_cont = 1;
                                timer_stage2_WalkRight = setInterval(function () {
                                    if (block_Idle_walk === "off") {
                                        character.src = "img/character/Stage2/WalkRight/WalkRight" + timer_stage2_WalkRight_cont + ".png";
                                    } else if (timer_stage2_Fly_val === "off") {
                                        character.src = "img/character/Stage2/FlyRight/FlyRight3.png";
                                    }
                                    if (timer_stage2_WalkRight_cont === 5) {
                                        timer_stage2_WalkRight_cont = 1;
                                    } else {
                                        timer_stage2_WalkRight_cont++;
                                    }

                                }, Stage2_WalkRight_vel);

                                setTimeout(function () {
                                    timer_map_right = setInterval(function () {
                                        if (map_movment_val === "on") {
                                            map_movement(map_area, "right", life_stage);
                                        }
                                    }, timer_map_stage_2_vel);
                                }, Stage2_WalkRight_vel)
                            }
                        }

                        break;
                    case "ArrowUp":
                        if (character_moves_fly === "off" /*&& character_moves_right === "off" && character_moves_left === "off"*/) {
                            character_moves_fly = "on";
                            if (map_fly_val === "on") {
                                block_Idle_walk = "on";
                            }
                            fly_left_right_mov = "on"
                            miss_stage2_drop = false;

                            // clear IdleRight
                            timer_stage2_IdleRight_cont = 3;
                            clearInterval(timer_stage2_IdleRight);
                            // clear IdleLeft
                            timer_stage2_IdleLeft_cont = 3;
                            clearInterval(timer_stage2_IdleLeft);
                            // clear WalkLeft
                            // timer_stage2_WalkLeft_cont = 3;
                            //clearInterval(timer_stage2_WalkLeft);
                            // clear WalkRight
                            //timer_stage2_WalkRight_cont = 3;
                            //clearInterval(timer_stage2_WalkRight);

                            if (timer_stage2_Fly_val === "off" && map_fly_val === "on") {
                                timer_stage2_Fly_val = "on";

                                // clear miss land
                                clearInterval(timer_stage2_miss_land);

                                // clear land
                                clearInterval(timer_stage2_land);
                                Stage2_land_val = "off";
                                Fly_val = "on";

                                setTimeout(function () {
                                    if (character_side === "left") {
                                        character.src = "img/character/Stage2/FlyLeft/FlyLeft1.png";
                                    } else if (character_side === "right") {
                                        character.src = "img/character/Stage2/FlyRight/FlyRight1.png";
                                    }
                                    setTimeout(function () {
                                        if (character_side === "left") {
                                            character.src = "img/character/Stage2/FlyLeft/FlyLeft2.png";
                                        } else if (character_side === "right") {
                                            character.src = "img/character/Stage2/FlyRight/FlyRight2.png";
                                        }
                                        timer_stage2_Fly_cont = 3;
                                        timer_stage2_Fly = setInterval(function () {
                                            if (character_side === "left") {
                                                character.src = "img/character/Stage2/FlyLeft/FlyLeft" + timer_stage2_Fly_cont + ".png";
                                            } else if (character_side === "right") {
                                                character.src = "img/character/Stage2/FlyRight/FlyRight" + timer_stage2_Fly_cont + ".png";
                                            }
                                            if (timer_stage2_Fly_cont === 4) {
                                                timer_stage2_Fly_cont = 3;
                                            } else {
                                                timer_stage2_Fly_cont++;
                                            }
                                        }, Stage2_Fly_vel);

                                    }, Stage2_Fly_vel);
                                }, Stage2_Fly_vel);

                                setTimeout(function () {
                                    timer_map_Up = setInterval(function () {
                                        if (map_movment_val === "on") {
                                            map_movement(map_area, "up", life_stage);
                                        }
                                    }, timer_map_stage_2_Fly_vel);
                                }, Stage2_Fly_vel)
                            }
                        }
                        if (portal_a1_b1_val === "on") {
                            portal_a1_b1();
                        }
                        if (portal_b1_c1_val === "on") {
                            portal_b1_c1();
                        }
                        if (portal_b1_d1_val === "on" && map_mission_goal >= 5) {
                            portal_b1_d1();
                        }
                        if (portal_d1_a2_val === "on") {
                            portal_d1_a2();
                        }
                        if (portal_c2_a2_val === "on") {
                            portal_c2_a2();
                        }
                        if (portal_b2_a2_val === "on") {
                            portal_b2_a2();
                        }
                        if (map_mission_goal === 9 && parseInt(map_a2_id.style.backgroundPositionY) === -192 && parseInt(map_a2_id.style.backgroundPositionX) <= -184 && parseInt(map_a2_id.style.backgroundPositionX) >= -463) {
                            if (final === "deactivated") {
                                final = "active"
                                the_end();
                                isPlayingMinigame = true;
                            }
                        }
                        break;
                    case "ArrowDown":
                        if (character_moves_fly === "off" && character_moves_right === "off" && character_moves_left === "off" && block_Idle_walk === "off") {
                            // clear IdleRight
                            timer_stage1_IdleRight_cont = 3;
                            clearInterval(timer_stage1_IdleRight);
                            // clear IdleLeft
                            timer_stage1_IdleLeft_cont = 3;
                            clearInterval(timer_stage1_IdleLeft);
                            // clear WalkLeft
                            timer_stage1_WalkLeft_cont = 3;
                            clearInterval(timer_stage1_WalkLeft);
                            // clear WalkRight
                            timer_stage1_WalkRight_cont = 3;
                            clearInterval(timer_stage1_WalkRight);


                            if (map_movment_val === "on") {
                                if (map_fly_val === "on") {
                                    if (miss_stage2_drop === false && (parseInt(map_b1_id.style.backgroundPositionY) !== -2446 && parseInt(map_a2_id.style.backgroundPositionY) !== -1259)) {
                                        miss_stage2_drop = true;
                                        fly_left_right_mov = "on";
                                        block_Idle_walk = "on";
                                        if (map_area === "b1") {
                                            b1_elements_mov_Down_stage2();
                                        } else if (map_area === "a2") {
                                            a2_elements_mov_Down_stage2();
                                        }
                                        Stage2_miss_land();
                                        Fly_val = "on";
                                        if (character_side === "left") {
                                            character.src = "img/character/Stage2/FlyLeft/FlyLeft4.png";
                                        } else if (character_side === "right") {
                                            character.src = "img/character/Stage2/FlyRight/FlyRight4.png";
                                        }
                                    }
                                }
                            }

                        }
                        break;
                }
                break;
        }
    }
}


function character_stop(event) {
    switch (life_stage) {
        case 1:
            switch (event.key) {
                case "ArrowLeft":
                    if (character_moves_left === "on") {
                        character_moves_left = "off";

                        // clear WalkLeft
                        timer_stage1_WalkLeft_cont = 3;
                        clearInterval(timer_stage1_WalkLeft);
                        timer_stage1_WalkLeft_val = "off";

                        // clear Map motion
                        setTimeout(function () {
                            clearInterval(timer_map_left);
                        }, Stage1_WalkLeft_vel)

                        timer_stage1_IdleLeft_cont = 1;
                        timer_stage1_IdleLeft = setInterval(function () {
                            character.src = "img/character/IdleLeft/IdleLeft" + timer_stage1_IdleLeft_cont + ".png";
                            if (timer_stage1_IdleLeft_cont === 5) {
                                timer_stage1_IdleLeft_cont = 1;
                            } else {
                                timer_stage1_IdleLeft_cont++;
                            }
                        }, Stage1_IdleLeft_vel)
                    }

                    break;

                case "ArrowRight":
                    if (character_moves_right === "on") {
                        character_moves_right = "off";

                        // clear WalkRight
                        timer_stage1_WalkRight_cont = 3;
                        clearInterval(timer_stage1_WalkRight);
                        timer_stage1_WalkRight_val = "off";

                        // clear Map motion
                        setTimeout(function () {
                            clearInterval(timer_map_right);
                        }, Stage1_WalkRight_vel)

                        timer_stage1_IdleRight_cont = 1;
                        timer_stage1_IdleRight = setInterval(function () {
                            character.src = "img/character/IdleRight/IdleRight" + timer_stage1_IdleRight_cont + ".png";
                            if (timer_stage1_IdleRight_cont === 5) {
                                timer_stage1_IdleRight_cont = 1;
                            } else {
                                timer_stage1_IdleRight_cont++;
                            }
                        }, Stage1_IdleRight_vel)
                    }

                    break;

                case "ArrowUp":
                    if (character_moves_up_down === "on") {
                        character_moves_up_down = "off";

                        // clear ClimbUp
                        timer_stage1_ClimbUp_cont = 2;
                        clearInterval(timer_stage1_ClimbUp);
                        timer_stage1_ClimbUp_val = "off";

                        // clear Map motion
                        setTimeout(function () {
                            clearInterval(timer_map_Up);
                        }, Stage1_ClimbUp_vel)

                        character.src = "img/character/Climb/climb_" + timer_stage1_ClimbUp_cont + ".png";
                        Up_Down_val = "off";

                    }
                    break;
                case "ArrowDown":
                    if (character_moves_up_down === "on") {
                        character_moves_up_down = "off";

                        // clear ClimbUp
                        timer_stage1_ClimbUp_cont = 2;
                        clearInterval(timer_stage1_ClimbUp);
                        timer_stage1_ClimbUp_val = "off";

                        // clear Map motion
                        setTimeout(function () {
                            clearInterval(timer_map_Up);
                        }, Stage1_ClimbUp_vel)

                        character.src = "img/character/Climb/climb_" + timer_stage1_ClimbUp_cont + ".png";
                        Up_Down_val = "off";

                    }
                    break;
            }
            break;
        case 2:
            switch (event.key) {
                case "ArrowLeft":
                    if (character_moves_left === "on") {
                        character_moves_left = "off";

                        // clear WalkLeft
                        timer_stage2_WalkLeft_cont = 3;
                        clearInterval(timer_stage2_WalkLeft);
                        timer_stage2_WalkLeft_val = "off";

                        // clear Map motion
                        setTimeout(function () {
                            clearInterval(timer_map_left);
                        }, Stage2_WalkLeft_vel)

                        timer_stage2_IdleLeft_cont = 1;
                        timer_stage2_IdleLeft = setInterval(function () {
                            if (character_moves_fly === "off") {
                                if (block_Idle_walk === "off") {
                                    character.src = "img/character/Stage2/IdleLeft/IdleLeft" + timer_stage2_IdleLeft_cont + ".png";
                                }
                            }
                            if (timer_stage2_IdleLeft_cont === 3) {
                                timer_stage2_IdleLeft_cont = 1;
                            } else {
                                timer_stage2_IdleLeft_cont++;
                            }
                        }, Stage2_IdleLeft_vel)
                    }
                    break;

                case "ArrowRight":
                    if (character_moves_right === "on") {
                        character_moves_right = "off";

                        // clear WalkRight
                        timer_stage2_WalkRight_cont = 3;
                        clearInterval(timer_stage2_WalkRight);
                        timer_stage2_WalkRight_val = "off";

                        // clear Map motion
                        setTimeout(function () {
                            clearInterval(timer_map_right);
                        }, Stage2_WalkRight_vel)

                        timer_stage2_IdleRight_cont = 1;
                        timer_stage2_IdleRight = setInterval(function () {
                            if (character_moves_fly === "off") {
                                if (block_Idle_walk === "off") {
                                    character.src = "img/character/Stage2/IdleRight/IdleRight" + timer_stage2_IdleRight_cont + ".png";
                                }
                            }
                            if (timer_stage2_IdleRight_cont === 3) {
                                timer_stage2_IdleRight_cont = 1;
                            } else {
                                timer_stage2_IdleRight_cont++;
                            }
                        }, Stage2_IdleRight_vel)
                    }
                    break;

                case "ArrowUp":
                    if (character_moves_fly === "on") {
                        character_moves_fly = "off";

                        // clear Fly
                        clearInterval(timer_stage2_Fly);
                        setTimeout(function () {
                            clearInterval(timer_stage2_Fly);
                        }, 300)

                        // clear Map motion
                        setTimeout(function () {
                            clearInterval(timer_map_Up);
                        }, Stage2_Fly_vel)

                        Stage2_land();

                        Fly_val = "on";

                    }
                    break;
            }
            break;
    }
}

function Up_Down_val_func_b1() {
    for (Ud = 1; Ud <= 14; Ud++) {
        switch (Ud) {
            case 1:
                if (parseInt(map_b1_id.style.backgroundPositionY) >= -2446 && parseInt(map_b1_id.style.backgroundPositionY) <= -2099) {
                    if (parseInt(map_b1_id.style.backgroundPositionX) <= -475 && parseInt(map_b1_id.style.backgroundPositionX) >= -540) {
                        Up_Down_val = "on";
                    }
                }
                break;
            case 2:
                if (parseInt(map_b1_id.style.backgroundPositionY) >= -2099 && parseInt(map_b1_id.style.backgroundPositionY) <= -1797) {
                    if (parseInt(map_b1_id.style.backgroundPositionX) <= -620 && parseInt(map_b1_id.style.backgroundPositionX) >= -680) {
                        Up_Down_val = "on";
                    }
                }
                break;
            case 3:
                if (parseInt(map_b1_id.style.backgroundPositionY) >= -2099 && parseInt(map_b1_id.style.backgroundPositionY) <= -1797) {
                    if (parseInt(map_b1_id.style.backgroundPositionX) <= -30 && parseInt(map_b1_id.style.backgroundPositionX) >= -95) {
                        Up_Down_val = "on";
                    }
                }
                break;
            case 4:
                if (parseInt(map_b1_id.style.backgroundPositionY) >= -1797 && parseInt(map_b1_id.style.backgroundPositionY) <= -1495) {
                    if (parseInt(map_b1_id.style.backgroundPositionX) <= -160 && parseInt(map_b1_id.style.backgroundPositionX) >= -214) {
                        Up_Down_val = "on";
                    }
                }
                break;
            case 5:
                if (parseInt(map_b1_id.style.backgroundPositionY) >= -1797 && parseInt(map_b1_id.style.backgroundPositionY) <= -1495) {
                    if (parseInt(map_b1_id.style.backgroundPositionX) <= -534 && parseInt(map_b1_id.style.backgroundPositionX) >= -580) {
                        Up_Down_val = "on";
                    }
                }
                break;
            case 6:
                if (parseInt(map_b1_id.style.backgroundPositionY) >= -1495 && parseInt(map_b1_id.style.backgroundPositionY) <= -1185) {
                    if (parseInt(map_b1_id.style.backgroundPositionX) <= -446 && parseInt(map_b1_id.style.backgroundPositionX) >= -500) {
                        Up_Down_val = "on";
                    }
                }
                break;
            case 7:
                if (parseInt(map_b1_id.style.backgroundPositionY) >= -1495 && parseInt(map_b1_id.style.backgroundPositionY) <= -980) {
                    if (parseInt(map_b1_id.style.backgroundPositionX) <= -25 && parseInt(map_b1_id.style.backgroundPositionX) >= -84) {
                        Up_Down_val = "on";
                    }
                }
                break;
            case 8:
                if (parseInt(map_b1_id.style.backgroundPositionY) >= -980 && parseInt(map_b1_id.style.backgroundPositionY) <= -570) {
                    if (parseInt(map_b1_id.style.backgroundPositionX) <= -166 && parseInt(map_b1_id.style.backgroundPositionX) >= -222) {
                        Up_Down_val = "on";
                    }
                }
                break;
            case 9:
                if (parseInt(map_b1_id.style.backgroundPositionY) >= -2446 && parseInt(map_b1_id.style.backgroundPositionY) <= -2099) {
                    if (parseInt(map_b1_id.style.backgroundPositionX) <= -920 && parseInt(map_b1_id.style.backgroundPositionX) >= -980) {
                        Up_Down_val = "on";
                    }
                }
                break;
            case 10:
                if (parseInt(map_b1_id.style.backgroundPositionY) >= -2099 && parseInt(map_b1_id.style.backgroundPositionY) <= -1800) {
                    if (parseInt(map_b1_id.style.backgroundPositionX) <= -1010 && parseInt(map_b1_id.style.backgroundPositionX) >= -1058) {
                        Up_Down_val = "on";
                    }
                }
                break;
            case 11:
                if (parseInt(map_b1_id.style.backgroundPositionY) >= -1800 && parseInt(map_b1_id.style.backgroundPositionY) <= -1494) {
                    if (parseInt(map_b1_id.style.backgroundPositionX) <= -964 && parseInt(map_b1_id.style.backgroundPositionX) >= -1008) {
                        Up_Down_val = "on";
                    }
                }
                break;
            case 12:
                if (parseInt(map_b1_id.style.backgroundPositionY) >= -1494 && parseInt(map_b1_id.style.backgroundPositionY) <= -1185) {
                    if (parseInt(map_b1_id.style.backgroundPositionX) <= -826 && parseInt(map_b1_id.style.backgroundPositionX) >= -874) {
                        Up_Down_val = "on";
                    }
                }
                break;
            case 13:
                if (parseInt(map_b1_id.style.backgroundPositionY) >= -1185 && parseInt(map_b1_id.style.backgroundPositionY) <= -878) {
                    if (parseInt(map_b1_id.style.backgroundPositionX) <= -678 && parseInt(map_b1_id.style.backgroundPositionX) >= -724) {
                        Up_Down_val = "on";
                    }
                }
                break;
            case 14:
                if (parseInt(map_b1_id.style.backgroundPositionY) >= -878 && parseInt(map_b1_id.style.backgroundPositionY) <= -570) {
                    if (parseInt(map_b1_id.style.backgroundPositionX) <= -866 && parseInt(map_b1_id.style.backgroundPositionX) >= -914) {
                        Up_Down_val = "on";
                    }
                }
                break;
            default:
                Up_Down_val = "off";
        }
    }
}

function Fly_val_func_b1() {
    for (Ud = 1; Ud <= 15; Ud++) {
        switch (Ud) {
            case 1:
                if (parseInt(map_b1_id.style.backgroundPositionY) === -2446 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                    Fly_val = "off";
                }
                break;
            case 2:
                if (parseInt(map_b1_id.style.backgroundPositionY) === -2099 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -701) {
                    Fly_val = "off";
                }
                break;
            case 3:
                if (parseInt(map_b1_id.style.backgroundPositionY) === -2099 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -701) {
                    Fly_val = "off";
                }
                break;
            case 4:
                if (parseInt(map_b1_id.style.backgroundPositionY) === -2099 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -701) {
                    Fly_val = "off";
                }
                break;
            case 5:
                if (parseInt(map_b1_id.style.backgroundPositionY) === -1797 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -319) {
                    Fly_val = "off";
                }
                break;
            case 6:
                if (parseInt(map_b1_id.style.backgroundPositionY) === -1797 && parseInt(map_b1_id.style.backgroundPositionX) < -515 && parseInt(map_b1_id.style.backgroundPositionX) > -745) {
                    Fly_val = "off";
                }
                break;
            case 7:
                if (parseInt(map_b1_id.style.backgroundPositionY) === -1495 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -237) {
                    Fly_val = "off";
                }
                break;
            case 8:
                if (parseInt(map_b1_id.style.backgroundPositionY) === -1495 && parseInt(map_b1_id.style.backgroundPositionX) < -373 && parseInt(map_b1_id.style.backgroundPositionX) > -604) {
                    Fly_val = "off";
                }
                break;
            case 9:
                if (parseInt(map_b1_id.style.backgroundPositionY) === -980 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -334) {
                    Fly_val = "off";
                }
                break;
            case 10:
                if (parseInt(map_b1_id.style.backgroundPositionY) === -570 && parseInt(map_b1_id.style.backgroundPositionX) < -102 && parseInt(map_b1_id.style.backgroundPositionX) > -928) {
                    Fly_val = "off";
                }
                break;
            case 11:
                if (parseInt(map_b1_id.style.backgroundPositionY) === -2099 && parseInt(map_b1_id.style.backgroundPositionX) < -885 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                    Fly_val = "off";
                }
                break;
            case 12:
                if (parseInt(map_b1_id.style.backgroundPositionY) === -1800 && parseInt(map_b1_id.style.backgroundPositionX) < -940 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                    Fly_val = "off";
                }
                break;
            case 13:
                if (parseInt(map_b1_id.style.backgroundPositionY) === -1494 && parseInt(map_b1_id.style.backgroundPositionX) < -780 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                    Fly_val = "off";
                }
                break;
            case 14:
                if (parseInt(map_b1_id.style.backgroundPositionY) === -1185 && parseInt(map_b1_id.style.backgroundPositionX) < -430 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                    Fly_val = "off";
                }
                break;
            case 15:
                if (parseInt(map_b1_id.style.backgroundPositionY) === -878 && parseInt(map_b1_id.style.backgroundPositionX) < -628 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                    Fly_val = "off";
                }
                break;
            default:
                Fly_val = "on";
        }
    }
}

function Fly_val_func_a2() {
    for (Ud = 1; Ud <= 4; Ud++) {
        switch (Ud) {
            case 1:
                if (parseInt(map_a2_id.style.backgroundPositionY) === -1259 && parseInt(map_a2_id.style.backgroundPositionX) < 1 && parseInt(map_a2_id.style.backgroundPositionX) > -map_a2_mobility) {
                    Fly_val = "off";
                }
                break;
            case 2:
                if (parseInt(map_a2_id.style.backgroundPositionY) === -872 && parseInt(map_a2_id.style.backgroundPositionX) < 1 && parseInt(map_a2_id.style.backgroundPositionX) > -271) {
                    Fly_val = "off";
                }
                break;
            case 3:
                if (parseInt(map_a2_id.style.backgroundPositionY) === -522 && parseInt(map_a2_id.style.backgroundPositionX) < -445 && parseInt(map_a2_id.style.backgroundPositionX) > -map_a2_mobility) {
                    Fly_val = "off";
                }
                break;
            case 4:
                if (parseInt(map_a2_id.style.backgroundPositionY) === -192 && parseInt(map_a2_id.style.backgroundPositionX) < -183 && parseInt(map_a2_id.style.backgroundPositionX) > -464) {
                    Fly_val = "off";
                }
                break;

            default:
                Fly_val = "on";
        }
    }
}

function Stage2_land() {
    if (Stage2_land_val === "off") {
        Stage2_land_val = "on";
        timer_stage2_land = setInterval(function () {
            if (map_area === "b1") {
                Fly_val_func_b1();
            } else if (map_area === "a2") {
                Fly_val_func_a2();
            }

            if (Fly_val === "off") {
                clearInterval(timer_stage2_land);
                block_Idle_walk = "off";
                fly_left_right_mov = "off"

                if (character_side === "right") {
                    character.src = "img/character/Stage2/IdleRight/IdleRight1.png";
                } else if (character_side === "left") {
                    character.src = "img/character/Stage2/IdleLeft/IdleLeft1.png";
                }
                Stage2_land_val = "off";
                Fly_val = "on";
            } else {
                if (map_area === "b1") {
                    b1_elements_mov_Down_stage2();
                } else if (map_area === "a2") {
                    a2_elements_mov_Down_stage2();
                }
            }
        }, timer_stage2_land_vel)
    }

    setTimeout(function () {
        timer_stage2_Fly_val = "off";
    }, 100)
}

function Stage2_miss_land() {
    if (Stage2_land_val === "off") {
        Stage2_land_val = "on";
        timer_stage2_miss_land = setInterval(function () {
            if (map_area === "b1") {
                Fly_val_func_b1();
            } else if (map_area === "a2") {
                Fly_val_func_a2();
            }

            if (Fly_val === "off") {
                clearInterval(timer_stage2_miss_land);
                block_Idle_walk = "off";
                fly_left_right_mov = "off"
                miss_stage2_drop = false;

                if (character_side === "right") {
                    character.src = "img/character/Stage2/FlyRight/FlyRight3.png";
                } else if (character_side === "left") {
                    character.src = "img/character/Stage2/FlyLeft/FlyLeft3.png";
                }
                Stage2_land_val = "off";
                Fly_val = "on";
            } else {
                if (map_area === "b1") {
                    b1_elements_mov_Down_stage2();
                } else if (map_area === "a2") {
                    a2_elements_mov_Down_stage2();
                }
            }
        }, timer_stage2_land_vel)
    }

    setTimeout(function () {
        timer_stage2_Fly_val = "off";
    }, 100)
}

function map_movement(map, direction, life_stage_n) {
    switch (map) {
        case "a1":
            switch (life_stage_n) {
                case 1:
                    switch (direction) {
                        case "left":
                            if (parseInt(map_a1_id.style.backgroundPositionX) < 0) {
                                map_a1_id.style.backgroundPositionX = parseInt(map_a1_id.style.backgroundPositionX) + 1 + "px";
                                document.getElementById("map_a1_eggzitos").style.left = parseInt(document.getElementById("map_a1_eggzitos").style.left) + 1 + "px";
                                document.getElementById("map_a1_porta").style.left = parseInt(document.getElementById("map_a1_porta").style.left) + 1 + "px";
                                document.getElementById("orb_id").style.left = parseInt(document.getElementById("orb_id").style.left) + 1 + "px";

                                document.getElementById("map_a1_tutorial_1").style.left = parseInt(document.getElementById("map_a1_tutorial_1").style.left) + 1 + "px";
                                if (parseInt(document.getElementById("map_a1_tutorial_1").style.left) <= 400 && parseInt(document.getElementById("map_a1_tutorial_1").style.left) >= 110) {
                                    document.getElementById("map_a1_tutorial_1").style.opacity = "1";
                                } else {
                                    document.getElementById("map_a1_tutorial_1").style.opacity = "0";
                                }

                                document.getElementById("map_a1_tutorial_2").style.left = parseInt(document.getElementById("map_a1_tutorial_2").style.left) + 1 + "px";
                                if (parseInt(document.getElementById("map_a1_tutorial_2").style.left) <= 400 && parseInt(document.getElementById("map_a1_tutorial_2").style.left) >= 110) {
                                    document.getElementById("map_a1_tutorial_2").style.opacity = "1";
                                } else {
                                    document.getElementById("map_a1_tutorial_2").style.opacity = "0";
                                }

                                callie.style.left = parseInt(callie.style.left) + 1 + "px";

                                document.getElementById("map_a1_e_esq").style.transform = "translateX(-" + (-100 * (parseInt(map_a1_id.style.backgroundPositionX)) / map_a1_mobility) + "%)";
                                document.getElementById("map_a1_e_dir").style.transform = "translateX(-" + (-100 * (parseInt(map_a1_id.style.backgroundPositionX)) / map_a1_mobility) + "%)";
                            }
                            break;
                        case "right":
                            if (parseInt(map_a1_id.style.backgroundPositionX) > -map_a1_mobility) {
                                map_a1_id.style.backgroundPositionX = parseInt(map_a1_id.style.backgroundPositionX) - 1 + "px";
                                document.getElementById("map_a1_eggzitos").style.left = parseInt(document.getElementById("map_a1_eggzitos").style.left) - 1 + "px";
                                document.getElementById("map_a1_porta").style.left = parseInt(document.getElementById("map_a1_porta").style.left) - 1 + "px";
                                document.getElementById("orb_id").style.left = parseInt(document.getElementById("orb_id").style.left) - 1 + "px";

                                document.getElementById("map_a1_tutorial_1").style.left = parseInt(document.getElementById("map_a1_tutorial_1").style.left) - 1 + "px";
                                if (parseInt(document.getElementById("map_a1_tutorial_1").style.left) <= 400 && parseInt(document.getElementById("map_a1_tutorial_1").style.left) >= 110) {
                                    document.getElementById("map_a1_tutorial_1").style.opacity = "1";
                                } else {
                                    document.getElementById("map_a1_tutorial_1").style.opacity = "0";
                                }

                                document.getElementById("map_a1_tutorial_2").style.left = parseInt(document.getElementById("map_a1_tutorial_2").style.left) - 1 + "px";
                                if (parseInt(document.getElementById("map_a1_tutorial_2").style.left) <= 400 && parseInt(document.getElementById("map_a1_tutorial_2").style.left) >= 110) {
                                    document.getElementById("map_a1_tutorial_2").style.opacity = "1";
                                } else {
                                    document.getElementById("map_a1_tutorial_2").style.opacity = "0";
                                }

                                callie.style.left = parseInt(callie.style.left) - 1 + "px";

                                document.getElementById("map_a1_e_esq").style.transform = "translateX(-" + (-100 * (parseInt(map_a1_id.style.backgroundPositionX)) / map_a1_mobility) + "%)";
                                document.getElementById("map_a1_e_dir").style.transform = "translateX(-" + (-100 * (parseInt(map_a1_id.style.backgroundPositionX)) / map_a1_mobility) + "%)";
                            }
                            break;
                    }
                    break;
                case 2:
                    switch (direction) {
                        case "left":
                            if (parseInt(map_a1_id.style.backgroundPositionX) < 0) {
                                map_a1_id.style.backgroundPositionX = parseInt(map_a1_id.style.backgroundPositionX) + 1 + "px";
                                document.getElementById("map_a1_eggzitos").style.left = parseInt(document.getElementById("map_a1_eggzitos").style.left) + 1 + "px";
                                document.getElementById("map_a1_porta").style.left = parseInt(document.getElementById("map_a1_porta").style.left) + 1 + "px";
                                document.getElementById("orb_id").style.left = parseInt(document.getElementById("orb_id").style.left) + 1 + "px";

                                document.getElementById("map_a1_tutorial_1").style.left = parseInt(document.getElementById("map_a1_tutorial_1").style.left) + 1 + "px";
                                if (parseInt(document.getElementById("map_a1_tutorial_1").style.left) <= 400 && parseInt(document.getElementById("map_a1_tutorial_1").style.left) >= 110) {
                                    document.getElementById("map_a1_tutorial_1").style.opacity = "1";
                                } else {
                                    document.getElementById("map_a1_tutorial_1").style.opacity = "0";
                                }

                                document.getElementById("map_a1_tutorial_2").style.left = parseInt(document.getElementById("map_a1_tutorial_2").style.left) + 1 + "px";
                                if (parseInt(document.getElementById("map_a1_tutorial_2").style.left) <= 400 && parseInt(document.getElementById("map_a1_tutorial_2").style.left) >= 110) {
                                    document.getElementById("map_a1_tutorial_2").style.opacity = "1";
                                } else {
                                    document.getElementById("map_a1_tutorial_2").style.opacity = "0";
                                }

                                callie.style.left = parseInt(callie.style.left) + 1 + "px";

                                document.getElementById("map_a1_e_esq").style.transform = "translateX(-" + (-100 * (parseInt(map_a1_id.style.backgroundPositionX)) / map_a1_mobility) + "%)";
                                document.getElementById("map_a1_e_dir").style.transform = "translateX(-" + (-100 * (parseInt(map_a1_id.style.backgroundPositionX)) / map_a1_mobility) + "%)";
                            }
                            break;
                        case "right":
                            if (parseInt(map_a1_id.style.backgroundPositionX) > -map_a1_mobility) {
                                map_a1_id.style.backgroundPositionX = parseInt(map_a1_id.style.backgroundPositionX) - 1 + "px";
                                document.getElementById("map_a1_eggzitos").style.left = parseInt(document.getElementById("map_a1_eggzitos").style.left) - 1 + "px";
                                document.getElementById("map_a1_porta").style.left = parseInt(document.getElementById("map_a1_porta").style.left) - 1 + "px";
                                document.getElementById("orb_id").style.left = parseInt(document.getElementById("orb_id").style.left) - 1 + "px";

                                document.getElementById("map_a1_tutorial_1").style.left = parseInt(document.getElementById("map_a1_tutorial_1").style.left) - 1 + "px";
                                if (parseInt(document.getElementById("map_a1_tutorial_1").style.left) <= 400 && parseInt(document.getElementById("map_a1_tutorial_1").style.left) >= 110) {
                                    document.getElementById("map_a1_tutorial_1").style.opacity = "1";
                                } else {
                                    document.getElementById("map_a1_tutorial_1").style.opacity = "0";
                                }

                                document.getElementById("map_a1_tutorial_2").style.left = parseInt(document.getElementById("map_a1_tutorial_2").style.left) - 1 + "px";
                                if (parseInt(document.getElementById("map_a1_tutorial_2").style.left) <= 400 && parseInt(document.getElementById("map_a1_tutorial_2").style.left) >= 110) {
                                    document.getElementById("map_a1_tutorial_2").style.opacity = "1";
                                } else {
                                    document.getElementById("map_a1_tutorial_2").style.opacity = "0";
                                }

                                callie.style.left = parseInt(callie.style.left) - 1 + "px";

                                document.getElementById("map_a1_e_esq").style.transform = "translateX(-" + (-100 * (parseInt(map_a1_id.style.backgroundPositionX)) / map_a1_mobility) + "%)";
                                document.getElementById("map_a1_e_dir").style.transform = "translateX(-" + (-100 * (parseInt(map_a1_id.style.backgroundPositionX)) / map_a1_mobility) + "%)";
                            }
                            break;
                    }
                    break;
            }
            break;
        case "b1":
            switch (life_stage_n) {
                case 1:
                    switch (direction) {
                        case "left":

                            if (parseInt(map_b1_id.style.backgroundPositionY) === -2446 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -729) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -5) {
                                    b1_elements_mov_left();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -2446 && parseInt(map_b1_id.style.backgroundPositionX) < -894 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -895) {
                                    b1_elements_mov_left();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -2099 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -701) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -5) {
                                    b1_elements_mov_left();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -1797 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -319) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -5) {
                                    b1_elements_mov_left();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -1797 && parseInt(map_b1_id.style.backgroundPositionX) < -515 && parseInt(map_b1_id.style.backgroundPositionX) > -745) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -516) {
                                    b1_elements_mov_left();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -1495 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -237) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -5) {
                                    b1_elements_mov_left();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -1495 && parseInt(map_b1_id.style.backgroundPositionX) < -373 && parseInt(map_b1_id.style.backgroundPositionX) > -604) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -374) {
                                    b1_elements_mov_left();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -980 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -334) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -5) {
                                    b1_elements_mov_left();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -570 && parseInt(map_b1_id.style.backgroundPositionX) < -102 && parseInt(map_b1_id.style.backgroundPositionX) > -928) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -103) {
                                    b1_elements_mov_left();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -2099 && parseInt(map_b1_id.style.backgroundPositionX) < -885 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -886) {
                                    b1_elements_mov_left();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -1800 && parseInt(map_b1_id.style.backgroundPositionX) < -940 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -941) {
                                    b1_elements_mov_left();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -1494 && parseInt(map_b1_id.style.backgroundPositionX) < -780 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -781) {
                                    b1_elements_mov_left();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -1185 && parseInt(map_b1_id.style.backgroundPositionX) < -430 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -431) {
                                    b1_elements_mov_left();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -878 && parseInt(map_b1_id.style.backgroundPositionX) < -628 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -629) {
                                    b1_elements_mov_left();
                                }
                            }
                            break;
                        case "right":

                            if (parseInt(map_b1_id.style.backgroundPositionY) === -2446 && parseInt(map_b1_id.style.backgroundPositionX) < -894 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility + 1) {
                                    b1_elements_mov_right();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -2446 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -729) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) > -728) {
                                    b1_elements_mov_right();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -2099 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -701) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) > -700) {
                                    b1_elements_mov_right();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -1797 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -319) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) > -318) {
                                    b1_elements_mov_right();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -1797 && parseInt(map_b1_id.style.backgroundPositionX) < -515 && parseInt(map_b1_id.style.backgroundPositionX) > -745) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) > -744) {
                                    b1_elements_mov_right();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -1495 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -237) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) > -236) {
                                    b1_elements_mov_right();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -1495 && parseInt(map_b1_id.style.backgroundPositionX) < -373 && parseInt(map_b1_id.style.backgroundPositionX) > -604) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) > -603) {
                                    b1_elements_mov_right();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -980 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -334) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) > -333) {
                                    b1_elements_mov_right();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -570 && parseInt(map_b1_id.style.backgroundPositionX) < -102 && parseInt(map_b1_id.style.backgroundPositionX) > -928) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) > -927) {
                                    b1_elements_mov_right();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -2099 && parseInt(map_b1_id.style.backgroundPositionX) < -885 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility + 1) {
                                    b1_elements_mov_right();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -1800 && parseInt(map_b1_id.style.backgroundPositionX) < -940 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility + 1) {
                                    b1_elements_mov_right();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -1494 && parseInt(map_b1_id.style.backgroundPositionX) < -780 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility + 1) {
                                    b1_elements_mov_right();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -1185 && parseInt(map_b1_id.style.backgroundPositionX) < -430 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility + 1) {
                                    b1_elements_mov_right();
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) === -878 && parseInt(map_b1_id.style.backgroundPositionX) < -628 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility + 1) {
                                    b1_elements_mov_right();
                                }
                            }
                            break;
                        case "up":
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -2446 && parseInt(map_b1_id.style.backgroundPositionY) <= -2099) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -475 && parseInt(map_b1_id.style.backgroundPositionX) >= -540) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) <= -2100) {
                                        b1_elements_mov_up();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -2099 && parseInt(map_b1_id.style.backgroundPositionY) <= -1797) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -620 && parseInt(map_b1_id.style.backgroundPositionX) >= -680) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) <= -1798) {
                                        b1_elements_mov_up();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -2099 && parseInt(map_b1_id.style.backgroundPositionY) <= -1797) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -30 && parseInt(map_b1_id.style.backgroundPositionX) >= -95) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) <= -1798) {
                                        b1_elements_mov_up();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -1797 && parseInt(map_b1_id.style.backgroundPositionY) <= -1495) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -160 && parseInt(map_b1_id.style.backgroundPositionX) >= -214) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) <= -1496) {
                                        b1_elements_mov_up();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -1797 && parseInt(map_b1_id.style.backgroundPositionY) <= -1495) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -534 && parseInt(map_b1_id.style.backgroundPositionX) >= -580) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) <= -1496) {
                                        b1_elements_mov_up();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -1495 && parseInt(map_b1_id.style.backgroundPositionY) <= -1185) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -446 && parseInt(map_b1_id.style.backgroundPositionX) >= -500) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) <= -1186) {
                                        b1_elements_mov_up();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -1495 && parseInt(map_b1_id.style.backgroundPositionY) <= -980) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -25 && parseInt(map_b1_id.style.backgroundPositionX) >= -84) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) <= -981) {
                                        b1_elements_mov_up();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -980 && parseInt(map_b1_id.style.backgroundPositionY) <= -570) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -166 && parseInt(map_b1_id.style.backgroundPositionX) >= -222) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) <= -571) {
                                        b1_elements_mov_up();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -2446 && parseInt(map_b1_id.style.backgroundPositionY) <= -2099) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -920 && parseInt(map_b1_id.style.backgroundPositionX) >= -980) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) <= -2100) {
                                        b1_elements_mov_up();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -2099 && parseInt(map_b1_id.style.backgroundPositionY) <= -1800) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -1010 && parseInt(map_b1_id.style.backgroundPositionX) >= -1058) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) <= -1801) {
                                        b1_elements_mov_up();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -1800 && parseInt(map_b1_id.style.backgroundPositionY) <= -1494) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -964 && parseInt(map_b1_id.style.backgroundPositionX) >= -1008) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) <= -1495) {
                                        b1_elements_mov_up();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -1494 && parseInt(map_b1_id.style.backgroundPositionY) <= -1185) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -826 && parseInt(map_b1_id.style.backgroundPositionX) >= -874) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) <= -1186) {
                                        b1_elements_mov_up();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -1185 && parseInt(map_b1_id.style.backgroundPositionY) <= -878) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -678 && parseInt(map_b1_id.style.backgroundPositionX) >= -724) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) <= -879) {
                                        b1_elements_mov_up();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -878 && parseInt(map_b1_id.style.backgroundPositionY) <= -570) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -866 && parseInt(map_b1_id.style.backgroundPositionX) >= -914) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) <= -571) {
                                        b1_elements_mov_up();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            break;
                        case "down":
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -2446 && parseInt(map_b1_id.style.backgroundPositionY) <= -2099) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -475 && parseInt(map_b1_id.style.backgroundPositionX) >= -540) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) >= -2445) {
                                        b1_elements_mov_Down();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -2099 && parseInt(map_b1_id.style.backgroundPositionY) <= -1797) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -620 && parseInt(map_b1_id.style.backgroundPositionX) >= -680) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) >= -2098) {
                                        b1_elements_mov_Down();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -2099 && parseInt(map_b1_id.style.backgroundPositionY) <= -1797) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -30 && parseInt(map_b1_id.style.backgroundPositionX) >= -95) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) >= -2098) {
                                        b1_elements_mov_Down();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -1797 && parseInt(map_b1_id.style.backgroundPositionY) <= -1495) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -160 && parseInt(map_b1_id.style.backgroundPositionX) >= -214) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) >= -1796) {
                                        b1_elements_mov_Down();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -1797 && parseInt(map_b1_id.style.backgroundPositionY) <= -1495) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -534 && parseInt(map_b1_id.style.backgroundPositionX) >= -580) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) >= -1796) {
                                        b1_elements_mov_Down();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -1495 && parseInt(map_b1_id.style.backgroundPositionY) <= -1185) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -446 && parseInt(map_b1_id.style.backgroundPositionX) >= -500) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) >= -1494) {
                                        b1_elements_mov_Down();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -1495 && parseInt(map_b1_id.style.backgroundPositionY) <= -980) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -25 && parseInt(map_b1_id.style.backgroundPositionX) >= -84) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) >= -1494) {
                                        b1_elements_mov_Down();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -980 && parseInt(map_b1_id.style.backgroundPositionY) <= -570) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -166 && parseInt(map_b1_id.style.backgroundPositionX) >= -222) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) >= -979) {
                                        b1_elements_mov_Down();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -2446 && parseInt(map_b1_id.style.backgroundPositionY) <= -2099) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -920 && parseInt(map_b1_id.style.backgroundPositionX) >= -980) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) >= -2445) {
                                        b1_elements_mov_Down();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -2099 && parseInt(map_b1_id.style.backgroundPositionY) <= -1800) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -1010 && parseInt(map_b1_id.style.backgroundPositionX) >= -1058) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) >= -2098) {
                                        b1_elements_mov_Down();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -1800 && parseInt(map_b1_id.style.backgroundPositionY) <= -1494) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -964 && parseInt(map_b1_id.style.backgroundPositionX) >= -1008) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) >= -1799) {
                                        b1_elements_mov_Down();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -1494 && parseInt(map_b1_id.style.backgroundPositionY) <= -1185) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -826 && parseInt(map_b1_id.style.backgroundPositionX) >= -874) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) >= -1493) {
                                        b1_elements_mov_Down();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -1185 && parseInt(map_b1_id.style.backgroundPositionY) <= -878) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -678 && parseInt(map_b1_id.style.backgroundPositionX) >= -724) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) >= -1184) {
                                        b1_elements_mov_Down();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -878 && parseInt(map_b1_id.style.backgroundPositionY) <= -570) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -866 && parseInt(map_b1_id.style.backgroundPositionX) >= -914) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) >= -877) {
                                        b1_elements_mov_Down();
                                        Up_Down_val = "on";
                                    }
                                }
                            }
                            break;
                    }
                    break;
                case 2:
                    switch (direction) {
                        case "left":

                            if (fly_left_right_mov === "on") {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) < -5) {
                                        b1_elements_mov_left_stage2();
                                    }
                                }
                            } else {
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -2446 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) < -5) {
                                        b1_elements_mov_left_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -2099 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -701) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) < -5) {
                                        b1_elements_mov_left_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -1797 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -319) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) < -5) {
                                        b1_elements_mov_left_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -1797 && parseInt(map_b1_id.style.backgroundPositionX) < -515 && parseInt(map_b1_id.style.backgroundPositionX) > -745) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) < -516) {
                                        b1_elements_mov_left_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -1495 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -237) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) < -5) {
                                        b1_elements_mov_left_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -1495 && parseInt(map_b1_id.style.backgroundPositionX) < -373 && parseInt(map_b1_id.style.backgroundPositionX) > -604) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) < -374) {
                                        b1_elements_mov_left_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -980 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -334) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) < -5) {
                                        b1_elements_mov_left_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -570 && parseInt(map_b1_id.style.backgroundPositionX) < -102 && parseInt(map_b1_id.style.backgroundPositionX) > -928) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) < -103) {
                                        b1_elements_mov_left_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -2099 && parseInt(map_b1_id.style.backgroundPositionX) < -885 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) < -886) {
                                        b1_elements_mov_left_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -1800 && parseInt(map_b1_id.style.backgroundPositionX) < -940 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) < -941) {
                                        b1_elements_mov_left_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -1494 && parseInt(map_b1_id.style.backgroundPositionX) < -780 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) < -781) {
                                        b1_elements_mov_left_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -1185 && parseInt(map_b1_id.style.backgroundPositionX) < -430 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) < -431) {
                                        b1_elements_mov_left_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -878 && parseInt(map_b1_id.style.backgroundPositionX) < -628 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) < -629) {
                                        b1_elements_mov_left_stage2();
                                    }
                                }
                            }
                            break;

                        case "right":

                            if (fly_left_right_mov === "on") {
                                if (parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility + 1) {
                                        b1_elements_mov_right_stage2();
                                    }
                                }
                            } else {
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -2446 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility + 1) {
                                        b1_elements_mov_right_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -2099 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -701) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) > -700) {
                                        b1_elements_mov_right_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -1797 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -319) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) > -318) {
                                        b1_elements_mov_right_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -1797 && parseInt(map_b1_id.style.backgroundPositionX) < -515 && parseInt(map_b1_id.style.backgroundPositionX) > -745) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) > -744) {
                                        b1_elements_mov_right_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -1495 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -237) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) > -236) {
                                        b1_elements_mov_right_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -1495 && parseInt(map_b1_id.style.backgroundPositionX) < -373 && parseInt(map_b1_id.style.backgroundPositionX) > -604) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) > -603) {
                                        b1_elements_mov_right_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -980 && parseInt(map_b1_id.style.backgroundPositionX) < -4 && parseInt(map_b1_id.style.backgroundPositionX) > -334) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) > -333) {
                                        b1_elements_mov_right_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -570 && parseInt(map_b1_id.style.backgroundPositionX) < -102 && parseInt(map_b1_id.style.backgroundPositionX) > -928) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) > -927) {
                                        b1_elements_mov_right_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -2099 && parseInt(map_b1_id.style.backgroundPositionX) < -885 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility + 1) {
                                        b1_elements_mov_right_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -1800 && parseInt(map_b1_id.style.backgroundPositionX) < -940 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility + 1) {
                                        b1_elements_mov_right_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -1494 && parseInt(map_b1_id.style.backgroundPositionX) < -780 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility + 1) {
                                        b1_elements_mov_right_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -1185 && parseInt(map_b1_id.style.backgroundPositionX) < -430 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility + 1) {
                                        b1_elements_mov_right_stage2();
                                    }
                                }
                                if (parseInt(map_b1_id.style.backgroundPositionY) === -878 && parseInt(map_b1_id.style.backgroundPositionX) < -628 && parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility) {
                                    if (parseInt(map_b1_id.style.backgroundPositionX) > -map_b1_mobility + 1) {
                                        b1_elements_mov_right_stage2();
                                    }
                                }
                            }
                            break;

                        case "up":
                            if (parseInt(map_b1_id.style.backgroundPositionY) >= -2446 && parseInt(map_b1_id.style.backgroundPositionY) <= -560) {
                                if (parseInt(map_b1_id.style.backgroundPositionX) <= -4 && parseInt(map_b1_id.style.backgroundPositionX) >= -map_b1_mobility) {
                                    if (parseInt(map_b1_id.style.backgroundPositionY) <= -561) {
                                        b1_elements_mov_up_stage2();
                                    }
                                }
                            }
                            break;
                    }
                    break;
            }
            break;
        case "c1":
            switch (life_stage_n) {
                case 1:
                    switch (direction) {
                        case "left":
                            if (parseInt(map_c1_id.style.backgroundPositionX) < 0) {
                                map_c1_id.style.backgroundPositionX = parseInt(map_c1_id.style.backgroundPositionX) + 1 + "px";
                                callie_house.style.left = parseInt(callie_house.style.left) + 1 + "px";
                                document.getElementById("map_c1_porta").style.left = parseInt(document.getElementById("map_c1_porta").style.left) + 1 + "px";
                            }
                            break;
                        case "right":
                            if (parseInt(map_c1_id.style.backgroundPositionX) > -map_c1_mobility) {
                                map_c1_id.style.backgroundPositionX = parseInt(map_c1_id.style.backgroundPositionX) - 1 + "px";
                                callie_house.style.left = parseInt(callie_house.style.left) - 1 + "px";
                                document.getElementById("map_c1_porta").style.left = parseInt(document.getElementById("map_c1_porta").style.left) - 1 + "px";
                            }
                            break;
                    }
                    break;
                case 2:
                    switch (direction) {
                        case "left":
                            if (parseInt(map_c1_id.style.backgroundPositionX) < 0) {
                                map_c1_id.style.backgroundPositionX = parseInt(map_c1_id.style.backgroundPositionX) + 1 + "px";
                                callie_house.style.left = parseInt(callie_house.style.left) + 1 + "px";
                                document.getElementById("map_c1_porta").style.left = parseInt(document.getElementById("map_c1_porta").style.left) + 1 + "px";
                            }
                            break;
                        case "right":
                            if (parseInt(map_c1_id.style.backgroundPositionX) > -map_c1_mobility) {
                                map_c1_id.style.backgroundPositionX = parseInt(map_c1_id.style.backgroundPositionX) - 1 + "px";
                                callie_house.style.left = parseInt(callie_house.style.left) - 1 + "px";
                                document.getElementById("map_c1_porta").style.left = parseInt(document.getElementById("map_c1_porta").style.left) - 1 + "px";
                            }
                            break;
                    }
                    break;
            }
            break;
        case "d1":
            switch (life_stage_n) {
                case 2:
                    switch (direction) {
                        case "left":
                            if (parseInt(map_d1_id.style.backgroundPositionX) < 0) {
                                map_d1_id.style.backgroundPositionX = parseInt(map_d1_id.style.backgroundPositionX) + 1 + "px";
                                luca.style.left = parseInt(luca.style.left) + 1 + "px";
                                document.getElementById("map_d1_porta_1").style.left = parseInt(document.getElementById("map_d1_porta_1").style.left) + 1 + "px";
                                document.getElementById("map_d1_porta_2").style.left = parseInt(document.getElementById("map_d1_porta_2").style.left) + 1 + "px";

                                if (parseInt(luca.style.left) <= 342 && parseInt(luca.style.left) >= 140) {
                                    if (chat_d1_luca_val_id === false) {
                                        chat_d1_luca_val();
                                    }
                                }
                            }
                            break;
                        case "right":
                            if (parseInt(map_d1_id.style.backgroundPositionX) > -map_d1_mobility) {
                                map_d1_id.style.backgroundPositionX = parseInt(map_d1_id.style.backgroundPositionX) - 1 + "px";
                                luca.style.left = parseInt(luca.style.left) - 1 + "px";
                                document.getElementById("map_d1_porta_1").style.left = parseInt(document.getElementById("map_d1_porta_1").style.left) - 1 + "px";
                                document.getElementById("map_d1_porta_2").style.left = parseInt(document.getElementById("map_d1_porta_2").style.left) - 1 + "px";

                                if (parseInt(luca.style.left) <= 342 && parseInt(luca.style.left) >= 140) {
                                    if (chat_d1_luca_val_id === false) {
                                        chat_d1_luca_val();
                                    }
                                }
                            }
                            break;
                    }
                    break;
            }
            break;
        case "c2":
            switch (life_stage_n) {
                case 2:
                    switch (direction) {
                        case "left":
                            if (parseInt(map_c2_id.style.backgroundPositionX) < 0) {
                                map_c2_id.style.backgroundPositionX = parseInt(map_c2_id.style.backgroundPositionX) + 1 + "px";
                                document.getElementById("map_c2_porta").style.left = parseInt(document.getElementById("map_c2_porta").style.left) + 1 + "px";
                                document.getElementById("books").style.left = parseInt(document.getElementById("books").style.left) + 1 + "px";
                            }
                            break;
                        case "right":
                            if (parseInt(map_c2_id.style.backgroundPositionX) > -map_c2_mobility) {
                                map_c2_id.style.backgroundPositionX = parseInt(map_c2_id.style.backgroundPositionX) - 1 + "px";
                                document.getElementById("map_c2_porta").style.left = parseInt(document.getElementById("map_c2_porta").style.left) - 1 + "px";
                                document.getElementById("books").style.left = parseInt(document.getElementById("books").style.left) - 1 + "px";
                            }
                            break;
                    }
                    break;
            }
            break;
        case "b2":
            switch (life_stage_n) {
                case 2:
                    switch (direction) {
                        case "left":
                            if (parseInt(map_b2_id.style.backgroundPositionX) < 0) {
                                map_b2_id.style.backgroundPositionX = parseInt(map_b2_id.style.backgroundPositionX) + 1 + "px";
                                document.getElementById("map_b2_porta").style.left = parseInt(document.getElementById("map_b2_porta").style.left) + 1 + "px";
                                luca_house.style.left = parseInt(luca_house.style.left) + 1 + "px";
                            }
                            break;
                        case "right":
                            if (parseInt(map_b2_id.style.backgroundPositionX) > -map_b2_mobility) {
                                map_b2_id.style.backgroundPositionX = parseInt(map_b2_id.style.backgroundPositionX) - 1 + "px";
                                document.getElementById("map_b2_porta").style.left = parseInt(document.getElementById("map_b2_porta").style.left) - 1 + "px";
                                luca_house.style.left = parseInt(luca_house.style.left) - 1 + "px";
                            }
                            break;
                    }
                    break;
            }
            break;
        case "a2":
            switch (life_stage_n) {
                case 2:
                    switch (direction) {
                        case "left":
                            if (fly_left_right_mov === "on") {
                                if (parseInt(map_a2_id.style.backgroundPositionX) < 1 && parseInt(map_a2_id.style.backgroundPositionX) > -map_a2_mobility) {
                                    if (parseInt(map_a2_id.style.backgroundPositionX) < 0) {
                                        a2_elements_mov_left_stage2();
                                    }
                                }
                            } else {
                                if (parseInt(map_a2_id.style.backgroundPositionY) === -1259 && parseInt(map_a2_id.style.backgroundPositionX) < 1 && parseInt(map_a2_id.style.backgroundPositionX) > -map_a2_mobility) {
                                    if (parseInt(map_a2_id.style.backgroundPositionX) < 0) {
                                        a2_elements_mov_left_stage2();
                                    }
                                }

                                if (parseInt(map_a2_id.style.backgroundPositionY) === -872 && parseInt(map_a2_id.style.backgroundPositionX) < 1 && parseInt(map_a2_id.style.backgroundPositionX) > -271) {
                                    if (parseInt(map_a2_id.style.backgroundPositionX) < 0) {
                                        a2_elements_mov_left_stage2();
                                    }
                                }

                                if (parseInt(map_a2_id.style.backgroundPositionY) === -522 && parseInt(map_a2_id.style.backgroundPositionX) < -445 && parseInt(map_a2_id.style.backgroundPositionX) > -map_a2_mobility) {
                                    if (parseInt(map_a2_id.style.backgroundPositionX) < -446) {
                                        a2_elements_mov_left_stage2();
                                    }
                                }
                                if (parseInt(map_a2_id.style.backgroundPositionY) === -192 && parseInt(map_a2_id.style.backgroundPositionX) < -183 && parseInt(map_a2_id.style.backgroundPositionX) > -464) {
                                    if (parseInt(map_a2_id.style.backgroundPositionX) < -184) {
                                        a2_elements_mov_left_stage2();
                                    }
                                }
                            }

                            /*if (parseInt(map_a2_id.style.backgroundPositionX) < 0) {
                                a2_elements_mov_left_stage2();
                            }*/
                            break;
                        case "right":
                            if (fly_left_right_mov === "on") {
                                if (parseInt(map_a2_id.style.backgroundPositionX) < 1 && parseInt(map_a2_id.style.backgroundPositionX) > -map_a2_mobility) {
                                    if (parseInt(map_a2_id.style.backgroundPositionX) > -map_a2_mobility + 1) {
                                        a2_elements_mov_right_stage2();
                                    }
                                }
                            } else {
                                if (parseInt(map_a2_id.style.backgroundPositionY) === -1259 && parseInt(map_a2_id.style.backgroundPositionX) < 1 && parseInt(map_a2_id.style.backgroundPositionX) > -map_a2_mobility) {
                                    if (parseInt(map_a2_id.style.backgroundPositionX) > -map_a2_mobility + 1) {
                                        a2_elements_mov_right_stage2();
                                    }
                                }

                                if (parseInt(map_a2_id.style.backgroundPositionY) === -872 && parseInt(map_a2_id.style.backgroundPositionX) < 1 && parseInt(map_a2_id.style.backgroundPositionX) > -271) {
                                    if (parseInt(map_a2_id.style.backgroundPositionX) > -270) {
                                        a2_elements_mov_right_stage2();
                                    }
                                }
                                if (parseInt(map_a2_id.style.backgroundPositionY) === -522 && parseInt(map_a2_id.style.backgroundPositionX) < -445 && parseInt(map_a2_id.style.backgroundPositionX) > -map_a2_mobility) {
                                    if (parseInt(map_a2_id.style.backgroundPositionX) > -map_a2_mobility + 1) {
                                        a2_elements_mov_right_stage2();
                                    }
                                }
                                if (parseInt(map_a2_id.style.backgroundPositionY) === -192 && parseInt(map_a2_id.style.backgroundPositionX) < -183 && parseInt(map_a2_id.style.backgroundPositionX) > -464) {
                                    if (parseInt(map_a2_id.style.backgroundPositionX) > -463) {
                                        a2_elements_mov_right_stage2();
                                    }
                                }
                            }

                            /*if (parseInt(map_a2_id.style.backgroundPositionX) > -map_a2_mobility) {
                                a2_elements_mov_right_stage2();
                            }*/
                            break;
                        case "up":
                            if (parseInt(map_a2_id.style.backgroundPositionY) >= -1259 && parseInt(map_a2_id.style.backgroundPositionY) <= -128) {
                                if (parseInt(map_a2_id.style.backgroundPositionX) <= 0 && parseInt(map_a2_id.style.backgroundPositionX) >= -map_a2_mobility) {
                                    if (parseInt(map_a2_id.style.backgroundPositionY) <= -128) {
                                        a2_elements_mov_up_stage2();
                                    }
                                }
                            }
                            break;
                    }
                    break;
            }
            break;
    }
}

//-----------------------------------------------

function b1_elements_mov_left() {
    map_b1_id.style.backgroundPositionX = parseInt(map_b1_id.style.backgroundPositionX) + 1 + "px";
    document.getElementById("map_b1_madeira1").style.left = parseInt(document.getElementById("map_b1_madeira1").style.left) + 1 + "px";
    document.getElementById("map_b1_madeira2").style.left = parseInt(document.getElementById("map_b1_madeira2").style.left) + 1 + "px";
    document.getElementById("map_b1_madeira3").style.left = parseInt(document.getElementById("map_b1_madeira3").style.left) + 1 + "px";
    document.getElementById("map_b1_passagem_cima").style.left = parseInt(document.getElementById("map_b1_passagem_cima").style.left) + 1 + "px";
}

function b1_elements_mov_right() {
    map_b1_id.style.backgroundPositionX = parseInt(map_b1_id.style.backgroundPositionX) - 1 + "px";
    document.getElementById("map_b1_madeira1").style.left = parseInt(document.getElementById("map_b1_madeira1").style.left) - 1 + "px";
    document.getElementById("map_b1_madeira2").style.left = parseInt(document.getElementById("map_b1_madeira2").style.left) - 1 + "px";
    document.getElementById("map_b1_madeira3").style.left = parseInt(document.getElementById("map_b1_madeira3").style.left) - 1 + "px";
    document.getElementById("map_b1_passagem_cima").style.left = parseInt(document.getElementById("map_b1_passagem_cima").style.left) - 1 + "px";
}

function b1_elements_mov_up() {
    map_b1_id.style.backgroundPositionY = parseInt(map_b1_id.style.backgroundPositionY) + 1 + "px";
    document.getElementById("map_b1_madeira1").style.top = parseInt(document.getElementById("map_b1_madeira1").style.top) + 1 + "px";
    document.getElementById("map_b1_madeira2").style.top = parseInt(document.getElementById("map_b1_madeira2").style.top) + 1 + "px";
    document.getElementById("map_b1_madeira3").style.top = parseInt(document.getElementById("map_b1_madeira3").style.top) + 1 + "px";
    document.getElementById("map_b1_passagem_cima").style.top = parseInt(document.getElementById("map_b1_passagem_cima").style.top) + 1 + "px";
}

function b1_elements_mov_Down() {
    map_b1_id.style.backgroundPositionY = parseInt(map_b1_id.style.backgroundPositionY) - 1 + "px";
    document.getElementById("map_b1_madeira1").style.top = parseInt(document.getElementById("map_b1_madeira1").style.top) - 1 + "px";
    document.getElementById("map_b1_madeira2").style.top = parseInt(document.getElementById("map_b1_madeira2").style.top) - 1 + "px";
    document.getElementById("map_b1_madeira3").style.top = parseInt(document.getElementById("map_b1_madeira3").style.top) - 1 + "px";
    document.getElementById("map_b1_passagem_cima").style.top = parseInt(document.getElementById("map_b1_passagem_cima").style.top) - 1 + "px";
}

//------------------------------------------------

function b1_elements_mov_left_stage2() {
    map_b1_id.style.backgroundPositionX = parseInt(map_b1_id.style.backgroundPositionX) + 1 + "px";
    document.getElementById("map_b1_madeira1").style.left = parseInt(document.getElementById("map_b1_madeira1").style.left) + 1 + "px";
    document.getElementById("map_b1_madeira2").style.left = parseInt(document.getElementById("map_b1_madeira2").style.left) + 1 + "px";
    document.getElementById("map_b1_madeira3").style.left = parseInt(document.getElementById("map_b1_madeira3").style.left) + 1 + "px";
    document.getElementById("map_b1_passagem_cima").style.left = parseInt(document.getElementById("map_b1_passagem_cima").style.left) + 1 + "px";

    document.getElementById("map_a1_tutorial_3").style.left = parseInt(document.getElementById("map_a1_tutorial_3").style.left) + 1 + "px";
    if (parseInt(document.getElementById("map_a1_tutorial_3").style.left) <= 400 && parseInt(document.getElementById("map_a1_tutorial_3").style.left) >= 110) {
        if (parseInt(document.getElementById("map_a1_tutorial_3").style.bottom) <= 110 && parseInt(document.getElementById("map_a1_tutorial_3").style.bottom) >= -236) {
            document.getElementById("map_a1_tutorial_3").style.opacity = "1";
        }
    } else {
        document.getElementById("map_a1_tutorial_3").style.opacity = "0";
    }
}

function b1_elements_mov_right_stage2() {
    map_b1_id.style.backgroundPositionX = parseInt(map_b1_id.style.backgroundPositionX) - 1 + "px";
    document.getElementById("map_b1_madeira1").style.left = parseInt(document.getElementById("map_b1_madeira1").style.left) - 1 + "px";
    document.getElementById("map_b1_madeira2").style.left = parseInt(document.getElementById("map_b1_madeira2").style.left) - 1 + "px";
    document.getElementById("map_b1_madeira3").style.left = parseInt(document.getElementById("map_b1_madeira3").style.left) - 1 + "px";
    document.getElementById("map_b1_passagem_cima").style.left = parseInt(document.getElementById("map_b1_passagem_cima").style.left) - 1 + "px";

    document.getElementById("map_a1_tutorial_3").style.left = parseInt(document.getElementById("map_a1_tutorial_3").style.left) - 1 + "px";
    if (parseInt(document.getElementById("map_a1_tutorial_3").style.left) <= 400 && parseInt(document.getElementById("map_a1_tutorial_3").style.left) >= 110) {
        if (parseInt(document.getElementById("map_a1_tutorial_3").style.bottom) <= 110 && parseInt(document.getElementById("map_a1_tutorial_3").style.bottom) >= -236) {
            document.getElementById("map_a1_tutorial_3").style.opacity = "1";
        }
    } else {
        document.getElementById("map_a1_tutorial_3").style.opacity = "0";
    }
}

function b1_elements_mov_up_stage2() {
    map_b1_id.style.backgroundPositionY = parseInt(map_b1_id.style.backgroundPositionY) + 1 + "px";
    document.getElementById("map_b1_madeira1").style.top = parseInt(document.getElementById("map_b1_madeira1").style.top) + 1 + "px";
    document.getElementById("map_b1_madeira2").style.top = parseInt(document.getElementById("map_b1_madeira2").style.top) + 1 + "px";
    document.getElementById("map_b1_madeira3").style.top = parseInt(document.getElementById("map_b1_madeira3").style.top) + 1 + "px";
    document.getElementById("map_b1_passagem_cima").style.top = parseInt(document.getElementById("map_b1_passagem_cima").style.top) + 1 + "px";

    document.getElementById("map_a1_tutorial_3").style.bottom = parseInt(document.getElementById("map_a1_tutorial_3").style.bottom) - 1 + "px";
    if (parseInt(document.getElementById("map_a1_tutorial_3").style.bottom) <= 110 && parseInt(document.getElementById("map_a1_tutorial_3").style.bottom) >= -236) {
        if (parseInt(document.getElementById("map_a1_tutorial_3").style.left) <= 400 && parseInt(document.getElementById("map_a1_tutorial_3").style.left) >= 110) {
            document.getElementById("map_a1_tutorial_3").style.opacity = "1";
        }
    } else {
        document.getElementById("map_a1_tutorial_3").style.opacity = "0";
    }
}

function b1_elements_mov_Down_stage2() {
    map_b1_id.style.backgroundPositionY = parseInt(map_b1_id.style.backgroundPositionY) - 1 + "px";
    document.getElementById("map_b1_madeira1").style.top = parseInt(document.getElementById("map_b1_madeira1").style.top) - 1 + "px";
    document.getElementById("map_b1_madeira2").style.top = parseInt(document.getElementById("map_b1_madeira2").style.top) - 1 + "px";
    document.getElementById("map_b1_madeira3").style.top = parseInt(document.getElementById("map_b1_madeira3").style.top) - 1 + "px";
    document.getElementById("map_b1_passagem_cima").style.top = parseInt(document.getElementById("map_b1_passagem_cima").style.top) - 1 + "px";

    document.getElementById("map_a1_tutorial_3").style.bottom = parseInt(document.getElementById("map_a1_tutorial_3").style.bottom) + 1 + "px";
    if (parseInt(document.getElementById("map_a1_tutorial_3").style.bottom) <= 110 && parseInt(document.getElementById("map_a1_tutorial_3").style.bottom) >= -236) {
        if (parseInt(document.getElementById("map_a1_tutorial_3").style.left) <= 400 && parseInt(document.getElementById("map_a1_tutorial_3").style.left) >= 110) {
            document.getElementById("map_a1_tutorial_3").style.opacity = "1";
        }
    } else {
        document.getElementById("map_a1_tutorial_3").style.opacity = "0";
    }
}

//----------------------------------------------------

function a2_elements_mov_left_stage2() {
    map_a2_id.style.backgroundPositionX = parseInt(map_a2_id.style.backgroundPositionX) + 1 + "px";
    document.getElementById("map_a2_porta_1").style.left = parseInt(document.getElementById("map_a2_porta_1").style.left) + 1 + "px";
    document.getElementById("map_a2_porta_2").style.left = parseInt(document.getElementById("map_a2_porta_2").style.left) + 1 + "px";
    document.getElementById("map_a2_porta_3").style.left = parseInt(document.getElementById("map_a2_porta_3").style.left) + 1 + "px";
    document.getElementById("map_a2_passagem_cima").style.left = parseInt(document.getElementById("map_a2_passagem_cima").style.left) + 1 + "px";
}

function a2_elements_mov_right_stage2() {
    map_a2_id.style.backgroundPositionX = parseInt(map_a2_id.style.backgroundPositionX) - 1 + "px";
    document.getElementById("map_a2_porta_1").style.left = parseInt(document.getElementById("map_a2_porta_1").style.left) - 1 + "px";
    document.getElementById("map_a2_porta_2").style.left = parseInt(document.getElementById("map_a2_porta_2").style.left) - 1 + "px";
    document.getElementById("map_a2_porta_3").style.left = parseInt(document.getElementById("map_a2_porta_3").style.left) - 1 + "px";
    document.getElementById("map_a2_passagem_cima").style.left = parseInt(document.getElementById("map_a2_passagem_cima").style.left) - 1 + "px";
}

function a2_elements_mov_up_stage2() {
    map_a2_id.style.backgroundPositionY = parseInt(map_a2_id.style.backgroundPositionY) + 1 + "px";
    document.getElementById("map_a2_porta_1").style.top = parseInt(document.getElementById("map_a2_porta_1").style.top) + 1 + "px";
    document.getElementById("map_a2_porta_2").style.top = parseInt(document.getElementById("map_a2_porta_2").style.top) + 1 + "px";
    document.getElementById("map_a2_porta_3").style.top = parseInt(document.getElementById("map_a2_porta_3").style.top) + 1 + "px";
    document.getElementById("map_a2_passagem_cima").style.top = parseInt(document.getElementById("map_a2_passagem_cima").style.top) + 1 + "px";
}

function a2_elements_mov_Down_stage2() {
    map_a2_id.style.backgroundPositionY = parseInt(map_a2_id.style.backgroundPositionY) - 1 + "px";
    document.getElementById("map_a2_porta_1").style.top = parseInt(document.getElementById("map_a2_porta_1").style.top) - 1 + "px";
    document.getElementById("map_a2_porta_2").style.top = parseInt(document.getElementById("map_a2_porta_2").style.top) - 1 + "px";
    document.getElementById("map_a2_porta_3").style.top = parseInt(document.getElementById("map_a2_porta_3").style.top) - 1 + "px";
    document.getElementById("map_a2_passagem_cima").style.top = parseInt(document.getElementById("map_a2_passagem_cima").style.top) - 1 + "px";
}

// ------------------------------------------------------

function menu_ingame() {
    if (InGame_menu_val === "off") {
        map_movment_val = "off";
        InGame_menu_val = "on";
        document.getElementById("menu-ingame").style.display = "block";
        document.getElementById("map").style.display = "none";
        document.getElementById("chat").style.display = "none";
        character.style.display = "none";
        switch (life_stage) {
            case 1:
                document.getElementById("stage-id-img").src = "img/menu_ingame/larva_icon.png";
                document.getElementById("stage-id-img").style.maxWidth = "90px";
                break;
            case 2:
                document.getElementById("stage-id-img").src = "img/menu_ingame/adulta_icon.png";
                document.getElementById("stage-id-img").style.maxWidth = "90px";
                break;
        }
        switch (map_area) {
            case "a1":
                document.getElementById("area-id-text").innerHTML = "Birthing Chamber";
                break;
            case "b1":
                document.getElementById("area-id-text").innerHTML = "The Sprawl";
                break;
            case "c1":
                document.getElementById("area-id-text").innerHTML = "Callie's House";
                break;
            case "d1":
                document.getElementById("area-id-text").innerHTML = "Lower Trunk";
                break;
            case "a2":
                document.getElementById("area-id-text").innerHTML = "The Heartwood";
                break;
            case "b2":
                document.getElementById("area-id-text").innerHTML = "Luca's House";
                break;
            case "c2":
                document.getElementById("area-id-text").innerHTML = "Library";
                break;
        }
        switch (map_mission_goal) {
            case 1:
                document.getElementById("goal-id-text").innerHTML = "Proceed forward";
                break;
            case 2:
                document.getElementById("goal-id-text").innerHTML = "Find dead wood to eat";
                break;
            case 3:
                document.getElementById("goal-id-text").innerHTML = "Speak to Callie about how to proceed";
                break;
            case 4:
                document.getElementById("goal-id-text").innerHTML = "Return to the hatching point and achieve metamorphosis";
                break;
            case 5:
                document.getElementById("goal-id-text").innerHTML = "Ascend to the trunk";
                break;
            case 6:
                document.getElementById("goal-id-text").innerHTML = "Speak to Luca at his house";
                break;
            case 7:
                document.getElementById("goal-id-text").innerHTML = "Retrieve the book for Luca";
                break;
            case 8:
                document.getElementById("goal-id-text").innerHTML = "Speak to Luca again";
                break;
            case 9:
                document.getElementById("goal-id-text").innerHTML = "Complete the mating ritual before the sun rises";
                break;
        }
        switch (achiv_stag) {
            case 0:
                document.getElementById("achiv_img_id").src = "img/menu_ingame/achiv_stage/Conq0.png";
                document.getElementById("achiv_img_id").style.maxWidth = "200px";
                break;
            case 1:
                document.getElementById("achiv_img_id").src = "img/menu_ingame/achiv_stage/Conq1.png";
                document.getElementById("achiv_img_id").style.maxWidth = "200px";
                break;
            case 2:
                document.getElementById("achiv_img_id").src = "img/menu_ingame/achiv_stage/Conq2.png";
                document.getElementById("achiv_img_id").style.maxWidth = "200px";
                break;
        }
    } else if (InGame_menu_val === "on") {
        if (map_movment_chat === "off") {
            map_movment_val = "on";
        }
        InGame_menu_val = "off";
        document.getElementById("menu-ingame").style.display = "none";
        document.getElementById("map").style.display = "block";
        document.getElementById("chat").style.display = "block";
        character.style.display = "inline";
    }
}

function apanhar_madeira_val() {
    if (parseInt(map_b1_id.style.backgroundPositionY) >= -2446 && parseInt(map_b1_id.style.backgroundPositionY) <= -2446 + 56) {
        if (parseInt(map_b1_id.style.backgroundPositionX) <= -1024 && parseInt(map_b1_id.style.backgroundPositionX) >= -1060) {
            if (madeira1_achievement === "off") {
                document.getElementById("map_b1_madeira1").style.opacity = "0";
                madeira1_achievement = "on";
                quantidade_madeira++;
                eatingSound();
                if (quantidade_madeira === 3) {
                    map_mission_goal = 3;
                }
            }
        }
    }
    if (parseInt(map_b1_id.style.backgroundPositionY) >= -878 && parseInt(map_b1_id.style.backgroundPositionY) <= -878 + 56) {
        if (parseInt(map_b1_id.style.backgroundPositionX) <= -1024 && parseInt(map_b1_id.style.backgroundPositionX) >= -1060) {
            if (madeira2_achievement === "off") {
                document.getElementById("map_b1_madeira2").style.opacity = "0";
                madeira2_achievement = "on";
                quantidade_madeira++;
                eatingSound();
                if (quantidade_madeira === 3) {
                    map_mission_goal = 3;
                }
            }
        }
    }
    if (parseInt(map_b1_id.style.backgroundPositionY) >= -570 && parseInt(map_b1_id.style.backgroundPositionY) <= -570 + 56) {
        if (parseInt(map_b1_id.style.backgroundPositionX) <= -243 && parseInt(map_b1_id.style.backgroundPositionX) >= -368) {
            if (madeira3_achievement === "off") {
                document.getElementById("map_b1_madeira3").style.opacity = "0";
                madeira3_achievement = "on";
                quantidade_madeira++;
                eatingSound();
                if (quantidade_madeira === 3) {
                    map_mission_goal = 3;
                }
            }
        }
    }
}

function chat_val() {
    if (chat_a1_callie_val_id === false) {
        if (parseInt(callie.style.left) <= 530 && parseInt(callie.style.left) >= 440) {
            chat_a1_callie_val_id = true;
            chat_a1_callie_val()
        }
    }

    if (parseInt(callie_house.style.left) <= 570 && parseInt(callie_house.style.left) >= 457) {
        if (chat_c1_callie_val_id === false) {
            if (map_mission_goal < 3 && callie_house_talk === false) {
                chat_c1_callie_A_val()
            }
        }
        if (chat_c1_callie_val_id === false) {
            if (map_mission_goal === 3 && callie_house_talk === false) {
                chat_c1_callie_B_val()
            }
        }
        if (chat_c1_callie_val_id === false) {
            if (map_mission_goal < 3 && callie_house_talk === true) {
                chat_c1_callie_C_val()
            }
        }
        if (chat_c1_callie_val_id === false) {
            if (map_mission_goal >= 3 && map_mission_goal <= 4 && callie_house_talk === true) {
                chat_c1_callie_D_val()
            }
        }
        if (chat_c1_callie_val_id === false) {
            if (map_mission_goal >= 5) {
                chat_c1_callie_E_val()
            }
        }
    }

    if (parseInt(luca_house.style.left) <= 342 && parseInt(luca_house.style.left) >= 258) {
        if (chat_b2_luca_house_val_id === false) {
            if (map_mission_goal === 6 && luca_house_talk === false) {
                chat_b2_luca_house_A_val()
            }
        }
        if (chat_b2_luca_house_val_id === false) {
            if (map_mission_goal === 7 && luca_house_talk === true) {
                chat_b2_luca_house_B_val()
            }
        }
        if (chat_b2_luca_house_val_id === false) {
            if (map_mission_goal === 8 && luca_house_talk === true) {
                chat_b2_luca_house_C_val()
            }
        }
    }

    if (parseInt(document.getElementById("books").style.left) <= 465 && parseInt(document.getElementById("books").style.left) >= 345) {
        if (chat_c2_library_val_id === false) {
            if (map_mission_goal === 6) {
                chat_c2_library_A_val()
            }
        }
        if (chat_c2_library_val_id === false) {
            if (map_mission_goal === 7) {
                chat_c2_library_B_val()
            }
        }
        if (chat_c2_library_val_id === false) {
            if (map_mission_goal === 8) {
                chat_c2_library_C_val()
            }
        }
        if (chat_c2_library_val_id === false) {
            if (map_mission_goal === 9) {
                chat_c2_library_A_val()
            }
        }
    }
}

function chat_a1_callie_val() {
    map_movment_chat = "on";
    map_movment_val = "off";
    document.getElementById("chat_global").style.display = "block";
    document.getElementById("chat_background").style.display = "inline";
    document.getElementById("map").style.filter = "blur(5px)";
    document.getElementById("character_id").style.filter = "blur(5px)";
    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "1";
        document.getElementById("chat_background").style.opacity = "1";
    }, 600)

    document.getElementById("chat_question").innerHTML = "<b> ???: </b> Hello there. Now this is something you don’t see every day.";
    document.getElementById("chat_option_1").innerHTML = "<b> A) </b>... Hi.";
    document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Yeah, I don’t see giant stag beetles that often either.";
    document.getElementById("chat_option_3").innerHTML = "<b> C) </b> This has got to be the weirdest dream I’ve ever had. A talking bug?";

    document.getElementById("chat_option_1").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_2").style.display = "none";
        document.getElementById("chat_option_3").style.display = "none";
        document.getElementById("chat_question").innerHTML = "<b> ???: </b> You seem friendly enough. Good start. <br> <b> ???: </b> And you can speak too, despite being just a larva... <br> <b> ???: </b> Hmm...";
        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Wait, a larva?";
        document.getElementById("chat_option_2").innerHTML = "";
        document.getElementById("chat_option_3").innerHTML = "";

        document.getElementById("chat_option_1").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_question").innerHTML = "<b> ???: </b> Oh, yes. You’re a stag larva. Your job is to eat all the dead wood you can find until you’re ready to become a beetle like me. <br> <b> ???: </b> Keeps the tree clean, too. Everybody wins. <br> <b> ???: </b> You’re hungry, I’m sure?";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Now that you mention it...";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_question").innerHTML = "<b> ???: </b> Haha, it’s only natural. I don’t know what to do with you yet, but you do need to eat. Go on, you can have this clump of dead wood behind me. It fell not long ago. Can’t get any fresher than that. <br> <b> Callie: </b> Oh, I’m Callie by the way. I tend to the eggs here in the roots of the tree. <br> <b> Callie: </b> My house isn’t far. Come see me once you’ve had your fill. <br> <b> Callie: </b> And... Don’t stray too far up. Trust me on that.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Got it. Thank you, Callie.";
                document.getElementById("chat_option_2").innerHTML = "<b> B) </b> ... What happens if I do that?";

                document.getElementById("chat_option_2").style.display = "block";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> See you soon.";

                    document.getElementById("chat_option_1").style.display = "none";
                    document.getElementById("chat_option_2").style.display = "none";
                    chat_a1_callie_end();
                }

                document.getElementById("chat_option_2").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> We’ll talk about it later. See you soon.";

                    document.getElementById("chat_option_1").style.display = "none";
                    document.getElementById("chat_option_2").style.display = "none";
                    chat_a1_callie_end();
                }
            }
        }

    }
    document.getElementById("chat_option_2").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_2").style.display = "none";
        document.getElementById("chat_option_3").style.display = "none";
        document.getElementById("chat_question").innerHTML = "<b> ???: </b> The only giant thing here is you, and the egg you hatched from. Definitely not one of mine. <br> <b> ???: </b> And you can speak too, despite being just a larva... <br> <b> ???: </b> Hmm...";
        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Wait, a larva?";
        document.getElementById("chat_option_2").innerHTML = "";
        document.getElementById("chat_option_3").innerHTML = "";

        document.getElementById("chat_option_1").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_question").innerHTML = "<b> ???: </b> Oh, yes. You’re a stag larva. Your job is to eat all the dead wood you can find until you’re ready to become a beetle like me. <br> <b> ???: </b> Keeps the tree clean, too. Everybody wins. <br> <b> ???: </b> You’re hungry, I’m sure?";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Now that you mention it...";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_question").innerHTML = "<b> ???: </b> Haha, it’s only natural. I don’t know what to do with you yet, but you do need to eat. Go on, you can have this clump of dead wood behind me. It fell not long ago. Can’t get any fresher than that. <br> <b> Callie: </b> Oh, I’m Callie by the way. I tend to the eggs here in the roots of the tree. <br> <b> Callie: </b> My house isn’t far. Come see me once you’ve had your fill. <br> <b> Callie: </b> And... Don’t stray too far up. Trust me on that.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Got it. Thank you, Callie.";
                document.getElementById("chat_option_2").innerHTML = "<b> B) </b> ... What happens if I do that?";

                document.getElementById("chat_option_2").style.display = "block";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> See you soon.";

                    document.getElementById("chat_option_1").style.display = "none";
                    document.getElementById("chat_option_2").style.display = "none";
                    chat_a1_callie_end();
                }

                document.getElementById("chat_option_2").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> We’ll talk about it later. See you soon.";

                    document.getElementById("chat_option_1").style.display = "none";
                    document.getElementById("chat_option_2").style.display = "none";
                    chat_a1_callie_end();
                }
            }
        }
    }
    document.getElementById("chat_option_3").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_2").style.display = "none";
        document.getElementById("chat_option_3").style.display = "none";
        document.getElementById("chat_question").innerHTML = "<b> ???: </b> Dream? I’m very real, I promise you. You’re the odd one out in this situation. <br> <b> ???: </b> And you can speak too, despite being just a larva... <br> <b> ???: </b> Hmm...";
        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Wait, a larva?";
        document.getElementById("chat_option_2").innerHTML = "";
        document.getElementById("chat_option_3").innerHTML = "";

        document.getElementById("chat_option_1").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_question").innerHTML = "<b> ???: </b> Oh, yes. You’re a stag larva. Your job is to eat all the dead wood you can find until you’re ready to become a beetle like me. <br> <b> ???: </b> Keeps the tree clean, too. Everybody wins. <br> <b> ???: </b> You’re hungry, I’m sure?";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Now that you mention it...";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_question").innerHTML = "<b> ???: </b> Haha, it’s only natural. I don’t know what to do with you yet, but you do need to eat. Go on, you can have this clump of dead wood behind me. It fell not long ago. Can’t get any fresher than that. <br> <b> Callie: </b> Oh, I’m Callie by the way. I tend to the eggs here in the roots of the tree. <br> <b> Callie: </b> My house isn’t far. Come see me once you’ve had your fill. <br> <b> Callie: </b> And... Don’t stray too far up. Trust me on that.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Got it. Thank you, Callie.";
                document.getElementById("chat_option_2").innerHTML = "<b> B) </b> ... What happens if I do that?";

                document.getElementById("chat_option_2").style.display = "block";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> See you soon.";

                    document.getElementById("chat_option_1").style.display = "none";
                    document.getElementById("chat_option_2").style.display = "none";
                    chat_a1_callie_end();
                }

                document.getElementById("chat_option_2").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> We’ll talk about it later. See you soon.";

                    document.getElementById("chat_option_1").style.display = "none";
                    document.getElementById("chat_option_2").style.display = "none";
                    chat_a1_callie_end();
                }
            }
        }
    }
}

function chat_a1_callie_end() {
    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "0";
        document.getElementById("chat_background").style.opacity = "0";
        document.getElementById("map").style.filter = "blur(0px)";
        document.getElementById("character_id").style.filter = "blur(0px)";

        setTimeout(function () {
            clearInterval(timer_callie_IdleLeft);
            callie.src = "img/callie/CallieVoar.png";
            callie.style.bottom = "600px";
            setTimeout(function () {
                callie.style.display = "none";
                document.getElementById("chat_global").style.opacity = "1";
                document.getElementById("chat_background").style.opacity = "1";
                document.getElementById("map").style.filter = "blur(5px)";
                document.getElementById("character_id").style.filter = "blur(5px)";
                document.getElementById("chat_question").innerHTML = "<br> <br> <br> <b> The Outsider: </b> Guess I should get started on eating that wood.";
                setTimeout(function () {
                    document.getElementById("chat_global").style.opacity = "0";
                    document.getElementById("chat_background").style.opacity = "0";
                    document.getElementById("map").style.filter = "blur(0px)";
                    document.getElementById("character_id").style.filter = "blur(0px)";
                    setTimeout(function () {
                        map_movment_val = "on";
                        map_movment_chat = "off"
                        portal_a1_b1_val = "on";
                        portal_madeira = true;
                        map_mission_goal = 2;
                        document.getElementById("chat_global").style.display = "none";
                        document.getElementById("chat_background").style.display = "none";
                    }, 1000);
                }, 4000);
            }, 2000);
        }, 2000);
    }, 3000);
}

function chat_c1_callie_A_val() {
    map_movment_chat = "on";
    map_movment_val = "off";
    document.getElementById("chat_global").style.display = "block";
    document.getElementById("chat_background").style.display = "inline";
    document.getElementById("map").style.filter = "blur(5px)";
    document.getElementById("character_id").style.filter = "blur(5px)";
    document.getElementById("chat_option_1").style.display = "block";
    document.getElementById("chat_option_2").style.display = "block";
    chat_c1_callie_val_id = true;
    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "1";
        document.getElementById("chat_background").style.opacity = "1";
    }, 600)

    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> There you are. Had a chance to look around?";
    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> This place is huge.";
    document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Nice house you got here.";
    document.getElementById("chat_option_3").style.display = "none";

    document.getElementById("chat_option_1").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_2").style.display = "none";
        document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Trees tend to be. It’s been home to many of our kind for as long as I can remember. <br> <b> Callie: </b> But you’re not one of us, are you?";
        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I suppose not. So what was that about straying too far?";
        document.getElementById("chat_option_2").innerHTML = "";

        document.getElementById("chat_option_1").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_question").innerHTML = "<b> Callie: </b> The trunk is Luca’s territory. Many larvae that grow into beetles attempt to face him but ultimately end up back down here, or die.<br> <b> Callie: </b> If you went up there as you are right now, you wouldn’t stand much of a chance.";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Why would I want to go up there?";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Well... Clearly, there’s something special about you. There’s nothing for you here, so maybe you need to keep climbing.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> You mean my size?";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> I mean everything. Your egg just appeared out of thin air, you’re huge for a larva, you can talk, and your coming coincided with the blue moon that shines tonight.";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> The moon? What?";

                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_question").innerHTML = "<b> Callie: </b> There are whispers of a legend. Once in a blue moon, the forest awakens. <br> <b> Callie: </b> It’s alive, like you and me, but it cannot speak. It slumbers. When it awakens, though... <br> <b> Callie: </b> It does speak. But not through words. Actions. Visions.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Or dreams.";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Maybe. Who knows? I could be wrong and you could just be a very fat larva lucky enough to speak right out of the egg.";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’ll have you know I’m healthy for my weight.";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_2").style.display = "block";
                                document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Haha. Sarcastic, are we? <br> <b> Callie: </b> Something tells me you’ll grow out of that form really quickly. Go find some more dead wood to eat. I’ll be waiting. <br> <b> Callie: </b> In the meantime, I need to care for some lesser capable larvae.";
                                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Back to work, then...";
                                document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Do you need help with that?";

                                document.getElementById("chat_option_1").onclick = function () {
                                    buttonClickSound();
                                    document.getElementById("chat_option_1").style.display = "none";
                                    document.getElementById("chat_option_2").style.display = "none";
                                    setTimeout(function () {
                                        document.getElementById("chat_global").style.opacity = "0";
                                        document.getElementById("chat_background").style.opacity = "0";
                                        document.getElementById("map").style.filter = "blur(0px)";
                                        document.getElementById("character_id").style.filter = "blur(0px)";
                                        map_movment_val = "on";
                                        map_movment_chat = "off";
                                        callie_house_talk = true;
                                        chat_c1_callie_val_id = false;
                                    }, 500);
                                }
                                document.getElementById("chat_option_2").onclick = function () {
                                    buttonClickSound();
                                    document.getElementById("chat_option_1").style.display = "none";
                                    document.getElementById("chat_option_2").style.display = "none";
                                    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Huh? Well, I suppose... Here, I’ll show you how you can help.";
                                    setTimeout(function () {
                                        document.getElementById("chat_global").style.opacity = "0";
                                        document.getElementById("chat_background").style.opacity = "0";
                                        document.getElementById("map").style.filter = "blur(0px)";
                                        document.getElementById("character_id").style.filter = "blur(0px)";
                                        callie_house_talk = true;
                                        chat_c1_callie_val_id = false;
                                        setTimeout(function () {
                                            blackout = 2;
                                            fade_blackout();
                                            setTimeout(function () {
                                                document.getElementById("map").style.display = "none";
                                                document.getElementById("chat").style.display = "none";
                                                character.style.display = "none";
                                                m1setup();
                                                isPlayingMinigame = true;

                                            }, 1500)
                                        }, 1000)
                                    }, 3000);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    document.getElementById("chat_option_2").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_2").style.display = "none";
        document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Thank you. It’s not much, but it’s home. Our kind loves to make their own. <br> <b> Callie: </b> But you’re not one of us, are you?";
        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I suppose not. So what was that about straying too far?";
        document.getElementById("chat_option_2").innerHTML = "";

        document.getElementById("chat_option_1").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_question").innerHTML = "<b> Callie: </b> The trunk is Luca’s territory. Many larvae that grow into beetles attempt to face him but ultimately end up back down here, or die.<br> <b> Callie: </b> If you went up there as you are right now, you wouldn’t stand much of a chance.";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Why would I want to go up there?";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Well... Clearly, there’s something special about you. There’s nothing for you here, so maybe you need to keep climbing.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> You mean my size?";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> I mean everything. Your egg just appeared out of thin air, you’re huge for a larva, you can talk, and your coming coincided with the blue moon that shines tonight.";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> The moon? What?";

                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_question").innerHTML = "<b> Callie: </b> There are whispers of a legend. Once in a blue moon, the forest awakens. <br> <b> Callie: </b> It’s alive, like you and me, but it cannot speak. It slumbers. When it awakens, though... <br> <b> Callie: </b> It does speak. But not through words. Actions. Visions.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Or dreams.";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Maybe. Who knows? I could be wrong and you could just be a very fat larva lucky enough to speak right out of the egg.";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’ll have you know I’m healthy for my weight.";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_2").style.display = "block";
                                document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Haha. Sarcastic, are we? <br> <b> Callie: </b> Something tells me you’ll grow out of that form really quickly. Go find some more dead wood to eat. I’ll be waiting. <br> <b> Callie: </b> In the meantime, I need to care for some lesser capable larvae.";
                                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Back to work, then...";
                                document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Do you need help with that?";

                                document.getElementById("chat_option_1").onclick = function () {
                                    buttonClickSound();
                                    document.getElementById("chat_option_1").style.display = "none";
                                    document.getElementById("chat_option_2").style.display = "none";
                                    setTimeout(function () {
                                        document.getElementById("chat_global").style.opacity = "0";
                                        document.getElementById("chat_background").style.opacity = "0";
                                        document.getElementById("map").style.filter = "blur(0px)";
                                        document.getElementById("character_id").style.filter = "blur(0px)";
                                        map_movment_val = "on";
                                        map_movment_chat = "off";
                                        callie_house_talk = true;
                                        chat_c1_callie_val_id = false;
                                    }, 500);
                                }
                                document.getElementById("chat_option_2").onclick = function () {
                                    buttonClickSound();
                                    document.getElementById("chat_option_1").style.display = "none";
                                    document.getElementById("chat_option_2").style.display = "none";
                                    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Huh? Well, I suppose... Here, I’ll show you how you can help.";
                                    setTimeout(function () {
                                        document.getElementById("chat_global").style.opacity = "0";
                                        document.getElementById("chat_background").style.opacity = "0";
                                        document.getElementById("map").style.filter = "blur(0px)";
                                        document.getElementById("character_id").style.filter = "blur(0px)";
                                        callie_house_talk = true;
                                        chat_c1_callie_val_id = false;
                                        setTimeout(function () {
                                            blackout = 2;
                                            fade_blackout();
                                            setTimeout(function () {
                                                document.getElementById("map").style.display = "none";
                                                document.getElementById("chat").style.display = "none";
                                                character.style.display = "none";
                                                m1setup();
                                                isPlayingMinigame = true;
                                            }, 1500)
                                        }, 1000)
                                    }, 3000);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function chat_c1_callie_B_val() {
    map_movment_chat = "on";
    map_movment_val = "off";
    document.getElementById("chat_global").style.display = "block";
    document.getElementById("chat_background").style.display = "inline";
    document.getElementById("map").style.filter = "blur(5px)";
    document.getElementById("character_id").style.filter = "blur(5px)";
    document.getElementById("chat_option_1").style.display = "block";
    document.getElementById("chat_option_2").style.display = "block";
    chat_c1_callie_val_id = true;
    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "1";
        document.getElementById("chat_background").style.opacity = "1";
    }, 600)

    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> There you are. Had a chance to look around?";
    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> This place is huge.";
    document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Nice house you got here.";
    document.getElementById("chat_option_3").style.display = "none";

    document.getElementById("chat_option_1").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_2").style.display = "none";
        document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Trees tend to be. It’s been home to many of our kind for as long as I can remember. <br> <b> Callie: </b> But you’re not one of us, are you?";
        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I suppose not. So what was that about straying too far?";
        document.getElementById("chat_option_2").innerHTML = "";

        document.getElementById("chat_option_1").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_question").innerHTML = "<b> Callie: </b> The trunk is Luca’s territory. Many larvae that grow into beetles attempt to face him but ultimately end up back down here, or die.<br> <b> Callie: </b> If you went up there as you are right now, you wouldn’t stand much of a chance.";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Why would I want to go up there?";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Well... Clearly, there’s something special about you. There’s nothing for you here, so maybe you need to keep climbing.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> You mean my size?";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> I mean everything. Your egg just appeared out of thin air, you’re huge for a larva, you can talk, and your coming coincided with the blue moon that shines tonight.";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> The moon? What?";

                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_question").innerHTML = "<b> Callie: </b> There are whispers of a legend. Once in a blue moon, the forest awakens. <br> <b> Callie: </b> It’s alive, like you and me, but it cannot speak. It slumbers. When it awakens, though... <br> <b> Callie: </b> It does speak. But not through words. Actions. Visions.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Or dreams.";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Maybe. Who knows? I could be wrong and you could just be a very fat larva lucky enough to speak right out of the egg.";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’ll have you know I’m healthy for my weight.";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_2").style.display = "block";
                                document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Haha. Sarcastic, are we? <br> <b> Callie: </b> But I sense you’re ready to grow... <br> <b> Callie: </b> Go back to where you hatched. The soil there is soft and rich with nutrients. <br> <b> Callie: </b> Burrow into the ground and let your thoughts drift. Empty your mind. Think about nothing in particular. <br> <b> Callie: </b> You’ll feel it when it happens. Then you’ll be ready to face Luca. Good luck. <br> <b> Callie: </b> In the meantime, I need to care for some lesser capable larvae.";
                                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Thank you for your help, Callie.";
                                document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Do you need help with that?";

                                document.getElementById("chat_option_1").onclick = function () {
                                    buttonClickSound();
                                    document.getElementById("chat_option_1").style.display = "none";
                                    document.getElementById("chat_option_2").style.display = "none";
                                    setTimeout(function () {
                                        document.getElementById("chat_global").style.opacity = "0";
                                        document.getElementById("chat_background").style.opacity = "0";
                                        document.getElementById("map").style.filter = "blur(0px)";
                                        document.getElementById("character_id").style.filter = "blur(0px)";
                                        map_movment_val = "on";
                                        map_movment_chat = "off";
                                        map_mission_goal = 4;
                                        callie_house_talk = true;
                                        chat_c1_callie_val_id = false;
                                    }, 500);
                                }
                                document.getElementById("chat_option_2").onclick = function () {
                                    buttonClickSound();

                                    document.getElementById("chat_option_1").style.display = "none";
                                    document.getElementById("chat_option_2").style.display = "none";
                                    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Huh? Well, I suppose... Here, I’ll show you how you can help.";
                                    setTimeout(function () {
                                        document.getElementById("chat_global").style.opacity = "0";
                                        document.getElementById("chat_background").style.opacity = "0";
                                        document.getElementById("map").style.filter = "blur(0px)";
                                        document.getElementById("character_id").style.filter = "blur(0px)";
                                        map_mission_goal = 4;
                                        callie_house_talk = true;
                                        chat_c1_callie_val_id = false;
                                        setTimeout(function () {
                                            blackout = 2;
                                            fade_blackout();
                                            setTimeout(function () {
                                                document.getElementById("map").style.display = "none";
                                                document.getElementById("chat").style.display = "none";
                                                character.style.display = "none";
                                                m1setup();
                                                isPlayingMinigame = true;
                                            }, 1500)
                                        }, 1000)
                                    }, 3000);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    document.getElementById("chat_option_2").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_2").style.display = "none";
        document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Thank you. It’s not much, but it’s home. Our kind loves to make their own. <br> <b> Callie: </b> But you’re not one of us, are you?";
        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I suppose not. So what was that about straying too far?";
        document.getElementById("chat_option_2").innerHTML = "";

        document.getElementById("chat_option_1").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_question").innerHTML = "<b> Callie: </b> The trunk is Luca’s territory. Many larvae that grow into beetles attempt to face him but ultimately end up back down here, or die.<br> <b> Callie: </b> If you went up there as you are right now, you wouldn’t stand much of a chance.";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Why would I want to go up there?";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Well... Clearly, there’s something special about you. There’s nothing for you here, so maybe you need to keep climbing.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> You mean my size?";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> I mean everything. Your egg just appeared out of thin air, you’re huge for a larva, you can talk, and your coming coincided with the blue moon that shines tonight.";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> The moon? What?";

                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_question").innerHTML = "<b> Callie: </b> There are whispers of a legend. Once in a blue moon, the forest awakens. <br> <b> Callie: </b> It’s alive, like you and me, but it cannot speak. It slumbers. When it awakens, though... <br> <b> Callie: </b> It does speak. But not through words. Actions. Visions.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Or dreams.";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Maybe. Who knows? I could be wrong and you could just be a very fat larva lucky enough to speak right out of the egg.";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’ll have you know I’m healthy for my weight.";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_2").style.display = "block";
                                document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Haha. Sarcastic, are we? <br> <b> Callie: </b> But I sense you’re ready to grow... <br> <b> Callie: </b> Go back to where you hatched. The soil there is soft and rich with nutrients. <br> <b> Callie: </b> Burrow into the ground and let your thoughts drift. Empty your mind. Think about nothing in particular. <br> <b> Callie: </b> You’ll feel it when it happens. Then you’ll be ready to face Luca. Good luck. <br> <b> Callie: </b> In the meantime, I need to care for some lesser capable larvae.";
                                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Thank you for your help, Callie.";
                                document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Do you need help with that?";

                                document.getElementById("chat_option_1").onclick = function () {
                                    buttonClickSound();
                                    document.getElementById("chat_option_1").style.display = "none";
                                    document.getElementById("chat_option_2").style.display = "none";
                                    setTimeout(function () {
                                        document.getElementById("chat_global").style.opacity = "0";
                                        document.getElementById("chat_background").style.opacity = "0";
                                        document.getElementById("map").style.filter = "blur(0px)";
                                        document.getElementById("character_id").style.filter = "blur(0px)";
                                        map_movment_val = "on";
                                        map_movment_chat = "off";
                                        map_mission_goal = 4;
                                        callie_house_talk = true;
                                        chat_c1_callie_val_id = false;
                                    }, 500);
                                }
                                document.getElementById("chat_option_2").onclick = function () {
                                    buttonClickSound();

                                    document.getElementById("chat_option_1").style.display = "none";
                                    document.getElementById("chat_option_2").style.display = "none";
                                    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Huh? Well, I suppose... Here, I’ll show you how you can help.";
                                    setTimeout(function () {
                                        document.getElementById("chat_global").style.opacity = "0";
                                        document.getElementById("chat_background").style.opacity = "0";
                                        document.getElementById("map").style.filter = "blur(0px)";
                                        document.getElementById("character_id").style.filter = "blur(0px)";
                                        map_mission_goal = 4;
                                        callie_house_talk = true;
                                        chat_c1_callie_val_id = false;
                                        setTimeout(function () {
                                            blackout = 2;
                                            fade_blackout();
                                            setTimeout(function () {
                                                document.getElementById("map").style.display = "none";
                                                document.getElementById("chat").style.display = "none";
                                                character.style.display = "none";
                                                m1setup();
                                                isPlayingMinigame = true;
                                            }, 1500)
                                        }, 1000)
                                    }, 3000);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function chat_c1_callie_C_val() {
    map_movment_chat = "on";
    map_movment_val = "off";
    document.getElementById("chat_global").style.display = "block";
    document.getElementById("chat_background").style.display = "inline";
    document.getElementById("map").style.filter = "blur(5px)";
    document.getElementById("character_id").style.filter = "blur(5px)";
    document.getElementById("chat_option_1").style.display = "block";
    document.getElementById("chat_option_2").style.display = "none";
    chat_c1_callie_val_id = true;
    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "1";
        document.getElementById("chat_background").style.opacity = "1";
    }, 600)

    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Something tells me you’ll grow out of that form really quickly. Go find some more dead wood to eat. I’ll be waiting.";
    if (m1_done === false) {
        document.getElementById("chat_question").innerHTML += " <br> <b> Callie: </b> In the meantime, I need to care for some lesser capable larvae.";
        document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Do you need help with that?";
        document.getElementById("chat_option_2").style.display = "block";
    }
    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Back to work, then...";
    document.getElementById("chat_option_3").style.display = "none";

    document.getElementById("chat_option_1").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_1").style.display = "none";
        document.getElementById("chat_option_2").style.display = "none";
        setTimeout(function () {
            document.getElementById("chat_global").style.opacity = "0";
            document.getElementById("chat_background").style.opacity = "0";
            document.getElementById("map").style.filter = "blur(0px)";
            document.getElementById("character_id").style.filter = "blur(0px)";
            map_movment_val = "on";
            map_movment_chat = "off";
            chat_c1_callie_val_id = false;
        }, 500);
    }

    document.getElementById("chat_option_2").onclick = function () {
        buttonClickSound();

        document.getElementById("chat_option_1").style.display = "none";
        document.getElementById("chat_option_2").style.display = "none";
        document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Huh? Well, I suppose... Here, I’ll show you how you can help.";
        setTimeout(function () {
            document.getElementById("chat_global").style.opacity = "0";
            document.getElementById("chat_background").style.opacity = "0";
            document.getElementById("map").style.filter = "blur(0px)";
            document.getElementById("character_id").style.filter = "blur(0px)";
            chat_c1_callie_val_id = false;
            setTimeout(function () {
                blackout = 2;
                fade_blackout();
                setTimeout(function () {
                    document.getElementById("map").style.display = "none";
                    document.getElementById("chat").style.display = "none";
                    character.style.display = "none";
                    m1setup();
                    isPlayingMinigame = true;

                }, 1500)
            }, 1000)
        }, 3000);
    }
}

function chat_c1_callie_D_val() {
    map_movment_chat = "on";
    map_movment_val = "off";
    document.getElementById("chat_global").style.display = "block";
    document.getElementById("chat_background").style.display = "inline";
    document.getElementById("map").style.filter = "blur(5px)";
    document.getElementById("character_id").style.filter = "blur(5px)";
    document.getElementById("chat_option_1").style.display = "block";
    document.getElementById("chat_option_2").style.display = "none";
    chat_c1_callie_val_id = true;
    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "1";
        document.getElementById("chat_background").style.opacity = "1";
    }, 600)

    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Go back to where you hatched. The soil there is soft and rich with nutrients. <br> <b> Callie: </b> Burrow into the ground and let your thoughts drift. Empty your mind. Think about nothing in particular. <br> <b> Callie: </b> You’ll feel it when it happens. Then you’ll be ready to face Luca. Good luck.";
    if (m1_done === false) {
        document.getElementById("chat_question").innerHTML += " <br> <b> Callie: </b> In the meantime, I need to care for some lesser capable larvae.";
        document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Do you need help with that?";
        document.getElementById("chat_option_2").style.display = "block";
    }
    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Thank you for your help, Callie.";
    document.getElementById("chat_option_3").style.display = "none";

    document.getElementById("chat_option_1").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_1").style.display = "none";
        document.getElementById("chat_option_2").style.display = "none";
        setTimeout(function () {
            document.getElementById("chat_global").style.opacity = "0";
            document.getElementById("chat_background").style.opacity = "0";
            document.getElementById("map").style.filter = "blur(0px)";
            document.getElementById("character_id").style.filter = "blur(0px)";
            map_movment_val = "on";
            map_movment_chat = "off";
            map_mission_goal = 4;
            chat_c1_callie_val_id = false;
        }, 500);
    }

    document.getElementById("chat_option_2").onclick = function () {
        buttonClickSound();

        document.getElementById("chat_option_1").style.display = "none";
        document.getElementById("chat_option_2").style.display = "none";
        document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Huh? Well, I suppose... Here, I’ll show you how you can help.";
        setTimeout(function () {
            document.getElementById("chat_global").style.opacity = "0";
            document.getElementById("chat_background").style.opacity = "0";
            document.getElementById("map").style.filter = "blur(0px)";
            document.getElementById("character_id").style.filter = "blur(0px)";
            map_mission_goal = 4;
            chat_c1_callie_val_id = false;
            setTimeout(function () {
                blackout = 2;
                fade_blackout();
                setTimeout(function () {
                    document.getElementById("map").style.display = "none";
                    document.getElementById("chat").style.display = "none";
                    character.style.display = "none";
                    m1setup();
                    isPlayingMinigame = true;

                }, 1500)
            }, 1000)
        }, 3000);
    }
}

function chat_c1_callie_E_val() {
    map_movment_chat = "on";
    map_movment_val = "off";
    document.getElementById("chat_global").style.display = "block";
    document.getElementById("chat_background").style.display = "inline";
    document.getElementById("map").style.filter = "blur(5px)";
    document.getElementById("character_id").style.filter = "blur(5px)";
    chat_c1_callie_val_id = true;
    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "1";
        document.getElementById("chat_background").style.opacity = "1";
    }, 600)

    document.getElementById("chat_option_1").style.display = "none";
    document.getElementById("chat_option_2").style.display = "none";
    document.getElementById("chat_option_3").style.display = "none";
    document.getElementById("chat_question").innerHTML = "<b> Callie: </b> Go on, you have better things to do.";

    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "0";
        document.getElementById("chat_background").style.opacity = "0";
        document.getElementById("map").style.filter = "blur(0px)";
        document.getElementById("character_id").style.filter = "blur(0px)";
        map_movment_val = "on";
        map_movment_chat = "off";
        chat_c1_callie_val_id = false;
    }, 3000);
}

function chat_d1_luca_val() {
    map_movment_chat = "on";
    map_movment_val = "off";
    document.getElementById("chat_global").style.display = "block";
    document.getElementById("chat_background").style.display = "inline";
    document.getElementById("map").style.filter = "blur(5px)";
    document.getElementById("character_id").style.filter = "blur(5px)";
    document.getElementById("chat_option_1").style.display = "block";
    document.getElementById("chat_option_2").style.display = "block";
    document.getElementById("chat_option_3").style.display = "block";
    chat_d1_luca_val_id = true;
    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "1";
        document.getElementById("chat_background").style.opacity = "1";
    }, 600)

    document.getElementById("chat_question").innerHTML = "<b> ???: </b> Not another step.";
    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> ... You must be Luca.";
    document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Are you Luca? Callie told me about you.";
    document.getElementById("chat_option_3").innerHTML = "<b> C) </b> Them’s fighting words, buddy. Let’s go.";


    document.getElementById("chat_option_1").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_2").style.display = "none";
        document.getElementById("chat_option_3").style.display = "none";
        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I am. And I know what you are and what you have done.";
        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Wait, what?";


        document.getElementById("chat_option_1").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_option_2").style.display = "block";
            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> To think the legends were true, after all... <br> <b> Luca: </b> Listen to me, outsider. I hold the key to your survival this night and you will do well to take my words into careful consideration.";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’m listening...";
            document.getElementById("chat_option_2").innerHTML = "<b> B) </b> You can’t just threaten me like that!";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_option_2").style.display = "none";
                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You have a modicum of wisdom. We will see how well it serves you.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Alright, alright, go on.";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> To ensure your survival, we must do battle. But should we clash horns, you would surely die. <br> <b> Luca: </b> Instead I have something else in mind. A battle of wits.";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> What would that involve?";

                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I will test your knowledge on a rather ironic subject, given your circumstances. My kind. <br> <b> Luca: </b> Five questions. I will consider you victorious if you answer all of them correctly.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> And if I fail?";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_option_2").style.display = "block";
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> We will be here all night until you stop failing. <br> <b> Luca: </b> Or until the sun rises and you rot away.";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> That seems overly dramatic, but I’ll take it. Ask away.";
                            document.getElementById("chat_option_2").innerHTML = "<b> B) </b> You keep saying you won’t beat me up but I’ll die. What do you mean?";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_1").style.display = "none";
                                document.getElementById("chat_option_2").style.display = "none";
                                luca_quiz();
                            }
                            document.getElementById("chat_option_2").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_2").style.display = "none";
                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> All in due time. For now, we do battle.";
                                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Okay, okay. Battle it is.";

                                document.getElementById("chat_option_1").onclick = function () {
                                    buttonClickSound();
                                    document.getElementById("chat_option_1").style.display = "none";
                                    luca_quiz();
                                }
                            }
                        }
                    }
                }
            }
        }
        document.getElementById("chat_option_2").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_option_2").style.display = "none";
            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I have killed many who tried intruding on my territory. Your cheap bluster does not frighten me. Now be quiet and listen.";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Alright, alright, go on.";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> To ensure your survival, we must do battle. But should we clash horns, you would surely die. <br> <b> Luca: </b> Instead I have something else in mind. A battle of wits.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> What would that involve?";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I will test your knowledge on a rather ironic subject, given your circumstances. My kind. <br> <b> Luca: </b> Five questions. I will consider you victorious if you answer all of them correctly.";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> And if I fail?";

                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_option_2").style.display = "block";
                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> We will be here all night until you stop failing. <br> <b> Luca: </b> Or until the sun rises and you rot away.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> That seems overly dramatic, but I’ll take it. Ask away.";
                        document.getElementById("chat_option_2").innerHTML = "<b> B) </b> You keep saying you won’t beat me up but I’ll die. What do you mean?";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_option_1").style.display = "none";
                            document.getElementById("chat_option_2").style.display = "none";
                            luca_quiz();
                        }
                        document.getElementById("chat_option_2").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_option_2").style.display = "none";
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> All in due time. For now, we do battle.";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Okay, okay. Battle it is.";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_1").style.display = "none";
                                luca_quiz();
                            }
                        }
                    }
                }
            }
        }
    }
    document.getElementById("chat_option_2").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_2").style.display = "none";
        document.getElementById("chat_option_3").style.display = "none";
        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I am. And you are fortunate that she did not figure out who you really are, or she would have killed you right out of the egg.";
        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Wait, what?";

        document.getElementById("chat_option_1").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_option_2").style.display = "block";
            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> To think the legends were true, after all... <br> <b> Luca: </b> Listen to me, outsider. I hold the key to your survival this night and you will do well to take my words into careful consideration.";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’m listening...";
            document.getElementById("chat_option_2").innerHTML = "<b> B) </b> You can’t just threaten me like that!";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_option_2").style.display = "none";
                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You have a modicum of wisdom. We will see how well it serves you.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Alright, alright, go on.";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> To ensure your survival, we must do battle. But should we clash horns, you would surely die. <br> <b> Luca: </b> Instead I have something else in mind. A battle of wits.";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> What would that involve?";

                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I will test your knowledge on a rather ironic subject, given your circumstances. My kind. <br> <b> Luca: </b> Five questions. I will consider you victorious if you answer all of them correctly.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> And if I fail?";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_option_2").style.display = "block";
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> We will be here all night until you stop failing. <br> <b> Luca: </b> Or until the sun rises and you rot away.";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> That seems overly dramatic, but I’ll take it. Ask away.";
                            document.getElementById("chat_option_2").innerHTML = "<b> B) </b> You keep saying you won’t beat me up but I’ll die. What do you mean?";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_1").style.display = "none";
                                document.getElementById("chat_option_2").style.display = "none";
                                luca_quiz();
                            }
                            document.getElementById("chat_option_2").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_2").style.display = "none";
                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> All in due time. For now, we do battle.";
                                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Okay, okay. Battle it is.";

                                document.getElementById("chat_option_1").onclick = function () {
                                    buttonClickSound();
                                    document.getElementById("chat_option_1").style.display = "none";
                                    luca_quiz();
                                }
                            }
                        }
                    }
                }
            }
        }
        document.getElementById("chat_option_2").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_option_2").style.display = "none";
            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I have killed many who tried intruding on my territory. Your cheap bluster does not frighten me. Now be quiet and listen.";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Alright, alright, go on.";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> To ensure your survival, we must do battle. But should we clash horns, you would surely die. <br> <b> Luca: </b> Instead I have something else in mind. A battle of wits.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> What would that involve?";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I will test your knowledge on a rather ironic subject, given your circumstances. My kind. <br> <b> Luca: </b> Five questions. I will consider you victorious if you answer all of them correctly.";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> And if I fail?";

                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_option_2").style.display = "block";
                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> We will be here all night until you stop failing. <br> <b> Luca: </b> Or until the sun rises and you rot away.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> That seems overly dramatic, but I’ll take it. Ask away.";
                        document.getElementById("chat_option_2").innerHTML = "<b> B) </b> You keep saying you won’t beat me up but I’ll die. What do you mean?";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_option_1").style.display = "none";
                            document.getElementById("chat_option_2").style.display = "none";
                            luca_quiz();
                        }
                        document.getElementById("chat_option_2").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_option_2").style.display = "none";
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> All in due time. For now, we do battle.";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Okay, okay. Battle it is.";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_1").style.display = "none";
                                luca_quiz();
                            }
                        }
                    }
                }
            }
        }
    }
    document.getElementById("chat_option_3").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_2").style.display = "none";
        document.getElementById("chat_option_3").style.display = "none";
        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> All in due time. I know who you are and why you are here.";
        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Wait, what?";

        document.getElementById("chat_option_1").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_option_2").style.display = "block";
            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> To think the legends were true, after all... <br> <b> Luca: </b> Listen to me, outsider. I hold the key to your survival this night and you will do well to take my words into careful consideration.";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’m listening...";
            document.getElementById("chat_option_2").innerHTML = "<b> B) </b> You can’t just threaten me like that!";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_option_2").style.display = "none";
                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You have a modicum of wisdom. We will see how well it serves you.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Alright, alright, go on.";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> To ensure your survival, we must do battle. But should we clash horns, you would surely die. <br> <b> Luca: </b> Instead I have something else in mind. A battle of wits.";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> What would that involve?";

                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I will test your knowledge on a rather ironic subject, given your circumstances. My kind. <br> <b> Luca: </b> Five questions. I will consider you victorious if you answer all of them correctly.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> And if I fail?";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_option_2").style.display = "block";
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> We will be here all night until you stop failing. <br> <b> Luca: </b> Or until the sun rises and you rot away.";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> That seems overly dramatic, but I’ll take it. Ask away.";
                            document.getElementById("chat_option_2").innerHTML = "<b> B) </b> You keep saying you won’t beat me up but I’ll die. What do you mean?";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_1").style.display = "none";
                                document.getElementById("chat_option_2").style.display = "none";
                                luca_quiz();
                            }
                            document.getElementById("chat_option_2").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_2").style.display = "none";
                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> All in due time. For now, we do battle.";
                                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Okay, okay. Battle it is.";

                                document.getElementById("chat_option_1").onclick = function () {
                                    buttonClickSound();
                                    document.getElementById("chat_option_1").style.display = "none";
                                    luca_quiz();
                                }
                            }
                        }
                    }
                }
            }
        }
        document.getElementById("chat_option_2").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_option_2").style.display = "none";
            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I have killed many who tried intruding on my territory. Your cheap bluster does not frighten me. Now be quiet and listen.";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Alright, alright, go on.";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> To ensure your survival, we must do battle. But should we clash horns, you would surely die. <br> <b> Luca: </b> Instead I have something else in mind. A battle of wits.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> What would that involve?";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I will test your knowledge on a rather ironic subject, given your circumstances. My kind. <br> <b> Luca: </b> Five questions. I will consider you victorious if you answer all of them correctly.";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> And if I fail?";

                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_option_2").style.display = "block";
                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> We will be here all night until you stop failing. <br> <b> Luca: </b> Or until the sun rises and you rot away.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> That seems overly dramatic, but I’ll take it. Ask away.";
                        document.getElementById("chat_option_2").innerHTML = "<b> B) </b> You keep saying you won’t beat me up but I’ll die. What do you mean?";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_option_1").style.display = "none";
                            document.getElementById("chat_option_2").style.display = "none";
                            luca_quiz();
                        }
                        document.getElementById("chat_option_2").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_option_2").style.display = "none";
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> All in due time. For now, we do battle.";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Okay, okay. Battle it is.";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_1").style.display = "none";
                                luca_quiz();
                            }
                        }
                    }
                }
            }
        }
    }
}

function luca_quiz() {

    document.getElementById("chat_option_1").style.display = "block";
    document.getElementById("chat_option_2").style.display = "block";
    document.getElementById("chat_option_3").style.display = "block";

    document.getElementById("chat_question").innerHTML = "<b> QUESTION 1 </b> <br> What do stag beetle larvae feed on?";
    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Tree sap";
    document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Rotting wood";
    document.getElementById("chat_option_3").innerHTML = "<b> C) </b> Roots";


    document.getElementById("chat_option_1").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_2").style.display = "none";
        document.getElementById("chat_option_3").style.display = "none";
        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You are a disappointment. Again!";
        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Argh, come on! Okay, I’ll try again.";
        document.getElementById("chat_option_1").onclick = function () {
            buttonClickSound();
            luca_quiz();
        }
    }
    document.getElementById("chat_option_2").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_question").innerHTML = "<b> QUESTION 2 </b> <br> What is the most distinguishing feature between male and female stag beetles?";
        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Size";
        document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Coloration";
        document.getElementById("chat_option_3").innerHTML = "<b> C) </b> Horns";

        document.getElementById("chat_option_1").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_option_2").style.display = "none";
            document.getElementById("chat_option_3").style.display = "none";
            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You are a disappointment. Again!";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Argh, come on! Okay, I’ll try again.";
            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                luca_quiz();
            }
        }
        document.getElementById("chat_option_2").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_option_2").style.display = "none";
            document.getElementById("chat_option_3").style.display = "none";
            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You are a disappointment. Again!";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Argh, come on! Okay, I’ll try again.";
            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                luca_quiz();
            }
        }
        document.getElementById("chat_option_3").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_question").innerHTML = "<b> QUESTION 3 </b> <br> What time of the year do the larvae emerge as adults?";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Spring";
            document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Summer";
            document.getElementById("chat_option_3").innerHTML = "<b> C) </b> Fall";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_question").innerHTML = "<b> QUESTION 4 </b> <br> What is the stag beetle’s favorite habitat?";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Willows";
                document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Great oaks";
                document.getElementById("chat_option_3").innerHTML = "<b> C) </b> Cedar trees";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_option_2").style.display = "none";
                    document.getElementById("chat_option_3").style.display = "none";
                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You are a disappointment. Again!";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Argh, come on! Okay, I’ll try again.";
                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        luca_quiz();
                    }
                }
                document.getElementById("chat_option_2").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<b> QUESTION 5 </b> <br> What threatens the stag beetle the most?";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Predators";
                    document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Poaching";
                    document.getElementById("chat_option_3").innerHTML = "<b> C) </b> Destruction of habitat";

                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_option_2").style.display = "none";
                        document.getElementById("chat_option_3").style.display = "none";
                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You are a disappointment. Again!";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Argh, come on! Okay, I’ll try again.";
                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            luca_quiz();
                        }
                    }
                    document.getElementById("chat_option_2").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_option_2").style.display = "none";
                        document.getElementById("chat_option_3").style.display = "none";
                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You are a disappointment. Again!";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Argh, come on! Okay, I’ll try again.";
                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            luca_quiz();
                        }
                    }
                    document.getElementById("chat_option_3").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_option_3").style.display = "none";
                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You know more than I gave you credit for. Consider yourself the victor of our battle.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’m a genius!";
                        document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Great, what’s next?";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_option_2").style.display = "none";
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Let us not get carried away. Your purpose here is not yet complete. <br> <b> Luca: </b> Come to my home, in the heartwood above us. We will speak again.";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Got it. See you there.";
                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_global").style.opacity = "0";
                                document.getElementById("chat_background").style.opacity = "0";
                                document.getElementById("map").style.filter = "blur(0px)";
                                document.getElementById("character_id").style.filter = "blur(0px)";
                                map_movment_val = "on";
                                map_movment_chat = "off";
                                map_mission_goal = 6;
                                setTimeout(function () {
                                    luca.style.opacity = "0";
                                    setTimeout(function () {
                                        luca.style.display = "none";
                                    }, 1000)
                                }, 1000)
                            }
                        }
                        document.getElementById("chat_option_2").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_option_2").style.display = "none";
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You have not yet fully understood the circumstances of your presence here. <br> <b> Luca: </b> Come to my home, in the heartwood above us. We will speak again.";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Got it. See you there.";
                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_global").style.opacity = "0";
                                document.getElementById("chat_background").style.opacity = "0";
                                document.getElementById("map").style.filter = "blur(0px)";
                                document.getElementById("character_id").style.filter = "blur(0px)";
                                map_movment_val = "on";
                                map_movment_chat = "off";
                                map_mission_goal = 6;
                                setTimeout(function () {
                                    luca.style.opacity = "0";
                                    setTimeout(function () {
                                        luca.style.display = "none";
                                    }, 1000)
                                }, 1000)
                            }
                        }
                    }
                }
                document.getElementById("chat_option_3").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_option_2").style.display = "none";
                    document.getElementById("chat_option_3").style.display = "none";
                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You are a disappointment. Again!";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Argh, come on! Okay, I’ll try again.";
                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        luca_quiz();
                    }
                }

            }
            document.getElementById("chat_option_2").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_option_2").style.display = "none";
                document.getElementById("chat_option_3").style.display = "none";
                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You are a disappointment. Again!";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Argh, come on! Okay, I’ll try again.";
                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    luca_quiz();
                }
            }
            document.getElementById("chat_option_3").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_option_2").style.display = "none";
                document.getElementById("chat_option_3").style.display = "none";
                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You are a disappointment. Again!";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Argh, come on! Okay, I’ll try again.";
                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    luca_quiz();
                }
            }
        }
    }
    document.getElementById("chat_option_3").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_2").style.display = "none";
        document.getElementById("chat_option_3").style.display = "none";
        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You are a disappointment. Again!";
        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Argh, come on! Okay, I’ll try again.";
        document.getElementById("chat_option_1").onclick = function () {
            buttonClickSound();
            luca_quiz();
        }
    }

}

function chat_b2_luca_house_A_val() {
    map_movment_chat = "on";
    map_movment_val = "off";
    document.getElementById("chat_global").style.display = "block";
    document.getElementById("chat_background").style.display = "inline";
    document.getElementById("map").style.filter = "blur(5px)";
    document.getElementById("character_id").style.filter = "blur(5px)";
    document.getElementById("chat_option_1").style.display = "block";
    document.getElementById("chat_option_2").style.display = "none";
    document.getElementById("chat_option_3").style.display = "none";

    chat_b2_luca_house_val_id = true;
    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "1";
        document.getElementById("chat_background").style.opacity = "1";
    }, 600)

    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Good. You are here. Time is short, so I will keep this brief.";
    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Let’s hear it.";

    document.getElementById("chat_option_1").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_1").style.display = "block";
        document.getElementById("chat_option_2").style.display = "block";
        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You are a human, come to destroy this forest, for purposes I cannot fathom. <br> <b> Luca: </b> The evidence of your deeds is stuck in this very tree. You can even see it embedded outside.";
        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> How could you possibly know that?";
        document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Oh yeah, that’s my axe... Sorry?";

        document.getElementById("chat_option_1").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_option_2").style.display = "none";
            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Because tonight is the Night of the Stag.";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> The night of the... Stag? What?";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> The blue moon shines, rousing the forest from its slumber. It weeps and rages against those who would harm it. <br> <b> Luca: </b> Nature is mother to us all. Mother wishes to see us grow. <br> <b> Luca: </b> Some lessons must be taught, and the ultimate price paid. <br> <b> Luca: </b> Your actions threaten the lives of the stag beetles. And so you are forced to live as one.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’m stuck like this forever? Are you serious?";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_option_2").style.display = "block";
                    document.getElementById("chat_option_3").style.display = "block";
                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You are ‘stuck’ like this until the sun rises. <br> <b> Luca: </b> And then your life will end. <br> <b> Luca: </b> Your life for ours.";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> This... This is a nightmare. I can’t just die like this.";
                    document.getElementById("chat_option_2").innerHTML = "<b> B) </b> There HAS to be something I can do!";
                    document.getElementById("chat_option_3").innerHTML = "<b> C) </b> When we fought, you implied I could somehow live!";

                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_option_2").style.display = "none";
                        document.getElementById("chat_option_3").style.display = "none";
                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Cease your whimpering. <br> <b> Luca: </b> There is a book with a pale blue moon on the cover within the library. <br> <b> Luca: </b> Retrieve it for me.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’m GOING TO DIE and you’re asking me to fetch you a book?";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Have you anything to lose at this point? <br> <b> Luca: </b> The tome in question details the legend of the Night of the Stag. <br> <b> Luca: </b> I have been studying and translating it, though the final passages have worn away with time. <br> <b> Luca: </b> You may yet be saved. Or not. <br> <b> Luca: </b> What will you do?";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> ... I’m getting you that book.";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_1").style.display = "none";
                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Off you go, outsider.";
                                setTimeout(function () {
                                    document.getElementById("chat_global").style.opacity = "0";
                                    document.getElementById("chat_background").style.opacity = "0";
                                    document.getElementById("map").style.filter = "blur(0px)";
                                    document.getElementById("character_id").style.filter = "blur(0px)";
                                    map_movment_val = "on";
                                    map_movment_chat = "off";
                                    map_mission_goal = 7;
                                    chat_b2_luca_house_val_id = false;
                                    luca_house_talk = true;
                                }, 3000);
                            }
                        }
                    }
                    document.getElementById("chat_option_2").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_option_2").style.display = "none";
                        document.getElementById("chat_option_3").style.display = "none";
                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Cease your whimpering. <br> <b> Luca: </b> There is a book with a pale blue moon on the cover within the library. <br> <b> Luca: </b> Retrieve it for me.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’m GOING TO DIE and you’re asking me to fetch you a book?";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Have you anything to lose at this point? <br> <b> Luca: </b> The tome in question details the legend of the Night of the Stag. <br> <b> Luca: </b> I have been studying and translating it, though the final passages have worn away with time. <br> <b> Luca: </b> You may yet be saved. Or not. <br> <b> Luca: </b> What will you do?";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> ... I’m getting you that book.";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_1").style.display = "none";
                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Off you go, outsider.";
                                setTimeout(function () {
                                    document.getElementById("chat_global").style.opacity = "0";
                                    document.getElementById("chat_background").style.opacity = "0";
                                    document.getElementById("map").style.filter = "blur(0px)";
                                    document.getElementById("character_id").style.filter = "blur(0px)";
                                    map_movment_val = "on";
                                    map_movment_chat = "off";
                                    map_mission_goal = 7;
                                    chat_b2_luca_house_val_id = false;
                                    luca_house_talk = true;
                                }, 3000);
                            }
                        }
                    }
                    document.getElementById("chat_option_3").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_option_2").style.display = "none";
                        document.getElementById("chat_option_3").style.display = "none";
                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Cease your whimpering. <br> <b> Luca: </b> There is a book with a pale blue moon on the cover within the library. <br> <b> Luca: </b> Retrieve it for me.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’m GOING TO DIE and you’re asking me to fetch you a book?";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Have you anything to lose at this point? <br> <b> Luca: </b> The tome in question details the legend of the Night of the Stag. <br> <b> Luca: </b> I have been studying and translating it, though the final passages have worn away with time. <br> <b> Luca: </b> You may yet be saved. Or not. <br> <b> Luca: </b> What will you do?";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> ... I’m getting you that book.";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_1").style.display = "none";
                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Off you go, outsider.";
                                setTimeout(function () {
                                    document.getElementById("chat_global").style.opacity = "0";
                                    document.getElementById("chat_background").style.opacity = "0";
                                    document.getElementById("map").style.filter = "blur(0px)";
                                    document.getElementById("character_id").style.filter = "blur(0px)";
                                    map_movment_val = "on";
                                    map_movment_chat = "off";
                                    map_mission_goal = 7;
                                    chat_b2_luca_house_val_id = false;
                                    luca_house_talk = true;
                                }, 3000);
                            }
                        }
                    }
                }
            }
        }
        document.getElementById("chat_option_2").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_option_2").style.display = "none";
            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I would like to think you are not beyond redemption, and that is the sole reason I chose not to kill you. You will have plenty of opportunity to make amends. <br> <b> Luca: </b> Right now, you must be wondering about the true reason you are a stag beetle. <br> <b> Luca: </b> It is because tonight is the Night of the Stag.";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> The night of the... Stag? What?";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> The blue moon shines, rousing the forest from its slumber. It weeps and rages against those who would harm it. <br> <b> Luca: </b> Nature is mother to us all. Mother wishes to see us grow. <br> <b> Luca: </b> Some lessons must be taught, and the ultimate price paid. <br> <b> Luca: </b> Your actions threaten the lives of the stag beetles. And so you are forced to live as one.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’m stuck like this forever? Are you serious?";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_option_2").style.display = "block";
                    document.getElementById("chat_option_3").style.display = "block";
                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> You are ‘stuck’ like this until the sun rises. <br> <b> Luca: </b> And then your life will end. <br> <b> Luca: </b> Your life for ours.";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> This... This is a nightmare. I can’t just die like this.";
                    document.getElementById("chat_option_2").innerHTML = "<b> B) </b> There HAS to be something I can do!";
                    document.getElementById("chat_option_3").innerHTML = "<b> C) </b> When we fought, you implied I could somehow live!";

                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_option_2").style.display = "none";
                        document.getElementById("chat_option_3").style.display = "none";
                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Cease your whimpering. <br> <b> Luca: </b> There is a book with a pale blue moon on the cover within the library. <br> <b> Luca: </b> Retrieve it for me.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’m GOING TO DIE and you’re asking me to fetch you a book?";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Have you anything to lose at this point? <br> <b> Luca: </b> The tome in question details the legend of the Night of the Stag. <br> <b> Luca: </b> I have been studying and translating it, though the final passages have worn away with time. <br> <b> Luca: </b> You may yet be saved. Or not. <br> <b> Luca: </b> What will you do?";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> ... I’m getting you that book.";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_1").style.display = "none";
                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Off you go, outsider.";
                                setTimeout(function () {
                                    document.getElementById("chat_global").style.opacity = "0";
                                    document.getElementById("chat_background").style.opacity = "0";
                                    document.getElementById("map").style.filter = "blur(0px)";
                                    document.getElementById("character_id").style.filter = "blur(0px)";
                                    map_movment_val = "on";
                                    map_movment_chat = "off";
                                    map_mission_goal = 7;
                                    chat_b2_luca_house_val_id = false;
                                    luca_house_talk = true;
                                }, 3000);
                            }
                        }
                    }
                    document.getElementById("chat_option_2").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_option_2").style.display = "none";
                        document.getElementById("chat_option_3").style.display = "none";
                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Cease your whimpering. <br> <b> Luca: </b> There is a book with a pale blue moon on the cover within the library. <br> <b> Luca: </b> Retrieve it for me.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’m GOING TO DIE and you’re asking me to fetch you a book?";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Have you anything to lose at this point? <br> <b> Luca: </b> The tome in question details the legend of the Night of the Stag. <br> <b> Luca: </b> I have been studying and translating it, though the final passages have worn away with time. <br> <b> Luca: </b> You may yet be saved. Or not. <br> <b> Luca: </b> What will you do?";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> ... I’m getting you that book.";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_1").style.display = "none";
                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Off you go, outsider.";
                                setTimeout(function () {
                                    document.getElementById("chat_global").style.opacity = "0";
                                    document.getElementById("chat_background").style.opacity = "0";
                                    document.getElementById("map").style.filter = "blur(0px)";
                                    document.getElementById("character_id").style.filter = "blur(0px)";
                                    map_movment_val = "on";
                                    map_movment_chat = "off";
                                    map_mission_goal = 7;
                                    chat_b2_luca_house_val_id = false;
                                    luca_house_talk = true;
                                }, 3000);
                            }
                        }
                    }
                    document.getElementById("chat_option_3").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_option_2").style.display = "none";
                        document.getElementById("chat_option_3").style.display = "none";
                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Cease your whimpering. <br> <b> Luca: </b> There is a book with a pale blue moon on the cover within the library. <br> <b> Luca: </b> Retrieve it for me.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I’m GOING TO DIE and you’re asking me to fetch you a book?";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Have you anything to lose at this point? <br> <b> Luca: </b> The tome in question details the legend of the Night of the Stag. <br> <b> Luca: </b> I have been studying and translating it, though the final passages have worn away with time. <br> <b> Luca: </b> You may yet be saved. Or not. <br> <b> Luca: </b> What will you do?";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> ... I’m getting you that book.";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_option_1").style.display = "none";
                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Off you go, outsider.";
                                setTimeout(function () {
                                    document.getElementById("chat_global").style.opacity = "0";
                                    document.getElementById("chat_background").style.opacity = "0";
                                    document.getElementById("map").style.filter = "blur(0px)";
                                    document.getElementById("character_id").style.filter = "blur(0px)";
                                    map_movment_val = "on";
                                    map_movment_chat = "off";
                                    map_mission_goal = 7;
                                    chat_b2_luca_house_val_id = false;
                                    luca_house_talk = true;
                                }, 3000);
                            }
                        }
                    }
                }
            }
        }
    }
}

function chat_b2_luca_house_B_val() {
    map_movment_chat = "on";
    map_movment_val = "off";
    document.getElementById("chat_global").style.display = "block";
    document.getElementById("chat_background").style.display = "inline";
    document.getElementById("map").style.filter = "blur(5px)";
    document.getElementById("character_id").style.filter = "blur(5px)";
    chat_b2_luca_house_val_id = true;
    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "1";
        document.getElementById("chat_background").style.opacity = "1";
    }, 600)

    document.getElementById("chat_option_1").style.display = "none";
    document.getElementById("chat_option_2").style.display = "none";
    document.getElementById("chat_option_3").style.display = "none";
    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Off you go, outsider.";

    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "0";
        document.getElementById("chat_background").style.opacity = "0";
        document.getElementById("map").style.filter = "blur(0px)";
        document.getElementById("character_id").style.filter = "blur(0px)";
        map_movment_val = "on";
        map_movment_chat = "off";
        chat_b2_luca_house_val_id = false;
    }, 3000);
}

function chat_b2_luca_house_C_val() {
    map_movment_chat = "on";
    map_movment_val = "off";
    document.getElementById("chat_global").style.display = "block";
    document.getElementById("chat_background").style.display = "inline";
    document.getElementById("map").style.filter = "blur(5px)";
    document.getElementById("character_id").style.filter = "blur(5px)";
    document.getElementById("chat_option_1").style.display = "block";
    document.getElementById("chat_option_2").style.display = "none";
    document.getElementById("chat_option_3").style.display = "none";

    chat_b2_luca_house_val_id = true;
    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "1";
        document.getElementById("chat_background").style.opacity = "1";
    }, 600)

    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> There you are. Did you find the book?";
    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Yeah, here you go.";

    document.getElementById("chat_option_1").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_2").style.display = "block";
        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I will try to interpret the final passages.";
        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> How long will this take?";
        document.getElementById("chat_option_2").innerHTML = "<b> B) </b> Hope you’re a speedreader...";

        document.getElementById("chat_option_1").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_option_2").style.display = "none";
            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I will be done before the sun rises. <br> <b> Luca: </b> Or so you hope, no?";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> -Please-.";
            // depois copiar para baixo
            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_option_2").style.display = "none";
                document.getElementById("chat_question").innerHTML = "<i> [Luca carefully opens the book halfway through and flips through the latter pages.] </i> <br> <br> <b> Luca: </b> Hmm... <br> <b> Luca: </b> Ah, yes... <br> <b> Luca: </b> Hmm... <br> <b> Luca: </b> Fascinating.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Well?";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<i> [Luca ignores you.] </i> <br> <br> <b> Luca: </b> I see... <br> <b> Luca: </b> Oh, so that is how that goes. <br> <b> Luca: </b> Hmhm.";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> ... I’m going to die.";

                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_question").innerHTML = "<i> [Luca slams the book shut, startling you and filling the air with old dust.] </i> <br> <br> <b> Luca: </b> Your fate is as foretold. <br> <b> Luca: </b> Come sunrise, your short life as a stag beetle will come to an end.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I knew it.";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> The way it ends, however, depends on your actions now.";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Depends? Depends on what?";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Unless you fulfill your purpose as a stag beetle, you will simply wither away. <br> <b> Luca: </b> You feasted on the rotting wood. <br> <b> Luca: </b> You grew to face another male in combat. <br> <b> Luca: </b> And if you pay tribute to the forest by using the little time you have left... <br> <b> Luca: </b> It may spare you.";
                                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> How do I do that?";

                                document.getElementById("chat_option_1").onclick = function () {
                                    buttonClickSound();
                                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> It is simple. <br> <b> Luca: </b> You will fly to the crown of the tree, where many of our kind eagerly anticipate the coming frenzy.<br> <b> Luca: </b> The annual mating ritual. <br> <b> Luca: </b> You will take part.";
                                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> -Mating-? Are you serious?";

                                    document.getElementById("chat_option_1").onclick = function () {
                                        buttonClickSound();
                                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Breed or die. That is nature. Even your kind, as pragmatic and intelligent as you claim to be, are not beyond this. <br> <b> Luca: </b> We wish to live just as much as you do. <br> <b> Luca: </b> The difference is, we do not leave destruction in our wake.";
                                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> That’s... I...";

                                        document.getElementById("chat_option_1").onclick = function () {
                                            buttonClickSound();
                                            document.getElementById("chat_option_2").style.display = "block";
                                            document.getElementById("chat_option_3").style.display = "block";
                                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I truly meant what I said when I believe you are not beyond redemption. <br> <b> Luca: </b> Our time is short. Much shorter than the time you have. You live for many years. <br> <b> Luca: </b> Your existence lasts a hundred of our lifetimes. <br> <b> Luca: </b> Help our kind, instead of destroying our home. That is all I ask.";
                                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I just needed money...";
                                            document.getElementById("chat_option_2").innerHTML = "<b> A) </b> I guess I should be kinder to mother nature.";
                                            document.getElementById("chat_option_3").innerHTML = "<b> A) </b> You’re a weirdo, Luca. But you’re nicer than I thought.";

                                            document.getElementById("chat_option_1").onclick = function () {
                                                buttonClickSound();
                                                document.getElementById("chat_option_2").style.display = "none";
                                                document.getElementById("chat_option_3").style.display = "none";
                                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I do not know what that is. <br> <b> Luca: </b> But I do sense you have some semblance of morality in you. <br> <b> Luca: </b> Let it guide you well for once.";
                                                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I know what I need to do. Goodbye, Luca. Thank you.";

                                                document.getElementById("chat_option_1").onclick = function () {
                                                    buttonClickSound();
                                                    document.getElementById("chat_option_1").style.display = "none";
                                                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Go, outsider. Dawn awaits, and with it, a new day.";
                                                    setTimeout(function () {
                                                        document.getElementById("chat_global").style.opacity = "0";
                                                        document.getElementById("chat_background").style.opacity = "0";
                                                        document.getElementById("map").style.filter = "blur(0px)";
                                                        document.getElementById("character_id").style.filter = "blur(0px)";
                                                        map_movment_val = "on";
                                                        map_movment_chat = "off";
                                                        map_mission_goal = 9;
                                                        chat_b2_luca_house_val_id = false;
                                                    }, 3000);
                                                }
                                            }
                                            document.getElementById("chat_option_2").onclick = function () {
                                                buttonClickSound();
                                                document.getElementById("chat_option_2").style.display = "none";
                                                document.getElementById("chat_option_3").style.display = "none";
                                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Yes. You should. <br> <b> Luca: </b> You took much. <br> <b> Luca: </b> But you can give it back.";
                                                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I know what I need to do. Goodbye, Luca. Thank you.";

                                                document.getElementById("chat_option_1").onclick = function () {
                                                    buttonClickSound();
                                                    document.getElementById("chat_option_1").style.display = "none";
                                                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Go, outsider. Dawn awaits, and with it, a new day.";
                                                    setTimeout(function () {
                                                        document.getElementById("chat_global").style.opacity = "0";
                                                        document.getElementById("chat_background").style.opacity = "0";
                                                        document.getElementById("map").style.filter = "blur(0px)";
                                                        document.getElementById("character_id").style.filter = "blur(0px)";
                                                        map_movment_val = "on";
                                                        map_movment_chat = "off";
                                                        map_mission_goal = 9;
                                                        chat_b2_luca_house_val_id = false;
                                                    }, 3000);
                                                }
                                            }
                                            document.getElementById("chat_option_3").onclick = function () {
                                                buttonClickSound();
                                                document.getElementById("chat_option_2").style.display = "none";
                                                document.getElementById("chat_option_3").style.display = "none";
                                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Though you are insulting me, I sense a kinship of sorts. <br> <b> Luca: </b> Perhaps you have come to truly understand the motive for your presence. <br> <b> Luca: </b> Let this lesson last forever.";
                                                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I know what I need to do. Goodbye, Luca. Thank you.";

                                                document.getElementById("chat_option_1").onclick = function () {
                                                    buttonClickSound();
                                                    document.getElementById("chat_option_1").style.display = "none";
                                                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Go, outsider. Dawn awaits, and with it, a new day.";
                                                    setTimeout(function () {
                                                        document.getElementById("chat_global").style.opacity = "0";
                                                        document.getElementById("chat_background").style.opacity = "0";
                                                        document.getElementById("map").style.filter = "blur(0px)";
                                                        document.getElementById("character_id").style.filter = "blur(0px)";
                                                        map_movment_val = "on";
                                                        map_movment_chat = "off";
                                                        map_mission_goal = 9;
                                                        chat_b2_luca_house_val_id = false;
                                                    }, 3000);
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
        }
        document.getElementById("chat_option_2").onclick = function () {
            buttonClickSound();
            document.getElementById("chat_option_2").style.display = "none";
            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I will be done before the sun rises. <br> <b> Luca: </b> Or so you hope, no?";
            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> -Please-.";

            document.getElementById("chat_option_1").onclick = function () {
                buttonClickSound();
                document.getElementById("chat_option_2").style.display = "none";
                document.getElementById("chat_question").innerHTML = "<i> [Luca carefully opens the book halfway through and flips through the latter pages.] </i> <br> <br> <b> Luca: </b> Hmm... <br> <b> Luca: </b> Ah, yes... <br> <b> Luca: </b> Hmm... <br> <b> Luca: </b> Fascinating.";
                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Well?";

                document.getElementById("chat_option_1").onclick = function () {
                    buttonClickSound();
                    document.getElementById("chat_question").innerHTML = "<i> [Luca ignores you.] </i> <br> <br> <b> Luca: </b> I see... <br> <b> Luca: </b> Oh, so that is how that goes. <br> <b> Luca: </b> Hmhm.";
                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> ... I’m going to die.";

                    document.getElementById("chat_option_1").onclick = function () {
                        buttonClickSound();
                        document.getElementById("chat_question").innerHTML = "<i> [Luca slams the book shut, startling you and filling the air with old dust.] </i> <br> <br> <b> Luca: </b> Your fate is as foretold. <br> <b> Luca: </b> Come sunrise, your short life as a stag beetle will come to an end.";
                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I knew it.";

                        document.getElementById("chat_option_1").onclick = function () {
                            buttonClickSound();
                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> The way it ends, however, depends on your actions now.";
                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> Depends? Depends on what?";

                            document.getElementById("chat_option_1").onclick = function () {
                                buttonClickSound();
                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Unless you fulfill your purpose as a stag beetle, you will simply wither away. <br> <b> Luca: </b> You feasted on the rotting wood. <br> <b> Luca: </b> You grew to face another male in combat. <br> <b> Luca: </b> And if you pay tribute to the forest by using the little time you have left... <br> <b> Luca: </b> It may spare you.";
                                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> How do I do that?";

                                document.getElementById("chat_option_1").onclick = function () {
                                    buttonClickSound();
                                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> It is simple. <br> <b> Luca: </b> You will fly to the crown of the tree, where many of our kind eagerly anticipate the coming frenzy.<br> <b> Luca: </b> The annual mating ritual. <br> <b> Luca: </b> You will take part.";
                                    document.getElementById("chat_option_1").innerHTML = "<b> A) </b> -Mating-? Are you serious?";

                                    document.getElementById("chat_option_1").onclick = function () {
                                        buttonClickSound();
                                        document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Breed or die. That is nature. Even your kind, as pragmatic and intelligent as you claim to be, are not beyond this. <br> <b> Luca: </b> We wish to live just as much as you do. <br> <b> Luca: </b> The difference is, we do not leave destruction in our wake.";
                                        document.getElementById("chat_option_1").innerHTML = "<b> A) </b> That’s... I...";

                                        document.getElementById("chat_option_1").onclick = function () {
                                            buttonClickSound();
                                            document.getElementById("chat_option_2").style.display = "block";
                                            document.getElementById("chat_option_3").style.display = "block";
                                            document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I truly meant what I said when I believe you are not beyond redemption. <br> <b> Luca: </b> Our time is short. Much shorter than the time you have. You live for many years. <br> <b> Luca: </b> Your existence lasts a hundred of our lifetimes. <br> <b> Luca: </b> Help our kind, instead of destroying our home. That is all I ask.";
                                            document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I just needed money...";
                                            document.getElementById("chat_option_2").innerHTML = "<b> A) </b> I guess I should be kinder to mother nature.";
                                            document.getElementById("chat_option_3").innerHTML = "<b> A) </b> You’re a weirdo, Luca. But you’re nicer than I thought.";

                                            document.getElementById("chat_option_1").onclick = function () {
                                                buttonClickSound();
                                                document.getElementById("chat_option_2").style.display = "none";
                                                document.getElementById("chat_option_3").style.display = "none";
                                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> I do not know what that is. <br> <b> Luca: </b> But I do sense you have some semblance of morality in you. <br> <b> Luca: </b> Let it guide you well for once.";
                                                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I know what I need to do. Goodbye, Luca. Thank you.";

                                                document.getElementById("chat_option_1").onclick = function () {
                                                    buttonClickSound();
                                                    document.getElementById("chat_option_1").style.display = "none";
                                                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Go, outsider. Dawn awaits, and with it, a new day.";
                                                    setTimeout(function () {
                                                        document.getElementById("chat_global").style.opacity = "0";
                                                        document.getElementById("chat_background").style.opacity = "0";
                                                        document.getElementById("map").style.filter = "blur(0px)";
                                                        document.getElementById("character_id").style.filter = "blur(0px)";
                                                        map_movment_val = "on";
                                                        map_movment_chat = "off";
                                                        map_mission_goal = 9;
                                                        chat_b2_luca_house_val_id = false;
                                                    }, 3000);
                                                }
                                            }
                                            document.getElementById("chat_option_2").onclick = function () {
                                                buttonClickSound();
                                                document.getElementById("chat_option_2").style.display = "none";
                                                document.getElementById("chat_option_3").style.display = "none";
                                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Yes. You should. <br> <b> Luca: </b> You took much. <br> <b> Luca: </b> But you can give it back.";
                                                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I know what I need to do. Goodbye, Luca. Thank you.";

                                                document.getElementById("chat_option_1").onclick = function () {
                                                    buttonClickSound();
                                                    document.getElementById("chat_option_1").style.display = "none";
                                                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Go, outsider. Dawn awaits, and with it, a new day.";
                                                    setTimeout(function () {
                                                        document.getElementById("chat_global").style.opacity = "0";
                                                        document.getElementById("chat_background").style.opacity = "0";
                                                        document.getElementById("map").style.filter = "blur(0px)";
                                                        document.getElementById("character_id").style.filter = "blur(0px)";
                                                        map_movment_val = "on";
                                                        map_movment_chat = "off";
                                                        map_mission_goal = 9;
                                                        chat_b2_luca_house_val_id = false;
                                                    }, 3000);
                                                }
                                            }
                                            document.getElementById("chat_option_3").onclick = function () {
                                                buttonClickSound();
                                                document.getElementById("chat_option_2").style.display = "none";
                                                document.getElementById("chat_option_3").style.display = "none";
                                                document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Though you are insulting me, I sense a kinship of sorts. <br> <b> Luca: </b> Perhaps you have come to truly understand the motive for your presence. <br> <b> Luca: </b> Let this lesson last forever.";
                                                document.getElementById("chat_option_1").innerHTML = "<b> A) </b> I know what I need to do. Goodbye, Luca. Thank you.";

                                                document.getElementById("chat_option_1").onclick = function () {
                                                    buttonClickSound();
                                                    document.getElementById("chat_option_1").style.display = "none";
                                                    document.getElementById("chat_question").innerHTML = "<b> Luca: </b> Go, outsider. Dawn awaits, and with it, a new day.";
                                                    setTimeout(function () {
                                                        document.getElementById("chat_global").style.opacity = "0";
                                                        document.getElementById("chat_background").style.opacity = "0";
                                                        document.getElementById("map").style.filter = "blur(0px)";
                                                        document.getElementById("character_id").style.filter = "blur(0px)";
                                                        map_movment_val = "on";
                                                        map_movment_chat = "off";
                                                        map_mission_goal = 9;
                                                        chat_b2_luca_house_val_id = false;
                                                    }, 3000);
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
        }
    }
}

function chat_c2_library_A_val() {
    map_movment_chat = "on";
    map_movment_val = "off";
    document.getElementById("chat_global").style.display = "block";
    document.getElementById("chat_background").style.display = "inline";
    document.getElementById("map").style.filter = "blur(5px)";
    document.getElementById("character_id").style.filter = "blur(5px)";
    chat_c2_library_val_id = true;
    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "1";
        document.getElementById("chat_background").style.opacity = "1";
    }, 600)

    document.getElementById("chat_option_1").style.display = "none";
    document.getElementById("chat_option_2").style.display = "none";
    document.getElementById("chat_option_3").style.display = "none";
    document.getElementById("chat_question").innerHTML = " <br> <br> <br> <br> <b> The Outsider: </b> There’s a disorganized pile of books. Looks like it hasn’t been touched in a long while.";

    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "0";
        document.getElementById("chat_background").style.opacity = "0";
        document.getElementById("map").style.filter = "blur(0px)";
        document.getElementById("character_id").style.filter = "blur(0px)";
        map_movment_val = "on";
        map_movment_chat = "off";
        chat_c2_library_val_id = false;
    }, 5000);
}

function chat_c2_library_B_val() {
    map_movment_chat = "on";
    map_movment_val = "off";
    document.getElementById("chat_global").style.display = "block";
    document.getElementById("chat_background").style.display = "inline";
    document.getElementById("map").style.filter = "blur(5px)";
    document.getElementById("character_id").style.filter = "blur(5px)";
    chat_c2_library_val_id = true;
    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "1";
        document.getElementById("chat_background").style.opacity = "1";
    }, 600)

    document.getElementById("chat_option_1").style.display = "block";
    document.getElementById("chat_option_2").style.display = "none";
    document.getElementById("chat_option_3").style.display = "none";
    document.getElementById("chat_question").innerHTML = " <br> <b> The Outsider: </b> There’s a disorganized pile of books. Looks like it hasn’t been touched in a long while.";
    document.getElementById("chat_option_1").innerHTML = " <i> [Look for the book Luca described] </i>";
    if (m2_done === false) {
        document.getElementById("chat_option_2").style.display = "block";
        document.getElementById("chat_option_2").innerHTML = " <i> [While you’re here, why not organize the pile?] </i>";
    }

    document.getElementById("chat_option_1").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_1").style.display = "none";
        document.getElementById("chat_option_2").style.display = "none";
        document.getElementById("chat_question").innerHTML = " <br> <br> <br> <i> You find the book Luca requested. It’s old and looks like it may crumble at any moment... </i> <br> <br> <i> You’d best get back to him quickly. </i>";
        setTimeout(function () {
            document.getElementById("chat_global").style.opacity = "0";
            document.getElementById("chat_background").style.opacity = "0";
            document.getElementById("map").style.filter = "blur(0px)";
            document.getElementById("character_id").style.filter = "blur(0px)";
            map_mission_goal = 8;
            map_movment_val = "on";
            map_movment_chat = "off";
            chat_c2_library_val_id = false;
        }, 5000);
    }
    document.getElementById("chat_option_2").onclick = function () {
        buttonClickSound();

        document.getElementById("chat_option_1").style.display = "none";
        document.getElementById("chat_option_2").style.display = "none";
        setTimeout(function () {
            document.getElementById("chat_global").style.opacity = "0";
            document.getElementById("chat_background").style.opacity = "0";
            document.getElementById("map").style.filter = "blur(0px)";
            document.getElementById("character_id").style.filter = "blur(0px)";
            map_mission_goal = 8;
            chat_c2_library_val_id = false;
            setTimeout(function () {
                blackout = 2;
                fade_blackout();
                setTimeout(function () {
                    document.getElementById("map").style.display = "none";
                    document.getElementById("chat").style.display = "none";
                    character.style.display = "none";
                    m2setup();
                    isPlayingMinigame = true;
                }, 1500)
            }, 1000)
        }, 3000);

    }
}

function chat_c2_library_C_val() {
    map_movment_chat = "on";
    map_movment_val = "off";
    document.getElementById("chat_global").style.display = "block";
    document.getElementById("chat_background").style.display = "inline";
    document.getElementById("map").style.filter = "blur(5px)";
    document.getElementById("character_id").style.filter = "blur(5px)";
    chat_c2_library_val_id = true;
    setTimeout(function () {
        document.getElementById("chat_global").style.opacity = "1";
        document.getElementById("chat_background").style.opacity = "1";
    }, 600)

    document.getElementById("chat_option_1").style.display = "none";
    document.getElementById("chat_option_2").style.display = "block";
    document.getElementById("chat_option_3").style.display = "none";
    document.getElementById("chat_question").innerHTML = " <br> <b> The Outsider: </b> There’s a disorganized pile of books. Looks like it hasn’t been touched in a long while.";
    document.getElementById("chat_option_2").innerHTML = " <i> [Leave it be, you have better things to do] </i>";
    if (m2_done === false) {
        document.getElementById("chat_option_1").style.display = "block";
        document.getElementById("chat_option_1").innerHTML = " <i> [While you’re here, why not organize the pile?] </i>";
    } else {
        document.getElementById("chat_question").innerHTML = " <br> <b> The Outsider: </b> A neatly organized pile of old books. You can pat yourself on the back for that.";

    }

    document.getElementById("chat_option_1").onclick = function () {
        buttonClickSound();

        document.getElementById("chat_option_1").style.display = "none";
        document.getElementById("chat_option_2").style.display = "none";
        setTimeout(function () {
            document.getElementById("chat_global").style.opacity = "0";
            document.getElementById("chat_background").style.opacity = "0";
            document.getElementById("map").style.filter = "blur(0px)";
            document.getElementById("character_id").style.filter = "blur(0px)";
            chat_c2_library_val_id = false;
            setTimeout(function () {
                blackout = 2;
                fade_blackout();
                setTimeout(function () {
                    document.getElementById("map").style.display = "none";
                    document.getElementById("chat").style.display = "none";
                    character.style.display = "none";
                    m2setup();
                    isPlayingMinigame = true;
                }, 1500)
            }, 1000)
        }, 3000);

    }

    document.getElementById("chat_option_2").onclick = function () {
        buttonClickSound();
        document.getElementById("chat_option_1").style.display = "none";
        document.getElementById("chat_option_2").style.display = "none";
        setTimeout(function () {
            document.getElementById("chat_global").style.opacity = "0";
            document.getElementById("chat_background").style.opacity = "0";
            document.getElementById("map").style.filter = "blur(0px)";
            document.getElementById("character_id").style.filter = "blur(0px)";
            map_movment_val = "on";
            map_movment_chat = "off";
            chat_c2_library_val_id = false;
        }, 3000);
    }
}

function menu_start() {
    document.getElementById("menu").style.backgroundImage = "url('img/menu/FirstMenu_background.png')";
    btn_play = 0;
    btn_exit = 0;
    btn_new_game = 0;
    menu_btn_play = document.getElementById("menu-btn-play");
    menu_btn_exit = document.getElementById("menu-btn-exit");
    menu_btn_new_game = document.getElementById("menu-btn-new-game");

    // Mouse-over para seleção no menu
    menu_btn_play.onmouseover = function () {
        if (btn_play === 0) {
            document.getElementById("hover-btn-play").style.opacity = "1";
            btn_play = 1;
        }
    }
    menu_btn_play.onmouseout = function () {
        if (btn_play === 1) {
            document.getElementById("hover-btn-play").style.opacity = "0";
            btn_play = 0;
        }
    }
    menu_btn_exit.onmouseover = function () {
        if (btn_exit === 0) {
            document.getElementById("hover-btn-exit").style.opacity = "1";
            btn_exit = 1;
        }
    }
    menu_btn_exit.onmouseout = function () {
        if (btn_exit === 1) {
            document.getElementById("hover-btn-exit").style.opacity = "0";
            btn_exit = 0;
        }
    }
    menu_btn_new_game.onmouseover = function () {
        if (btn_new_game === 0) {
            document.getElementById("hover-btn-new-game").style.opacity = "1";
            btn_new_game = 1;
        }
    }
    menu_btn_new_game.onmouseout = function () {
        if (btn_new_game === 1) {
            document.getElementById("hover-btn-new-game").style.opacity = "0";
            btn_new_game = 0;
        }
    }
    // ----------------------------------------------------------------------------------------

    // Onclick de "pLay", "exit", "new_game";
    menu_btn_play.onclick = function () {
        document.getElementById("menu-options-1").style.display = "none";
        document.getElementById("menu-options-2").style.display = "block";
        buttonClickSound();
        main_menu_bgm();
    }
    menu_btn_exit.onclick = function () {
        document.getElementById("menu-options-2").style.display = "none";
        document.getElementById("menu-options-1").style.display = "block";
        buttonClickSound();
    }
    menu_btn_new_game.onclick = function () {
        document.getElementById("menu-options-1").style.display = "none";
        document.getElementById("menu-options-2").style.display = "none";
        buttonClickSound();
        prologue_bgm()
        life_stage = 1;
        map_a1_val = false;
        prologue();
        //birthing_chamber();
        // the_sprawl();
        // Callie_House();
        // Lower_Trunk();
        // Library();
        // The_heartwood();
        // Luca_House();

    }
    // ----------------------------------------------------------------------------------------
}

function prologue() {
    setTimeout(function () {
        document.getElementById("menu").style.backgroundImage = "url('img/menu/Fundo.png')";
    }, 1000)
    blackout = 1;
    fade_blackout()
    document.getElementById("prologue").style.display = "block";
    timer_prologue_cont = 0;
    timer_prologue_cont++;
    if (timer_prologue_cont === 1) {
        timer_prologue_func(1)
    }
    timer_prologue = setInterval(function () {
        timer_prologue_cont++;
        switch (timer_prologue_cont) {
            case 2:
                timer_prologue_func(2);
                break;
            case 3:
                timer_prologue_func(3);
                break;
            case 4:
                timer_prologue_func(4);
                break;
            case 5:
                timer_prologue_func(5);
                break;
            case 6:
                timer_prologue_func(6);
                break;
        }
    }, 7100);
}

function timer_prologue_func(n) {
    if (timer_prologue_cont === 1) {
        setTimeout(function () {
            document.getElementById("prologue-text-" + n).style.display = "block";
            document.getElementById("prologue-text").style.display = "block";
            setTimeout(function () {
                document.getElementById("prologue-text-" + n).style.opacity = "1";
                document.getElementById("prologue-text").style.opacity = "1";
                setTimeout(function () {
                    document.getElementById("prologue-text-" + n).style.opacity = "0";
                    setTimeout(function () {
                        document.getElementById("prologue-text-" + n).style.display = "none";
                    }, 1000);
                }, 3000);
            }, 2000);
        }, 2000);
    } else {
        document.getElementById("prologue-text-" + n).style.display = "block";
        setTimeout(function () {
            document.getElementById("prologue-text-" + n).style.opacity = "1";
            setTimeout(function () {
                document.getElementById("prologue-text-" + n).style.opacity = "0";
                if (timer_prologue_cont === 6) {
                    document.getElementById("prologue-text").style.opacity = "0";
                }
                setTimeout(function () {
                    document.getElementById("prologue-text-" + n).style.display = "none";
                    if (timer_prologue_cont === 6) {
                        document.getElementById("prologue-text").style.display = "none";
                        setTimeout(function () {
                            clearInterval(timer_prologue);
                            blackout = 2;
                            fade_blackout();
                            setTimeout(function () {
                                document.getElementById("menu").style.display = "none";
                                first_cutscene();
                                first_cutscene_bgm();
                            }, 1500);
                        }, 100);
                    }
                }, 1000);
            }, 4000);
        }, 2000);
    }
}

function first_cutscene() {
    document.getElementById("prologue").style.display = "none";
    document.getElementById("first_cutscene").style.display = "block";
    document.getElementById("first_cutscene").style.backgroundImage = "url('img/first_cutscene/cs1.png')";
    timer_first_cutscene_cont = 1;
    timer_first_cutscene = setInterval(function () {
        timer_first_cutscene_cont++;
        switch (timer_first_cutscene_cont) {
            case 2:
                timer_first_cutscene_func(2);
                break;
            case 3:
                timer_first_cutscene_func(3);
                break;
            case 4:
                timer_first_cutscene_func(4);
                break;
            case 5:
                timer_first_cutscene_func(5);
                break;
        }
    }, 5000);
}

function timer_first_cutscene_func(cs) {
    document.getElementById("first_cutscene").style.backgroundImage = "url('img/first_cutscene/cs" + cs + ".png')";
    if (cs === 5) {
        setTimeout(function () {
            clearInterval(timer_first_cutscene);
            blackout = 2;
            fade_blackout();
            setTimeout(function () {
                a1_bgm();
                document.getElementById("first_cutscene").style.backgroundImage = "url('img/first_cutscene/cs6.png')";
                timer_first_cutscene_cont = 6;
                timer_first_cutscene_2 = setInterval(function () {
                    timer_first_cutscene_cont++;
                    switch (timer_first_cutscene_cont) {
                        case 7:
                            timer_first_cutscene2_func(7);
                            break;
                        case 8:
                            timer_first_cutscene2_func(8);
                            break;
                    }
                }, 5000)
            }, 500);
        }, 5000)
    }
}

function timer_first_cutscene2_func(cs) {
    document.getElementById("first_cutscene").style.backgroundImage = "url('img/first_cutscene/cs" + cs + ".png')";
    if (cs === 8) {
        setTimeout(function () {
            clearInterval(timer_first_cutscene_2);
            fade_blackout();
            setTimeout(function () {
                document.getElementById("first_cutscene").style.display = "none";
                birthing_chamber();
            }, 1500);
        }, 5000)
    }
}

function final_cutscene() {
    document.getElementById("final_cutscene").style.display = "block";
    document.getElementById("final_cutscene").style.backgroundImage = "url('img/final_cutscene/cs1.png')";
    timer_final_cutscene_cont = 1;
    timer_final_cutscene = setInterval(function () {
        timer_final_cutscene_cont++;
        switch (timer_final_cutscene_cont) {
            case 2:
                timer_final_cutscene_func(2);
                break;
            case 3:
                timer_final_cutscene_func(3);
                break;
            case 4:
                timer_final_cutscene_func(4);
                break;
            case 5:
                timer_final_cutscene_func(5);
                break;
            case 6:
                timer_final_cutscene_func(6);
                break;
            case 7:
                timer_final_cutscene_func(7);
                break;
        }
    }, 5000);
}

function timer_final_cutscene_func(cs) {
    if (cs === 7) {
        if (achiv_stag === 2) {
            document.getElementById("final_cutscene").style.backgroundImage = "url('img/final_cutscene/cs7FE.png')";
        } else {
            document.getElementById("final_cutscene").style.backgroundImage = "url('img/final_cutscene/cs7FN.png')";
        }
    } else {
        document.getElementById("final_cutscene").style.backgroundImage = "url('img/final_cutscene/cs" + cs + ".png')";
    }
    if (cs === 7) {
        setTimeout(function () {
            clearInterval(timer_final_cutscene);
            blackout = 2;
            fade_blackout();
            setTimeout(function () {
                document.getElementById("final_cutscene").style.backgroundImage = "url('img/final_cutscene/cs9.png')";
                timer_final_cutscene_cont = 9;
                timer_final_cutscene_2 = setInterval(function () {
                    timer_final_cutscene_cont++;
                    switch (timer_final_cutscene_cont) {
                        case 9:
                            timer_final_cutscene2_func(9);
                            break;
                        case 10:
                            timer_final_cutscene2_func(10);
                            break;
                        case 11:
                            timer_final_cutscene2_func(11);
                            break;
                        case 12:
                            timer_final_cutscene2_func(12);
                            break;
                    }
                }, 8000)
            }, 500);
        }, 8000)
    }
}

function timer_final_cutscene2_func(cs) {
    document.getElementById("final_cutscene").style.backgroundImage = "url('img/final_cutscene/cs" + cs + ".png')";
    if (cs === 12) {
        setTimeout(function () {
            clearInterval(timer_final_cutscene_2);
        }, 8000)
    }
}

function character_play(life_stage_id) {
    switch (life_stage_id) {
        case 1:
            character.style.height = "150px";
            switch (map_area) {
                case "a1":
                    character.style.bottom = "90px";
                    break;
                case "b1":
                    character.style.bottom = "90px";
                    break;
                case "c1":
                    character.style.bottom = "87px";
                    break;
            }
            break;
        case 2:
            character.style.height = "160px";
            switch (map_area) {
                case "a1":
                    character.style.bottom = "125px";
                    break;
                case "b1":
                    character.style.bottom = "125px";
                    break;
                case "c1":
                    character.style.bottom = "123px";
                    break;
                case "d1":
                    character.style.bottom = "125px";
                    break;
                case "c2":
                    character.style.bottom = "125px";
                    break;
                case "a2":
                    character.style.bottom = "125px";
                    break;
                case "b2":
                    character.style.bottom = "125px";
                    break;
            }
            break;
    }
    character.style.display = "inline";
    character_movement_val = "on";
}

// Maps

function birthing_chamber() {
    if (map_a1_val === false) {
        map_a1_val = true;
        chat_a1_callie_val_id = false;
        transformation = "off";
        transformation_val = "off";
        map_mission_goal = 1;
        timer_stage1_IdleRight_cont = 1;
        timer_stage1_IdleRight = setInterval(function () {
            character.src = "img/character/IdleRight/IdleRight" + timer_stage1_IdleRight_cont + ".png";
            if (timer_stage1_IdleRight_cont === 5) {
                timer_stage1_IdleRight_cont = 1;
            } else {
                timer_stage1_IdleRight_cont++;
            }
        }, Stage1_IdleRight_vel);

        map_a1_id.style.backgroundPositionX = "0px";

        document.getElementById("map_a1_tutorial_1").style.display = "inline";
        document.getElementById("map_a1_tutorial_1").style.opacity = "1";
        document.getElementById("map_a1_tutorial_1").src = "img/a1/tutorial.png";
        document.getElementById("map_a1_tutorial_1").style.left = 400 + parseInt(map_a1_id.style.backgroundPositionX) + "px";

        document.getElementById("map_a1_tutorial_2").style.display = "inline";
        document.getElementById("map_a1_tutorial_2").style.opacity = "0";
        document.getElementById("map_a1_tutorial_2").src = "img/a1/tutorial2.png";
        document.getElementById("map_a1_tutorial_2").style.left = 975 + parseInt(map_a1_id.style.backgroundPositionX) + "px";

        timer_callie_IdleLeft_cont = 1;
        timer_callie_IdleLeft = setInterval(function () {
            callie.src = "img/callie/IdleLeft/IdleLeft" + timer_callie_IdleLeft_cont + ".png";
            if (timer_callie_IdleLeft_cont === 3) {
                timer_callie_IdleLeft_cont = 1;
            } else {
                timer_callie_IdleLeft_cont++;
            }
        }, callie_IdleLeft_vel);

        callie.style.display = "inline";
        callie.style.left = 1400 + parseInt(map_a1_id.style.backgroundPositionX) + "px";

        document.getElementById("map_a1_porta").src = "img/a1/Madeira1.png";
        portal_a1_b1_val = "off";

    } else if (map_a1_val === true) {
        portal_madeira = "comida";
        map_b1_id.style.display = "none";
        document.getElementById("map_a1_tutorial_1").style.display = "none";
        document.getElementById("map_a1_tutorial_2").style.display = "none";

        document.getElementById("map_a1_porta").src = "img/a1/Madeira5.png";
        portal_a1_b1_val = "on";

    }
    if (map_mission_goal === 4) {
        transformation_orb_func();
    }
    map_fly_val = "off";
    portal_area = "a1";
    map_a1_id.style.backgroundPositionY = "-940px";

    document.getElementById("menu").style.display = "none";
    document.getElementById("map_a1_e_esq").style.display = "inline";
    document.getElementById("map_a1_e_esq").src = "img/a1/e_esquerda.png";
    document.getElementById("map_a1_e_dir").style.display = "inline";
    document.getElementById("map_a1_e_dir").src = "img/a1/e_direita.png";

    document.getElementById("map_a1_eggzitos").style.display = "inline";
    document.getElementById("map_a1_eggzitos").src = "img/a1/Eggzitos.png";
    document.getElementById("map_a1_eggzitos").style.left = 220 + parseInt(map_a1_id.style.backgroundPositionX) + "px";

    document.getElementById("map_a1_porta").style.display = "inline";
    document.getElementById("map_a1_porta").style.left = 1520 + parseInt(map_a1_id.style.backgroundPositionX) + "px";

    map_a1_id.style.backgroundImage = "url('img/a1/BackgroundA1.png')";
    map_a1_id.style.display = "block";
    map_area = "a1";
    map_a1_mobility = 2265 - 889;

    document.getElementById("map_a1_e_esq").style.transform = "translateX(-" + (-100 * (parseInt(map_a1_id.style.backgroundPositionX)) / map_a1_mobility) + "%)";
    document.getElementById("map_a1_e_dir").style.transform = "translateX(-" + (-100 * (parseInt(map_a1_id.style.backgroundPositionX)) / map_a1_mobility) + "%)";

    map_movment_val = "on";
    character_play(life_stage);
}

function portal_a1_b1_unlock() {
    if (parseInt(document.getElementById("map_a1_porta").style.left) <= 370 && parseInt(document.getElementById("map_a1_porta").style.left) >= 200) {
        if (portal_a1_b1_val === "on" && portal_madeira === true) {
            if (map_mission_goal === 2) {
                map_movment_val = "off";
                portal_a1_b1_val = "off";

                timer_map_ai_portal_cont = 2;
                timer_map_ai_portal = setInterval(function () {
                    document.getElementById("map_a1_porta").src = "img/a1/Madeira" + timer_map_ai_portal_cont + ".png";
                    eatingSound();
                    if (timer_map_ai_portal_cont === 5) {
                        map_movment_val = "on";
                        portal_a1_b1_val = "on";
                        portal_madeira = "comida";
                        clearInterval(timer_map_ai_portal);
                    } else {
                        timer_map_ai_portal_cont++;
                    }
                }, 1000);
            }
        }
    }
}

function portal_a1_b1() {
    if (parseInt(document.getElementById("map_a1_porta").style.left) <= 370 && parseInt(document.getElementById("map_a1_porta").style.left) >= 200) {
        if (parseInt(map_a1_id.style.backgroundPositionY) >= -940 && parseInt(map_a1_id.style.backgroundPositionY) <= -940 + 171) {
            if (portal_a1_b1_val === "on" && portal_area === "a1") {
                if (map_mission_goal >= 2 && portal_madeira === "comida") {
                    portal_a1_b1_val = "off";
                    map_movment_val = "off";
                    map_b1_id.style.backgroundPositionX = "-20px";
                    map_b1_id.style.backgroundPositionY = "-2446px";
                    blackout = 2;
                    fade_blackout()
                    setTimeout(function () {
                        the_sprawl();
                        setTimeout(function () {
                            portal_a1_b1_val = "on";
                        }, 4000)
                    }, 1500);
                }
            }
        }
    }
    if (parseInt(document.getElementById("map_b1").style.backgroundPositionX) <= -10 && parseInt(document.getElementById("map_b1").style.backgroundPositionX) >= -110) {
        if (parseInt(map_b1_id.style.backgroundPositionY) >= -2446 && parseInt(map_b1_id.style.backgroundPositionY) <= -2446 + 171) {
            if (portal_a1_b1_val === "on" && portal_area === "b1") {
                if (map_mission_goal >= 2 && portal_madeira === "comida") {
                    portal_a1_b1_val = "off";
                    map_movment_val = "off";
                    map_a1_id.style.backgroundPositionX = "-1240px";
                    blackout = 2;
                    fade_blackout()
                    setTimeout(function () {
                        birthing_chamber();
                        setTimeout(function () {
                            portal_a1_b1_val = "on";
                        }, 4000)
                    }, 1500);
                }
            }
        }
    }
}

function portal_b1_c1() {
    if (parseInt(document.getElementById("map_b1").style.backgroundPositionX) <= -981 && parseInt(document.getElementById("map_b1").style.backgroundPositionX) >= -1060) {
        if (parseInt(map_b1_id.style.backgroundPositionY) >= -1185 && parseInt(map_b1_id.style.backgroundPositionY) <= -1185 + 171) {
            if (portal_b1_c1_val === "on" && portal_area === "b1") {
                portal_b1_c1_val = "off";
                map_movment_val = "off";
                map_c1_id.style.backgroundPositionX = "-367px";
                map_c1_id.style.backgroundPositionY = "0px";
                blackout = 2;
                fade_blackout()
                setTimeout(function () {
                    Callie_House();
                    setTimeout(function () {
                        portal_b1_c1_val = "on";
                    }, 4000)
                }, 1500);
            }
        }
    }
    if (parseInt(document.getElementById("map_c1").style.backgroundPositionX) <= -321 && parseInt(document.getElementById("map_c1").style.backgroundPositionX) >= -446) {
        if (parseInt(map_c1_id.style.backgroundPositionY) >= 0 && parseInt(map_c1_id.style.backgroundPositionY) <= 171) {
            if (portal_b1_c1_val === "on" && portal_area === "c1") {
                portal_b1_c1_val = "off";
                map_movment_val = "off";
                map_b1_id.style.backgroundPositionX = "-1056px";
                map_b1_id.style.backgroundPositionY = "-1185px";
                blackout = 2;
                fade_blackout()
                setTimeout(function () {
                    the_sprawl();
                    setTimeout(function () {
                        portal_b1_c1_val = "on";
                    }, 4000)
                }, 1500);
            }
        }
    }
}

function portal_b1_d1() {
    if (parseInt(document.getElementById("map_b1").style.backgroundPositionX) <= -448 && parseInt(document.getElementById("map_b1").style.backgroundPositionX) >= -632) {
        if (parseInt(map_b1_id.style.backgroundPositionY) >= -570 && parseInt(map_b1_id.style.backgroundPositionY) <= -570 + 171) {
            if (portal_b1_d1_val === "on" && portal_area === "b1") {
                portal_b1_d1_val = "off";
                map_movment_val = "off";
                map_d1_id.style.backgroundPositionX = "-661px";
                blackout = 2;
                fade_blackout()
                setTimeout(function () {
                    d1_bgm();
                    Lower_Trunk();
                    setTimeout(function () {
                        portal_b1_d1_val = "on";
                    }, 4000)
                }, 1500);
            }
        }
    }
    if (parseInt(document.getElementById("map_d1").style.backgroundPositionX) <= -611 && parseInt(document.getElementById("map_d1").style.backgroundPositionX) >= -661) {
        if (portal_b1_d1_val === "on" && portal_area === "d1") {
            portal_b1_d1_val = "off";
            map_movment_val = "off";
            map_b1_id.style.backgroundPositionX = "-537px";
            map_b1_id.style.backgroundPositionY = "-570px";
            blackout = 2;
            fade_blackout()
            setTimeout(function () {
                a1_bgm();
                the_sprawl();
                setTimeout(function () {
                    portal_b1_d1_val = "on";
                }, 4000)
            }, 1500);
        }
    }
}

function portal_d1_a2() {
    if (parseInt(document.getElementById("map_d1").style.backgroundPositionX) <= -0 && parseInt(document.getElementById("map_d1").style.backgroundPositionX) >= -62) {
        if (portal_d1_a2_val === "on" && portal_area === "d1") {
            portal_d1_a2_val = "off";
            map_movment_val = "off";
            map_a2_id.style.backgroundPositionX = "0px";
            map_a2_id.style.backgroundPositionY = "-1259px";
            blackout = 2;
            fade_blackout()
            setTimeout(function () {
                a2_bgm();
                The_heartwood();
                setTimeout(function () {
                    portal_d1_a2_val = "on";
                }, 4000)
            }, 1500);
        }
    }
    if (parseInt(document.getElementById("map_a2").style.backgroundPositionX) <= -0 && parseInt(document.getElementById("map_a2").style.backgroundPositionX) >= -59) {
        if (parseInt(map_a2_id.style.backgroundPositionY) >= -1259 && parseInt(map_a2_id.style.backgroundPositionY) <= -1259 + 171) {
            if (portal_d1_a2_val === "on" && portal_area === "a2") {
                portal_d1_a2_val = "off";
                map_movment_val = "off";
                map_d1_id.style.backgroundPositionX = "0px";
                blackout = 2;
                fade_blackout()
                setTimeout(function () {
                    d1_bgm();
                    Lower_Trunk();
                    setTimeout(function () {
                        portal_d1_a2_val = "on";
                    }, 4000)
                }, 1500);
            }
        }
    }
}

function portal_c2_a2() {
    if (parseInt(document.getElementById("map_c2").style.backgroundPositionX) <= -0 && parseInt(document.getElementById("map_c2").style.backgroundPositionX) >= -65) {
        if (portal_c2_a2_val === "on" && portal_area === "c2") {
            portal_c2_a2_val = "off";
            map_movment_val = "off";
            map_a2_id.style.backgroundPositionX = "-624px";
            map_a2_id.style.backgroundPositionY = "-522px";
            blackout = 2;
            fade_blackout()
            setTimeout(function () {
                The_heartwood();
                setTimeout(function () {
                    portal_c2_a2_val = "on";
                }, 4000)
            }, 1500);
        }
    }
    if (parseInt(document.getElementById("map_a2").style.backgroundPositionX) <= -576 && parseInt(document.getElementById("map_a2").style.backgroundPositionX) >= -660) {
        if (parseInt(map_a2_id.style.backgroundPositionY) >= -522 && parseInt(map_a2_id.style.backgroundPositionY) <= -522 + 171) {
            if (portal_c2_a2_val === "on" && portal_area === "a2") {
                portal_c2_a2_val = "off";
                map_movment_val = "off";
                map_c2_id.style.backgroundPositionX = "0px";
                blackout = 2;
                fade_blackout()
                setTimeout(function () {
                    Library();
                    setTimeout(function () {
                        portal_c2_a2_val = "on";
                    }, 4000)
                }, 1500);
            }
        }
    }
}

function portal_b2_a2() {
    if (parseInt(document.getElementById("map_b2").style.backgroundPositionX) <= -705 && parseInt(document.getElementById("map_b2").style.backgroundPositionX) >= -785) {
        if (portal_b2_a2_val === "on" && portal_area === "b2") {
            portal_b2_a2_val = "off";
            map_movment_val = "off";
            map_a2_id.style.backgroundPositionX = "-68px";
            map_a2_id.style.backgroundPositionY = "-872";
            blackout = 2;
            fade_blackout()
            setTimeout(function () {
                The_heartwood();
                setTimeout(function () {
                    portal_b2_a2_val = "on";
                }, 4000)
            }, 1500);
        }
    }
    if (parseInt(document.getElementById("map_a2").style.backgroundPositionX) <= -19 && parseInt(document.getElementById("map_a2").style.backgroundPositionX) >= -116) {
        if (parseInt(map_a2_id.style.backgroundPositionY) >= -872 && parseInt(map_a2_id.style.backgroundPositionY) <= -872 + 171) {
            if (portal_b2_a2_val === "on" && portal_area === "a2") {
                portal_b2_a2_val = "off";
                map_movment_val = "off";
                map_b2_id.style.backgroundPositionX = "-746px";
                blackout = 2;
                fade_blackout()
                setTimeout(function () {
                    Luca_House();
                    setTimeout(function () {
                        portal_b2_a2_val = "on";
                    }, 4000)
                }, 1500);
            }
        }
    }
}


function the_sprawl() {

    //temporario
    //life_stage = 2;
    //map_mission_goal = 5;

    // temporario
    //map_b1_id.style.backgroundPositionX = "-20px";
    //map_b1_id.style.backgroundPositionY = "-2446px";

    document.getElementById("map_b1_madeira1").style.display = "inline";
    document.getElementById("map_b1_madeira1").src = "img/b1/Madeira1.png";
    document.getElementById("map_b1_madeira1").style.left = parseInt(map_b1_id.style.backgroundPositionX) + "px";
    document.getElementById("map_b1_madeira1").style.top = parseInt(map_b1_id.style.backgroundPositionY) + "px";

    document.getElementById("map_b1_madeira2").style.display = "inline";
    document.getElementById("map_b1_madeira2").src = "img/b1/Madeira2.png";
    document.getElementById("map_b1_madeira2").style.left = parseInt(map_b1_id.style.backgroundPositionX) + "px";
    document.getElementById("map_b1_madeira2").style.top = parseInt(map_b1_id.style.backgroundPositionY) + "px";

    document.getElementById("map_b1_madeira3").style.display = "inline";
    document.getElementById("map_b1_madeira3").src = "img/b1/Madeira3.png";
    document.getElementById("map_b1_madeira3").style.left = parseInt(map_b1_id.style.backgroundPositionX) + "px";
    document.getElementById("map_b1_madeira3").style.top = parseInt(map_b1_id.style.backgroundPositionY) + "px";

    document.getElementById("map_b1_passagem_cima").style.display = "inline";
    document.getElementById("map_b1_passagem_cima").src = "img/b1/PassagemCima.png";
    document.getElementById("map_b1_passagem_cima").style.left = parseInt(map_b1_id.style.backgroundPositionX) + "px";
    document.getElementById("map_b1_passagem_cima").style.top = parseInt(map_b1_id.style.backgroundPositionY) + "px";

    if (map_mission_goal === 5 && tutorial_3 === false) {
        tutorial_3 = true;
        document.getElementById("map_a1_tutorial_3").style.display = "inline";
        document.getElementById("map_a1_tutorial_3").style.opacity = "0";
        document.getElementById("map_a1_tutorial_3").src = "img/a1/tutorial3.png";
        document.getElementById("map_a1_tutorial_3").style.left = 650 + parseInt(map_b1_id.style.backgroundPositionX) + "px";
        document.getElementById("map_a1_tutorial_3").style.bottom = "110px";

    } else {
        document.getElementById("map_a1_tutorial_3").style.display = "none";
    }

    clearInterval(timer_callie_IdleLeft);
    clearInterval(timer_orb);
    clearInterval(timer_luca_IdleRight);

    document.getElementById("menu").style.display = "none";
    map_a1_id.style.display = "none";
    map_c1_id.style.display = "none";
    map_d1_id.style.display = "none";
    portal_area = "b1"
    map_fly_val = "on";

    map_b1_id.style.backgroundImage = "url('img/b1/BackgroundB1.png')";
    map_b1_id.style.display = "block";
    map_area = "b1";
    map_b1_mobility = 1950 - 889;

    map_movment_val = "on";
    character_play(life_stage);
}

function Callie_House() {

    chat_c1_callie_val_id = false;

    //temporario
    // life_stage = 2;
    // map_mission_goal = 5;

    // temporário
    // map_c1_id.style.backgroundPositionX = "-367px";

    map_c1_id.style.backgroundPositionY = "0px";

    timer_callie_IdleLeft_cont = 1;
    timer_callie_IdleLeft = setInterval(function () {
        callie_house.src = "img/callie/IdleLeft/IdleLeft" + timer_callie_IdleLeft_cont + ".png";
        if (timer_callie_IdleLeft_cont === 3) {
            timer_callie_IdleLeft_cont = 1;
        } else {
            timer_callie_IdleLeft_cont++;
        }
    }, callie_IdleLeft_vel);

    callie_house.style.display = "inline";
    callie_house.style.left = 1540 + parseInt(map_c1_id.style.backgroundPositionX) + "px";

    document.getElementById("map_c1_porta").style.display = "inline";
    document.getElementById("map_c1_porta").src = "img/a1/Madeira5.png";
    document.getElementById("map_c1_porta").style.left = 660 + parseInt(map_c1_id.style.backgroundPositionX) + "px";

    document.getElementById("menu").style.display = "none";
    map_b1_id.style.display = "none";
    portal_area = "c1"
    map_fly_val = "off";

    map_c1_id.style.backgroundImage = "url('img/c1/BackgroundC1.jpeg')";
    map_c1_id.style.display = "block";
    map_area = "c1";
    map_c1_mobility = 2350 - 889 - 316;

    map_movment_val = "on";
    character_play(life_stage);
}

function transformation_orb_func() {
    if (transformation === "off") {
        document.getElementById("orb_id").style.display = "inline";
        document.getElementById("orb_id").style.left = 1058 + parseInt(map_a1_id.style.backgroundPositionX) + "px";
        timer_orb_cont = 1;
        timer_orb = setInterval(function () {
            document.getElementById("orb_id").src = "img/character/transformation/Orb/Orb" + timer_orb_cont + ".png";
            if (timer_orb_cont === 3) {
                timer_orb_cont = 1;
            } else {
                timer_orb_cont++;
            }
        }, orb_vel);

    }
}

function transformation_func() {
    clearInterval(timer_stage1_IdleRight);
    life_stage = 0;
    document.getElementById("transform_bgm").play();
    clearInterval(timer_stage1_IdleRight);
    clearInterval(timer_stage1_IdleLeft);
    clearInterval(timer_stage1_WalkLeft);
    clearInterval(timer_stage1_WalkRight);

    character.style.height = "150px";
    character.style.bottom = "90px";

    document.getElementById("orb_id").style.opacity = "0";

    timer_transformation_cont = 1;
    timer_transformation = setInterval(function () {
        character.src = "img/character/transformation/transformation_sprites/Transformation" + timer_transformation_cont + ".png";
        if (timer_transformation_cont === 7) {
            character.style.height = "165px";
            character.style.bottom = "110px";
        }
        if (timer_transformation_cont === 10) {
            clearInterval(timer_orb);
            clearInterval(timer_transformation);
            Idle_stage2_basic();
        } else {
            timer_transformation_cont++;
        }

    }, transformation_vel);
}

function Idle_stage2_basic() {
    timer_stage2_IdleRight_cont = 1;
    setTimeout(function () {
        character.style.height = "160px";
        character.style.bottom = "125px";
        map_mission_goal = 5;
        life_stage = 2;
    }, 100);
    timer_stage2_IdleRight = setInterval(function () {
        character.src = "img/character/Stage2/IdleRight/IdleRight" + timer_stage2_IdleRight_cont + ".png";
        if (timer_stage2_IdleRight_cont === 3) {
            timer_stage2_IdleRight_cont = 1;
        } else {
            timer_stage2_IdleRight_cont++;
        }
    }, Stage2_IdleRight_vel);
}

function Lower_Trunk() {

    //temporario
    // life_stage = 2;
    // map_mission_goal = 5;

    // temporário
    // map_d1_id.style.backgroundPositionX = "-644px";

    map_d1_id.style.backgroundPositionY = "-88px";

    timer_luca_IdleRight_cont = 1;
    timer_luca_IdleRight = setInterval(function () {
        luca.src = "img/luca/IdleRight/IdleRight" + timer_luca_IdleRight_cont + ".png";
        if (timer_luca_IdleRight_cont === 3) {
            timer_luca_IdleRight_cont = 1;
        } else {
            timer_luca_IdleRight_cont++;
        }
    }, luca_IdleRight_vel);

    luca.style.display = "inline";
    luca.style.left = 400 + parseInt(map_d1_id.style.backgroundPositionX) + "px";

    document.getElementById("map_d1_porta_1").style.display = "inline";
    document.getElementById("map_d1_porta_1").src = "img/a1/Madeira5.png";
    document.getElementById("map_d1_porta_1").style.left = 285 + parseInt(map_d1_id.style.backgroundPositionX) + "px";

    document.getElementById("map_d1_porta_2").style.display = "inline";
    document.getElementById("map_d1_porta_2").src = "img/a1/Madeira5.png";
    document.getElementById("map_d1_porta_2").style.left = 950 + parseInt(map_d1_id.style.backgroundPositionX) + "px";

    document.getElementById("menu").style.display = "none";
    map_b1_id.style.display = "none";
    map_a2_id.style.display = "none";
    portal_area = "d1"
    map_fly_val = "off";

    map_d1_id.style.backgroundImage = "url('img/d1/BackgroundD1.png')";
    map_d1_id.style.display = "block";
    map_area = "d1";
    map_d1_mobility = 1550 - 889;

    map_movment_val = "on";
    character_play(life_stage);
}

function Library() {

    chat_c2_library_val_id = false;

    //temporario
    // life_stage = 2;

    // temporário
    // map_c2_id.style.backgroundPositionX = "0px";

    map_c2_id.style.backgroundPositionY = "-128px";

    document.getElementById("map_c2_porta").style.display = "inline";
    document.getElementById("map_c2_porta").src = "img/a1/Madeira5.png";
    document.getElementById("map_c2_porta").style.left = 285 + parseInt(map_c2_id.style.backgroundPositionX) + "px";

    document.getElementById("books").style.display = "inline";
    document.getElementById("books").src = "img/c2/books.png";
    document.getElementById("books").style.left = 1050 + parseInt(map_c2_id.style.backgroundPositionX) + "px";

    document.getElementById("menu").style.display = "none";
    map_a2_id.style.display = "none";
    portal_area = "c2"

    map_c2_id.style.backgroundImage = "url('img/c2/BackgroundC2.png')";
    map_c2_id.style.display = "block";
    map_area = "c2";
    map_fly_val = "off";
    map_c2_mobility = 1650 - 889;

    map_movment_val = "on";
    character_play(life_stage);
}

function The_heartwood() {

    //temporario
    // life_stage = 2;

    // temporário
    // map_a2_id.style.backgroundPositionX = "0px";
    // map_a2_id.style.backgroundPositionY = "-1259px";

    document.getElementById("map_a2_porta_1").style.display = "inline";
    document.getElementById("map_a2_porta_1").src = "img/a2/Porta1.png";
    document.getElementById("map_a2_porta_1").style.left = parseInt(map_a2_id.style.backgroundPositionX) + "px";
    document.getElementById("map_a2_porta_1").style.top = parseInt(map_a2_id.style.backgroundPositionY) + "px";

    document.getElementById("map_a2_porta_2").style.display = "inline";
    document.getElementById("map_a2_porta_2").src = "img/a2/Porta2.png";
    document.getElementById("map_a2_porta_2").style.left = parseInt(map_a2_id.style.backgroundPositionX) + "px";
    document.getElementById("map_a2_porta_2").style.top = parseInt(map_a2_id.style.backgroundPositionY) + "px";

    document.getElementById("map_a2_porta_3").style.display = "inline";
    document.getElementById("map_a2_porta_3").src = "img/a2/Porta3.png";
    document.getElementById("map_a2_porta_3").style.left = parseInt(map_a2_id.style.backgroundPositionX) + "px";
    document.getElementById("map_a2_porta_3").style.top = parseInt(map_a2_id.style.backgroundPositionY) + "px";

    document.getElementById("map_a2_passagem_cima").style.display = "inline";
    document.getElementById("map_a2_passagem_cima").src = "img/a2/light.png";
    document.getElementById("map_a2_passagem_cima").style.left = parseInt(map_a2_id.style.backgroundPositionX) + "px";
    document.getElementById("map_a2_passagem_cima").style.top = parseInt(map_a2_id.style.backgroundPositionY) + "px";

    clearInterval(timer_luca_IdleRight);

    document.getElementById("menu").style.display = "none";
    map_c2_id.style.display = "none";
    map_b2_id.style.display = "none";
    map_d1_id.style.display = "none";
    portal_area = "a2"
    map_fly_val = "on";

    map_a2_id.style.backgroundImage = "url('img/a2/BackgroundA2.png')";
    map_a2_id.style.display = "block";
    map_area = "a2";
    map_a2_mobility = 1550 - 889;

    map_movment_val = "on";
    character_play(life_stage);
}

function Luca_House() {

    chat_b2_luca_house_val_id = false;

    //temporario
    // life_stage = 2;

    // temporário
    // map_b2_id.style.backgroundPositionX = "-746px";

    map_b2_id.style.backgroundPositionY = "-12px";

    timer_luca_IdleRight_cont = 1;
    timer_luca_IdleRight = setInterval(function () {
        luca_house.src = "img/luca/IdleRight/IdleRight" + timer_luca_IdleRight_cont + ".png";
        if (timer_luca_IdleRight_cont === 3) {
            timer_luca_IdleRight_cont = 1;
        } else {
            timer_luca_IdleRight_cont++;
        }
    }, luca_IdleRight_vel);

    luca_house.style.display = "inline";
    luca_house.style.left = 590 + parseInt(map_b2_id.style.backgroundPositionX) + "px";

    document.getElementById("map_b2_porta").style.display = "inline";
    document.getElementById("map_b2_porta").src = "img/b2/Portal2B.png";
    document.getElementById("map_b2_porta").style.left = -250 + parseInt(map_b2_id.style.backgroundPositionX) + "px";

    document.getElementById("menu").style.display = "none";
    map_a2_id.style.display = "none";
    portal_area = "b2"

    map_b2_id.style.backgroundImage = "url('img/b2/BackgroundB2.png')";
    map_b2_id.style.display = "block";
    map_area = "b2";
    map_fly_val = "off";
    map_b2_mobility = 1800 - 889;

    map_movment_val = "on";
    character_play(life_stage);
}

function buttonClickSound() {
    document.getElementById('buttonClickSound').currentTime = 0;
    document.getElementById('buttonClickSound').volume = global_sfx_volume;
    document.getElementById('buttonClickSound').play();
}

function eatingSound() {
    document.getElementById('m1eating').currentTime = 0;
    document.getElementById('m1eating').play();
    document.getElementById('m1eating').volume = global_sfx_volume;
}

function main_menu_bgm() {
    document.getElementById('main_bgm').currentTime = 0;
    document.getElementById('main_bgm').play();
    document.getElementById('main_bgm').volume = global_bgm_volume;
}

function prologue_bgm() {
    document.getElementById('main_bgm').pause();
    document.getElementById('prologue_bgm').currentTime = 0;
    document.getElementById('prologue_bgm').play();
    document.getElementById('prologue_bgm').volume = global_bgm_volume;
}

function first_cutscene_bgm() {
    document.getElementById('prologue_bgm').pause();
    document.getElementById('first_cutscene_bgm').currentTime = 0;
    document.getElementById('first_cutscene_bgm').play();
    document.getElementById('first_cutscene_bgm').volume = global_bgm_volume;
}

function final_cutscene_bgm() {
    document.getElementById('a2_bgm').pause();
    document.getElementById('final_cutscene_bgm').currentTime = 0;
    document.getElementById('final_cutscene_bgm').play();
    document.getElementById('final_cutscene_bgm').volume = global_bgm_volume;
}

function a1_bgm() {
    document.getElementById('first_cutscene_bgm').pause();
    document.getElementById('d1_bgm').pause();
    document.getElementById('a1_bgm').currentTime = 0;
    document.getElementById('a1_bgm').play();
    document.getElementById('a1_bgm').volume = global_bgm_volume;
}

function a2_bgm() {
    document.getElementById('d1_bgm').pause();
    document.getElementById('a2_bgm').currentTime = 0;
    document.getElementById('a2_bgm').play();
    document.getElementById('a2_bgm').volume = global_bgm_volume;
}

function d1_bgm() {
    document.getElementById('a1_bgm').pause();
    document.getElementById('a2_bgm').pause();
    document.getElementById('d1_bgm').currentTime = 0;
    document.getElementById('d1_bgm').play();
    document.getElementById('d1_bgm').volume = 0.12;
}

// MINIJOGO 1

function m1setup() { // colocação da janela de jogo e instruções
    document.getElementById("a1_bgm").pause();
    document.getElementById('m1window').style.display = "block";
    document.getElementById('m1window').style.backgroundImage = "url(img/minigame_daycare/CallieInstructions.png)";
    document.getElementById('m1buttonBegin').onclick = function () {
        buttonClickSound();
        playMinigame1();
    }
}

function m1displayElements() { // preparação dos elementos do jogo

    document.getElementById('m1window').style.backgroundImage = "url(img/minigame_daycare/CallieDaycare.png)";
    document.getElementById('m1buttonBegin').style.display = "none";
    document.getElementById('m1buttonTryAgain').style.display = "none";
    document.getElementById('m1buttonGiveUp').style.display = "none";
    document.getElementById('m1happy').style.display = "block";
    document.getElementById('m1happymove').style.display = "block";
    document.getElementById('m1timer').style.display = "block";
    document.getElementById('m1timermove').style.display = "block";
    for (m1grubNumber = 1; m1grubNumber < 13; m1grubNumber++) {
        document.getElementById('m1grub' + m1grubNumber).style.display = "block";
    }
    for (m1grubNumber = 1; m1grubNumber < 13; m1grubNumber++) {
        document.getElementById('m1grub' + m1grubNumber).src = 'img/minigame_daycare/LarvaDeitada.png';
    }
    m1grubSpriteCycle = 5;
    for (m1grubNumber = 1; m1grubNumber < 13; m1grubNumber++) {
        document.getElementById('m1grub' + m1grubNumber + 'click').src = 'img/minigame_daycare/Crying' + m1grubSpriteCycle + '.png';
    }
}


function m1startMusic() { // música
    document.getElementById('m1bgm').volume = 0.03;
    document.getElementById('m1bgm').play();
}

function m1grubStatePicker(grubN) { // seleção do estado de cada larva, 33% de hipótese de precisar de ser clicada
    m1grubStatus = Math.floor(Math.random() * 3);
    if (m1grubStatus === 0) {

        document.getElementById('m1grub' + grubN).style.display = "none";
        document.getElementById('m1grub' + +grubN + 'click').style.display = "block";
        document.getElementById('m1grub' + grubN + 'click').onclick = function () {
            document.getElementById('m1eating').currentTime = 0;
            document.getElementById('m1eating').play();
            document.getElementById('m1eating').volume = global_sfx_volume;
            clearInterval(m1grubImage);
            document.getElementById('m1grub' + grubN).style.display = "block";
            document.getElementById('m1grub' + grubN + 'click').style.display = "none";

            document.getElementById('m1happymove').style.height = (parseInt(document.getElementById('m1happymove').style.height) - 9 + "px"); // MUDAR PARA 9
        }

    } else if (m1grubStatus === 1 || m1grubStatus === 2) {
        clearInterval(m1grubImage);
        document.getElementById('m1grub' + grubN).style.display = "block";
        document.getElementById('m1grub' + grubN + 'click').style.display = "none";
    }
}

function m1endGame() { // término do jogo
    clearInterval(m1timerCheck);
    clearInterval(m1grubImage);
    m1hideElements();
    document.getElementById('m1bgm').pause();
    document.getElementById('m1eating').pause();
    document.getElementById('m1timermove').style.height = "0";
    document.getElementById('m1happymove').style.height = "198px";
}

function m1hideElements() { // omissão dos elementos do jogo
    document.getElementById('m1happy').style.display = "none";
    document.getElementById('m1happymove').style.display = "none";
    document.getElementById('m1timer').style.display = "none";
    document.getElementById('m1timermove').style.display = "none";
    for (m1grubNumber = 1; m1grubNumber < 13; m1grubNumber++) {
        document.getElementById('m1grub' + m1grubNumber).style.display = "none";
    }
    for (m1grubNumber = 1; m1grubNumber < 13; m1grubNumber++) {
        document.getElementById('m1grub' + m1grubNumber + 'click').style.display = "none";
    }
}

function m1victory() { // ecrã de vitória
    document.getElementById('m1window').style.backgroundImage = "url(img/minigame_daycare/victory.png)";
    document.getElementById('m1victory').currentTime = 0;
    document.getElementById('m1victory').play();
    document.getElementById('m1victory').volume = 0.03;
    document.getElementById('m1buttonContinue').style.display = "block";
    document.getElementById('m1buttonContinue').onclick = function () {
        document.getElementById("a1_bgm").play();
        buttonClickSound();
        m1_done = true;
        achiv_stag++;

        setTimeout(function () {
            blackout = 2;
            fade_blackout();
            setTimeout(function () {
                document.getElementById('m1window').style.display = "none";
                document.getElementById('m1victory').pause();

                document.getElementById("map").style.display = "block";
                document.getElementById("chat").style.display = "block";
                character.style.display = "inline";
                map_movment_val = "on";
                map_movment_chat = "off";
                isPlayingMinigame = false;
            }, 1500)
        }, 1000)

    }
}

function m1defeat() { // ecrã de derrota
    document.getElementById('m1window').style.backgroundImage = "url(img/minigame_daycare/defeat.png)";
    document.getElementById('m1defeat').currentTime = 0;
    document.getElementById('m1defeat').play();
    document.getElementById('m1defeat').volume = 0.03;
    document.getElementById('m1buttonTryAgain').style.display = "block";
    document.getElementById('m1buttonTryAgain').onclick = function () {
        buttonClickSound();
        playMinigame1();
        document.getElementById('m1defeat').pause();
    }
    document.getElementById('m1buttonGiveUp').style.display = "block";
    document.getElementById('m1buttonGiveUp').onclick = function () {
        document.getElementById("a1_bgm").play();
        buttonClickSound();

        setTimeout(function () {
            blackout = 2;
            fade_blackout();
            setTimeout(function () {
                document.getElementById('m1window').style.display = "none";
                document.getElementById('m1defeat').pause();

                document.getElementById("map").style.display = "block";
                document.getElementById("chat").style.display = "block";
                character.style.display = "inline";
                map_movment_val = "on";
                map_movment_chat = "off";
                isPlayingMinigame = false;
            }, 1500)
        }, 1000)

    }
}

function playMinigame1() { // início do jogo

    m1displayElements();
    m1startMusic();

    m1timerLength = 22;
    document.getElementById('m1timermove').style.height = "0";
    document.getElementById('m1happymove').style.height = "198px";

    m1timerCheck = setInterval(() => {

        m1timerLength -= 1;

        document.getElementById('m1timermove').style.height = (parseInt(document.getElementById('m1timermove').style.height) + 9 + "px");

        for (m1grubNumber = 1; m1grubNumber < 13; m1grubNumber++) {
            m1grubStatePicker(m1grubNumber);
        }

        if (m1timerLength === 0) {
            setTimeout(() => {
                m1endGame();
                m1defeat();
            }, 300);
        }

        if (document.getElementById('m1happymove').style.height === "0px") {
            setTimeout(() => {
                m1endGame();
                m1victory();
            }, 300);
        }
    }, 1000);
}

// MINIJOGO 2

function m2setup() { // inicia o campo do minijogo 2
    document.getElementById("a2_bgm").pause();
    document.getElementById('m2window').style.display = "block";
    document.getElementById('m2window').style.backgroundImage = "url(img/minigame_bonanza/BonanzaInstructions.png)";
    document.getElementById('m2buttonBegin').onclick = function () {
        buttonClickSound();
        playMinigame2();
    }
}

function m2displayElements() { // gera os elementos do minijogo 2

    document.getElementById('m2window').style.backgroundImage = "url(img/minigame_bonanza/Bonanza.png)";
    document.getElementById('m2buttonBegin').style.display = "none";
    document.getElementById('m2buttonTryAgain').style.display = "none";
    document.getElementById('m2buttonGiveUp').style.display = "none";
    document.getElementById('m2timer').style.display = "block";
    document.getElementById('m2timermove').style.display = "block";
    document.getElementById('m2bookgame').style.display = "flex";
    document.getElementById('m2bookgame').style.visibility = "visible";
}

function m2startMusic() {
    document.getElementById('m2bgm').volume = 0.03;
    document.getElementById('m2bgm').play();
}

function m2endGame() { // termina o temporizador e faz reset ao mesmo, trava a música e quaisquer sons
    clearInterval(m2timerCheck);
    m2hideElements();
    document.getElementById('m2bgm').pause();
    document.getElementById('m2bookclose').pause();
    document.getElementById('m2bookopen').pause();
    document.getElementById('m2ding').pause();
    document.getElementById('m2timermove').style.height = "0";
}

function m2hideElements() { // esconde elementos
    document.getElementById('m2timer').style.display = "none";
    document.getElementById('m2timermove').style.display = "none";
    document.getElementById('m2bookgame').style.visibility = "hidden";
}

function m2victory() { // mostra os elementos do ecrã de vitória
    document.getElementById('m2window').style.backgroundImage = "url(img/minigame_bonanza/victory.png)";
    document.getElementById('m1victory').currentTime = 0;
    document.getElementById('m1victory').play();
    document.getElementById('m1victory').volume = 0.03;
    document.getElementById('m2buttonContinue').style.display = "block";
    document.getElementById('m2buttonContinue').onclick = function () {
        document.getElementById("a2_bgm").play();
        buttonClickSound();
        m2_done = true;
        achiv_stag++;
        setTimeout(function () {
            blackout = 2;
            fade_blackout();
            setTimeout(function () {
                document.getElementById('m2window').style.display = "none";
                document.getElementById('m1victory').pause();

                document.getElementById("map").style.display = "block";
                document.getElementById("chat").style.display = "block";
                character.style.display = "inline";
                map_movment_val = "on";
                map_movment_chat = "off";
                isPlayingMinigame = false;
            }, 1500)
        }, 1000)
    }
}

function m2defeat() { // mostra os elementos do ecrã de derrota, faz reset ao jogo internamente
    document.getElementById('m2window').style.backgroundImage = "url(img/minigame_bonanza/defeat.png)";
    document.getElementById('m1defeat').currentTime = 0;
    document.getElementById('m1defeat').play();
    document.getElementById('m1defeat').volume = 0.03;
    document.getElementById('m2buttonTryAgain').style.display = "block";
    document.getElementById('m2buttonTryAgain').onclick = function () {
        buttonClickSound();
        m2resetGame();
        playMinigame2();
        document.getElementById('m1defeat').pause();
    }
    document.getElementById('m2buttonGiveUp').style.display = "block";
    document.getElementById('m2buttonGiveUp').onclick = function () {
        document.getElementById('buttonClickSound').currentTime = 0;
        document.getElementById('buttonClickSound').volume = 0.09;
        document.getElementById('buttonClickSound').play();
        document.getElementById("a2_bgm").play();
        setTimeout(function () {
            blackout = 2;
            fade_blackout();
            setTimeout(function () {
                document.getElementById('m2window').style.display = "none";
                document.getElementById('m1defeat').pause();

                document.getElementById("map").style.display = "block";
                document.getElementById("chat").style.display = "block";
                character.style.display = "inline";
                map_movment_val = "on";
                map_movment_chat = "off";
                isPlayingMinigame = false;

            }, 1500)
        }, 1000)
    }
}

m2books.forEach(m2book => m2book.addEventListener('click', m2flipBook)); // percorre cada elemento na lista de livros e confere-lhes um evento de click associado à função seguinte

function m2flipBook() { // através do método 'this', o contexto depende do livro a ser clicado. se o jogo estiver em modo travado, a função não executa. caso contrário confere ao livro clicado a animação de flip e adiciona-o à lista de livros clicados
    if (m2lockGame) return;
    if (this === m2firstBook) return;

    this.classList.add('flip');
    this.classList.add('bookList');

    document.getElementById('m2bookopen').currentTime = 0;
    document.getElementById('m2bookopen').volume = 0.03;
    document.getElementById('m2bookopen').play();

    if (!m2hasFlippedBook) { // primeiro click
        m2hasFlippedBook = true;
        m2firstBook = this;

        return;
    }
// segundo click
    m2hasFlippedBook = false;
    m2secondBook = this;

    m2checkBookMatch();

}

function m2checkBookMatch() { // verifica se ambos os livros são iguais. caso sejam, elimina-os. caso não sejam, são escondidos de novo.
    let isBookMatch = m2firstBook.dataset.name === m2secondBook.dataset.name;
    m2lockGame = true;
    if (isBookMatch) {
        m2disableBooks();
        m2booksArray.push(m2firstBook.dataset.name);
        m2booksArray.push(m2secondBook.dataset.name);

    } else {
        m2unflipBooks();
    }
}

function m2disableBooks() { // retira os livros iguais da área de jogo
    m2firstBook.removeEventListener('click', m2flipBook);
    m2secondBook.removeEventListener('click', m2flipBook);
    setTimeout(() => {

        m2firstBook.style.visibility = "hidden";
        m2secondBook.style.visibility = "hidden";
        document.getElementById('m2ding').currentTime = 0;
        document.getElementById('m2ding').volume = 0.03;
        document.getElementById('m2ding').play();
        m2bookCounter -= 2;
        m2lockGame = false;

    }, 1200)
}

function m2unflipBooks() { // retorna os livros a um estado clicável
    m2lockGame = true;
    setTimeout(() => {
        document.getElementById('m2bookclose').currentTime = 0;
        document.getElementById('m2bookclose').volume = 0.03;
        document.getElementById('m2bookclose').play();
        m2firstBook.classList.remove('flip');
        m2secondBook.classList.remove('flip');

        m2boardReset();

    }, 1200)
}

function m2boardReset() { // retorna o jogo a um estado jogável após uma correspondência ou livros a voltarem ao normal
    m2hasFlippedBook = false;
    m2lockGame = false;
    m2firstBook = null;
    m2secondBook = null;
}

function m2shuffle() { // baralha os livros no campo de jogo
    m2books.forEach(m2book => {
        m2bookPos = Math.floor(Math.random() * 12);
        m2book.style.order = m2bookPos;
    })
}

function m2resetGame() { // percorre todos os elementos com a classe de livro, restora-lhes a visibilidade e remove a classe que os torna não interagíveis
    m2booksList = document.getElementsByClassName('m2book');
    for (let i = 0; i < m2booksList.length; i++) {

        if (m2booksList[i].style.visibility === 'hidden') {
            m2booksList[i].addEventListener('click', m2flipBook)
        }
        m2booksList[i].className = 'm2book';
        m2booksList[i].style = '';
    }

    m2boardReset();
    m2booksArray.length = 0;
}


function playMinigame2() { // inicia o minijogo

    m2displayElements();
    m2startMusic();
    m2shuffle();

    m2hasFlippedBook = false;

    m2bookCounter = 12;
    m2timerLength = 98;
    document.getElementById('m2timermove').style.height = "0";

    m2timerCheck = setInterval(() => {

        m2timerLength -= 1;

        document.getElementById('m2timermove').style.height = (parseInt(document.getElementById('m2timermove').style.height) + 2 + "px");

        if (m2bookCounter === 0) {
            m2endGame();
            m2victory();
        }

        if (m2timerLength === 0) {
            setTimeout(() => {
                m2endGame();
                m2defeat();
            }, 450);
        }
    }, 1000);
}

function the_end() {
    map_movment_val = "off";
    blackout = 3;
    fade_blackout()
    setTimeout(function () {
        final_cutscene_bgm();
        document.getElementById("map").style.display = "none";
        document.getElementById("chat").style.display = "none";
        character.style.display = "none";
        final_cutscene();
    }, 1500);
}