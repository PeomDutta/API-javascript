const shop = {
    name: "Peom Dutta",
    address: "Chittagong",
    profit: 15000,
    owner: {
        names: "HBD",
        profession: "banker",
        id: 10
    },
    isExpensive: true,
};

console.log(shop);

const shopStringified = JSON.stringify(shop);
console.log(shopStringified);

const shopParsed = JSON.parse(shopStringified);
console.log(shopParsed);

