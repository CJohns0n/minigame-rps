"use strict";
var score = "0";
var userInput;
var cpuInput;

$("#rock").click(function() {
                userInput = "rock";
                genCPUInput();
                $("#paperimg").addClass("hidden");
                $("#rockimg").removeClass("hidden");
                $("#scissorsimg").addClass("hidden");
            })
            $("#paper").click(function() {
                userInput = "paper";
                genCPUInput();
                $("#paperimg").removeClass("hidden");
                $("#rockimg").addClass("hidden");
                $("#scissorsimg").addClass("hidden");
            })
            $("#scissors").click(function() {
                userInput = "scissors";
                genCPUInput();
                $("#paperimg").addClass("hidden");
                $("#rockimg").addClass("hidden");
                $("#scissorsimg").removeClass("hidden");
            })
            
            function genCPUInput() {
                cpuInput = Math.floor(Math.random() * 3)
                
                if (cpuInput === 0) {
                    $("#rockimg2").removeClass("hidden");
                    $("#paperimg2").addClass("hidden");
                    $("#scissorsimg2").addClass("hidden");
                    if (userInput === "rock") {
                        $("#winDeclare").html("Draw!");
                        document.getElementById("winDeclare").style.color = "orange";
                    } else if (userInput === "paper") {
                        score++; 
                        $("#winDeclare").html("You Win!");
                        document.getElementById("winDeclare").style.color = "limegreen";
                        
                    } else if (userInput === "scissors") {
                        $("#winDeclare").html("You Lose!");
                        document.getElementById("winDeclare").style.color = "red";
                        
                    }
                } else if (cpuInput === 1) {
                    $("#rockimg2").addClass("hidden");
                    $("#paperimg2").removeClass("hidden");
                    $("#scissorsimg2").addClass("hidden");
                    if (userInput === "paper") {
                        $("#winDeclare").html("Draw!");
                        document.getElementById("winDeclare").style.color = "orange";
                    } else if (userInput === "scissors") {
                        score++;
                        $("#winDeclare").html("You Win!");
                        document.getElementById("winDeclare").style.color = "limegreen";
                        
                    } else if (userInput === "rock") {
                        $("#winDeclare").html("You Lose!");
                        document.getElementById("winDeclare").style.color = "red";
                        
                    }
                } else if (cpuInput === 2) {
                    $("#rockimg2").addClass("hidden");
                    $("#paperimg2").addClass("hidden");
                    $("#scissorsimg2").removeClass("hidden");
                    if (userInput === "scissors") {
                        $("#winDeclare").html("Draw!");
                        document.getElementById("winDeclare").style.color = "orange";
                    } else if (userInput === "rock") {
                        score++; 
                        $("#winDeclare").html("You Win!");
                        document.getElementById("winDeclare").style.color = "limegreen";
                        
                    } else if (userInput === "paper") {
                        $("#winDeclare").html("You Lose!");
                        document.getElementById("winDeclare").style.color = "red";
                        
                    }
                } else {
                    alert("Things are broken, try again!");
                }  
                document.getElementById("winRps").innerHTML = score;
            }