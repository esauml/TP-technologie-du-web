# TP liste d'utilisateurs

## Analyse de code


**1. Quelle ligne charge le fichier JSON dans le code ?**
la ligne 4, dans l'import.

**2. Quelle est la structure de données du fichier JSON ?**
Dans le json, nous pouvons trouver deux objets, des résultats et des informations. Aussi dans le premier objet, nous pouvons trouver un arrangement d'objets qui représentent un utilisateur.

**3. Justifiez le `User.propTypes`. Quelles données ne sont pas prises en compte ?**
Les données qui ne sont pas prises en compte sont:  login, dob, registered, id, phone et cell. Cela est car User PropTypes seulement vérifie les donnes qui utilise dans son code, il n'a pas besoin de vérifier tous les props.

**4. Quelles données sont obligatoires pour construire le composant `User` ?**
Les donées de object "name".

**5. A quoi correspond `PropTypes.shape` ?**
Cela se utilise pour valider un objet avec une forme spécifique.

**6. Pourquoi l'attribut contient deux accolades ?**
Parce que nous pouvons utiliser d'abord la fonction de forme avec (), puis nous spécifions le format de clé et le type de l'objet avec {}

**7. Quel est le nom de l'opérateur qui transmet les données du composant `App` vers le composant `User`? Pourquoi est-ce dangereux d'abuser de cet opérateur ?**
spread operator, c'est dangereux pourquoi il transmet toutes les données indépendamment des données supplémentaires qui ne lui sont pas nécessaires.

**8. Ajoutez un paragraphe `p` au composant `User` pour afficher la date de naissance sous la forme "Né le 27/02/1942" pour un homme ou "Née le 27/02/1942" pour une femme en utilisant une condition ternaire. Copiez le code ajouté dans ce document en guise de réponse.**
```js
let date=props.dob.date.substring(0,10);
date=date.split("-");
<p>{props.gender==="male"?"Né":"Née"} le {date[2]}/{date[1]}/{date[0]}</p>
```

## Rédaction de tests

### Voici le lien [codesandbox.io](https://codesandbox.io/s/react-props-list-from-file-forked-uvi4y?file=/src/test/captureInstantanes.test.js) où vous trouverez les tests

**9. Lisez [les recettes de tests](https://fr.reactjs.org/docs/testing-recipes.html#gatsby-focus-wrapper). Rédigez un test pour vérifier que le composant `User` contient une image.**

**10. Rédigez un autre test dans lequel vous créez le composant `User` avec le `name` de votre choix dans le `props` et vérifiez que le composant affiche bien le `name`.**

**11. Faites un test de "capture d'instantanés" en suivant les indications de la documentation**

**12. Proposez 3 autres tests**


## Mini-projet 
[Liste films](https://goofy-leavitt-517775.netlify.app/)

[Téléchargez une liste de films sous le format d'un fichier JSON](https://imdb-api.com/). Cela vous demandera de créer un compte.

**13. Créez un nouveau projet et affichez les films sous la forme de cartes. Vous devrez soigner le design de la page, sans copiant le code de la liste d'utilisateurs**

