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

    let arrayObj = new Array(n);
    for (var i = 0; i < n; i++) {
        arrayObj[i] = new Array(n);
    }

    let pinLeft = false;
    let goingToUp = true;
    let counter = 1;

    let pin = n - 1;
    let pin2 = 0;

    for (let i = n - 1; i > 0; i--) {
        if (goingToUp) {
            for (let pin = 0; pin < n; pin++) {}
        } else {

        }
    }

    let auxiliar = true;
    let pin1 = n;
    let pin2 = 0;

    for (let cycles = n; cycles < 1; cycles--) {

    }
};

spirale(5);

const puissance4 = (grid) => {
    const puissance4 = (grid) => {
        const vertical = (grid) => {
            for (let i = 0; i < grid.length; i++) {
                let n = 1;
                for (let o = 0; o < grid[i].length; o++) {
                    switch (grid[o][i]) {
                        case 1:
                            if (n == 4) {
                                return 1;
                            }

                            grid[o][i + 1] == 1 ? n++ : (n = 1);
                            break;
                        case 2:
                            if (n == 4) {
                                return 2;
                            }
                            grid[o][i + 1] == 2 ? n++ : (n = 1);
                            break;
                        default:
                            break;
                    }
                }
            }
        };
        const diagonal = (grid) => {
            let n = 1;
            for (const i in grid) {
                switch (grid[i][i]) {
                    case 1:
                        if (n == 4) {
                            return 1;
                        }
                        if (i != grid[i].length - 2)
                            grid[parseInt(i) + 1][parseInt(i) + 1] == 1 ? n++ : (n = 1);
                        break;
                    case 2:
                        if (n == 4) {
                            return 2;
                        }
                        if (i != grid[i].length - 2)
                            grid[parseInt(i) + 1][parseInt(i) + 1] == 2 ? n++ : (n = 1);
                        break;
                    default:
                        break;
                }
            }
        };
        const horizontal = (element) => {
            let n = 1;
            for (let i = 0; i < element.length; i++) {
                switch (element[i]) {
                    case 1:
                        if (n == 4) {
                            return 1;
                        }

                        element[i + 1] == 1 ? n++ : (n = 1);

                        break;
                    case 2:
                        n++;
                        element[i + 1] == 2 ? n++ : (n = 1);
                        if (n == 4) {
                            return 2;
                        }
                        break;
                    default:
                        break;
                }
            }
        };
        for (const element in grid) {
            const n = horizontal(grid[element]);
            if (n == 1 || n == 2) {
                return n;
            }
        }
        const n = diagonal(grid);
        if (n == 1 || n == 2) {
            return n;
        }
        const v = vertical(grid);
        if (n == 1 || n == 2) {
            return n;
        }
    };
}

module.exports = {
    fizzBuzz,
    puissance4,
    spirale,
    anagrammes,
    Stack
}