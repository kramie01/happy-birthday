import memory01 from "@/assets/memory-01.jpg";
import memory02 from "@/assets/memory-02.jpg";
import memory03 from "@/assets/memory-03.jpg";
import memory04 from "@/assets/memory-04.jpg";
import memory05 from "@/assets/memory-05.jpg";
import memory06 from "@/assets/memory-06.jpg";
import memory07 from "@/assets/memory-07.jpg";
import memory08 from "@/assets/memory-08.jpg";
import memory09 from "@/assets/memory-09.jpg";
import memory10 from "@/assets/memory-10.jpg";
import memory11 from "@/assets/memory-11.jpg";
import memory12 from "@/assets/memory-12.jpg";
import memory13 from "@/assets/memory-13.jpg";
import memory14 from "@/assets/memory-14.jpg";
import memory15 from "@/assets/memory-15.jpg";
import memory16 from "@/assets/memory-16.jpg";
import memory17 from "@/assets/memory-17.jpg";
import memory18 from "@/assets/memory-18.jpg";
import memory19 from "@/assets/memory-19.jpg";
import memory20 from "@/assets/memory-20.jpg";
import memory21 from "@/assets/memory-21.jpg";
import memory22 from "@/assets/memory-22.jpg";
import memory23 from "@/assets/memory-23.jpg";
import memory24 from "@/assets/memory-24.jpg";
import memory25 from "@/assets/memory-25.jpg";
import memory26 from "@/assets/memory-26.jpg";
import memory27 from "@/assets/memory-27.jpg";
import memory28 from "@/assets/memory-28.jpg";
import memory29 from "@/assets/memory-29.jpg";
import memory30 from "@/assets/memory-30.jpg";
import memory31 from "@/assets/memory-31.jpg";
import memory32 from "@/assets/memory-32.jpg";
import memory33 from "@/assets/memory-33.jpg";


export interface Memory {
  id: string;
  title: string;
  imageUrl: string;
  date: string;
  caption: string;
  message: string;
  genres: string[];
}

export const formatGenres = (genres: string[]) => genres.join(" · ");

export const genres = ["All", "Babi", "Family", "Davao", "Parish", "Friends"];

export const birthdayName = "Gwenivere";
export const birthdayDate = "August 17, 2004";

export const featuredMessage = `I hope na magustuhan mo itong surprise na ito with the help of your friends and syempre your family. We all love you and we want to make sure that you feel loved and appreciated on your special day. 

Isang taon na naman ang nadagdag sa existence mo rito sa mundo, and we are all grateful for the joy and happiness that you bring to our lives. I know na hindi lang ako yung napapasaya mo, but also the people around you. Itong mga taong nag effort din for this surprise shows how much you mean to us. 

Hindi man kompleto rito lahat ng mga taong naging malapit sayo, but I want you to know na you are loved and cherished by many. 

Thank you for existing and being a part of our lives. We look forward to celebrating many more birthdays with you.

Happy Birthday, Gwen! 🎂✨`;

