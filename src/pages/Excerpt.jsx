import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const excerptData = {
  "sweetmeat-street": {
    title: "The Saga of Sweetmeat Street",
    genre: "Literary Fiction",
    description:
      "They were once human beings of flesh and blood. These people, every one of them, having played their role on the stage of life withdrew behind the eternal curtains. Into coffins, graves, pyres or just soil, these people vanished. Their names, not even the name of one of them, can be seen in the annals of history. But the street which was once awash with the voices and scents of these people still lives on, grinning mirthlessly. Fresh costumes appear and new roles are being played here now. New footprints expunge the old. This story, thus, is played out perennially through centuries.",
    sections: [
      {
        heading: "Excerpts",
        paragraphs: [
          "Once on the day after the man had left, Ayesha was seated on the patio plucking lice off her head, her hair spread out, lost in thought. Then Perikalan Andru stealthily went and sat in another corner of that patio and casting his eyes into the street thought up a ditty and began to sing:",
          "'Aaayissa beebiyekkangaan",
          "Aasha moothu—mandiyethum",
          "Payasa kothiyanoru",
          "Pandikaadan Kakka!",
          "Pathu kadam bayi nadannu",
          "Kalu random suttedutha pathiriyayee—mooppororu",
          "Pothumbandikkaran...'",
          "'All for a glimpse of Ayesha Beebi",
          "With desire raging—comes running",
          "A payasam greedy outlander Muslim!",
          "Walking ten score miles",
          "Both his feet roasted like pancakes—he...",
          "Is but a buffalo-cart driver!'",
          "When Ayesha realised Andru was singing verses about her lover, she smiled and shifted turning her back to him. But she did not relish Andru calling him a buffalo-cart driver. She said in mild retort:",
          "'Nyammante puyyapla pothumbadikkaranonnunvalla, Andru...'",
          "[My new bridegroom is no buffalo-cart driver, Andru...'].",
          "'Pinnyaaraa muthae, para!' Andru asked.",
          "[Then what else is he, darling, pray tell!]",
          "'Moopparu kaekkulla oru mothalaliyaa...'",
          "[He is a richman from the East...']",
          "''Ngaa...Angane para! Moopare kandittu immini kaayum puthanum 'lla koottathilanennu nyammakkum thonneekanu, tto—enda Ayessathatha, puyyaplente paeru?'",
          "['Ha...Say that! Seeing him I too felt that he belongs to the kind that has money and riches—Aysha thatha, what is your puyyapla's name?']",
          "Ayesha demurred at first about uttering her puyyapla's name—she felt...shy! She was chewing betel. Dipping her lime covered forefinger into the concoction in her mouth adding more lime to it, winking, she told him: 'Pokkarukka'.",
          "No sooner he heard it, Andru the instant poet in a 'here you are' manner, conjured another ditty and submitted it to Ayesha:",
          "\"Kekku, kekkoru kaattumukkilu—chukkonukkum mothalali Pokkarukka, pandayaaloru pothumbandikkaran...\"",
          "[Hear, hear! The richman who harvests ginger in the corner of a jungle, was once a buffalocart driver...\"]",
          "'Maendatto, Andru.' Ayesha said feigning irritation, 'Pothumbandikkaran nente baappa aanu'.",
          "[Don't you dare, Andru! Your pop is the buffalo-cart driver!]",
          "Ayesha stopped the thattam that was sliding off her head, folded it and put it back on and then, pressing down on it firmly with her hand, spat squirting red spittle in a stream, on to the street.",
          "Andru, pretending he had not heard what was said about his father, squatted there his arms entwined over his knees staring into the street.",
          "He said mentally to himself:",
          "'Pahechi betladakya thinnu thuppiyathu aatinchora pole kedakanu.'",
          "['What that female spat out looks like the blood of a goat.']",
          "Amina was going by on the street with her pandarakettu tucked under her arm. Amina cast a sly glance at Ayesha and Andru seated on the patio. Then as if she had not seen them, walked on south.",
          "'Do you want to know what is inside Amina thatha's pandarakettu?' Andru asked Ayesha, scratching his swollen leg.",
        ],
      },
      {
        heading: "Soldier Kuttappan",
        paragraphs: [
          "'Edee nandiketta koothachiee...,'",
          "['You whore of a bloody ingrate...!']",
          "You decking up like Urvashi, the epitome of celestial beauty and going to the movies with that tail-licker of yours—God showed it all to me, didn't he, you creep! You harlot! Draped in that red saree that I bought you... a green silk blouse and holding a silk umbrella... you with that hamukku, the blighter, Balan...'",
          "Kuttappan paused the letter there and bared his teeth in a grin. He thought for a while. He felt that the word 'Hamukku' did not carry sufficient punch. What about, \"suvar ka bacha\"? But will the woman understand that Hindusthani expression? Will that other son of a bitch understand if I used suvar ka bacha? (That he will read this letter is a given).",
          "Kuttappan lit a second 'Charminar' cigarette and took a puff and let out smoke; he thought deeply. Ha! That is better: \"Kiladi chekkan Balande koode\" [\"With that philanderer Balan\"]—Hamukku Balan was felled and Khiladi Balan was kindled. He let out some smoke too. He paused again. A doubt arose within him. What would be better—Kiladichekkan Balan or Balan kiladichekkan? He puffed again twice. He finalised Kiladichekkan Balan. He read through the letter as much as it had progressed, once more.",
          "With the very hand that wrote numerous times addressing her 'Priyadame,' 'Praneshwari,' [Darling, the light of my soul] 'My dearest Kalyani' and in many more similar ways, when he firmly wrote, 'Edee nandiketta koothachie...,' Asari Kuttappan felt no tremor in his hand or any remorse in his heart. That is how much Kuttappan was riled—he was hopping mad.",
          "Asari Kuttappan who had joined Military service and was working in the Dehu Road workshop had an inspiration one day—that he must go and see his heart-throb Kalyani and get married to her....",
          "[the story continues]",
        ],
      },
    ],
  },

  "city-of-london": {
    title: "The City of London",
    genre: "Travel Writing",
    description:
      "The city of London—the fulcrum of the British Empire, of international commerce and ocean trade—sprawls over an area of 650 square acres. London did not appear as magnificent as I had imagined it. Right in the centre of the city stand the monstrous remnants of bombed buildings surrounded by squalor, ditches and darkened walls.",
    sections: [
      {
        heading: "Excerpts",
        paragraphs: [
          "The city of London—the fulcrum of the British Empire, of international commerce and ocean trade—sprawls over an area of 650 square acres. The highest ranking official of the city is the Mayor. A new Mayor is elected every year. The Mayor and 26 others designated 'Aldermen' and 206 ordinary Councilors administer the city which has a police force of its own identified by red and white strips of ribbon on their uniform.",
          "London did not appear as magnificent as I had imagined it. One might say there are no attractive structures at all. Right in the centre of the city stand the monstrous remnants of bombed buildings surrounded by squalor, ditches and darkened walls. Not to be seen anywhere are signs of an inclination to renovate anything anytime soon. Even the demolishing work has not been completed, let alone renovation! I remember seeing a board somewhere in the city that said, 'London Demolishing Company'.",
          "The first bomb of Hitler fell on London on August 24, 1940 during the Second World War. On the 13th of June, 1944, aerial bombing began. With all that bombing, sixteen and a half hundred thousand buildings of London were devastated.",
          "Poverty and unemployment are on the rise. This noon, near the Strand underground railway station, a well-dressed man came up to me and whispered, 'Give me some coppers'. When I ignored him and moved on, what I heard him say, almost to himself, still roils my heart:",
          "'I am hungry!'",
          "Hundreds of street walkers loiter till daybreak around Piccadilly Circus. That lot has no recourse but to sell their bodies for a meal or a night's shelter. The police is helpless—if they are all charged with prostitution and rounded up, where might they be lodged?",
          "Nevertheless, London has no dearth of preening, otherwise. The rush and crowd in the shops by the streets, the serpentine queues in cinema halls, the din of the latest fashion shows—swell and grow, all in the same locality.",
        ],
      },
      {
        heading: "Inside London Fort",
        paragraphs: [
          "On an afternoon of creeping cold and no rain, having nothing better to do, I set out for the Tower of London.",
          "The tube train reached London Tower station. London Tower was nearby. Bought an entry ticket for three pence and walked in.",
          "This ancient London chapter that spreads over eighteen acres of land on the bank of river Thames is the repository of Anglican heritage. Even in the caped dresses of the attenders here, lurks the Fifteenth century.",
          "It was during the time of the Romans that the bulwarks of the fortresses were erected. In later years the English kings built forts and towers and began to live here. These towers themselves were used to stock wild animals (The tower where lions were kept during the rule of Henry I is what is known as Lion Tower), to imprison enemies, Lords branded seditious, unwelcome claimants to the throne and queens who had lost favour (to be beheaded, later). It is said that the blood-stained history of bygone monarchies remain hidden in the walls of these towers.",
          "Looking at the displays I reached the third floor of the Wakefield Tower situated adjacent to the White Tower. It has a museum that displays the royal crowns and gems. Entered buying a ticket for six pence. Seen here are the regal headdresses beginning with the crown of Charles II which has three thousand precious stones embedded in it and going up to the crown embedded with six thousand gems that George V wore at the Delhi Darbar and also the scepter that holds 'Cullivan', the largest gemstone in the world. Among the collection is the pilfered 'Kohinoor,' the diamond from the Peacock throne of Delhi Fort. Gems and more gems! They emit colourful rays through the glass panes, fanning out in all directions—blinding the eyes.",
          "When I came out of the museum of gems and approached the stairs to go down, a Black woman was standing there alone. Naturally, I looked at the face of 'the other creation'. Her expression at the time frightened me. With hooded drowsy eyes, that female creation was about to keel over... If I hadn't instantly supported her, she might have fallen over and tumbled down the stairs. Her hand bag and a small bundle had already fallen to the ground.",
          "After a minute she opened her eyes slowly. She stared at my arms wrapped around her and then at my face, and cringed apparently nonplussed. I moved her from the hazard of the staircase and installed her in a corner. Looks like by then she had regained her bearings.",
          "'Sorry...very sorry! Those damn jewels...I felt giddy.'",
          "'Never mind, Madam. Are you alright now?'",
          "By then an English youngster and his friend walked up to us.",
          "'What is the matter? Your—your...?' asked that youth sympathetically.",
          "(Little surprise that the white man thought we were friends when he saw the two of us—both dark skinned—together)",
          "'She felt giddy—doesn't matter.' I said a little embarrassed.",
          "'It is usual here. Many ladies faint here after a short while of being exposed to the combined rays of those jewels... Take your friend downstairs and buy her some hot coffee.' He picked up the hand bag and the paper bundle from the floor and proffered them to me.",
          "What could I do but take them?",
          "The Karumbitharuni [Black girl] stood by with a sheepish grin. I gave her the once-over: coarse hair tamed and knotted with great effort and thick painted lips proclaiming Negro descent. The skin tone is not totally black—it is mixed—like milk poured into coffee—A good well-defined round face. The large gold rings hanging from her ears suit her well. She was in a red frock.",
          "'Are you alright now?' I asked again sympathetically.",
          "'Yes—yes—thank you!' came the meek reply.",
          "I held her with one hand and her crocodile bag and the shabby bundle in the other and walked down the stairs.",
          "Saying, 'Let us have some coffee,' I led her to the restaurant in the Tower. She did not protest.",
          "The restaurant is situated in the Tower's cellar where the kings of yore had kept in custody groups of lions, tigers and bears.",
          "The two of us grabbed a place in a vacant corner.",
          "I advised her to order whatever dish she wanted. I thought my midday meal might as well be here and ordered lunch.",
          "'Then I shall have lunch too,' she uttered passively.",
          "We sat waiting for the bearer to ready the meal and bring it over.",
          "I moved her heavy paper bundle near her and asked: 'What does it contain?'",
          "'Music records,' she said sweetly and melodiously: 'Songs of Paul Robson—bought at Selfridges—I am a student of the London Music School.'",
          "'Name?'",
          "'Reema—I am from Jamaica—am studying in London on a scholarship. Been in London only for two weeks now.'",
          "'Very good!' — I made her content with that meaningless word.",
          "'Would it be wrong to guess that you are from India?' Reema spoke, caressing me with her black blooming eyes.",
          "'No error at all. A typical Indian.'",
          "'Studying in London?'",
          "'No. I have come from India to see Europe.'",
          "She looked me all over once again mildly surprised.",
          "(So this bloke must be an Indian prince or a Kuberan [the God of riches]—her mind must be whispering.)",
          "She asked me candidly, 'Are you a Maharaja?'",
          "'Not exactly. But thereabout.' I said assuming a dignified manner.",
          "(A Maharaj lived near my house in Kozhikode. Mithaikaran Maharaj [Vendor of sweet meats]. My proximity to a Maharaja was confined to that).",
          "That Negro lass's curiosity was on fire.",
          "'What is the name of your land?'",
          "'Oh—it's a small place—Puthiyara.'",
          "'So you are the prince of Puthiyara?'",
          "I laughed within. But I loved the name she had gifted me: 'Prince of Puthiyara.' I decided to play along as the Prince of Puthiyara. If that Jamaican thinks of me as such, why should I smudge that wishful dream?",
          "Lunch arrived.",
          "She ordered ice cream and pudding besides lunch and gulped both down.",
          "The bill came: Sixteen shillings (ten rupees).",
          "After lunch was over, we walked over to the lawns near White Tower to rest awhile.",
          "'Let's sit over there,' said Reema pointing to a corner in the north-west part of White Tower.",
          "We took our seats on a bench erected on the side of the lawn in that corner.",
          "'Have you understood the significance of the place that we are seated in?' asks Reema.",
          "I turned up my palm to indicate in the negative.",
          "'Then, listen carefully. It was in this corner that the mother of Elizabeth Anne Boleyn, the wives of Henry VIII and Catherine Howard, were all beheaded. Beneath our feet lies the soil that is made fertile by the blood of royals...'",
          "'Have you seen the machete and the block of wood used for the beheading of the Queen of Scots preserved in the armoury of the Tower...?'",
          "As she spoke of all this, Reema's expression was like that of a Leopard that rips and gnaws at raw meat as it gulps it down. That Negro girl described it all as if she was seeing before her the chopping off of the head of the queens with the axe and the splatter of blood, the severed head and the body writhing—I was intimidated.",
          "Suddenly she grabbed my hand and looked at the time on my wrist watch. 'Oh! It's four o' clock. I have to reach school by four thirty. Have a special class.'",
          "She got up hastily.",
          "I sat there numb. With her tales of the royal murders, she had harrowed the cockles of my heart.",
          "Gathering up her crocodile skin bag and her rucksack of music records she stood there—a little awkwardly.",
          "'Hope you don't mind my asking. Do you have five pounds to loan me? I haven't got my allowance regularized yet. Will get it in two or three days. Will return your money then.'",
          "In that weak moment, I might have handed over the money she had asked for. But all my wallet had was one or two shillings. Saying that the 'Prince of Puthiyara' had no cash on him, was indeed shameful.",
          "'Very sorry, Miss. Reema,' I said mournfully. I have no money on me now. I am awaiting a remittance from India. In a day or two, I shall receive it. Then I could help with five or ten pounds.'",
          "Her face fell. 'Then forget about it. Bye, Bye!'",
          "Reema hurriedly left, carrying her crocodile skin bag and her music pack.",
          "After a while, I too stood up and began to walk.",
        ],
      },
    ],
  },
};

