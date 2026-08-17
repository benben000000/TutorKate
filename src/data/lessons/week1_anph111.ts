import { LessonCourse, LessonModule } from '../../types';

export const week1Module: LessonModule = {
  id: 'anph111_week1',
  weekNumber: 1,
  code: 'ANPH111-LAB-W1',
  title: 'Laboratory Safety, Hazards & Operational Protocols',
  subtitle: 'Anatomy & Physiology 111 Laboratory • Catherine Baleña-Pascual',
  description: 'A focused mastery module covering multi-factorial laboratory hazards, material science of PPE barriers, nitrile vs latex selection, room governance, equipment inspection, return-ready standards, and emergency response.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'sec_1_hazards_culture',
      title: 'Laboratory Hazards & Risk Recognition',
      subtitle: 'Recognizing Multi-Factorial Risks in the Anatomical Experimental Environment',
      content: `### The Science of Safety in Anatomical Laboratories

A laboratory is a controlled scientific theater combining powerful chemical reagents, biological specimens, delicate glassware, and human decisions. Safety is never an afterthought—it precedes every physical action.

> *"Safety is not a gadget but a state of mind."*  
> — **Eleanor Evert**

---

#### The 4 Major Laboratory Hazard Classes

| Hazard Category | Typical Sources in ANPH111 | Clinical / Biological Consequence |
| :--- | :--- | :--- |
| **Chemical Spills** | Preservative fluids (Formalin/Formaldehyde), histological stains (Methylene Blue, Eosin), strong acids, alcohol fixatives | Chemical burns, eye irritation, tissue fixation, respiratory distress, contact dermatitis |
| **Biological Agents** | Animal tissues, human bodily specimens, bacterial smears, anatomical cadavers | Pathogen transmission, microbial infection, bio-contamination |
| **Sharp Objects** | Scalpel blades, micro-slides, coverslips, broken capillary tubes, dissecting probes | Lacerations, puncture wounds, direct inoculation of bloodborne pathogens |
| **Heat & Electrical** | Hot plates, water baths, autoclave sterilizers, compound microscope wiring | Thermal burns, electrical shock, flash fires, pressurized steam hazards |

---

#### The Critical 60% Statistic in Laboratory Safety

* **60%+ of all reported laboratory injuries** across health science institutions are directly associated with **absent, improper, or compromised Personal Protective Equipment (PPE)**.
* Minor behavioral shortcuts (e.g., leaving a coat unbuttoned, sliding safety goggles onto the forehead, or wearing contaminated gloves outside) turn manageable hazards into severe clinical emergencies.`,
      keyTakeaways: [
        'Laboratories host 4 primary hazard classes: Chemical Spills, Biological Agents, Sharp Objects, and Heat/Electrical.',
        'Over 60% of lab injuries correlate directly with absent or improper PPE.',
        'Safety culture requires proactive hazard anticipation rather than passive compliance.'
      ],
      clinicalCorrelations: [
        'Standard precautions in the laboratory lay the groundwork for universal hospital infection control (protecting both nurse and patient from cross-contamination).'
      ]
    },
    {
      id: 'sec_2_ppe_mastery',
      title: 'Comprehensive PPE Systems & Material Selection',
      subtitle: 'Barriers, Nitrile vs Latex, Hazard Matching & 4-Step Operational Routine',
      content: `### Personal Protective Equipment (PPE) as Primary Physical Barrier

PPE is defined as specialized equipment worn by a laboratory worker to create a continuous, impervious physical barrier between environmental hazards and the human body. It reduces exposure and limits injury severity when engineering controls alone cannot eliminate risk.

---

#### 1. Hand Protection: Glove Selection Matrix

| Glove Type | Primary Strengths | Recommended Tasks | Critical Caution |
| :--- | :--- | :--- | :--- |
| **Nitrile** | High chemical resistance, puncture resistance, tear proof | Reagent handling, dissection, chemical stains | Primary choice for modern healthcare laboratories. |
| **Latex** | Superior tactile sensitivity, elastic fit | General biological examination | Must screen for Type I / Type IV latex allergies. |
| **Heat-Resistant** | Thermal insulation against high temps | Handling hot beakers, autoclaves, steam baths | Ineffective against chemical liquid permeation. |

> **Golden Rule of Glove Discipline**: Never touch personal electronics (smartphones), door knobs, light switches, writing pens, or facial skin while wearing contaminated gloves. Change gloves immediately when switching tasks or if compromised.

---

#### 2. Eye & Facial Protection

* **Sealed Safety Goggles**: Must feature a complete 360-degree perimeter seal against the facial orbital bone. Essential against aerosolized droplets, high-velocity liquid splashes, and flying particulate debris.
* **Full Face Shields**: Extended polycarbonate barrier covering forehead to below the chin. Must be worn **over safety goggles** (never as a sole replacement) during violent splash, boiling acid, or impact risks.

---

#### 3. Body Protection: The Laboratory Gown / Coat

A wearable barrier shielding skin and clothing from spills, stains, and infectious bio-materials.

##### The 4 Mandatory Lab Coat Rules:
1. **Appropriate Material**: Flame-resistant, splash-resistant cotton-poly or fluid-impervious fabric.
2. **Buttoned Completely**: Every button or snap must be fastened from throat to bottom; open lab coats act as hazardous sails that catch flames or knock over reagents.
3. **Sleeves Secured**: Cuffs must remain down, secured at the wrists, and covered by glove cuffs.
4. **Doff Before Departure**: **Never** wear a laboratory coat outside the laboratory suite (e.g., in hallways, cafeterias, or restrooms) to prevent community cross-contamination.

---

#### 4. Respiratory Protection: Masks vs. Respirators

* **Standard / Surgical Masks**: Loose-fitting barriers designed to catch large exhaled droplets; they do **not** seal to the face and do not protect against hazardous chemical fumes or fine aerosols.
* **Particulate / Vapor Respirators (N95 / Fume-Rated)**: Fit-tested, tightly sealed filtration devices designed to filter specific airborne pathogens, hazardous chemical fumes, and toxic dusts.

---

#### The 4-Step Operational Routine for PPE

\`\`\`
[1. INSPECT] ──> [2. DON & DOFF] ──> [3. CLEAN & STORE] ──> [4. DISPOSE]
\`\`\`

1. **INSPECT**: Prior to donning, inspect for pinhole tears, seam fraying, cracked elastic, or expiration dates.
2. **DON & DOFF**: Put on in proper sequence (Gown -> Mask -> Goggles -> Gloves). Doff in reverse order (Gloves -> Goggles -> Gown -> Mask) without touching contaminated outer surfaces with bare hands.
3. **CLEAN & STORE**: Decontaminate reusable eye protection with 70% isopropyl alcohol; store in clean, dry, designated storage containers.
4. **DISPOSE**: Single-use items (contaminated gloves, disposable masks) must be discarded into dedicated **Yellow Biohazard Bins** or hazardous waste receptacles.

---

#### Hazard-to-PPE Matching Matrix

* **Chemical Splash Risk**: Sealed Goggles + Compatible Nitrile Gloves + Buttoned Lab Coat.
* **Biological / Cadaveric Material**: Nitrile Gloves + Fluid-Resistant Gown + Face Protection.
* **Sharps / Broken Glass**: Cut-Resistant Gloves + Sealed Goggles + Forceps/Tongs.
* **Heat / Flame Exposure**: Heat-Resistant Thermal Gloves + Lab Coat + Face Shield.
* **Fumes / Airborne Volatiles**: Chemical Fume Hood First (Primary Engineering Control) + Task-Rated Respirator.`,
      keyTakeaways: [
        'Nitrile gloves offer superior chemical and puncture protection; verify latex allergies if using latex.',
        'Lab coats must be fully buttoned, sleeves secured, and ALWAYS removed before exiting the lab.',
        'Face shields supplement goggles but do not replace them.',
        'The 4-step routine: Inspect -> Don & Doff -> Clean & Store -> Dispose.'
      ],
      clinicalCorrelations: [
        'Aseptic doffing technique in the lab directly prevents personal contamination when removing PPE in infectious isolation wards (e.g., COVID-19 / TB units).'
      ]
    },
    {
      id: 'sec_3_room_governance',
      title: 'Room Protocols & Prohibited Behaviors',
      subtitle: 'Strict Operating Rules, Zero-Tolerance Policies, and Tripartite Institutional Roles',
      content: `### Institutional Operating Rules & Room Governance

The anatomy laboratory is a high-liability educational space operated under strict institutional regulations.

#### Core Objectives of Laboratory Regulations:
1. **Ensure User Safety**: Protect students, faculty, and support personnel from preventable hazards.
2. **Preserve Facilities & Equipment**: Protect high-precision compound microscopes, anatomical models, and glassware.
3. **Promote Responsible Resource Stewardship**: Ensure equitable access and zero wastage of consumables.
4. **Maintain Educational Focus**: Reserve space solely for structured scientific inquiry.

---

#### Scheduled-Only Access Policy
* Access follows the **official timetable**, never personal convenience.
* Laboratories open solely for approved classes, scheduled dissections, and authorized research.
* **Unscheduled, unmonitored, or recreational entry is strictly prohibited.**

---

#### Prohibited Behaviors Inside the Laboratory (Zero Tolerance)
* 🚫 **Eating or Drinking**: Ingesting food or beverages inside the lab exposes the user to lethal accidental chemical ingestion.
* 🚫 **Horseplay / Leisure Activities**: Running, joking, pushing, or roughhousing around reagents and glass causes immediate expulsion.
* 🚫 **Social Media & Distractions**: Using smartphones for TikTok, vlogging, social media, or gaming is strictly banned.
* 🚫 **Unattended Experiments**: Leaving active burners, hot plates, or reactions unsupervised.

---

#### Tripartite Institutional Roles

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    INSTITUTIONAL ROLES                      │
├──────────────────────────────┬──────────────────────────────┤
│ 1. LABORATORY TECHNICIANS    │ Safeguards inventory, logs   │
│                              │ equipment, dispenses items   │
├──────────────────────────────┼──────────────────────────────┤
│ 2. FACULTY INSTRUCTORS       │ Coordinates rooms, monitors  │
│                              │ safety, enforces compliance  │
├──────────────────────────────┼──────────────────────────────┤
│ 3. STUDENTS (KATELYN XHIN)   │ Follows rules, wears PPE,    │
│                              │ handles tools responsibly    │
└──────────────────────────────┴──────────────────────────────┘
\`\`\``,
      keyTakeaways: [
        'Laboratories open strictly according to official schedule; unscheduled access is forbidden.',
        'Zero tolerance for eating/drinking, horseplay, TikTok/social media, and distractions.',
        'Institutional safety depends on clear tripartite division between Technicians, Faculty, and Students.'
      ],
      clinicalCorrelations: [
        'Zero tolerance for food and drinks in clinical preparation areas is standard hospital JCAHO/DOH policy to eliminate nosocomial cross-contamination.'
      ]
    },
    {
      id: 'sec_4_borrowing_system',
      title: 'Centralized Equipment Borrowing Systems',
      subtitle: 'Stockroom Dispensing Workflows, ID Validation, and Accountability Protocols',
      content: `### Centralized Equipment Borrowing Protocols

Material control in ANPH111 Laboratory operates through a centralized custody tracking mechanism.

#### Centralized Borrowing Protocols
1. **Authorized Dispensing Points**: Materials are borrowed exclusively from **Laboratory Technicians** at the **Stockroom** or **Microscope Room**.
2. **Identification Requirement**: Students must present their validated **School ID or Registration Card** to check out items.
3. **Documentation**: Technicians log every borrowed microscope number, glassware set, and dissecting instrument.
4. **Group Accountability**: The designated group leader and borrowers are legally and academically accountable for the physical condition of all logged assets until formally checked back in.`,
      keyTakeaways: [
        'Materials are borrowed exclusively from Laboratory Technicians at the Stockroom/Microscope Room.',
        'Valid School ID or Registration Card is required for every checkout.',
        'Borrowers are held directly accountable for condition and return.'
      ],
      clinicalCorrelations: [
        'Centralized stockroom tracking in the lab mirrors hospital Pyxis / automated medication dispensing protocols where every tool and vial must be signed out.'
      ]
    },
    {
      id: 'sec_5_inspection_cleaning',
      title: 'Inspection Checklists & Return-Ready Standards',
      subtitle: 'Hairline Crack Detection, Detergent Washing, and Bench Decontamination',
      content: `### Pre- & Post-Experiment Inspection Protocols

Safety is maintained through rigorous operational rituals conducted before and after every single laboratory session.

#### Faculty & Institutional Responsibilities:
* **Advance Room Request**: Faculty must submit the official Laboratory Request Form at least **2 days prior** to scheduled laboratory use.
* **"No Full PPE? No Experiment." Policy**: Faculty must visually verify complete PPE (Lab coat, goggles, mask, hair cap, and gloves) for every student. Any student missing even one element is **strictly barred from performing the experiment**.
* **Pre- & Post-Session Room Audit**: Faculty inspects gas valves, electrical outlets, chemical cabinets; verifies all lights, fans, and ignition sources are switched off and doors locked.

---

#### Student Pre-Use & Post-Use Checklists

##### Before Starting the Experiment:
1. Present School ID / Registration Card to the technician.
2. Carefully inspect all glassware (beakers, flasks, graduated cylinders) and microscope lenses for **hairline cracks, chips, or clouding**.
3. **Immediately report** any pre-existing defect to the technician for replacement *before* adding any reagent or heat.

##### After Completing the Experiment (Return-Ready Standard):
* **Clean & Dry**: Wash all glassware with designated laboratory detergent, rinse with distilled water, and dry completely. **Technicians will reject soiled or wet containers.**
* **Prompt & Complete Return**: Return all borrowed items to the stockroom in orderly condition.
* **Bench Decontamination**: Wipe down laboratory benches with 70% alcohol disinfectant.`,
      keyTakeaways: [
        'Faculty must submit request forms at least 2 days prior; students missing full PPE cannot perform experiments.',
        'Always inspect glassware before use; report cracks immediately.',
        'Return-ready standard requires glassware to be washed with detergent, rinsed with distilled water, dried completely, and bench wiped with 70% alcohol.'
      ],
      clinicalCorrelations: [
        'Inspection of glassware for micro-cracks directly mirrors checking IV fluid bags and medication ampoules for particulate matter and hairline glass defects before patient administration.'
      ]
    },
    {
      id: 'sec_6_compliance_emergency',
      title: 'Defect Reporting, Emergency First Aid & Make-Up Protocols',
      subtitle: 'Strict Non-Concealment, 15-Minute Eyewash, and Dean-Approved Make-Up Experiments',
      content: `### Emergency Response & Protocol Adherence

Laboratory emergencies require instantaneous, conditioned responses without hesitation.

#### Handling Broken or Faulty Equipment

> **Strict Non-Concealment Rule**: Never hide, discard secretly, or attempt to use cracked or malfunctioning apparatus.

* Faculty and technicians must be alerted immediately.
* **Student Replacement Obligation**: Damage caused by negligence or misuse must be replaced with an identical or approved equivalent item **promptly or before the semester concludes**.

---

#### Emergency & Injury Protocols

1. **Immediate Notification**: Shout or notify the instructor and laboratory technician at once.
2. **Urgent First Aid Intervention**:
   * **Chemical Eye Exposure**: Flush continuously at the Emergency Eyewash Station for **at least 15 minutes**, holding eyelids wide open.
   * **Thermal Burn**: Run cool, clean tap water over the affected skin area (do not apply ice or butter).
   * **Chemical Spill on Body**: Use the Emergency Safety Shower immediately while removing contaminated clothing.
   * **Laceration / Cut**: Apply direct sterile pressure and notify medical staff.
3. **Formal Incident Reporting**: Complete an institutional incident report documenting time, cause, agents involved, and corrective medical action taken.

---

#### Special Cases: Make-Up Experiments & Research Work

Extra laboratory sessions or make-up laboratory experiments cannot be scheduled informally.

##### Mandatory 4-Step Make-Up Protocol:
1. **1-Week Advance Notice**: Submit an official written request letter at least **one full week prior** to the proposed session.
2. **Detailed Itinerary**: The letter must specify the exact date, time, requested glassware/equipment/reagents, and the specific experiment/research title.
3. **Dual Signature Approval**: Must obtain formal written approval and signatures from:
   * **The Subject Professor / Research Adviser**
   * **The College Dean**
4. **Supervised Execution**: Make-up work must be continuously supervised by an authorized faculty member or technician.

---

#### The 3 Pillars of Laboratory Compliance
\`\`\`
[1. SCHEDULED + APPROVED]  ───>  [2. SUPERVISED + FULL PPE]  ───>  [3. CLEAN + ACCOUNTED FOR]
\`\`\``,
      keyTakeaways: [
        'Strict non-concealment rule for all broken apparatus.',
        'Accidents require immediate reporting and urgent first aid (15-min continuous eyewash, safety shower).',
        'Make-up experiments require 1-week advance letter signed by Professor AND College Dean.'
      ],
      clinicalCorrelations: [
        'Immediate reporting of lab glass breakage translates to hospital sharps safety and needle-stick reporting protocols to prevent occupational bloodborne virus exposure.'
      ]
    }
  ],
  quiz: [
    {
      id: 'quiz_1',
      moduleId: 'anph111_week1',
      question: 'What percentage of reported laboratory injuries across health science institutions are associated with absent or improper PPE?',
      options: [
        '25%+',
        '40%+',
        '60%+',
        '85%+'
      ],
      correctIndex: 2,
      explanation: 'Over 60% of reported laboratory injuries are associated with absent or improper PPE.',
      category: 'Safety Hazards'
    },
    {
      id: 'quiz_2',
      moduleId: 'anph111_week1',
      question: 'Which type of glove provides superior chemical and puncture resistance without allergy risks in modern healthcare laboratories?',
      options: [
        'Latex Gloves',
        'Nitrile Gloves',
        'Cotton Examination Gloves',
        'Thermal Asbestos Gloves'
      ],
      correctIndex: 1,
      explanation: 'Nitrile gloves provide high chemical resistance and puncture resistance without latex allergy risks.',
      category: 'PPE Standards'
    },
    {
      id: 'quiz_3',
      moduleId: 'anph111_week1',
      question: 'When should a student remove their laboratory gown/coat?',
      options: [
        'Only when going to sleep at home',
        'Immediately prior to exiting the laboratory room to prevent hallway contamination',
        'Whenever they feel warm inside the lab',
        'After arriving at the cafeteria'
      ],
      correctIndex: 1,
      explanation: 'Lab coats must always be removed prior to leaving the laboratory suite to prevent contamination of public hallways.',
      category: 'PPE Standards'
    },
    {
      id: 'quiz_4',
      moduleId: 'anph111_week1',
      question: 'What is the mandatory protocol for chemical splash into the eyes?',
      options: [
        'Rub eyes with clean cloth and apply eye drops',
        'Flush continuously at Emergency Eyewash Station for at least 15 minutes holding eyelids open',
        'Splash with cold milk and wait 5 minutes',
        'Cover eyes with sterile gauze immediately without water'
      ],
      correctIndex: 1,
      explanation: 'Emergency eyewash stations must be used for at least 15 continuous minutes while holding eyelids open.',
      category: 'Emergency Response'
    },
    {
      id: 'quiz_5',
      moduleId: 'anph111_week1',
      question: 'What advance notice and signatures are required for make-up experiments?',
      options: [
        '2 days advance notice with classmate permission',
        'At least 1 week advance notice with written letter signed by the Professor AND College Dean',
        '24 hours notice with oral consent from the technician',
        'No advance notice needed if the lab room is empty'
      ],
      correctIndex: 1,
      explanation: 'Make-up experiments require 1 week advance written notice with dual signatures from the Professor and College Dean.',
      category: 'Institutional Protocols'
    },
    {
      id: 'quiz_6',
      moduleId: 'anph111_week1',
      question: 'What is the correct 4-step routine for PPE lifecycle management?',
      options: [
        'Don -> Discard -> Clean -> Inspect',
        'Inspect -> Don & Doff -> Clean & Store -> Dispose',
        'Clean -> Wear -> Wash -> Store',
        'Select -> Disinfect -> Store -> Inspect'
      ],
      correctIndex: 1,
      explanation: 'The 4-step routine is Inspect -> Don & Doff -> Clean & Store -> Dispose.',
      category: 'PPE Routine'
    },
    {
      id: 'quiz_7',
      moduleId: 'anph111_week1',
      question: 'What is the "Return-Ready" standard for borrowed laboratory glassware?',
      options: [
        'Leave glassware on the bench for cleaners',
        'Wash with detergent, rinse with distilled water, and dry completely',
        'Rinse quickly with tap water while still wet',
        'Soak in bleach and leave in sink'
      ],
      correctIndex: 1,
      explanation: 'Return-ready glassware must be washed with lab detergent, rinsed with distilled water, and completely dried.',
      category: 'Inspection & Cleaning'
    },
    {
      id: 'quiz_8',
      moduleId: 'anph111_week1',
      question: 'Which of the following is strictly prohibited inside the laboratory?',
      options: [
        'Wearing sealed safety goggles',
        'Eating, drinking, horseplay, and social media distractions',
        'Inspecting glassware for hairline cracks',
        'Reporting broken apparatus immediately'
      ],
      correctIndex: 1,
      explanation: 'Eating, drinking, horseplay, and social media distractions have zero tolerance in the laboratory.',
      category: 'Room Protocols'
    }
  ]
};

export const courseData: LessonCourse = {
  id: 'course_anph111',
  subjectCode: 'ANPH111',
  title: 'Anatomy and Physiology Laboratory',
  instructor: 'Catherine Baleña-Pascual',
  modules: [week1Module]
};
