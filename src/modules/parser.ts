function splitIntoLexemes(source: string): string[] {
    let parsed = [source];

    const lexemes = [
        "+",
        "-",
        "*",
        "/",
        "^",
        "(",
        ")",
    ];

    for (const lexeme of lexemes) {
        const oldSource = parsed;
        parsed = [];
        for (const subSource of oldSource) {
            for (const element of subSource.split(lexeme)) {
                parsed.push(element.trim());
                parsed.push(lexeme);
            }
            parsed.pop();
        }
    }

    return parsed;
}

function removeEmptyStrings(arr: string[]): string[] {
    return arr.filter(item => item !== "" && item !== " ");
}

function setPriorityForOperations(arr: string[]): { operator: string; point: number }[] {
    const points: { [key: string]: number } = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2,
        "^": 3,
    };

    const out = [];

    let counter = 0;
    for (const element of arr) {
        switch (element) {
            case "(":
                counter++;
                break;
            case ")":
                counter--;
                break;
            default:
                out.push({
                    operator: element,
                    point: (points[element] || 10) + counter * 100,
                });
        }

    }
    return out;
}

export interface TreeNode {
    operator: string;
    left?: TreeNode;
    right?: TreeNode;
}

function buildTree(arr: { operator: string; point: number }[]): TreeNode {
    if (arr.length === 0) {
        return arr[0];
    }

    let indexOfLastOperation = 0;
    let minPoint = 10000000;

    for (let i = 1; i < arr.length; i++) {
        if (minPoint >= arr[i].point) {
            indexOfLastOperation = i;
            minPoint = arr[i].point;
        }
    }

    return {
        operator: arr[indexOfLastOperation].operator,
        left: buildTree(arr.slice(0, indexOfLastOperation)),
        right: buildTree(arr.slice(indexOfLastOperation + 1)),
    }
}

export function parseExpression(source: string) {
    return buildTree(
        setPriorityForOperations(
            removeEmptyStrings(
                splitIntoLexemes(source)
            )
        )
    );
}
