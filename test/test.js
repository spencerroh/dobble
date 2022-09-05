const dobble = require('../samples/dobble');
const should = require('should');

describe('DobbleTest', function () {
    it('createCards should return 57 cards', function () {
        let deck = dobble.createCards(8);
        deck.numberOfSymbols.should.be.exactly(57);
    });

    it('cards should be same as list', function () {
        let expect = [
            '1 - [Anchor, Apple, Bomb, Cactus, Candle, Carrot, Cheese, Chess knight]', 
            '2 - [Anchor, Clock, Clown, Diasy flower, Dinosaur, Dolphin, Dragon, Exclamation mark]', 
            '3 - [Anchor, Eye, Fire, Four leaf clover, Ghost, Green splats, Hammer, Heart]', 
            '4 - [Anchor, Ice cube, Igloo, Key, Ladybird, Light bulb, Lightning bolt, Lock]', 
            '5 - [Anchor, Maple leaf, Milk bottle, Moon, No Entry sign, Orange scarecrow man, Pencil, Purple bird]', 
            '6 - [Anchor, Purple cat, Purple dobble sign, Question Mark, Red lips, Scissors, Skull and crossbones, Snowflake]', 
            '7 - [Anchor, Snowman, Spider, Spider’s web, Sun, Sunglasses, Target, Taxi]', 
            '8 - [Anchor, Tortoise, Treble clef, Tree, Water drop, Dog, Yin and Yang, Zebra]', 
            '9 - [Apple, Clock, Eye, Ice cube, Maple leaf, Purple cat, Snowman, Tortoise]', 
            '10 - [Apple, Clown, Fire, Igloo, Milk bottle, Purple dobble sign, Spider, Treble clef]', 
            '11 - [Apple, Diasy flower, Four leaf clover, Key, Moon, Question Mark, Spider’s web, Tree]', 
            '12 - [Apple, Dinosaur, Ghost, Ladybird, No Entry sign, Red lips, Sun, Water drop]', 
            '13 - [Apple, Dolphin, Green splats, Light bulb, Orange scarecrow man, Scissors, Sunglasses, Dog]', 
            '14 - [Apple, Dragon, Hammer, Lightning bolt, Pencil, Skull and crossbones, Target, Yin and Yang]', 
            '15 - [Apple, Exclamation mark, Heart, Lock, Purple bird, Snowflake, Taxi, Zebra]', 
            '16 - [Bomb, Clock, Fire, Key, No Entry sign, Scissors, Target, Zebra]', 
            '17 - [Bomb, Clown, Four leaf clover, Ladybird, Orange scarecrow man, Skull and crossbones, Taxi, Tortoise]', 
            '18 - [Bomb, Diasy flower, Ghost, Light bulb, Pencil, Snowflake, Snowman, Treble clef]', 
            '19 - [Bomb, Dinosaur, Green splats, Lightning bolt, Purple bird, Purple cat, Spider, Tree]', 
            '20 - [Bomb, Dolphin, Hammer, Lock, Maple leaf, Purple dobble sign, Spider’s web, Water drop]', 
            '21 - [Bomb, Dragon, Heart, Ice cube, Milk bottle, Question Mark, Sun, Dog]', 
            '22 - [Bomb, Exclamation mark, Eye, Igloo, Moon, Red lips, Sunglasses, Yin and Yang]', 
            '23 - [Cactus, Clock, Four leaf clover, Light bulb, Purple bird, Purple dobble sign, Sun, Yin and Yang]', 
            '24 - [Cactus, Clown, Ghost, Lightning bolt, Maple leaf, Question Mark, Sunglasses, Zebra]', 
            '25 - [Cactus, Diasy flower, Green splats, Lock, Milk bottle, Red lips, Target, Tortoise]', 
            '26 - [Cactus, Dinosaur, Hammer, Ice cube, Moon, Scissors, Taxi, Treble clef]', 
            '27 - [Cactus, Dolphin, Heart, Igloo, No Entry sign, Skull and crossbones, Snowman, Tree]', 
            '28 - [Cactus, Dragon, Eye, Key, Orange scarecrow man, Snowflake, Spider, Water drop]', 
            '29 - [Cactus, Exclamation mark, Fire, Ladybird, Pencil, Purple cat, Spider’s web, Dog]', 
            '30 - [Candle, Clock, Ghost, Lock, Moon, Skull and crossbones, Spider, Dog]', 
            '31 - [Candle, Clown, Green splats, Ice cube, No Entry sign, Snowflake, Spider’s web, Yin and Yang]', 
            '32 - [Candle, Diasy flower, Hammer, Igloo, Orange scarecrow man, Purple cat, Sun, Zebra]', 
            '33 - [Candle, Dinosaur, Heart, Key, Pencil, Purple dobble sign, Sunglasses, Tortoise]', 
            '34 - [Candle, Dolphin, Eye, Ladybird, Purple bird, Question Mark, Target, Treble clef]', 
            '35 - [Candle, Dragon, Fire, Light bulb, Maple leaf, Red lips, Taxi, Tree]', 
            '36 - [Candle, Exclamation mark, Four leaf clover, Lightning bolt, Milk bottle, Scissors, Snowman, Water drop]', 
            '37 - [Carrot, Clock, Green splats, Igloo, Pencil, Question Mark, Taxi, Water drop]', 
            '38 - [Carrot, Clown, Hammer, Key, Purple bird, Red lips, Snowman, Dog]', 
            '39 - [Carrot, Diasy flower, Heart, Ladybird, Maple leaf, Scissors, Spider, Yin and Yang]', 
            '40 - [Carrot, Dinosaur, Eye, Light bulb, Milk bottle, Skull and crossbones, Spider’s web, Zebra]', 
            '41 - [Carrot, Dolphin, Fire, Lightning bolt, Moon, Snowflake, Sun, Tortoise]', 
            '42 - [Carrot, Dragon, Four leaf clover, Lock, No Entry sign, Purple cat, Sunglasses, Treble clef]', 
            '43 - [Carrot, Exclamation mark, Ghost, Ice cube, Orange scarecrow man, Purple dobble sign, Target, Tree]', 
            '44 - [Cheese, Clock, Hammer, Ladybird, Milk bottle, Snowflake, Sunglasses, Tree]', 
            '45 - [Cheese, Clown, Heart, Light bulb, Moon, Purple cat, Target, Water drop]', 
            '46 - [Cheese, Diasy flower, Eye, Lightning bolt, No Entry sign, Purple dobble sign, Taxi, Dog]', 
            '47 - [Cheese, Dinosaur, Fire, Lock, Orange scarecrow man, Question Mark, Snowman, Yin and Yang]', 
            '48 - [Cheese, Dolphin, Four leaf clover, Ice cube, Pencil, Red lips, Spider, Zebra]', 
            '49 - [Cheese, Dragon, Ghost, Igloo, Purple bird, Scissors, Spider’s web, Tortoise]', 
            '50 - [Cheese, Exclamation mark, Green splats, Key, Maple leaf, Skull and crossbones, Sun, Treble clef]', 
            '51 - [Chess knight, Clock, Heart, Lightning bolt, Orange scarecrow man, Red lips, Spider’s web, Treble clef]', 
            '52 - [Chess knight, Clown, Eye, Lock, Pencil, Scissors, Sun, Tree]', 
            '53 - [Chess knight, Diasy flower, Fire, Ice cube, Purple bird, Skull and crossbones, Sunglasses, Water drop]', 
            '54 - [Chess knight, Dinosaur, Four leaf clover, Igloo, Maple leaf, Snowflake, Target, Dog]', 
            '55 - [Chess knight, Dolphin, Ghost, Key, Milk bottle, Purple cat, Taxi, Yin and Yang]', 
            '56 - [Chess knight, Dragon, Green splats, Ladybird, Moon, Purple dobble sign, Snowman, Zebra]', 
            '57 - [Chess knight, Exclamation mark, Hammer, Light bulb, No Entry sign, Question Mark, Spider, Tortoise]', 
        ];

        let symbols = [
            "Anchor","Apple","Bomb","Cactus","Candle","Carrot",
            "Cheese","Chess knight","Clock","Clown","Diasy flower","Dinosaur",
            "Dolphin","Dragon","Exclamation mark","Eye","Fire","Four leaf clover",
            "Ghost","Green splats","Hammer","Heart","Ice cube","Igloo","Key",
            "Ladybird","Light bulb","Lightning bolt","Lock","Maple leaf","Milk bottle",
            "Moon","No Entry sign","Orange scarecrow man","Pencil","Purple bird",
            "Purple cat","Purple dobble sign","Question Mark","Red lips","Scissors",
            "Skull and crossbones","Snowflake","Snowman","Spider","Spider’s web",
            "Sun","Sunglasses","Target","Taxi","Tortoise","Treble clef","Tree",
            "Water drop","Dog","Yin and Yang","Zebra"];
        
        let actual = [];
        let deck = dobble.createCards(8);
        let cards = deck.cards;

        for (let i = 0; i < cards.length; i++) {
            let line = (i + 1) + ' - [';
            for (let j = 0; j < cards[i].length; j++) {
                line += symbols[cards[i][j]];
                
                if (j != cards[i].length - 1)
                    line += ', ';
            }
            line += ']';
        
            actual.push(line);
        }

        should(actual).be.eql(expect);
    });
});