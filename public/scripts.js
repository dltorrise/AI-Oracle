//so basically it will generate a random tarot card
//then ChatGPT will interpret that tarot card

const apiKey = 'YOUR-API-KEY'

const url = 'https://api.openai.com/v1/chat/completions'

const sendBtn = document.getElementById('send-btn')
const output = document.getElementById('output-text')
const text = document.getElementById('setup-textarea')

sendBtn.addEventListener("click", () => {
    output.innerHTML = "Shuffling 🃏"
    pickedArray = []
    tarotCards()
    fetchBotReply()

})

function fetchBotReply() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            'model': 'gpt-3.5-turbo',
            'messages': [
                {
                    'role': 'system',
                    'content': 'You are a Tarot Reader. You have a small, obscure shop on a popular street.'

                },
                {
                    'role': 'user',
                    'content': `You are asked the following question by a passerby who stumbles into your shop: ${text.value}. These are the cards you pick: ${pickedArray[0]}${reversed}, ${pickedArray[1]}${reversed}, and ${pickedArray[2]}${reversed}. Answer the question by interpreting the cards that you picked. Your response must end in 200 tokens are less.`
                }
            ],
            'max_tokens': 200,
            'temperature': 1,

        })
    }).then(response => response.json()).then(data => {
        console.log(data.choices[0].message.content)
        output.innerHTML = `${data.choices[0].message.content}`
        // console.log(data.choices[0].text)}
    })

}


//tarot card generator
//how data appears
// {"index":0,"message":{"role":"assistant","content":"Ah, it seems that the cards have brought forward some interesting energies for you today. Let's see what insights they may hold.\n\nThe Six of Cups reversed typically symbolizes nostalgia, memories, and looking back at the past. In this reversed position, it may suggest that you are feeling stuck in the past or holding onto memories that are hindering your growth in the present. The card could be urging you to let go of old patterns or beliefs that no longer serve you.\n\nNext, we have the Four of Wands, a card that often represents celebration, stability, and harmony. When upright, this card can signify a time of joy and contentment, possibly related to a happy event or achievement. However, since you received the card in its reversed position, it may indicate delays in reaching a state of stability or experiencing disruptions in your current sense of peace.\n\nIt's interesting that the third card turned out to be undefined, as it could signify uncertainty or unpredictability in your current situation. This"},"logprobs":null,"finish_reason":"length"}

// const numberArray = []
let pickedArray = []
const tarotArray = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Hierophant', 'The Lovers', 'The Chariot', 'The Hermit', 'The Wheel of Fortune', 'Justice', 'Death', 'Temperance', 'The Devil', 'The Devil', 'The Moon', 'The Sun', 'The World', 'Ace of Wands', 'Two of Wands', 'Three of Wands', 'Four of Wands', 'Five of Wands', 'Six of Wands', 'Seven of Wands', 'Eight of Wands', 'Nine of Wands', 'Ten of Wands', 'Page of Wands', 'Knight of Wands', 'Queen of Wands', 'King of Wands', 'Ace of Cups', 'Two of Cups', 'Three of Cups', 'Four of Cups', 'Five of Cups', 'Six of Cups', 'Seven of Cups', 'Eight of Cups', 'Nine of Cups', 'Ten of Cups', 'Page of Cups', 'Knight of Cups', 'Queen of Cups', 'King of Cups', 'Ace of Pentacles', 'Two of Pentacles', 'Three of Pentacles', 'Four of Pentacles', 'Five of Pentacles', 'Six of Pentacles', 'Seven of Pentacles', 'Eight of Pentacles', 'Nine of Pentacles', 'Ten of Pentacles', 'Page of Pentacles', 'Knight of Pentacles', 'Queen of Pentacles', 'King of Pentacles', 'Ace of Swords', 'Two of Swords', 'Three of Swords', 'Four of Swords', 'Five of Swords', 'Six of Swords', 'Seven of Swords', 'Eight of Swords', 'Nine of Swords', 'Ten of Swords', 'Page of Swords', 'Knight of Swords', 'Queen of Swords', 'King of Swords']

function tarotCards() {
    while (pickedArray.length < 3) {
        const randomNumber = Math.floor(Math.random() * 78)
        const card = tarotArray[randomNumber]
        if (pickedArray.includes(card)) {
            return
        } else {
            pickedArray.push(card)
        }

        // numberArray.push(randomNumber)

        // console.log(i)
        // console.log(randomNumber)
        // console.log(card)
    }
}

function reversed() {
    const reversedOrNot = Math.floor(Math.random())
    //    console.log(reversedOrNot)
    if (reversedOrNot = 0) {
        return " Reversed"
    } else {
        return
    }

}

// console.log(numberArray)
// console.log(pickedArray)

// tarotCards()