#!/usr/bin/node
/**
 * 1. Closure Scope Chain
 */
var globalVariable = 'welcome';

function outer(){
    alert(globalVariable);
    var course ='course ';

    function inner(){
        alert(globalVariable +' '+ course);
        var exclamation ='!';

        function inception() {
            alert(globalVariable + ' ' + course + exclamation);
          }
      
          inception();
        }
      
        inner();
      }
      
      outer();
      