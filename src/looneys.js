const looneys = [
  {
    name: "Bugs Bunny",
    birthday: "July 27, 1940",
    race: "Rabbit",
    couple: "Lola Bunny",
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/bugs.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/bugs.jpg`,
    description: `Bugs is an anthropomorphic gray and white rabbit or hare who is characterized by his flippant, insouciant personality. He is also characterized by a Brooklyn accent, his portrayal as a trickster, and his catch phrase "Eh... What's up, doc?".`,
    friends: ["Lucas Duck", "Porky"],
    enemies: ["Marvin the Martian"],
  },
  {
    name: "Lucas Duck",
    birthday: "April 17, 1937",
    race: "Duck",
    couple: "Tina Russo",
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/lucas.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/lucas.jpg`,
    description: `Like the other Looney Tunes characters , Daffy is the most openly ambitious and greedy. In his first appearances he was just crazy, funny and with great enthusiasm, over time he became more egotistical, claiming all the attention for himself since his fame was in 2nd place. flat for the popularity of Bugs Bunny . Currently on The Looney Tunes Show he still has an annoying attitude, but he generates some laughs, says nonsense things and can sometimes be nice to others. With his girlfriend From him Tina Russo he is sometimes irritable, but always having some love towards Tina.`,
    friends: [
      "Bugs Bunny",
      "Porky Pig",
      "Gato Silvestre",
      "Gallo Claudio",
      "Lola Bunny",
      "Speedy González",
    ],
    enemies: ["Elmer Fudd", "Sam Bigotes", "Marvin the Martian"],
  },
  {
    name: "Porky Pig",
    birthday: "April 17, 1937",
    race: "Pig",
    couple: "Petunia Pig",
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/porky.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/porky.jpg`,
    description: `Porky is a kind, intelligent, stuttering, individual who cares for his friends but is naive and often gets fooled into the anitcs of his friends, particularly Daffy. Porky is Bugs and Daffy's friend. Porky also has a massive temper and an aggressive side which is rarely shown only shown after Daffy tricks him into giving him all of him all of Porky's money and valuable items and once finding out what really happened he angrily pummels Daffy before being broken up. Porky is also a pushover as Daffy basically took over his house and made him his servant, he is best described as a bummer by Daffy and Bugs as he falls upsells and ridiculous things he does not need, and is also lonely and frequently talks to himself on a mirror (with a wig on).`,
    friends: [
      "Bugs Bunny",
      "Gato Silvestre",
      "Gallo Claudio",
      "Lola Bunny",
      "Speedy González",
    ],
    enemies: ["Elmer Fudd", "Sam Bigotes", "Marvin the Martian"],
  },
  {
    name: "Lola Bunny",
    birthday: "December 25, 1996",
    race: "Rabbit",
    couple: "Bugs Bunny",
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/lola.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/lola.jpg`,
    description: `Lola is an incredibly perky and talkative young woman, who always speaks exactly what's on her mind even if she can't seem to concentrate on any one thing for too long. Described by Bugs in their first Merrie Melodie as a "very pretty lady, but crazy, crazy, crazy", Lola is considered attractive but unbalanced. She quickly becomes infatuated with and idealizes any man who she interprets as showing interest in her, even if she barely knows him. When the feelings aren't reciprocated, she engages in extreme obsessive behavior, to the point that she stalks potential lovers, taps their phone lines, breaks into their homes, and requires them to cut off friends and family members who don't approve of their relationship.`,
    friends: ["Bugs Bunny", "Gato Silvestre", "Tina Russo", "Speedy González"],
    enemies: ["Sam Bigotes"],
  },
  {
    name: "Elmer Fudd",
    birthday: "1940",
    race: "Human",
    couple: "",
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/elmer.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/elmer.jpg`,
    description: `He's a bit insecure about his intelligence, and probably has a ton of questions about his world that he's never really asked anyone else. His P is the perfect match for his E. The P is the part of him that loves order, structure, and consistency. It makes him feel safe and secure.
      His F is the more rational, logical part of him. The “big brain” part that can help solve any problem, is always there to save the day.
      His J is the creative force of nature. He can just start making stuff up and people will happen to believe him. (When you meet him, he might tell you that he's a “master of disguise”). His S is the part of him that sees the big picture and rules out possibilities with ease.
      His E matches his N like peas in a pod. The N is the part of him that loves to feel needed, needed, needed.`,
    friends: [
      "Sam Bigotes",
      "El gato Silvestre",
      "Taz",
      "Perro George",
      "Wile E. Coyote",
    ],
    enemies: ["Bugs Bunny", "Pato Lucas"],
  },
  {
    name: "Marvin the Martian",
    birthday: "July 24, 1948",
    race: "Martian",
    couple: "", // You can leave this empty since Marvin is not known to have a couple in the Looney Tunes universe.
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/marvin.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/marvin.jpg`,
    description: `Marvin the Martian is an extraterrestrial character who first appeared in Looney Tunes cartoons. He is often depicted as a cunning and determined alien with a helmet and a green Roman soldier's uniform. Marvin's primary goal is to destroy Earth with his "Illudium Q-36 Explosive Space Modulator" to make way for his "Martian Magenta" space highway. He is known for his soft-spoken demeanor and iconic line, "Where's the kaboom? There was supposed to be an Earth-shattering kaboom!"`,
    friends: ["K-9"], // Marvin is often accompanied by his loyal dog-like companion, K-9.
    enemies: ["Bugs Bunny", "Daffy Duck"], // Marvin's primary adversaries in the cartoons.
  },
  {
    name: "Tweety Bird",
    birthday: "November 21, 1942",
    race: "Canary",
    couple: "", // You can leave this empty since Tweety is not known to have a specific couple in the Looney Tunes universe.
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/piolin.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/piolin.jpg`,
    description: `Tweety Bird, known as Piolin in Spanish-speaking countries, is a sweet and small yellow canary. Despite its innocent appearance, Tweety is quite feisty and clever when dealing with its arch-nemesis, Sylvester the Cat. Tweety is often seen outsmarting Sylvester, who is constantly trying to catch and eat the little bird. Tweety's famous catchphrase is "I tawt I taw a puddy tat!"`,
    friends: ["Granny"], // Tweety is usually seen with Granny, who takes care of the little bird.
    enemies: ["Sylvester the Cat"], // Sylvester the Cat is Tweety's primary adversary.
  },
  {
    name: "Foghorn Leghorn",
    birthday: "August 31, 1946",
    race: "Rooster",
    couple: "", // You can leave this empty since Foghorn Leghorn is not typically associated with a specific couple in the Looney Tunes universe.
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/claudio.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/claudio.jpg`,
    description: `Foghorn Leghorn, known as Gallo Claudio in some Spanish-speaking countries, is a large, talkative, and somewhat bumbling rooster. He has a distinctive Southern accent and is known for his catchphrase "That's a joke, I say, that's a joke, son." He often tries to mentor and teach younger characters but his advice doesn't always go as planned. Foghorn Leghorn frequently finds himself in comedic situations with other Looney Tunes characters.`,
    friends: ["Barnyard Dawg"], // Foghorn Leghorn is often seen interacting with Barnyard Dawg.
    enemies: ["Gossamer", "Bugs Bunny"], // Gossamer and Bugs Bunny are among his adversaries in some cartoons.
  },
  {
    name: "Sylvester the Cat",
    birthday: "August 25, 1945",
    race: "Cat",
    couple: "", // You can leave this empty since Sylvester is not known to have a specific couple in the Looney Tunes universe.
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/silvestre.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/silvestre.jpg`,
    description: `Sylvester the Cat, known as Silvestre el gato in some Spanish-speaking countries, is a lisping, Tuxedo cat who is always trying to catch and eat Tweety Bird. Despite his constant failures, Sylvester is persistent and never gives up. He has a rivalry with many other characters, including Speedy Gonzales and Hippety Hopper. Sylvester is known for his catchphrase "Sufferin' succotash!"`,
    friends: ["Hector the Bulldog"], // Sylvester is sometimes seen with Hector the Bulldog in certain cartoons.
    enemies: ["Tweety Bird", "Speedy Gonzales"], // Sylvester's primary enemies are Tweety Bird and Speedy Gonzales.
  },
  {
    name: "Tasmanian Devil",
    birthday: "May 3, 1954",
    race: "Tasmanian Devil",
    couple: "", // You can leave this empty since the Tasmanian Devil is not typically associated with a specific couple in the Looney Tunes universe.
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/taz.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/taz.jpg`,
    description: `The Tasmanian Devil, known as El Demonio de Tasmania in some Spanish-speaking countries, is a voracious and wild marsupial. He is known for his insatiable appetite and the ability to spin like a tornado when excited. Taz is often portrayed as a whirlwind of destruction, gobbling up everything in his path. Despite his wild nature, he is not malicious and is sometimes shown as a friendly character in certain situations.`,
    friends: ["Bugs Bunny", "Daffy Duck"], // Taz is occasionally seen interacting with other Looney Tunes characters, including Bugs Bunny and Daffy Duck.
    enemies: ["Tweety Bird"], // Taz has been shown chasing Tweety Bird in some cartoons.
  },
  {
    name: "Pepe Le Pew",
    birthday: "January 6, 1945",
    race: "Skunk",
    couple: "Penelope Pussycat", // Pepe is famously known for pursuing Penelope Pussycat.
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/pepelepew.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/pepelepew.jpeg`,
    description: `Pepe Le Pew is a French-accented skunk who is always in pursuit of love. However, due to his strong odor, he constantly drives away potential partners. Despite his lack of success, Pepe remains optimistic and romantic, often delivering poetic monologues. He is easily recognizable by his black fur with a white stripe and his charming personality. Pepe's famous catchphrase is "Ah, ma cherie," which he says to express his affection.`,
    friends: ["Bugs Bunny", "Daffy Duck"], // Pepe is occasionally seen interacting with other Looney Tunes characters, including Bugs Bunny and Daffy Duck.
    enemies: ["None"], // Pepe doesn't have any specific enemies in the traditional sense.
  },
  {
    name: "Speedy Gonzales",
    birthday: "September 17, 1953",
    race: "Mouse",
    couple: "", // You can leave this empty since Speedy Gonzales is not known to have a specific couple in the Looney Tunes universe.
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/speedy.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/speedy.jpg`,
    description: `Speedy Gonzales is a fast and clever Mexican mouse known for his incredible speed. He is the fastest mouse in all of Mexico and is always ready to help his friends or stand up against his adversaries. Despite being portrayed with a Mexican accent, he is a beloved character for his charm, wit, and resourcefulness. Speedy's famous catchphrase is "¡Ándale! ¡Ándale! ¡Arriba! ¡Arriba!"`,
    friends: ["Pablo", "Manuel", "Sylvester the Cat"], // Speedy is often seen with his fellow mice friends and occasionally with Sylvester the Cat in certain cartoons.
    enemies: ["Daffy Duck"], // Speedy has been shown having conflicts with Daffy Duck in some cartoons.
  },
  {
    name: "Granny",
    birthday: "April 17, 1937",
    race: "Human",
    couple: "", // You can leave this empty since Granny is not associated with a specific couple in the Looney Tunes universe.
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/abuela.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/abuela.jpg`,
    description: `Granny, also known as Granny Goose, is an elderly woman known for her kindness and caring nature. She is the owner of Tweety Bird and often acts as a protector and caretaker for the little canary. Granny is resourceful and is not afraid to stand up to adversaries who threaten Tweety or her other friends. Despite her age, she is agile and capable of handling herself in various situations.`,
    friends: ["Tweety Bird", "Sylvester the Cat"], // Granny is frequently seen with Tweety Bird and sometimes interacts with Sylvester the Cat.
    enemies: ["Sylvester the Cat (occasionally)"], // Although Granny cares for Tweety, she often scolds Sylvester the Cat for trying to catch the canary.
  },
  {
    name: "Witch Hazel",
    birthday: "Unknown",
    race: "Witch",
    couple: "", // You can leave this empty since Witch Hazel is not known to have a specific couple in the Looney Tunes universe.
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/bruja.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/bruja.jpg`,
    description: `Witch Hazel is a comical witch with green skin and a pointy hat. She often appears in Looney Tunes cartoons, especially as an adversary of Bugs Bunny. Witch Hazel is known for her humorous and quirky behavior, casting spells with comical results. Despite her witchy nature, she is generally more of a comedic character than a genuinely sinister one. She is easily recognizable by her distinctive voice and laugh.`,
    friends: ["Gossamer"], // Witch Hazel is sometimes shown interacting with Gossamer, a large, hairy monster who is her occasional assistant.
    enemies: ["Bugs Bunny"], // Witch Hazel often finds herself in conflicts with Bugs Bunny in the cartoons.
  },
  {
    name: "Road Runner",
    birthday: "September 17, 1949",
    race: "Bird (Greater Roadrunner)",
    couple: "", // You can leave this empty since Road Runner is not known to have a specific couple in the Looney Tunes universe.
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/pipip.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/pipip.jpg`,
    description: `Road Runner is a fast and agile bird known for its incredible speed. He is the primary character in the Wile E. Coyote and Road Runner cartoons. Road Runner constantly outsmarts and outpaces Wile E. Coyote, who relentlessly tries to catch him using various elaborate schemes and contraptions. Road Runner's signature sound is a distinctive "Beep, Beep!" sound.`,
    friends: ["None (often seen alone)"], // Road Runner is usually shown as a solitary character, often running solo in the desert.
    enemies: ["Wile E. Coyote"], // Road Runner's main adversary is Wile E. Coyote, who is always after him in the cartoons.
  },
  {
    name: "Wile E. Coyote",
    birthday: "September 17, 1949",
    race: "Coyote",
    couple: "", // You can leave this empty since Wile E. Coyote is not known to have a specific couple in the Looney Tunes universe.
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/coyote.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/coyote.jpg`,
    description: `Wile E. Coyote is a clever and persistent coyote who is constantly trying to catch and eat Road Runner. He often devises elaborate and often comically absurd schemes to capture Road Runner, utilizing Acme Corporation products. However, his plans always end in failure, leading to humorous and over-the-top mishaps. Despite his misfortunes, Wile E. Coyote never gives up and is always determined to get his prey.`,
    friends: ["None (often seen alone)"], // Wile E. Coyote is typically portrayed as a solitary character, solely focused on capturing Road Runner.
    enemies: ["Road Runner"], // Wile E. Coyote's main adversary is Road Runner, whom he pursues relentlessly in the cartoons.
  },
  {
    name: "Gossamer",
    birthday: "Unknown",
    race: "Monster",
    couple: "", // You can leave this empty since Gossamer is not known to have a specific couple in the Looney Tunes universe.
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/gross.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/gross.jpg`,
    description: `Gossamer is a gentle and friendly monster known for his orange hair and large size. Despite his imposing appearance, Gossamer is quite timid and often misunderstood. He is often seen wearing a pair of red sneakers. Gossamer is known for his high-pitched voice and his interactions with other Looney Tunes characters, especially Bugs Bunny.`,
    friends: ["Bugs Bunny", "Witch Hazel"], // Gossamer is sometimes shown interacting with Bugs Bunny and Witch Hazel in certain cartoons.
    enemies: ["None"], // Gossamer is generally not depicted as having any specific enemies.
  },
  {
    name: "Michael Jordan",
    birthday: "March 17, 1963",
    race: "Basketball Legend",
    couple: "", // You can leave this empty as he is a fictional character in the Looney Tunes universe.
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/jordan.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/jordan.jpg`,
    description:
      "Michael Jordan is a legendary basketball player who has joined the Looney Tunes team to take on the Monstars in a high-stakes basketball game. With his incredible skills and competitive spirit, Michael Jordan is the key player in helping the Looney Tunes characters win the game and save their freedom.",
    friends: ["Bugs Bunny", "Daffy Duck", "Lola Bunny"], // Michael Jordan is friends with the Looney Tunes characters in the movie "Space Jam."
    enemies: ["Monstars"], // The Monstars are the antagonists in the movie "Space Jam" who challenge the Looney Tunes characters to a basketball game.
  },
  {
    name: "LeBron James",
    birthday: "December 30, 1984",
    race: "Basketball Legend",
    couple: "", // You can leave this empty as he is a fictional character in the Looney Tunes universe.
    photo: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/photos/james.png`,
    portrait: `https://jyzkhvemqcckdalikurj.supabase.co/storage/v1/object/public/portrait/james.jpg`,
    description:
      "LeBron James is a legendary basketball player who has teamed up with the Looney Tunes to face new challenges. With his incredible basketball skills and leadership, LeBron is a key member of the Looney Tunes squad, taking on villains and saving the day with his unique talents.",
    friends: ["Bugs Bunny", "Daffy Duck", "Lola Bunny", "Michael Jordan"], // LeBron James is friends with the Looney Tunes characters, including Michael Jordan, in this fictional setting.
    enemies: ["Alien Invaders"], // The Alien Invaders are the antagonists in this Looney Tunes adventure, and LeBron James and the gang must defeat them to protect their world.
  },
];

module.exports = looneys;
