const quoteText = document.querySelector("#Quotes");
const authorName = document.querySelector(".author");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

async function getQuotes() { 
    const url = "https://type.fit//api/quotes";
    try {
        const result = await fetch(url);
        const res = await result.json();
       
        for (const ele of apiQ) {
            document.querySelector("#Quotes").innerHTML = `"${ele.text}"`;
            document.querySelector(".author-name").innerHTML = `- ${ele.author}`;
        }
    }
    catch (error) { 
        console.log(error);
        console.log("There is some error in this program");
    }
}
 getQuotes();


async function Random_Quote() {
     
    const address = "https://type.fit//api/quotes";
    const res =  await fetch(address);
    const noOfQuotes = await res.json();
    const Q = noOfQuotes[Math.floor(Math.random()*noOfQuotes.length)];
    document.querySelector("#Quotes").innerHTML = `"${Q.text}"`;
    document.querySelector(".author").innerHTML = `- ${Q.author}`;

    if(Q.author === null){
        document.querySelector(".author").innerHTML = `- ${Stranger}`;
    }
    document.querySelector(".author").style.margin = "auto";
    
    let img = ['url("./img/bg1.jpg")','url("./img/bg2.jpg")','url("./img/bg3.jpg")' ,'url("./img/bg4.jpg")', 'url("./img/bg5.jpg")', 'url("./img/bg6.jpg")', 'url("./img/bg7.jpg")', 'url("./img/bg8.jpg")', 'url("./img/bg9.jpg")', 'url("./img/bg10.jpg")', 'url("./img/bg11.jpg")'];
    let randomI =  img[Math.floor(Math.random()*img.length)];
    console.log(randomI);

    // /<-Dynamic html->// 
    document.body.style.backgroundImage = randomI;
    document.body.style.backgroundRepeat =" no-repeat";
    document.body.style.backgroundSize =  "cover";
}




copyBtn.addEventListener("click", () => {
    const text = quoteText.textContent;
    const aut = authorName.textContent;
    const fullText = `${text}${aut}`
    navigator.clipboard.writeText(fullText).then(function () {
    })
    });

twitterBtn.addEventListener("click", () => {
    const newText = quoteText.textContent;
    const auth = authorName.textContent;
        const total = `${newText}${auth}`
    let twitterUrl =`https://twitter.com/intent/tweet?url=${total}`
    window.open(twitterUrl, "_blank");
})