export const memories: Memory[] = [
  {
    id: "01",
    title: "HAPPY BIRTHDAY, BABI!",
    imageUrl: memory01,
    date: "August 2023",
    caption: "Babi",
    message:
      `happy birthday, babi! itong picture natin is exactly 3 years ago na since the first time na icelebrate natin yung birthday mo together at buti naiuwi pa kita kay tita nang buong-buo kahit madaling araw na HAHAHAH.

      3 years na rin tayo together and wala akong pinagsisihan in pursuing this relationship, pursuing you and being with you. all i know nung una kitang makita sa molave habang nagpapractice kayo ng contemporary dance (di pa ko kasali HAHAHA) is that i am sure na you are the one i want to spend my whole life with.

      sa 3 years na yun, thank you for making me feel what I wanted to feel. thank you sa efforts and sacrifices na ginawa mo sa relationship natin. you make me the happiest version of myself, thank you for everything, babi ko!

      all throughout those 3 years i’ve seen how you grow, a lot. i’ve seen your lowest point in life moments and even yung mga small wins mo. witness ako sa lahat ng nangyayari sa buhay mo and that is why sobrang bilib ako sayo. for the past 3 years, babi, sobrang proud ako sayo. sa lahat ng na aachieve mo, sa lahat ng sinurvive mong araw at sa lahat ng sacrifices mo. i know hindi naging madali for you pero i never doubted you ever since na hindi mo kaya, kasi alam kong kayang kaya mo. look how far youve come, halos leader at president ka na sa lahat organizations mo. bachelor of science in organization ka e no, kahit sa simbahan HAHAHA eme.

      basically, i just wanted to say na ang galing-galing mo babi at nakakatuwa lang din na nag ggrow ka, habang kasama mo ako.

      i wish you all the best babi, natupad na yung isa kasi nandito na ko e😎. continue to grow babi, im just always right here for you para suportahan ka maging through ups and downs, left and right ng buhay mo. 

      happy birthday ulit, my lovelovey baby gwennyyy. thank you ulit, babi, sa 3 years and counting. same time and date next year? 

      I LOVE YOU, BABI, BIG TIME`,
    genres: ["Babi"],
  },
  {
    id: "02",
    title: "HAPPY BIRTHDAY 🎂🎈",
    imageUrl: memory02,
    date: "June 2026",
    caption: "Mama",
    message: `To my dearest daughter Gwen, Happy birthday. May your journey ahead be filled with love, success, and fulfillment. 
      
      Mama is always proud to you and love you. God bless you always.`,
    genres: ["Family"],
  },
  {
    id: "03",
    title: "HAPPY BIRTHDAY GWEN'ED",
    imageUrl: memory03,
    date: "June 2020",
    caption: "Hansen",
    message: `More birthdays to come and do what makes you happy!`,
    genres: ["Family", "Davao"],
  },
  {
    id: "04",
    title: "HAPPY BIRTHDAY, TE, 22 KANAA (TANDA MO NA)",
    imageUrl: memory04,
    date: "September 2025",
    caption: "Mayang",
    message: `Happy birthday, teh! Ang tanda mo naaa. Officially "ate" na ng buong org HAHAHAHA. Enjoy your day bago sumakit likod mo mamaya.`,
    genres: ["Family"],
  },
  {
    id: "05",
    title: "HAPPY BIRTHDAY GWENCHANA, OUR ENGINEER!! 🤍",
    imageUrl: memory06,
    date: "July 2025",
    caption: "Roxi",
    message: `hapi birthday kakaivave, first of all— i miss u sooo much like tangina (lah) ik we have different lives now, different responsibilities, esp different paths to prioritize. But pls know that whatever distance may be doing to us, u will always be one of the day onez, kasama sa pag lipad sa snow (over nmn sa dramarama) 
      
    i hope na you're doing great right now lalo na with all the heavy loads you have on your plate, i wish that u will stay as pretty, funny and healthy as ever, kahit puro ka kape xd 😎 
      
    i love u te sana magkapera na tayong apat para matuloy na pag book natin ng airbnb and inuman na 😛😛😛😛 feel free to modify this message.... (ahyyy AI) 🫰🏻🫰🏻`,
    genres: ["Friends"],
  },
  {
    id: "06",
    title: "HAPPPIIEESTT BIRTHDAYYY GWENNNNN!!",
    imageUrl: memory07,
    date: "April 2025",
    caption: "Gem",
    message: `Hi, Gwen! Wish ko na makamit mo lahat ng mga dreams mo sa buhay, nandito lang kami nila Roxanne at Aj para suportahan ka. 
      
      Stay healthy, ingat ka palagi, at wag sana umikli pasensya mo sa lagi nating nauudlot na gala HAHAHAHAHAHAH Thankk yyouuu!! I love youu!!`,
    genres: ["Friends"],
  },
  {
    id: "07",
    title: "HAPPY HAPPY BIRTHDAY GWENYY!!",
    imageUrl: memory27,
    date: "December 2025 - Christmas Eve",
    caption: "Mayang",
    message: `Happy Birthday Gweny! i wish u all the best, happiness and love that u deserve. 4ever thankful for your existence coz u make your world much better place.

      no matter how long we are separated since we’re taking different paths, we both know that our bond is unbreakable & we will always come back to each other.

      Yk that i'll always be here for you & whatever happens, you'll always have me. i hope we both win in life and everything that we wish for will soon come true. iloveyousomuch!`,
    genres: ["Friends"],
  },
  {
    id: "08",
    title: "happy birthday, gwen!",
    imageUrl: memory30,
    date: "July 2025",
    caption: "AJ",
    message: `Hi Gwen! Happy birthday! Wishing you all the best in life, and I hope na sana lahat ng dreams and goals mo matupad. I’m really grateful na naging friends tayo, and I hope na tumagal pa nang tumagal yung friendship natin. More chika, bonding, gala, food trips, and unforgettable memories together soon!

    On your special day, I’ll also pray that God continues to guide you in every decision you make, bless you with good health, peace, genuine happiness, and the strength to face every challenge that comes your way. May He lead you closer to the dreams you’re praying for and surround you with people who truly love and appreciate you.

    I hope you always trust in God’s timing, even when things don’t go according to plan. Remember that He has a purpose for everything, and He will always be there to guide you through every season of your life.

    Enjoy your day, Gwen! You deserve all the happiness and blessings coming your way. Here’s to more birthdays, more adventures, more prayers answered, and more memories together! Happy birthday ulit! `,
    genres: ["Friends"],
  },
  {
    id: "09",
    title: "HAPPY BIRTHDAY, BILAAAAT!!",
    imageUrl: memory31,
    date: "Pandemic (and dugyot) days sya",
    caption: "SHAYGANDA",
    message: `Hi, Gwennyyy! Happy happy birthday, beh!

    Thank you sa pakikinig sa lahat ng kaharutan ko kahit hanggang pakikinig lang talaga at hindi naman jinojowa HAHAHAHAHA. Pero kidding aside, sobrang thankful ako na nakilala kita. Ang gaan mong kausap, ang sarap mong biruin, at higit sa lahat, ang sarap mong maging kaibigan.

    Sobrang napa-proud ako sayo, beh. Seeing how far you’ve come and how good you are in your field makes me genuinely happy for you. Sobrang galing mo, and I hope you know how admirable you are, not just because of what you’ve achieved, but also because of how mature, and wise you are. At your age ngayon (kahit noon pa HAHAHA), ang mature mo na mag-isip, and I really admire that about you.

    And another thing… napakaswerte mo talaga sa boyfriend mo, beh kinginaka talaga, pinagpala ka! Pero syempre, swerte rin siya sayo. I hope you both continue to grow together. Kaya naman, gawin nyo na akong ninaaaaang!! EME HAHAHAHAHAHA. 

    Enjoy your day, birthday girl! You deserve all the love and happiness today and always. Happy birthday ulit, sissyyy! Love youuu! 🥹💗`,
    genres: ["Friends"],
  },
  {
    id: "10",
    title: "Pibertdeeeey, gwenniiii!!",
    imageUrl: memory14,
    date: "December 2019",
    caption: "Anel",
    message: `Happy b-day, Gwen! Goodluckkk sa lifee, I hope you're happy! kita-kita ulit kapag umayon na ang oras sa atin😆 
      
      Proud of u, gweni! Enjooy your daaay!`,
    genres: ["Friends"],
  },
  {
    id: "27",
    title: "Happiest Birthday Ate Gweeen 🤍🎂💐",
    imageUrl: memory10,
    date: "November 2024",
    caption: "Tita Clogene",
    message: `To Our Dearest Ate Gwen,

      I wish you success, love and happiness in life. May god's grace surround you today and always, guiding your steps with love and light. Stay sweet and beautiful as you are.

      Love Tita Clogene 🤍🤍🤍`,
    genres: ["Family"],
  },
  {
    id: "11",
    title: "HAPPY BIRTHDAY ATE GWEN!!! YAYAYAYAYAYAY!!",
    imageUrl: memory11,
    date: "June 2024",
    caption: "Chimken wingz🪽🪽 (Clowee)",
    message: `Hi ate Gwen! I wish you all the best and may your day filled with lots of joy that you bring to my Brutha (Kuya) haluhhh nahihiya akuh😔🙏 wingz out🪽🪽🪽`,
    genres: ["Family"],
  },
  {
    id: "12",
    title: "Happy birthday, munting bata!!!",
    imageUrl: memory12,
    date: "February 2020",
    caption: "Pareng bry",
    message: `Hi gwen, nangyan nickname pala natin sa messenger "phar" and "siopao" parang tanga lang HAHAHAHAAHA, pero ayun HAPPY HAPPY BIRTHDAY, GIRL!! maging masaya ka today, in-love na in-love ka pa naman, sweet ng bf mo may paganto pa samin, magaya nga HAHAAHAH. 
      
      kiddin aside, wishing you nothing but the best, gwenchana. stay in-love, takits soon, miss you!!`,
    genres: ["Friends"],
  },
  {
    id: "13",
    title: "Habadu, Gwen Stacy",
    imageUrl: memory13,
    date: "February 2020",
    caption: "Spider-Man",
    message: `Hi, my name is Peter Parker, and you don't remember me, but I have something to tell you that's going to sound crazy. But it's the truth, and I know you're going to believe me, because you're very good at telling when I'm lying.

      We used to know each other. We were together.

      But something bad was going to happen to the world. And the only way to stop it was to make everyone forget me, including you.

      Because I'm not just Peter Parker. I'm Spider-Man.

      And sometimes, Spider-Man has to do the hard thing. Even if it breaks Peter Parker's heart.

      Maybe I'll never read this to you. Maybe I'm just writing this for me. Maybe that's my responsibility, to live alone with the truth.

      But the truth is I love you. And I hope that deep down, something inside you remembers you love me too.`,
    genres: ["Friends"],
  },
  {
    id: "14",
    title: "Happy birthday so much Gween!!!",
    imageUrl: memory09,
    date: "December 2026 - Mater Boni Christmas Party ❤️",
    caption: "Ate Jimai",
    message: `Hi gween, happy birthdaaay!! hehe i would like to take this opportunity lang to thank you sa lahat ng sacrifice mo esp for legion and sa lahat ng organizations mo sa parish🥹 i know hindi tayo masyado nag uusap ng deep deep hahahaha pero i just want you to know na grabe I’m one of the many people na amazed and admiring you sa dedication mo sa pag-seserve and napakabuti mong tao! ❤️ 
      
      I’m grateful na isa ako sa naka witness and nakasama ka sa service, kasi sobrang nakakainspire ka! im super super proud of u teh!! and thank you so much gween kasi hindi mo pa din iniwan yung legion kahit alam kong wala kang choice HAHAHAHAHAA pero srsly thank youu so much gween and i never doubted you kasi alam ko kung gaano ka committed despite of the challenges na dumarating sayo 🥹❤️ 
      
      i wish you all the best gween and alam ko maabot mo yung mga dreams mo kasi super deserve mo and alam na yan ni Lord!! ❤️ Happiest birthdaay ulit!! luv u! 🥳❤️`,
    genres: ["Friends", "Parish"],
  },
  {
    id: "15",
    title: "happy birthday gwennn!",
    imageUrl: memory15,
    date: "August 2026",
    caption: "Kyle",
    message: `Salamat sa mga pinagsamahan natin, I will treasure it forever kahit na anong mangyari. Looking forward din ako sa mga dreams mo alam kong makakaraos ka din, malapit na. 
      
      Wish you all the best! Good health, long life and genuine happiness. God bless you and your family! 
      
      I love you, again happy happy birthday enjoyyy! 🎂🎉`,
    genres: ["Friends"],
  },
  {
    id: "16",
    title: "Happyyy Birthdayy to our 50% spanish latte queenn!!",
    imageUrl: memory16,
    date: "Way Back 2024",
    caption: "alexx",
    message: `happyy birthdayy, gwenny!! thank you for ur existence, thank you for being a blessing to those people around u, u're a super big big big blessing sa EE and especially sa circle natin, thank you sa pagiging hands-on when it comes to announcing and reminding us ng mga bagay-bagay! 
      
      from 1st year to 3rd year hindi ka nakakalimot na mag remind sa amin ng mga need ipasa, oras ng pasok, and mga special announcements. though pagod ka, kulang sa tulog, ramdam pa rin namin 'yung presensiya mo. bigay mo na kay kwin 'tong 4th year HAHAHAHAHHAHAHA. 
      
      i wish you more more blessings and birthdays to come as grow physically, memtally, spiritually, and siyempre sa inyo ni kram WHAHAHAHA stay strong sa inyo, noy! gala na tayo ulit!!! 
      
      again, happy happy happy birthdayy, gwennchana!!`,
    genres: ["Friends"],
  },
  {
    id: "17",
    title: "Happiest Birthday, Gwenny!!",
    imageUrl: memory17,
    date: "2018 & March 2019",
    caption: "Cha",
    message: `Happy Birthday, Gwenny! I love u and I'm always rooting for u!!🥳💗💗!`,
    genres: ["Friends"],
  },
  {
    id: "18",
    title:
      "Happy Birthday to our prettier and hardworking president ate gwennyy!!",
    imageUrl: memory18,
    date: "January 2026",
    caption: "Jelayy",
    message: `Happy birthday ate gwen hope you enjoy your day!! Thank you for being a good and understandable presidium president!!💕💕 i hope maging successful kapo in life and ma-achives mo yung mga dreams mo in life.

      I'm always praying for your health and success in life po, Hap is py is birth is day ate gwen!!🫀`,
    genres: ["Parish"],
  },
  {
    id: "19",
    title: "Happy birthday, Ate Gwen!",
    imageUrl: memory19,
    date: "April 2026",
    caption: "Rhea",
    message: `May God continue to bless and guide you. Thank you for always guiding us. Enjoy your day! Lovelots! 🫶🏻💜`,
    genres: ["Parish"],
  },
  {
    id: "20",
    title: "habaduuuuuuu atee gwennyyyyyy !!",
    imageUrl: memory20,
    date: "January 2026",
    caption: "kitchie",
    message: `happy birthday poo ate gwen ! my wishes for you is good health, success in life and hope you to keep worshiping to god. you have been a good leader, member, friend, ate to us. specially to our presedium. even tho you have a lot of things to do, or things in mind that keeps bothering you, yet you stayed and continue to serve. 
      
      so thank you ate gwen, for the guidance and love. i hope you'll enjoy your day today surrounded by the people you love and loves you. stay strong alsooo sa inyo ni kuya kram hehe ^^
      
      again, happiesttt birthday ate gwennn, we loaf u !! ><`,
    genres: ["Parish"],
  },
  {
    id: "21",
    title: "HAPPIEST BIRTHDAY GWEN!",
    imageUrl: memory21,
    date: "February 2020",
    caption: "JEPP",
    message: `happy birthday!! i hope maging masaya ka ngayong birthday mo. onting onti nalang gagraduate kana! alam ko sa talino mong yan imposibleng wala kang latin honor hahaha. 
      
      proud na proud aq sayo kahit ano man mangyari! i wish u all the best in life!`,
    genres: ["Friends"],
  },
  {
    id: "22",
    title: "Happy birthday pooo, ateeee gwennn!",
    imageUrl: memory22,
    date: "March 2025",
    caption: "Geo",
    message: `Happy birthday pooo, enjoy your dayy poo and goodluck poo sa journey na tinatahak mo poo. And always be happy poo, no matter what happens poo hihi, lagi lang mag pray kapag may problema. Andyan lang si Lord sa tabi natin, hindi tayo pababayaan. 
      
      Yun lang poo, happy birthday poo`,
    genres: ["Parish"],
  },
  {
    id: "23",
    title: "Happy birthday ate gwen ko!!!",
    imageUrl: memory23,
    date: "July 2026",
    caption: "hazelll marie",
    message: `hellooo to my ate (not in blood but ur still my ate). I want you to know that I'm super duper grateful because pinapafeel mo na may ate ako pag mag kasama tayo. Tapos hindi ka pa napapagod sa mga kung anek anek kue sa life... 
      
      Thankyou so much ate gwenie!!, love na love na love kita mwa mwa`,
    genres: ["Friends"],
  },
  {
    id: "24",
    title: "Happy Birthday, Ate Gwen! 💕✨",
    imageUrl: memory24,
    date: "17 April 2025: 19:47 pm 🤪✨",
    caption: "Lanie",
    message: `Happy Bornday, sa aming triplets! Enjoy your day and thank you for being open to meeee, at nawa'y maging ganap ka ng enhinyero! 
      
      May God bless you always, and remember 'pag natupad mo na mga pangarap mo, wag mo kalilimutan ang Diyos at ang Simbahan. 😽💕`,
    genres: ["Friends", "Parish"],
  },
  {
    id: "25",
    title: "ha is ppy birth is day sa pinaka magan is dang vavae!",
    imageUrl: memory25,
    date: "April 2025",
    caption: "fatimaiaiaia",
    message: `happy birthday ate gween—sa aming main dancer and choreographer, we would like you to know na we appreciate everything that you do and youu deserve all the better and great things that God has given and will give to you. I'm super duper grateful na you're one of my ate's that I look up sa church, thx soo much for being such a great leader, thankyou sa pag guide sa aming lahaat. 
      
      May you always find a reason to stay and to continue serving God, and continue wearing that beautiful smile of yours >< wee love youu ate gwen, so much > 3`,
    genres: ["Parish"],
  },
  {
    id: "26",
    title: "Happy baduuuudayyyy ate gwennn",
    imageUrl: memory26,
    date: "Easter Egg Hunt 2026",
    caption: "Florence ganda",
    message: `GretengGz!!..para sa tumayong ate ko sa simbahan. thank you so much for taking care of us, kilala mo na po ate kung sino-sino kameng mga inaalagaan mong youth. ate gwen, the world deserves you and the whole world loves you, syempre included ang ating panginoon. i always include you and the other in my prayers always. di ako nagkulang ng panalangin sa Panginoon na maalagaan, gabayan, at sana biyayaan kayo/tayo sa ating buhay. malapit kana grumaduate, and proud na proud ako always. never kong makakalimutan ang kabaitan mo atee like leget talaga waes!! i think this message is not enough para sa mga nagawa mo sa RAY at Praesidiums. thank u din sa every year effort na turuan kameng sumayaw at ganun rin advance thank you so matchi kung papalarin kang maging bagong lider ng org naten!! 
      
      ATE GWEN MAHAL NA MAHAL KITA/NAMIN!! and we might not communicate all the time at minsan lang magkita. may malaking lugar ka sa puso ko lagi't lagi. palaging mag-iingat at wag kalimutang manalangin. 
      
      we're here for you always and we loveeeeeeeeeeeee uuu so matshii ateee!! GOD BLESS ✧･ﾟ:*(͡ꈍ͜ʖ̫͡ꈍ)*:･ﾟ✧`,
    genres: ["Parish"],
  },
  {
    id: "28",
    title: "Happy birthday ate gwen!",
    imageUrl: memory25,
    date: "April 2025",
    caption: "Alyza",
    message: `Happy birthday, Ate Gwen! 🥳💗 We only met last year, but I’m really glad that I got to know you. You’re such a kind and beautiful person, and I’m really thankful that I met you. I hope you have a wonderful birthday and that all your wishes come true. 
      
      Enjoy your day, Ate Gwen! Happy birthday again! 🥰🎂`,
    genres: ["Parish"],
  },
  {
    id: "29",
    title: "happy borndey, Gwennie!",
    imageUrl: memory28,
    date: "June 2025",
    caption: "R2R",
    message: `nawa'y tumangkad ka pa at mas maging masamang tao! enjoy your day going bulilit!!`,
    genres: ["Friends"],
  },
  {
    id: "30",
    title: "happy birthdayy, Gwen!",
    imageUrl: memory29,
    date: "June 2025",
    caption: "tine",
    message: `wishing you a day filled with love, laughter, and countless beautiful moments! 🎉💝`,
    genres: ["Friends"],
  },
  {
    id: "31",
    title: "Happy birthday gwen",
    imageUrl: memory05,
    date: "",
    caption: "che2x",
    message: `Happy Birthday, dear niece! 🎂🎉💖 Wishing you a wonderful birthday filled with happiness, love, and beautiful memories. Always remember that you are loved and cherished by our family. May you continue to grow into a kind, strong, and wonderful young lady. 🌸

    May God bless you with good health, wisdom, and success in everything you do. Keep smiling, keep dreaming, and always believe in yourself. Enjoy your special day! 🥳🎂🎁

    Happy Birthday, my beautiful pamangkin! We love you! 💕`,
    genres: ["Family", "Davao"],
  },
  {
    id: "32",
    title: "Happy birthday gwen!! 🎂🥰🫶🏼",
    imageUrl: memory08,
    date: "Dec 2025 - RAY Christmas Party",
    caption: "Ate Makat",
    message: `Hello gwen!! Happy happy birthday to you! I am very proud to see your growth in the ministry–both sa PYM at RAY. Nakita ko buong journey mo simula umpisa maliban lang siguro sa legion haha! Napaka sipag mo super, you inspire me whenever i feel demotivated in serving. 
      
    You were the one who pushes me to be my best when i was a coor, kase i feel na may mga tao o kabataan pa rin na napapalapit ko sa panginoon at sana isa ka don hehe. Mula sa mahiyain na gwen until ngayon na isa ng leader, nakakakilig hahahaha Congrats!! 
      
    I hope you found your strength to keep going too. Keep serving lang okii. I will pray for you always. More inuman to come 🥂`,
    genres: ["Friends", "Parish"],
  },
  {
    id: "33",
    title: "Happy na Birthday pa, Ms. President!",
    imageUrl: memory32,
    date: "May 2026",
    caption: "Fray Nestor",
    message: `Happy2 birthday Ms. Gwen, our president and animator of the mater boni consili Praesidium of legion of Mary,  May God in His immense Goodness and Love shower you with His Blessings and may God grant all your prayers and petitions. 
    
    Continue to serve our Mother Church and pagbutihin ang pag- aaral at maging masunuring anak sa mga magulang at maging mabait at mapagkalinga sa iyung mga Kapatid. (Edewow) Hahahahaha , Godbless you in all your endeavors in life and Happy birthday once again.`,
    genres: ["Parish"],
  },
  {
    id: "34",
    title: "Feliz cumpleaños! Katood Gwen!",
    imageUrl: memory33,
    date: "June 2025 - NYD Caceres 2025",
    caption: "Katood Kuya Blue",
    message: `Happy Birthday Gwen!! Thank you for being you! 😁 Hindi man naging madali sayo ang buhay, still your choosing to wake up for your dreams and aspirations. 
    
    Hindi madaling makahanap ng isang genuine soul katulad mo kaya ipagpatuloy mo yung kabutihan na ginagawa mo para sayo, sa pamilya mo, sa buhay pag-ibig yieee haha, sa simbahan, sa RAY, and lastly kay Lord. Wishing you all the best in the world! Take care and God bless! 🤍`,
    genres: ["Parish"],
  }
];
