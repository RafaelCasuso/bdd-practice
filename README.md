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

<strong>Título:</strong> El piloto mueve el Rover

<strong>Como</strong> Piloto
<strong>Quiero</strong> Mover el Rover en cualquier dirección
<strong>De Manera Que</strong> Pueda desplazarme en él

<strong>Criterios de Aceptación:</strong>
	<strong>Escenario 1:</strong> El Rover se mueve hacia adelante
		<strong>Dado</strong> Que existe el Rover
		<strong>Y</strong> Que existe el Grid
		<strong>Y</strong> Que el Rover tiene una posición y una dirección sobre el Grid
		<strong>Cuando</strong> Pulso 'f'
		<strong>Entonces</strong> El Rover avanza una casilla en el Grid
		<strong>Y</strong> Mantiene su dirección
	<strong>Escenario 2:</strong> El Rover se mueve hacia atrás
		<strong>Dado</strong> Que existe el Rover
		<strong>Y</strong> Que existe el Grid
		<strong>Y</strong> Que el Rover tiene una posición y una dirección sobre el Grid
		<strong>Cuando</strong> Pulso 'b'
		<strong>Entonces</strong> El Rover retrocede una casilla en el Grid
		<strong>Y</strong> Mantiene su dirección
	<strong>Escenario 3:</strong> El Rover gira a la derecha
		<strong>Dado</strong> Que existe el Rover
		<strong>Y</strong> Que existe el Grid
		<strong>Y</strong> Que el Rover tiene una posición y una dirección sobre el Grid
		<strong>Cuando</strong> Pulso 'r'
    <strong>Entonces</strong> El Rover cambia su dirección un punto cardinal en el sentido de las agujas del reloj.
		<strong>Y</strong> Mantiene su posición
	<strong>Escenario 4:</strong> El Rover gira a la izquierda
		<strong>Dado</strong> Que existe el Rover
		<strong>Y</strong> Que existe el Grid
		<strong>Y</strong> Que el Rover tiene una posición y una dirección sobre el Grid
		<strong>Cuando</strong> Pulso 'l'
    <strong>Entonces</strong> El Rover cambia su dirección un punto cardinal en el sentido contrario al de las agujas       del reloj.
		<strong>Y</strong> Mantiene su posición
	<strong>Escenario 5:</strong> El Rover gira a la derecha y se mueve hacia adelante
		<strong>Dado</strong> Que existe el Rover
		<strong>Y</strong> Que existe el Grid
		<strong>Y</strong> Que el Rover tiene una posición y una dirección sobre el Grid
		<strong>Cuando</strong> Pulso 'rf'
    <strong>Entonces</strong> El Rover cambia su dirección un punto cardinal en el sentido  de las agujas del reloj y       avanza una     casilla.
	<strong>Escenario 6:</strong> El Rover sobrepasa el límite del Grid en el eje Y
		<strong>Dado</strong> Que existe el Rover
		<strong>Y</strong> Que existe el Grid
		<strong>Y</strong> Que el Rover tiene una posición y una dirección sobre el Grid
		<strong>Y</strong> Que su posición está a una casilla del límite del Grid en el eje Y
		<strong>Cuando</strong> Pulso 'ff'
    <strong>Entonces</strong> El Rover avanza dos casillas, una hasta el límite del Grid y para la siguiente reaparece      en la primera casilla.
		<strong>Y</strong> Mantiene su dirección




