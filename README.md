<h1>Prácticas BDD</h1>

[![Build Status](https://travis-ci.org/RafaelCasuso/bdd-practice.svg?branch=master)](https://travis-ci.org/RafaelCasuso/bdd-practice)

<h2><strong>¿Qué es BDD?</strong></h2>

Es un proceso de Desarrollo de Software basado en TDD (Test-driven Development) y cuyo acrónimo significa Behaviour-driven
Development (Desarrollo dirigido por Comportamiento). Sus principales objetivos son la construcción de código con calidad,
la garantía de cobertura de tests y el cumplimiento de los requisitos funcionales que necesita la parte de negocio.


<h2><strong>Primeros Pasos con BDD</strong></h2>

Para esto, en BDD partimos de Historias de Usuario, que son definiciones funcionales de Comportamientos deseados para
el Software. Estas Historias de Usuario normalmente deben ser definidas por la parte de negocio en conjunción con el 
equipo de desarrollo.

Siguiendo los principios de TDD, primero definimos un test que cumpla con lo descrito en la primera Historia de Usuario,
después realizamos el código necesario para que ese test sea superado y finalmente refactorizamos ese código realizado.

Repetiremos este proceso tantas veces como sea necesario para acabar con las Historias de Usuario.

<h2><strong>Historia</strong></h2>

<h3><strong>Título:</strong> El piloto mueve el Rover</h3>

<h4><strong>Como</strong> Piloto<br>
<strong>Quiero</strong> Mover el Rover en cualquier dirección<br>
<strong>De Manera Que</strong> Pueda desplazarme en él<br></h4>

<h3><strong>Criterios de Aceptación:</strong></h3>
<h4><strong>Escenario 1:</strong> El Rover se mueve hacia adelante</h4>
<strong>Dado</strong> Que existe el Rover<br>
<strong>Y</strong> Que existe el Grid<br>
<strong>Y</strong> Que el Rover tiene una posición y una dirección sobre el Grid<br>
<strong>Cuando</strong> Pulso 'f'<br>
<strong>Entonces</strong> El Rover avanza una casilla en el Grid<br>
<strong>Y</strong> Mantiene su dirección<br>
<h4><strong>Escenario 2:</strong> El Rover se mueve hacia atrás</h4>
<strong>Dado</strong> Que existe el Rover<br>
<strong>Y</strong> Que existe el Grid<br>
<strong>Y</strong> Que el Rover tiene una posición y una dirección sobre el Grid<br>
<strong>Cuando</strong> Pulso 'b'<br>
<strong>Entonces</strong> El Rover retrocede una casilla en el Grid<br>
<strong>Y</strong> Mantiene su dirección<br>
<h4><strong>Escenario 3:</strong> El Rover gira a la derecha</h4>
<strong>Dado</strong> Que existe el Rover<br>
<strong>Y</strong> Que existe el Grid<br>
<strong>Y</strong> Que el Rover tiene una posición y una dirección sobre el Grid<br>
<strong>Cuando</strong> Pulso 'r'<br>
<strong>Entonces</strong> El Rover cambia su dirección un punto cardinal en el sentido de las agujas del reloj.<br>
<strong>Y</strong> Mantiene su posición<br>
<h4><strong>Escenario 4:</strong> El Rover gira a la izquierda</h4>
<strong>Dado</strong> Que existe el Rover<br>
<strong>Y</strong> Que existe el Grid<br>
<strong>Y</strong> Que el Rover tiene una posición y una dirección sobre el Grid<br>
<strong>Cuando</strong> Pulso 'l'<br>
<strong>Entonces</strong> El Rover cambia su dirección un punto cardinal en el sentido contrario al de las agujas       del reloj.<br>
<strong>Y</strong> Mantiene su posición<br>
<h4><strong>Escenario 5:</strong> El Rover gira a la derecha y se mueve hacia adelante</h4>
<strong>Dado</strong> Que existe el Rover<br>
<strong>Y</strong> Que existe el Grid<br>
<strong>Y</strong> Que el Rover tiene una posición y una dirección sobre el Grid<br>
<strong>Cuando</strong> Pulso 'rf'<br>
<strong>Entonces</strong> El Rover cambia su dirección un punto cardinal en el sentido  de las agujas del reloj y       avanza una     casilla.<br>
<h4><strong>Escenario 6:</strong> El Rover sobrepasa el límite del Grid en el eje Y</h4>
<strong>Dado</strong> Que existe el Rover<br>
<strong>Y</strong> Que existe el Grid<br>
<strong>Y</strong> Que el Rover tiene una posición y una dirección sobre el Grid<br>
<strong>Y</strong> Que su posición está a una casilla del límite del Grid en el eje Y<br>
<strong>Cuando</strong> Pulso 'ff'<br>
<strong>Entonces</strong> El Rover avanza dos casillas, una hasta el límite del Grid y para la siguiente reaparece      en la primera casilla.<br>
<strong>Y</strong> Mantiene su dirección<br>




