import { ComprehensiveQuizQuestion } from '../types';

export const HUMAN_BODY_QUESTION_BANK: ComprehensiveQuizQuestion[] = [
  // =========================================================================
  // PART 1 QUIZ (ITEMS 1 - 10): FOUNDATIONS, 6 LEVELS, 11 SYSTEMS, 6 CHARACTERISTICS
  // =========================================================================
  {
    id: 'hb_p1_q1',
    moduleId: 'anph111_week1_human_body',
    partNumber: 1,
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Anatomy & Physiology Foundations',
    question: 'The word "anatomy" is derived from Greek root words that literally mean which of the following?',
    options: [
      'To observe the functions of living organs',
      'To dissect, or cut apart and separate body parts for study',
      'To chemically analyze microscopic fluids',
      'To diagnose and treat systemic clinical diseases'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: To dissect, or cut apart and separate body parts for study.',
    rubricGuide: 'Identifies the historical etymological definition of anatomy (dissection).',
    socraticClue: 'Recall the literal translation from Greek regarding the physical method anatomists historically used to separate and investigate body structures.'
  },
  {
    id: 'hb_p1_q2',
    moduleId: 'anph111_week1_human_body',
    partNumber: 1,
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Anatomical Approaches',
    question: 'A nurse examines a patient by palpating external surface landmarks, such as the radial pulse at the wrist and the mastoid process behind the ear. Which approach to anatomy is being practiced?',
    options: [
      'Regional Anatomy',
      'Surface Anatomy',
      'Systemic Anatomy',
      'Cellular Physiology'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Surface Anatomy.',
    rubricGuide: 'Distinguishes Surface Anatomy (external palpable features) from Regional, Systemic, and Imaging approaches.',
    socraticClue: 'Consider which anatomical approach specifically deals with examining the exterior body contours and superficial landmarks without cutting into the body.'
  },
  {
    id: 'hb_p1_q3',
    moduleId: 'anph111_week1_human_body',
    partNumber: 1,
    type: 'diagram_label',
    difficulty: 'medium',
    category: 'Structural Levels of Organization',
    question: 'Examine the structural hierarchy diagram below. Identify the 6 levels of organization in ascending order from simplest to most complex.',
    diagramUrl: '/images/human_body/fig1_1_levels_of_organization.png',
    diagramTitle: 'Figure 1.1: Six Structural Levels of Organization in the Human Body',
    diagramLabels: [
      { id: 'dl_p1_1', labelNumber: 1, targetName: 'Level 1 (Atoms & Molecules)', correctAnswer: 'Chemical Level', options: ['Chemical Level', 'Cell Level', 'Tissue Level', 'Organ Level'] },
      { id: 'dl_p1_2', labelNumber: 2, targetName: 'Level 2 (Basic structural & functional unit)', correctAnswer: 'Cell Level', options: ['Cell Level', 'Organelle Level', 'Tissue Level', 'Chemical Level'] },
      { id: 'dl_p1_3', labelNumber: 3, targetName: 'Level 3 (Group of similar cells)', correctAnswer: 'Tissue Level', options: ['Tissue Level', 'Organ Level', 'Cell Level', 'System Level'] },
      { id: 'dl_p1_4', labelNumber: 4, targetName: 'Level 4 (Two or more tissues performing a function)', correctAnswer: 'Organ Level', options: ['Organ Level', 'Organ System Level', 'Tissue Level', 'Organism Level'] },
      { id: 'dl_p1_5', labelNumber: 5, targetName: 'Level 5 (Coordinated group of organs)', correctAnswer: 'Organ System Level', options: ['Organ System Level', 'Organ Level', 'Organism Level', 'Tissue Level'] },
      { id: 'dl_p1_6', labelNumber: 6, targetName: 'Level 6 (The living being as an integrated whole)', correctAnswer: 'Organism Level', options: ['Organism Level', 'Organ System Level', 'Population Level', 'Biome Level'] }
    ],
    modelAnswer: '1. Chemical Level, 2. Cell Level, 3. Tissue Level, 4. Organ Level, 5. Organ System Level, 6. Organism Level.',
    rubricGuide: 'Must arrange the 6 structural levels in strict ascending hierarchical order.',
    socraticClue: 'Start from subatomic/molecular interactions, progress to the fundamental unit of life, then groups of similar cells, combined tissues forming functional structures, groups of organs, and finally the complete living being.'
  },
  {
    id: 'hb_p1_q4',
    moduleId: 'anph111_week1_human_body',
    partNumber: 1,
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Tissue Classification',
    question: 'The stomach contains an inner lining that secretes hydrochloric acid, a connective tissue layer with blood vessels, smooth muscle layers for churning, and autonomic nerve fibers. Because it contains two or more tissue types working together, the stomach is classified at which level of organization?',
    options: [
      'Tissue Level',
      'Organ Level',
      'Organ System Level',
      'Chemical Level'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Organ Level.',
    rubricGuide: 'Applies the definition of an organ (two or more distinct tissue types collaborating for specific functions).',
    socraticClue: 'When multiple tissue types (epithelial, connective, muscular, nervous) unite to form a discrete macroscopic structure with specialized tasks, what structural level is achieved?'
  },
  {
    id: 'hb_p1_q5',
    moduleId: 'anph111_week1_human_body',
    partNumber: 1,
    type: 'enumeration',
    difficulty: 'medium',
    category: 'Tissue Types',
    question: 'Enumerate the FOUR primary tissue types found in the human body.',
    enumerationCount: 4,
    correctItems: [
      'Epithelial Tissue',
      'Connective Tissue',
      'Muscle Tissue (Muscular Tissue)',
      'Nervous Tissue (Neural Tissue)'
    ],
    modelAnswer: '1. Epithelial Tissue, 2. Connective Tissue, 3. Muscle Tissue, 4. Nervous Tissue.',
    rubricGuide: 'Full credit for naming all 4 fundamental tissue classes.',
    socraticClue: 'Think of the tissue that covers/lines, the tissue that supports/binds, the tissue that contracts, and the tissue that conducts electrical impulses.'
  },
  {
    id: 'hb_p1_q6',
    moduleId: 'anph111_week1_human_body',
    partNumber: 1,
    type: 'diagram_label',
    difficulty: 'hard',
    category: 'Organ Systems Identification',
    question: 'Match each organ system illustration with its primary components and physiological role.',
    diagramUrl: '/images/human_body/fig1_3a_organ_systems_1.png',
    diagramTitle: 'Figure 1.3A: Major Body Organ Systems',
    diagramLabels: [
      { id: 'dl_p1_7', labelNumber: 'A', targetName: 'Skin, hair, nails, sweat glands', correctAnswer: 'Integumentary System', options: ['Integumentary System', 'Skeletal System', 'Muscular System', 'Nervous System'] },
      { id: 'dl_p1_8', labelNumber: 'B', targetName: 'Bones, cartilages, joints, ligaments', correctAnswer: 'Skeletal System', options: ['Skeletal System', 'Muscular System', 'Integumentary System', 'Cardiovascular System'] },
      { id: 'dl_p1_9', labelNumber: 'C', targetName: 'Muscles and tendons that produce movement', correctAnswer: 'Muscular System', options: ['Muscular System', 'Skeletal System', 'Nervous System', 'Endocrine System'] }
    ],
    modelAnswer: 'A: Integumentary System, B: Skeletal System, C: Muscular System.',
    rubricGuide: 'Correctly matches anatomical organs to their corresponding organ system.',
    socraticClue: 'Look at the external skin covering (A), internal bony framework (B), and attached red contractile muscle bellies (C).'
  },
  {
    id: 'hb_p1_q7',
    moduleId: 'anph111_week1_human_body',
    partNumber: 1,
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Organ Systems Function',
    question: 'Which organ system consists of hormone-secreting glands (such as the pituitary, thyroid, and adrenals) and acts as a chemical regulatory system controlling metabolism, growth, and reproduction?',
    options: [
      'Nervous System',
      'Endocrine System',
      'Lymphatic System',
      'Integumentary System'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Endocrine System.',
    rubricGuide: 'Identifies the endocrine system as the hormonal regulatory system.',
    socraticClue: 'While the nervous system uses fast electrical impulses, which system uses chemical messengers released into the bloodstream called hormones?'
  },
  {
    id: 'hb_p1_q8',
    moduleId: 'anph111_week1_human_body',
    partNumber: 1,
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Characteristics of Life',
    question: 'During human embryonic development, unspecialized stem cells undergo changes in structure and biochemistry to become specialized osteocytes, neurons, and cardiac myocytes. This process is specifically known as which characteristic of life?',
    options: [
      'Catabolism',
      'Differentiation',
      'Responsiveness',
      'Hypertrophy'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Differentiation (a component of Development).',
    rubricGuide: 'Distinguishes qualitative differentiation from simple quantitative growth.',
    socraticClue: 'What term describes the transformation from a generalized cell into a specialized cell with distinct morphology and function?'
  },
  {
    id: 'hb_p1_q9',
    moduleId: 'anph111_week1_human_body',
    partNumber: 1,
    type: 'enumeration',
    difficulty: 'hard',
    category: 'Characteristics of Life',
    question: 'Enumerate the SIX essential characteristics of living organisms as described in Seeley’s Anatomy and Physiology.',
    enumerationCount: 6,
    correctItems: [
      'Organization',
      'Metabolism',
      'Responsiveness',
      'Growth',
      'Development (Differentiation)',
      'Reproduction'
    ],
    modelAnswer: '1. Organization, 2. Metabolism, 3. Responsiveness, 4. Growth, 5. Development, 6. Reproduction.',
    rubricGuide: 'Names all 6 vital characteristics of life.',
    socraticClue: 'Remember: Structure/interrelation, chemical reactions, reaction to stimuli, increase in size, specialization over time, and generation of new cells/organisms.'
  },
  {
    id: 'hb_p1_q10',
    moduleId: 'anph111_week1_human_body',
    partNumber: 1,
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Organ Systems Interrelation',
    question: 'The kidneys, ureters, urinary bladder, and urethra work together to eliminate nitrogenous metabolic wastes and regulate blood pressure, blood volume, and pH. Together, they constitute which organ system?',
    options: [
      'Digestive System',
      'Urinary System',
      'Lymphatic System',
      'Endocrine System'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Urinary System.',
    rubricGuide: 'Correctly identifies the organs and overarching functions of the urinary system.',
    socraticClue: 'Look at the primary organs mentioned: kidneys, bladder, and urethra.'
  },

  // =========================================================================
  // PART 2 QUIZ (ITEMS 11 - 20): HOMEOSTASIS, FEEDBACK LOOPS, ANATOMICAL POSITION & DIRECTIONS
  // =========================================================================
  {
    id: 'hb_p2_q1',
    moduleId: 'anph111_week1_human_body',
    partNumber: 2,
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Homeostasis Concepts',
    question: 'Homeostasis is best defined as which of the following?',
    options: [
      'A completely static and unchangeable physiological state',
      'The ability of the body to maintain a relatively constant internal environment despite fluctuations in the external environment',
      'The continuous acceleration of chemical reactions to produce maximum body heat',
      'The permanent suppression of all metabolic waste production'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: The ability of the body to maintain a relatively constant internal environment despite fluctuations.',
    rubricGuide: 'Defines homeostasis as dynamic equilibrium around normal physiological set points.',
    socraticClue: 'Remember the roots: homeo- (the same) and -stasis (standing still). It refers to maintaining equilibrium.'
  },
  {
    id: 'hb_p2_q2',
    moduleId: 'anph111_week1_human_body',
    partNumber: 2,
    type: 'enumeration',
    difficulty: 'medium',
    category: 'Feedback Loop Components',
    question: 'Enumerate the THREE essential components of every homeostatic feedback system (feedback loop).',
    enumerationCount: 3,
    correctItems: [
      'Receptor (Sensor)',
      'Control Center (Integrating Center)',
      'Effector'
    ],
    modelAnswer: '1. Receptor (Sensor), 2. Control Center, 3. Effector.',
    rubricGuide: 'Must list the 3 functional elements of a feedback loop in order of information flow.',
    socraticClue: 'Who detects the change, who compares it to the set point, and who carries out the physical response?'
  },
  {
    id: 'hb_p2_q3',
    moduleId: 'anph111_week1_human_body',
    partNumber: 2,
    type: 'multiple_choice',
    difficulty: 'hard',
    category: 'Negative vs Positive Feedback',
    question: 'When arterial blood pressure falls upon suddenly standing, baroreceptors in the carotid sinus signal the medulla oblongata, which increases sympathetic impulses to the heart to elevate heart rate and restore blood pressure to 120/80 mmHg. What type of feedback mechanism is operating?',
    options: [
      'Positive Feedback Mechanism',
      'Negative Feedback Mechanism',
      'Neutral Uncontrolled Loop',
      'Endocrine Cascade'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Negative Feedback Mechanism.',
    rubricGuide: 'Recognizes that reversing a deviation from the set point is the hallmark of negative feedback.',
    socraticClue: 'Did the response reverse the initial drop in blood pressure back toward the set point, or did it make blood pressure drop even lower?'
  },
  {
    id: 'hb_p2_q4',
    moduleId: 'anph111_week1_human_body',
    partNumber: 2,
    type: 'diagram_label',
    difficulty: 'medium',
    category: 'Homeostasis Diagram',
    question: 'Identify the components of homeostatic regulation shown in the diagram.',
    diagramUrl: '/images/human_body/fig1_4_homeostasis.png',
    diagramTitle: 'Figure 1.4: Homeostasis and Normal Range around a Set Point',
    diagramLabels: [
      { id: 'dl_p2_1', labelNumber: 1, targetName: 'Ideal physiological value (e.g. 37°C)', correctAnswer: 'Set Point', options: ['Set Point', 'Variable', 'Stimulus', 'Receptor'] },
      { id: 'dl_p2_2', labelNumber: 2, targetName: 'Acceptable upper and lower limits of fluctuation', correctAnswer: 'Normal Range', options: ['Normal Range', 'Critical Range', 'Extreme Limit', 'Dead Zone'] },
      { id: 'dl_p2_3', labelNumber: 3, targetName: 'Factor being measured and maintained (e.g. temperature)', correctAnswer: 'Variable', options: ['Variable', 'Effector', 'Control Center', 'Hormone'] }
    ],
    modelAnswer: '1. Set Point, 2. Normal Range, 3. Variable.',
    rubricGuide: 'Labels set point, normal range, and variable on the homeostasis diagram.',
    socraticClue: 'What is the target value called, what is the bracket of safe fluctuations called, and what is the changing parameter called?'
  },
  {
    id: 'hb_p2_q5',
    moduleId: 'anph111_week1_human_body',
    partNumber: 2,
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Positive Feedback',
    question: 'Which of the following physiological processes relies on a POSITIVE feedback mechanism rather than negative feedback?',
    options: [
      'Regulation of blood glucose by insulin and glucagon',
      'Thermoregulation of body temperature via sweating and shivering',
      'Uterine contractions during childbirth stimulated by oxytocin release',
      'Maintenance of blood pH via renal bicarbonate reabsorption'
    ],
    correctIndex: 2,
    modelAnswer: 'Option C: Uterine contractions during childbirth stimulated by oxytocin release.',
    rubricGuide: 'Identifies childbirth/parturition as the classic positive feedback example.',
    socraticClue: 'Look for the mechanism where the response amplifies the original stimulus until an external event (birth of the baby) terminates the cycle.'
  },
  {
    id: 'hb_p2_q6',
    moduleId: 'anph111_week1_human_body',
    partNumber: 2,
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Anatomical Position',
    question: 'In the standard anatomical position, how are the palms of the hands oriented?',
    options: [
      'Facing backward (pronated) toward the posterior side',
      'Facing forward (supinated) toward the anterior side with thumbs pointing outward',
      'Pressed flat against the lateral thighs with palms facing medially',
      'Crossed over the anterior chest'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Facing forward (supinated) toward the anterior side with thumbs pointing outward.',
    rubricGuide: 'Defines the essential stance of the upper limbs in anatomical position.',
    socraticClue: 'In anatomical position, the radius and ulna are parallel because the palms face which direction?'
  },
  {
    id: 'hb_p2_q7',
    moduleId: 'anph111_week1_human_body',
    partNumber: 2,
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Body Stances',
    question: 'A patient undergoing a dorsal spine surgery is placed lying face down on the operating table. Which term describes this reclining posture?',
    options: [
      'Supine Position',
      'Prone Position',
      'Anatomical Position',
      'Lateral Recumbent Position'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Prone Position.',
    rubricGuide: 'Differentiates prone (face down) from supine (face up).',
    socraticClue: 'Prone = face down; Supine = on the spine (face up).'
  },
  {
    id: 'hb_p2_q8',
    moduleId: 'anph111_week1_human_body',
    partNumber: 2,
    type: 'diagram_label',
    difficulty: 'hard',
    category: 'Directional Terminology',
    question: 'Using the directional terms diagram below, identify the correct anatomical relationships.',
    diagramUrl: '/images/human_body/fig1_5a_directional_terms_anterior.png',
    diagramTitle: 'Figure 1.5A: Directional Terms and Paired Opposites',
    diagramLabels: [
      { id: 'dl_p2_4', labelNumber: '1', targetName: 'Toward the head / upper body', correctAnswer: 'Superior', options: ['Superior', 'Inferior', 'Anterior', 'Posterior'] },
      { id: 'dl_p2_5', labelNumber: '2', targetName: 'Away from the head / lower body', correctAnswer: 'Inferior', options: ['Inferior', 'Superior', 'Medial', 'Lateral'] },
      { id: 'dl_p2_6', labelNumber: '3', targetName: 'Toward the front of the body', correctAnswer: 'Anterior (Ventral)', options: ['Anterior (Ventral)', 'Posterior (Dorsal)', 'Distal', 'Proximal'] },
      { id: 'dl_p2_7', labelNumber: '4', targetName: 'Toward the midline of the body', correctAnswer: 'Medial', options: ['Medial', 'Lateral', 'Proximal', 'Distal'] },
      { id: 'dl_p2_8', labelNumber: '5', targetName: 'Closer to point of limb attachment to trunk', correctAnswer: 'Proximal', options: ['Proximal', 'Distal', 'Superior', 'Superficial'] },
      { id: 'dl_p2_9', labelNumber: '6', targetName: 'Farther from point of limb attachment to trunk', correctAnswer: 'Distal', options: ['Distal', 'Proximal', 'Inferior', 'Deep'] }
    ],
    modelAnswer: '1. Superior, 2. Inferior, 3. Anterior (Ventral), 4. Medial, 5. Proximal, 6. Distal.',
    rubricGuide: 'Accurately defines paired directional terms.',
    socraticClue: 'Follow the arrows on the human figure: Up/Down, Front/Back, Midline/Side, Near Trunk/Far from Trunk.'
  },
  {
    id: 'hb_p2_q9',
    moduleId: 'anph111_week1_human_body',
    partNumber: 2,
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Directional Terms Application',
    question: 'The elbow is situated _______ to the wrist, while the fingers are located _______ to the wrist.',
    options: [
      'Distal; Proximal',
      'Proximal; Distal',
      'Medial; Lateral',
      'Superior; Superficial'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Proximal; Distal.',
    rubricGuide: 'Applies proximal (closer to shoulder attachment) and distal (farther from shoulder attachment) along the upper limb.',
    socraticClue: 'Which structure is closer to the shoulder joint (the point of origin of the upper limb)?'
  },
  {
    id: 'hb_p2_q10',
    moduleId: 'anph111_week1_human_body',
    partNumber: 2,
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Directional Terms Application',
    question: 'In anatomical description, the sternum (breastbone) is _______ to the heart, and the heart is _______ to the ribcage.',
    options: [
      'Posterior; Superficial',
      'Anterior; Deep',
      'Inferior; Superior',
      'Lateral; Medial'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Anterior; Deep.',
    rubricGuide: 'Applies anterior (in front of) and deep (internal to) to thoracic anatomy.',
    socraticClue: 'The breastbone lies in front of the heart, while the heart lies deeper inside the thoracic cavity than the ribs.'
  },

  // =========================================================================
  // PART 3 QUIZ (ITEMS 21 - 30): BODY REGIONS, QUADRANTS/9 REGIONS, PLANES & CAVITIES
  // =========================================================================
  {
    id: 'hb_p3_q1',
    moduleId: 'anph111_week1_human_body',
    partNumber: 3,
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Body Regions Terminology',
    question: 'In precise anatomical terminology, the term "brachial" strictly refers to which portion of the upper limb?',
    options: [
      'The entire upper limb from shoulder to fingertip',
      'The arm, extending specifically from the shoulder to the elbow',
      'The forearm, extending specifically from the elbow to the wrist',
      'The wrist and palm region'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: The arm, extending specifically from the shoulder to the elbow.',
    rubricGuide: 'Differentiates anatomical arm (brachial = shoulder to elbow) from forearm (antebrachial = elbow to wrist).',
    socraticClue: 'In lay speech "arm" means the whole limb, but anatomically "brachial" designates only the segment between shoulder and elbow.'
  },
  {
    id: 'hb_p3_q2',
    moduleId: 'anph111_week1_human_body',
    partNumber: 3,
    type: 'diagram_label',
    difficulty: 'hard',
    category: 'Body Regions Identification',
    question: 'Match the numbered anatomical landmarks on the anterior body figure.',
    diagramUrl: '/images/human_body/fig1_6a_body_regions_anterior.png',
    diagramTitle: 'Figure 1.6A: Anterior Body Regions',
    diagramLabels: [
      { id: 'dl_p3_1', labelNumber: 1, targetName: 'Neck region', correctAnswer: 'Cervical', options: ['Cervical', 'Cephalic', 'Thoracic', 'Brachial'] },
      { id: 'dl_p3_2', labelNumber: 2, targetName: 'Front depression of the elbow', correctAnswer: 'Antecubital', options: ['Antecubital', 'Antebrachial', 'Axillary', 'Carpal'] },
      { id: 'dl_p3_3', labelNumber: 3, targetName: 'Groin crease where thigh joins trunk', correctAnswer: 'Inguinal', options: ['Inguinal', 'Coxal', 'Femoral', 'Pubic'] },
      { id: 'dl_p3_4', labelNumber: 4, targetName: 'Anterior kneecap', correctAnswer: 'Patellar', options: ['Patellar', 'Popliteal', 'Crural', 'Tarsal'] }
    ],
    modelAnswer: '1. Cervical, 2. Antecubital, 3. Inguinal, 4. Patellar.',
    rubricGuide: 'Accurately locates anterior surface regional terms.',
    socraticClue: 'Locate the neck, anterior elbow bend, groin junction, and anterior knee.'
  },
  {
    id: 'hb_p3_q3',
    moduleId: 'anph111_week1_human_body',
    partNumber: 3,
    type: 'diagram_label',
    difficulty: 'hard',
    category: 'Abdominopelvic Quadrants',
    question: 'A 20-year-old college student presents with acute lower abdominal pain and fever. Palpation at McBurney’s point reveals sharp localized pain from acute appendicitis. In which quadrant and region is the appendix located?',
    diagramUrl: '/images/human_body/fig1_7_abdominopelvic_quadrants.png',
    diagramTitle: 'Figure 1.7: The 4 Abdominopelvic Quadrants',
    diagramLabels: [
      { id: 'dl_p3_5', labelNumber: 'RLQ', targetName: 'Quadrant housing the cecum and appendix', correctAnswer: 'Right Lower Quadrant (RLQ)', options: ['Right Lower Quadrant (RLQ)', 'Right Upper Quadrant (RUQ)', 'Left Lower Quadrant (LLQ)', 'Left Upper Quadrant (LUQ)'] },
      { id: 'dl_p3_6', labelNumber: 'RUQ', targetName: 'Quadrant housing the liver and gallbladder', correctAnswer: 'Right Upper Quadrant (RUQ)', options: ['Right Upper Quadrant (RUQ)', 'Left Upper Quadrant (LUQ)', 'Right Lower Quadrant (RLQ)', 'Left Lower Quadrant (LLQ)'] },
      { id: 'dl_p3_7', labelNumber: 'LUQ', targetName: 'Quadrant housing the stomach and spleen', correctAnswer: 'Left Upper Quadrant (LUQ)', options: ['Left Upper Quadrant (LUQ)', 'Right Upper Quadrant (RUQ)', 'Left Lower Quadrant (LLQ)', 'Right Lower Quadrant (RLQ)'] }
    ],
    modelAnswer: 'Appendix is located in the Right Lower Quadrant (RLQ) and Right Iliac (Inguinal) Region.',
    rubricGuide: 'Correctly identifies the location of the appendix in RLQ.',
    socraticClue: 'Look at the patient’s anatomical right, inferior to the horizontal transumbilical line.'
  },
  {
    id: 'hb_p3_q4',
    moduleId: 'anph111_week1_human_body',
    partNumber: 3,
    type: 'enumeration',
    difficulty: 'hard',
    category: 'The 9 Abdominal Regions',
    question: 'Enumerate all NINE abdominopelvic regions created by the two midclavicular lines and the subcostal/transtubercular horizontal lines.',
    enumerationCount: 9,
    correctItems: [
      'Right Hypochondriac Region',
      'Epigastric Region',
      'Left Hypochondriac Region',
      'Right Lumbar (Lateral) Region',
      'Umbilical Region',
      'Left Lumbar (Lateral) Region',
      'Right Iliac (Inguinal) Region',
      'Hypogastric (Pubic) Region',
      'Left Iliac (Inguinal) Region'
    ],
    modelAnswer: 'Top: Right Hypochondriac, Epigastric, Left Hypochondriac. Middle: Right Lumbar, Umbilical, Left Lumbar. Bottom: Right Iliac, Hypogastric, Left Iliac.',
    rubricGuide: 'Lists all 9 anatomical regions accurately in 3 rows.',
    socraticClue: 'Think of the 3x3 grid: hypo-chondriac (under cartilage) and epi-gastric on top; lumbar and umbilical in middle; iliac and hypogastric on bottom.'
  },
  {
    id: 'hb_p3_q5',
    moduleId: 'anph111_week1_human_body',
    partNumber: 3,
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Body Planes',
    question: 'A magnetic resonance imaging (MRI) scan slices the brain vertically along the midline, dividing it into precisely equal right and left halves. What anatomical plane is this scan showing?',
    options: [
      'Coronal (Frontal) Plane',
      'Midsagittal (Median) Plane',
      'Transverse (Horizontal) Plane',
      'Parasagittal Plane'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Midsagittal (Median) Plane.',
    rubricGuide: 'Differentiates midsagittal (equal halves) from parasagittal (unequal sagittal) and frontal.',
    socraticClue: 'What specific sagittal plane passes directly through the exact midline to produce symmetrical halves?'
  },
  {
    id: 'hb_p3_q6',
    moduleId: 'anph111_week1_human_body',
    partNumber: 3,
    type: 'diagram_label',
    difficulty: 'medium',
    category: 'Body Planes Identification',
    question: 'Match each primary anatomical plane of the body with its dividing direction.',
    diagramUrl: '/images/human_body/fig1_9_body_planes.png',
    diagramTitle: 'Figure 1.9: The Three Primary Body Planes',
    diagramLabels: [
      { id: 'dl_p3_8', labelNumber: 'A', targetName: 'Vertical plane dividing body into right and left portions', correctAnswer: 'Sagittal Plane', options: ['Sagittal Plane', 'Frontal (Coronal) Plane', 'Transverse (Horizontal) Plane', 'Oblique Plane'] },
      { id: 'dl_p3_9', labelNumber: 'B', targetName: 'Vertical plane dividing body into anterior and posterior portions', correctAnswer: 'Frontal (Coronal) Plane', options: ['Frontal (Coronal) Plane', 'Sagittal Plane', 'Transverse Plane', 'Longitudinal Plane'] },
      { id: 'dl_p3_10', labelNumber: 'C', targetName: 'Horizontal plane dividing body into superior and inferior portions', correctAnswer: 'Transverse (Horizontal) Plane', options: ['Transverse (Horizontal) Plane', 'Frontal Plane', 'Sagittal Plane', 'Midsagittal Plane'] }
    ],
    modelAnswer: 'A: Sagittal Plane, B: Frontal (Coronal) Plane, C: Transverse (Horizontal) Plane.',
    rubricGuide: 'Correctly matches all 3 cardinal planes.',
    socraticClue: 'Sagittal = Right/Left; Coronal/Frontal = Front/Back; Transverse = Top/Bottom.'
  },
  {
    id: 'hb_p3_q7',
    moduleId: 'anph111_week1_human_body',
    partNumber: 3,
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Body Cavities',
    question: 'Which anatomical structure serves as the physical muscular boundary dividing the thoracic cavity superiorly from the abdominopelvic cavity inferiorly?',
    options: [
      'Mediastinum',
      'Diaphragm',
      'Peritoneum',
      'Pelvic Brim'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Diaphragm.',
    rubricGuide: 'Identifies the diaphragm as the boundary between thoracic and abdominopelvic cavities.',
    socraticClue: 'Which dome-shaped respiratory muscle separates the chest from the belly?'
  },
  {
    id: 'hb_p3_q8',
    moduleId: 'anph111_week1_human_body',
    partNumber: 3,
    type: 'diagram_label',
    difficulty: 'hard',
    category: 'Serous Membranes Architecture',
    question: 'Examine the serous membrane diagram below. Identify the two layers and the intervening space.',
    diagramUrl: '/images/human_body/fig1_12_serous_membranes.png',
    diagramTitle: 'Figure 1.12: Serous Membranes — Pericardium, Pleura, and Peritoneum',
    diagramLabels: [
      { id: 'dl_p3_11', labelNumber: '1', targetName: 'Outer serous layer lining the internal cavity wall', correctAnswer: 'Parietal Layer', options: ['Parietal Layer', 'Visceral Layer', 'Serous Cavity', 'Mesentery'] },
      { id: 'dl_p3_12', labelNumber: '2', targetName: 'Inner serous layer directly covering the organ surface', correctAnswer: 'Visceral Layer', options: ['Visceral Layer', 'Parietal Layer', 'Mucous Layer', 'Adventitia'] },
      { id: 'dl_p3_13', labelNumber: '3', targetName: 'Lubricated fluid space between parietal and visceral layers', correctAnswer: 'Serous Cavity (with Serous Fluid)', options: ['Serous Cavity (with Serous Fluid)', 'Lumen', 'Mediastinum', 'Dorsal Cavity'] }
    ],
    modelAnswer: '1. Parietal Layer, 2. Visceral Layer, 3. Serous Cavity containing lubricating serous fluid.',
    rubricGuide: 'Correctly identifies the double-walled arrangement of serous membranes.',
    socraticClue: 'Parietal = wall; Visceral = organ/guts; Cavity = fluid-filled space between.'
  },
  {
    id: 'hb_p3_q9',
    moduleId: 'anph111_week1_human_body',
    partNumber: 3,
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Serous Membranes Specific Names',
    question: 'The specific double-layered serous membrane that surrounds each lung in the thoracic cavity is called the:',
    options: [
      'Pericardium',
      'Pleura',
      'Peritoneum',
      'Meninges'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Pleura (Parietal Pleura & Visceral Pleura).',
    rubricGuide: 'Identifies Pleura as the serosa of the lungs.',
    socraticClue: 'Heart is pericardium, abdomen is peritoneum, lungs are what?'
  },
  {
    id: 'hb_p3_q10',
    moduleId: 'anph111_week1_human_body',
    partNumber: 3,
    type: 'multiple_choice',
    difficulty: 'hard',
    category: 'Retroperitoneal Organs',
    question: 'Which of the following organs is classified as RETROPERITONEAL (positioned behind the parietal peritoneum against the posterior abdominal wall)?',
    options: [
      'Stomach',
      'Kidneys',
      'Spleen',
      'Gallbladder'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Kidneys (and adrenal glands, pancreas, duodenum).',
    rubricGuide: 'Identifies kidneys as classic retroperitoneal organs.',
    socraticClue: 'Remember the prefix retro- means behind. Which urinary organs lie behind the peritoneal cavity against the lower back ribs?'
  },

  // =========================================================================
  // FINAL COMPREHENSIVE QUIZ (30 ITEMS): DIVERSE EXAM METHODS
  // MULTIPLE CHOICE, DIAGRAM LABELING, ENUMERATION, SOCRATIC, CLINICAL ESSAY
  // =========================================================================
  {
    id: 'hb_final_q1',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Foundations of A&P',
    question: 'What is the fundamental relationship between anatomy and physiology in biological systems?',
    options: [
      'Structure (anatomy) determines and enables function (physiology)',
      'Physiology exists completely independent of physical anatomical structures',
      'Anatomy can only be studied in deceased specimens, while physiology is only studied in plants',
      'Functions occur spontaneously without requiring anatomical tissues or cells'
    ],
    correctIndex: 0,
    modelAnswer: 'Option A: Structure (anatomy) determines and enables function (physiology).',
    rubricGuide: 'Explains the principle of complementarity of structure and function.',
    socraticClue: 'Why do the lungs have millions of thin alveoli (anatomy)? To facilitate rapid oxygen diffusion (physiology).'
  },
  {
    id: 'hb_final_q2',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'diagram_label',
    difficulty: 'medium',
    category: 'Six Levels of Organization',
    question: 'Label the 6 structural levels of the human body hierarchy shown in the diagram from 1 (simplest) to 6 (most complex).',
    diagramUrl: '/images/human_body/fig1_1_levels_of_organization.png',
    diagramTitle: 'Final Exam Diagram 1: Structural Hierarchy of the Human Body',
    diagramLabels: [
      { id: 'f_dl_1', labelNumber: 1, targetName: 'Atoms bonding to form molecules', correctAnswer: 'Chemical Level', options: ['Chemical Level', 'Cell Level', 'Tissue Level', 'Organ Level'] },
      { id: 'f_dl_2', labelNumber: 2, targetName: 'Basic structural and functional living unit', correctAnswer: 'Cell Level', options: ['Cell Level', 'Chemical Level', 'Tissue Level', 'Organ Level'] },
      { id: 'f_dl_3', labelNumber: 3, targetName: 'Group of similar cells performing a function', correctAnswer: 'Tissue Level', options: ['Tissue Level', 'Organ Level', 'Cell Level', 'Organ System Level'] },
      { id: 'f_dl_4', labelNumber: 4, targetName: 'Structure composed of two or more tissues', correctAnswer: 'Organ Level', options: ['Organ Level', 'Tissue Level', 'Organ System Level', 'Organism Level'] },
      { id: 'f_dl_5', labelNumber: 5, targetName: 'Group of organs working together', correctAnswer: 'Organ System Level', options: ['Organ System Level', 'Organ Level', 'Organism Level', 'Tissue Level'] },
      { id: 'f_dl_6', labelNumber: 6, targetName: 'Any living thing considered as a complete whole', correctAnswer: 'Organism Level', options: ['Organism Level', 'Organ System Level', 'Population Level', 'Ecosystem Level'] }
    ],
    modelAnswer: '1. Chemical Level, 2. Cell Level, 3. Tissue Level, 4. Organ Level, 5. Organ System Level, 6. Organism Level.',
    rubricGuide: 'Arranges all 6 structural levels accurately.',
    socraticClue: 'Review the ascending steps from atoms/molecules to the human being.'
  },
  {
    id: 'hb_final_q3',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'enumeration',
    difficulty: 'hard',
    category: 'The 11 Organ Systems',
    question: 'Enumerate all ELEVEN organ systems of the human body.',
    enumerationCount: 11,
    correctItems: [
      'Integumentary System',
      'Skeletal System',
      'Muscular System',
      'Nervous System',
      'Endocrine System',
      'Cardiovascular System',
      'Lymphatic System',
      'Respiratory System',
      'Digestive System',
      'Urinary System',
      'Reproductive System (Male & Female)'
    ],
    modelAnswer: 'Integumentary, Skeletal, Muscular, Nervous, Endocrine, Cardiovascular, Lymphatic, Respiratory, Digestive, Urinary, Reproductive systems.',
    rubricGuide: 'Lists all 11 organ systems.',
    socraticClue: 'Remember the acronym mnemonic RUN CLARISSE (Respiratory, Urinary, Nervous, Cardiovascular, Lymphatic, Anatomical/Integumentary, Reproductive, Immune, Skeletal, Systemic/Endocrine, Muscular).'
  },
  {
    id: 'hb_final_q4',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Organ Systems',
    question: 'Which organ system is primarily responsible for removing foreign organisms from tissue fluids, mounting cellular immune defenses, absorbing dietary fats, and returning interstitial fluid to the bloodstream?',
    options: [
      'Cardiovascular System',
      'Lymphatic System',
      'Endocrine System',
      'Urinary System'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Lymphatic System.',
    rubricGuide: 'Identifies lymphatic system functions (immune defense and fluid return).',
    socraticClue: 'Contains lymph nodes, spleen, thymus, and lymphatic vessels.'
  },
  {
    id: 'hb_final_q5',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'enumeration',
    difficulty: 'medium',
    category: 'Characteristics of Life',
    question: 'Enumerate the SIX fundamental characteristics of life exhibited by human beings.',
    enumerationCount: 6,
    correctItems: [
      'Organization',
      'Metabolism',
      'Responsiveness',
      'Growth',
      'Development (Differentiation)',
      'Reproduction'
    ],
    modelAnswer: '1. Organization, 2. Metabolism, 3. Responsiveness, 4. Growth, 5. Development, 6. Reproduction.',
    rubricGuide: 'Correctly lists the 6 characteristics of life.',
    socraticClue: 'Order, energy use, reaction, size increase, specialization over time, continuation of cells/species.'
  },
  {
    id: 'hb_final_q6',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'socratic',
    difficulty: 'hard',
    category: 'Metabolism Physiology',
    question: 'Explain the physiological difference between catabolism and anabolism. How do these two coupled arms of metabolism sustain cellular life?',
    modelAnswer: 'Catabolism is the chemical breakdown of complex organic molecules (e.g. glucose, fatty acids) into simpler compounds, releasing stored chemical energy in the form of ATP. Anabolism is the energy-requiring synthesis of complex cellular structures and proteins from smaller nutrient precursors. Together, catabolism supplies the energy and raw materials that anabolism uses for cellular repair, growth, and physiological work.',
    rubricGuide: 'Distinguishes breakdown (catabolism, energy releasing) from building (anabolism, energy consuming) and mentions ATP coupling.',
    socraticClue: 'Think: "Cata" breaks down like a catastrophe; "Ana" builds up like anabolic steroids.'
  },
  {
    id: 'hb_final_q7',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Homeostasis Concepts',
    question: 'Why are homeostatic variables (such as body temperature or blood pressure) described as existing within a "normal range" rather than at an immutable fixed number?',
    options: [
      'Because homeostatic control centers constantly experience complete electrical failure',
      'Because dynamic physiological adjustments cause values to oscillate slightly above and below the set point',
      'Because blood pressure and temperature do not matter for human survival',
      'Because variables only change during irreversible terminal illness'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Dynamic physiological adjustments cause values to oscillate slightly above and below the set point.',
    rubricGuide: 'Explains dynamic equilibrium vs static rigidity.',
    socraticClue: 'Homeostasis is dynamic—it constantly makes slight corrections as conditions fluctuate.'
  },
  {
    id: 'hb_final_q8',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'enumeration',
    difficulty: 'medium',
    category: 'Feedback Mechanisms',
    question: 'Enumerate the THREE components of a biological feedback loop and state the primary role of each.',
    enumerationCount: 3,
    correctItems: [
      'Receptor (Sensor) — detects stimulus and sends input',
      'Control Center — analyzes input against set point and issues output commands',
      'Effector — carries out physical response to adjust variable'
    ],
    modelAnswer: '1. Receptor (monitors controlled condition), 2. Control Center (evaluates set point and decides action), 3. Effector (executes the corrective response).',
    rubricGuide: 'Must enumerate all 3 components with their respective duties.',
    socraticClue: 'Input sensor, decision-maker, and responding muscle/gland.'
  },
  {
    id: 'hb_final_q9',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'essay',
    difficulty: 'hard',
    category: 'Feedback Clinical Analysis',
    question: 'Compare and contrast negative feedback and positive feedback. Describe one specific clinical example for each mechanism, explaining how each loop starts, functions, and terminates.',
    keywords: ['set point', 'reversal', 'amplification', 'oxytocin', 'childbirth', 'thermoregulation', 'temperature'],
    modelAnswer: 'Negative feedback reverses a deviation from the set point to restore internal stability. For example, in thermoregulation, elevated body temperature stimulates hypothalamic receptors, causing sweat glands (effectors) to secrete sweat and blood vessels to dilate; cooling the body back to 37°C shuts off the response. In contrast, positive feedback amplifies and accelerates the initial deviation away from the baseline. For example, during labor, cervical stretch signals oxytocin release from the posterior pituitary, inducing stronger uterine contractions that push the baby further, stretching the cervix more and releasing more oxytocin; the cycle terminates only when delivery of the baby removes cervical stretch.',
    rubricGuide: 'Accurately explains negative feedback (stabilizing/reversing deviation) and positive feedback (amplifying deviation), providing detailed examples with initiation, progression, and termination.',
    socraticClue: 'Focus on whether the response opposes the initial change (negative) or intensifies it until an outside event stops it (positive).'
  },
  {
    id: 'hb_final_q10',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Anatomical Position',
    question: 'Which statement accurately describes a person standing in the standard anatomical position?',
    options: [
      'Standing erect, eyes forward, palms facing backward, toes pointed outward',
      'Standing erect, head level, eyes forward, arms at sides, palms facing forward with thumbs lateral, feet flat on floor directed forward',
      'Lying horizontal on the back with arms folded across the chest',
      'Sitting upright with knees bent at 90 degrees and palms resting on knees'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Standing erect, head level, eyes forward, arms at sides, palms facing forward with thumbs lateral, feet flat on floor directed forward.',
    rubricGuide: 'Fully describes all criteria of the standard anatomical reference position.',
    socraticClue: 'Remember the four key elements: erect stance, eyes forward, supinated forward palms, flat forward feet.'
  },
  {
    id: 'hb_final_q11',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Body Stances',
    question: 'When a patient is positioned lying flat on their back with face and abdomen facing upward, they are in the _______ position. When lying face down, they are in the _______ position.',
    options: [
      'Prone; Supine',
      'Supine; Prone',
      'Anatomical; Lateral',
      'Ventral; Dorsal'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Supine; Prone.',
    rubricGuide: 'Differentiates supine (face up) from prone (face down).',
    socraticClue: 'Supine = on the spine (face up); Prone = face down.'
  },
  {
    id: 'hb_final_q12',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'diagram_label',
    difficulty: 'hard',
    category: 'Directional Terms Diagram',
    question: 'Fill in the paired directional terms pointing to the human anatomical model below.',
    diagramUrl: '/images/human_body/fig1_5a_directional_terms_anterior.png',
    diagramTitle: 'Final Exam Diagram 2: Directional Terms of the Body',
    diagramLabels: [
      { id: 'f_dl_7', labelNumber: 1, targetName: 'Toward head / higher up', correctAnswer: 'Superior (Cranial)', options: ['Superior (Cranial)', 'Inferior (Caudal)', 'Anterior', 'Posterior'] },
      { id: 'f_dl_8', labelNumber: 2, targetName: 'Toward feet / downward', correctAnswer: 'Inferior (Caudal)', options: ['Inferior (Caudal)', 'Superior (Cranial)', 'Medial', 'Lateral'] },
      { id: 'f_dl_9', labelNumber: 3, targetName: 'Toward front of body', correctAnswer: 'Anterior (Ventral)', options: ['Anterior (Ventral)', 'Posterior (Dorsal)', 'Superficial', 'Deep'] },
      { id: 'f_dl_10', labelNumber: 4, targetName: 'Toward back of body', correctAnswer: 'Posterior (Dorsal)', options: ['Posterior (Dorsal)', 'Anterior (Ventral)', 'Proximal', 'Distal'] },
      { id: 'f_dl_11', labelNumber: 5, targetName: 'Toward body midline', correctAnswer: 'Medial', options: ['Medial', 'Lateral', 'Proximal', 'Distal'] },
      { id: 'f_dl_12', labelNumber: 6, targetName: 'Away from body midline', correctAnswer: 'Lateral', options: ['Lateral', 'Medial', 'Deep', 'Superficial'] }
    ],
    modelAnswer: '1. Superior, 2. Inferior, 3. Anterior, 4. Posterior, 5. Medial, 6. Lateral.',
    rubricGuide: 'Correctly labels all 6 directional vectors.',
    socraticClue: 'Look at the directional arrows pointing up/down, front/back, and in/out relative to midline.'
  },
  {
    id: 'hb_final_q13',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Directional Terms Application',
    question: 'The femoral artery is located in the thigh, while the dorsalis pedis artery is in the foot. In reference to the lower limb’s attachment to the pelvis, the femoral artery is _______, while the dorsalis pedis artery is _______.',
    options: [
      'Distal; Proximal',
      'Proximal; Distal',
      'Lateral; Medial',
      'Superficial; Deep'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Proximal; Distal.',
    rubricGuide: 'Applies proximal and distal along limb appendages relative to point of trunk origin.',
    socraticClue: 'The thigh is closer to the pelvic trunk origin (proximal) than the foot (distal).'
  },
  {
    id: 'hb_final_q14',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Directional Terms Application',
    question: 'Which of the following statements correctly uses directional terminology?',
    options: [
      'The lungs are superficial to the ribcage',
      'The wrist is proximal to the elbow',
      'The heart is medial to the lungs and superior to the diaphragm',
      'The spine is anterior to the trachea'
    ],
    correctIndex: 2,
    modelAnswer: 'Option C: The heart is medial to the lungs and superior to the diaphragm.',
    rubricGuide: 'Evaluates spatial directional logic: heart lies between lungs (medial) and above diaphragm (superior).',
    socraticClue: 'Check each relationship: Are the lungs outside the ribs? Is the wrist closer to shoulder than elbow? Is the heart between the lungs?'
  },
  {
    id: 'hb_final_q15',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'diagram_label',
    difficulty: 'hard',
    category: 'Anterior Body Regions',
    question: 'Identify the numbered anatomical regions on the anterior body diagram.',
    diagramUrl: '/images/human_body/fig1_6a_body_regions_anterior.png',
    diagramTitle: 'Final Exam Diagram 3: Anterior Regional Landmarks',
    diagramLabels: [
      { id: 'f_dl_13', labelNumber: 1, targetName: 'Armpit junction', correctAnswer: 'Axillary', options: ['Axillary', 'Brachial', 'Cervical', 'Pectoral'] },
      { id: 'f_dl_14', labelNumber: 2, targetName: 'Arm (shoulder to elbow)', correctAnswer: 'Brachial', options: ['Brachial', 'Antebrachial', 'Antecubital', 'Carpal'] },
      { id: 'f_dl_15', labelNumber: 3, targetName: 'Forearm (elbow to wrist)', correctAnswer: 'Antebrachial', options: ['Antebrachial', 'Brachial', 'Carpal', 'Palmar'] },
      { id: 'f_dl_16', labelNumber: 4, targetName: 'Thigh (hip to knee)', correctAnswer: 'Femoral', options: ['Femoral', 'Crural', 'Patellar', 'Coxal'] },
      { id: 'f_dl_17', labelNumber: 5, targetName: 'Anterior leg / shin (knee to ankle)', correctAnswer: 'Crural', options: ['Crural', 'Femoral', 'Sural', 'Tarsal'] }
    ],
    modelAnswer: '1. Axillary, 2. Brachial, 3. Antebrachial, 4. Femoral, 5. Crural.',
    rubricGuide: 'Labels limb and torso landmarks accurately.',
    socraticClue: 'Follow the limbs from armpit, upper arm, forearm, thigh, and lower leg.'
  },
  {
    id: 'hb_final_q16',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'diagram_label',
    difficulty: 'hard',
    category: 'Posterior Body Regions',
    question: 'Identify the numbered regional terms on the posterior body diagram.',
    diagramUrl: '/images/human_body/fig1_6b_body_regions_posterior.png',
    diagramTitle: 'Final Exam Diagram 4: Posterior Regional Landmarks',
    diagramLabels: [
      { id: 'f_dl_18', labelNumber: 1, targetName: 'Base of skull / posterior head', correctAnswer: 'Occipital', options: ['Occipital', 'Cranial', 'Cervical', 'Vertebral'] },
      { id: 'f_dl_19', labelNumber: 2, targetName: 'Shoulder blade region', correctAnswer: 'Scapular', options: ['Scapular', 'Vertebral', 'Lumbar', 'Axillary'] },
      { id: 'f_dl_20', labelNumber: 3, targetName: 'Lower back / loin region', correctAnswer: 'Lumbar', options: ['Lumbar', 'Sacral', 'Gluteal', 'Vertebral'] },
      { id: 'f_dl_21', labelNumber: 4, targetName: 'Buttock region', correctAnswer: 'Gluteal', options: ['Gluteal', 'Lumbar', 'Sacral', 'Femoral'] },
      { id: 'f_dl_22', labelNumber: 5, targetName: 'Hollow behind the knee joint', correctAnswer: 'Popliteal', options: ['Popliteal', 'Patellar', 'Sural', 'Crural'] },
      { id: 'f_dl_23', labelNumber: 6, targetName: 'Calf of the leg', correctAnswer: 'Sural', options: ['Sural', 'Popliteal', 'Calcaneal', 'Plantar'] }
    ],
    modelAnswer: '1. Occipital, 2. Scapular, 3. Lumbar, 4. Gluteal, 5. Popliteal, 6. Sural.',
    rubricGuide: 'Accurately identifies posterior regional landmarks.',
    socraticClue: 'Identify skull base, shoulder blade, lower back, buttock, back of knee, and calf.'
  },
  {
    id: 'hb_final_q17',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'diagram_label',
    difficulty: 'hard',
    category: 'Abdominopelvic Quadrants & Organs',
    question: 'Label the 4 Abdominopelvic Quadrants and match the primary organs contained in each.',
    diagramUrl: '/images/human_body/fig1_7_abdominopelvic_quadrants.png',
    diagramTitle: 'Final Exam Diagram 5: Abdominopelvic Quadrants',
    diagramLabels: [
      { id: 'f_dl_24', labelNumber: 'RUQ', targetName: 'Houses liver, gallbladder, head of pancreas, right kidney', correctAnswer: 'Right Upper Quadrant (RUQ)', options: ['Right Upper Quadrant (RUQ)', 'Left Upper Quadrant (LUQ)', 'Right Lower Quadrant (RLQ)', 'Left Lower Quadrant (LLQ)'] },
      { id: 'f_dl_25', labelNumber: 'LUQ', targetName: 'Houses stomach, spleen, tail of pancreas, left kidney', correctAnswer: 'Left Upper Quadrant (LUQ)', options: ['Left Upper Quadrant (LUQ)', 'Right Upper Quadrant (RUQ)', 'Left Lower Quadrant (LLQ)', 'Right Lower Quadrant (RLQ)'] },
      { id: 'f_dl_26', labelNumber: 'RLQ', targetName: 'Houses cecum, vermiform appendix, right ovary/tube', correctAnswer: 'Right Lower Quadrant (RLQ)', options: ['Right Lower Quadrant (RLQ)', 'Right Upper Quadrant (RUQ)', 'Left Lower Quadrant (LLQ)', 'Left Upper Quadrant (LUQ)'] },
      { id: 'f_dl_27', labelNumber: 'LLQ', targetName: 'Houses sigmoid colon, descending colon, left ovary/tube', correctAnswer: 'Left Lower Quadrant (LLQ)', options: ['Left Lower Quadrant (LLQ)', 'Left Upper Quadrant (LUQ)', 'Right Lower Quadrant (RLQ)', 'Right Upper Quadrant (RUQ)'] }
    ],
    modelAnswer: 'RUQ (liver/gallbladder), LUQ (stomach/spleen), RLQ (cecum/appendix), LLQ (sigmoid colon).',
    rubricGuide: 'Correctly matches all 4 quadrants with organ contents.',
    socraticClue: 'Remember the quadrants are defined relative to the patient’s right and left through the umbilicus.'
  },
  {
    id: 'hb_final_q18',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'diagram_label',
    difficulty: 'hard',
    category: 'The 9 Abdominal Regions',
    question: 'Label the 9 Abdominopelvic Regions on the anatomical grid.',
    diagramUrl: '/images/human_body/fig1_8_abdominopelvic_regions.png',
    diagramTitle: 'Final Exam Diagram 6: The Nine Abdominopelvic Regions',
    diagramLabels: [
      { id: 'f_dl_28', labelNumber: 1, targetName: 'Upper right region under rib cartilage', correctAnswer: 'Right Hypochondriac Region', options: ['Right Hypochondriac Region', 'Epigastric Region', 'Right Lumbar Region', 'Right Iliac Region'] },
      { id: 'f_dl_29', labelNumber: 2, targetName: 'Upper central region above stomach', correctAnswer: 'Epigastric Region', options: ['Epigastric Region', 'Umbilical Region', 'Hypogastric Region', 'Right Hypochondriac Region'] },
      { id: 'f_dl_30', labelNumber: 3, targetName: 'Upper left region under rib cartilage', correctAnswer: 'Left Hypochondriac Region', options: ['Left Hypochondriac Region', 'Epigastric Region', 'Left Lumbar Region', 'Left Iliac Region'] },
      { id: 'f_dl_31', labelNumber: 4, targetName: 'Center region surrounding navel', correctAnswer: 'Umbilical Region', options: ['Umbilical Region', 'Epigastric Region', 'Hypogastric Region', 'Lumbar Region'] },
      { id: 'f_dl_32', labelNumber: 5, targetName: 'Lower right region (groin/cecum/appendix)', correctAnswer: 'Right Iliac (Inguinal) Region', options: ['Right Iliac (Inguinal) Region', 'Right Lumbar Region', 'Hypogastric Region', 'Left Iliac Region'] },
      { id: 'f_dl_33', labelNumber: 6, targetName: 'Lower central region (pubic/urinary bladder)', correctAnswer: 'Hypogastric (Pubic) Region', options: ['Hypogastric (Pubic) Region', 'Umbilical Region', 'Epigastric Region', 'Left Iliac Region'] }
    ],
    modelAnswer: '1. Right Hypochondriac, 2. Epigastric, 3. Left Hypochondriac, 4. Umbilical, 5. Right Iliac, 6. Hypogastric.',
    rubricGuide: 'Accurately positions the 9 abdominal regions.',
    socraticClue: 'Follow the 3 rows: Hypochondriac/Epigastric -> Lumbar/Umbilical -> Iliac/Hypogastric.'
  },
  {
    id: 'hb_final_q19',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Body Planes',
    question: 'A computer tomography (CT) scan slices through the abdomen horizontally at the level of the L1 vertebra, producing a cross-sectional image dividing the body into superior and inferior segments. What anatomical plane is this?',
    options: [
      'Sagittal Plane',
      'Frontal (Coronal) Plane',
      'Transverse (Horizontal / Axial) Plane',
      'Midsagittal Plane'
    ],
    correctIndex: 2,
    modelAnswer: 'Option C: Transverse (Horizontal / Axial) Plane.',
    rubricGuide: 'Identifies horizontal superior/inferior cuts as transverse/axial planes.',
    socraticClue: 'Which plane cuts across horizontally, parallel to the ground?'
  },
  {
    id: 'hb_final_q20',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'diagram_label',
    difficulty: 'medium',
    category: 'Body Planes Diagram',
    question: 'Identify the 3 cardinal body planes illustrated below.',
    diagramUrl: '/images/human_body/fig1_9_body_planes.png',
    diagramTitle: 'Final Exam Diagram 7: Primary Body Planes',
    diagramLabels: [
      { id: 'f_dl_34', labelNumber: 'A', targetName: 'Vertical cut dividing into right and left portions', correctAnswer: 'Sagittal Plane', options: ['Sagittal Plane', 'Frontal Plane', 'Transverse Plane', 'Oblique Plane'] },
      { id: 'f_dl_35', labelNumber: 'B', targetName: 'Vertical cut dividing into anterior and posterior portions', correctAnswer: 'Frontal (Coronal) Plane', options: ['Frontal (Coronal) Plane', 'Sagittal Plane', 'Transverse Plane', 'Midsagittal Plane'] },
      { id: 'f_dl_36', labelNumber: 'C', targetName: 'Horizontal cut dividing into superior and inferior portions', correctAnswer: 'Transverse Plane', options: ['Transverse Plane', 'Frontal Plane', 'Sagittal Plane', 'Longitudinal Plane'] }
    ],
    modelAnswer: 'A: Sagittal Plane, B: Frontal (Coronal) Plane, C: Transverse Plane.',
    rubricGuide: 'Distinguishes all 3 cardinal planes accurately.',
    socraticClue: 'A splits left/right, B splits front/back, C splits top/bottom.'
  },
  {
    id: 'hb_final_q21',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Organ Sectioning',
    question: 'A pathologist cuts an isolated blood vessel at a diagonal angle other than 90 degrees relative to its long axis. This section is termed:',
    options: [
      'Longitudinal Section',
      'Transverse (Cross) Section',
      'Oblique Section',
      'Coronal Section'
    ],
    correctIndex: 2,
    modelAnswer: 'Option C: Oblique Section.',
    rubricGuide: 'Defines an oblique cut (diagonal, non-perpendicular angle across long axis).',
    socraticClue: 'A non-right-angle diagonal cut through an organ is called what?'
  },
  {
    id: 'hb_final_q22',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'diagram_label',
    difficulty: 'hard',
    category: 'Body Cavities Diagram',
    question: 'Label the major body cavities and subdivisions on the diagram.',
    diagramUrl: '/images/human_body/fig1_11_body_cavities.png',
    diagramTitle: 'Final Exam Diagram 8: Major Body Cavities',
    diagramLabels: [
      { id: 'f_dl_37', labelNumber: 1, targetName: 'Houses the brain', correctAnswer: 'Cranial Cavity', options: ['Cranial Cavity', 'Vertebral Canal', 'Thoracic Cavity', 'Pleural Cavity'] },
      { id: 'f_dl_38', labelNumber: 2, targetName: 'Houses the spinal cord', correctAnswer: 'Vertebral (Spinal) Canal', options: ['Vertebral (Spinal) Canal', 'Cranial Cavity', 'Mediastinum', 'Abdominal Cavity'] },
      { id: 'f_dl_39', labelNumber: 3, targetName: 'Chest cavity containing pleural and pericardial spaces', correctAnswer: 'Thoracic Cavity', options: ['Thoracic Cavity', 'Abdominal Cavity', 'Pelvic Cavity', 'Cranial Cavity'] },
      { id: 'f_dl_40', labelNumber: 4, targetName: 'Houses stomach, liver, intestines, spleen, kidneys', correctAnswer: 'Abdominal Cavity', options: ['Abdominal Cavity', 'Pelvic Cavity', 'Thoracic Cavity', 'Pericardial Cavity'] },
      { id: 'f_dl_41', labelNumber: 5, targetName: 'Houses bladder, internal reproductive organs, rectum', correctAnswer: 'Pelvic Cavity', options: ['Pelvic Cavity', 'Abdominal Cavity', 'Thoracic Cavity', 'Vertebral Canal'] }
    ],
    modelAnswer: '1. Cranial Cavity, 2. Vertebral Canal, 3. Thoracic Cavity, 4. Abdominal Cavity, 5. Pelvic Cavity.',
    rubricGuide: 'Accurately locates dorsal (cranial/vertebral) and ventral (thoracic/abdominopelvic) cavities.',
    socraticClue: 'Follow the skull, spine, chest, upper belly, and lower pelvis.'
  },
  {
    id: 'hb_final_q23',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'multiple_choice',
    difficulty: 'easy',
    category: 'Body Cavities',
    question: 'The cranial cavity and the vertebral canal are subdivisions of which major body cavity?',
    options: [
      'Ventral Body Cavity',
      'Dorsal Body Cavity',
      'Thoracic Cavity',
      'Abdominopelvic Cavity'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Dorsal Body Cavity.',
    rubricGuide: 'Categorizes cranial and vertebral cavities under the posterior/dorsal division.',
    socraticClue: 'Dorsal means posterior (backside). Which cavity contains the central nervous system?'
  },
  {
    id: 'hb_final_q24',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'diagram_label',
    difficulty: 'hard',
    category: 'Serous Membranes Architecture',
    question: 'Label the specific serous membranes and cavities surrounding the heart and lungs.',
    diagramUrl: '/images/human_body/fig1_12_serous_membranes.png',
    diagramTitle: 'Final Exam Diagram 9: Serous Membranes (Pericardium, Pleura, Peritoneum)',
    diagramLabels: [
      { id: 'f_dl_42', labelNumber: 'A', targetName: 'Outer serous layer lining fibrous pericardial sac', correctAnswer: 'Parietal Pericardium', options: ['Parietal Pericardium', 'Visceral Pericardium', 'Parietal Pleura', 'Visceral Peritoneum'] },
      { id: 'f_dl_43', labelNumber: 'B', targetName: 'Inner serous layer covering heart muscle surface (epicardium)', correctAnswer: 'Visceral Pericardium', options: ['Visceral Pericardium', 'Parietal Pericardium', 'Visceral Pleura', 'Parietal Peritoneum'] },
      { id: 'f_dl_44', labelNumber: 'C', targetName: 'Outer serous membrane lining thoracic wall', correctAnswer: 'Parietal Pleura', options: ['Parietal Pleura', 'Visceral Pleura', 'Parietal Peritoneum', 'Visceral Pericardium'] },
      { id: 'f_dl_45', labelNumber: 'D', targetName: 'Inner serous membrane adhering to lung surface', correctAnswer: 'Visceral Pleura', options: ['Visceral Pleura', 'Parietal Pleura', 'Visceral Peritoneum', 'Parietal Pericardium'] }
    ],
    modelAnswer: 'A: Parietal Pericardium, B: Visceral Pericardium, C: Parietal Pleura, D: Visceral Pleura.',
    rubricGuide: 'Accurately distinguishes parietal vs visceral layers for heart and lungs.',
    socraticClue: 'Parietal lines the wall; Visceral directly clings to the organ surface.'
  },
  {
    id: 'hb_final_q25',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Serous Fluid Function',
    question: 'What is the primary physiological function of the lubricating serous fluid secreted into the potential space between parietal and visceral serous membranes?',
    options: [
      'To provide nutrients and glucose to contracting myocytes',
      'To eliminate physical friction and heat as organs move and glide against cavity walls',
      'To conduct electrical cardiac action potentials between adjacent thoracic organs',
      'To store calcium ions for skeletal muscle contraction'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: To eliminate physical friction and heat as organs move and glide against cavity walls.',
    rubricGuide: 'Explains the anti-friction role of serous fluid.',
    socraticClue: 'Imagine an expanding lung or beating heart rubbing directly against the dry body wall without lubrication.'
  },
  {
    id: 'hb_final_q26',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Peritoneal Specializations',
    question: 'Double-layered folds of peritoneum that anchor the small and large intestines to the posterior abdominal wall and carry blood vessels and nerves are known as:',
    options: [
      'Meninges',
      'Mesenteries',
      'Pleural Sacs',
      'Fibrous Pericardium'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Mesenteries.',
    rubricGuide: 'Identifies mesenteries as the peritoneal folds supporting and vascularizing the gut.',
    socraticClue: 'What connective peritoneal bridges hold the loops of intestine in place?'
  },
  {
    id: 'hb_final_q27',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'enumeration',
    difficulty: 'hard',
    category: 'Retroperitoneal Organs',
    question: 'Enumerate FOUR retroperitoneal organs located behind the parietal peritoneum against the posterior body wall.',
    enumerationCount: 4,
    correctItems: [
      'Kidneys',
      'Adrenal Glands',
      'Pancreas',
      'Duodenum (or Ascending/Descending Colon, Urinary Bladder)'
    ],
    modelAnswer: '1. Kidneys, 2. Adrenal Glands, 3. Pancreas, 4. Urinary Bladder (or Duodenum).',
    rubricGuide: 'Lists 4 verified retroperitoneal organs.',
    socraticClue: 'Think of organs behind the abdominal cavity: filtering kidneys, adrenal caps, pancreas, bladder.'
  },
  {
    id: 'hb_final_q28',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'socratic',
    difficulty: 'hard',
    category: 'Clinical Serositis',
    question: 'A patient with pleurisy (inflammation of the pleura) describes excruciating sharp chest pain that worsens with every deep inhalation. Based on your knowledge of serous membranes, explain the pathophysiological mechanism causing this pain.',
    modelAnswer: 'Under normal conditions, the parietal and visceral pleura secrete a thin film of lubricating serous fluid that allows the lungs to glide smoothly against the thoracic wall without friction. In pleurisy, the serous membranes become inflamed, swollen, and rough, and serous fluid secretion is disrupted. As the patient inhales, the roughened parietal and visceral pleural layers rub directly against each other (pleural friction rub), stimulating sensory pain receptors with every respiratory expansion.',
    rubricGuide: 'Explains inflammation of pleura, loss of lubricating smooth serous film, and direct friction between visceral and parietal layers during breathing.',
    socraticClue: 'What happens when two inflamed, sandpaper-like surfaces rub together during lung expansion?'
  },
  {
    id: 'hb_final_q29',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'multiple_choice',
    difficulty: 'medium',
    category: 'Clinical Regional Assessment',
    question: 'A patient presents with sharp pain under the right ribcage that radiates to the right scapula after eating a fatty meal. Ultrasonography reveals gallstones. In which abdominopelvic quadrant and region is the gallbladder located?',
    options: [
      'Left Upper Quadrant (LUQ) & Epigastric Region',
      'Right Upper Quadrant (RUQ) & Right Hypochondriac Region',
      'Right Lower Quadrant (RLQ) & Right Iliac Region',
      'Left Lower Quadrant (LLQ) & Umbilical Region'
    ],
    correctIndex: 1,
    modelAnswer: 'Option B: Right Upper Quadrant (RUQ) & Right Hypochondriac Region.',
    rubricGuide: 'Maps gallbladder pathology to RUQ / Right Hypochondriac region.',
    socraticClue: 'The gallbladder is nestled on the inferior surface of the liver on the right side under the ribs.'
  },
  {
    id: 'hb_final_q30',
    moduleId: 'anph111_week1_human_body',
    partNumber: 'final',
    type: 'essay',
    difficulty: 'hard',
    category: 'Comprehensive Body Plan Synthesis',
    question: 'Synthesize the anatomical organization of the human body: Trace a surgeon’s scalpel blade making a midline incision into the pericardial cavity to perform open-heart surgery. Describe the planes, directional terms, body cavities, and serous layers traversed from the skin surface to the heart muscle.',
    keywords: ['anterior', 'superficial', 'deep', 'midsagittal', 'thoracic', 'mediastinum', 'parietal pericardium', 'pericardial cavity', 'visceral pericardium'],
    modelAnswer: 'To access the heart, the surgeon cuts along the anterior midsagittal (median) plane through the sternal region. Moving from superficial to deep, the incision traverses: 1. Skin and superficial fascia of the anterior chest, 2. The sternum bone (anterior midline thorax), 3. Entrance into the anterior mediastinum within the thoracic cavity, 4. The fibrous pericardium and underlying Parietal Pericardium, 5. The fluid-filled Pericardial Cavity containing serous fluid, and 6. The Visceral Pericardium (epicardium) directly adhering to the myocardium (heart muscle surface).',
    rubricGuide: 'Traces the anatomical path from superficial to deep through skin, sternum, thoracic/mediastinal cavity, parietal pericardium, pericardial cavity, and visceral pericardium along the midsagittal plane.',
    socraticClue: 'Order your answer from superficial skin -> bone -> thoracic cavity -> parietal layer -> serous cavity -> visceral layer -> organ.'
  }
];
