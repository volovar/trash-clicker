import { ItemTypes } from "enums";

export const itemData = [
    {
        cost: 40,
        name: "Raccoon",
        clickValue: 2,
        description: "A feisty little creature that will get in your trash",
        type: ItemTypes.RACCOON
    },
    {
        cost: 120,
        name: "Garbage Person",
        clickValue: 50,
        description: "This person comes to take your trash away",
        type: ItemTypes.GARBAGE_PERSON
    },
    {
        cost: 1000,
        name: "A Grouch",
        clickValue: 200,
        description: "A very unpleasant monster who wants to live in the trash",
        type: ItemTypes.GROUCH
    }
];
