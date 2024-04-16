// Обьект для управления всей игрой
const game = {
    // Счетчик карт для определения новых ид
    cardCounter: 0,
    // Список полей
    fieldList: {
        playerField: "playerField",
        warField: "warField",
        enemyField: "enemyField",
    },
    // Список всех карт в текущей игре
    cardList: [],
    // Ячейки игрового поля
    pairList: {
        pair_1: {
            topCell: null,
            botCell: null,
        },
        pair_2: {
            topCell: null,
            botCell: null,
        },
        pair_3: {
            topCell: null,
            botCell: null,
        },
        pair_4: {
            topCell: null,
            botCell: null,
        },
    },
    currentSelectCard: {},
    moveCard: function (cardHand, wherePair) {
    },
};
// Прототип карточек
const card = {
    id: "card_0",
    domElement: null,
    name: "EmptyCard",
    power: 0,
    mana: 0,
    // При создании карты заполняем пустую карту данными
    init: function (fieldId, newCard) {
        //Увеличиваем счетчик карт на 1
        game.cardCounter++;
        // Находим болванку карты и используем
        let emptyCard = document.getElementById("emptyCard");
        // Копирую болванку во внутренние свойства обьекта
        this.domElement = emptyCard.cloneNode(true);
        // Заполняю поле ид
        this.id = "card_" + game.cardCounter;
        //Заполняем данными болванку
        this.domElement.querySelector(".manaPin").innerHTML = newCard.mana;
        this.domElement.querySelector(".powerPin").innerHTML = newCard.power;
        this.domElement.querySelector(".namePin").innerHTML = newCard.name;
        this.domElement.querySelector("img").src = newCard.img;
        this.domElement.id = this.id;
        this.mana = newCard.mana;
        this.power = newCard.power;
        this.name = newCard.name;
        // Присваиваю кликабельность на карту
        this.domElement.addEventListener("click", clickCard);
        // Добавим новую карту на страницу
        document.getElementById(fieldId).append(this.domElement);
    }
}

// Создание карты одной функцией
function newCard(fieldId, newCard) {
    let createdCard = Object.create(card);
    createdCard.init(fieldId, newCard);
    game.cardList.push(createdCard);
}

function clickCard() {
//    game.currentSelectCard
    console.log("123")
}

// Массив с описанием всех карт в игре
let cards = {
    dimon: {
        name: "Димба",
        power: 6,
        mana: 3,
        img: "img/cards/dimon.jpg"
    },
    nekit: {
        name: "Некий_тос",
        power: 1,
        mana: 1,
        img: "img/cards/nekit.jpg"
    },
};


newCard(game.fieldList.playerField, cards.nekit);
newCard(game.fieldList.playerField, cards.dimon);

