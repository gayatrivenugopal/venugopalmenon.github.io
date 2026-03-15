import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const excerptData = {
  "sweetmeat-street": {
    title: "The Saga of Sweetmeat Street",
    genre: "Literary Fiction",
    sections: [
      {
        heading: null,
        paragraphs: [
          "They were once human beings of flesh and blood. These people, every one of them, having played their role on the stage of life withdrew behind the eternal curtains. Into coffins, graves, pyres or just soil, these people vanished. Their names, not even the name of one of them, can be seen in the annals of history. But the street which was once awash with the voices and scents of these people still lives on, grinning mirthlessly. Fresh costumes appear and new roles are being played here now. New footprints expunge the old. This story, thus, is played out perennially through centuries.",
        ],
      },
      {
        heading: "Excerpts",
        paragraphs: [
          "Once on the day after the man had left, Ayesha was seated on the patio plucking lice off her head, her hair spread out, lost in thought. Then Perikalan Andru stealthily went and sat in another corner of that patio and casting his eyes into the street thought up a ditty and began to sing:",
          "'Aaayissa beebiyekkangaan / Aasha moothu—mandiyethum / Payasa kothiyanoru / Pandikaadan Kakka! / Pathu kadam bayi nadannu / Kalu random suttedutha pathiriyayee—mooppororu / Pothumbandikkaran…'",
          "'All for a glimpse of Ayesha Beebi / With desire raging—comes running / A payasam greedy outlander Muslim! / Walking ten score miles / Both his feet roasted like pancakes—he… / Is but a buffalo-cart driver!'",
          "When Ayesha realised Andru was singing verses about her lover, she smiled and shifted turning her back to him. But she did not relish Andru calling him a buffalo-cart driver. She said in mild retort:",
          "'Nyammante puyyapla pothumbadikkaranonnunvalla, Andru…' [My new bridegroom is no buffalo-cart driver, Andru…].",
          "'Pinnyaaraa muthae, para!' Andru asked. [Then what else is he, darling, pray tell!]",
          "'Moopparu kaekkulla oru mothalaliyaa…' [He is a richman from the East…']",
          "'Ngaa…Angane para! Moopare kandittu immini kaayum puthanum 'lla koottathilanennu nyammakkum thonneekanu, tto—enda Ayessathatha, puyyaplente paeru?' ['Ha...Say that! Seeing him I too felt that he belongs to the kind that has money and riches—Aysha thatha, what is your puyyapla's name?']",
          "Ayesha demurred at first about uttering her puyyapla's name—she felt…shy! She was chewing betel. Dipping her lime covered forefinger into the concoction in her mouth adding more lime to it, winking, she told him: 'Pokkarukka'.",
          "No sooner he heard it, Andru the instant poet in a 'here you are' manner, conjured another ditty and submitted it to Ayesha:",
          '"Kekku, kekkoru kaattumukkilu—chukkonukkum mothalali / Pokkarukka, pandayaaloru pothumbandikkaran…" [Hear, hear! The richman who harvests ginger in the corner of a jungle, was once a buffalocart driver…"]',
          "'Maendatto, Andru.' Ayesha said feigning irritation, 'Pothumbandikkaran nente baappa aanu'. [Don't you dare, Andru! Your pop is the buffalo-cart driver!]",
          "Ayesha stopped the thattam that was sliding off her head, folded it and put it back on and then, pressing down on it firmly with her hand, spat squirting red spittle in a stream, on to the street.",
          "Andru, pretending he had not heard what was said about his father, squatted there his arms entwined over his knees staring into the street.",
          "He said mentally to himself: 'Pahechi betladakya thinnu thuppiyathu aatinchora pole kedakanu.' ['What that female spat out looks like the blood of a goat.']",
          "Amina was going by on the street with her pandarakettu tucked under her arm. Amina cast a sly glance at Ayesha and Andru seated on the patio. Then as if she had not seen them, walked on south.",
          "'Do you want to know what is inside Amina thatha's pandarakettu?' Andru asked Ayesha, scratching his swollen leg.",
        ],
      },
    ],
  },

  "soldier-kuttappan": {
    title: "Soldier Kuttappan",
    genre: "Literary Fiction",
    sections: [
      {
        heading: null,
        paragraphs: [
          "'Edee nandiketta koothachiee…,' ['You whore of a bloody ingrate…!']",
          "You decking up like Urvashi, the epitome of celestial beauty and going to the movies with that tail-licker of yours—God showed it all to me, didn't he, you creep! You harlot! Draped in that red saree that I bought you… a green silk blouse and holding a silk umbrella… you with that hamukku, the blighter, Balan…",
          "Kuttappan paused the letter there and bared his teeth in a grin. He thought for a while. He felt that the word 'Hamukku' did not carry sufficient punch. What about, 'suvar ka bacha'? But will the woman understand that Hindusthani expression? Will that other son of a bitch understand if I used suvar ka bacha? (That he will read this letter is a given).",
          "Kuttappan lit a second 'Charminar' cigarette and took a puff and let out smoke; he thought deeply. Ha! That is better: 'Kiladi chekkan Balande koode' ['With that philanderer Balan']—Hamukku Balan was felled and Khiladi Balan was kindled. He let out some smoke too. He paused again. A doubt arose within him. What would be better—Kiladichekkan Balan or Balan kiladichekkan? He puffed again twice. He finalised Kiladichekkan Balan. He read through the letter as much as it had progressed, once more.",
          "With the very hand that wrote numerous times addressing her 'Priyadame,' 'Praneshwari,' [Darling, the light of my soul] 'My dearest Kalyani' and in many more similar ways, when he firmly wrote, 'Edee nandiketta koothachie…,' Asari Kuttappan felt no tremor in his hand or any remorse in his heart. That is how much Kuttappan was riled—he was hopping mad.",
          "Asari Kuttappan who had joined Military service and was working in the Dehu Road workshop had an inspiration one day—that he must go and see his heart-throb Kalyani and get married to her….",
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

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-author-primary mb-12 leading-tight">
          {piece.title}
        </h1>

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
          </div>
        ))}

        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-author-text-light italic font-serif text-lg">— End of Excerpt —</p>
        </div>

      </div>
    </div>
  );
};

export default Excerpt;