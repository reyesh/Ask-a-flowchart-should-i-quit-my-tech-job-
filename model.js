  var flowChart = {
// q are the questions used to determine if you should quit your tech job.
// type: 1 are yes no questions, type 2: are responses you have to choose
// type: 3 is a single respone. type: 4 is verdict button
  currentState: "",

  q: [
   {
      id: "q0",
      text: "Has it IPO\'d?",
      type: 1,
      opt1: "q1",
      opt2: "q2"
    },
    {
      id: "q1",
      text: "Is there free food?",
      type: 1,
      opt1: "q3",
      opt2: "v0"
    },
    {
      id: "q2",
      text: "Is it in the Bay Area?",
      type: 1,
      opt1: "q4",
      opt2: "q6"
    },
    {
      id: "q3",
      text: "even tacos?",
      type: 1,
      opt1: "q5",
      opt2: "v0"
    },
    {
      id: "q4",
      text: "Is it all dudes?",
      type: 2,
      opt1: "r0",
      opt2: "r1"
    },
    {
      id: "q5",
      text: "Do you have standing desks?",
      type: 1,
      opt1: "q7",
      opt2: "v0"
    },
    {
      id: "q6",
      text: "You'll never get a good exit",
      type: 3,
      opt1: "r3"
    },
    {
      id: "q7",
      text: "Treadmill desks?",
      type: 1,
      opt1: "q10",
      opt2: "v2"
    },
    {
      id: "q8",
      text: "Is \"Moon Shots\" a topic of discussion?",
      type: 2,
      opt1: "r2",
      opt2: "r4"
    },
    {
      id: "q9",
      text: "Oh, like the HBO show!",
      type: 3,
      opt1: "r7"
    },
    {
      id: "q10",
      text: "Free Beer?",
      type: 1,
      opt1: "q13",
      opt2: "v2"
    },
    {
      id: "q11",
      text: "Gross, get out.",
      type: 4,
      opt1: "v3"
    },
    {
      id: "q12",
      text: "Exactly.",
      type: 4,
      opt1: "v3"
    },
    {
      id: "q13",
      text: "Free Medical Marijuana?",
      type: 1,
      opt1: "q15",
      opt2: "v5"
    },
    {
      id: "q14",
      text: "How many free t-shirts did you get?",
      type: 2,
      opt1: "r5",
      opt2: "r6"
    },
    {
      id: "q15",
      text: "Are they hiring?",
      type: 1,
      opt1: "v6",
      opt2: "v4"
    },
    {
      id: "q16",
      text: "Score! Stay till you get a hoodie (or a tesla).",
      type: 4,
      opt1: "v7"
    },
    {
      id: "q17",
      text: "But what are you supposed to wear tomorrow?",
      type: 4,
      opt1: "v3"
    }
  ],
// r are the responses given to certain questions
  r: [
    {
      id: "r0",
      text: "Well, not all dudes",
      opt1: "q8"
    },
    {
      id: "r1",
      text: "Uh, Yeah, I said \"Tech Job.\"",
      opt1: "v1"
    },
    {
      id: "r2",
      text: "Every Morning.",
      opt1: "q11"
    },
    {
      id: "r3",
      text: "But I love Silicon prairie/alley/gulch/cesspool!",
      opt1: "q9"
    },
    {
      id: "r4",
      text: "No. Thank God.",
      opt1: "q14"
    },
    {
      id: "r5",
      text: "Boxes",
      opt1: "q16"
    },
    {
      id: "r6",
      text: "Just one.",
      opt1: "q17"
    },
    {
      id: "r7",
      text: "That's silicon valley.",
      opt1: "q12"
    }
  ],
// v are the possible verdicts to the question "should i quit my tech job?"
  v: [
    {
      id: "v0",
      text: "Outrageous! Vaya con Dios."
    },
    {
      id: "v1",
      text: "Bro, you gotta go."
    },
    {
      id: "v2",
      text: "Savages. Say Good-bye."
    },
    {
      id: "v3",
      text: "Hate-Quit."
    },
    {
      id: "v4",
      text: "Fine. Stay another week or two."
    },
    {
      id: "v5",
      text: "Guess they don\'t care about \"Wellness.\" Leave."
    },
    {
      id: "v6",
      text: "No. (But get me an interview!)"
    },
    {
      id: "v7",
      text: "No ... for now."
    }
  ]
}