const Excerpt = () => {
  const { slug } = useParams();
  const piece = excerptData[slug];

  if (!piece) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-author-text-light text-xl">Excerpt not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-3xl mx-auto px-4 py-16">

        <Button asChild variant="ghost" className="mb-8 text-author-accent hover:text-author-primary p-0">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Link>
        </Button>

        <p className="text-sm font-raleway font-medium text-author-accent uppercase tracking-wider mb-3">
          {piece.genre} · Unpublished Excerpt
        </p>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-author-primary mb-8 leading-tight">
          {piece.title}
        </h1>

        <p className="text-lg leading-8 text-gray-500 font-serif italic mb-12 border-l-4 border-author-accent/30 pl-6">
          {piece.description}
        </p>

        {piece.sections.map((section, si) => (
          <div key={si} className="mb-10">
            {section.heading && (
              <h2 className="text-xs font-raleway font-semibold uppercase tracking-widest text-author-accent mb-6 border-b border-author-accent/20 pb-2">
                {section.heading}
              </h2>
            )}
            {section.paragraphs.map((para, pi) => (
              <p key={pi} className="mb-5 text-lg leading-8 text-gray-800 font-serif">
                {para}
              </p>
            ))}
			<br/>
          </div>
        ))}
		<br/>
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-author-text-light italic font-serif text-lg">— End of Excerpt —</p>
        </div>
      </div>
    </div>
  );
};

export default Excerpt;