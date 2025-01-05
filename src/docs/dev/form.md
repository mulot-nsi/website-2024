# Formulaire exercice

## Super

<form id="exercise" method="POST" markdown="1" action="/api/save">
<input type="hidden" name="exercise_id" value="demo">

<div>
    <label for="firstname">Prénom</label>
    <input id="firstname" type="text" name="firstname">
</div>

<div>
    <label for="lastname">Nom</label>
    <input id="lastname" type="text" name="lastname">
</div>

<div>
    <label for="group">Classe</label>
    <select id="group" name="group">
        <option value="SEC01">Seconde 1</option>
        <option value="SEC02">Seconde 2</option>
        <option value="SEC03">Seconde 3</option>
        <option value="SEC04">Seconde 4</option>
        <option value="SEC05">Seconde 5</option>
        <option value="SEC06">Seconde 6</option>
        <option value="SEC07">Seconde 7</option>
        <option value="SEC08">Seconde 8</option>
        <option value="SEC09">Seconde 9</option>
        <option value="SEC10">Seconde 10</option>
        <option value="SEC11">Seconde 11</option>
        <option value="SEC12">Seconde 12</option>
        <option value="SEC13">Seconde 13</option>
        <option value="SEC14">Seconde 14</option>
        <option value="SEC15">Seconde 15</option>
        <option value="SEC16">Seconde 16</option>
    </select>
</div>

!!! question "Question 1"
    Quel moteur de recherche utilisez-vous généralement ?<br>
    <input type="text" name="q1">

!!! question "Question 2"
    Pourquoi utilisez-vous ce moteur de recherche ?<br>
    <textarea name="q2"></textarea>

<input type="submit" value="Terminer">
</form>