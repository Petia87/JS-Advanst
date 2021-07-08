function solve(face, suit) {
    let validFace = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'].map(String);
    let suitOptions = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    }

    if (validFace.includes(face) == false) {
        throw new Error('Invalid face');
    } else if (Object.keys(suitOptions).includes(suit) == false) {
        throw new Error('Invalid suit');
    }
    return {
        face,
        suit,
        toString() {
            return `${this.face}${suitOptions[this.suit]}`;
        }
    }
}
