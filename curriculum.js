// Comprehensive K1-K12 English Reading Comprehension Curriculum
// Aligned with CCSS (Common Core State Standards), Lexile Levels & CEFR Framework

const K12_CURRICULUM = [
  // ==================== EARLY YEARS / KINDERGARTEN (K1 - K3) ====================
  {
    id: "k1-01",
    stage: "Kindergarten",
    grade: "K1 (Preschool 3-4y)",
    lexile: "BR40L - BR",
    cefr: "Pre-A1",
    theme: "Nature & Animals",
    title: "Sunny the Little Duck",
    audioSpeed: 0.8,
    targetWords: [
      { word: "pond", phonetic: "/pɒnd/", pos: "n.", meaning: "池塘", example: "Ducks swim in the pond." },
      { word: "splash", phonetic: "/splæʃ/", pos: "v.", meaning: "飞溅，戏水", example: "Water splashes everywhere." },
      { word: "happy", phonetic: "/ˈhæp.i/", pos: "adj.", meaning: "快乐的", example: "Sunny feels very happy." }
    ],
    content: `Sunny is a little yellow duck. 
Sunny loves the cool blue pond. 
"Quack, quack!" says Sunny. 
He splashes in the water with his small orange feet. 
The warm sun shines high in the blue sky. 
Sunny finds a little green leaf. He is very happy today!`,
    skills: ["Phonics Awareness", "Basic Color & Animal Words", "Literal Recall"],
    questions: [
      {
        id: "q1",
        type: "single",
        text: "What color is Sunny the duck?",
        options: ["Blue", "Yellow", "Green", "Red"],
        answer: 1,
        explanation: "The passage states: 'Sunny is a little yellow duck.'",
        lexileSkill: "Key Details"
      },
      {
        id: "q2",
        type: "single",
        text: "Where does Sunny love to swim?",
        options: ["In the cool blue pond", "In a tree", "In a toy house", "On the green grass"],
        answer: 0,
        explanation: "The text mentions: 'Sunny loves the cool blue pond.'",
        lexileSkill: "Key Details"
      },
      {
        id: "q3",
        type: "single",
        text: "What does Sunny find in the pond?",
        options: ["A gold coin", "A little fish", "A little green leaf", "A big red ball"],
        answer: 2,
        explanation: "The text says: 'Sunny finds a little green leaf.'",
        lexileSkill: "Explicit Recall"
      }
    ]
  },
  {
    id: "k2-01",
    stage: "Kindergarten",
    grade: "K2 (Junior KG 4-5y)",
    lexile: "100L - 150L",
    cefr: "A1-",
    theme: "Friendship & Sharing",
    title: "The Colorful Umbrella",
    audioSpeed: 0.85,
    targetWords: [
      { word: "drizzle", phonetic: "/ˈdrɪz.əl/", pos: "n./v.", meaning: "毛毛雨", example: "A gentle drizzle falls from the sky." },
      { word: "share", phonetic: "/ʃeər/", pos: "v.", meaning: "分享", example: "Good friends share their toys." },
      { word: "shelter", phonetic: "/ˈʃel.tər/", pos: "n.", meaning: "遮蔽处，避雨所", example: "The umbrella gives them shelter." }
    ],
    content: `Pitter-patter, pitter-patter! Soft raindrops fall from the gray cloud. 
Mia has a bright rainbow umbrella. It is red, orange, yellow, green, and purple. 
Her friend Leo has no umbrella. Leo's brown coat is getting wet. 
"Come in, Leo! Stand under my umbrella," Mia calls with a cheerful smile. 
Leo steps close. Now both of them are warm and dry. 
Sharing makes a rainy day feel warm and sunny!`,
    skills: ["Identifying Cause & Effect", "Character Emotions", "Sight Words"],
    questions: [
      {
        id: "q1",
        type: "single",
        text: "Why was Leo's coat getting wet?",
        options: ["He fell into a river", "It was raining and he had no umbrella", "He spilled his water cup", "He was washing his coat"],
        answer: 1,
        explanation: "The text explains: 'Her friend Leo has no umbrella. Leo's brown coat is getting wet.'",
        lexileSkill: "Cause and Effect"
      },
      {
        id: "q2",
        type: "single",
        text: "What does Mia invite Leo to do?",
        options: ["Run home quickly", "Stand under her umbrella", "Play in the puddles", "Borrow her boots"],
        answer: 1,
        explanation: "Mia says: 'Come in, Leo! Stand under my umbrella.'",
        lexileSkill: "Key Details"
      },
      {
        id: "q3",
        type: "single",
        text: "What is the moral message of this story?",
        options: ["Rainy days are scary", "Always wear heavy boots", "Sharing brings warmth and happiness", "Umbrellas should be large"],
        answer: 2,
        explanation: "The story concludes: 'Sharing makes a rainy day feel warm and sunny!'",
        lexileSkill: "Theme Identification"
      }
    ]
  },
  {
    id: "k3-01",
    stage: "Kindergarten",
    grade: "K3 (Senior KG 5-6y)",
    lexile: "180L - 250L",
    cefr: "A1",
    theme: "Curiosity & Science",
    title: "Oliver the Curious Owl",
    audioSpeed: 0.9,
    targetWords: [
      { word: "curious", phonetic: "/ˈkjʊə.ri.əs/", pos: "adj.", meaning: "好奇的", example: "Oliver is very curious about the world." },
      { word: "nocturnal", phonetic: "/nɒkˈtɜː.nəl/", pos: "adj.", meaning: "夜行性的", example: "Owls are nocturnal birds." },
      { word: "twinkle", phonetic: "/ˈtwɪŋ.kəl/", pos: "v.", meaning: "闪烁", example: "The stars twinkle in the dark night." }
    ],
    content: `Oliver is a fluffy young owl with huge, round amber eyes. 
Most animals play in the bright daytime, but Oliver stays awake all night long. 
"Why does the silver moon change its shape?" Oliver whispers to his grandfather. 
Grandfather smiles warmly and replies, "The moon orbits our planet Earth, catching sunlight from different angles as it travels." 
Oliver listens quietly as tiny stars twinkle around the velvet sky. 
He decides he will learn all the secrets of the nighttime forest!`,
    skills: ["Inference", "Context Clues", "Informational Fiction"],
    questions: [
      {
        id: "q1",
        type: "single",
        text: "When is Oliver awake and active?",
        options: ["In the early morning only", "At noon during lunch", "All night long", "Only when it rains"],
        answer: 2,
        explanation: "The passage states that Oliver 'stays awake all night long.'",
        lexileSkill: "Key Details"
      },
      {
        id: "q2",
        type: "single",
        text: "What makes the moon appear to change shapes according to Grandfather?",
        options: ["It catches fire every night", "It orbits Earth and catches sunlight at different angles", "Clouds paint different patterns on it", "It shrinks when it gets cold"],
        answer: 1,
        explanation: "Grandfather explains that 'the moon orbits our planet Earth, catching sunlight from different angles.'",
        lexileSkill: "Informational Comprehension"
      },
      {
        id: "q3",
        type: "single",
        text: "Which word best describes Oliver's character?",
        options: ["Lazy", "Inquisitive and eager to learn", "Fearful of darkness", "Angry"],
        answer: 1,
        explanation: "Oliver asks deep questions about nature and resolves to learn forest secrets, showing he is inquisitive (curious).",
        lexileSkill: "Character Analysis"
      }
    ]
  },

  // ==================== PRIMARY SCHOOL (G1 - G6) ====================
  {
    id: "g1-01",
    stage: "Primary",
    grade: "Grade 1 (6-7y)",
    lexile: "300L - 420L",
    cefr: "A1+",
    theme: "Animals & Habitats",
    title: "The Busy Honeybee Community",
    audioSpeed: 0.95,
    targetWords: [
      { word: "nectar", phonetic: "/ˈnek.tər/", pos: "n.", meaning: "花蜜", example: "Bees gather sweet nectar from flowers." },
      { word: "hive", phonetic: "/haɪv/", pos: "n.", meaning: "蜂巢", example: "Thousands of bees live inside the hive." },
      { word: "waggle", phonetic: "/ˈwæɡ.əl/", pos: "v./n.", meaning: "摇摆舞，摆动", example: "The bee dances a waggle dance to communicate." }
    ],
    content: `Have you ever heard a gentle buzz near garden flowers? 
It is probably a worker honeybee looking for food. 
Worker bees fly from bloom to bloom collecting sweet liquid called nectar and golden powder called pollen. 
When a bee discovers a meadow filled with blossoms, it flies back to the hive and performs a special waggle dance. 
This clever dance shows other bees the exact direction and distance of the flowers. 
Together, thousands of hardworking bees turn nectar into golden honey to feed their entire colony!`,
    skills: ["Main Idea & Details", "Sequence of Events", "Vocabulary in Context"],
    questions: [
      {
        id: "q1",
        type: "single",
        text: "What do worker bees collect from blooming flowers?",
        options: ["Dew drops and grass seeds", "Nectar and pollen", "Small stones and tree bark", "Soil and twigs"],
        answer: 1,
        explanation: "The passage notes that worker bees gather 'sweet liquid called nectar and golden powder called pollen.'",
        lexileSkill: "Key Details"
      },
      {
        id: "q2",
        type: "single",
        text: "How do honeybees communicate the location of flowers to their hive mates?",
        options: ["By buzzing with different pitches", "By writing marks on leaves", "By performing a waggle dance", "By tapping their feet on the ground"],
        answer: 2,
        explanation: "The bee 'performs a special waggle dance... This clever dance shows other bees the exact direction and distance.'",
        lexileSkill: "Cause and Effect / Informational"
      },
      {
        id: "q3",
        type: "single",
        text: "What is the primary purpose of the hive turning nectar into honey?",
        options: ["To sell it to humans", "To build thicker honeycombs", "To feed the entire colony", "To decorate the hive walls"],
        answer: 2,
        explanation: "The text states: 'bees turn nectar into golden honey to feed their entire colony!'",
        lexileSkill: "Author's Purpose & Summary"
      }
    ]
  },
  {
    id: "g2-01",
    stage: "Primary",
    grade: "Grade 2 (7-8y)",
    lexile: "450L - 550L",
    cefr: "A2-",
    theme: "Earth & Water Cycle",
    title: "The Incredible Journey of Water",
    audioSpeed: 0.95,
    targetWords: [
      { word: "evaporate", phonetic: "/ɪˈvæp.ər.eɪt/", pos: "v.", meaning: "蒸发", example: "Water heats up and evaporates into vapor." },
      { word: "condense", phonetic: "/kənˈdens/", pos: "v.", meaning: "凝结", example: "Vapor condenses into fluffy clouds." },
      { word: "precipitation", phonetic: "/prɪˌsɪp.ɪˈteɪ.ʃən/", pos: "n.", meaning: "降水（雨、雪、雹）", example: "Rain and snow are forms of precipitation." }
    ],
    content: `The water you drank this morning might be the exact same water that a dinosaur splashed in millions of years ago! 
Earth's water is constantly moving in a never-ending loop known as the water cycle. 
First, heat from the sun warms lakes, rivers, and oceans. The liquid turns into invisible gas called water vapor and rises into the sky. This process is evaporation. 
High above the ground where the air is cold, the vapor chills and condenses into billions of tiny droplets, creating fluffy clouds. 
When those droplets cluster together and become too heavy to float, gravity pulls them downward as precipitation—rain, snow, sleet, or hail. 
The water fills rivers and returns to oceans, ready to start the cycle again!`,
    skills: ["Scientific Process Tracking", "Technical Terminology", "Cause-Effect Chains"],
    questions: [
      {
        id: "q1",
        type: "single",
        text: "What power source drives the initial evaporation of water on Earth?",
        options: ["Strong ocean currents", "Heat from the sun", "Wind blowing across plains", "Geothermal volcanic energy"],
        answer: 1,
        explanation: "'First, heat from the sun warms lakes, rivers, and oceans. The liquid turns into invisible gas...'",
        lexileSkill: "Cause and Effect"
      },
      {
        id: "q2",
        type: "single",
        text: "What happens during condensation?",
        options: ["Water freezes solid on mountains", "Water vapor cools and forms clouds of tiny droplets", "Raindrops soak into plant roots", "Rivers carve deep canyons"],
        answer: 1,
        explanation: "'High above the ground where the air is cold, the vapor chills and condenses into billions of tiny droplets, creating fluffy clouds.'",
        lexileSkill: "Scientific Definition"
      },
      {
        id: "q3",
        type: "single",
        text: "Why might today's water have belonged to a dinosaur?",
        options: ["Scientists keep dinosaur fossils in tanks", "Water is constantly recycled on Earth rather than created new", "Water comes from outer space meteorites", "Dinosaurs created special eternal lakes"],
        answer: 1,
        explanation: "Earth's water moves in a continuous cycle, meaning the total water supply is recycled over millions of years.",
        lexileSkill: "Inference & Big Idea"
      }
    ]
  },
  {
    id: "g3-01",
    stage: "Primary",
    grade: "Grade 3 (8-9y)",
    lexile: "580L - 680L",
    cefr: "A2",
    theme: "History & Inventors",
    title: "Thomas Edison and the Glow of Persistence",
    audioSpeed: 1.0,
    targetWords: [
      { word: "filament", phonetic: "/ˈfɪl.ə.mənt/", pos: "n.", meaning: "灯丝", example: "He tested thousands of materials for the filament." },
      { word: "persistence", phonetic: "/pəˈsɪs.təns/", pos: "n.", meaning: "坚持不懈，毅力", example: "Great inventions require immense persistence." },
      { word: "commercial", phonetic: "/kəˈmɜː.ʃəl/", pos: "adj.", meaning: "商业的，大众可用的", example: "He created the first commercial electric light." }
    ],
    content: `Before electric bulbs illuminated cities, homes were lit by dim gas lamps and flickering candles, which produced choking smoke and posed severe fire hazards. 
Thomas Alva Edison envisioned a safer world powered by clean electric illumination. 
However, bringing this vision to reality required tireless perseverance. Edison and his dedicated team of researchers tested over six thousand organic materials—including platinum, cedar shavings, and even strands of Japanese bamboo—searching for an ideal filament that could glow steadily for hundreds of hours without burning out. 
When asked about his thousands of unsuccessful trials, Edison famously replied that he had not failed; he had successfully identified thousands of materials that did not work. 
In October 1879, a carbonized cotton thread filament shone continuously for over forty hours, ushering human civilization into a luminous modern era.`,
    skills: ["Historical Inquiry", "Character Trait Analysis", "Vocabulary in Context"],
    questions: [
      {
        id: "q1",
        type: "single",
        text: "What major drawback was associated with lighting homes before electric bulbs?",
        options: ["They required too much electricity", "They caused thick smoke and serious fire hazards", "They were made exclusively from melted wax", "They were banned by governments"],
        answer: 1,
        explanation: "The opening sentence mentions gas lamps and candles 'produced choking smoke and posed severe fire hazards.'",
        lexileSkill: "Supporting Details"
      },
      {
        id: "q2",
        type: "single",
        text: "How did Edison interpret his numerous unsuccessful filament tests?",
        options: ["As embarrassing personal defeats", "As reasons to abandon the project", "As valuable discoveries of what materials do not work", "As proof that electric lighting was impossible"],
        answer: 2,
        explanation: "Edison asserted he had not failed, but had successfully identified materials that did not work.",
        lexileSkill: "Perspective & Interpretation"
      },
      {
        id: "q3",
        type: "single",
        text: "Which material finally succeeded in glowing for forty hours in October 1879?",
        options: ["Platinum wire", "Carbonized cotton thread", "Cedar shaving", "Japanese bamboo strip"],
        answer: 1,
        explanation: "The text specifies: 'a carbonized cotton thread filament shone continuously for over forty hours.'",
        lexileSkill: "Explicit Details"
      }
    ]
  },
  {
    id: "g4-01",
    stage: "Primary",
    grade: "Grade 4 (9-10y)",
    lexile: "720L - 820L",
    cefr: "A2+",
    theme: "Ecology & Rainforests",
    title: "The Multi-Layered Canopy of the Amazon",
    audioSpeed: 1.0,
    targetWords: [
      { word: "biodiversity", phonetic: "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/", pos: "n.", meaning: "生物多样性", example: "Rainforests possess staggering biodiversity." },
      { word: "emergent", phonetic: "/ɪˈmɜː.dʒənt/", pos: "adj.", meaning: "涌现的，突出的", example: "Giant trees pierce into the emergent layer." },
      { word: "understory", phonetic: "/ˈʌn.dəˌstɔː.ri/", pos: "n.", meaning: "下层林木，林下层", example: "Creatures in the dark understory have keen hearing." }
    ],
    content: `The Amazon Basin hosts the planet's most majestic and dense tropical rainforest, encompassing an ecological architecture structured into four distinct vertical tiers. 
At the summit towers the emergent layer, where colossal hardwood trees soar up to two hundred feet into blazing equatorial sunshine, braving torrential downpours and forceful winds. Harpy eagles glide effortlessly above this high wilderness. 
Beneath lies the continuous green roof called the canopy, sheltering roughly seventy to ninety percent of all rainforest life. Toucans, spider monkeys, and vibrant tree frogs dwell here amidst an endless sea of tangled vines and epiphytes. 
Further down is the dim understory, a realm of perpetual twilight where broad-leaved shrubs compete intensely for scarce sunbeams. 
Finally, the damp forest floor accommodates fungal decomposers, stealthy jaguars, and legions of leafcutter ants who rapidly recycle decaying organic debris back into nourishing soil nutrients.`,
    skills: ["Organizational Text Structure", "Synthesizing Layered Information", "Domain Specific Vocabulary"],
    questions: [
      {
        id: "q1",
        type: "single",
        text: "Which vertical layer of the rainforest houses the largest percentage of animal life?",
        options: ["The emergent layer", "The canopy layer", "The forest floor", "The understory layer"],
        answer: 1,
        explanation: "The passage notes that the canopy 'shelters roughly seventy to ninety percent of all rainforest life.'",
        lexileSkill: "Key Details"
      },
      {
        id: "q2",
        type: "single",
        text: "What challenges do trees in the emergent layer endure?",
        options: ["Extreme darkness and thick ground moss", "Blazing equatorial sunshine, torrential downpours, and forceful winds", "Lack of moisture and insect pollination", "Freezing blizzards and snow"],
        answer: 1,
        explanation: "The text states trees in the emergent layer face 'blazing equatorial sunshine, torrential downpours and forceful winds.'",
        lexileSkill: "Contextual Evidence"
      },
      {
        id: "q3",
        type: "single",
        text: "What vital ecological function occurs primarily on the damp forest floor?",
        options: ["Solar photosynthesis", "Fast recycling of decaying organic debris by decomposers", "Long-distance wind pollination", "Nectar collection by eagles"],
        answer: 1,
        explanation: "Fungal decomposers and ants 'rapidly recycle decaying organic debris back into nourishing soil nutrients.'",
        lexileSkill: "Synthesis & Ecological Role"
      }
    ]
  },
  {
    id: "g5-01",
    stage: "Primary",
    grade: "Grade 5 (10-11y)",
    lexile: "830L - 920L",
    cefr: "B1-",
    theme: "Space Exploration",
    title: "Voyager 1: Humanity's Cosmic Emissary",
    audioSpeed: 1.0,
    targetWords: [
      { word: "interstellar", phonetic: "/ˌɪn.təˈstel.ər/", pos: "adj.", meaning: "星际的", example: "Voyager 1 entered interstellar space." },
      { word: "trajectory", phonetic: "/trəˈdʒek.tər.i/", pos: "n.", meaning: "轨道，轨迹", example: "Gravity assists propelled its trajectory." },
      { word: "enduring", phonetic: "/ɪnˈdjʊə.rɪŋ/", pos: "adj.", meaning: "持久的，不朽的", example: "The Golden Record is an enduring artifact." }
    ],
    content: `Launched in late summer 1977, NASA's robotic probe Voyager 1 embarked upon what was initially budgeted as a four-year grand tour of Jupiter and Saturn. 
Exploiting a rare geometric alignment of outer planets that occurs merely once every 176 years, engineers utilized gravitational slingshots—propelling the craft forward using the planets' own gravitational momentum without burning excess fuel. 
Voyager captured breathtaking high-resolution images of Jupiter's swirling Great Red Spot and active volcanic eruptions on its moon Io, before unraveling intricate ring structures around Saturn. 
Yet Voyager's defining milestone came decades later in August 2012, when instruments recorded a precipitous drop in solar particles and a surge in galactic cosmic rays, signifying that Voyager 1 had officially breached the heliosphere to enter interstellar space. 
Aboard hangs the Golden Record, an encrypted phonograph containing greetings in fifty-five languages, musical symphonies, and natural sounds, wandering silently across eternity as a testament to Earth's boundless curiosity.`,
    skills: ["Chronological & Cause Analysis", "Inferring Deeper Symbolism", "Complex Scientific Prose"],
    questions: [
      {
        id: "q1",
        type: "single",
        text: "How did engineers conserve rocket fuel while propelling Voyager 1 across immense distances?",
        options: ["By installing experimental solar sails", "By employing planetary gravitational slingshots", "By relying on nuclear fusion thrusters", "By riding interstellar solar winds"],
        answer: 1,
        explanation: "The text explains engineers 'utilized gravitational slingshots—propelling the craft forward using the planets' own gravitational momentum.'",
        lexileSkill: "Technical Details"
      },
      {
        id: "q2",
        type: "single",
        text: "What empirical evidence confirmed that Voyager 1 entered interstellar space in 2012?",
        options: ["Direct radio communication from an alien source", "A sudden decrease in solar particles accompanied by a rise in galactic cosmic rays", "The total exhaustion of its electrical batteries", "A collision with an asteroid belt"],
        answer: 1,
        explanation: "Instruments documented 'a precipitous drop in solar particles and a surge in galactic cosmic rays.'",
        lexileSkill: "Citing Evidence"
      },
      {
        id: "q3",
        type: "single",
        text: "What symbolic function does the Golden Record serve aboard the probe?",
        options: ["A navigation map to guide the probe back to Earth", "A backup operating system for the craft's computers", "A peaceful greeting and cultural snapshot representing humanity to potential cosmos travelers", "An emergency beacon broadcasting military codes"],
        answer: 2,
        explanation: "It contains diverse languages, symphonies, and natural sounds as a testament to Earth's culture and curiosity.",
        lexileSkill: "Author's Tone & Symbolism"
      }
    ]
  },
  {
    id: "g6-01",
    stage: "Primary",
    grade: "Grade 6 (11-12y)",
    lexile: "930L - 1010L",
    cefr: "B1",
    theme: "Ancient Architecture & Engineering",
    title: "Aqueducts: The Arteries of the Roman Empire",
    audioSpeed: 1.0,
    targetWords: [
      { word: "gradient", phonetic: "/ˈɡreɪ.di.ənt/", pos: "n.", meaning: "坡度，倾斜度", example: "Water flowed along a carefully calculated gradient." },
      { word: "subterranean", phonetic: "/ˌsʌb.təˈreɪ.ni.ən/", pos: "adj.", meaning: "地下的", example: "Most aqueduct channels were subterranean." },
      { word: "monumental", phonetic: "/ˌmɒn.jəˈmen.təl/", pos: "adj.", meaning: "丰碑式的，壮丽宏大的", example: "The multi-tiered arches are monumental structures." }
    ],
    content: `At its imperial zenith, Rome consumed over three hundred million gallons of freshwater daily—a logistical feat unmatched by any ancient society. 
The architectural triumph that facilitated this urban marvel was the aqueduct network. 
Contrary to popular imagination depicting soaring stone arcades striding across plains, over eighty percent of the aqueduct conduits were actually subterranean trenches lined with hydraulic pozzolana cement. 
Subterranean construction shielded vital water supplies against summer evaporation, microbial contamination, and enemy sabotage during wartime. 
Roman surveyors achieved this through mathematical precision using instruments like the chorobates, establishing an extraordinarily gentle downward gradient—often dropping merely a few inches per kilometer. 
Gravity alone propelled pristine mountain springs across dozens of miles directly into distribution cisterns (castella aquae), supplying public bathhouses, fountains, and private residences across the metropolis.`,
    skills: ["Contrast & Historical Critique", "Engineering Terminology", "Fact vs. Popular Myth"],
    questions: [
      {
        id: "q1",
        type: "single",
        text: "What common misconception regarding Roman aqueducts is refuted in the text?",
        options: ["That Romans used iron pipes instead of lead", "That aqueducts were primarily above-ground soaring arched bridges", "That water was only allocated to emperors", "That the water system never functioned during winter"],
        answer: 1,
        explanation: "The author explicitly states: 'Contrary to popular imagination depicting soaring stone arcades... over eighty percent of the aqueduct conduits were actually subterranean trenches.'",
        lexileSkill: "Analyzing Misconceptions"
      },
      {
        id: "q2",
        type: "single",
        text: "Why did Roman engineers prioritize building underground conduits instead of surface bridges?",
        options: ["It cost far less marble to decorate", "It prevented evaporation, microbial contamination, and military sabotage", "Mountain springs were impossible to tap above ground", "Underground passages doubled as military subway escape tunnels"],
        answer: 1,
        explanation: "Subterranean placement protected water from 'summer evaporation, microbial contamination, and enemy sabotage.'",
        lexileSkill: "Cause and Reasoning"
      },
      {
        id: "q3",
        type: "single",
        text: "What motive power propelled the water across miles from distant springs into Rome?",
        options: ["Steam-driven Archimedes screws", "Pressurized bronze pumps", "Natural gravitational force along a precise gentle incline", "Team of draft oxen turning water wheels"],
        answer: 2,
        explanation: "The text highlights that 'Gravity alone propelled pristine mountain springs across dozens of miles.'",
        lexileSkill: "Key Scientific Insight"
      }
    ]
  },

  // ==================== MIDDLE SCHOOL (G7 - G9) ====================
  {
    id: "g7-01",
    stage: "Middle",
    grade: "Grade 7 (12-13y)",
    lexile: "970L - 1050L",
    cefr: "B1+",
    theme: "Marine Biology & Climate",
    title: "Coral Reefs: Calcified Metropolises Under Thermal Stress",
    audioSpeed: 1.0,
    targetWords: [
      { word: "symbiotic", phonetic: "/ˌsɪm.baɪˈɒt.ɪk/", pos: "adj.", meaning: "共生的", example: "Corals maintain a mutualistic symbiotic alliance." },
      { word: "expulsion", phonetic: "/ɪkˈspʌl.ʃən/", pos: "n.", meaning: "驱逐，排出", example: "Thermal stress prompts the expulsion of algae." },
      { word: "resilience", phonetic: "/rɪˈzɪl.jəns/", pos: "n.", meaning: "恢复力，韧性", example: "Marine reserves bolster ecological resilience." }
    ],
    content: `Although occupying less than one percent of the marine seabed, coral reefs sustain more than a quarter of all marine species, functioning as vibrant underwater rainforests. 
The foundation of this immense biodiversity rests upon a delicate mutualistic symbiosis between calcifying coral polyps and microscopic photosynthetic dinoflagellates known as zooxanthellae residing within polyp tissues. 
In exchange for calcium carbonate shelter and metabolic waste products, the algae provide up to ninety percent of the coral's energy requirements through photosynthesis, while imparting radiant hues. 
However, anthropogenic marine heating disrupts this intricate equilibrium. 
When seawater temperatures exceed regional summer thresholds by merely one to two degrees Celsius for sustained intervals, the algal photosynthetic apparatus deteriorates, producing harmful reactive oxygen species. 
In response, the coral host undergoes bleach expulsion, casting off its microscopic symbionts and revealing translucent tissue over chalk-white skeletons. 
While bleached corals are not instantly dead, prolonged thermal anomalies inevitably induce mass starvation and mortality across reef colonies.`,
    skills: ["Biochemical Interactions", "Complex Cause-Effect Mechanics", "Synthesizing Environmental Data"],
    questions: [
      {
        id: "q1",
        type: "single",
        text: "What critical service do zooxanthellae render to host coral polyps in their mutualistic bond?",
        options: ["They construct hard limestone outer shields", "They furnish up to 90% of energy requirements via photosynthesis", "They clean sediment off the polyp tentacles", "They sting predatory fish with venomous nematocysts"],
        answer: 1,
        explanation: "The text states the algae 'provide up to ninety percent of the coral's energy requirements through photosynthesis.'",
        lexileSkill: "Biological Mechanics"
      },
      {
        id: "q2",
        type: "single",
        text: "What immediate chemical phenomenon triggers coral polyps to expel their algae?",
        options: ["Excessive accumulation of salt crystals", "Damage to the algal photosynthetic machinery generating toxic reactive oxygen", "A total deprivation of carbon dioxide", "Heavy metal poisoning from plastic degradation"],
        answer: 1,
        explanation: "'the algal photosynthetic apparatus deteriorates, producing harmful reactive oxygen species,' inducing expulsion.",
        lexileSkill: "Scientific Causation"
      },
      {
        id: "q3",
        type: "single",
        text: "Which statement accurately portrays the physiological condition of a bleached coral?",
        options: ["It has transformed into fossilized geological stone", "It is deceased and incapable of recovery under any circumstances", "It is acutely starved and vulnerable, yet still alive unless elevated heat persists", "It has successfully adapted to high thermal conditions"],
        answer: 2,
        explanation: "The passage notes: 'While bleached corals are not instantly dead, prolonged thermal anomalies inevitably induce mass starvation.'",
        lexileSkill: "Nuanced Interpretation"
      }
    ]
  },
  {
    id: "g8-01",
    stage: "Middle",
    grade: "Grade 8 (13-14y)",
    lexile: "1010L - 1100L",
    cefr: "B2-",
    theme: "Neuroscience & Psychology",
    title: "Neuroplasticity: The Dynamic Architecture of the Human Mind",
    audioSpeed: 1.0,
    targetWords: [
      { word: "plasticity", phonetic: "/plæsˈtɪs.ə.ti/", pos: "n.", meaning: "可塑性", example: "Neuroplasticity enables the brain to rewire itself." },
      { word: "synaptic", phonetic: "/sɪˈnæp.tɪk/", pos: "adj.", meaning: "突触的", example: "Synaptic pruning eliminates underused neural pathways." },
      { word: "dogma", phonetic: "/ˈdɒɡ.mə/", pos: "n.", meaning: "教条，成见", example: "Modern science refuted the dogma of the static adult brain." }
    ],
    content: `For decades, medical orthodoxy adhered strictly to a rigid dogma: the human central nervous system achieved structural finality in early adulthood, after which neurons suffered irreversible attrition without the capacity for regeneration or structural reconfiguration. 
Groundbreaking electrophysiological and neuroimaging inquiries have comprehensively dismantled this static paradigm, replacing it with the principle of neuroplasticity. 
The human encephalon is now recognized as a malleable, dynamic organ that continuously remodels its functional topography in response to experiential stimuli, deliberate cognitive effort, and environmental demands. 
At the microscopic level, Hebbian theory epitomizes this mechanism: neurons that fire synchronously wire together, strengthening synaptic transmission efficiency via long-term potentiation. 
Simultaneously, through synaptic pruning, obsolete circuits are systematically dismantled. 
This dynamic adaptability underscores how stroke survivors recover lost linguistic or motor faculties by delegating functions to undamaged hemispheres, and proves that disciplined deliberate practice reconfigures physical neural networks across an individual's entire lifespan.`,
    skills: ["Evaluating Shifting Scientific Paradigms", "Technical Conceptual Modeling", "Analyzing Abstract Arguments"],
    questions: [
      {
        id: "q1",
        type: "single",
        text: "What former scientific consensus did modern discoveries in neuroplasticity overthrow?",
        options: ["That neurons conduct messages using electrical charges", "That the adult human brain is immutable and incapable of structural reorganization", "That sleep is essential for memory consolidation", "That the left hemisphere manages logic and language"],
        answer: 1,
        explanation: "Traditional doctrine maintained the adult brain reached fixed maturity with irreversible decay, an assumption dismantled by neuroplasticity.",
        lexileSkill: "Contrasting Conceptual Paradigms"
      },
      {
        id: "q2",
        type: "single",
        text: "Which neurobiological phrase accurately summarizes the core premise of Hebbian plasticity?",
        options: ["Neurons that divide frequently survive longest", "Neurons that fire together wire together", "Synapses that deteriorate promote faster cognition", "Inhibition precedes motor execution"],
        answer: 1,
        explanation: "The passage notes: 'Hebbian theory epitomizes this mechanism: neurons that fire synchronously wire together.'",
        lexileSkill: "Key Theoretical Axiom"
      },
      {
        id: "q3",
        type: "single",
        text: "How do rehabilitation outcomes in stroke victims validate the phenomenon of neuroplasticity?",
        options: ["Neurons reproduce at tenfold their embryonic rate", "Undamaged regions of the cerebral cortex can adapt to assume functions previously governed by damaged tissue", "Synthetic medicines recreate pre-injury brain tissue overnight", "Muscle memory operates completely independently of the central nervous system"],
        answer: 1,
        explanation: "The text explains stroke victims recover faculties 'by delegating functions to undamaged hemispheres.'",
        lexileSkill: "Deductive Application"
      }
    ]
  },
  {
    id: "g9-01",
    stage: "Middle",
    grade: "Grade 9 (14-15y)",
    lexile: "1050L - 1150L",
    cefr: "B2",
    theme: "Literature & Existential Metaphor",
    title: "The Labyrinthine Solitude of Franz Kafka",
    audioSpeed: 1.0,
    targetWords: [
      { word: "alienation", phonetic: "/ˌeɪ.li.əˈneɪ.ʃən/", pos: "n.", meaning: "异化，疏离感", example: "Kafka depicts profound psychological alienation." },
      { word: "bureaucratic", phonetic: "/ˌbjʊə.rəˈkræt.ɪk/", pos: "adj.", meaning: "官僚主义的", example: "Characters struggle against impenetrable bureaucratic mazes." },
      { word: "absurdity", phonetic: "/əbˈsɜː.də.ti/", pos: "n.", meaning: "荒诞，悖谬", example: "The surreal transformation highlights existential absurdity." }
    ],
    content: `Few literary figures have imprinted modern philosophical consciousness as indelibly as Franz Kafka, whose surname evolved into an international adjective signifying suffocating bureaucratic absurdity and profound existential disorientation. 
In his 1915 novella *The Metamorphosis*, commercial salesman Gregor Samsa awakens to discover his anatomical form transfigured into a grotesque vermin. 
Critically, Kafka avoids offering any supernatural or pseudo-scientific rationalization for this calamity. 
Instead, Gregor's primary anxiety focuses not upon his monstrous biological metamorphosis, but rather upon missing his morning train and disappointing his autocratic employer. 
Through this surreal juxtaposition, Kafka crystallizes the tragedy of modern industrial alienation: an economic apparatus so dehumanizing that individuals equate their intrinsic personal worth entirely with transactional labor productivity. 
When physical impairment strips Gregor of his economic utility, he suffers progressive emotional abandonment by his own kin, underscoring how utilitarian obligations distort fundamental familial bonds in an alienated world.`,
    skills: ["Literary Motif Analysis", "Philosophical Synthesis", "Authorial Purpose & Critique"],
    questions: [
      {
        id: "q1",
        type: "single",
        text: "What unexpected detail underscores Gregor Samsa's profound industrial alienation upon awakening?",
        options: ["He celebrates escaping from human burdens", "His paramount alarm is failing to catch his commute and angering his boss", "He tries to attack his sister and parents", "He plots revenge against his doctor"],
        answer: 1,
        explanation: "Instead of panicking about his horrific physical form, his immediate distress centers on missing the train and employer disapproval.",
        lexileSkill: "Deep Character Motivation"
      },
      {
        id: "q2",
        type: "single",
        text: "What broader societal critique does Kafka advance through Gregor's familial abandonment?",
        options: ["Families in Prague were legally prohibited from caring for sick relatives", "Modern economic systems condition individuals to value human life only according to economic productivity", "Insect transformations were common in twentieth-century Europe", "Medical institutions were superior to home care"],
        answer: 1,
        explanation: "Kafka illustrates how transactional labor metrics reduce human value, causing emotional abandonment once productivity ceases.",
        lexileSkill: "Theme & Social Commentary"
      },
      {
        id: "q3",
        type: "single",
        text: "What does the colloquial term 'Kafkaesque' broadly signify in contemporary discourse?",
        options: ["Pleasant pastoral storytelling with romantic resolutions", "Complex mysteries featuring brilliant detective protagonists", "Oppressive, convoluted bureaucratic labyrinths accompanied by existential dread", "Scientific explorations of insect biology"],
        answer: 2,
        explanation: "The opening sentence establishes that 'Kafkaesque' describes 'suffocating bureaucratic absurdity and profound existential disorientation.'",
        lexileSkill: "Etymology & Cultural Definition"
      }
    ]
  },

  // ==================== HIGH SCHOOL & ADVANCED (G10 - G12) ====================
  {
    id: "g10-01",
    stage: "High School",
    grade: "Grade 10 (15-16y)",
    lexile: "1150L - 1250L",
    cefr: "B2+",
    theme: "Political Philosophy & The Enlightenment",
    title: "The Social Contract: Hobbes vs. Locke on Sovereignty",
    audioSpeed: 1.0,
    targetWords: [
      { word: "sovereignty", phonetic: "/ˈsɒv.rɪn.ti/", pos: "n.", meaning: "主权，最高统治权", example: "The debate centered on where sovereign legitimacy resides." },
      { word: "inalienable", phonetic: "/ɪnˈeɪ.li.ə.nə.bəl/", pos: "adj.", meaning: "不可剥夺的", example: "Locke asserted the primacy of inalienable human rights." },
      { word: "absolutism", phonetic: "/ˈæb.sə.luː.tɪ.zəm/", pos: "n.", meaning: "专制主义", example: "Hobbes championed sovereign absolutism to forestall chaos." }
    ],
    content: `The political philosophy of the Enlightenment was profoundly catalyzed by divergent interpretations of the hypothetical 'state of nature'—the human condition antecedent to instituted civil government. 
Writing against the bloody backdrop of the English Civil War, Thomas Hobbes posited in *Leviathan* (1651) that without a centralized authority, human existence is condemned to a perpetual 'war of all against all,' rendering life 'solitary, poor, nasty, brutish, and short.' 
To escape this pervasive existential terror, Hobbes argued, rational agents collectively surrender their natural freedoms to an indivisible, absolute sovereign entity empowered to preserve civil order through unchallengeable coercive force. 
Conversely, John Locke presented a far more sanguine perspective in his *Second Treatise of Government* (1689). 
Locke asserted that human beings in the state of nature are inherently governed by natural law and possess inalienable prerogatives: life, liberty, and estate. 
Civil governance, in Locke's paradigm, is not an autocratic master but a limited fiduciary trustee commissioned solely to preserve those foundational rights. 
Crucially, should the governing authority breach this trust through tyranny, citizens retain an inviolable right to alter or overthrow the regime—a conceptual premise that ultimately animated the American and French democratic revolutions.`,
    skills: ["Comparative Philosophical Analysis", "Deconstructing Rhetorical Arguments", "Historical Synthesis"],
    questions: [
      {
        id: "q1",
        type: "single",
        text: "How did Thomas Hobbes characterize human existence within an ungoverned state of nature?",
        options: ["Harmonious and cooperative, rooted in agrarian mutual aid", "A chaotic, ceaseless conflict where life is solitary, poor, nasty, brutish, and short", "Enlightened and spiritual, unfettered by artificial laws", "Strictly matriarchal and pacifist"],
        answer: 1,
        explanation: "Hobbes described the state of nature as a perpetual war where human life is 'solitary, poor, nasty, brutish, and short.'",
        lexileSkill: "Textual Citation"
      },
      {
        id: "q2",
        type: "single",
        text: "According to John Locke, what is the legitimate justification for dissolving a governing authority?",
        options: ["Whenever taxes are levied on merchant classes", "When the monarch fails to conquer adjacent territories", "When the government breaches its fiduciary trust by violating inalienable natural rights", "When religious clergy decree civil laws invalid"],
        answer: 2,
        explanation: "Locke argued that should authority breach trust through tyranny, citizens possess an inviolable right to alter or overthrow it.",
        lexileSkill: "Comparative Synthesis"
      },
      {
        id: "q3",
        type: "single",
        text: "What fundamental divergence in assumptions regarding human nature distinguishes Hobbes from Locke?",
        options: ["Hobbes views humans as inherently warlike requiring absolute control, whereas Locke views humans as rational possessors of natural rights", "Hobbes prioritizes economic wealth while Locke focuses strictly on military supremacy", "Hobbes rejected written constitutions whereas Locke championed military dictatorship", "Locke argued that kings possessed divine right from God"],
        answer: 0,
        explanation: "Hobbes' pessimistic view demanded absolutist rule to avert war, whereas Locke's trust in natural law framed government as a rights protector.",
        lexileSkill: "Philosophical Synthesis"
      }
    ]
  },
  {
    id: "g11-01",
    stage: "High School",
    grade: "Grade 11 (16-17y)",
    lexile: "1250L - 1350L",
    cefr: "C1",
    theme: "Quantum Physics & Epistemology",
    title: "Quantum Superposition and the Disruption of Classical Determinism",
    audioSpeed: 1.0,
    targetWords: [
      { word: "probabilistic", phonetic: "/ˌprɒb.ə.bɪˈlɪs.tɪk/", pos: "adj.", meaning: "概率性的", example: "Quantum mechanics dictates a probabilistic universe." },
      { word: "wavefunction", phonetic: "/ˈweɪvˌfʌŋk.ʃən/", pos: "n.", meaning: "波函数", example: "Measurement causes the wavefunction to collapse." },
      { word: "determinism", phonetic: "/dɪˈtɜː.mɪ.nɪ.zəm/", pos: "n.", meaning: "决定论", example: "Quantum indeterminacy undermined strict Newtonian determinism." }
    ],
    content: `For over two centuries, classical Newtonian mechanics painted a clockwork cosmos: if an observer could possess omniscient knowledge regarding the position and momentum of every particle, every subsequent trajectory throughout spacetime could be deterministically calculated. 
This epistemic certainty was shattered in the early twentieth century by the inception of quantum mechanics, spearheaded by Max Planck, Albert Einstein, Niels Bohr, and Werner Heisenberg. 
Central to this paradigm upheaval is the concept of quantum superposition, encapsulated mathematically within Erwin Schrödinger's wave equation. 
At subatomic scales, an unobserved quantum system does not reside in a localized, definite classical state; rather, its physical attributes exist as a superposition of all plausible configurations, described by a complex probabilistic wavefunction. 
Only upon the intervention of macroscopic measurement does this distributed superposition precipitously collapse into an eigenstate of definite empirical reality. 
Heisenberg's Uncertainty Principle further codified that conjugate variables—such as a particle's spatial position and linear momentum—cannot be simultaneously measured with arbitrary precision, not due to instrumental limitations, but as an intrinsic ontological property of the physical universe itself. 
Consequently, classical determinism was superseded by an intrinsically probabilistic cosmos.`,
    skills: ["Epistemological Analysis", "Deconstructing Complex Theoretical Physics", "Evaluating Scientific Methodologies"],
    questions: [
      {
        id: "q1",
        type: "single",
        text: "What was the philosophical implication of Laplace's classical Newtonian 'clockwork universe'?",
        options: ["The cosmos was completely unpredictable and constantly fluctuating", "Every past and future event could be theoretically calculated if all particle coordinates were known", "Gravity varied unpredictably across different galaxies", "Matter and energy were identical in subatomic behavior"],
        answer: 1,
        explanation: "Classical Newtonian mechanics asserted that comprehensive knowledge of particle positions and momentum enabled deterministic calculation of all future trajectories.",
        lexileSkill: "Historical Foundations"
      },
      {
        id: "q2",
        type: "single",
        text: "What causes an unobserved quantum superposition to manifest as a single empirical state in the Copenhagen interpretation?",
        options: ["Thermal equilibrium with cosmic background radiation", "The physical intervention of macroscopic measurement", "Electromagnetic interference from solar flares", "Gravitational decay over billions of years"],
        answer: 1,
        explanation: "The text specifies: 'Only upon the intervention of macroscopic measurement does this distributed superposition precipitously collapse into an eigenstate.'",
        lexileSkill: "Key Quantum Principles"
      },
      {
        id: "q3",
        type: "single",
        text: "According to Heisenberg's Uncertainty Principle, why can position and momentum not be simultaneously determined with perfect accuracy?",
        options: ["Modern electron microscopes lack sufficient resolution", "Subatomic particles constantly absorb laboratory radiation", "It represents an intrinsic ontological property of the physical universe, not an instrument flaw", "Light photons destroy subatomic particles upon contact"],
        answer: 2,
        explanation: "The passage stresses this restriction is 'not due to instrumental limitations, but as an intrinsic ontological property of the physical universe itself.'",
        lexileSkill: "Deep Comprehension"
      }
    ]
  },
  {
    id: "g12-01",
    stage: "High School",
    grade: "Grade 12 (17-18y)",
    lexile: "1350L - 1480L",
    cefr: "C1 / C2",
    theme: "Cognitive Science & Artificial General Intelligence",
    title: "The Computational Mind and the Chinese Room Paradox",
    audioSpeed: 1.0,
    targetWords: [
      { word: "syntax", phonetic: "/ˈsɪn.tæks/", pos: "n.", meaning: "句法，语法结构", example: "Syntax governs the formal manipulation of symbols." },
      { word: "semantics", phonetic: "/sɪˈmæn.tɪks/", pos: "n.", meaning: "语义，意义理解", example: "Computers execute syntax without grasping semantics." },
      { word: "intentionality", phonetic: "/ɪnˌten.ʃəˈnæl.ə.ti/", pos: "n.", meaning: "意向性，心理指向", example: "True consciousness requires mental intentionality." }
    ],
    content: `The relentless ascent of artificial intelligence and deep neural networks has reinvigorated one of cognitive philosophy's most profound quandaries: can a purely computational substrate instantiate genuine consciousness, or does it merely emulate superficial linguistic behaviors? 
In 1980, American philosopher John Searle formulated a devastating critique against strong functionalism, known as the 'Chinese Room' thought experiment. 
Searle invited readers to imagine a monolingual English speaker sequestered inside a sealed chamber, armed with an exhaustive English rulebook that instructs how to correlate incoming Chinese ideograms with appropriate Chinese output responses. 
To observers outside the room submitting questions, the responses emitted appear flawlessly fluent and cogent, effectively passing Alan Turing's celebrated behavioral imitation game. 
Nonetheless, Searle argued, the human clerk within possesses precisely zero subjective comprehension of the Chinese language; the person is executing formal syntactic manipulations devoid of semantic consciousness. 
Searle derived an enduring philosophical thesis from this distinction: syntax alone is neither constitutive of, nor sufficient for, semantics. 
While large computational models can generate statistically coherent prose by approximating token probability distributions, whether algorithmic symbol manipulation can ever engender authentic phenomenological intentionality remains the grand unresolved inquiry of modern epistemology.`,
    skills: ["High-Level Epistemological Evaluation", "Thought Experiment Deconstruction", "Synthesizing AI Philosophy & Logic"],
    questions: [
      {
        id: "q1",
        type: "single",
        text: "What core claim did John Searle seek to refute through the Chinese Room thought experiment?",
        options: ["That humans can never learn foreign languages efficiently", "That formal syntactic program execution is equivalent to genuine subjective mental understanding", "That computers cannot process numerical data faster than humans", "That Turing tests should be conducted using written rather than spoken language"],
        answer: 1,
        explanation: "Searle challenged the 'strong functionalism' view that executing syntactic operations equates to actual understanding (semantics).",
        lexileSkill: "Core Argumentative Premise"
      },
      {
        id: "q2",
        type: "single",
        text: "What fundamental philosophical dichotomy forms the linchpin of Searle's argument?",
        options: ["Hardware versus Software", "Syntax (formal symbol manipulation) versus Semantics (actual meaning and intentionality)", "Consciousness versus Subconscious reflexes", "Mathematical logic versus Intuitive artistry"],
        answer: 1,
        explanation: "Searle's definitive dictum is that 'syntax alone is neither constitutive of, nor sufficient for, semantics.'",
        lexileSkill: "Philosophical Synthesis"
      },
      {
        id: "q3",
        type: "single",
        text: "Why does passing the Turing Test fail to settle the question of true machine consciousness according to Searle?",
        options: ["The Turing test only evaluates mathematical calculations", "External behavioral proficiency can be achieved through syntactic rule lookup without subjective phenomenological comprehension", "Human evaluators are notoriously biased against artificial machines", "Language changes too rapidly for automated dictionaries"],
        answer: 1,
        explanation: "The clerk inside the room produces indistinguishable output through rules without understanding a single word, showing behavioral mimicry does not prove inner comprehension.",
        lexileSkill: "Critical Evaluation"
      }
    ]
  }
];

// Export for node or browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { K12_CURRICULUM };
}
