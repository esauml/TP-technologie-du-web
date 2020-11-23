const anagrammes = (stringA, stringB) => {
    /**
     * stringA est égale à stringB si et seulement s'ils partagent les mêmes
     * caractères alphabétiques dans la même quantité.
     * La case n'est pas pris en compte
     *
     * Exemples :
     *
     * anagrams('rail safety', 'fairy tales') === true
     * anagrams('RAIL! SAFETY!', 'fairy tales') === true
     * anagrams('Hi there', 'Bye there') === false
     */

    // Change to lower case 
    stringA = stringA.toLowerCase();
    stringB = stringB.toLowerCase();

    // Replace all special characters into a null character
    stringA = stringA.replace(/\W/g, '');
    stringB = stringB.replace(/\W/g, '');

    // Convert to Strings into an array
    stringA = stringA.split("");
    stringB = stringB.split("");

    // Order Array
    stringA = stringA.sort();
    stringB = stringB.sort();

    // Una vez ordenados, los convertimos a cadena nuevamente
    // Once order, we convert the arrays into Strings
    stringA = stringA.join("");
    stringB = stringB.join("");

    // Finally we compare and return 
    return stringA === stringB;
};

class Stack {
    /**
     * Créer une structure d'empilement. La structure doit être
     * une classe contenant les méthodes :
     *  - `push`: pour ajouter un élément au bout de l'empilement,
     *  - `pop` pour retirer le dernier élément et le retourner;
     *  - et `peek` pour récupérer le premeier élément.
     *
     * Exemples :
     *
     * const s = new Stack();
     * s.push(1);
     * s.push(2);
     * s.push(3);
     * s.pop(); // returns 3
     * s.pop(); // returns 2
     * s.peek(); // returns 1
     */

    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(element) {
        this.data[this.top] = element;
        this.top++;
    }

    pop() {
        if (this.top > 0) {
            this.top--;
            let result = this.data[this.top];
            this.data.splice(this.top, 1);

            return result;
        } else
            return null;
    }

    peek() {
        if (this.top > 0)
            return this.data[this.top - 1];
        else
            return null;
    };
}

const fizzBuzz = (n) => {
    /**
     * Affiche les nombres de 1 à n, en remplaçant les multiples de 3 par fizz et 
     * les multiples de 5 par buzz
     *
     * Exemple :
     *
     * fizzBuzz(5);
     * console.log(1)
     * console.log(2)
     * console.log('fizz')
     * console.log(4)
     * console.log('buzz')
     */

    // faire un parcours de 1 à n
    for (let i = 1; i < n + 1; i++) {
        //
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzBuzz");
        } else {
            if (i % 3 == 0) {
                console.log("fizz");
            } else {
                if (i % 5 == 0) {
                    console.log("buzz");
                } else {
                    console.log(i);
                }
            }
        }
    }
};

const spirale = (n) => {
    /**
     * Retourne une matrice spirale de taille n x n.
     *
     * Exemples :
     *
     * matrix(2) = [[1, 2],
     *              [4, 3]]
     *
     * matrix(3) = [[1, 2, 3],
     *              [8, 9, 4],
     *              [7, 6, 5]]
     *
     * matrix(4) = [[1,   2,  3, 4],
     *              [12, 13, 14, 5],
     *              [11, 16, 15, 6],
     *              [10,  9,  8, 7]]
     */

};


const puissance4 = (grid) => {
    /**
     * Vérifie si un joueur a gagné au puissance 4,
     * c'est-à-dire s'il a 4 jetons contigus en diagonales, lignes ou colonnes.
     *
     * Exemples :
     *
     * puissance4(
     *  [[ 1, 0, 0, 0 ],
     *   [ 2, 1, 0, 0 ],
     *   [ 2, 1, 1, 2 ],
     *   [ 2, 1, 1, 2 ]]
     *   ) = 1
     * )
     *
     * puissance4(
     *  [[ 1, 1, 0, 0, 0 ],
     *   [ 2, 2, 2, 0, 0 ],
     *   [ 2, 2, 1, 1, 2 ],
     *   [ 2, 2, 1, 1, 2 ]]
     *   ) = 0
     *
     * puissance4(
     *  [[ 1, 2, 0, 0, 0 ],
     *   [ 1, 2, 2, 0, 0 ],
     *   [ 2, 2, 1, 1, 2 ],
     *   [ 2, 2, 1, 1, 2 ]]
     *   ) = 0
     */
}

module.exports = {
    fizzBuzz,
    puissance4,
    spirale,
    anagrammes,
    Stack
}