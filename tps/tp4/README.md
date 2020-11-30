# Les formulaires avec React

Ce TP permet de créer un formulaire avec React. Nous allons voir comment récupérer des informations pour inscrire un utilisateur dans notre application.
En pratique, des librairies comme [Formik](https://formik.org/) proposent une API simple pour cela. 

## Analyse du code

Lisez [le code lié à ce TP](https://codesandbox.io/s/tp-react-form-itrhu?file=/src/index.js) puis répondez aux questions.

**1. Décrire le rôle de chaque fonction (une phrase par fonction).**

1. validateEmail(value) prend une valeur et validate si c'est une email email possible


2. validateName(name)  prend une valeur et validate si l'utilisateur n'ai pas laissé l'espace vide

3. NameField({ name, setName })  le but est de créer un input avec type text et valider son value

4. EmailField({ email, setEmail }) le but est de créer un input avec type email et valider son value

5. Inscription(): rendre tous les composants et contrôler les états de toutes les données

6. submit() modifie le state de isSubmit quand on clique button


**2. Quelles sont les states et les props mis en jeu ? Indiquez leur valeur par défaut.**

1. States:

    1. isSubmit = ```false```
    2. name= ```" "```
    3. email =```" "```
2. Props: 

    1. ```{ email, setEmail }```
    2.  ```{ name, setName }```

**3. Que contient la variable `event` dans `onChange={(event) => setName(event.target.value)}`? Vous pouvez la scruter à l'aide de `console.log`.**

toutes les instances d'input

**4. Pourquoi doit-on encapsuler un espace avec `{" "}` ?**

pour créer un espace entre deux éléments

**5. Peut-on transmettre une fonction dans un Props ?**

oui, il prend une fonction qui renvoie un élément React et l'appelle au lieu d'implémenter sa propre logique

**6. Précisez étape par étape ce que fait React lorsque le champ nom est modifié.**

1. nous sauvegardons la validation de la fonction validateMessage dans le const message
2. nous créons un élément input avec
    1. ```valeur``` -> valeur de rendu précédente
    1. ```onchange``` -> définir le nom avec l'argument: valeur après que l'utilisateur ait fini de taper
    2. ```isvalid``` -> on s'adapte en fonction de la valeur obtenue à partir du message const
3. ajoutez un espace avec ```{" "}```
4. Nous montrons le message de confirmation du const message


**7. Expliquez la regex pour valider un email. Vous pouvez la recopier dans regex101.com pour vous aider.**

```[a-zA-Z0-9.!#$%&'*+\=?^_`{|}~-]```: accepte n'importe quel chiffre, lettre ou caractère

```+@[a-zA-Z0-9-]```: plus un symbole at et des chiffres et des lettres

```+(?:\.[a-zA-Z0-9-]+)*$```:  plus un point suivi de lettres et / ou de chiffres, cette dernière partie peut être répétée plusieurs fois

**8. Un composant a été designé avec `styled-components`. En s'aidant de la [documentation de cette librairie](https://styled-components.com/docs/basics#getting-started), expliquez en quoi consiste ce design.**


Grâce à la librairie, nous ajoutons des propriétés css par défaut à toutes les `inputs`, telles que le padding, margin, background, border y border-radius. Ce n'est que via la valeur isValid dans les accessoires que nous ajoutons la couleur à l'étiquette.

Ceci est le lien [slack](https://stackoverflow.com/questions/11543735/why-the-result-of-booltrue-string-is-string-in-javascript) pour comprendre la estructure de:

```js
color: ${(props) => (props.isValid && "cornflowerblue") || "palevioletred"};    
```

## Mini-projet : un timer

Programmez un composant qui s'incrémente à chaque seconde. Vous aurez pour cela besoin d'utiliser la fonction [`setInterval`](https://www.w3schools.com/jsref/met_win_setinterval.asp). 

Créez un bouton pour démarrer et arrêter le timer. Séparez les secondes des minutes. Réinitialisez le compteur lorsqu'il atteint la valeur `99:59`. Ajoutez une image de fond pour que cela ressemble à un réveil. Utilisez la librairie [react-seven-segment-display](https://www.npmjs.com/package/react-seven-segment-display) pour rendre votre réveil plus réaliste. 

Rédigez un test pour vérifier que le timer fonctionne bien. Vous aurez pour cela besoin de mocker la fonction `setInterval` avec [Jest](https://jestjs.io/docs/en/timer-mocks).
