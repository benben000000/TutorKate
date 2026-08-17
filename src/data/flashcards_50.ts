import { Flashcard } from '../types';

export const FLASHCARDS_50: Flashcard[] = [
  // HAZARDS & STATISTICS
  {
    id: 'fc_1',
    moduleId: 'anph111_week1',
    category: 'Safety Hazards',
    front: 'What percentage of reported laboratory injuries correlate directly with absent or improper PPE?',
    back: 'Over 60% of all reported laboratory injuries across health science institutions.',
    keyRule: '60%+ Injury Correlation with Compromised PPE'
  },
  {
    id: 'fc_2',
    moduleId: 'anph111_week1',
    category: 'Safety Hazards',
    front: 'What are the 4 major hazard categories present in Anatomy and Physiology laboratories?',
    back: '1. Chemical Spills (Formalin, stains, acids)\n2. Biological Agents (Tissues, cadavers, smears)\n3. Sharp Objects (Scalpels, slides, cover slips)\n4. Heat & Electrical Hazards (Hot plates, autoclaves, wiring)',
    keyRule: '4 Major Hazard Categories'
  },
  {
    id: 'fc_3',
    moduleId: 'anph111_week1',
    category: 'Safety Hazards',
    front: 'What is the primary physiological risk of unbuffered Formalin / Formaldehyde skin exposure?',
    back: 'Tissue protein fixation, chemical burns, severe contact sensitization dermatitis, and mucous membrane irritation.',
    keyRule: 'Formalin Protein Cross-Linking Hazard'
  },
  {
    id: 'fc_4',
    moduleId: 'anph111_week1',
    category: 'Safety Hazards',
    front: 'Why are open or unbuttoned laboratory coats hazardous near Bunsen burners or hot plates?',
    back: 'Flapping fabric creates a mechanical sail that can easily sweep over glassware or ignite upon contact with open flames.',
    keyRule: 'Mandatory Complete Lab Coat Fastening'
  },
  {
    id: 'fc_5',
    moduleId: 'anph111_week1',
    category: 'Safety Hazards',
    front: 'How must biological waste generated during animal organ dissections be segregated?',
    back: 'Exclusively deposited into designated Yellow Biohazard Waste Bins (never in general plastic trash).',
    keyRule: 'Yellow Biohazard Waste Segregation'
  },

  // PPE SELECTION & MATERIAL SCIENCE
  {
    id: 'fc_6',
    moduleId: 'anph111_week1',
    category: 'PPE Standards',
    front: 'Why are synthetic Nitrile gloves preferred over Natural Rubber Latex in healthcare labs?',
    back: 'Nitrile offers superior chemical and puncture resistance without triggering Type I (IgE anaphylactic) or Type IV (allergic contact dermatitis) latex reactions.',
    keyRule: 'Nitrile Chemical & Hypoallergenic Superiority'
  },
  {
    id: 'fc_7',
    moduleId: 'anph111_week1',
    category: 'PPE Standards',
    front: 'What are the 4 mandatory rules for wearing a laboratory gown/coat in ANPH111?',
    back: '1. Appropriate task-rated material\n2. Fastened/buttoned completely from throat to bottom\n3. Sleeves secured down at wrists under gloves\n4. Doffed immediately before exiting the lab',
    keyRule: '4 Mandatory Lab Coat Rules'
  },
  {
    id: 'fc_8',
    moduleId: 'anph111_week1',
    category: 'PPE Standards',
    front: 'Can a full face shield replace sealed safety goggles during liquid chemical handling?',
    back: 'No. Face shields protect against secondary impact/large splashes but lack an orbital eye seal. Face shields must be worn OVER sealed safety goggles.',
    keyRule: 'Face Shield Supplements, Never Replaces Goggles'
  },
  {
    id: 'fc_9',
    moduleId: 'anph111_week1',
    category: 'PPE Routine',
    front: 'What is the 4-step operational routine for PPE lifecycle management?',
    back: '1. INSPECT (check tears/expiry)\n2. DON & DOFF (aseptic order)\n3. CLEAN & STORE (sanitize reusables)\n4. DISPOSE (yellow biohazard stream)',
    keyRule: 'Inspect -> Don & Doff -> Clean & Store -> Dispose'
  },
  {
    id: 'fc_10',
    moduleId: 'anph111_week1',
    category: 'PPE Standards',
    front: 'What is the correct sequence for DOFFING (removing) PPE to avoid personal contamination?',
    back: '1. Gloves first (most contaminated)\n2. Goggles / Face Shield\n3. Laboratory Coat / Gown\n4. Protective Mask last',
    keyRule: 'Doffing: Gloves -> Goggles -> Gown -> Mask'
  },
  {
    id: 'fc_11',
    moduleId: 'anph111_week1',
    category: 'PPE Standards',
    front: 'What is the "Golden Rule of Glove Discipline"?',
    back: 'Never touch personal devices (smartphones), door knobs, switches, writing pens, or facial skin while wearing contaminated gloves.',
    keyRule: 'Zero Glove Cross-Contamination'
  },
  {
    id: 'fc_12',
    moduleId: 'anph111_week1',
    category: 'PPE Standards',
    front: 'Differentiate between a surgical mask and an N95 respirator in laboratory safety.',
    back: 'Surgical masks are loose-fitting fluid droplet catchers; N95 respirators are fit-tested, tightly sealed filtration devices designed to block fine airborne aerosols and pathogens.',
    keyRule: 'Surgical Droplet Catch vs N95 Aerosol Seal'
  },

  // ROOM GOVERNANCE & PROHIBITED BEHAVIORS
  {
    id: 'fc_13',
    moduleId: 'anph111_week1',
    category: 'Room Protocols',
    front: 'What is the Scheduled-Only Access Policy for laboratory rooms?',
    back: 'Laboratories are opened strictly according to official academic timetables under faculty/technician supervision. Unscheduled or recreational entry is barred.',
    keyRule: 'Strict Scheduled Access Only'
  },
  {
    id: 'fc_14',
    moduleId: 'anph111_week1',
    category: 'Room Protocols',
    front: 'Why is eating or drinking strictly banned with zero tolerance in the laboratory?',
    back: 'Chemical vapors, aerosolized residues, and glove pathogens contaminate food/drink, leading to accidental lethal chemical ingestion.',
    keyRule: 'Zero Tolerance Food & Drink Ingestion Hazard'
  },
  {
    id: 'fc_15',
    moduleId: 'anph111_week1',
    category: 'Room Protocols',
    front: 'What is the tripartite division of institutional roles in laboratory safety?',
    back: '1. Technicians: Safeguard inventory & dispense apparatus\n2. Faculty: Coordinate rooms, enforce safety & supervise\n3. Students: Follow rules, wear full PPE & maintain accountability',
    keyRule: 'Tripartite: Technicians, Faculty, Students'
  },
  {
    id: 'fc_16',
    moduleId: 'anph111_week1',
    category: 'Room Protocols',
    front: 'What is the institutional policy if a student arrives at the lab missing even one PPE item?',
    back: '"No Full PPE? No Experiment." The student is strictly prohibited from participating in hands-on work.',
    keyRule: 'No Full PPE? No Experiment.'
  },

  // BORROWING & STOCKROOM SYSTEMS
  {
    id: 'fc_17',
    moduleId: 'anph111_week1',
    category: 'Borrowing Protocols',
    front: 'Where are laboratory apparatus, microscopes, and glassware borrowed from?',
    back: 'Exclusively from authorized Laboratory Technicians at the Stockroom or Microscope Room.',
    keyRule: 'Centralized Stockroom Dispensing'
  },
  {
    id: 'fc_18',
    moduleId: 'anph111_week1',
    category: 'Borrowing Protocols',
    front: 'What document is mandatory for checking out laboratory equipment?',
    back: 'Validated School ID or Official Registration Card.',
    keyRule: 'Validated ID Required for Custody'
  },
  {
    id: 'fc_19',
    moduleId: 'anph111_week1',
    category: 'Borrowing Protocols',
    front: 'Who holds legal and academic custody accountability for borrowed group equipment?',
    back: 'The student borrower and the designated group leader who signed the official checkout log sheet.',
    keyRule: 'Borrower & Group Leader Custody'
  },

  // INSPECTION & RETURN-READY CLEANING
  {
    id: 'fc_20',
    moduleId: 'anph111_week1',
    category: 'Inspection & Cleaning',
    front: 'When must a student inspect glassware and microscope lenses for defects?',
    back: 'Immediately upon receiving the apparatus at the stockroom before adding reagents or applying heat.',
    keyRule: 'Mandatory Pre-Use Defect Inspection'
  },
  {
    id: 'fc_21',
    moduleId: 'anph111_week1',
    category: 'Inspection & Cleaning',
    front: 'What happens if a student heats a Pyrex flask with a microscopic hairline crack?',
    back: 'Thermal expansion stress will propagate the fissure catastrophically, shattering boiling caustic reagents across the bench.',
    keyRule: 'Thermal Fissure Catastrophic Propagation'
  },
  {
    id: 'fc_22',
    moduleId: 'anph111_week1',
    category: 'Inspection & Cleaning',
    front: 'What are the 4 requirements of the "Return-Ready" glassware standard?',
    back: '1. Wash with lab detergent\n2. Rinse thoroughly with distilled water\n3. Dry completely inside and out\n4. Return promptly in complete orderly sets',
    keyRule: 'Return-Ready: Detergent, Distilled Rinse, Dry, Prompt'
  },
  {
    id: 'fc_23',
    moduleId: 'anph111_week1',
    category: 'Inspection & Cleaning',
    front: 'What disinfectant is required for benchtop decontamination following an experiment?',
    back: '70% Isopropyl Alcohol disinfectant spray wiped thoroughly across the entire working surface.',
    keyRule: '70% Alcohol Bench Decontamination'
  },
  {
    id: 'fc_24',
    moduleId: 'anph111_week1',
    category: 'Inspection & Cleaning',
    front: 'How much advance notice must faculty submit when requesting laboratory rooms?',
    back: 'Official Laboratory Request Form submitted at least 2 days prior to scheduled laboratory use.',
    keyRule: '2-Day Faculty Advance Room Request'
  },

  // EMERGENCY RESPONSE & PROTOCOLS
  {
    id: 'fc_25',
    moduleId: 'anph111_week1',
    category: 'Emergency Response',
    front: 'What is the mandatory protocol for chemical splash into the eyes?',
    back: 'Notify instructor immediately, flush continuously at the Emergency Eyewash Station for at least 15 continuous minutes while holding eyelids open.',
    keyRule: '15 Continuous Minutes Eye Irrigation'
  },
  {
    id: 'fc_26',
    moduleId: 'anph111_week1',
    category: 'Emergency Response',
    front: 'What is the "Strict Non-Concealment Rule" for broken or chipped apparatus?',
    back: 'Never hide, secretly discard, or attempt to use cracked apparatus. Immediately alert faculty and technicians for proper sharps disposal.',
    keyRule: 'Strict Non-Concealment of Breakages'
  },
  {
    id: 'fc_27',
    moduleId: 'anph111_week1',
    category: 'Emergency Response',
    front: 'What is the immediate first aid protocol for thermal contact burns?',
    back: 'Gently run cool, clean tap water over the affected skin area (never apply ice, butter, or puncture blisters) and alert the instructor.',
    keyRule: 'Cool Water Thermal Dissipation'
  },
  {
    id: 'fc_28',
    moduleId: 'anph111_week1',
    category: 'Emergency Response',
    front: 'What action is required when a large chemical spill drenches a student\'s clothing?',
    back: 'Instantly escort student to Emergency Safety Shower, pull the deluge lever, and strip off contaminated clothing and lab coat while washing.',
    keyRule: 'Immediate Safety Shower & Clothing Deluge'
  },
  {
    id: 'fc_29',
    moduleId: 'anph111_week1',
    category: 'Institutional Protocols',
    front: 'What are the 4 requirements for scheduling a make-up laboratory experiment?',
    back: '1. 1-week advance official letter\n2. Detailed experiment itinerary\n3. Dual written signatures from Professor AND College Dean\n4. Supervised execution',
    keyRule: '1-Week Letter + Professor & Dean Signatures'
  },
  {
    id: 'fc_30',
    moduleId: 'anph111_week1',
    category: 'Institutional Protocols',
    front: 'What are the 3 Pillars of Laboratory Compliance in ANPH111?',
    back: '1. SCHEDULED + APPROVED\n2. SUPERVISED + FULL PPE\n3. CLEAN + ACCOUNTED FOR',
    keyRule: 'Scheduled -> Supervised PPE -> Clean Accounted'
  }
];
