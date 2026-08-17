import { QuestionBankItem } from '../types';

export const QUESTION_BANK: QuestionBankItem[] = [
  // SOCRATIC QUESTIONS
  {
    id: 'soc_1',
    moduleId: 'anph111_week1',
    technique: 'socratic',
    title: 'Socratic Inquiry: The Philosophy of Barrier Protection',
    context: 'PPE Fundamentals & Risk Management',
    prompt: 'Why do you think laboratory protocols insist on treating PPE as a secondary line of defense after engineering controls, rather than relying on PPE alone? What happens if you rely solely on gloves and goggles while ignoring proper fume hood ventilation and safe handling techniques?',
    guide: 'Looking for understanding that PPE only minimizes injury upon contact; engineering controls (fume hoods, eyewash stations) remove or isolate the hazard at the source. Over-reliance on PPE breeds false security.',
    difficulty: 'intermediate'
  },
  {
    id: 'soc_2',
    moduleId: 'anph111_week1',
    technique: 'socratic',
    title: 'Socratic Inquiry: The Unbuttoned Lab Coat Hazard',
    context: 'Body Protection & Behavioral Safety',
    prompt: 'If a student claims that leaving their lab coat open is harmless because "they are only pouring water-based saline solutions today," how would you challenge this assumption using the principles of unpredictable laboratory hazards and airborne turbulence?',
    guide: 'Emphasize that laboratory hazards are shared; other benchmates are working with caustic stains/burners. An open coat creates flaring fabric that can brush against flame or knock over adjacent chemical beakers.',
    difficulty: 'foundational'
  },
  {
    id: 'soc_3',
    moduleId: 'anph111_week1',
    technique: 'socratic',
    title: 'Socratic Inquiry: Institutional Accountability in Breakage',
    context: 'Reporting Broken Equipment & Facility Stewardship',
    prompt: 'Why is there a strict non-concealment rule for chipped glassware, even if the hairline crack appears tiny and harmless to the student? Trace the cascade of danger if that beaker is heated on a hot plate during the next class session.',
    guide: 'Thermal expansion concentrates stress along microscopic fractures, causing catastrophic explosive shattering of hot chemical contents onto students.',
    difficulty: 'advanced'
  },
  {
    id: 'soc_4',
    moduleId: 'anph111_week1',
    technique: 'socratic',
    title: 'Socratic Inquiry: OLFU Mission in Daily Clinical Habits',
    context: 'Holistic Formation (Knowledge, Skills, Virtues)',
    prompt: 'How does the OLFU mission of holistic formation (Knowledge, Skills, Virtues) differentiate a technically skilled technician from a compassionate, trustworthy healthcare professional?',
    guide: 'Technical skill without virtue (integrity, honesty, empathy) can lead to reckless shortcuts or cover-ups. Knowledge and virtue together ensure patient safety and ethical care.',
    difficulty: 'intermediate'
  },

  // FEYNMAN TECHNIQUE
  {
    id: 'feyn_1',
    moduleId: 'anph111_week1',
    technique: 'feynman',
    title: 'Feynman Technique: Nitrile vs Latex Gloves',
    context: 'Hand Protection & Glove Selection',
    prompt: 'Explain the difference between Nitrile and Latex gloves to a first-year student with zero chemistry background. Why do modern labs prefer Nitrile, and when would latex still be used?',
    guide: 'Clear, plain language: Nitrile is synthetic, tough like a shield against chemicals, and allergen-free. Latex is natural rubber, flexible like a second skin, but can trigger severe allergic reactions in some people.',
    difficulty: 'foundational'
  },
  {
    id: 'feyn_2',
    moduleId: 'anph111_week1',
    technique: 'feynman',
    title: 'Feynman Technique: The 4-Step PPE Routine',
    context: 'Operational Lifecycle of Protective Gear',
    prompt: 'Imagine you are teaching an 8-year-old child how to handle protective gear before playing a science game. Explain the 4 steps (Inspect, Don & Doff, Clean & Store, Dispose) using an intuitive daily analogy.',
    guide: 'Analogy example: Like checking a bicycle helmet before riding, putting on armor without touching mud, washing your boots, and throwing out dirty wipes into the right bin.',
    difficulty: 'intermediate'
  },
  {
    id: 'feyn_3',
    moduleId: 'anph111_week1',
    technique: 'feynman',
    title: 'Feynman Technique: Why Lab Coats Cannot Leave the Room',
    context: 'Cross-Contamination & Public Health',
    prompt: 'Explain to a friend waiting outside the lab why you must take off your laboratory gown before walking out into the hallway or going to the cafeteria, even if you only worked for 10 minutes.',
    guide: 'Invisible microscopic chemical vapors and bio-contaminants cling to the fabric fibers. Wearing it outside spreads hazardous particles to food, benches, and unshielded people in public corridors.',
    difficulty: 'foundational'
  },

  // ACTIVE RECALL
  {
    id: 'rec_1',
    moduleId: 'anph111_week1',
    technique: 'recall',
    title: 'Active Recall: Laboratory Grading Formula',
    context: 'Mathematical Grade Weights',
    prompt: 'Without checking your notes, state the exact percentage weight of each of the four components in the ANPH111 Laboratory grading system. What are the PPM and PT counts?',
    guide: 'Prelim Practicals 20% (4 PPM), Midterm Practicals 20% (4 PPM), Finals Practicals 20% (4 PPM), Performance Tasks 40% (4 PT). Total 100%.',
    difficulty: 'foundational'
  },
  {
    id: 'rec_2',
    moduleId: 'anph111_week1',
    technique: 'recall',
    title: 'Active Recall: Index Card Color Coding by Section',
    context: 'Student Profile Requirements',
    prompt: 'List the exact 1/8 index card color assigned to each of the following sections: BSN 1Y1-1B, BSN 1Y1-6B, BSN 1Y1-20B, and MedTech 1Y1-8.',
    guide: 'BSN 1Y1-1B: White; BSN 1Y1-6B: Pink; BSN 1Y1-20B: Yellow; MedTech 1Y1-8: Orange.',
    difficulty: 'foundational'
  },
  {
    id: 'rec_3',
    moduleId: 'anph111_week1',
    technique: 'recall',
    title: 'Active Recall: Special Cases Make-Up Protocol',
    context: 'Make-up Experiments & Independent Research',
    prompt: 'What are the three essential requirements to conduct a make-up experiment in the laboratory? (Mention advance timeline, letter contents, and the two required authorizing signatures).',
    guide: '1) Submit request letter at least 1 week in advance; 2) Specify date/time, requested items, and experiment title; 3) Obtain formal signatures from both Subject Professor AND College Dean.',
    difficulty: 'intermediate'
  },
  {
    id: 'rec_4',
    moduleId: 'anph111_week1',
    technique: 'recall',
    title: 'Active Recall: ACHIEVER Core Values Acronym',
    context: 'OLFU Institutional Character',
    prompt: 'Spell out all 8 words in the ACHIEVER core values acronym in correct sequential order.',
    guide: 'A - Aspires, C - Credible, H - Hardworking, I - Inspiration, E - Entrepreneurial, V - Visionary, E - Ethical, R - Responsible.',
    difficulty: 'foundational'
  },

  // CLINICAL SCENARIOS
  {
    id: 'clin_1',
    moduleId: 'anph111_week1',
    technique: 'clinical',
    title: 'Clinical Emergency: Concentrated Acid Eye Splash',
    context: 'Emergency First Aid & Eyewash Protocol',
    prompt: 'While observing a test tube, an adjacent benchmate accidentally spills a droplet of hydrochloric acid toward your face. Your goggles deflected the main splash, but some stinging mist enters your right eye. Walk through your immediate step-by-step actions in the next 15 seconds.',
    guide: '1) Alert instructor immediately; 2) Move directly to Eyewash Station; 3) Pull lever/pedal; 4) Flush right eye with eyelids held wide open for a FULL 15 MINUTES minimum; 5) Seek medical evaluation.',
    difficulty: 'advanced'
  },
  {
    id: 'clin_2',
    moduleId: 'anph111_week1',
    technique: 'clinical',
    title: 'Clinical Scenario: The Missing Hair Cap & Goggles',
    context: 'Enforcement of "No Full PPE? No Experiment."',
    prompt: 'Your lab partner forgot their safety goggles and hair cap at home. They ask you to quickly share your goggles when the instructor is not looking so they can finish the dissection. How do you respond professionally and safely under OLFU laboratory rules?',
    guide: 'Firm refusal. Strict rule: "No Full PPE? No Experiment." Sharing compromised gear violates aseptic protocols and endangers both students. Direct them to borrow from the technician or inform the instructor.',
    difficulty: 'intermediate'
  },
  {
    id: 'clin_3',
    moduleId: 'anph111_week1',
    technique: 'clinical',
    title: 'Clinical Scenario: Micro-fractured Graduated Cylinder',
    context: 'Pre-use Inspection & Defect Handling',
    prompt: 'You just checked out a 100mL graduated cylinder from the Stockroom. While preparing your bench, you notice a 2mm hairline crack near the base. The experiment starts in 2 minutes. What is your exact protocol?',
    guide: 'Do not use the cylinder. Immediately bring it back to the Laboratory Technician at the Stockroom, point out the pre-existing crack before any liquid is poured, and obtain an inspected replacement.',
    difficulty: 'foundational'
  },

  // ELI5 (EXPLAIN LIKE I AM 5)
  {
    id: 'eli5_1',
    moduleId: 'anph111_week1',
    technique: 'eli5',
    title: 'ELI5: Why Goggles Must Seal All Around Your Eyes',
    context: 'Eye Protection Physics',
    prompt: 'Explain to a 5-year-old child why regular reading glasses are not enough in a science lab and why science goggles must stick tight all around your eyes like swimming goggles.',
    guide: 'Liquid drops and splashes can bounce or curve around the top and sides of regular glasses. Sealed goggles form a water-tight wall so no sneaky splash can reach your eyes.',
    difficulty: 'foundational'
  },
  {
    id: 'eli5_2',
    moduleId: 'anph111_week1',
    technique: 'eli5',
    title: 'ELI5: Why Eating & Drinking is Banned in Science Labs',
    context: 'Invisible Chemical Transfer',
    prompt: 'Explain to a 5-year-old why even a tiny piece of candy or a closed water bottle cannot be opened inside a science lab.',
    guide: 'The tables and air have invisible chemical dust. If you touch candy or food with your hands, the dangerous dust sticks to the food and goes into your tummy.',
    difficulty: 'foundational'
  },

  // SPOT THE MISTAKE
  {
    id: 'spot_1',
    moduleId: 'anph111_week1',
    technique: 'spot_mistake',
    title: 'Spot the Mistake: Laboratory Clean-up Protocol',
    context: 'Post-Experiment Return Standards',
    prompt: 'Review this student action: "Marco finished his dissection, quickly rinsed his beaker with tap water, placed the wet beaker and borrowed microscope into his backpack, and left the lab to submit them tomorrow morning." Identify all four rule violations.',
    guide: 'Violations: 1) Wet beaker returned (must be clean and DRY); 2) Borrowed equipment placed in personal bag/taken out of lab; 3) Must return promptly to technician same day; 4) Equipment must be inspected and checked in at stockroom.',
    difficulty: 'intermediate'
  }
];
