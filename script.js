const emojiName = document.querySelector('.emoji-name');
const btonElem = document.getElementById('btn');
const EmojiKey = [];

async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=38e268865e3125de8300229689c0c9dbc279e8bc");
    let data = await response.json();
    // console.log(data);
    

    for (let index = 0; index < 1500; index++) {
        EmojiKey.push({
            emojiChar: data[index].character,
            emojiCode: data[index].unicodeName,
        });
    }
}

getEmoji();

btonElem.addEventListener('click', () => {
    if (EmojiKey.length === 0) {
        emojiName.innerText = "Loading emojis, please wait...";
        return;
    }
    const randomNumber = Math.floor(Math.random() * EmojiKey.length);
    btonElem.innerText = EmojiKey[randomNumber].emojiChar;
    emojiName.innerText = EmojiKey[randomNumber].emojiCode;
});





