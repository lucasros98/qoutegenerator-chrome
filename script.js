//Send message to background
const qoutes = [
    { qoute: 'Syftet med våra liv är att vara lycklig.', author: 'Dalai Lama' },
    {
        qoute: 'Livet är vad som händer när du är upptagen med att göra andra planer.',
        author: 'John Lennon',
    },
    {
        qoute: 'Bli upptagen med att leva eller bli upptagen med att dö.',
        author: 'Stephen King',
    },
    {
        qoute: 'Du lever bara en gång men om du gör det rätt är en gång tillräckligt.',
        author: 'Mae West',
    },
    {
        qoute: 'Om du vill leva ett lyckligt liv, knyt det till ett mål, inte till människor eller saker.',
        author: 'Albert Einstein',
    },
    {
        qoute: 'Din tid är begränsad, så slösa inte på att leva någon annans liv.',
        author: 'Steve Jobs',
    },
    {
        qoute: 'Den stora lektionen i livet, är aldrig att vara rädd för någon eller något.',
        author: ' Frank Sinatra',
    },
    {
        qoute: 'Nyfikenhet på livet i alla dess aspekter, tror jag, är fortfarande hemligheten för stora kreativa människor.',
        author: 'Leo Burnett',
    },
    {
        qoute: 'Livet är inte ett problem som ska lösas, utan en verklighet som ska upplevas',
        author: 'Soren Kierkegaard',
    },
    {
        qoute: 'Nöj dig inte med vad livet ger dig; göra livet bättre och bygg något',
        author: 'Ashton Kutcher',
    },
    {
        qoute: 'Man lär sig aldrig mycket av att höra sig själv tala.',
        author: 'George Clooney',
    },
    {
        qoute: 'Livet är som att cykla. För att hålla balansen måste du fortsätta framåt.',
        author: 'Albert Einstein',
    },
    {
        qoute: 'Livet är som ett mynt. Du kan spendera det hur du vill, men du spenderar det bara en gång.',
        author: 'Lillian Dickson',
    },
    {
        qoute: 'Livet är tio procent vad som händer med dig och nittio procent hur du reagerar på det.',
        author: 'Charles Swindoll',
    },
    {
        qoute: 'Goda vänner, bra böcker och sömnigt samvete: det här är det idealiska livet.',
        author: 'Mark Twain',
    },
    { qoute: 'Det största nöjet med livet är kärlek.', author: 'Euripides' },
    {
        qoute: 'Livet handlar om att påverka, inte att tjäna pengar.',
        author: 'Kevin Kruse',
    },
    {
        qoute: 'För många av oss lever inte våra drömmar eftersom vi lever våra rädslor.',
        author: 'Les Brown',
    },
    {
        qoute: 'Lev som om du skulle dö imorgon. Lär dig som om du skulle leva för alltid.',
        author: 'Mahatma Gandhi',
    },
    {
        qoute: 'Du måste förvänta dig stora saker av dig själv innan du kan göra dem.',
        author: 'Michael Jordan',
    },
    {
        qoute: 'Var glad för detta ögonblicket. För det här ögonblicket är ditt liv.',
        author: 'Omar Khayyam',
    },
    {
        qoute: 'Ta aldrig livet på allvar. Ingen kommer ut levande ändå.',
        author: 'Okänd',
    },
    {
        qoute: 'Hemligheten med lycka, finns inte i att söka mer, utan i att utveckla förmågan att njuta av mindre.',
        author: 'Socrates',
    },
    {
        qoute: 'Livet är mycket intressant ... i slutändan blir några av dina största smärtor dina största styrkor.',
        author: 'Drew Barrymore',
    },
    {
        qoute: 'Det är aldrig för sent - aldrig för sent att börja om, aldrig för sent att vara lycklig.',
        author: 'Jane Fonda',
    },
    {
        qoute: 'Ju mer du berömmer och firar ditt liv, desto mer finns det i livet att fira.',
        author: 'Oprah Winfrey',
    },
    {
        qoute: 'Möjligheter händer inte. Du skapar dem.',
        author: 'Chris Grosser',
    },
    {
        qoute: 'Var inte rädd för att ge upp det goda för det stora.',
        author: 'John D. Rockefeller',
    },
    {
        qoute: 'Framgångsrika människor gör det som misslyckade människor inte är villiga att göra. Önskar inte att det var lättare; önskar att du var bättre.',
        author: 'Jim Rohn',
    },
    {
        qoute: 'Sluta jaga pengarna och börja jaga passionen.',
        author: 'Tony  Hsieh',
    },
    {
        qoute: 'Om du inte är villig att riskera det vanliga måste du nöja dig med det vanliga.',
        author: 'Jim Rohn',
    },
    { qoute: 'Gör en sak varje dag som skrämmer dig.', author: 'Okänd' },
    {
        qoute: 'Alla framsteg sker utanför komfortzonen.',
        author: 'Michael John Bobak',
    },
    {
        qoute: 'Låt inte rädslan för att förlora vara större än spänningen i att vinna.',
        author: 'Robert Kiyosaki',
    },
    {
        qoute: 'Om du verkligen tittar noga tog de flesta över natten framgångar lång tid.',
        author: 'Steve Jobs',
    },
    {
        qoute: 'Det bästa sättet att komma igång är att sluta prata och börja göra.',
        author: 'Walt Disney',
    },
    {
        qoute: 'Den framgångsrika krigare är den genomsnittliga mannen, med laserliknande fokus.',
        author: 'Bruce Lee',
    },
    {
        qoute: 'Om du verkligen vill göra något hittar du ett sätt. Om du inte gör det hittar du en ursäkt.',
        author: 'Jim Rohn',
    },
    {
        qoute: 'Vissa människor drömmer om framgång medan andra vaknar och jobbar för det.',
        author: 'Okänd',
    },
    {
        qoute: 'Om du kan drömma om det, kan du göra det.',
        author: 'Walt Disney',
    },
    {
        qoute: 'Skillnaden mellan vem du är och vem du vill vara är vad du gör.',
        author: 'Okänd',
    },
    {
        qoute: 'För att lyckas behöver din önskan om framgång vara större än din rädsla för att misslyckas.',
        author: 'Bill Cosby',
    },
    {
        qoute: 'För att lyckas måste vi först tro att vi kan.',
        author: 'Nikos Kazantzakis',
    },
    {
        qoute: 'Människor som är galna nog att tro att de kan förändra världen, är de som gör det.',
        author: 'Okänd',
    },
    {
        qoute: 'Optimism är den egenskap som är mer förknippad med framgång och lycka än någon annan.',
        author: 'Brian Tracy',
    },
    {
        qoute: 'Tro att du kan och du är redan halvvägs.',
        author: 'Theodore Roosevelt',
    },
    {
        qoute: 'Du är aldrig för gammal för att sätta ett annat mål eller att drömma en ny dröm.',
        author: 'C.S. Lewis',
    },
    {
        qoute: 'Allt du någonsin har velat ha är på andra sidan av rädsla.',
        author: 'George Addair',
    },
    {
        qoute: 'Ditt liv blir bara bättre när du blir bättre.',
        author: 'Brian Tracy',
    },
    { qoute: 'Lycka är inte av en slump, utan ett val.', author: 'Jim Rohn' },
    {
        qoute: 'Var den förändring du vill se i världen.',
        author: 'Mahatma Ghandi',
    },
    {
        qoute: 'Det finns inga gränser för vad du kan åstadkomma, förutom de gränser du sätter på ditt eget tänkande.',
        author: 'Brian Tracy',
    },
    {
        qoute: 'Du lär dig mer av misslyckande än av framgång. Låt det inte stoppa dig. Misslyckande bygger karaktär.',
        author: 'Okänd',
    },
    {
        qoute: 'Jag tror att mål aldrig ska vara enkla, de ska tvinga dig att arbeta, även om de är obekväma just då.',
        author: 'Michael Phelps',
    },
    {
        qoute: 'Alla våra drömmar kan gå i uppfyllelse om vi vågar jobba för dem.',
        author: 'Walt Disney',
    },
    {
        qoute: 'Den bästa tiden att plantera ett träd var för 20 år sedan. Den näst bästa tiden är idag.',
        author: 'Okänd',
    },
    { qoute: 'Allt du kan tänka dig är verkligt.', author: 'Pablo Picasso' },
    {
        qoute: 'Gör en sak varje dag som skrämmer dig.',
        author: 'Eleanor Roosevelt',
    },
    {
        qoute: 'Smarta människor lär sig av allt och alla, genomsnittliga människor av sina erfarenheter, dumma människor har redan alla svar.',
        author: 'Socrates',
    },
    {
        qoute: 'Lycka är inte något färdigt. Det kommer från dina egna handlingar.',
        author: 'Dalai Lama',
    },
    {
        qoute: 'Om något är tillräckligt viktigt, även om oddsen är staplade mot dig, bör du fortfarande göra det.',
        author: 'Elon Musk',
    },
    {
        qoute: 'Var inte rädd för att ge upp det goda för att gå på det stora.',
        author: 'John D. Rockefeller',
    },
    {
        qoute: 'Hur underbart det är att ingen behöver vänta ett ögonblick innan man börjar förbättra världen.',
        author: 'Anne Frank',
    },
    {
        qoute: 'Vissa människor vill att det ska hända, vissa önskar att det skulle hända, andra får det att hända.',
        author: 'Michael Jordan',
    },
    {
        qoute: 'De hårda dagarna är det som gör dig starkare.',
        author: 'Aly Raisman',
    },
    {
        qoute: 'Om du tror att det kommer att fungera ser du möjligheter. Om du inte tror att det löser sig kommer du att se hinder.',
        author: 'Wayne Dyer',
    },
    {
        qoute: 'Håll ögonen på stjärnorna och fötterna på marken.',
        author: 'Theodore Roosevelt',
    },
    {
        qoute: 'Om möjligheten inte knackar, bygg en dörr.',
        author: 'Kurt Cobain',
    },
    {
        qoute: 'Driv dig inte runt av rädslorna i ditt sinne. Leds av drömmarna i ditt hjärta.',
        author: 'Roy T. Bennett',
    },
    {
        qoute: 'Arbeta hårt i tystnad, låt din framgång vara oljudet.',
        author: 'Frank Ocean',
    },
    {
        qoute: 'Säg inte att du inte har tillräckligt med tid. Du har exakt samma antal timmar per dag som gavs till alla andra.',
        author: 'Okänd',
    },
    {
        qoute: 'Om allt verkar vara under kontroll går du inte tillräckligt snabbt.',
        author: 'Mario Andretti',
    },
    {
        qoute: 'Den enda skillnaden mellan vanligt och extraordinärt är det lilla extra.',
        author: 'Jimmy Johnson',
    },
    {
        qoute: 'Mislyckade människor fattar sina beslut utifrån deras nuvarande situation. Framgångsrika människor fattar sina beslut utifrån var de vill vara.',
        author: 'Benjamin Hardy',
    },
    {
        qoute: 'Begränsa inte dina utmaningar. Utmana dina gränser.',
        author: 'Okänd',
    },
    {
        qoute: 'Börja där du är. Använd det du har. Gör vad du kan.',
        author: 'Arthur Ashe',
    },
    {
        qoute: 'Dröm inte om framgång. Gå ut och arbeta för det.',
        author: 'Okänd',
    },
    {
        qoute: 'Möjligheter händer inte. Du skapar dem.',
        author: 'Chris Grosser',
    },
    {
        qoute: 'Framgång är att tycka om dig själv, tycka om vad du gör och tycka om hur du gör det.',
        author: 'Maya Angelou',
    },
    {
        qoute: 'Tvivel dödar fler drömmar än misslyckande någonsin kommer göra.',
        author: 'Suzy Kassem',
    },
    {
        qoute: 'Idag är din möjlighet att bygga den morgondag du drömmer om.',
        author: 'Ken Poirot',
    },
    {
        qoute: 'Det är aldrig för sent att bli vad du kunde ha varit.',
        author: 'George Eliot',
    },
    {
        qoute: 'Slösa inte mer tid på att argumentera vad en bra människa ska vara. Var en.',
        author: 'Marcus Aurelius',
    },
    {
        qoute: 'Den som fruktar döden kommer aldrig att göra något värt för en som lever.',
        author: 'Seneca',
    },
    {
        qoute: 'Du kan lämna livet just nu. Låt det avgöra vad du gör och säger och tycker.',
        author: 'Marcus Aurelius',
    },
    {
        qoute: 'Livet är mycket kort och oroligt för dem som glömmer det förflutna, försummar nuet och fruktar framtiden.',
        author: 'Seneca',
    },
    {
        qoute: 'Hur länge kommer du att vänta innan du kräver det bästa för dig själv?',
        author: 'Epictetus',
    },
    {
        qoute: 'Du har makt över ditt sinne - inte externa händelser. Inse detta, och du kommer att hitta styrka.',
        author: 'Marcus Aurelius',
    },
    {
        qoute: 'Bibehåll dina ungdomliga entusiasmer - du kommer att kunna använda dem bättre när du är äldre.',
        author: 'Seneca',
    },
    {
        qoute: 'Rikedom består inte i att ha många ägodelar, utan i att ha få önskemål.',
        author: 'Epictetus',
    },
    {
        qoute: 'Om det inte är rätt, gör det inte; om det inte är sant, säg det inte.',
        author: 'Marcus Aurelius',
    },
    {
        qoute: 'Lyckan i ditt liv beror på kvaliteten på dina tankar.',
        author: 'Marcus Aurelius',
    },
    {
        qoute: 'Tur är vad som händer när förberedelser möter möjligheter.',
        author: 'Seneca',
    },
    {
        qoute: 'Säg först till dig själv vad du skulle vara; och gör sedan det du måste göra.',
        author: 'Epictetus',
    },
    {
        qoute: 'När vi inte längre kan förändra en situation utmanas vi att förändra oss själva.',
        author: 'Viktor Frankl',
    },
    {
        qoute: 'Det slutar aldrig att förvåna mig: vi alla älskar oss själva mer än andra människor, men bryr oss mer om deras åsikt än vår egen.',
        author: 'Marcus Aurelius',
    },
    {
        qoute: 'Var tolerant mot andra och strikt mot dig själv.',
        author: 'Marcus Aurelius',
    },
];

const length = qoutes.length;
const rand = Math.floor(Math.random() * length);

const el = qoutes[rand]
qoute.innerText = el.qoute;
person.innerText = el.author;


/*
chrome.runtime.sendMessage({name:"qoute"},(response)=> {
    alert(response.text)
    qoute.innerText = response.text
})
*/
//qoute.innerText = json.qoutes[0].qoute;

