import { LessonModule } from '../../types';

export const humanBodyModule: LessonModule = {
  id: 'anph111_week1_human_body',
  weekNumber: 1,
  code: 'ANPH-M1-CU1',
  title: 'The Human Body: Structural Organization, Homeostasis & Body Plan',
  subtitle: 'Anatomy & Physiology 111 • Course Unit 1 (Lecture) • Based on Seeley’s Essentials of A&P',
  description: 'The foundational lecture unit covering the definitions and approaches of Anatomy and Physiology, the 6 structural levels of organization, the 11 organ systems, the 6 characteristics of life, homeostasis and negative/positive feedback mechanisms, anatomical position, directional terms, body regions, abdominopelvic quadrants and 9 regions, body planes, cavities, and serous membranes.',
  estimatedMinutes: 60,
  sections: [
    // =========================================================================
    // PART 1: FOUNDATIONS, LEVELS OF ORGANIZATION & CHARACTERISTICS OF LIFE
    // =========================================================================
    {
      id: 'hb_part1_sec1_foundations',
      title: 'Part 1: Anatomy & Physiology — Scope, Approaches & Subdivisions',
      subtitle: '1.1 Anatomy & 1.2 Physiology: Systemic, Regional, Surface, Imaging & Human Physiology',
      content: `### 1.1 Anatomy: Definition & Basic Approaches

**Anatomy** is the scientific discipline that investigates the structure of the body. The word *anatomy* is derived from Greek words meaning to **dissect**, or to **cut apart and separate**, the parts of the body for study *(VanPutte, Regan, & Russo, 2016)*.

Studying anatomy encompasses:
* The physical structure and shape of body parts
* Microscopic organization of cells and tissues
* Developmental processes from fertilization to maturity
* Relationships, spatial orientations, and functional interactions between structures

---

#### The 4 Major Approaches to Studying Anatomy:

1. **Systemic Anatomy**: Dwells on specific body systems one by one across the entire body, such as the skeletal system, muscular system, or nervous system.
2. **Regional Anatomy**: Reviews specific geographic areas or segments of the body in their entirety—such as the head, thorax, or abdomen—examining all muscles, nerves, blood vessels, and bones located within that region.
3. **Surface Anatomy**: Focuses on the study of external anatomical features and landmarks (such as bony projections, superficial muscle contours, and palpable pulses) to locate and assess deeper internal structures without incision.
4. **Anatomical Imaging**: Utilizes specialized medical radiation and imaging technologies (such as X-rays, ultrasound, CT scans, and MRI) to evaluate internal structures non-invasively in living patients.

---

### 1.2 Physiology: The Science of Body Functions

**Physiology** deals with the processes and functions of living organisms as dynamic, ever-changing biological systems *(VanPutte, Regan, & Russo, 2016)*. 

The two primary goals of physiology are:
1. To understand and predict the body's physical and chemical responses to diverse internal and external stimuli.
2. To understand how the body maintains **homeostasis**—a stable internal environment necessary for survival.

Therefore, physiology is fundamentally defined as the **science of body functions** *(Tortora & Freudenrich, 2011)*.

#### Subdivisions of Physiology:
* **Cellular Physiology**: Focuses on biochemical processes within individual cells (e.g., membrane transport, protein synthesis, ATP generation).
* **Systemic Physiology**: Focuses on the coordinated functions of integrated organ systems (e.g., cardiovascular physiology, neurophysiology, renal physiology).
* **Human Physiology**: The specific study of the biological functions and mechanisms of the human organism.`,
      keyTakeaways: [
        'Anatomy means to dissect or cut apart; it investigates structure, development, and spatial relationships.',
        'Anatomy approaches: Systemic (by organ systems), Regional (by body areas), Surface (external landmarks), and Anatomical Imaging (X-ray, MRI, ultrasound).',
        'Physiology is the science of body functions, focused on response to stimuli and homeostasis maintenance.',
        'Major physiological subdivisions include cellular physiology, systemic physiology, and human physiology.'
      ],
      clinicalCorrelations: [
        'In clinical nursing, surface anatomy is essential for finding pulse points (radial, carotid, femoral), locating intramuscular injection sites (deltoid, ventrogluteal), and performing physical assessments.'
      ]
    },
    {
      id: 'hb_part1_sec2_levels_of_organization',
      title: 'Part 1: The 6 Structural Levels of Body Organization',
      subtitle: '1.3 Chemical, Cell, Tissue, Organ, Organ System, and Organism Levels',
      content: `### 1.3 Structural and Functional Organization of the Human Body

The human body can be systematically studied across **six structural levels of organization**, ascending from submicroscopic chemical atoms to the complete living organism.

![Figure 1.1: Six Levels of Structural Organization in the Human Body (Seeley's Anatomy & Physiology)](/images/human_body/fig1_1_levels_of_organization.png)

---

#### Detailed Breakdown of the 6 Levels:

##### 1. Chemical Level
The foundational structural level dealing with how subatomic particles interact to form **atoms** (such as hydrogen, carbon, oxygen, nitrogen, and calcium) and how atoms chemically bond to form **molecules** (such as water, glucose, lipids, proteins, and DNA). A molecule's 3D chemical shape determines its biological function.

##### 2. Cell Level
The **basic structural and functional unit of all living organisms**. Cells are composed of sub-cellular structures called **organelles** (such as the nucleus, mitochondria, endoplasmic reticulum, and lysosomes). Although human cells share fundamental properties, they specialize into diverse types (e.g., red blood cells, skeletal myocytes, neurons) to perform specialized functions.

##### 3. Tissue Level
A **tissue** is composed of a group of similar cells and the surrounding extracellular material that work together to perform specific functions. The human body consists of **4 primary tissue types**:
* **Epithelial Tissue**: Covers body surfaces, lines internal cavities and tubular organs, and forms secretory glands.
* **Connective Tissue**: Protects, binds together, supports body structures, stores fat, and transports substances (e.g., bone, cartilage, adipose, blood).
* **Muscle Tissue**: Specialized contractile cells that generate mechanical force for movement, blood circulation, and peristalsis (skeletal, cardiac, smooth).
* **Nervous Tissue**: Composed of neurons and neuroglia that conduct electrical impulses and process sensory information.

##### 4. Organ Level
An **organ** is composed of **two or more distinct tissue types** physically combined to perform one or more specific complex functions. 

![Figure 1.2: Major Organs of the Human Body](/images/human_body/fig1_2_major_organs.png)

* Examples of organs include the **heart**, **stomach**, **brain**, **lungs**, **liver**, and **kidneys**. For instance, the stomach contains an epithelial lining that secretes acid and enzymes, a connective tissue submucosa, smooth muscle layers for churning, and nervous tissue for autonomic regulation.

##### 5. Organ System Level
An **organ system** is a coordinated group of organs that work together to accomplish a broad, vital physiological function (e.g., the urinary system consists of the kidneys, ureters, urinary bladder, and urethra).

##### 6. Organism Level
An **organism** is any living thing considered as an independent, integrated whole. Organisms can range from single-celled microbes (like bacteria) to complex multicellular organisms composed of trillions of interdependent cells (such as human beings).`,
      keyTakeaways: [
        'The 6 structural levels in ascending hierarchy: Chemical -> Cell -> Tissue -> Organ -> Organ System -> Organism.',
        'Cells are the fundamental structural and functional unit of life.',
        'The 4 primary tissue classes are Epithelial, Connective, Muscle, and Nervous tissues.',
        'An organ contains 2 or more tissue types working in concert to perform specific physiological duties.'
      ],
      clinicalCorrelations: [
        'Pathology at the microscopic chemical or cellular level (e.g., insulin receptor dysfunction or mutated hemoglobin molecules) directly produces systemic organ failure (diabetes mellitus, sickle cell crisis).'
      ]
    },
    {
      id: 'hb_part1_sec3_eleven_organ_systems',
      title: 'Part 1: The 11 Organ Systems of the Human Body',
      subtitle: 'Components, Functions, and Interrelationships of All 11 Human Organ Systems',
      content: `### Overview of the 11 Organ Systems

The human body functions through **11 interrelated organ systems**. While each system has specialized responsibilities, no single system functions in isolation—damage or malfunction in one system reverberates throughout the entire organism.

![Figure 1.3A: Integumentary, Skeletal, and Muscular Systems](/images/human_body/fig1_3a_organ_systems_1.png)

![Figure 1.3B: Nervous, Endocrine, and Cardiovascular Systems](/images/human_body/fig1_3b_organ_systems_2.png)

![Figure 1.3C: Lymphatic, Respiratory, and Digestive Systems](/images/human_body/fig1_3c_organ_systems_3.png)

![Figure 1.3D: Urinary, Female Reproductive, and Male Reproductive Systems](/images/human_body/fig1_3d_organ_systems_4.png)

---

#### Comprehensive Matrix of the 11 Organ Systems:

| Organ System | Major Anatomical Components | Primary Physiological Functions |
| :--- | :--- | :--- |
| **1. Integumentary System** | Skin, hair, nails, sweat glands, sebaceous glands | Provides external body protection; prevents water loss; regulates body temperature; synthesizes vitamin D; houses sensory receptors. |
| **2. Skeletal System** | Bones, associated cartilages, ligaments, joints | Provides structural framework and support; protects vital internal organs; allows body movements with muscles; stores minerals (calcium/phosphate); houses red bone marrow for hematopoiesis. |
| **3. Muscular System** | Skeletal muscles, tendons | Produces voluntary and reflex body movements; maintains posture; generates body heat during contraction. |
| **4. Nervous System** | Brain, spinal cord, nerves, sensory receptors | Major regulatory system; detects internal/external stimuli; processes sensations; controls rapid movements and physiological responses via electrical nerve impulses. |
| **5. Endocrine System** | Pituitary, thyroid, parathyroid, adrenal glands, pancreas, ovaries/testes, thymus | Slower-acting regulatory system; secretes chemical messengers (**hormones**) directly into bloodstream to control metabolism, growth, and reproduction. |
| **6. Cardiovascular System** | Heart, blood vessels (arteries, capillaries, veins), blood | Transports nutrients, oxygen, waste products, hormones, and immune cells throughout the body; regulates temperature and acid-base balance. |
| **7. Lymphatic System** | Lymph nodes, lymphatic vessels, lymph, spleen, thymus, tonsils | Removes foreign substances from blood and lymph; mounts immune defenses against infection; absorbs dietary fats from digestive tract; returns leaked tissue fluids to cardiovascular bloodstream. |
| **8. Respiratory System** | Lungs, nasal cavity, pharynx, larynx, trachea, bronchi | Exchanges respiratory gases (oxygen and carbon dioxide) between blood and air; regulates blood pH; produces vocal sounds. |
| **9. Digestive System** | Mouth, esophagus, stomach, small & large intestines, liver, gallbladder, pancreas | Performs mechanical and chemical breakdown of food; absorbs nutrients into bloodstream; eliminates solid indigestible wastes. |
| **10. Urinary System** | Kidneys, ureters, urinary bladder, urethra | Filters metabolic wastes from blood; regulates blood volume, arterial blood pressure, electrolyte balance, and acid-base (pH) equilibrium. |
| **11. Reproductive System** | **Female**: Ovaries, uterine tubes, uterus, vagina, mammary glands.<br>**Male**: Testes, epididymides, vasa deferentia, seminal vesicles, prostate, penis. | **Female**: Produces oocytes; site of fertilization and fetal development; produces milk; synthesizes sex hormones.<br>**Male**: Produces and transfers sperm cells to female; secretes testosterone. |`,
      keyTakeaways: [
        'The human body contains 11 organ systems that act cooperatively to sustain life.',
        'Nervous system provides rapid electrical regulation; Endocrine system provides systemic chemical (hormonal) regulation.',
        'Cardiovascular and Lymphatic systems maintain fluid circulation and immune defense.',
        'Urinary, Respiratory, and Digestive systems maintain nutrient supply, gas exchange, and metabolic waste elimination.'
      ],
      clinicalCorrelations: [
        'Clinical triage in emergency medicine (ABC: Airway, Breathing, Circulation) reflects the immediate interdependence of the Respiratory and Cardiovascular systems.'
      ]
    },
    {
      id: 'hb_part1_sec4_characteristics_of_life',
      title: 'Part 1: The 6 Essential Characteristics of Life',
      subtitle: '1.4 Organization, Metabolism, Responsiveness, Growth, Development, and Reproduction',
      content: `### 1.4 The Six Characteristics of Living Organisms

What fundamental properties distinguish living human beings and organisms from inanimate non-living matter? Human beings exhibit **six essential characteristics of life** *(VanPutte, Regan, & Russo, 2016)*:

---

#### 1. Organization
Living organisms are **highly organized**. Specific structural relationships exist among parts of an organism, from molecules within organelles up to organs within systems. This organized structure allows specialized functions to occur in orderly fashion. Any severe disruption in structural organization inevitably produces functional impairment or death.

#### 2. Metabolism
**Metabolism** is the total sum of all chemical reactions taking place within an organism. It includes:
* **Catabolism**: Breaking down complex food molecules into smaller building blocks, releasing chemical energy (ATP).
* **Anabolism**: Using energy and nutrient building blocks to synthesize the organism’s own vital molecules, proteins, and cellular structures.
* Fueling essential life functions such as active transport, growth, muscular movement, and cellular reproduction.

#### 3. Responsiveness
**Responsiveness** is the ability of an organism to sense changes (stimuli) in its internal or external environment and make adjustments to maintain life. 
* *Example*: When body temperature rises on a hot day, cutaneous blood vessels dilate and sweat glands activate to cool the body.
* *Example*: Pulling a hand away instinctively after touching a hot stove or sharp object.

#### 4. Growth
**Growth** refers to an increase in physical size, length, or cell number of all or part of an organism.
* *Example*: Bone growth occurs as osteoblasts produce bone matrix and bone cell numbers multiply during childhood and adolescence.

#### 5. Development
**Development** refers to the changes an organism undergoes through time, beginning at fertilization and ending at death. Development involves two key processes:
* **Growth**: The quantitative increase in size and cell mass.
* **Differentiation**: The qualitative change in cell structure and function from a generalized, unspecialized precursor cell into a specialized cell type (e.g., embryonic stem cells differentiating into neurons, erythrocytes, osteocytes, or myocytes).

#### 6. Reproduction
**Reproduction** is the formation of new cells (for growth, tissue maintenance, and wound repair) or the formation of an entirely new individual organism, ensuring genetic continuity of the species.`,
      keyTakeaways: [
        'The 6 characteristics of life: 1. Organization, 2. Metabolism, 3. Responsiveness, 4. Growth, 5. Development, and 6. Reproduction.',
        'Metabolism comprises catabolism (breakdown for energy) and anabolism (synthesis of molecules).',
        'Development incorporates both quantitative growth and qualitative differentiation (specialization).',
        'Responsiveness enables rapid adaptation to environmental stimuli to preserve internal equilibrium.'
      ],
      clinicalCorrelations: [
        'Loss of differentiation (anaplasia) is the cellular hallmark of malignant cancer, where cells revert to immature, disorganized forms and proliferate uncontrollably.'
      ]
    },

    // =========================================================================
    // PART 2: HOMEOSTASIS, FEEDBACK SYSTEMS & DIRECTIONAL TERMINOLOGY
    // =========================================================================
    {
      id: 'hb_part2_sec1_homeostasis_feedback',
      title: 'Part 2: Homeostasis, Set Points & Negative vs Positive Feedback',
      subtitle: '1.5 Dynamic Equilibrium, Controlled Conditions, Receptors, Control Centers & Effectors',
      content: `### 1.5 Homeostasis: Dynamic Equilibrium

**Homeostasis** (*homeo-*, the same; *-stasis*, standing still) is the ability of the body to maintain a relatively constant, stable internal environment despite continuous fluctuations in the external environment or internal metabolic activity *(VanPutte, Regan, & Russo, 2016)*.

Homeostasis is not static rigidity; it is a **dynamic equilibrium**. Body variables (such as core body temperature, arterial blood pressure, blood glucose concentration, and plasma pH) fluctuate slightly around an ideal normal value known as the **set point**.

![Figure 1.4: Homeostasis and Normal Range around a Set Point](/images/human_body/fig1_4_homeostasis.png)

* **Set Point**: The ideal physiological normal value (e.g., 37°C / 98.6°F for body temperature; 120/80 mmHg for resting blood pressure; 70-100 mg/dL for fasting blood glucose).
* **Normal Range**: The safe biological range of values around the set point within which optimal cellular function is sustained.
* **Variables**: Physical and chemical conditions whose values change (temperature, blood volume, pH).

---

### Components of a Feedback System (Feedback Loop)

Homeostatic regulation is governed primarily by the **Nervous System** (fast electrical signaling) and the **Endocrine System** (sustained hormonal signaling). Every feedback loop consists of **three essential components**:

1. **Receptor (Sensor)**: Monitors the value of a controlled condition and detects deviations (stimuli). It sends sensory input information (via nerve impulses or chemical signals) to the control center.
2. **Control Center**: Receives the input, evaluates it against the physiological set point, and determines the appropriate regulatory response. It dispatches output commands to the effector.
3. **Effector**: A body structure (such as a muscle or gland) that receives output commands from the control center and produces an operational response that changes the controlled condition.

---

### Negative Feedback vs. Positive Feedback Systems

#### 1. Negative Feedback Systems (Stabilizing & Corrective)
A **negative feedback mechanism** reverses or opposes a deviation from the set point, returning the variable back toward the normal range. Negative feedback maintains stability in the vast majority of human physiological systems.

* **Example 1: Thermoregulation (Body Temperature)**
  * *Stimulus*: Core temperature rises above 37°C.
  * *Receptors*: Thermoreceptors in skin and hypothalamus detect heat.
  * *Control Center*: Hypothalamus processes input and initiates cooling signals.
  * *Effectors*: Sweat glands secrete perspiration; cutaneous blood vessels dilate to radiate heat.
  * *Result*: Temperature decreases back to 37°C, shutting off the sweat response.
* **Example 2: Arterial Blood Pressure Regulation (Baroreceptor Reflex)**
  * *Stimulus*: Blood pressure drops upon standing.
  * *Receptors*: Baroreceptors in carotid sinuses and aortic arch detect decreased vessel stretch.
  * *Control Center*: Medulla oblongata increases sympathetic output.
  * *Effectors*: Heart rate increases; peripheral arterioles constrict.
  * *Result*: Blood pressure elevates back to normal resting levels.

#### 2. Positive Feedback Systems (Amplifying & Cascading)
A **positive feedback mechanism** reinforces, strengthens, or amplifies the initial change in the controlled condition, driving the variable further away from the baseline. Positive feedback is inherently unstable and must be terminated by an external event outside the loop.

* **Classic Example: Childbirth (Parturition) & Oxytocin**
  1. During labor, uterine contractions push the baby's head into the cervix.
  2. Stretch receptors in the cervix detect mechanical distension and send nerve impulses to the hypothalamus.
  3. The posterior pituitary releases the hormone **oxytocin** into the bloodstream.
  4. Oxytocin stimulates the uterine smooth muscle to contract even more forcefully.
  5. Stronger contractions push the fetus further, stretching the cervix more, releasing more oxytocin (amplifying cycle).
  6. **Loop Termination**: Birth of the infant relieves cervical stretch, abruptly halting the cycle.
* **Other Positive Feedback Examples**: Blood clotting cascade (platelet plug formation) and the generation of nerve action potentials (voltage-gated sodium influx).`,
      keyTakeaways: [
        'Homeostasis maintains internal variables within a normal range around a set point.',
        'The 3 components of a feedback loop: 1. Receptor (monitors), 2. Control Center (compares to set point), 3. Effector (produces response).',
        'Negative feedback reverses the deviation to restore stability (e.g. temperature, blood pressure, blood glucose).',
        'Positive feedback amplifies the deviation until a terminal event stops it (e.g. childbirth/oxytocin, blood coagulation).'
      ],
      clinicalCorrelations: [
        'Homeostatic imbalance (failure of negative feedback mechanisms) underlies virtually all disease states. For example, prolonged failure to regulate blood glucose produces diabetes mellitus and cardiovascular complications.'
      ]
    },
    {
      id: 'hb_part2_sec2_anatomical_position_directional_terms',
      title: 'Part 2: Anatomical Position & Directional Terminology',
      subtitle: '1.6 Upright Stance, Prone vs Supine, and Paired Directional Opposites',
      content: `### 1.6 Anatomical Position & Body Stances

In anatomy and clinical medicine, all descriptions of body parts and spatial relationships are made relative to a standardized reference posture known as the **Anatomical Position**.

#### The Anatomical Position:
* The subject stands **erect and upright**.
* The head is level, with eyes facing directly forward.
* The upper limbs are positioned at the sides with **palms turned forward (supinated)** and thumbs pointing laterally.
* The lower limbs are parallel with feet flat on the floor, toes directed forward.

> **Crucial Rule**: Regardless of whether a patient is lying on an exam table, sitting, or contorted, anatomical directions (e.g., anterior, posterior, left, right) always refer to the body as if it were standing in the Anatomical Position. Left and Right always refer to the **patient’s** left and right, not the observer's.

#### Reclining Body Stances:
* **Prone Position**: The body is lying face down (ventral surface downward).
* **Supine Position**: The body is lying face up (ventral surface upward).

---

### Directional Terms: Paired Opposites

Directional terms describe the relative position of one body structure in reference to another. They are organized into **pairs of anatomical opposites**:

![Figure 1.5A: Directional Terms (Anterior View)](/images/human_body/fig1_5a_directional_terms_anterior.png)

![Figure 1.5B: Directional Terms (Lateral View)](/images/human_body/fig1_5b_directional_terms_lateral.png)

---

#### Detailed Directional Reference Table:

| Directional Term | Anatomical Definition | Clinical / Practical Example |
| :--- | :--- | :--- |
| **Superior (Cephalic / Cranial)** | Toward the head or upper part of a structure; higher up. | The forehead is **superior** to the nose; the heart is **superior** to the stomach. |
| **Inferior (Caudal)** | Away from the head or toward the lower part of a structure; downward. | The navel is **inferior** to the chin; the stomach is **inferior** to the diaphragm. |
| **Anterior (Ventral)** | Toward or at the front of the body; in front of. | The sternum (breastbone) is **anterior** to the heart; the patella is **anterior** to the knee joint. |
| **Posterior (Dorsal)** | Toward or at the back of the body; behind. | The spine is **posterior** to the heart; the esophagus is **posterior** to the trachea. |
| **Medial** | Toward or nearer to the anatomical midline of the body. | The sternum is **medial** to the shoulders; the ulna is **medial** to the radius in anatomical position. |
| **Lateral** | Away from the anatomical midline of the body; toward the outer side. | The ears are **lateral** to the nose; the radius is **lateral** to the ulna. |
| **Proximal** | Closer to the point of origin or attachment of a limb to the trunk. | The elbow is **proximal** to the wrist; the thigh is **proximal** to the ankle. |
| **Distal** | Farther from the point of origin or attachment of a limb to the trunk. | The fingers are **distal** to the wrist; the foot is **distal** to the knee. |
| **Superficial (External)** | Toward or on the surface of the body. | The skin is **superficial** to skeletal muscles; the ribs are **superficial** to the lungs. |
| **Deep (Internal)** | Away from the body surface; more internal. | The lungs are **deep** to the rib cage; bone is **deep** to skeletal muscle. |`,
      keyTakeaways: [
        'Anatomical position: erect, eyes forward, arms at sides, palms facing forward, feet flat and forward.',
        'Prone is lying face down; Supine is lying face up.',
        'Left and Right always designate the patient’s anatomical sides.',
        'Proximal and Distal apply specifically to limbs relative to trunk attachment point.',
        'Superior/Inferior, Anterior/Posterior, Medial/Lateral, Proximal/Distal, Superficial/Deep are paired opposites.'
      ],
      clinicalCorrelations: [
        'Medical documentation requires strict directional terms. Describing a laceration as "distal third of the anterior right forearm" unambiguously directs surgical and nursing staff to the exact anatomical spot.'
      ]
    },

    // =========================================================================
    // PART 3: BODY REGIONS, ABDOMINAL SUBDIVISIONS, PLANES & CAVITIES
    // =========================================================================
    {
      id: 'hb_part3_sec1_body_regions',
      title: 'Part 3: Body Parts & Regional Anatomical Terminology',
      subtitle: 'Head, Neck, Trunk, Upper Limb, Lower Limb, and Anterior/Posterior Regional Landmarks',
      content: `### Body Parts and Regional Landmarks

To facilitate precise communication among healthcare providers, the surface of the human body is categorized into specific anatomical regions.

#### Central & Appendicular Divisions:
1. **Central Axis**:
   * **Head (Cephalic)**
   * **Neck (Cervical)**
   * **Trunk**: Subdivided into the **Thorax** (chest), **Abdomen** (region between thorax and pelvis), and **Pelvis** (inferior end of trunk associated with the hip bones).
2. **Upper Limb**:
   * **Arm (Brachial)**: Extends strictly from shoulder to elbow.
   * **Forearm (Antebrachial)**: Extends from elbow to wrist.
   * **Wrist (Carpal)** and **Hand (Manual)**.
3. **Lower Limb**:
   * **Thigh (Femoral)**: Extends from hip to knee.
   * **Leg (Crural)**: Extends strictly from knee to ankle.
   * **Ankle (Tarsal)** and **Foot (Pedal)**.

---

#### Comprehensive Anterior & Posterior Regional Landmarks

![Figure 1.6A: Body Parts and Regions — Anterior View (Seeley's A&P)](/images/human_body/fig1_6a_body_regions_anterior.png)

![Figure 1.6B: Body Parts and Regions — Posterior View (Seeley's A&P)](/images/human_body/fig1_6b_body_regions_posterior.png)

---

#### Regional Terminology Reference Guide:

| Anatomical Term | Common / Lay Term | Region Location |
| :--- | :--- | :--- |
| **Frontal** | Forehead | Anterior head |
| **Orbital** | Eye | Anterior facial |
| **Nasal** | Nose | Anterior facial |
| **Oral** | Mouth | Anterior facial |
| **Cervical** | Neck | Anterior / Posterior neck |
| **Pectoral / Thoracic** | Chest | Anterior trunk |
| **Sternal** | Breastbone area | Anterior midline of chest |
| **Mammary** | Breast | Anterior chest |
| **Abdominal** | Abdomen / Belly | Anterior trunk below diaphragm |
| **Umbilical** | Navel / Belly button | Center of abdomen |
| **Pelvic** | Pelvis | Lower anterior trunk |
| **Inguinal** | Groin | Crease where thigh meets trunk |
| **Pubic** | Genital region | Anterior inferior pelvis |
| **Axillary** | Armpit | Junction of upper arm and thorax |
| **Brachial** | Arm (upper arm) | Shoulder to elbow |
| **Antecubital** | Front of elbow | Anterior depression of elbow |
| **Antebrachial** | Forearm | Elbow to wrist |
| **Carpal** | Wrist | Junction of forearm and hand |
| **Palmar** | Palm | Anterior surface of hand |
| **Digital / Phalangeal** | Fingers / Toes | Digits of hands and feet |
| **Coxal** | Hip | Lateral pelvis |
| **Femoral** | Thigh | Hip to knee |
| **Patellar** | Kneecap | Anterior knee joint |
| **Crural** | Leg (anterior shin) | Knee to ankle |
| **Tarsal** | Ankle | Junction of leg and foot |
| **Dorsum (Pedal)** | Top of foot | Superior surface of foot |
| **Occipital** | Base of skull | Posterior head |
| **Scapular** | Shoulder blade | Posterior upper thorax |
| **Vertebral** | Spinal column | Posterior midline of trunk |
| **Lumbar** | Loin / Lower back | Posterior trunk between ribs and hips |
| **Sacral** | Between hips (sacrum) | Posterior midline below lumbar |
| **Gluteal** | Buttock | Posterior hip / pelvic region |
| **Popliteal** | Back of knee | Posterior hollow behind knee joint |
| **Sural** | Calf | Posterior leg |
| **Plantar** | Sole of foot | Inferior surface of foot |
| **Calcaneal** | Heel | Posterior base of foot |`,
      keyTakeaways: [
        'Anatomical "arm" refers specifically to shoulder-to-elbow (brachial); "leg" refers specifically to knee-to-ankle (crural).',
        'Anterior landmarks include antecubital, sternal, umbilical, inguinal, patellar, and crural.',
        'Posterior landmarks include occipital, scapular, vertebral, lumbar, gluteal, popliteal, sural, and calcaneal.'
      ],
      clinicalCorrelations: [
        'Blood draws (venipuncture) are routinely performed in the **antecubital fossa** (median cubital vein); spinal taps / lumbar punctures access the **lumbar region** between L3-L4 or L4-L5 vertebrae.'
      ]
    },
    {
      id: 'hb_part3_sec2_abdominopelvic_subdivisions',
      title: 'Part 3: Abdominopelvic Quadrants & The 9 Abdominal Regions',
      subtitle: 'Clinical Localization of Visceral Organs, RUQ/LUQ/RLQ/LLQ, and the 9 Anatomic Regions',
      content: `### Subdividing the Abdominopelvic Cavity

The abdominopelvic cavity contains numerous digestive, urinary, and reproductive organs. To accurately locate clinical pain, tumors, incisions, and pathologies, clinicians and anatomists divide the abdomen in two ways: **4 Quadrants** (used primarily by clinical doctors and nurses) and **9 Regions** (used primarily by anatomists and surgeons).

---

#### 1. The 4 Abdominopelvic Quadrants
Formed by crossing two perpendicular lines (one sagittal and one transverse) through the center of the **umbilicus (navel)**.

![Figure 1.7: The 4 Abdominopelvic Quadrants](/images/human_body/fig1_7_abdominopelvic_quadrants.png)

* **Right Upper Quadrant (RUQ)**: Contains the liver (majority), gallbladder, duodenum, head of pancreas, right kidney and adrenal gland, hepatic flexure of colon.
* **Left Upper Quadrant (LUQ)**: Contains the stomach, spleen, left lobe of liver, body/tail of pancreas, left kidney and adrenal gland, splenic flexure of colon.
* **Right Lower Quadrant (RLQ)**: Contains the **appendix**, cecum, ascending colon, right ovary and uterine tube, right ureter, right spermatic cord.
* **Left Lower Quadrant (LLQ)**: Contains the sigmoid colon, descending colon, left ovary and uterine tube, left ureter, left spermatic cord.

---

#### 2. The 9 Abdominopelvic Regions
Formed by a tic-tac-toe grid of 4 lines: two vertical **midclavicular lines** and two horizontal lines (**subcostal line** below the ribs and **transtubercular/intertubercular line** across the iliac tubercles).

![Figure 1.8: The 9 Abdominopelvic Regions and Contained Organs](/images/human_body/fig1_8_abdominopelvic_regions.png)

##### The 3 Rows and 9 Named Regions:
* **Top Row (Superior)**:
  * **Right Hypochondriac Region** (*hypo-*, below; *chondro-*, cartilage): Right lobe of liver, gallbladder, right kidney.
  * **Epigastric Region** (*epi-*, upon; *gastro-*, stomach): Liver, stomach, pancreas, duodenum.
  * **Left Hypochondriac Region**: Spleen, stomach fundus, splenic flexure of colon, left kidney.
* **Middle Row**:
  * **Right Lumbar (Lateral) Region**: Ascending colon, right kidney.
  * **Umbilical Region**: Small intestine (jejunum/ileum), transverse colon, abdominal aorta.
  * **Left Lumbar (Lateral) Region**: Descending colon, left kidney.
* **Bottom Row (Inferior)**:
  * **Right Iliac (Inguinal) Region**: Cecum, **appendix**.
  * **Hypogastric (Pubic) Region** (*hypo-*, below; *gastro-*, stomach): Urinary bladder (when distended), sigmoid colon, rectum, uterus (in females).
  * **Left Iliac (Inguinal) Region**: Sigmoid colon, left ovary/tube.`,
      keyTakeaways: [
        '4 Quadrants intersect at the umbilicus: RUQ (liver, gallbladder), LUQ (stomach, spleen), RLQ (appendix, cecum), LLQ (sigmoid colon).',
        '9 Regions: Right/Left Hypochondriac, Epigastric, Right/Left Lumbar, Umbilical, Right/Left Iliac (Inguinal), and Hypogastric (Pubic).',
        'The appendix is located specifically in the RLQ and Right Iliac region.'
      ],
      clinicalCorrelations: [
        'RLQ pain with localized rebound tenderness (McBurney’s point) is the cardinal sign of acute appendicitis; RUQ pain radiating to the right shoulder indicates acute cholecystitis (gallstones).'
      ]
    },
    {
      id: 'hb_part3_sec3_planes_sections',
      title: 'Part 3: Body Planes & Organ Sectioning',
      subtitle: '1.7 Sagittal, Frontal, Transverse Planes, and Longitudinal vs Cross Sections',
      content: `### Body Planes

Anatomists and imaging radiologists view internal body structures by slicing along imaginary flat surfaces called **planes**.

![Figure 1.9: Body Planes — Sagittal, Frontal, and Transverse](/images/human_body/fig1_9_body_planes.png)

---

#### The 3 Primary Cardinal Planes:

1. **Sagittal Plane**: A vertical plane running vertically from anterior to posterior, dividing the body or an organ into **right and left sections**.
   * **Midsagittal (Median) Plane**: Passes precisely through the midline of the body, dividing it into **equal right and left halves**.
   * **Parasagittal Plane**: Any sagittal plane that is offset from the midline, dividing the body into unequal right and left portions.
2. **Frontal (Coronal) Plane**: Runs vertically at a right angle to the sagittal plane, dividing the body or organ into **anterior (front) and posterior (back) portions**.
3. **Transverse (Horizontal / Cross-Sectional) Plane**: Runs horizontally, parallel to the ground, dividing the body or organ into **superior (upper) and inferior (lower) portions**.

---

### Organ Sections

When anatomical organs (such as the brain, blood vessels, kidneys, or intestines) are sliced for microscopic analysis or medical scans, the resulting image depends entirely on the angle of section relative to the organ’s long axis.

![Figure 1.10: Planes of Section through an Organ](/images/human_body/fig1_10_organ_sections.png)

* **Longitudinal Section**: A cut parallel to the long axis of the organ.
* **Transverse Section (Cross Section)**: A cut made at a right angle (90°) to the long axis of the organ.
* **Oblique Section**: A cut made across the long axis at any angle other than a right angle (diagonal).`,
      keyTakeaways: [
        'Sagittal plane divides into left and right (Midsagittal = equal halves).',
        'Frontal (Coronal) plane divides into anterior (front) and posterior (back).',
        'Transverse (Horizontal) plane divides into superior (top) and inferior (bottom).',
        'Organ cuts: Longitudinal (parallel to long axis), Transverse (90° cross cut), Oblique (diagonal).'
      ],
      clinicalCorrelations: [
        'CT and MRI machines display anatomical slices primarily in transverse (axial), sagittal, and coronal planes. Radiologists must mentally integrate these 2D planes into a 3D patient anatomy.'
      ]
    },
    {
      id: 'hb_part3_sec4_cavities_serous_membranes',
      title: 'Part 3: Body Cavities & Serous Membranes',
      subtitle: 'Dorsal vs Ventral Cavities, Thoracic & Abdominopelvic Subdivisions, Parietal vs Visceral Membranes',
      content: `### Body Cavities

The body contains internal fluid-filled spaces called **cavities** that house, cushion, and protect internal organs (**viscera**).

![Figure 1.11: Major Body Cavities — Dorsal and Ventral Subdivisions](/images/human_body/fig1_11_body_cavities.png)

---

#### 1. Dorsal Body Cavity (Posterior)
Located along the posterior aspect of the body; cushioned by cerebrospinal fluid (CSF) and meninges:
* **Cranial Cavity**: Enclosed by the skull bones; houses the **brain**.
* **Vertebral (Spinal) Canal**: Formed by the vertebral column; houses the **spinal cord**.

#### 2. Ventral Body Cavity (Anterior)
Much larger anterior cavity subdivided by the muscular **diaphragm** into:
* **Thoracic Cavity** (superior to diaphragm):
  * **Two Pleural Cavities**: Each surrounds one lung.
  * **Pericardial Cavity**: Located in the mediastinum; surrounds the heart.
  * **Mediastinum**: Central region of thorax between the lungs containing the heart, thymus, esophagus, trachea, and major blood vessels.
* **Abdominopelvic Cavity** (inferior to diaphragm):
  * **Abdominal Cavity**: Superior portion containing the stomach, intestines, liver, gallbladder, spleen, and kidneys.
  * **Pelvic Cavity**: Inferior portion bounded by hip bones containing the urinary bladder, terminal large intestine (rectum), and internal reproductive organs.

---

### Serous Membranes (Serosa)

The trunk cavities (pleural, pericardial, and peritoneal) are lined by continuous double-layered **serous membranes**.

![Figure 1.12: Location of Serous Membranes in Pericardial, Pleural, and Peritoneal Cavities](/images/human_body/fig1_12_serous_membranes.png)

#### The Double-Layered Architecture:
* **Parietal Layer**: Lines the outer inner wall of the body cavity.
* **Visceral Layer**: Directly covers and adheres to the external surface of the internal organs.
* **Serous Cavity**: The potential microscopic space between the parietal and visceral layers, filled with a thin film of lubricating **serous fluid** secreted by the membranes. Serous fluid eliminates friction as organs move, contract, and slide (e.g., heart beating, lungs expanding).

---

#### The 3 Named Serous Cavities & Membranes:

| Serous Membrane | Location / Associated Organ | Parietal Layer | Visceral Layer |
| :--- | :--- | :--- | :--- |
| **Pericardium** | Surrounds the **Heart** | **Parietal Pericardium** lines the fibrous pericardial sac | **Visceral Pericardium (Epicardium)** covers heart muscle surface |
| **Pleura** | Surrounds each **Lung** | **Parietal Pleura** lines the thoracic wall and diaphragm | **Visceral Pleura** covers the lung external surface |
| **Peritoneum** | Surrounds **Abdominopelvic Organs** | **Parietal Peritoneum** lines the abdominal cavity walls | **Visceral Peritoneum** covers external surfaces of abdominal viscera |

---

### Mesenteries & Retroperitoneal Organs

* **Mesenteries**: Specialized double-layered folds of the peritoneum that anchor abdominal organs to the posterior body wall, prevent intestinal tangling, and provide a secure conduit for blood vessels, lymphatics, and nerves supplying the intestines.
* **Retroperitoneal Organs** (*retro-*, behind): Organs located outside the peritoneal cavity, positioned **behind the parietal peritoneum** against the posterior abdominal wall.
  * Major retroperitoneal organs: **Kidneys**, **Adrenal Glands**, **Pancreas**, **Duodenum**, **Ascending & Descending Colon**, and **Urinary Bladder**.`,
      keyTakeaways: [
        'Dorsal cavity contains cranial cavity (brain) and vertebral canal (spinal cord).',
        'Ventral cavity is divided by diaphragm into thoracic cavity (pleural, pericardial, mediastinum) and abdominopelvic cavity.',
        'Serous membranes: Parietal lines cavity wall; Visceral covers organ surface; Serous fluid prevents friction.',
        'Pericardium (heart), Pleura (lungs), Peritoneum (abdominopelvic organs).',
        'Retroperitoneal organs lie behind parietal peritoneum: kidneys, adrenal glands, pancreas, portions of intestine, bladder.'
      ],
      clinicalCorrelations: [
        'Pleurisy (pleuritis) and Pericarditis occur when serous membranes become inflamed and rough, losing lubricating fluid and causing severe friction-rub chest pain with breathing or heartbeats.'
      ]
    }
  ],
  quiz: [] // Populated via question_bank_human_body
};
