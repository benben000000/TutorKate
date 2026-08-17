import { ComprehensiveQuizQuestion } from '../types';

export const QUESTION_BANK_100: ComprehensiveQuizQuestion[] = [
  // ==========================================
  // CATEGORY 1: HAZARDS & RISK RECOGNITION (Q1 - Q18)
  // ==========================================
  {
    id: 'q_haz_1',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Laboratory Hazards',
    question: 'What percentage of reported laboratory injuries across health science institutions correlate directly with absent, improper, or compromised PPE?',
    options: ['Over 25%', 'Over 40%', 'Over 60%', 'Over 85%'],
    correctIndex: 2,
    socraticClue: 'Recall the critical injury statistic emphasized in laboratory safety foundations. More than half of all accidents stem directly from barrier failures.',
    modelAnswer: 'Over 60% of all reported laboratory injuries across health science institutions are associated with absent or improper PPE.',
    rubricGuide: 'Full credit for identifying 60%+.'
  },
  {
    id: 'q_haz_2',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Laboratory Hazards',
    question: 'Which of the following is categorized as a chemical hazard in Anatomy and Physiology laboratories?',
    options: ['Scalpel blade laceration', 'Formalin / Formaldehyde preservative fumes', 'Bacterial smear contamination', 'Microscope electrical cord short circuit'],
    correctIndex: 1,
    socraticClue: 'Differentiate between biological agents, mechanical sharps, electrical hazards, and chemical reagents used to preserve anatomical cadavers.',
    modelAnswer: 'Formalin / Formaldehyde preservative solution and histological stains are chemical hazards.',
    rubricGuide: 'Correctly identifies chemical reagents.'
  },
  {
    id: 'q_haz_3',
    moduleId: 'anph111_week1',
    type: 'enumeration',
    difficulty: 'medium',
    category: 'Laboratory Hazards',
    question: 'Enumerate the 4 major classes of laboratory hazards present in ANPH111.',
    enumerationCount: 4,
    keywords: ['chemical', 'biological', 'sharp', 'heat', 'electrical'],
    correctItems: ['Chemical Spills', 'Biological Agents', 'Sharp Objects', 'Heat & Electrical Hazards'],
    socraticClue: 'Think about the 4 environmental categories: reagents, specimens, cutting instruments, and thermal/power equipment.',
    modelAnswer: '1. Chemical Spills (Fixatives, stains, acids)\n2. Biological Agents (Tissues, smears, cadavers)\n3. Sharp Objects (Scalpels, slides, broken glass)\n4. Heat & Electrical Hazards (Hot plates, autoclaves, wiring)',
    rubricGuide: '1 point per valid hazard class (max 4 points).'
  },
  {
    id: 'q_haz_4',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Laboratory Hazards',
    question: 'What is the primary physiological risk of skin contact with unneutralized Formalin during anatomical dissection?',
    options: ['Instant thermal burn', 'Tissue fixation, chemical burns, and severe contact dermatitis', 'Immediate systemic bacterial infection', 'Electrical shock'],
    correctIndex: 1,
    socraticClue: 'Formalin is a potent cross-linking fixative agent. What happens when fixatives encounter live epidermal protein?',
    modelAnswer: 'Formalin cross-links proteins, leading to chemical burns, tissue fixation, and contact sensitization dermatitis.',
    rubricGuide: 'Understands protein fixation mechanism of aldehydes.'
  },
  {
    id: 'q_haz_5',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'hard',
    category: 'Laboratory Hazards',
    question: 'Why does leaving a laboratory coat unbuttoned significantly increase physical hazard risks during experiments?',
    options: [
      'It restricts arm movement during dissection',
      'It creates loose flapping fabric that can catch open flames, knock over chemical reagents, or snag equipment',
      'It prevents air conditioning from cooling the student',
      'It is solely a violation of school uniform aesthetics'
    ],
    correctIndex: 1,
    socraticClue: 'Think of how fluid movement and aerodynamics affect loose fabric near Bunsen burners and reagent bottles.',
    modelAnswer: 'An unbuttoned coat acts like a sail, catching flames and sweeping glassware off laboratory benches.',
    rubricGuide: 'Explains mechanical and fire risks of loose clothing.'
  },
  {
    id: 'q_haz_6',
    moduleId: 'anph111_week1',
    type: 'essay',
    difficulty: 'practical',
    category: 'Laboratory Hazards',
    question: 'Explain why standard laboratory safety precautions are considered the direct foundation for hospital universal precautions in bedside nursing.',
    keywords: ['cross-contamination', 'barrier', 'bloodborne pathogens', 'infection control', 'aseptic'],
    socraticClue: 'Connect the habit of wearing gloves and barrier coats in dissection with preventing transmission between patients in clinical wards.',
    modelAnswer: 'Standard laboratory precautions train healthcare students in barrier protection, aseptic discipline, and zero cross-contamination. Preventing chemical/microbial contamination in the lab directly builds the muscle memory needed to prevent nosocomial infections, needle-stick injuries, and pathogen transmission in hospital isolation units.',
    rubricGuide: 'Full credit (5 pts) for connecting barrier protection, aseptic technique, and nosocomial cross-contamination prevention.'
  },
  {
    id: 'q_haz_7',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Laboratory Hazards',
    question: 'Which of the following items represents a sharp object hazard in anatomy practicals?',
    options: ['Latex glove cuff', 'Cover slips and broken capillary tubes', '70% Isopropyl alcohol', 'Distilled water bottle'],
    correctIndex: 1,
    socraticClue: 'Sharps are thin, fragile, or edged items capable of puncturing or cutting biological skin barriers.',
    modelAnswer: 'Microscope cover slips, capillary tubes, and scalpel blades are sharp hazards.',
    rubricGuide: 'Identifies glass and cutting sharps.'
  },
  {
    id: 'q_haz_8',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Laboratory Hazards',
    question: 'How should biological waste generated from animal organ dissections be categorized and discarded?',
    options: ['General trash bin with paper', 'Yellow Biohazard Waste Receptacle', 'Rinsed down the general laboratory sink', 'Stored in personal laboratory locker'],
    correctIndex: 1,
    socraticClue: 'Biological tissue requires specialized biohazard containment to prevent microbial proliferation and community contamination.',
    modelAnswer: 'Biological waste and contaminated dissection materials must be deposited into dedicated Yellow Biohazard receptacles.',
    rubricGuide: 'Understands color-coded biohazard waste segregation.'
  },
  {
    id: 'q_haz_9',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'hard',
    category: 'Laboratory Hazards',
    question: 'What is the primary danger of operating a compound microscope with a frayed or exposed electrical power cord?',
    options: ['Low magnification resolution', 'Electrical shock, short-circuit flash fires, and equipment burnout', 'Lens clouding', 'Microscope slide cracking'],
    correctIndex: 1,
    socraticClue: 'Consider the combination of 220V electrical current and metal microscope chassis near liquid reagent spills.',
    modelAnswer: 'Frayed cords risk electrical shock to the user and flash fires upon contact with bench fluids.',
    rubricGuide: 'Recognizes electrical hazard risks.'
  },
  {
    id: 'q_haz_10',
    moduleId: 'anph111_week1',
    type: 'enumeration',
    difficulty: 'medium',
    category: 'Laboratory Hazards',
    question: 'List 3 histological chemical stains or fixatives commonly encountered in anatomy laboratory.',
    enumerationCount: 3,
    keywords: ['formalin', 'formaldehyde', 'methylene blue', 'eosin', 'alcohol', 'iodine'],
    correctItems: ['Formalin / Formaldehyde', 'Methylene Blue', 'Eosin Stain'],
    socraticClue: 'Recall the reagents used for tissue preservation and staining cellular nuclei and cytoplasm.',
    modelAnswer: '1. Formaldehyde / Formalin\n2. Methylene Blue\n3. Eosin / Gram Stains',
    rubricGuide: '1 point per valid histological chemical agent.'
  },

  // ==========================================
  // CATEGORY 2: PPE SYSTEMS & MATERIAL SCIENCE (Q11 - Q35)
  // ==========================================
  {
    id: 'q_ppe_1',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'PPE Standards',
    question: 'Why are Nitrile gloves universally preferred over Natural Rubber Latex gloves in modern chemical and medical laboratories?',
    options: [
      'Nitrile gloves are transparent and cheaper',
      'Nitrile provides superior puncture and chemical resistance without triggering Type I/IV latex allergic reactions',
      'Latex gloves melt at room temperature',
      'Nitrile gloves can be washed and reused indefinitely'
    ],
    correctIndex: 1,
    socraticClue: 'Consider both chemical barrier resilience and patient/student hypersensitivity immune reactions.',
    modelAnswer: 'Nitrile synthetic polymer resists chemical degradation and puncture, while eliminating plant-protein latex allergies.',
    rubricGuide: 'Identifies chemical resistance and hypoallergenicity.'
  },
  {
    id: 'q_ppe_2',
    moduleId: 'anph111_week1',
    type: 'enumeration',
    difficulty: 'hard',
    category: 'PPE Standards',
    question: 'Enumerate the 4 mandatory rules for wearing a laboratory gown/coat in ANPH111.',
    enumerationCount: 4,
    keywords: ['material', 'button', 'sleeve', 'doff', 'exit', 'outside'],
    correctItems: [
      '1. Choose task-appropriate flame/splash-resistant material',
      '2. Button the coat completely from throat to bottom',
      '3. Keep sleeves down and secured at wrists under gloves',
      '4. Remove (doff) immediately prior to leaving the laboratory room'
    ],
    socraticClue: 'Think about: material selection, fastening, sleeve positioning, and when to remove it.',
    modelAnswer: '1. Appropriate task-rated material\n2. Fastened/buttoned completely\n3. Sleeves secured down at wrists\n4. Doffed before exiting the laboratory suite',
    rubricGuide: '1 point per complete rule (max 4 pts).'
  },
  {
    id: 'q_ppe_3',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'PPE Standards',
    question: 'Can a full polycarbonate face shield replace sealed safety goggles during chemical handling?',
    options: [
      'Yes, because a face shield covers a larger surface area',
      'No, face shields do not create a 360-degree orbital seal and must be worn OVER goggles during splash hazards',
      'Yes, if the student wears prescription glasses underneath',
      'Yes, face shields are always superior to goggles'
    ],
    correctIndex: 1,
    socraticClue: 'Look at the gap around the chin and forehead. Can aerosolized chemical mist or angled splashes pass under a shield?',
    modelAnswer: 'Face shields provide secondary impact/splash protection but lack a perimeter eye seal. They must be worn over sealed goggles.',
    rubricGuide: 'Understands secondary vs primary eye protection.'
  },
  {
    id: 'q_ppe_4',
    moduleId: 'anph111_week1',
    type: 'enumeration',
    difficulty: 'medium',
    category: 'PPE Routine',
    question: 'Enumerate the 4 steps of the operational PPE lifecycle routine in sequential order.',
    enumerationCount: 4,
    keywords: ['inspect', 'don', 'doff', 'clean', 'store', 'dispose'],
    correctItems: ['1. INSPECT', '2. DON & DOFF', '3. CLEAN & STORE', '4. DISPOSE'],
    socraticClue: 'What is the lifecycle? Check first -> Put on & take off -> Maintain reusables -> Discard single-use.',
    modelAnswer: '1. INSPECT (Check integrity/tears)\n2. DON & DOFF (Proper aseptic sequence)\n3. CLEAN & STORE (Sanitize reusables with 70% alcohol)\n4. DISPOSE (Yellow biohazard bin for single-use)',
    rubricGuide: 'Full credit (4 pts) for correct order.'
  },
  {
    id: 'q_ppe_5',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'PPE Standards',
    question: 'What is the correct sequence for DOFFING (removing) PPE to avoid self-contamination?',
    options: [
      'Gown -> Mask -> Goggles -> Gloves',
      'Gloves -> Goggles / Face Shield -> Gown -> Mask',
      'Mask -> Gloves -> Goggles -> Gown',
      'Goggles -> Gloves -> Mask -> Gown'
    ],
    correctIndex: 1,
    socraticClue: 'The most contaminated item (hands/gloves) must be removed first so bare hands can safely touch clean inner fasteners.',
    modelAnswer: 'Doffing sequence: Gloves first (most contaminated) -> Goggles/Face Shield -> Gown -> Mask last.',
    rubricGuide: 'Understands aseptic doffing order.'
  },
  {
    id: 'q_ppe_6',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'PPE Standards',
    question: 'Why is it strictly forbidden to touch smartphones, door handles, or light switches while wearing laboratory gloves?',
    options: [
      'Gloves make mobile touchscreens unresponsive',
      'It causes cross-contamination, spreading chemical and biological pathogens to high-touch public surfaces',
      'It drains phone battery faster',
      'Gloves will tear instantly upon touching metal'
    ],
    correctIndex: 1,
    socraticClue: 'Contaminated glove exteriors transfer invisible chemical residues and bio-agents to items that will later be touched with bare hands.',
    modelAnswer: 'Glove discipline prevents cross-contamination of personal devices and common facility fixtures.',
    rubricGuide: 'Highlights cross-contamination prevention.'
  },
  {
    id: 'q_ppe_7',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'PPE Standards',
    question: 'What type of respiratory protection is required when working with fine toxic dusts or airborne biological aerosols?',
    options: [
      'Loose-fitting cloth fashion mask',
      'Standard surgical mask',
      'Fit-tested N95 particulate respirator or fume-rated respirator',
      'Covering nose with laboratory coat collar'
    ],
    correctIndex: 2,
    socraticClue: 'Differentiate between droplet barriers (surgical masks) and tightly sealed particulate filters (N95/respirators).',
    modelAnswer: 'Fit-tested N95 or fume-rated respirators create a tight facial seal and filter fine airborne particulates.',
    rubricGuide: 'Distinguishes between surgical masks and respirators.'
  },
  {
    id: 'q_ppe_8',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'hard',
    category: 'PPE Standards',
    question: 'When handling boiling water baths or removing hot glassware from an autoclave, which glove type is mandatory?',
    options: ['Thin Nitrile examination gloves', 'Powdered Latex surgical gloves', 'Thermal insulated heat-resistant gloves', 'Bare hands with paper towels'],
    correctIndex: 2,
    socraticClue: 'Chemical polymers (nitrile/latex) conduct heat instantly and melt. Thermal insulation is required.',
    modelAnswer: 'Thermal heat-resistant gloves provide insulation against high contact temperatures and steam.',
    rubricGuide: 'Matches thermal hazard with appropriate glove material.'
  },
  {
    id: 'q_ppe_9',
    moduleId: 'anph111_week1',
    type: 'essay',
    difficulty: 'practical',
    category: 'PPE Standards',
    question: 'Describe the immunological mechanism of Type I vs Type IV Latex Hypersensitivity, and why healthcare institutions have transitioned to Nitrile barriers.',
    keywords: ['IgE', 'anaphylaxis', 'contact dermatitis', 'T-cell', 'nitrile'],
    socraticClue: 'Think about immediate IgE-mediated histamine release vs delayed cell-mediated dermatitis from rubber accelerators.',
    modelAnswer: 'Type I latex allergy is an immediate, IgE-mediated hypersensitivity reaction triggered by natural rubber proteins, potentially leading to bronchospasm, urticaria, and life-threatening anaphylactic shock. Type IV allergy is a delayed, T-cell-mediated hypersensitivity causing localized contact dermatitis, erythema, and vesicle formation due to processing chemicals. Healthcare facilities transitioned to synthetic Nitrile because it is free of natural latex proteins, preventing occupational sensitization among nurses and anaphylaxis in latex-allergic patients.',
    rubricGuide: 'Full credit (5 pts) for explaining IgE anaphylaxis vs T-cell dermatitis and rationale for Nitrile adoption.'
  },
  {
    id: 'q_ppe_10',
    moduleId: 'anph111_week1',
    type: 'enumeration',
    difficulty: 'easy',
    category: 'PPE Standards',
    question: 'List the 5 basic elements of full PPE required before entering an ANPH111 dissection lab.',
    enumerationCount: 5,
    keywords: ['coat', 'gown', 'goggles', 'mask', 'cap', 'gloves'],
    correctItems: ['Laboratory Coat / Gown', 'Sealed Safety Goggles', 'Face Mask', 'Hair Cap / Hair Tie', 'Nitrile Gloves'],
    socraticClue: 'Head to toe: hair, eyes, respiratory tract, torso/arms, hands.',
    modelAnswer: '1. Laboratory Coat\n2. Safety Goggles\n3. Protective Mask\n4. Hair Cap / Snood\n5. Nitrile Gloves',
    rubricGuide: '1 pt per correct PPE component.'
  },

  // ==========================================
  // CATEGORY 3: ROOM GOVERNANCE & PROHIBITED BEHAVIORS (Q36 - Q55)
  // ==========================================
  {
    id: 'q_gov_1',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Room Governance',
    question: 'Under what circumstances is a student permitted to enter and utilize a laboratory room?',
    options: [
      'Any time the room door happens to be unlocked',
      'Strictly during approved, scheduled laboratory class hours under authorized faculty/technician supervision',
      'Whenever the student needs a quiet study lounge',
      'During lunch break if no chemicals are being actively heated'
    ],
    correctIndex: 1,
    socraticClue: 'Laboratory facilities operate under strict institutional liability. Unmonitored or recreational access is completely barred.',
    modelAnswer: 'Laboratories are opened strictly according to official academic timetables with authorized supervision.',
    rubricGuide: 'Identifies scheduled-only access policy.'
  },
  {
    id: 'q_gov_2',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Room Governance',
    question: 'Why is eating, drinking, or chewing gum strictly prohibited inside the anatomy laboratory?',
    options: [
      'Food odors distract other classmates from studying',
      'Accidental hand-to-mouth transfer of toxic chemical residues, fixatives, and biological pathogens can cause fatal poisoning',
      'School administrators want students to spend money at the cafeteria',
      'Food crumbs attract laboratory frogs and specimens'
    ],
    correctIndex: 1,
    socraticClue: 'Chemical vapors, airborne aerosols, and bench residues contaminate food containers and hands, leading to accidental ingestion.',
    modelAnswer: 'Food and drink ingestion in laboratory environments leads to accidental lethal chemical poisoning and bio-contamination.',
    rubricGuide: 'Identifies chemical/biological ingestion hazard.'
  },
  {
    id: 'q_gov_3',
    moduleId: 'anph111_week1',
    type: 'enumeration',
    difficulty: 'medium',
    category: 'Room Governance',
    question: 'Enumerate 4 prohibited behaviors with zero-tolerance policy inside the laboratory.',
    enumerationCount: 4,
    keywords: ['eating', 'drinking', 'horseplay', 'social media', 'unattended', 'running'],
    correctItems: [
      '1. Eating or drinking beverages',
      '2. Horseplay, running, pushing, or practical jokes',
      '3. Using mobile phones for social media, TikTok, or gaming',
      '4. Leaving active experiments or burners unattended'
    ],
    socraticClue: 'Think of common dangerous student distractions and non-academic behaviors.',
    modelAnswer: '1. Eating / Drinking\n2. Horseplay & Running\n3. Social Media / TikTok / Distractions\n4. Unattended Burners / Heating apparatus',
    rubricGuide: '1 point per valid prohibited behavior.'
  },
  {
    id: 'q_gov_4',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Room Governance',
    question: 'What is the primary role of Laboratory Technicians in institutional laboratory governance?',
    options: [
      'Grading practical examinations and giving lectures',
      'Safeguarding chemical inventory, tracking asset custody, and dispensing equipment from the stockroom',
      'Cleaning student laboratory coats after class',
      'Purchasing textbooks for students'
    ],
    correctIndex: 1,
    socraticClue: 'Differentiate between academic instruction (faculty) and asset/chemical inventory management (technicians).',
    modelAnswer: 'Laboratory Technicians safeguard assets, manage hazardous stockrooms, and log equipment checkouts.',
    rubricGuide: 'Correctly identifies technician duties.'
  },
  {
    id: 'q_gov_5',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'hard',
    category: 'Room Governance',
    question: 'What institutional policy applies if a student arrives at the laboratory without their safety goggles and lab coat?',
    options: [
      'They may observe from the back while eating lunch',
      'Strict "No Full PPE? No Experiment." policy: The student is barred from participating in the hands-on lab',
      'They can borrow a classmate’s jacket as a replacement',
      'They receive an automatic pass if they promise to be careful'
    ],
    correctIndex: 1,
    socraticClue: 'Faculty are legally mandated to enforce zero tolerance for incomplete PPE to prevent institutional injury liability.',
    modelAnswer: 'Faculty must enforce "No Full PPE? No Experiment." Incomplete PPE results in immediate barring from the session.',
    rubricGuide: 'Emphasizes mandatory PPE enforcement.'
  },
  {
    id: 'q_gov_6',
    moduleId: 'anph111_week1',
    type: 'essay',
    difficulty: 'practical',
    category: 'Room Governance',
    question: 'Discuss why social media recording, vlogging, or taking selfies inside the anatomical dissection laboratory violates bioethics and safety protocols.',
    keywords: ['patient dignity', 'bioethics', 'distraction', 'cross-contamination', 'cadaver'],
    socraticClue: 'Consider both physical distraction/glove contamination and ethical respect for donor human cadaveric specimens.',
    modelAnswer: 'Using smartphones for vlogging or social media violates two core pillars: 1) Physical Safety: Handling phones with contaminated gloves spreads hazardous chemicals to mobile screens, while diverting visual attention from scalpel blades and hot apparatus. 2) Bioethics & Human Dignity: Anatomical specimens and donor cadavers represent human beings who bequeathed their bodies for medical science. Photographing specimens for social entertainment is a grave breach of professional bioethics, patient confidentiality, and human dignity.',
    rubricGuide: 'Full credit (5 pts) for addressing both physical cross-contamination/distraction and bioethical respect for donor cadavers.'
  },

  // ==========================================
  // CATEGORY 4: BORROWING & STOCKROOM SYSTEMS (Q56 - Q70)
  // ==========================================
  {
    id: 'q_bor_1',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Borrowing Protocols',
    question: 'From which authorized dispensing locations may students check out compound microscopes and glassware?',
    options: [
      'Directly from any vacant laboratory shelf',
      'From Laboratory Technicians at the official Stockroom or Microscope Room',
      'From senior students in the hallway',
      'From the university security desk'
    ],
    correctIndex: 1,
    socraticClue: 'Centralized asset tracking requires all items to pass through authorized technician inventory checkouts.',
    modelAnswer: 'Materials are checked out exclusively from Laboratory Technicians at the Stockroom or Microscope Room.',
    rubricGuide: 'Identifies authorized stockroom locations.'
  },
  {
    id: 'q_bor_2',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Borrowing Protocols',
    question: 'What mandatory document must a student present to the laboratory technician when borrowing apparatus?',
    options: ['Birth certificate', 'Validated School ID or Official Registration Card', 'Classmate’s promissory note', 'Library card'],
    correctIndex: 1,
    socraticClue: 'Identification is required to formally bind custody of institutional assets to the borrower.',
    modelAnswer: 'A validated School ID or Official Registration Form is mandatory for equipment checkout.',
    rubricGuide: 'Identifies validated ID requirement.'
  },
  {
    id: 'q_bor_3',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Borrowing Protocols',
    question: 'Who bears primary accountability for the physical condition and complete return of borrowed equipment during bench group work?',
    options: [
      'The university janitorial staff',
      'The group borrower and designated group leader who signed out the equipment',
      'The laboratory manufacturer',
      'Only the student who accidentally drops an item'
    ],
    correctIndex: 1,
    socraticClue: 'Custody logs legally hold the signing borrower and team leadership responsible until items are formally checked in.',
    modelAnswer: 'The designated group leader and borrower who signed the receipt bear custody accountability.',
    rubricGuide: 'Understands group borrower accountability.'
  },
  {
    id: 'q_bor_4',
    moduleId: 'anph111_week1',
    type: 'enumeration',
    difficulty: 'medium',
    category: 'Borrowing Protocols',
    question: 'Enumerate the 3 key steps in the centralized equipment borrowing workflow.',
    enumerationCount: 3,
    keywords: ['id', 'stockroom', 'technician', 'inspect', 'log'],
    correctItems: [
      '1. Present valid School ID / Registration Card to technician',
      '2. Receive logged equipment and inspect immediately for pre-existing cracks/defects',
      '3. Sign the official checkout custody sheet'
    ],
    socraticClue: 'What happens from presentation of ID to taking the equipment to your bench?',
    modelAnswer: '1. Present Valid ID\n2. Inspect equipment immediately upon receipt\n3. Sign custody log sheet',
    rubricGuide: '1 point per accurate workflow step.'
  },

  // ==========================================
  // CATEGORY 5: INSPECTION & RETURN-READY CLEANING (Q71 - Q85)
  // ==========================================
  {
    id: 'q_insp_1',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Inspection & Cleaning',
    question: 'When should a student inspect borrowed glassware and microscope optical lenses for defects?',
    options: [
      'Only after the experiment is finished and washed',
      'Immediately upon receipt at the stockroom before adding reagents or applying heat',
      'Only if the beaker begins leaking chemical fluid',
      'At the end of the semester during final exam'
    ],
    correctIndex: 1,
    socraticClue: 'Pre-use inspection ensures that existing cracks are documented so the student is not held liable for pre-existing damage, and prevents catastrophic thermal breakage.',
    modelAnswer: 'Glassware must be inspected immediately upon receipt before applying heat or chemical reagents.',
    rubricGuide: 'Emphasizes pre-use inspection.'
  },
  {
    id: 'q_insp_2',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Inspection & Cleaning',
    question: 'Why is heating a beaker or Erlenmeyer flask with a microscopic hairline crack extremely hazardous?',
    options: [
      'It takes longer for water to boil',
      'Thermal stress will cause the crack to propagate catastrophically, shattering boiling reagents across the bench',
      'It changes the color of the chemical solution',
      'It creates an unpleasant whistling sound'
    ],
    correctIndex: 1,
    socraticClue: 'Thermal expansion concentrates tensile stress along fissure lines in Pyrex/borosilicate glass, leading to violent explosive fracture.',
    modelAnswer: 'Thermal expansion along hairline cracks causes violent shattering and spraying of boiling hazardous liquids.',
    rubricGuide: 'Explains thermal stress failure in compromised glass.'
  },
  {
    id: 'q_insp_3',
    moduleId: 'anph111_week1',
    type: 'enumeration',
    difficulty: 'hard',
    category: 'Inspection & Cleaning',
    question: 'Enumerate the 4 requirements of the "Return-Ready" standard for laboratory glassware.',
    enumerationCount: 4,
    keywords: ['detergent', 'distilled', 'dry', 'complete', 'rinse'],
    correctItems: [
      '1. Wash thoroughly with designated laboratory detergent',
      '2. Rinse completely with distilled water to remove mineral residue',
      '3. Dry completely inside and out (no residual water droplets)',
      '4. Return all pieces promptly and in orderly sets to the stockroom'
    ],
    socraticClue: 'How must glassware be washed, rinsed, dried, and returned to be accepted by technicians?',
    modelAnswer: '1. Washed with lab detergent\n2. Rinsed with distilled water\n3. Completely dried\n4. Returned in complete sets without delay',
    rubricGuide: '1 point per return-ready specification.'
  },
  {
    id: 'q_insp_4',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Inspection & Cleaning',
    question: 'What is the required procedure for benchtop decontamination following an anatomical dissection?',
    options: [
      'Wipe with dry paper towels only',
      'Spray and thoroughly wipe down the bench with 70% isopropyl alcohol disinfectant',
      'Leave bench wet with soapy tap water',
      'No cleaning needed if no visible blood was spilled'
    ],
    correctIndex: 1,
    socraticClue: '70% alcohol denatures microbial cell walls and evaporates cleanly without leaving residue.',
    modelAnswer: 'Benches must be decontaminated with 70% isopropyl alcohol disinfectant.',
    rubricGuide: 'Identifies 70% alcohol bench decontamination.'
  },
  {
    id: 'q_insp_5',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'hard',
    category: 'Inspection & Cleaning',
    question: 'How much advance notice must faculty submit when requesting laboratory rooms for scheduled experiments?',
    options: ['30 minutes', 'At least 2 days prior to scheduled laboratory use', '1 month', 'No notice required'],
    correctIndex: 1,
    socraticClue: 'Stockrooms need time to prepare reagent aliquots, inspect microscopes, and allocate space.',
    modelAnswer: 'Faculty must submit official Laboratory Request Forms at least 2 days prior to session.',
    rubricGuide: 'Identifies 2-day faculty advance request rule.'
  },

  // ==========================================
  // CATEGORY 6: EMERGENCY FIRST AID & MAKE-UP PROTOCOLS (Q86 - Q100+)
  // ==========================================
  {
    id: 'q_emg_1',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Emergency Protocols',
    question: 'What is the mandatory minimum flushing duration at the Emergency Eyewash Station following a chemical splash to the eyes?',
    options: ['1 to 2 minutes', '5 minutes', 'At least 15 continuous minutes', '30 seconds with soap'],
    correctIndex: 2,
    socraticClue: 'Chemical neutralization in the conjunctival sac requires sustained continuous dilution to prevent corneal liquefaction necrosis.',
    modelAnswer: 'Eyes must be flushed continuously for at least 15 minutes holding eyelids wide open.',
    rubricGuide: 'Identifies 15-minute continuous flushing protocol.'
  },
  {
    id: 'q_emg_2',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Emergency Protocols',
    question: 'What is the "Strict Non-Concealment Rule" when laboratory glassware or equipment is broken?',
    options: [
      'Students may hide broken glass in their bags to avoid paying replacement costs',
      'Never hide, secretly discard, or attempt to use cracked apparatus; immediately alert the faculty and technician',
      'Throw broken glass into regular cardboard paper recycling bins',
      'Glue the broken glass back together before class ends'
    ],
    correctIndex: 1,
    socraticClue: 'Hiding broken glass exposes subsequent students and custodial staff to severe puncture wounds and chemical contamination.',
    modelAnswer: 'Non-concealment mandates immediate transparent reporting of all breakages to prevent injury to others.',
    rubricGuide: 'Emphasizes immediate reporting of broken apparatus.'
  },
  {
    id: 'q_emg_3',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Emergency Protocols',
    question: 'What immediate first aid must be administered for a thermal burn caused by touching a hot beaker?',
    options: [
      'Apply ice cubes or frozen meat directly onto the burn',
      'Run cool, clean tap water gently over the affected skin area and report to the instructor',
      'Rub butter, toothpaste, or oil over the blistered skin',
      'Puncture the blister with a dissection needle'
    ],
    correctIndex: 1,
    socraticClue: 'Cool running water dissipates thermal energy from deeper dermis. Ice causes vasoconstrictive tissue ischemia, and butter traps heat.',
    modelAnswer: 'Run cool clean water over thermal burns. Avoid ice, butter, or puncture.',
    rubricGuide: 'Understands thermal burn first aid.'
  },
  {
    id: 'q_emg_4',
    moduleId: 'anph111_week1',
    type: 'enumeration',
    difficulty: 'hard',
    category: 'Institutional Protocols',
    question: 'Enumerate the 4 mandatory requirements for scheduling a make-up laboratory experiment.',
    enumerationCount: 4,
    keywords: ['1 week', 'advance', 'itinerary', 'professor', 'dean', 'supervised'],
    correctItems: [
      '1. Submit official request letter at least 1 week in advance',
      '2. Provide a detailed itinerary of date, time, reagents, and experiment title',
      '3. Obtain dual written approval signatures from Subject Professor AND College Dean',
      '4. Conduct session solely under authorized faculty/technician supervision'
    ],
    socraticClue: 'Think about: lead time, letter details, two required administrative approvals, and supervision.',
    modelAnswer: '1. 1-week advance notice letter\n2. Detailed experiment itinerary\n3. Dual signature: Professor AND College Dean\n4. Supervised by authorized faculty/technician',
    rubricGuide: '1 point per make-up requirement (max 4 pts).'
  },
  {
    id: 'q_emg_5',
    moduleId: 'anph111_week1',
    type: 'essay',
    difficulty: 'practical',
    category: 'Emergency Protocols',
    question: 'A classmate splashes concentrated sulfuric acid over her laboratory gown, hands, and facial area. Detail the exact immediate chronological emergency actions you must execute as a first responder.',
    keywords: ['safety shower', 'eyewash', 'notify instructor', 'remove clothing', '15 minutes'],
    socraticClue: 'Immediate decontamination precedes paperwork. What emergency plumbing fixture must be activated simultaneously with clothing removal?',
    modelAnswer: '1. Immediately shout and notify the instructor and laboratory technician. 2. Instantly escort the student to the Emergency Safety Shower and Eyewash Station. 3. Activate the safety shower and assist in immediately stripping off all contaminated clothing and lab coat under the deluge of water to prevent acid from being held against skin. 4. Hold eyelids wide open under the eyewash stream for a minimum of 15 continuous minutes. 5. Notify campus emergency medical services and file a formal incident report.',
    rubricGuide: 'Full credit (5 pts) for: Immediate notification -> Safety shower activation -> Clothing removal -> 15-minute continuous irrigation -> Medical escalation.'
  },
  {
    id: 'q_emg_6',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Emergency Protocols',
    question: 'When a chemical spill saturates a student\'s clothing, what is the primary purpose of the Emergency Safety Shower?',
    options: [
      'To provide a refreshing rinse after class',
      'To rapidly dilute and flush high volumes of hazardous chemicals while contaminated clothing is removed',
      'To test water pressure in the building',
      'To wash glassware quickly'
    ],
    correctIndex: 1,
    socraticClue: 'Safety showers deliver massive continuous water volume to wash away caustic acids before deep chemical burns occur.',
    modelAnswer: 'Safety showers deliver high-volume water deluge to dilute and rinse corrosive chemical spills.',
    rubricGuide: 'Identifies emergency shower function.'
  },
  {
    id: 'q_emg_7',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Emergency Protocols',
    question: 'If a student accidentally drops and breaks a Pyrex graduated cylinder, how should the broken glass shards be safely gathered and discarded?',
    options: [
      'Pick up shards with bare hands and throw in the plastic wastebasket',
      'Alert faculty/technician, sweep using mechanical brush and dustpan (or forceps/tongs), and dispose into a dedicated Puncture-Resistant Sharps Container',
      'Kick the glass shards under the laboratory bench',
      'Wrap shards in notebook paper and place in personal bag'
    ],
    correctIndex: 1,
    socraticClue: 'Never use bare hands. Always use mechanical tools and deposit in rigid puncture-proof sharps receptacles.',
    modelAnswer: 'Use mechanical forceps/brush and deposit broken glass in dedicated sharps containers.',
    rubricGuide: 'Describes safe broken glass collection.'
  },
  {
    id: 'q_emg_8',
    moduleId: 'anph111_week1',
    type: 'multiple_choice',
    difficulty: 'hard',
    category: 'Institutional Protocols',
    question: 'What are the 3 non-negotiable pillars of institutional laboratory compliance?',
    options: [
      'Fast + Cheap + Convenient',
      'SCHEDULED & APPROVED + SUPERVISED & FULL PPE + CLEAN & ACCOUNTED FOR',
      'Optional + Casual + Independent',
      'Theoretical + Unmonitored + Virtual'
    ],
    correctIndex: 1,
    socraticClue: 'Recall the 3 compliance pillars: authorization, personal protection with supervision, and return-ready asset accountability.',
    modelAnswer: '1. Scheduled & Approved\n2. Supervised & Full PPE\n3. Clean & Accounted For',
    rubricGuide: 'Identifies 3 pillars of compliance.'
  }
];
