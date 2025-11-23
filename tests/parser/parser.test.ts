
import {splitIntoLexemes, setPriorityForOperations} from "@/modules/parser";

describe("Формула разбивается на лексемы корректно", ()=>{
    it("(1) + {1}", ()=>{
        const result = splitIntoLexemes("(1) + {1}");

        expect(result).toEqual(["(", "1", ")", "+", "{", "1", "}"]);
    });
});

describe("Приоритеты расставляются корректно", ()=>{
    it("1^(1+1)", ()=>{
        const parsedData = [
            "1", "^", "(", "1", "+", "1", ")"
        ];

        const result = setPriorityForOperations(parsedData);

        expect(result).toEqual([
            {
                "operator": "1",
                "point": 10,
            },
            {
                "operator": "^",
                "point": 3,
            },
            {
                "operator": "(",
                "point": 4,
            },
            {
              "operator": "1",
              "point": 110,
            },
            {
              "operator": "+",
              "point": 101,
            },
            {
              "operator": "1",
              "point": 110,
            },
        ]);
    });
});
