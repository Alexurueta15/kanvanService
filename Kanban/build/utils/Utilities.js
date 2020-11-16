"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utilities {
    static getInitials(string) {
        if (string == null || string == undefined || string == "" || string == " ") {
            return "";
        }
        var initials = "";
        const blankSpace = " ";
        const words = string.split(blankSpace);
        if (words.length < 3) {
            if (words.length < 2) {
                initials = words[0].charAt(0) + words[0].charAt(Math.trunc(words[0].length / 2)) + words[0].charAt(words[0].length - 1);
            }
            else {
                initials = words[0].charAt(0) + words[0].charAt(words[0].length - 1) + words[1].charAt(0);
            }
        }
        else {
            initials = words.reduce((acum, word) => acum.concat(word.charAt(0)), "").toString();
        }
        return initials;
    }
}
exports.default = Utilities;
