import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const sundayData = {
  "primal-frontier": {
    title: "The Primal Frontier",
    publication: "Sunday Supplement",
    date: "Oct 29, 2013",
    sections: [
      {
        heading: null,
        paragraphs: [
          "Where do I start? Yet the story must be told, for those were the days, days of glorious youth when the world lay at my feet. So it was many years ago in a small town that I grew up. A place where the sun was always up and streets were lined with flowering trees and the surprise drizzle of rain brought with it the smell of dewy grass and my heart fluttered in response to every caress of the nature around me. I was smothered with the pheromones of flora and the sweet smells would transport me to ethereal worlds of perpetual joy. I was young then and the grass was greener and the sky bluer.",
          "A shorter version of the ordinary bicycle sped me around the town as I went about living a life without care rushing through life's errands—school, playfields, gardens and parks, the occasional movie—all the while searching, waiting...",
          "I did not know what I was searching for. Was it someone, was it a final feat of honour, was it the point of complete renunciation, was it the final moment of realization of the self? I did not know. I still do not know.",
          "But there was an intangible something that left a void in the quagmire of my labyrinthine thought.",
          "In a part of town where houses boasted not several rooms except a couple made to keep you dry in a rainy spell but damp in winter and hot in summer, I lay in bed running a temperature that another day in bed would alleviate. In the evening came along a friend and more with the irresistible lure of going to a movie in his car. Privately owned cars scarce those days, were a 'sighting' to the people cast in that part of town. With an overall rating of 9.9 out of 10 (granted by them that indulged me) in my driving skills, it was given that I would be at the wheel and that thrilled me because we did not have a car of our own. Just before we set out my father warned a feverish me, knowing what driving meant to me and sensing what would follow, that the brakes on one side of the car weren't holding; because he had driven that very car the previous day. He also reminded me I was still ill and must not take the wheel. They were family to us, then, the car owners.",
          "I sat through the movie peeved that I wasn't given the wheel on the way up. Fortune smiled when, on coming out of the theatre, the makeshift parking area was choc-a-block full with bicycles and the car was lost in a maze of handle bars and multi hued seat covers of many bicycles. So it naturally came upon me to maneuver the car out of the unruly crowd of movie goers and it was unseemly that I hand over the wheel to someone else after this awe-inspiring feat.",
          "Before the busy part of the small town was left behind, another vehicle joined our route and kept pace with our car, goading us to move faster to match its superior adeptness at speed. I have often wondered how some morbid past catches up with us, entwines itself into pride and deep need to prove something and leads us on to doom. Why did I do it? By the end of the two minutes that took to cover a mile we were speeding neck to neck and before we realized it, the odometer was hovering around fifty five miles per hour as we approached a delectably smooth curve ahead. The trees in the trenches on both sides of the road bore mute witness to this foolhardy exhibition of driving prowess. At the curve that I relished every time I passed through it, as we were edging past the monster racing against us, a cyclist swerved onto our path firm in his belief that vehicles on the road must make way for carefree cyclists, in compliance with the rules of providence. He did not hear the death roar of two engines behind him and our car saw him too late for a disdainful stop. I slammed my right foot on the brake pedal as hard as I feverishly could. Father had warned, and the son had heeded not. This time too the brakes on the left side did not hold. At around sixty miles an hour the car hurtled off the road onto a tree almost fifteen feet perpendicularly away from the road and with a crash that resounded a kilometer away, it wrapped itself around the trunk of the tree in a mangled heap of metal.",
          "Blood, broken bones, people lay sprawled on the road. In an instant of sheer conceit and bravado, I had made a mark for a life time in the minds of all around me and on my own person and mutilated a future that might have been streamlined with careful and humble living. That one moment took away from my life the sunshine, the dewy grass, the blue skies and the joyous smells of my guileless youth.",
          "May be now I know what I was waiting for. It certainly wasn't a soul mate that would weep her blue eyes sore as I departed. It wasn't accolades of success. It wasn't renunciation for the betterment of the race. It wasn't self realization in a form of self denial to self-efface and surrender to the will and the desires of others -- to refrain from self aggrandizement.",
          "Or was it?",
          "I had crossed the primal frontier of my life.",
        ],
      },
    ],
  },

  "flightless-ibis": {
    title: "The Flightless Ibis",
    publication: "Sunday Supplement",
    date: "Nov 06, 2020",
    sections: [
      {
        heading: null,
        paragraphs: [
          "A car drives away one morning from the colony I live in, sporting a gleaming brown colour named cryptically by its anxious manufacturer, to grab a little prospect attention. It came back at dusk the same day, an immaculate white.",
          "Repainted and on the road again in a single day—in a god forsaken village that pretends to be a township! I was intrigued.",
          "Ibis, some said is a flightless bird. They didn't say that breed of Ibis is already extinct. There is the other kind that has a wing span of almost a metre and a half and flies as well as any other bird of flight.",
          "Before I shifted from a city to a lacklustre south Indian village to perish and turn to dust dutifully in the purported peace of the village, I had heard the name of Ibis. At a stone's throw from my house was a not so highly rated hotel called Ibis, a name which boasts a chain of similar hotels in several countries around the world. I did not know then that Ibis was the name of a unique bird.",
          "The tiny railway station of my village has been thoughtfully designed—with a track that glimmers north and another that takes rakes down south, both of which have platforms along them for people to embark and disembark the trains which deign to stop there—the numbers of which can be counted on the fingers of a single right hand—Ekalavya's. There is one more track between these two which is for all the trains which do not stop at our geographical indicator, the quaint railway station (a schedule that ensured perennial cleanliness of the premises) manned by two men, a lady and populated by a thousand Ibis birds, which perch not atop the station building but on the huge trees of unknown vintage the tops of which form a canopy over the area where cars are parked.",
          "The ground beneath these trees looks paved with limestone as the birds, some egrets included, relieve themselves from atop the highest sprigs through the gaps in the branches not soiling one of them only to pave and paint what is below them in pristine white. When at rest and dropping crap the Ibis becomes flightless but hardly extinct.",
          "On my first visit to that spot in the latter half of a month of June, I enquired why the place was so noisy with the screeching of birds which made even speech difficult -- why the earth smelled like the attic of my ancestral home defying the petrichor of the recent drizzle—and why nobody shoos these birds away; I was then told that even to pelt a stone at the birds invites prosecution because the birds were migratory and fly in from thousands of miles away once during the course of a year and that the nondescript railway station premises had been gazetted a sanctuary of sorts.",
          "(Petrichor is the distinctive smell of the earth that accompanies the first rain after a warm spell.)",
          "In his natural wisdom my neighbour parked his car at our one-street town railway station grounds to take a train to the nearest city because, he advised me, it made more sense than driving the car for an hour and a half, conforming to speed limits, all the while bracing for CCTV cameras and speed guns along the highway, breathing in the fumes emitted by long distance diesel trucks and kerosene improvised motorcycles.",
          "The day I saw him return at dusk in a strange car that resembled his own in shape and manner but was the colour of a bright summer cloud—was the last day my venerable neighbour took a train to town.",
        ],
      },
    ],
  },
};

const SundayRead = () => {
  const { slug } = useParams();
  const piece = sundayData[slug];

  if (!piece) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-author-text-light text-xl">Article not found.</p>
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
          {piece.publication} · {piece.date}
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
		<br/>
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-author-text-light italic font-serif text-lg">— End of Article —</p>
        </div>

      </div>
    </div>
  );
};

export default SundayRead;