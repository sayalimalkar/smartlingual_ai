/**
 * MULTI-LANGUAGE STANDARDIZED CURRICULUM DATABASE
 * -------------------------------------------------------------
 * German: CEFR Levels A1 - C2 (Goethe-Zertifikat Syllabus)
 * Korean: TOPIK Levels 1 - 6 (NIIED Syllabus)
 * Japanese: JLPT Levels N5 - N1 (Japan Foundation Syllabus)
 * English: CEFR Levels A1 - C2 (Cambridge / IELTS Standard)
 *
 * Each level features structured pedagogical lectures, native audio prompts,
 * subtitle bridges (kept specifically for foundational alphabets and numbers),
 * interactive vocabulary soundboards, drills, and official 100-mark graded milestone exams.
 */

export const MULTI_LANG_CURRICULUM = {
  "German": {
    "name": "German",
    "nativeName": "Deutsch",
    "flag": "🇩🇪",
    "langCode": "de-DE",
    "framework": "CEFR",
    "frameworkName": "Common European Framework of Reference (CEFR)",
    "certifyingBody": "Goethe-Institut (Goethe-Zertifikat)",
    "levels": {
      "A1": {
        "code": "A1",
        "title": "Beginner",
        "studyTime": "80 – 100 hours",
        "exam": "Goethe-Zertifikat A1 / Start Deutsch 1",
        "vocabSize": "~800 words",
        "grammarSyllabus": [
          "Verbs sein and haben",
          "Present tense of regular and common irregular verbs",
          "Personal pronouns",
          "Nominative and Akkusativ cases (introduction)",
          "Definite/indefinite articles: der, die, das / ein, eine",
          "Negation with nicht and kein",
          "Word order: verb-second rule (V2)",
          "Modal verbs (introduction): können, müssen, möchten",
          "Plural noun forms",
          "Possessive articles (mein, dein, sein...)"
        ],
        "vocabThemes": [
          "Greetings and introductions",
          "Numbers, time, days, months",
          "Family and people",
          "Food, drink and shopping basics",
          "Daily routine"
        ],
        "keySkills": [
          "Introduce yourself and ask simple personal questions",
          "Understand and use everyday expressions",
          "Fill in simple forms"
        ],
        "lessons": [
          {
            "id": "de-a1-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Das Deutsche Alphabet (Letters A–Z + Ä, Ö, Ü, ß)",
            "summary": "Welcome to German! Learn all 30 letters individually with native audio, clear phonetics, and subtitle bridges. German is wonderfully phonetic—what you see is what you speak!",
            "videoMasterclass": {
              "title": "AI Masterclass: Native German Alphabet Mastery",
              "tutorName": "Frau Schmidt (AI Native Faculty Tutor)",
              "videoPrompt": "Master German vowel sounds, the three umlauts (Ä, Ö, Ü), and the sharp 'ß' with authentic native German pronunciation.",
              "narrationScript": "Hallo und herzlich willkommen! Welcome to German A1. Let's learn the German alphabet together, letter by letter: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, and our 4 special characters Ä, Ö, Ü, and ß!"
            },
            "grammarBreakdown": "The German alphabet consists of the 26 standard Latin letters plus four special characters: three umlauted vowels (Ä, Ö, Ü) and the ligature ß (called 'Eszett' or sharp 's'). German is remarkably phonetic—words are pronounced almost exactly as they are spelled!\n\nEssential Pronunciation Rules:\n1. 'W' is always pronounced like the English 'V' (e.g., 'Wasser' -> 'Vasser' [water]).\n2. 'V' is usually pronounced like the English 'F' (e.g., 'Vater' -> 'Fah-ter' [father], 'Vogel' -> 'Fogel' [bird]).\n3. 'J' is pronounced like the English 'Y' (e.g., 'Ja' -> 'Ya' [yes], 'das Jahr' -> 'das Yahr' [year]).\n4. 'Z' is pronounced like 'ts' in 'cats' (e.g., 'der Zug' -> 'Tsook' [train], 'die Zeit' -> 'Tsyt' [time]).\n5. 'S' before a vowel produces a soft buzzing 'Z' sound (e.g., 'die Sonne' -> 'Zonne' [sun], 'sieben' -> 'Zeeben' [seven]).\n6. The Umlauts:\n• Ä sounds like 'ai' in 'air' (der Äquator, spät [late]).\n• Ö is produced by rounding your lips into an 'O' shape while vocalizing 'ay' (schön [beautiful], hören [to hear]).\n• Ü is produced by rounding your lips tightly while vocalizing 'ee' (über [over/above], die Tür [door]).\n• ß (Eszett) represents a sharp unvoiced double 's' sound and is never used at the beginning of a word (die Straße [street], weiß [white]).",
            "alphabet": [
              {
                "letter": "A a",
                "sound": "Ah",
                "hindi": "आ (aa)",
                "marathi": "आ (aa)",
                "example": "der Apfel (Apple / सफरचंद / सेब)",
                "ipa": "[aː]"
              },
              {
                "letter": "B b",
                "sound": "Bay",
                "hindi": "बे (bay)",
                "marathi": "बे (bay)",
                "example": "das Buch (Book / पुस्तक / किताब)",
                "ipa": "[beː]"
              },
              {
                "letter": "C c",
                "sound": "Tsay",
                "hindi": "त्से (tsay)",
                "marathi": "त्से (tsay)",
                "example": "das Café (Café / कॅफे / कैफे)",
                "ipa": "[tseː]"
              },
              {
                "letter": "D d",
                "sound": "Day",
                "hindi": "डे (day)",
                "marathi": "डे (day)",
                "example": "der Deutschkurs (German course / जर्मन वर्ग)",
                "ipa": "[deː]"
              },
              {
                "letter": "E e",
                "sound": "Ay",
                "hindi": "ए (ay)",
                "marathi": "ए (ay)",
                "example": "der Elefant (Elephant / हत्ती / हाथी)",
                "ipa": "[eː]"
              },
              {
                "letter": "F f",
                "sound": "Eff",
                "hindi": "एफ़ (eff)",
                "marathi": "एफ (eff)",
                "example": "die Familie (Family / कुटुंब / परिवार)",
                "ipa": "[ɛf]"
              },
              {
                "letter": "G g",
                "sound": "Gay",
                "hindi": "गे (gay)",
                "marathi": "गे (gay)",
                "example": "die Gitarre (Guitar / गिटार / गिटार)",
                "ipa": "[ɡeː]"
              },
              {
                "letter": "H h",
                "sound": "Hah",
                "hindi": "हा (haa)",
                "marathi": "हा (haa)",
                "example": "das Haus (House / घर / घर)",
                "ipa": "[haː]"
              },
              {
                "letter": "I i",
                "sound": "Ee",
                "hindi": "ई (ee)",
                "marathi": "ई (ee)",
                "example": "die Insel (Island / बेट / द्वीप)",
                "ipa": "[iː]"
              },
              {
                "letter": "J j",
                "sound": "Yott",
                "hindi": "यॉट (yott)",
                "marathi": "यॉट (yott)",
                "example": "das Jahr (Year / वर्ष / साल)",
                "ipa": "[jɔt]"
              },
              {
                "letter": "K k",
                "sound": "Kah",
                "hindi": "का (kaa)",
                "marathi": "का (kaa)",
                "example": "der Kaffee (Coffee / कॉफी / कॉफ़ी)",
                "ipa": "[kaː]"
              },
              {
                "letter": "L l",
                "sound": "Ell",
                "hindi": "एल (ell)",
                "marathi": "एल (ell)",
                "example": "die Lampe (Lamp / दिवा / लैंप)",
                "ipa": "[ɛl]"
              },
              {
                "letter": "M m",
                "sound": "Emm",
                "hindi": "एम (emm)",
                "marathi": "एम (emm)",
                "example": "die Musik (Music / संगीत / संगीत)",
                "ipa": "[ɛm]"
              },
              {
                "letter": "N n",
                "sound": "Enn",
                "hindi": "एन (enn)",
                "marathi": "एन (enn)",
                "example": "die Nacht (Night / रात्र / रात)",
                "ipa": "[ɛn]"
              },
              {
                "letter": "O o",
                "sound": "Oh",
                "hindi": "ओ (oh)",
                "marathi": "ओ (oh)",
                "example": "die Orange (Orange / संत्री / संतरा)",
                "ipa": "[oː]"
              },
              {
                "letter": "P p",
                "sound": "Pay",
                "hindi": "पे (pay)",
                "marathi": "पे (pay)",
                "example": "die Party (Party / पार्टी / पार्टी)",
                "ipa": "[peː]"
              },
              {
                "letter": "Q q",
                "sound": "Koo",
                "hindi": "कू (koo)",
                "marathi": "कू (koo)",
                "example": "das Quiz (Quiz / प्रश्नमंजुषा / क्विज)",
                "ipa": "[kuː]"
              },
              {
                "letter": "R r",
                "sound": "Err",
                "hindi": "एर (err)",
                "marathi": "एर (err)",
                "example": "das Radio (Radio / रेडिओ / रेडियो)",
                "ipa": "[ɛʁ]"
              },
              {
                "letter": "S s",
                "sound": "Ess",
                "hindi": "एस (ess)",
                "marathi": "एस (ess)",
                "example": "die Sonne (Sun / सूर्य / सूरज)",
                "ipa": "[ɛs]"
              },
              {
                "letter": "T t",
                "sound": "Tay",
                "hindi": "टे (tay)",
                "marathi": "टे (tay)",
                "example": "der Tee (Tea / चहा / चाय)",
                "ipa": "[teː]"
              },
              {
                "letter": "U u",
                "sound": "Ooh",
                "hindi": "ऊ (ooh)",
                "marathi": "ऊ (ooh)",
                "example": "die Uhr (Clock / घड्याळ / घड़ी)",
                "ipa": "[uː]"
              },
              {
                "letter": "V v",
                "sound": "Fow (sounds like F)",
                "hindi": "फ़ाउ (fow)",
                "marathi": "फाउ (fow)",
                "example": "der Vater (Father / वडील / पिता)",
                "ipa": "[faʊ]"
              },
              {
                "letter": "W w",
                "sound": "Vay (sounds like V)",
                "hindi": "वे (vay)",
                "marathi": "वे (vay)",
                "example": "das Wasser (Water / पाणी / पानी)",
                "ipa": "[veː]"
              },
              {
                "letter": "X x",
                "sound": "Iks",
                "hindi": "इक्स (iks)",
                "marathi": "इक्स (iks)",
                "example": "das Xylofon (Xylophone / झायलोफोन)",
                "ipa": "[ɪks]"
              },
              {
                "letter": "Y y",
                "sound": "Oopsilon",
                "hindi": "उप्सिलॉन (ypsilon)",
                "marathi": "उप्सिलॉन (ypsilon)",
                "example": "das Yoga (Yoga / योग / योग)",
                "ipa": "[ˈʏpsilɔn]"
              },
              {
                "letter": "Z z",
                "sound": "Tsett (sounds like Ts)",
                "hindi": "त्सेट (tsett)",
                "marathi": "त्सेट (tsett)",
                "example": "der Zug (Train / आगगाडी / रेलगाड़ी)",
                "ipa": "[tsɛt]"
              },
              {
                "letter": "Ä ä",
                "sound": "Ae (open e)",
                "hindi": "ऐ (ay/air)",
                "marathi": "ऐ (ay/air)",
                "example": "der Äquator / spät (late / उशीर)",
                "ipa": "[ɛː]"
              },
              {
                "letter": "Ö ö",
                "sound": "Oe (round lips, say ay)",
                "hindi": "ओए (round lips)",
                "marathi": "ओए (round lips)",
                "example": "schön (beautiful / सुंदर / खूबसूरत)",
                "ipa": "[øː]"
              },
              {
                "letter": "Ü ü",
                "sound": "Ue (round lips, say ee)",
                "hindi": "यू (round lips)",
                "marathi": "यू (round lips)",
                "example": "über (over/about / वर / ऊपर)",
                "ipa": "[yː]"
              },
              {
                "letter": "ß",
                "sound": "Eszett (sharp ss)",
                "hindi": "एस-त्सेट (sharp s)",
                "marathi": "एस-त्सेट (sharp s)",
                "example": "die Straße (Street / रस्ता / सड़क)",
                "ipa": "[ɛsˈtsɛt]"
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a1-l1-d1",
                "question": "How is the German letter 'W' pronounced in words like 'Wasser' (water)?",
                "options": [
                  "Like English 'W' in 'water'",
                  "Like English 'V' in 'voice'",
                  "Like English 'B'",
                  "It is silent"
                ],
                "correct": 1,
                "explanation": "German 'W' is always pronounced like the English 'V' ('Wasser' sounds like 'Vasser')."
              },
              {
                "id": "de-a1-l1-d2",
                "question": "How is the German letter 'V' pronounced in words like 'Vater' (father)?",
                "options": [
                  "Like English 'V'",
                  "Like English 'F' in 'father'",
                  "Like English 'W'",
                  "Like English 'P'"
                ],
                "correct": 1,
                "explanation": "In authentic German words, 'V' is pronounced like English 'F' ('Vater' sounds like 'Fah-ter')."
              }
            ]
          },
          {
            "id": "de-a1-l2",
            "lessonNumber": 2,
            "title": "Lesson 2: Special Sounds & Diphthongs (EI, IE, EU, AU, CH, SCH)",
            "summary": "Discover essential German vowel combinations and consonant clusters: EI, IE, EU, AU, CH, SCH, ST, and SP.",
            "videoMasterclass": {
              "title": "AI Masterclass: Mastering German Diphthongs & Blends",
              "tutorName": "Herr Weber (AI Native Faculty Tutor)",
              "videoPrompt": "Learn the golden rule between 'EI' (eye) and 'IE' (ee), and how consonant clusters like 'SCH' and 'CH' work.",
              "narrationScript": "In German, EI sounds like eye, and IE sounds like ee! Mein Name ist Alex, und ich trinke Bier. Notice the crisp difference between EI and IE!"
            },
            "grammarBreakdown": "When two vowels or consonants combine in German, they produce distinct and highly consistent sounds that unlock the pronunciation of thousands of words.\n\n1. The Golden Diphthong Pair:\n• 'EI' is pronounced like the English word 'eye' (e.g., mein = my, Wein = wine, sein = to be).\n• 'IE' is pronounced like a long 'ee' as in 'tree' (e.g., sieben = seven, Bier = beer, das Lied = song).\n*Golden Rule: In 'EI' and 'IE', you always pronounce the second vowel!\n\n2. Other Vital Vowel Blends:\n• 'EU' and 'ÄU' sound like 'oy' in 'boy' (e.g., neu = new, heute = today, Deutschland = Germany, die Bäume = trees).\n• 'AU' sounds like 'ow' in 'house' (e.g., das Haus = house, die Frau = woman).\n\n3. Consonant Blends:\n• 'SCH' sounds like 'sh' in 'shine' (e.g., die Schule = school, schnell = fast).\n• 'ST' and 'SP' at the beginning of a word sound like 'sht' and 'shp' (e.g., die Straße = street, der Sport = sports).\n• 'CH': After soft vowels (e, i, ä, ö, ü), it produces a gentle whispering hiss (the 'ich-Laut', e.g., ich, nicht). After broad vowels (a, o, u), it produces a guttural throat sound (the 'ach-Laut', e.g., das Buch, die Nacht).",
            "grammarTable": {
              "title": "German Diphthong & Combination Matrix",
              "headers": [
                "Letter Blend",
                "German Sound",
                "English Sound Equivalent",
                "Example Word",
                "English Meaning"
              ],
              "rows": [
                [
                  "EI",
                  "[aɪ]",
                  "like 'eye' or 'pie'",
                  "mein / der Wein",
                  "my / the wine"
                ],
                [
                  "IE",
                  "[iː]",
                  "like 'ee' in 'tree'",
                  "sieben / das Lied",
                  "seven / the song"
                ],
                [
                  "EU / ÄU",
                  "[ɔɪ]",
                  "like 'oy' in 'boy'",
                  "Deutschland / die Bäume",
                  "Germany / the trees"
                ],
                [
                  "AU",
                  "[aʊ]",
                  "like 'ow' in 'how'",
                  "das Haus / die Frau",
                  "the house / the woman"
                ],
                [
                  "SCH",
                  "[ʃ]",
                  "like 'sh' in 'shoe'",
                  "die Schule / schnell",
                  "the school / fast"
                ],
                [
                  "CH (soft)",
                  "[ç]",
                  "hissing whisper",
                  "ich / nicht",
                  "I / not"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "mein",
                "translation": "my",
                "phonetic": "mayn",
                "example": "Mein Name ist Alex."
              },
              {
                "word": "das Haus",
                "translation": "the house",
                "phonetic": "dahs hows",
                "example": "Das Haus ist groß."
              },
              {
                "word": "die Schule",
                "translation": "the school",
                "phonetic": "dee SHOO-leh",
                "example": "Ich gehe zur Schule."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a1-l2-d1",
                "question": "What sound does the diphthong 'EI' make in German (e.g., 'mein')?",
                "options": [
                  "Like 'ee' in 'tree'",
                  "Like 'eye' in 'light'",
                  "Like 'ay' in 'say'",
                  "Like 'oo' in 'food'"
                ],
                "correct": 1,
                "explanation": "'EI' in German always sounds like the English word 'eye' (mein = 'mayn')."
              }
            ]
          },
          {
            "id": "de-a1-l3",
            "lessonNumber": 3,
            "title": "Lesson 3: Complete Numbers 0 to 20 (Null bis Zwanzig)",
            "summary": "Every single number from 0 to 20 presented individually with native audio, pronunciation guides, and subtitle bridges.",
            "videoMasterclass": {
              "title": "AI Masterclass: Counting from 0 to 20 in German",
              "tutorName": "Frau Schmidt (AI Native Faculty Tutor)",
              "videoPrompt": "Count alongside Frau Schmidt from 0 to 20, noticing patterns from 13 to 19 (unit + zehn).",
              "narrationScript": "Null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf, dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn, zwanzig!"
            },
            "grammarBreakdown": "Numbers from 0 to 20 form the foundational counting blocks of everyday communication, shopping, telephone numbers, and ages in German.\n\n1. Base Numbers (0 to 12):\nNumbers 0 through 12 are unique root words that must be committed to memory: null (0), eins (1), zwei (2), drei (3), vier (4), fünf (5), sechs (6), sieben (7), acht (8), neun (9), zehn (10), elf (11), and zwölf (12).\n\n2. The Teen Numbers (13 to 19):\nFrom 13 onwards, the formula is delightfully straightforward: [Unit] + zehn (10):\n• 3 + 10 = dreizehn (13)\n• 4 + 10 = vierzehn (14)\n• 5 + 10 = fünfzehn (15)\n• 8 + 10 = achtzehn (18)\n• 9 + 10 = neunzehn (19)\n\n3. Two Notable Spelling Shortcuts:\n• 16 drops the final 's' of sechs: 'sechzehn' (not sechszehn).\n• 17 drops the '-en' of sieben: 'siebzehn' (not siebenzehn).\n\n4. Number 20:\nTwenty is 'zwanzig', introducing the '-zig' suffix used for all tens up to 90.",
            "numbers": [
              {
                "num": 0,
                "word": "null",
                "sound": "Nooll",
                "hindi": "शून्य (shunya)",
                "marathi": "शून्य (shunya)",
                "example": "null Euro (0 Euro)"
              },
              {
                "num": 1,
                "word": "eins",
                "sound": "Ayns",
                "hindi": "एक (ek)",
                "marathi": "एक (ek)",
                "example": "ein Buch (one book)"
              },
              {
                "num": 2,
                "word": "zwei",
                "sound": "Tsvy",
                "hindi": "दो (do)",
                "marathi": "दोन (don)",
                "example": "zwei Äpfel (two apples)"
              },
              {
                "num": 3,
                "word": "drei",
                "sound": "Dry",
                "hindi": "तीन (teen)",
                "marathi": "तीन (teen)",
                "example": "drei Kinder (three children)"
              },
              {
                "num": 4,
                "word": "vier",
                "sound": "Feer",
                "hindi": "चार (chaar)",
                "marathi": "चार (chaar)",
                "example": "vier Tische (four tables)"
              },
              {
                "num": 5,
                "word": "fünf",
                "sound": "Foonf",
                "hindi": "पांच (paanch)",
                "marathi": "पाच (paach)",
                "example": "fünf Tage (five days)"
              },
              {
                "num": 6,
                "word": "sechs",
                "sound": "Zeks",
                "hindi": "छह (chhah)",
                "marathi": "सहा (saha)",
                "example": "sechs Flaschen (six bottles)"
              },
              {
                "num": 7,
                "word": "sieben",
                "sound": "ZEE-ben",
                "hindi": "सात (saat)",
                "marathi": "सात (saat)",
                "example": "sieben Tage (seven days)"
              },
              {
                "num": 8,
                "word": "acht",
                "sound": "Ahkht",
                "hindi": "आठ (aath)",
                "marathi": "आठ (aath)",
                "example": "acht Stunden (eight hours)"
              },
              {
                "num": 9,
                "word": "neun",
                "sound": "Noyn",
                "hindi": "नौ (nau)",
                "marathi": "नऊ (nau)",
                "example": "neun Monate (nine months)"
              },
              {
                "num": 10,
                "word": "zehn",
                "sound": "Tsayn",
                "hindi": "दस (das)",
                "marathi": "दहा (daha)",
                "example": "zehn Minuten (ten minutes)"
              },
              {
                "num": 11,
                "word": "elf",
                "sound": "Elf",
                "hindi": "ग्यारह (gyaarah)",
                "marathi": "अकरा (akara)",
                "example": "elf Spieler (eleven players)"
              },
              {
                "num": 12,
                "word": "zwölf",
                "sound": "Tsvurlf",
                "hindi": "बारह (baarah)",
                "marathi": "बारा (baara)",
                "example": "zwölf Uhr (twelve o'clock)"
              },
              {
                "num": 13,
                "word": "dreizehn",
                "sound": "Dry-tsayn (3 + 10)",
                "hindi": "तेरह (terah)",
                "marathi": "तेरा (tera)",
                "example": "dreizehn Jahre (13 years)"
              },
              {
                "num": 14,
                "word": "vierzehn",
                "sound": "Feer-tsayn (4 + 10)",
                "hindi": "चौदह (chaudah)",
                "marathi": "चौदा (chauda)",
                "example": "vierzehn Tage (14 days)"
              },
              {
                "num": 15,
                "word": "fünfzehn",
                "sound": "Foonf-tsayn (5 + 10)",
                "hindi": "पंद्रह (pandrah)",
                "marathi": "पंधरा (pandhara)",
                "example": "fünfzehn Minuten"
              },
              {
                "num": 16,
                "word": "sechzehn",
                "sound": "Zekh-tsayn",
                "hindi": "सोलह (solah)",
                "marathi": "सोळा (sola)",
                "example": "sechzehn Jahre alt"
              },
              {
                "num": 17,
                "word": "siebzehn",
                "sound": "Zeep-tsayn",
                "hindi": "सत्रह (satrah)",
                "marathi": "सतरा (satara)",
                "example": "siebzehn Grad"
              },
              {
                "num": 18,
                "word": "achtzehn",
                "sound": "Ahkht-tsayn",
                "hindi": "अठारह (athaarah)",
                "marathi": "अठरा (athara)",
                "example": "achtzehn Euro"
              },
              {
                "num": 19,
                "word": "neunzehn",
                "sound": "Noyn-tsayn",
                "hindi": "उन्नीस (unnees)",
                "marathi": "एकोणीस (ekonis)",
                "example": "neunzehn Lektionen"
              },
              {
                "num": 20,
                "word": "zwanzig",
                "sound": "TSVAN-tsikh",
                "hindi": "बीस (bees)",
                "marathi": "वीस (vees)",
                "example": "zwanzig Schüler"
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a1-l3-d1",
                "question": "How do you say the number 12 in German?",
                "options": [
                  "elf",
                  "zwölf",
                  "dreizehn",
                  "zehn"
                ],
                "correct": 1,
                "explanation": "12 in German is 'zwölf'."
              },
              {
                "id": "de-a1-l3-d2",
                "question": "Which number is represented by 'fünfzehn'?",
                "options": [
                  "5",
                  "15",
                  "50",
                  "25"
                ],
                "correct": 1,
                "explanation": "fünf (5) + zehn (10) = 15 ('fünfzehn')."
              }
            ]
          },
          {
            "id": "de-a1-l4",
            "lessonNumber": 4,
            "title": "Lesson 4: Tens & Inverted Numbers 21 to 100 (The Reversal Rule)",
            "summary": "Master the German reversal rule: say the unit first, then 'und' (and), then the ten (e.g., 21 = einundzwanzig = one-and-twenty).",
            "videoMasterclass": {
              "title": "AI Masterclass: The German Inverted Numbers Secret (21-100)",
              "tutorName": "Herr Weber (AI Native Faculty Tutor)",
              "videoPrompt": "Understand why 21 is 'ein-und-zwanzig' and master counting tens: 30, 40, 50... 100.",
              "narrationScript": "In German, from 21 to 99, we say the smaller number first: ein-und-zwanzig! Just like saying 'one and twenty'!"
            },
            "grammarBreakdown": "German counting from 21 to 99 features a unique and famous rule: the single unit is always spoken first, followed by 'und' (and), and finally the tens digit!\n\n1. The Inversion Formula (21 to 99):\n• Formula: [Unit] + und + [Tens]\n• 21 = ein + und + zwanzig = einundzwanzig (literally 'one-and-twenty').\n• 25 = fünf + und + zwanzig = fünfundzwanzig ('five-and-twenty').\n• 38 = acht + und + dreißig = achtunddreißig ('eight-and-thirty').\n• 47 = sieben + und + vierzig = siebenundvierzig ('seven-and-forty').\n*Notice: 'eins' drops the 's' when combined: 'einundzwanzig', 'einunddreißig'.\n\n2. Multiples of Ten (Tens):\n• 20 = zwanzig\n• 30 = dreißig (notice it is spelled with 'ß', not 'z'!)\n• 40 = vierzig\n• 50 = fünfzig\n• 60 = sechzig (drops the 's' from sechs)\n• 70 = siebzig (drops the 'en' from sieben)\n• 80 = achtzig\n• 90 = neunzig\n• 100 = (ein)hundert.",
            "numbers": [
              {
                "num": 21,
                "word": "einundzwanzig",
                "sound": "Eyn-oont-tsvan-tsikh (1 + and + 20)",
                "hindi": "इक्कीस (21)",
                "marathi": "एकवीस (21)",
                "example": "Er ist 21 Jahre alt."
              },
              {
                "num": 22,
                "word": "zweiundzwanzig",
                "sound": "Tsvy-oont-tsvan-tsikh (2 + and + 20)",
                "hindi": "बाईस (22)",
                "marathi": "बावीस (22)",
                "example": "22 Grad Celsius"
              },
              {
                "num": 30,
                "word": "dreißig",
                "sound": "DRY-sikh",
                "hindi": "तीस (30)",
                "marathi": "तीस (30)",
                "example": "dreißig Tage (30 days)"
              },
              {
                "num": 40,
                "word": "vierzig",
                "sound": "FEER-tsikh",
                "hindi": "चालीस (40)",
                "marathi": "चाळीस (40)",
                "example": "vierzig Kilometer"
              },
              {
                "num": 50,
                "word": "fünfzig",
                "sound": "FOONF-tsikh",
                "hindi": "पचास (50)",
                "marathi": "पन्नास (50)",
                "example": "fünfzig Prozent"
              },
              {
                "num": 60,
                "word": "sechzig",
                "sound": "ZEKH-tsikh",
                "hindi": "साठ (60)",
                "marathi": "साठ (60)",
                "example": "sechzig Sekunden"
              },
              {
                "num": 70,
                "word": "siebzig",
                "sound": "ZEEP-tsikh",
                "hindi": "सत्तर (70)",
                "marathi": "सत्तर (70)",
                "example": "siebzig Euro"
              },
              {
                "num": 80,
                "word": "achtzig",
                "sound": "AHKHT-tsikh",
                "hindi": "अस्सी (80)",
                "marathi": "ऐंशी (80)",
                "example": "achtzig Jahre"
              },
              {
                "num": 90,
                "word": "neunzig",
                "sound": "NOYN-tsikh",
                "hindi": "नब्बे (90)",
                "marathi": "नव्वद (90)",
                "example": "neunzig Seiten"
              },
              {
                "num": 100,
                "word": "einhundert",
                "sound": "EYN-hoon-dert",
                "hindi": "सौ (100)",
                "marathi": "शंभर (100)",
                "example": "hundert Punkte (100 marks!)"
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a1-l4-d1",
                "question": "How do you write the number 47 in German according to the reversal rule?",
                "options": [
                  "vierzigsieben",
                  "siebenundvierzig",
                  "siebenvierzig",
                  "vierzehnsieben"
                ],
                "correct": 1,
                "explanation": "Unit first (sieben) + und + ten (vierzig) = 'siebenundvierzig'."
              }
            ]
          },
          {
            "id": "de-a1-l5",
            "lessonNumber": 5,
            "title": "Lesson 5: Essential Everyday Greetings & Courtesies",
            "summary": "Learn how to greet someone politely throughout the day, say thank you, please, and goodbye in both formal and informal contexts.",
            "videoMasterclass": {
              "title": "AI Masterclass: Everyday Greetings & Politeness in Germany",
              "tutorName": "Frau Schmidt (AI Native Faculty Tutor)",
              "videoPrompt": "Practice Guten Morgen, Guten Tag, Guten Abend, Gute Nacht, Danke schön, and Auf Wiedersehen with authentic warmth.",
              "narrationScript": "Guten Tag! Wie geht es Ihnen? Danke, sehr gut! In this lesson we learn warm, respectful daily greetings in German."
            },
            "grammarBreakdown": "Politeness and greetings in German vary according to the time of day and whether you are in an informal social setting or a formal professional environment.\n\n1. Time-Dependent Greetings:\n• Guten Morgen (Good morning) — used from early morning until around 11:00 AM.\n• Guten Tag (Good day / Hello) — the universal polite greeting from 11:00 AM until about 6:00 PM.\n• Guten Abend (Good evening) — used from 6:00 PM onwards.\n• Gute Nacht (Good night) — used exclusively when going to sleep or departing late at night. Notice that 'Nacht' is feminine (die Nacht), so it takes 'Gute' instead of 'Guten'.\n\n2. Welcoming and Departures:\n• Hallo — friendly, informal 'hello' used with friends, colleagues, and peers.\n• Auf Wiedersehen — the formal farewell ('until we see each other again').\n• Tschüss — the casual, popular farewell ('bye').\n\n3. Courtesies & Gratitude:\n• Danke / Danke schön / Vielen Dank — Thank you / Thank you very much.\n• Bitte / Bitte schön — You are welcome (in response to thanks) or Please (when making a request).\n• Entschuldigung — Excuse me / Pardon.",
            "vocabulary": [
              {
                "word": "Guten Tag",
                "translation": "Good day / Hello",
                "phonetic": "GOO-ten TAHK",
                "example": "Guten Tag, Herr Müller!"
              },
              {
                "word": "Auf Wiedersehen",
                "translation": "Goodbye (formal)",
                "phonetic": "owf VEE-der-zay-en",
                "example": "Auf Wiedersehen, bis morgen!"
              },
              {
                "word": "Danke schön",
                "translation": "Thank you very much",
                "phonetic": "DAHN-keh shurn",
                "example": "Vielen Dank für Ihre Hilfe!"
              },
              {
                "word": "Bitte",
                "translation": "Please / You're welcome",
                "phonetic": "BIT-teh",
                "example": "Bitte schön!"
              },
              {
                "word": "Tschüss",
                "translation": "Bye (informal)",
                "phonetic": "tchooss",
                "example": "Tschüss, Alex!"
              },
              {
                "word": "Entschuldigung",
                "translation": "Excuse me / Sorry",
                "phonetic": "ent-SHOOL-dee-goong",
                "example": "Entschuldigung, wo ist der Bahnhof?"
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a1-l5-d1",
                "question": "What is the standard polite, formal German expression for 'Goodbye'?",
                "options": [
                  "Tschüss",
                  "Auf Wiedersehen",
                  "Gute Nacht",
                  "Hallo"
                ],
                "correct": 1,
                "explanation": "'Auf Wiedersehen' is the polite, formal farewell."
              }
            ]
          },
          {
            "id": "de-a1-l6",
            "lessonNumber": 6,
            "title": "Lesson 6: Days of the Week, Months & Telling Time",
            "summary": "Learn Monday through Sunday, the 12 calendar months, and how to tell time accurately with the German clock system.",
            "videoMasterclass": {
              "title": "AI Masterclass: Days, Calendar & Telling Time in German",
              "tutorName": "Herr Weber (AI Native Faculty Tutor)",
              "videoPrompt": "Learn Montag to Sonntag and master the German clock system, especially the trick with 'halb' (half to the next hour!).",
              "narrationScript": "Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag! Wie spät ist es? Es ist vierzehn Uhr!"
            },
            "grammarBreakdown": "1. Days of the Week (Wochentage):\nAll days of the week in German are masculine (der Montag, der Dienstag...) and take the preposition 'am' (a contraction of an + dem, meaning 'on'):\n• Montag (Monday) -> am Montag (on Monday)\n• Dienstag (Tuesday)\n• Mittwoch (Wednesday — literally 'mid-week')\n• Donnerstag (Thursday)\n• Freitag (Friday)\n• Samstag (Saturday)\n• Sonntag (Sunday)\n\n2. Months of the Year (Monate):\nAll months are also masculine and take the preposition 'im' (in + dem, meaning 'in'):\n• Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember (e.g., 'im Juli' = in July).\n\n3. Telling Time (Die Uhrzeit):\n• Asking the time: 'Wie spät ist es?' or 'Wie viel Uhr ist es?' (What time is it?)\n• Full hours: 'Es ist zwei Uhr' (It is 2 o'clock).\n• The 'Halb' Rule: In German, 'halb' means half an hour BEFORE the named hour! So 'halb vier' does not mean 4:30—it means 3:30 (halfway to four)!",
            "grammarTable": {
              "title": "Days of the Week (Wochentage)",
              "headers": [
                "German Day",
                "Pronunciation",
                "English Translation",
                "Example Sentence"
              ],
              "rows": [
                [
                  "Montag",
                  "MOHN-tahk",
                  "Monday",
                  "Am Montag arbeite ich."
                ],
                [
                  "Dienstag",
                  "DEENS-tahk",
                  "Tuesday",
                  "Am Dienstag habe ich Zeit."
                ],
                [
                  "Mittwoch",
                  "MIT-vokh",
                  "Wednesday",
                  "Mittwoch ist die Wochenmitte."
                ],
                [
                  "Donnerstag",
                  "DON-ers-tahk",
                  "Thursday",
                  "Am Donnerstag lerne ich."
                ],
                [
                  "Freitag",
                  "FRY-tahk",
                  "Friday",
                  "Freitagabend ist frei."
                ],
                [
                  "Samstag",
                  "ZAHM-stahk",
                  "Saturday",
                  "Am Samstag gehe ich einkaufen."
                ],
                [
                  "Sonntag",
                  "ZON-tahk",
                  "Sunday",
                  "Sonntag ist Ruhetag."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "heute",
                "translation": "today",
                "phonetic": "HOY-teh",
                "example": "Heute ist Montag."
              },
              {
                "word": "morgen",
                "translation": "tomorrow",
                "phonetic": "MOR-gen",
                "example": "Morgen lerne ich Deutsch."
              },
              {
                "word": "die Uhrzeit",
                "translation": "the time (clock time)",
                "phonetic": "dee OOR-tsyt",
                "example": "Wie ist die Uhrzeit?"
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a1-l6-d1",
                "question": "Which preposition is used with days of the week in German (e.g., '______ Montag')?",
                "options": [
                  "im",
                  "am",
                  "um",
                  "an"
                ],
                "correct": 1,
                "explanation": "Days of the week take 'am' ('am Montag', 'am Freitag')."
              }
            ]
          },
          {
            "id": "de-a1-l7",
            "lessonNumber": 7,
            "title": "Lesson 7: Personal Pronouns (ich, du, er, sie, es, wir, ihr, sie, Sie)",
            "summary": "Master all German personal pronouns and learn how to distinguish between informal 'du', plural 'ihr', and respectful formal 'Sie'.",
            "videoMasterclass": {
              "title": "AI Masterclass: German Personal Pronouns & Politeness Levels",
              "tutorName": "Frau Schmidt (AI Native Faculty Tutor)",
              "videoPrompt": "Understand the clear difference between informal 'du', plural 'ihr', and formal capitalized 'Sie'.",
              "narrationScript": "Ich, du, er, sie, es, wir, ihr, sie, und das formelle Sie! In German, choosing the right pronoun reflects friendship or professional respect."
            },
            "grammarBreakdown": "Personal pronouns replace nouns and clarify who is performing an action.\n\n1. Singular Pronouns:\n• ich — I (first-person singular)\n• du — you (informal singular, used with close friends, classmates, and children)\n• er — he (masculine singular)\n• sie — she (feminine singular)\n• es — it (neuter singular)\n\n2. Plural Pronouns:\n• wir — we (first-person plural)\n• ihr — you all / you guys (informal plural, addressing multiple friends or family members)\n• sie — they (third-person plural, written with lowercase 's')\n\n3. The Formal 'Sie' (Capitalized):\n• 'Sie' (always spelled with a capital 'S') is the polite, respectful pronoun for 'You' (both singular and plural). Use it when addressing adults you do not know well, teachers, doctors, and business partners. It always conjugates identically to third-person plural 'sie'!",
            "grammarTable": {
              "title": "Personal Pronouns Master Chart",
              "headers": [
                "German Pronoun",
                "English Equivalent",
                "Formality / Usage",
                "Example Sentence"
              ],
              "rows": [
                [
                  "ich",
                  "I",
                  "First-person singular",
                  "Ich lerne Deutsch."
                ],
                [
                  "du",
                  "you",
                  "Informal singular (friends, family)",
                  "Du lernst schnell."
                ],
                [
                  "er",
                  "he",
                  "Masculine singular",
                  "Er kommt aus Berlin."
                ],
                [
                  "sie",
                  "she",
                  "Feminine singular",
                  "Sie wohnt in Wien."
                ],
                [
                  "es",
                  "it",
                  "Neuter singular",
                  "Es ist schön."
                ],
                [
                  "wir",
                  "we",
                  "First-person plural",
                  "Wir sind Freunde."
                ],
                [
                  "ihr",
                  "you all",
                  "Informal plural (group of friends)",
                  "Ihr seid nett."
                ],
                [
                  "sie",
                  "they",
                  "Third-person plural",
                  "Sie sprechen Deutsch."
                ],
                [
                  "Sie",
                  "You (formal)",
                  "Respectful formal (capitalized)",
                  "Kommen Sie aus Indien?"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "ich",
                "translation": "I",
                "phonetic": "ikh",
                "example": "Ich bin hier."
              },
              {
                "word": "wir",
                "translation": "we",
                "phonetic": "veer",
                "example": "Wir lernen zusammen."
              },
              {
                "word": "Sie (formal)",
                "translation": "You (respectful)",
                "phonetic": "zee",
                "example": "Kommen Sie aus Indien?"
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a1-l7-d1",
                "question": "Which pronoun means 'we' in German?",
                "options": [
                  "ihr",
                  "wir",
                  "sie",
                  "er"
                ],
                "correct": 1,
                "explanation": "'wir' means 'we'."
              }
            ]
          },
          {
            "id": "de-a1-l8",
            "lessonNumber": 8,
            "title": "Lesson 8: The Two Master Auxiliaries: Sein & Haben",
            "summary": "Master 'sein' (to be) and 'haben' (to have)—the two most important irregular verbs in the German language.",
            "videoMasterclass": {
              "title": "AI Masterclass: Conjugating sein & haben Flawlessly",
              "tutorName": "Herr Weber (AI Native Faculty Tutor)",
              "videoPrompt": "Learn by heart: ich bin, du bist, er ist; ich habe, du hast, er hat.",
              "narrationScript": "Ich bin glücklich, und ich habe Zeit! The two most vital irregular verbs in German are sein (to be) and haben (to have)."
            },
            "grammarBreakdown": "In German, 'sein' (to be) and 'haben' (to have) are the two most fundamental irregular verbs. They are used continuously as main verbs and later serve as essential auxiliary helpers for past tense and passive structures.\n\n1. Conjugating 'sein' (to be):\n• ich bin (I am)\n• du bist (you are — informal)\n• er / sie / es ist (he / she / it is)\n• wir sind (we are)\n• ihr seid (you all are)\n• sie / Sie sind (they are / You are — formal)\nExample: 'Ich bin Student und ich bin glücklich.' (I am a student and I am happy).\n\n2. Conjugating 'haben' (to have):\n• ich habe (I have)\n• du hast (you have)\n• er / sie / es hat (he / she / it has)\n• wir haben (we have)\n• ihr habt (you all have)\n• sie / Sie haben (they have / You have — formal)\nExample: 'Wir haben heute viel Zeit.' (We have plenty of time today).",
            "grammarTable": {
              "title": "sein vs haben Conjugation Matrix",
              "headers": [
                "Pronoun",
                "sein (to be)",
                "haben (to have)",
                "Example Sentence"
              ],
              "rows": [
                [
                  "ich",
                  "bin (I am)",
                  "habe (I have)",
                  "Ich bin hier / Ich habe ein Buch."
                ],
                [
                  "du",
                  "bist (you are)",
                  "hast (you have)",
                  "Du bist nett / Du hast Zeit."
                ],
                [
                  "er / sie / es",
                  "ist (he/she/it is)",
                  "hat (he/she/it has)",
                  "Er ist Arzt / Sie hat ein Auto."
                ],
                [
                  "wir",
                  "sind (we are)",
                  "haben (we have)",
                  "Wir sind glücklich / Wir haben Pause."
                ],
                [
                  "ihr",
                  "seid (you all are)",
                  "habt (you all have)",
                  "Ihr seid spät / Ihr habt Hunger."
                ],
                [
                  "sie / Sie",
                  "sind (they/You are)",
                  "haben (they/You have)",
                  "Sie sind Lehrer / Haben Sie Fragen?"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "sein",
                "translation": "to be",
                "phonetic": "zeyn",
                "example": "Ich bin Student."
              },
              {
                "word": "haben",
                "translation": "to have",
                "phonetic": "HAH-ben",
                "example": "Ich habe ein Buch."
              },
              {
                "word": "die Zeit",
                "translation": "time",
                "phonetic": "dee tsyt",
                "example": "Wir haben viel Zeit."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a1-l8-d1",
                "question": "Fill in the blank: 'Du ______ mein bester Freund (sein).'",
                "options": [
                  "bin",
                  "bist",
                  "ist",
                  "seid"
                ],
                "correct": 1,
                "explanation": "The 'du' form of sein is 'du bist'."
              },
              {
                "id": "de-a1-l8-d2",
                "question": "Fill in the blank: 'Wir ______ heute einen Deutschkurs (haben).'",
                "options": [
                  "habe",
                  "hast",
                  "hat",
                  "haben"
                ],
                "correct": 3,
                "explanation": "'wir' takes 'haben' ('Wir haben')."
              }
            ]
          },
          {
            "id": "de-a1-l9",
            "lessonNumber": 9,
            "title": "Lesson 9: Regular Verb Conjugation Formula",
            "summary": "Learn the universal regular verb formula: drop '-en' from the infinitive and attach -e, -st, -t, -en, -t, -en!",
            "videoMasterclass": {
              "title": "AI Masterclass: The Regular Verb Conjugation Engine",
              "tutorName": "Frau Schmidt (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how to strip the infinitive ending and attach personal endings with lernen, kommen, and wohnen.",
              "narrationScript": "Drop the -en and add: -e, -st, -t, -en, -t, -en! Once you learn this formula, you can conjugate hundreds of German verbs instantly!"
            },
            "grammarBreakdown": "Most verbs in German are regular (weak verbs) and follow a predictable, foolproof conjugation formula.\n\n1. The Two-Step Regular Formula:\nStep 1: Take the dictionary form of the verb (infinitive) and remove the '-en' ending to isolate the verb stem.\n• lernen (to learn) -> stem: 'lern-'\n• wohnen (to live/reside) -> stem: 'wohn-'\n• kommen (to come) -> stem: 'komm-'\n\nStep 2: Attach the mandatory personal ending matching the subject pronoun:\n• ich -> -e (ich lerne = I learn)\n• du -> -st (du lernst = you learn)\n• er / sie / es -> -t (er lernt = he learns)\n• wir -> -en (wir lernen = we learn)\n• ihr -> -t (ihr lernt = you all learn)\n• sie / Sie -> -en (sie lernen = they learn / You learn)\n\n*Quick Memory Mantra: -e, -st, -t, -en, -t, -en!",
            "grammarTable": {
              "title": "Regular Verb Conjugation Chart",
              "headers": [
                "Pronoun",
                "Ending",
                "lernen (to learn)",
                "wohnen (to live)",
                "kommen (to come)"
              ],
              "rows": [
                [
                  "ich",
                  "-e",
                  "lerne",
                  "wohne",
                  "komme"
                ],
                [
                  "du",
                  "-st",
                  "lernst",
                  "wohnst",
                  "kommst"
                ],
                [
                  "er/sie/es",
                  "-t",
                  "lernt",
                  "wohnt",
                  "kommt"
                ],
                [
                  "wir",
                  "-en",
                  "lernen",
                  "wohnen",
                  "kommen"
                ],
                [
                  "ihr",
                  "-t",
                  "lernt",
                  "wohnt",
                  "kommt"
                ],
                [
                  "sie/Sie",
                  "-en",
                  "lernen",
                  "wohnen",
                  "kommen"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "lernen",
                "translation": "to learn / study",
                "phonetic": "LAIR-nen",
                "example": "Ich lerne Deutsch."
              },
              {
                "word": "wohnen",
                "translation": "to live / reside",
                "phonetic": "VOH-nen",
                "example": "Ich wohne in Pune."
              },
              {
                "word": "kommen",
                "translation": "to come",
                "phonetic": "KOH-men",
                "example": "Ich komme aus Indien."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a1-l9-d1",
                "question": "Choose the correct verb form: 'Ich ______ in Mumbai (wohnen).'",
                "options": [
                  "wohnt",
                  "wohne",
                  "wohnen",
                  "wohnst"
                ],
                "correct": 1,
                "explanation": "Pronoun 'ich' takes the '-e' ending: 'Ich wohne'."
              }
            ]
          },
          {
            "id": "de-a1-l10",
            "lessonNumber": 10,
            "title": "Lesson 10: Nouns, Genders & Articles (Der, Die, Das & Ein, Eine)",
            "summary": "Discover the 3 genders in German (Masculine, Feminine, Neuter) and master definite, indefinite, and negative articles.",
            "videoMasterclass": {
              "title": "AI Masterclass: Master Der, Die, and Das Forever",
              "tutorName": "Herr Weber (AI Native Faculty Tutor)",
              "videoPrompt": "Discover visual memory tricks for genders and understand definite (the) versus indefinite (a/an) articles.",
              "narrationScript": "Der Mann, die Frau, das Kind! In German, every noun has a gender, and every noun is capitalized!"
            },
            "grammarBreakdown": "German has three distinct grammatical genders: Masculine, Feminine, and Neuter. Every noun in German possesses a gender, and every noun is ALWAYS capitalized in writing!\n\n1. The Three Genders & Articles:\n• Masculine (m): der (definite 'the') | ein (indefinite 'a/an') | kein (negative 'no') -> e.g., der Tisch (the table), ein Tisch (a table).\n• Feminine (f): die (definite 'the') | eine (indefinite 'a/an') | keine (negative 'no') -> e.g., die Lampe (the lamp), eine Lampe (a lamp).\n• Neuter (n): das (definite 'the') | ein (indefinite 'a/an') | kein (negative 'no') -> e.g., das Buch (the book), ein Buch (a book).\n• Plural (pl): die (definite 'the') | No indefinite article exists for plurals! | keine -> e.g., die Bücher (the books).\n\n2. The Golden Capitalization Rule:\nUnlike English where only proper nouns are capitalized, ALL German nouns (objects, ideas, persons, feelings) must begin with a capital letter (e.g., der Tee, die Nacht, das Haus).",
            "grammarTable": {
              "title": "Articles in Nominative Case",
              "headers": [
                "Gender",
                "Definite (The)",
                "Indefinite (A / An)",
                "Negative (No / None)",
                "Example Noun"
              ],
              "rows": [
                [
                  "Masculine (m)",
                  "der",
                  "ein",
                  "kein",
                  "der Mann (the man)"
                ],
                [
                  "Feminine (f)",
                  "die",
                  "eine",
                  "keine",
                  "die Frau (the woman)"
                ],
                [
                  "Neuter (n)",
                  "das",
                  "ein",
                  "kein",
                  "das Kind (the child)"
                ],
                [
                  "Plural (pl)",
                  "die",
                  "– (no article)",
                  "keine",
                  "die Kinder (the children)"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "der Tisch",
                "translation": "the table (masculine)",
                "phonetic": "dayr TEESH",
                "example": "Das ist ein Tisch."
              },
              {
                "word": "die Lampe",
                "translation": "the lamp (feminine)",
                "phonetic": "dee LAHM-peh",
                "example": "Das ist eine Lampe."
              },
              {
                "word": "das Buch",
                "translation": "the book (neuter)",
                "phonetic": "dahs BOOKH",
                "example": "Das ist ein Buch."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a1-l10-d1",
                "question": "Which indefinite article is used for a feminine noun in German (e.g., 'Frau')?",
                "options": [
                  "ein",
                  "eine",
                  "einen",
                  "eines"
                ],
                "correct": 1,
                "explanation": "Feminine nouns take 'eine' (eine Frau)."
              }
            ]
          },
          {
            "id": "de-a1-l11",
            "lessonNumber": 11,
            "title": "Lesson 11: Nominative vs Accusative Case (Direct Objects)",
            "summary": "Understand subjects and direct objects. Learn the simple secret: only masculine articles change (der -> den, ein -> einen)!",
            "videoMasterclass": {
              "title": "AI Masterclass: The Accusative Case Demystified",
              "tutorName": "Frau Schmidt (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how the object receiving the action changes from der to den, while die, das, and plural stay completely unchanged.",
              "narrationScript": "Ich sehe den Mann, ich trinke einen Kaffee! In Akkusativ, only masculine words change: der becomes den, ein becomes einen!"
            },
            "grammarBreakdown": "German uses cases to designate the grammatical role of each noun in a sentence.\n\n1. Nominativ (The Subject):\nThe person or thing performing the action is in the Nominative case (e.g., 'Der Mann trinkt Kaffee' -> 'Der Mann' is the subject).\n\n2. Akkusativ (The Direct Object):\nThe person or thing receiving the action of the verb is in the Accusative case (e.g., 'Ich trinke den Kaffee' -> 'den Kaffee' is the direct object).\n\n3. The Golden Akkusativ Secret:\nIn the Accusative case, ONLY masculine articles change! Feminine, neuter, and plural articles remain completely unchanged:\n• Masculine: der -> den | ein -> einen | kein -> keinen\n• Feminine: die -> die | eine -> eine | keine -> keine (No change!)\n• Neuter: das -> das | ein -> ein | kein -> kein (No change!)\n• Plural: die -> die | keine -> keine (No change!)\n\nExample: 'Ich habe einen Apfel (masculine), eine Lampe (feminine) und ein Buch (neuter).'",
            "grammarTable": {
              "title": "Nominative vs Accusative Comparison Chart",
              "headers": [
                "Case & Function",
                "Masculine (m)",
                "Feminine (f)",
                "Neuter (n)",
                "Plural (pl)"
              ],
              "rows": [
                [
                  "Nominative (Subject)",
                  "der / ein / kein",
                  "die / eine / keine",
                  "das / ein / kein",
                  "die / keine"
                ],
                [
                  "Accusative (Direct Object)",
                  "den / einen / keinen",
                  "die / eine / keine",
                  "das / ein / kein",
                  "die / keine"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "den Apfel",
                "translation": "the apple (Accusative)",
                "phonetic": "dayn AHP-fel",
                "example": "Ich esse den Apfel."
              },
              {
                "word": "einen Kaffee",
                "translation": "a coffee (Accusative)",
                "phonetic": "EY-nen KAH-fay",
                "example": "Möchten Sie einen Kaffee?"
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a1-l11-d1",
                "question": "Fill in the blank: 'Ich trinke ______ Kaffee (der Kaffee)' in the Accusative case:",
                "options": [
                  "der",
                  "den",
                  "dem",
                  "das"
                ],
                "correct": 1,
                "explanation": "Masculine 'der' becomes 'den' in the Accusative case: 'Ich trinke den Kaffee'."
              }
            ]
          },
          {
            "id": "de-a1-l12",
            "lessonNumber": 12,
            "title": "Lesson 12: Sentence Architecture (The V2 Rule) & Question Patterns",
            "summary": "The golden rule of German: the conjugated verb must always sit in Position 2 in statements, and Position 1 in Yes/No questions.",
            "videoMasterclass": {
              "title": "AI Masterclass: The German V2 Rule & Question Mastery",
              "tutorName": "Herr Weber (AI Native Faculty Tutor)",
              "videoPrompt": "Understand why Germans invert subject and verb when starting with time or place, and how W-questions work.",
              "narrationScript": "In German main clauses, the conjugated verb is always locked in Position 2! Heute lerne ich Deutsch!"
            },
            "grammarBreakdown": "German syntax is governed by the strict and logical Verb-Second (V2) rule.\n\n1. The Verb-Second (V2) Rule for Statements:\nIn every standard German declarative statement, the conjugated (finite) verb must sit in Position 2, no matter what element occupies Position 1!\n• Subject in Position 1: 'Ich (1) lerne (2) heute Deutsch.' (I am learning German today).\n• Time in Position 1: 'Heute (1) lerne (2) ich Deutsch.' (Today I am learning German).\n*Notice: When 'Heute' occupies Position 1, the verb 'lerne' stays in Position 2, causing the subject 'ich' to invert into Position 3!\n\n2. W-Questions (Information Questions):\nThe question word takes Position 1, and the verb stays in Position 2:\n• Wer? (Who), Was? (What), Wo? (Where), Woher? (Where from), Wohin? (Where to), Wann? (When), Wie? (How), Warum? (Why).\nExample: 'Woher (1) kommen (2) Sie?' (Where do you come from?)\n\n3. Yes/No Questions:\nThe conjugated verb steps to Position 1:\n• 'Trinkst (1) du (2) Kaffee?' (Do you drink coffee?)\n• 'Lernen (1) Sie (2) Deutsch?' (Are you learning German?)",
            "grammarTable": {
              "title": "Sentence Position Analysis",
              "headers": [
                "Sentence Type",
                "Position 1",
                "Position 2 (Finite Verb)",
                "Position 3 (Subject)",
                "Rest of Sentence"
              ],
              "rows": [
                [
                  "Standard Statement",
                  "Alex",
                  "wohnt",
                  "–",
                  "in Berlin."
                ],
                [
                  "Time-First Statement",
                  "Heute",
                  "lerne",
                  "ich",
                  "fleißig Deutsch."
                ],
                [
                  "W-Question",
                  "Woher",
                  "kommst",
                  "du?",
                  "–"
                ],
                [
                  "Yes/No Question",
                  "Kommst (Verb in Pos 1!)",
                  "–",
                  "du",
                  "aus Indien?"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "woher",
                "translation": "where from",
                "phonetic": "voh-HAIR",
                "example": "Woher kommen Sie?"
              },
              {
                "word": "wann",
                "translation": "when",
                "phonetic": "vahn",
                "example": "Wann beginnt der Kurs?"
              },
              {
                "word": "wer",
                "translation": "who",
                "phonetic": "vair",
                "example": "Wer ist das?"
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a1-l12-d1",
                "question": "Which sentence correctly demonstrates the Verb-Second (V2) rule?",
                "options": [
                  "Morgen ich gehe ins Kino.",
                  "Morgen gehe ich ins Kino.",
                  "Morgen gehe ins Kino ich.",
                  "Ich morgen gehe ins Kino."
                ],
                "correct": 1,
                "explanation": "When starting with 'Morgen' (Position 1), the verb 'gehe' must occupy Position 2: 'Morgen gehe ich ins Kino'."
              }
            ]
          },
          {
            "id": "de-a1-l13",
            "lessonNumber": 13,
            "title": "Lesson 13: Precise Negation: Nicht vs Kein",
            "summary": "Learn the exact difference between 'kein' (negating nouns with indefinite/zero articles) and 'nicht' (negating verbs, adjectives, and definite nouns).",
            "videoMasterclass": {
              "title": "AI Masterclass: Mastering German Negation (nicht vs kein)",
              "tutorName": "Frau Schmidt (AI Native Faculty Tutor)",
              "videoPrompt": "Understand: 'kein' is like 'no/not a' for nouns, and 'nicht' is like 'not' for verbs and adjectives.",
              "narrationScript": "Ich habe kein Auto, und ich fahre nicht gern mit dem Bus! Learn when to pick kein versus nicht with ease."
            },
            "grammarBreakdown": "German expresses negation with two distinct words: 'kein' and 'nicht'. Knowing when to use which is essential for clear communication.\n\n1. When to Use 'kein' (no / not a / none):\nUse 'kein' (and its forms keine, keinen) to negate nouns that would otherwise take an indefinite article ('ein/eine') or no article at all:\n• Positive: 'Ich habe ein Auto.' -> Negative: 'Ich habe kein Auto.' (I have no car / I don't have a car).\n• Positive: 'Ich habe eine Frage.' -> Negative: 'Ich habe keine Frage.' (I have no question).\n• Positive: 'Wir haben Zeit.' -> Negative: 'Wir haben keine Zeit.' (We have no time).\n\n2. When to Use 'nicht' (not):\nUse 'nicht' to negate verbs, adjectives, adverbs, pronouns, and nouns with definite articles ('der/die/das'):\n• Negating a verb: 'Ich verstehe nicht.' (I do not understand).\n• Negating an adjective: 'Das Buch ist nicht teuer.' (The book is not expensive).\n• Negating a definite noun: 'Das ist nicht das Auto von Alex.' (That is not Alex's car).",
            "grammarTable": {
              "title": "nicht vs kein Usage Matrix",
              "headers": [
                "Negation Word",
                "Applied To",
                "Positive Sentence",
                "Negated Sentence",
                "English Meaning"
              ],
              "rows": [
                [
                  "kein (m/n)",
                  "Nouns with ein / no article",
                  "Ich habe ein Auto.",
                  "Ich habe kein Auto.",
                  "I have no car."
                ],
                [
                  "keine (f/pl)",
                  "Feminine / Plural nouns",
                  "Ich habe eine Frage.",
                  "Ich habe keine Frage.",
                  "I have no question."
                ],
                [
                  "nicht",
                  "Verbs / Actions",
                  "Ich verstehe.",
                  "Ich verstehe nicht.",
                  "I do not understand."
                ],
                [
                  "nicht",
                  "Adjectives / Attributes",
                  "Er ist alt.",
                  "Er ist nicht alt.",
                  "He is not old."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "nicht",
                "translation": "not",
                "phonetic": "nikht",
                "example": "Ich weiß es nicht."
              },
              {
                "word": "kein",
                "translation": "no / not any",
                "phonetic": "kayn",
                "example": "Ich habe kein Geld."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a1-l13-d1",
                "question": "How do you correctly negate the sentence: 'Ich habe ein Ticket'?",
                "options": [
                  "Ich habe nicht Ticket.",
                  "Ich habe kein Ticket.",
                  "Ich habe keines Ticket.",
                  "Ich nicht habe ein Ticket."
                ],
                "correct": 1,
                "explanation": "Nouns with an indefinite article take 'kein': 'Ich habe kein Ticket'."
              }
            ]
          },
          {
            "id": "de-a1-l14",
            "lessonNumber": 14,
            "title": "Lesson 14: Modal Verbs (Können & Möchten)",
            "summary": "Express your abilities with 'können' (can) and polite wishes with 'möchten' (would like) using the sentence bracket (Satzklammer).",
            "videoMasterclass": {
              "title": "AI Masterclass: German Modal Verbs & The Sentence Bracket",
              "tutorName": "Herr Weber (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how modal verbs push the main action verb to the very end of the sentence in its infinitive form.",
              "narrationScript": "Ich kann Deutsch sprechen! Ich möchte einen Kaffee trinken! Notice how the main verb goes to the very end!"
            },
            "grammarBreakdown": "Modal verbs express ability, necessity, or desire. In German, modal verbs trigger the sentence bracket (Satzklammer) architecture.\n\n1. The Two Vital Beginner Modals:\n• können = can / to be able to (ability, possibility)\n• möchten = would like to (polite desire, ordering in a restaurant)\n\n2. The Sentence Bracket (Satzklammer) Rule:\nWhen using a modal verb:\n• The modal verb conjugates to match the subject and sits in Position 2.\n• The main action verb is sent to the VERY END of the sentence in its unconjugated infinitive form!\nExample with können: 'Ich kann (Pos 2) sehr gut Deutsch sprechen (End).'\nExample with möchten: 'Wir möchten (Pos 2) einen Kaffee trinken (End).'\n\n3. Conjugation Highlights:\n• können: ich kann, du kannst, er/sie/es kann, wir können, ihr könnt, sie/Sie können.\n• möchten: ich möchte, du möchtest, er/sie/es möchte, wir möchten, ihr möchtet, sie/Sie möchten.\n*Notice: The 1st person (ich) and 3rd person (er/sie/es) forms are always identical for modal verbs!",
            "grammarTable": {
              "title": "können and möchten Conjugation Matrix",
              "headers": [
                "Pronoun",
                "können (can / to be able)",
                "möchten (would like to)",
                "Example Sentence"
              ],
              "rows": [
                [
                  "ich",
                  "kann (I can)",
                  "möchte (I would like)",
                  "Ich kann schwimmen / Ich möchte Tee."
                ],
                [
                  "du",
                  "kannst (you can)",
                  "möchtest (you would like)",
                  "Kannst du kommen? / Möchtest du Kaffee?"
                ],
                [
                  "er/sie/es",
                  "kann (he/she can)",
                  "möchte (he/she would like)",
                  "Er kann kochen / Sie möchte schlafen."
                ],
                [
                  "wir",
                  "können (we can)",
                  "möchten (we would like)",
                  "Wir können helfen / Wir möchten bestellen."
                ],
                [
                  "ihr",
                  "könnt (you all can)",
                  "möchtet (you all would like)",
                  "Könnt ihr Deutsch? / Was möchtet ihr?"
                ],
                [
                  "sie/Sie",
                  "können (they/You can)",
                  "möchten (they/You would like)",
                  "Sie können Deutsch sprechen."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "können",
                "translation": "can / to be able to",
                "phonetic": "KERN-en",
                "example": "Kannst du mir helfen?"
              },
              {
                "word": "möchten",
                "translation": "would like to",
                "phonetic": "MERKH-ten",
                "example": "Ich möchte Wasser trinken."
              },
              {
                "word": "sprechen",
                "translation": "to speak",
                "phonetic": "SHPREKH-en",
                "example": "Er spricht Englisch."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a1-l14-d1",
                "question": "Where does the second infinitive verb go when using a modal verb in a German main clause?",
                "options": [
                  "Position 1",
                  "Position 2",
                  "Right after the subject",
                  "At the very end of the sentence"
                ],
                "correct": 3,
                "explanation": "According to the German sentence bracket rule (Satzklammer), the infinitive verb is placed at the very end of the clause."
              }
            ]
          },
          {
            "id": "de-a1-l15",
            "lessonNumber": 15,
            "title": "Lesson 15: Self-Introduction Masterclass (Mein Selbstporträt)",
            "summary": "Put everything together into a fluent 7-point self-introduction in German! Prepare for real-world interactions and the Goethe-Zertifikat A1 exam.",
            "videoMasterclass": {
              "title": "AI Masterclass: Introducing Yourself Like a Native Speaker",
              "tutorName": "Frau Schmidt (AI Native Faculty Tutor)",
              "videoPrompt": "Master the 7-step formula: Greeting, Name, Age, Country of Origin, Residence, Profession, Languages & Hobbies.",
              "narrationScript": "Guten Tag! Ich heiße Rahul. Ich bin zweiundzwanzig Jahre alt. Ich komme aus Indien und wohne in Pune. Ich bin Student und lerne Deutsch. Mein Hobby ist Musik hören!"
            },
            "grammarBreakdown": "Introducing yourself fluently is the crowning milestone of level A1. Mastering this 7-step formula equips you for real-world social encounters and the official Goethe-Zertifikat A1 speaking exam.\n\n1. The 7-Step Master Blueprint:\nStep 1: Greeting (Begrüßung): 'Guten Tag!' or 'Hallo!'\nStep 2: Name: 'Ich heiße [Name]' or 'Mein Name ist [Name]'.\nStep 3: Age: 'Ich bin [Number] Jahre alt.' (e.g., 'Ich bin 21 Jahre alt.')\nStep 4: Country of Origin: 'Ich komme aus Indien.' (The preposition 'aus' indicates origin).\nStep 5: City of Residence: 'Ich wohne in Pune / Mumbai / Berlin.' (The preposition 'in' indicates location).\nStep 6: Profession or Studies: 'Ich bin Student / Ingenieur / Arzt.' (Notice: In German, do NOT use 'ein' when stating your profession!).\nStep 7: Languages & Hobbies: 'Ich spreche Englisch, Hindi, Marathi und ich lerne Deutsch. Mein Hobby ist Musik hören.'\n\n2. Key Exam Checklist:\n• Every verb agrees with 'ich' (ending in -e: heiße, komme, wohne, lerne).\n• Remember that all German nouns (Name, Jahre, Student, Hobby, Musik) must be capitalized!",
            "grammarTable": {
              "title": "Self-Introduction Blueprint Table",
              "headers": [
                "Step",
                "German Expression",
                "Pronunciation",
                "English Translation"
              ],
              "rows": [
                [
                  "1. Greeting",
                  "Guten Tag! / Hallo!",
                  "GOO-ten TAHK",
                  "Good day! / Hello!"
                ],
                [
                  "2. Name",
                  "Ich heiße Rahul.",
                  "ikh HY-seh Rahul",
                  "My name is Rahul."
                ],
                [
                  "3. Age",
                  "Ich bin 21 Jahre alt.",
                  "ikh bin einundzwanzig Jahre alt",
                  "I am 21 years old."
                ],
                [
                  "4. Country",
                  "Ich komme aus Indien.",
                  "ikh KOH-meh ows IN-dee-en",
                  "I come from India."
                ],
                [
                  "5. City",
                  "Ich wohne in Pune.",
                  "ikh VOH-neh in Pune",
                  "I live in Pune."
                ],
                [
                  "6. Languages",
                  "Ich spreche Englisch und lerne Deutsch.",
                  "ikh SHPREKH-eh...",
                  "I speak English and I am learning German."
                ],
                [
                  "7. Hobby",
                  "Mein Hobby ist Musik hören.",
                  "mayn HOB-bee ist...",
                  "My hobby is listening to music."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "heißen",
                "translation": "to be called / named",
                "phonetic": "HY-sen",
                "example": "Wie heißen Sie?"
              },
              {
                "word": "das Hobby",
                "translation": "hobby",
                "phonetic": "dahs HOB-bee",
                "example": "Mein Hobby ist Lesen."
              },
              {
                "word": "aus Indien",
                "translation": "from India",
                "phonetic": "ows IN-dee-en",
                "example": "Ich komme aus Indien."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a1-l15-d1",
                "question": "Which sentence correctly states 'I come from India' in German?",
                "options": [
                  "Ich komme aus Indien.",
                  "Ich komme in Indien.",
                  "Ich bin auskommen Indien.",
                  "Ich gehe nach Indien."
                ],
                "correct": 0,
                "explanation": "'Ich komme aus Indien' is the standard, accurate expression of origin."
              }
            ]
          }
        ],
        "assignment": {
          "title": "Goethe-Zertifikat A1 Comprehensive Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 4,
              "prompt": "1. How is the German letter 'W' pronounced in words like 'Wasser' (Water)?",
              "options": [
                "Like English 'W' in water",
                "Like English 'V' in voice",
                "Like English 'B'",
                "It is completely silent"
              ],
              "correct": 1,
              "explanation": "German 'W' is always pronounced like the English 'V' (Wasser sounds like 'Vasser')."
            },
            {
              "id": "q2",
              "marks": 4,
              "prompt": "2. Which sound does the diphthong 'EI' produce in words like 'mein' (my)?",
              "options": [
                "Like 'ee' in tree",
                "Like 'eye' in light",
                "Like 'ay' in day",
                "Like 'oo' in food"
              ],
              "correct": 1,
              "explanation": "'EI' in German always produces the 'eye' sound (mein = 'mayn')."
            },
            {
              "id": "q3",
              "marks": 4,
              "prompt": "3. What is the German word for the number 12?",
              "options": [
                "elf",
                "zwölf",
                "dreizehn",
                "zehn"
              ],
              "correct": 1,
              "explanation": "12 in German is 'zwölf'."
            },
            {
              "id": "q4",
              "marks": 4,
              "prompt": "4. How is the number 25 written according to the German number reversal rule?",
              "options": [
                "zwanzigfünf",
                "fünfundzwanzig",
                "fünfzehnzwanzig",
                "fünfzwanzig"
              ],
              "correct": 1,
              "explanation": "Units first (fünf) + und + tens (zwanzig) = 'fünfundzwanzig'."
            },
            {
              "id": "q5",
              "marks": 4,
              "prompt": "5. What is the formal German greeting for 'Good Day / Hello' used during daytime?",
              "options": [
                "Gute Nacht",
                "Guten Tag",
                "Auf Wiedersehen",
                "Tschüss"
              ],
              "correct": 1,
              "explanation": "'Guten Tag' is the standard polite greeting from morning until evening."
            },
            {
              "id": "q6",
              "marks": 4,
              "prompt": "6. Which preposition is used with days of the week like 'Montag' (Monday)?",
              "options": [
                "im",
                "am",
                "um",
                "in"
              ],
              "correct": 1,
              "explanation": "Days of the week take 'am' ('am Montag')."
            },
            {
              "id": "q7",
              "marks": 4,
              "prompt": "7. Which pronoun represents the formal, respectful 'You' and is always capitalized?",
              "options": [
                "du",
                "ihr",
                "Sie",
                "er"
              ],
              "correct": 2,
              "explanation": "Capitalized 'Sie' is the formal respectful 'You'."
            },
            {
              "id": "q8",
              "marks": 4,
              "prompt": "8. Select the correct form of the verb 'sein' for 'du': 'Du ______ sehr nett.'",
              "options": [
                "bin",
                "bist",
                "ist",
                "sind"
              ],
              "correct": 1,
              "explanation": "The 'du' form of sein is 'du bist'."
            },
            {
              "id": "q9",
              "marks": 4,
              "prompt": "9. Fill in the blank with the correct form of 'haben': 'Wir ______ viele Freunde in Deutschland.'",
              "options": [
                "habe",
                "hast",
                "hat",
                "haben"
              ],
              "correct": 3,
              "explanation": "'wir' takes 'haben' ('Wir haben')."
            },
            {
              "id": "q10",
              "marks": 4,
              "prompt": "10. What is the regular conjugation ending for the pronoun 'ich' (e.g., 'lernen')?",
              "options": [
                "-st",
                "-e",
                "-t",
                "-en"
              ],
              "correct": 1,
              "explanation": "'ich' takes the ending '-e' (ich lerne, ich wohne, ich komme)."
            },
            {
              "id": "q11",
              "marks": 4,
              "prompt": "11. What grammatical gender does the noun 'das Buch' (the book) have?",
              "options": [
                "Masculine (der)",
                "Feminine (die)",
                "Neuter (das)",
                "Plural"
              ],
              "correct": 2,
              "explanation": "'das Buch' is neuter (das)."
            },
            {
              "id": "q12",
              "marks": 4,
              "prompt": "12. In the Accusative case (direct object), which gender is the ONLY one that changes its article?",
              "options": [
                "Feminine (die)",
                "Neuter (das)",
                "Masculine (der -> den)",
                "Plural (die)"
              ],
              "correct": 2,
              "explanation": "In the Accusative case, only masculine articles change (der -> den, ein -> einen, kein -> keinen)."
            },
            {
              "id": "q13",
              "marks": 4,
              "prompt": "13. Fill in the blank: 'Ich trinke jeden Morgen ______ Tee (der Tee - Masculine Accusative).'",
              "options": [
                "der",
                "den",
                "dem",
                "das"
              ],
              "correct": 1,
              "explanation": "Masculine 'der Tee' becomes 'den Tee' in the Accusative case."
            },
            {
              "id": "q14",
              "marks": 4,
              "prompt": "14. According to the German V2 rule, which position MUST the conjugated verb occupy in a main statement?",
              "options": [
                "Position 1",
                "Position 2",
                "Position 3",
                "At the very end"
              ],
              "correct": 1,
              "explanation": "The Verb-Second (V2) rule mandates that the finite verb sits in Position 2."
            },
            {
              "id": "q15",
              "marks": 4,
              "prompt": "15. Which question word means 'Where from' (e.g., 'Where do you come from?')?",
              "options": [
                "Wo",
                "Woher",
                "Wohin",
                "Wann"
              ],
              "correct": 1,
              "explanation": "'Woher' means where from ('Woher kommen Sie?')."
            },
            {
              "id": "q16",
              "marks": 4,
              "prompt": "16. How do you negate the noun 'ein Auto' correctly?",
              "options": [
                "Ich habe nicht Auto.",
                "Ich habe kein Auto.",
                "Ich habe keines Auto.",
                "Ich habe nie Auto."
              ],
              "correct": 1,
              "explanation": "Nouns with indefinite articles are negated with 'kein': 'Ich habe kein Auto'."
            },
            {
              "id": "q17",
              "marks": 4,
              "prompt": "17. How do you negate the verb in 'Ich verstehe' (I understand)?",
              "options": [
                "Ich verstehe kein.",
                "Ich verstehe nicht.",
                "Ich verstehe nichts Auto.",
                "Ich nicht verstehe."
              ],
              "correct": 1,
              "explanation": "Verbs and complete clauses are negated with 'nicht': 'Ich verstehe nicht'."
            },
            {
              "id": "q18",
              "marks": 4,
              "prompt": "18. What does the modal verb 'können' express?",
              "options": [
                "Obligation (must)",
                "Ability / Possibility (can)",
                "Permission (may)",
                "Desire (would like)"
              ],
              "correct": 1,
              "explanation": "'können' expresses ability / possibility (to be able to / can)."
            },
            {
              "id": "q19",
              "marks": 4,
              "prompt": "19. Where does the second infinitive verb go when used with a modal verb (e.g., 'können')?",
              "options": [
                "Position 1",
                "Position 2",
                "At the very end of the sentence",
                "Right before the subject"
              ],
              "correct": 2,
              "explanation": "The Satzklammer rule pushes the second infinitive verb to the very end of the clause."
            },
            {
              "id": "q20",
              "marks": 4,
              "prompt": "20. Which sentence correctly states 'I live in Pune and I am learning German'?",
              "options": [
                "Ich wohne in Pune und ich lerne Deutsch.",
                "Ich wohnen in Pune und ich lernen Deutsch.",
                "Ich wohne aus Pune und ich spreche nicht.",
                "In Pune ich wohne und Deutsch lerne ich nicht."
              ],
              "correct": 0,
              "explanation": "'Ich wohne in Pune und ich lerne Deutsch' is completely accurate in conjugations and prepositions."
            }
          ],
          "writingAssessment": {
            "title": "Section 2: AI Live Writing Assessment — Mein Selbstporträt (20 Marks)",
            "instructions": "Write a complete self-introduction in German containing at least 5 of the 6 key elements: Greeting, Name, Age, Country of Origin, Residence City, and Profession or Hobby.",
            "maxMarks": 20,
            "passingMarks": 14,
            "modelAnswer": "Hallo! Mein Name ist Rahul. Ich bin zweiundzwanzig Jahre alt. Ich komme aus Indien und wohne in Pune. Ich bin Student und ich lerne Deutsch. Mein Hobby ist Musik hören.",
            "keyCheckpoints": [
              {
                "label": "Greeting (Hallo / Guten Tag / Guten Morgen)",
                "marks": 3
              },
              {
                "label": "Name declaration (Ich heiße ... / Mein Name ist ...)",
                "marks": 4
              },
              {
                "label": "Age with 'Jahre alt' (Ich bin ... Jahre alt)",
                "marks": 3
              },
              {
                "label": "Origin & Residence (Ich komme aus ... / Ich wohne in ...)",
                "marks": 4
              },
              {
                "label": "Languages / Hobby (Ich lerne Deutsch / Mein Hobby ist ...)",
                "marks": 3
              },
              {
                "label": "German Capitalization & Verb-Second Grammar",
                "marks": 3
              }
            ]
          }
        }
      },
      "A2": {
        "code": "A2",
        "title": "Elementary",
        "studyTime": "180 – 200 hours (cumulative)",
        "exam": "Goethe-Zertifikat A2",
        "vocabSize": "~1,500 – 2,000 words",
        "grammarSyllabus": [
          "Perfekt tense (conversational past)",
          "Präteritum of sein, haben and modal verbs",
          "Dativ case and verbs requiring Dativ",
          "Two-way prepositions (Wechselpräpositionen) with Akkusativ/Dativ",
          "Comparative and superlative adjectives",
          "Reflexive verbs",
          "Subordinate clauses with weil and dass",
          "Separable and inseparable verbs (trennbare/untrennbare Verben)"
        ],
        "vocabThemes": [
          "Housing and household",
          "Shopping and services",
          "Travel and transport",
          "Health and body",
          "Work and routines"
        ],
        "keySkills": [
          "Describe past events and personal background",
          "Handle simple everyday transactions",
          "Write short personal notes and messages"
        ],
        "lessons": [
          {
            "id": "de-a2-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Das Perfekt (Conversational Past Tense)",
            "summary": "Master speaking about past experiences using 'haben' or 'sein' with Partizip II at the end of the clause.",
            "videoMasterclass": {
              "title": "AI Masterclass: Conversational Past (Perfekt) & Partizip II",
              "tutorName": "Frau Schmidt (AI Native Faculty Tutor)",
              "videoPrompt": "Learn when to choose 'sein' (motion/change of state) vs 'haben', and how to construct Partizip II for regular and irregular verbs.",
              "narrationScript": "Ich habe gestern Deutsch gelernt, und ich bin nach Berlin gefahren! The Perfekt tense is the primary way Germans talk about the past in daily conversation."
            },
            "grammarBreakdown": "In conversational German, the Perfekt tense is used for nearly all past actions. It consists of two parts:\n1. Auxiliary verb (haben or sein) conjugated in Position 2.\n2. Past Participle (Partizip II) at the very end of the sentence.\n\nWhen to use 'sein':\n• Movement with change of location (gehen, fahren, fliegen, kommen).\n• Change of state (aufwachen, sterben, einschlafen).\n• The verbs 'sein' itself and 'bleiben' (ich bin gewesen, ich bin geblieben).\nAll other transitive and stationary verbs use 'haben' (ich habe gegessen, ich habe gearbeitet).",
            "grammarTable": {
              "title": "Perfekt Tense Auxiliaries and Partizip II",
              "headers": [
                "Verb",
                "Auxiliary",
                "Partizip II",
                "Example Sentence"
              ],
              "rows": [
                [
                  "lernen (regular)",
                  "haben",
                  "gelernt",
                  "Ich habe gestern fleißig gelernt."
                ],
                [
                  "machen (regular)",
                  "haben",
                  "gemacht",
                  "Wir haben die Hausaufgaben gemacht."
                ],
                [
                  "fahren (movement)",
                  "sein",
                  "gefahren",
                  "Er ist mit dem Zug nach Hamburg gefahren."
                ],
                [
                  "gehen (movement)",
                  "sein",
                  "gegangen",
                  "Sie ist gestern früh ins Bett gegangen."
                ],
                [
                  "bleiben (state)",
                  "sein",
                  "geblieben",
                  "Wir sind am Wochenende zu Hause geblieben."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "gestern",
                "translation": "yesterday",
                "phonetic": "GES-tairn",
                "example": "Gestern habe ich gearbeitet."
              },
              {
                "word": "letzte Woche",
                "translation": "last week",
                "phonetic": "LETS-teh VOH-kheh",
                "example": "Letzte Woche war ich in Wien."
              },
              {
                "word": "gefahren",
                "translation": "driven / traveled",
                "phonetic": "geh-FAH-ren",
                "example": "Ich bin nach Hause gefahren."
              },
              {
                "word": "gekauft",
                "translation": "bought",
                "phonetic": "geh-KOWFT",
                "example": "Er hat ein neues Fahrrad gekauft."
              },
              {
                "word": "passiert",
                "translation": "happened",
                "phonetic": "pah-SEERT",
                "example": "Was ist gestern passiert?"
              },
              {
                "word": "die Reise",
                "translation": "the trip / journey",
                "phonetic": "dee RY-zeh",
                "example": "Die Reise war fantastisch."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a2-l1-d1",
                "question": "Which auxiliary verb is required for 'Ich ______ nach Berlin gefahren'?",
                "options": [
                  "habe",
                  "bin",
                  "hat",
                  "werde"
                ],
                "correct": 1,
                "explanation": "'fahren' signifies directional motion, requiring the auxiliary 'sein': 'Ich bin gefahren'."
              },
              {
                "id": "de-a2-l1-d2",
                "question": "Where is Partizip II (past participle) placed in a standard German main clause?",
                "options": [
                  "Position 1",
                  "Position 2",
                  "Right after the auxiliary",
                  "At the very end of the sentence"
                ],
                "correct": 3,
                "explanation": "The auxiliary sits in Position 2, while the Partizip II sits at the very end of the clause."
              }
            ]
          },
          {
            "id": "de-a2-l2",
            "lessonNumber": 2,
            "title": "Lesson 2: Dativ Case & Verbs Requiring Dativ",
            "summary": "Understand the indirect object (Dativ), learn the Dativ article transformations, and master verbs that take Dativ.",
            "videoMasterclass": {
              "title": "AI Masterclass: The German Dativ Case & Essential Dativ Verbs",
              "tutorName": "Herr Weber (AI Native Faculty Tutor)",
              "videoPrompt": "Master 'dem, der, dem, den (+n)' and verbs like helfen, danken, gehören, and gefallen.",
              "narrationScript": "Ich helfe dem Mann und der Frau! The Dativ case marks the indirect recipient of an action. Notice how 'der' becomes 'dem', and 'die' becomes 'der'!"
            },
            "grammarBreakdown": "The Dativ case answers the question 'Wem?' (To whom?).\nArticle changes in Dativ:\n• Masculine: der / ein -> dem / einem\n• Feminine: die / eine -> der / einer\n• Neuter: das / ein -> dem / einem\n• Plural: die -> den (+ add -n to the noun if possible! e.g. den Kindern)\n\nKey verbs that require Dativ:\n• helfen (to help): Ich helfe dir.\n• danken (to thank): Wir danken Ihnen.\n• gefallen (to please): Das Kleid gefällt der Frau.\n• gehören (to belong to): Das Buch gehört dem Studenten.",
            "grammarTable": {
              "title": "Case Comparison: Nominativ vs Akkusativ vs Dativ",
              "headers": [
                "Case",
                "Maskulin",
                "Feminin",
                "Neutral",
                "Plural"
              ],
              "rows": [
                [
                  "Nominativ (Subject)",
                  "der / ein",
                  "die / eine",
                  "das / ein",
                  "die / keine"
                ],
                [
                  "Akkusativ (Direct Object)",
                  "den / einen",
                  "die / eine",
                  "das / ein",
                  "die / keine"
                ],
                [
                  "Dativ (Indirect Object)",
                  "dem / einem",
                  "der / einer",
                  "dem / einem",
                  "den / keinen (+n)"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "helfen",
                "translation": "to help (+ Dativ)",
                "phonetic": "HEL-fen",
                "example": "Kannst du mir helfen?"
              },
              {
                "word": "gefallen",
                "translation": "to appeal to / please (+ Dativ)",
                "phonetic": "geh-FAHL-en",
                "example": "Die Stadt gefällt mir gut."
              },
              {
                "word": "gehören",
                "translation": "to belong to (+ Dativ)",
                "phonetic": "geh-HER-en",
                "example": "Das Auto gehört meinem Vater."
              },
              {
                "word": "danken",
                "translation": "to thank (+ Dativ)",
                "phonetic": "DAHN-ken",
                "example": "Ich danke dir für die Hilfe."
              },
              {
                "word": "die Antwort",
                "translation": "the answer",
                "phonetic": "dee AHNT-vort",
                "example": "Er gibt dem Lehrer die Antwort."
              },
              {
                "word": "der Nachbar",
                "translation": "the neighbor",
                "phonetic": "dayr NAHKH-bar",
                "example": "Wir helfen dem Nachbarn."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a2-l2-d1",
                "question": "Choose the correct article: 'Ich helfe ______ Frau (die Frau) mit den Taschen.'",
                "options": [
                  "die",
                  "der",
                  "dem",
                  "den"
                ],
                "correct": 1,
                "explanation": "The verb 'helfen' requires the Dativ case. In Dativ, feminine 'die' changes to 'der'."
              },
              {
                "id": "de-a2-l2-d2",
                "question": "Which form is correct in Dativ plural for 'die Kinder'?",
                "options": [
                  "die Kinder",
                  "der Kindern",
                  "den Kindern",
                  "dem Kinder"
                ],
                "correct": 2,
                "explanation": "Dativ plural takes 'den' and adds an '-n' to the noun: 'den Kindern'."
              }
            ]
          },
          {
            "id": "de-a2-l3",
            "lessonNumber": 3,
            "title": "Lesson 3: Two-Way Prepositions (Wechselpräpositionen)",
            "summary": "Master the 9 two-way prepositions: an, auf, hinter, in, neben, über, unter, vor, zwischen (Akkusativ for motion vs Dativ for location).",
            "videoMasterclass": {
              "title": "AI Masterclass: Wechselpräpositionen (Wohin? vs Wo?)",
              "tutorName": "Frau Schmidt (AI Native Faculty Tutor)",
              "videoPrompt": "Understand the core dichotomy: Action/movement towards a destination takes Akkusativ, stationary location takes Dativ.",
              "narrationScript": "Wohin gehst du? In die Stadt (Akkusativ)! Wo bist du? In der Stadt (Dativ)! The 9 two-way prepositions are pure logic once you know Wohin versus Wo!"
            },
            "grammarBreakdown": "The 9 Two-Way Prepositions (Wechselpräpositionen) can govern either the Akkusativ or the Dativ case:\n• an (at, on vertical surface)\n• auf (on horizontal surface)\n• hinter (behind)\n• in (in, into)\n• neben (next to)\n• über (over, above)\n• unter (under)\n• vor (in front of)\n• zwischen (between)\n\nThe Golden Rule:\n• Question: WOHIN? (Movement, destination, action) -> AKKUSATIV\nExample: 'Ich lege das Buch auf den Tisch.' (I put the book onto the table)\n• Question: WO? (Stationary position, location) -> DATIV\nExample: 'Das Buch liegt auf dem Tisch.' (The book is lying on the table)",
            "grammarTable": {
              "title": "Wechselpräpositionen Matrix",
              "headers": [
                "Preposition",
                "Action / Motion (Wohin? + Akkusativ)",
                "State / Location (Wo? + Dativ)"
              ],
              "rows": [
                [
                  "auf (on)",
                  "Ich stelle das Glas auf den Tisch.",
                  "Das Glas steht auf dem Tisch."
                ],
                [
                  "in (in / into)",
                  "Wir gehen in das (ins) Kino.",
                  "Wir sind in dem (im) Kino."
                ],
                [
                  "unter (under)",
                  "Die Katze läuft unter das Bett.",
                  "Die Katze schläft unter dem Bett."
                ],
                [
                  "an (at / on)",
                  "Er hängt das Bild an die Wand.",
                  "Das Bild hängt an der Wand."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "auf",
                "translation": "on (horizontal)",
                "phonetic": "owf",
                "example": "Auf dem Tisch liegt ein Stift."
              },
              {
                "word": "in",
                "translation": "in / into",
                "phonetic": "in",
                "example": "Ich gehe ins Kino."
              },
              {
                "word": "neben",
                "translation": "next to / beside",
                "phonetic": "NAY-ben",
                "example": "Die Bank steht neben der Post."
              },
              {
                "word": "zwischen",
                "translation": "between",
                "phonetic": "TSVEE-shen",
                "example": "Er sitzt zwischen den Stühlen."
              },
              {
                "word": "stellen",
                "translation": "to place upright (action -> Akk)",
                "phonetic": "SHTEL-en",
                "example": "Stell die Vase auf den Tisch!"
              },
              {
                "word": "stehen",
                "translation": "to stand (state -> Dat)",
                "phonetic": "SHTAY-en",
                "example": "Die Vase steht auf dem Tisch."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a2-l3-d1",
                "question": "Choose the correct form: 'Das Bild hängt an ______ Wand (die Wand).'",
                "options": [
                  "die",
                  "der",
                  "dem",
                  "den"
                ],
                "correct": 1,
                "explanation": "The picture is hanging stationary on the wall (Wo? -> Dativ). Feminine 'die' becomes 'der'."
              },
              {
                "id": "de-a2-l3-d2",
                "question": "Choose the correct form: 'Er geht in ______ Zimmer (das Zimmer).'",
                "options": [
                  "das",
                  "dem",
                  "der",
                  "den"
                ],
                "correct": 0,
                "explanation": "Movement into the room (Wohin? -> Akkusativ). Neuter 'das' remains 'das' (ins Zimmer)."
              }
            ]
          },
          {
            "id": "de-a2-l4",
            "lessonNumber": 4,
            "title": "Lesson 4: Subordinate Clauses (weil & dass) & Separable Verbs",
            "summary": "Learn how 'weil' (because) and 'dass' (that) kick the conjugated verb to the final position, and understand separable prefixes.",
            "videoMasterclass": {
              "title": "AI Masterclass: Subordinating Conjunctions & Separable Verbs",
              "tutorName": "Herr Weber (AI Native Faculty Tutor)",
              "videoPrompt": "Learn verb kickers (weil, dass, wenn) and see how prefixes like auf-, an-, and aus- split in present tense.",
              "narrationScript": "Ich lerne Deutsch, weil ich in Berlin studieren will! Subordinating conjunctions like 'weil' and 'dass' kick the conjugated verb all the way to the end!"
            },
            "grammarBreakdown": "1. Subordinate Clauses (Nebensätze) with 'weil' (because) and 'dass' (that):\nIn a Nebensatz, the conjugated verb is sent to the very last position in the clause.\nExample: 'Ich bleibe zu Hause, weil ich krank bin.'\n\n2. Separable Verbs (Trennbare Verben):\nVerbs with prefixes like auf-, ab-, an-, aus-, mit-, ein- split in present tense main clauses:\n• aufstehen: 'Ich stehe um 7 Uhr auf.' (auf goes to the end!)\nHowever, inside a 'weil' clause, they stay together at the end: '... weil ich früh aufstehe.'",
            "grammarTable": {
              "title": "Main Clause vs Nebensatz Word Order",
              "headers": [
                "Clause Type",
                "Conjunction",
                "Subject",
                "Middle Elements",
                "Verb Position"
              ],
              "rows": [
                [
                  "Main Clause",
                  "–",
                  "Ich",
                  "trinke einen Tee,",
                  "trinke (Pos 2)"
                ],
                [
                  "Nebensatz (weil)",
                  "weil",
                  "ich",
                  "müde",
                  "bin (Last Position)"
                ],
                [
                  "Nebensatz (dass)",
                  "dass",
                  "du",
                  "heute zu mir",
                  "kommst (Last Position)"
                ],
                [
                  "Separable Main",
                  "–",
                  "Er",
                  "jeden Morgen um 6 Uhr",
                  "steht ... auf (Prefix at end)"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "weil",
                "translation": "because (verb kicker)",
                "phonetic": "vyl",
                "example": "Ich lerne, weil es Spaß macht."
              },
              {
                "word": "dass",
                "translation": "that (verb kicker)",
                "phonetic": "dahs",
                "example": "Ich weiß, dass du recht hast."
              },
              {
                "word": "aufstehen",
                "translation": "to get up / stand up",
                "phonetic": "OWF-shtay-en",
                "example": "Ich stehe um sieben Uhr auf."
              },
              {
                "word": "anrufen",
                "translation": "to call on phone",
                "phonetic": "AHN-roo-fen",
                "example": "Rufst du mich heute an?"
              },
              {
                "word": "einkaufen",
                "translation": "to shop / buy groceries",
                "phonetic": "EYN-kow-fen",
                "example": "Wir kaufen im Supermarkt ein."
              },
              {
                "word": "mitkommen",
                "translation": "to come along",
                "phonetic": "MIT-koh-men",
                "example": "Kommst du heute mit?"
              }
            ],
            "practiceDrills": [
              {
                "id": "de-a2-l4-d1",
                "question": "Which sentence correctly applies the verb-kicker rule with 'weil'?",
                "options": [
                  "Ich trinke Kaffee, weil ich bin müde.",
                  "Ich trinke Kaffee, weil ich müde bin.",
                  "Ich trinke Kaffee, weil bin ich müde.",
                  "Ich trinke Kaffee, weil müde ich bin."
                ],
                "correct": 1,
                "explanation": "'weil' is a subordinating conjunction, sending the conjugated verb 'bin' to the very end of the clause."
              },
              {
                "id": "de-a2-l4-d2",
                "question": "How is the separable verb 'aufstehen' conjugated in 'Ich ______ um 7 Uhr ______'?",
                "options": [
                  "aufstehe / –",
                  "stehe / auf",
                  "gestanden / auf",
                  "stehe auf / –"
                ],
                "correct": 1,
                "explanation": "In a main clause, the stem conjugates in Position 2 ('stehe') and the separable prefix goes to the sentence end ('auf')."
              }
            ]
          }
        ],
        "assignment": {
          "title": "Goethe-Zertifikat A2 Comprehensive Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence with the correct Perfekt tense and auxiliary selection:",
              "options": [
                "Wir haben gestern mit dem Zug nach München gefahren.",
                "Wir sind gestern mit dem Zug nach München gefahren.",
                "Wir haben gestern mit dem Zug nach München gefahrt.",
                "Wir sind gestern mit dem Zug nach München gefahrt."
              ],
              "correct": 1,
              "explanation": "'fahren' expresses directional movement and takes 'sein' (wir sind gefahren)."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Select the sentence correctly applying the Dativ case for an indirect recipient:",
              "options": [
                "Der Arzt hilft den kranken Mann.",
                "Der Arzt hilft dem kranken Mann.",
                "Der Arzt hilft der kranken Mann.",
                "Der Arzt hilft das kranken Mann."
              ],
              "correct": 1,
              "explanation": "'helfen' governs the Dativ case; the masculine noun 'Mann' takes 'dem kranken Mann'."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Which sentence correctly applies the Wechselpräposition rule for motion towards a destination (Wohin?):",
              "options": [
                "Er legt das Buch auf dem Tisch.",
                "Er legt das Buch auf den Tisch.",
                "Das Buch liegt auf den Tisch.",
                "Er liegt das Buch auf dem Tisch."
              ],
              "correct": 1,
              "explanation": "'legen' implies an action of moving an object onto the table (Wohin? -> Akkusativ 'den Tisch')."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Choose the sentence that correctly structures the subordinate clause with 'weil':",
              "options": [
                "Maria geht heute nicht zur Arbeit, weil sie gestern krank geworden ist.",
                "Maria geht heute nicht zur Arbeit, weil sie ist gestern krank geworden.",
                "Maria geht heute nicht zur Arbeit, weil gestern sie krank ist geworden.",
                "Maria geht heute nicht zur Arbeit, weil krank sie gestern geworden ist."
              ],
              "correct": 0,
              "explanation": "In a Perfekt Nebensatz with 'weil', the conjugated auxiliary verb ('ist') goes to the very end after the Partizip II ('krank geworden ist')."
            }
          ]
        }
      },
      "B1": {
        "code": "B1",
        "title": "Intermediate",
        "studyTime": "350 – 400 hours (cumulative)",
        "exam": "Goethe-Zertifikat B1 / Zertifikat Deutsch",
        "vocabSize": "~3,000 words",
        "grammarSyllabus": [
          "Genitiv case",
          "Konjunktiv II (würde + infinitive; hätte, wäre) for hypotheticals",
          "Passiv (Vorgangspassiv) in present and past",
          "Relative clauses (Relativsätze)",
          "Full range of subordinating conjunctions (obwohl, während, nachdem...)",
          "Adjective endings/declension after articles",
          "Indirect questions"
        ],
        "vocabThemes": [
          "Opinions and argumentation",
          "Environment and society",
          "Media and current events",
          "Education and career"
        ],
        "keySkills": [
          "Express opinions and give reasons",
          "Deal with most situations while travelling in German-speaking areas",
          "Write connected texts on familiar topics"
        ],
        "lessons": [
          {
            "id": "de-b1-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Der Genitiv & Possessive Constructions",
            "summary": "Master the fourth German case: Genitiv (des, der, des, der), Genitiv prepositions (wegen, während, trotz), and possession.",
            "videoMasterclass": {
              "title": "AI Masterclass: The Genitiv Case & Formal German Precision",
              "tutorName": "Frau Schmidt (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how masculine and neuter nouns add -(e)s in Genitiv, and how prepositions like wegen, während, and trotz demand Genitiv.",
              "narrationScript": "Das Auto des Vaters, die Tasche der Mutter! The Genitiv case expresses belonging, origin, and relationship, and is essential for academic and official German."
            },
            "grammarBreakdown": "The Genitiv case answers the question 'Wessen?' (Whose?).\nArticle transformations:\n• Maskulin: des (+s / -es on noun, e.g. des Vaters, des Hauses)\n• Neutral: des (+s / -es on noun, e.g. des Kindes)\n• Feminin: der (der Mutter)\n• Plural: der (der Kinder)\n\nKey Genitiv Prepositions:\n• wegen (because of): wegen des schlechten Wetters\n• während (during): während des Urlaubs\n• trotz (despite): trotz des Regens\n• anstatt / statt (instead of): statt eines Autos",
            "grammarTable": {
              "title": "All Four German Cases Overview",
              "headers": [
                "Case",
                "Maskulin",
                "Feminin",
                "Neutral",
                "Plural"
              ],
              "rows": [
                [
                  "Nominativ (Subject)",
                  "der / ein",
                  "die / eine",
                  "das / ein",
                  "die / –"
                ],
                [
                  "Akkusativ (Direct Object)",
                  "den / einen",
                  "die / eine",
                  "das / ein",
                  "die / –"
                ],
                [
                  "Dativ (Indirect Object)",
                  "dem / einem",
                  "der / einer",
                  "dem / einem",
                  "den / – (+n)"
                ],
                [
                  "Genitiv (Possession)",
                  "des / eines (+s)",
                  "der / einer",
                  "des / eines (+s)",
                  "der / –"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "wegen",
                "translation": "because of (+ Genitiv)",
                "phonetic": "VAY-gen",
                "example": "Wegen des Regens bleiben wir hier."
              },
              {
                "word": "während",
                "translation": "during (+ Genitiv)",
                "phonetic": "VEH-rent",
                "example": "Während der Reise habe ich viel gelesen."
              },
              {
                "word": "trotz",
                "translation": "despite (+ Genitiv)",
                "phonetic": "trots",
                "example": "Trotz der Kälte geht er spazieren."
              },
              {
                "word": "der Besitzer",
                "translation": "the owner",
                "phonetic": "dayr beh-ZIT-sair",
                "example": "Das ist das Haus des Besitzers."
              },
              {
                "word": "die Meinung",
                "translation": "the opinion",
                "phonetic": "dee MY-noong",
                "example": "Meiner Meinung nach ist das wichtig."
              },
              {
                "word": "die Zukunft",
                "translation": "the future",
                "phonetic": "dee TSOO-koonft",
                "example": "Die Zukunft der Jugend ist entscheidend."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-b1-l1-d1",
                "question": "Choose the correct Genitiv phrase: 'Wegen ______ Wetters (das Wetter) fällt der Flug aus.'",
                "options": [
                  "das schlechtes",
                  "des schlechten",
                  "dem schlechtem",
                  "den schlechten"
                ],
                "correct": 1,
                "explanation": "'wegen' requires Genitiv. Neuter 'das Wetter' becomes 'des schlechten Wetters'."
              }
            ]
          },
          {
            "id": "de-b1-l2",
            "lessonNumber": 2,
            "title": "Lesson 2: Konjunktiv II (Hypotheticals, Polite Wishes & Dreams)",
            "summary": "Express hypothetical situations, dreams, and polite requests using 'würde + Infinitive', 'hätte', 'wäre', and 'könnte'.",
            "videoMasterclass": {
              "title": "AI Masterclass: Konjunktiv II for Hypotheticals & Polite Speech",
              "tutorName": "Herr Weber (AI Native Faculty Tutor)",
              "videoPrompt": "Form imaginary conditions ('Wenn ich reich wäre...'), express polite requests ('Könnten Sie mir helfen?'), and use 'würde + infinitive'.",
              "narrationScript": "Wenn ich Zeit hätte, würde ich nach Japan fliegen! Konjunktiv II creates the world of possibilities, counterfactual conditions, and refined politeness."
            },
            "grammarBreakdown": "Konjunktiv II represents the subjunctive mood in German:\n1. Hypothetical situations: 'Wenn ich Zeit hätte, käme ich.' / '... würde ich kommen.'\n2. Polite requests: 'Könnten Sie das bitte wiederholen?' / 'Ich hätte gern einen Kaffee.'\n\nCore Forms:\n• haben -> ich hätte, du hättest, er hätte, wir hätten\n• sein -> ich wäre, du wärst, er wäre, wir wären\n• können -> ich könnte, du könntest, er könnte\n• Most other verbs use: würde + Infinitive (ich würde reisen, wir würden kaufen).",
            "grammarTable": {
              "title": "Essential Konjunktiv II Forms",
              "headers": [
                "Pronoun",
                "sein (to be)",
                "haben (to have)",
                "können (can)",
                "würde + lernen"
              ],
              "rows": [
                [
                  "ich",
                  "wäre",
                  "hätte",
                  "könnte",
                  "würde lernen"
                ],
                [
                  "du",
                  "wär(e)st",
                  "hättest",
                  "könntest",
                  "würdest lernen"
                ],
                [
                  "er / sie / es",
                  "wäre",
                  "hätte",
                  "könnte",
                  "würde lernen"
                ],
                [
                  "wir",
                  "wären",
                  "hätten",
                  "könnten",
                  "würden lernen"
                ],
                [
                  "ihr",
                  "wäret",
                  "hättet",
                  "könntet",
                  "würdet lernen"
                ],
                [
                  "sie / Sie",
                  "wären",
                  "hätten",
                  "könnten",
                  "würden lernen"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "wenn",
                "translation": "if / whenever",
                "phonetic": "ven",
                "example": "Wenn ich reich wäre, würde ich reisen."
              },
              {
                "word": "hätte",
                "translation": "would have",
                "phonetic": "HET-teh",
                "example": "Ich hätte gern eine Auskunft."
              },
              {
                "word": "wäre",
                "translation": "would be",
                "phonetic": "VEH-reh",
                "example": "Das wäre wunderbar."
              },
              {
                "word": "könnte",
                "translation": "could / would be able to",
                "phonetic": "KERN-teh",
                "example": "Könnten Sie mir bitte helfen?"
              },
              {
                "word": "der Wunsch",
                "translation": "the wish / desire",
                "phonetic": "dayr voonsh",
                "example": "Das ist mein größter Wunsch."
              },
              {
                "word": "höflich",
                "translation": "polite",
                "phonetic": "HERF-likh",
                "example": "Sie ist immer sehr höflich."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-b1-l2-d1",
                "question": "Which sentence correctly expresses a hypothetical wish with Konjunktiv II?",
                "options": [
                  "Wenn ich habe Geld, kaufe ich ein Haus.",
                  "Wenn ich Geld hätte, würde ich ein Haus kaufen.",
                  "Wenn ich Geld habe, würde ich ein Haus gekauft.",
                  "Wenn ich Geld hatte, kaufe ich ein Haus."
                ],
                "correct": 1,
                "explanation": "Hypothetical condition uses 'hätte' in the 'wenn' clause, and 'würde + kaufen' in the main clause."
              }
            ]
          },
          {
            "id": "de-b1-l3",
            "lessonNumber": 3,
            "title": "Lesson 3: Das Passiv (Vorgangspassiv in Present & Past)",
            "summary": "Shift focus from the actor to the action itself using 'werden + Partizip II' and 'von + Dativ'.",
            "videoMasterclass": {
              "title": "AI Masterclass: German Vorgangspassiv & Process Descriptions",
              "tutorName": "Frau Schmidt (AI Native Faculty Tutor)",
              "videoPrompt": "Master 'werden + Partizip II' in present (wird gebaut) and past (wurde gebaut), and introduce the agent with 'von + Dativ'.",
              "narrationScript": "Das Haus wird gebaut. Der Brief wurde geschrieben. The passive voice focuses on what happens to the subject rather than who is doing it."
            },
            "grammarBreakdown": "Vorgangspassiv (Action Passive):\n• Formula: conjugated form of 'werden' + Partizip II (at the end).\n• Present: 'Das Auto wird repariert.'\n• Past (Präteritum): 'Das Auto wurde repariert.'\n• Perfekt: 'Das Auto ist repariert worden.' (Note: 'worden', not 'geworden'!).\n• Agent: Introduced with 'von + Dativ' (e.g. von dem Mechaniker -> vom Mechaniker).",
            "grammarTable": {
              "title": "Passiv Tense Formations",
              "headers": [
                "Tense",
                "Active Sentence",
                "Passive Sentence Formula",
                "Passive Example"
              ],
              "rows": [
                [
                  "Präsens",
                  "Der Arzt untersucht den Patienten.",
                  "wird + Partizip II",
                  "Der Patient wird vom Arzt untersucht."
                ],
                [
                  "Präteritum",
                  "Der Arzt untersuchte den Patienten.",
                  "wurde + Partizip II",
                  "Der Patient wurde vom Arzt untersucht."
                ],
                [
                  "Perfekt",
                  "Der Arzt hat den Patienten untersucht.",
                  "ist + Partizip II + worden",
                  "Der Patient ist untersucht worden."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "werden",
                "translation": "to become / passive auxiliary",
                "phonetic": "VAIR-den",
                "example": "Der Bericht wird morgen geschrieben."
              },
              {
                "word": "wurde",
                "translation": "was (past passive)",
                "phonetic": "VOOR-deh",
                "example": "Die Kirche wurde 1850 erbaut."
              },
              {
                "word": "worden",
                "translation": "been (past participle in passive)",
                "phonetic": "VOR-den",
                "example": "Das Problem ist gelöst worden."
              },
              {
                "word": "von",
                "translation": "by / from (+ Dativ)",
                "phonetic": "fon",
                "example": "Das Buch wurde von Goethe geschrieben."
              },
              {
                "word": "reparieren",
                "translation": "to repair",
                "phonetic": "reh-pah-REE-ren",
                "example": "Das Fahrrad wird repariert."
              },
              {
                "word": "die Regel",
                "translation": "the rule",
                "phonetic": "dee RAY-gel",
                "example": "Die Regeln werden erklärt."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-b1-l3-d1",
                "question": "Transform into Present Passive: 'Der Mechaniker repariert das Auto.'",
                "options": [
                  "Das Auto ist repariert.",
                  "Das Auto wird vom Mechaniker repariert.",
                  "Das Auto wurde vom Mechaniker repariert.",
                  "Das Auto wird reparieren vom Mechaniker."
                ],
                "correct": 1,
                "explanation": "Present passive requires 'wird' + Partizip II 'repariert' at the end: 'Das Auto wird vom Mechaniker repariert'."
              }
            ]
          }
        ],
        "assignment": {
          "title": "Goethe-Zertifikat B1 Comprehensive Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence with the grammatically correct Genitiv construction:",
              "options": [
                "Während des langen Fluges las der Passagier ein Buch.",
                "Während dem langen Flug las der Passagier ein Buch.",
                "Während des langes Fluges las der Passagier ein Buch.",
                "Während den langen Flug las der Passagier ein Buch."
              ],
              "correct": 0,
              "explanation": "'während' demands Genitiv. Masculine 'Flug' becomes 'des langen Fluges'."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which sentence accurately expresses a polite hypothetical question using Konjunktiv II?",
              "options": [
                "Könnten Sie mir bitte sagen, wo der Bahnhof ist?",
                "Können Sie mir bitte sagen, wo ist der Bahnhof?",
                "Würden Sie mir bitte sagen können, wo der Bahnhof ist?",
                "Hätten Sie mir bitte gesagt, wo der Bahnhof ist?"
              ],
              "correct": 0,
              "explanation": "'Könnten Sie mir bitte sagen...' is the standard polite Konjunktiv II query followed by an indirect question with final verb."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Choose the correct past passive (Präteritum Passiv) sentence:",
              "options": [
                "Die neue Brücke wurde im letzten Jahr fertiggestellt.",
                "Die neue Brücke ist im letzten Jahr fertiggestellt wurden.",
                "Die neue Brücke wird im letzten Jahr fertiggestellt worden.",
                "Die neue Brücke hat im letzten Jahr fertiggestellt."
              ],
              "correct": 0,
              "explanation": "Past passive uses 'wurde' + Partizip II ('fertiggestellt')."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Select the sentence correctly using a relative clause with the Dativ case:",
              "options": [
                "Das ist der Freund, dem ich das Buch geliehen habe.",
                "Das ist der Freund, den ich das Buch geliehen habe.",
                "Das ist der Freund, der ich das Buch geliehen habe.",
                "Das ist der Freund, des ich das Buch geliehen habe."
              ],
              "correct": 0,
              "explanation": "'leihen' takes a person in Dativ (wem leihe ich das Buch? -> dem Freund), so the relative pronoun is 'dem'."
            }
          ]
        }
      },
      "B2": {
        "code": "B2",
        "title": "Upper-Intermediate",
        "studyTime": "500 – 600 hours (cumulative)",
        "exam": "Goethe-Zertifikat B2",
        "vocabSize": "~5,000 words",
        "grammarSyllabus": [
          "Konjunktiv I for reported speech (indirekte Rede)",
          "Passiv with modal verbs (musste gemacht werden)",
          "Extended participial constructions (erweiterte Partizipialattribute)",
          "Nominalisation of verbs and adjectives",
          "Complex sentence structures with multiple subordinate clauses"
        ],
        "vocabThemes": [
          "Academic and abstract topics",
          "Professional and business German",
          "Idiomatic expressions"
        ],
        "keySkills": [
          "Interact fluently with native speakers",
          "Understand complex texts on concrete and abstract topics",
          "Produce detailed, well-structured texts"
        ],
        "lessons": [
          {
            "id": "de-b2-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Konjunktiv I & Indirekte Rede (Reported Speech)",
            "summary": "Report statements objectively in news, journalism, and academic papers without expressing personal belief.",
            "videoMasterclass": {
              "title": "AI Masterclass: Journalistic German with Konjunktiv I",
              "tutorName": "Herr Weber (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how German journalists quote third parties: 'Der Minister sagte, er sei zuversichtlich...'.",
              "narrationScript": "Der Kanzler erklärte, die Wirtschaft wachse stetig. Konjunktiv I allows speakers to report facts with neutral journalistic distance."
            },
            "grammarBreakdown": "Konjunktiv I is formed by taking the verb stem and adding: -e, -est, -e, -en, -et, -en.\nIn practice, it is mostly used in the 3rd person singular (er/sie/es) to avoid confusion with the indicative:\n• haben -> er habe\n• sein -> er sei\n• können -> er könne\n• wissen -> er wisse\n\nIf the Konjunktiv I form looks identical to the standard present tense (indicative), German grammar substitutes Konjunktiv II to ensure distinction!",
            "grammarTable": {
              "title": "Konjunktiv I Core Conjugation",
              "headers": [
                "Pronoun",
                "sein",
                "haben",
                "sagen",
                "können"
              ],
              "rows": [
                [
                  "er / sie / es",
                  "sei",
                  "habe",
                  "sage",
                  "könne"
                ],
                [
                  "wir (substitute)",
                  "wären (KII)",
                  "hätten (KII)",
                  "sagten (KII)",
                  "könnten (KII)"
                ],
                [
                  "sie (substitute)",
                  "seien / wären",
                  "hätten",
                  "würden sagen",
                  "könnten"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "behaupten",
                "translation": "to claim / assert",
                "phonetic": "beh-HOWP-ten",
                "example": "Er behauptet, er wisse nichts davon."
              },
              {
                "word": "erklären",
                "translation": "to explain / declare",
                "phonetic": "air-KLEH-ren",
                "example": "Die Sprecherin erklärte, man sei vorbereitet."
              },
              {
                "word": "die Aussage",
                "translation": "the statement / testimony",
                "phonetic": "dee OWS-zah-geh",
                "example": "Laut seiner Aussage sei er zu Hause gewesen."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-b2-l1-d1",
                "question": "Which form completes the reported speech: 'Die Forscherin sagte, die Methode ______ sehr zuverlässig.'?",
                "options": [
                  "ist",
                  "sei",
                  "wäre",
                  "seien"
                ],
                "correct": 1,
                "explanation": "The 3rd person singular of 'sein' in Konjunktiv I is 'sei'."
              }
            ]
          },
          {
            "id": "de-b2-l2",
            "lessonNumber": 2,
            "title": "Lesson 2: Passiv with Modal Verbs & Nominalisation",
            "summary": "Construct complex passive structures with modal verbs (musste gemacht werden) and transform verbal phrases into concise nominal style.",
            "videoMasterclass": {
              "title": "AI Masterclass: Advanced B2 Passive & Nominal Style",
              "tutorName": "Frau Schmidt (AI Native Faculty Tutor)",
              "videoPrompt": "Master modal passives in present and past, and convert actions into formal nouns (-ung, -heit, -keit).",
              "narrationScript": "Das Dokument muss heute noch unterschrieben werden. Die Modernisierung der Infrastruktur ist unerlässlich."
            },
            "grammarBreakdown": "1. Passive with Modal Verbs:\n• Present: 'Das Problem muss gelöst werden.' (Modal in Pos 2, Partizip II + werden at end)\n• Past: 'Das Problem musste gelöst werden.' (Modal in Präteritum)\n• Perfekt: 'Das Problem hat gelöst werden müssen.'\n\n2. Nominalisation:\nConverting verbs or adjectives into nouns is the hallmark of sophisticated professional German:\n• prüfen -> die Prüfung\n• reinigen -> die Reinigung\n• sauber -> die Sauberkeit",
            "grammarTable": {
              "title": "Verbalstil vs Nominalstil in B2 German",
              "headers": [
                "Verbalstil (Conversational)",
                "Nominalstil (Official / Scientific)"
              ],
              "rows": [
                [
                  "Weil die Preise steigen, kaufen weniger Leute ein.",
                  "Aufgrund des Preisanstiegs sinkt die Kaufkraft."
                ],
                [
                  "Bevor wir das Projekt beginnen, müssen wir planen.",
                  "Vor Beginn des Projekts ist eine Planung erforderlich."
                ],
                [
                  "Obwohl es stark regnete, fand das Konzert statt.",
                  "Trotz starken Regens fand das Konzert statt."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "die Durchführung",
                "translation": "execution / implementation",
                "phonetic": "dee DOORKH-foo-roong",
                "example": "Die Durchführung des Projekts erfordert Präzision."
              },
              {
                "word": "die Voraussetzung",
                "translation": "prerequisite / condition",
                "phonetic": "dee for-OWS-zet-soong",
                "example": "Gute Sprachkenntnisse sind Voraussetzung."
              },
              {
                "word": "erforderlich",
                "translation": "required / necessary",
                "phonetic": "air-FOR-der-likh",
                "example": "Eine Anmeldung ist erforderlich."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-b2-l2-d1",
                "question": "Choose the correct past modal passive: 'Der Bericht ______ gestern ______ (müssen / abgeben).'",
                "options": [
                  "musste / abgegeben werden",
                  "muss / abgegeben werden",
                  "wurde / abgeben gemusst",
                  "musste / abgeben worden"
                ],
                "correct": 0,
                "explanation": "Past modal passive uses 'musste' in Position 2 and 'abgegeben werden' at the end."
              }
            ]
          }
        ],
        "assignment": {
          "title": "Goethe-Zertifikat B2 Comprehensive Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence with accurate Konjunktiv I reported speech:",
              "options": [
                "Der Sprecher betonte, die Regierung plane neue Maßnahmen zur Förderung.",
                "Der Sprecher betonte, die Regierung plant neue Maßnahmen zur Förderung.",
                "Der Sprecher betonte, die Regierung plante neue Maßnahmen zur Förderung.",
                "Der Sprecher betonte, die Regierung hat neue Maßnahmen geplant."
              ],
              "correct": 0,
              "explanation": "'plane' is the precise Konjunktiv I form for the 3rd person singular."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Select the correct transformation from Verbalstil into Nominalstil: 'Weil der Vertrag gekündigt wurde, musste die Firma schließen.'",
              "options": [
                "Wegen der Kündigung des Vertrags musste die Firma schließen.",
                "Wegen die Kündigung des Vertrags die Firma schließen musste.",
                "Wegen dem Kündigen den Vertrag schloss die Firma.",
                "Wegen der Vertrag kündigen schloss die Firma."
              ],
              "correct": 0,
              "explanation": "'Wegen der Kündigung des Vertrags' uses Nominalstil with the Genitiv case accurately."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Which sentence correctly uses an extended participial attribute (erweitertes Partizipialattribut)?",
              "options": [
                "Die von der Kommission vorgeschlagenen Reformen wurden debattiert.",
                "Die Reformen von der Kommission vorgeschlagen wurden debattiert.",
                "Die vorgeschlagene von der Kommission Reformen wurden debattiert.",
                "Die Reformen die vorgeschlagen wurden debattiert die Kommission."
              ],
              "correct": 0,
              "explanation": "'Die von der Kommission vorgeschlagenen Reformen' places the participial modifiers right between article and noun."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Select the accurate modal passive in the Perfekt tense:",
              "options": [
                "Die Datei hat gelöscht werden müssen.",
                "Die Datei ist gelöscht werden gemusst.",
                "Die Datei hat gelöscht gemusst werden.",
                "Die Datei ist gelöscht geworden müssen."
              ],
              "correct": 0,
              "explanation": "In Perfekt modal passive, the double infinitive rule applies: 'hat gelöscht werden müssen'."
            }
          ]
        }
      },
      "C1": {
        "code": "C1",
        "title": "Advanced",
        "studyTime": "700 – 800 hours (cumulative)",
        "exam": "Goethe-Zertifikat C1",
        "vocabSize": "8,000+ words",
        "grammarSyllabus": [
          "Advanced stylistic variation and register control",
          "Nominal style typical of formal/academic German",
          "Idiomatic and figurative constructions",
          "Fine control of Konjunktiv I/II in nuanced contexts"
        ],
        "vocabThemes": [
          "Field-specific and specialised vocabulary",
          "Nuanced synonyms and connotation"
        ],
        "keySkills": [
          "Use German flexibly for social, academic and professional purposes",
          "Understand a wide range of demanding texts",
          "Produce clear, well-structured, detailed text on complex subjects"
        ],
        "lessons": [
          {
            "id": "de-c1-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Advanced Academic Register & Nuanced Modality",
            "summary": "Master stylistic variation, nuanced modal particles (ja, doch, eben, wohl), and sophisticated sentence architecture.",
            "videoMasterclass": {
              "title": "AI Masterclass: Native C1 Fluency, Rhetoric & Modal Particles",
              "tutorName": "Herr Weber (AI Native Faculty Tutor)",
              "videoPrompt": "Dissect German modal particles and academic sentence linkages for natural professional and scholarly discourse.",
              "narrationScript": "Das ist wohl kaum zu bestreiten. Modal particles give your German authentic native emotional nuance and communicative rhythm."
            },
            "grammarBreakdown": "C1 proficiency requires effortless mastery over register shifts (colloquial vs formal academic), subtle modal particles (doch, mal, ja, wohl), and complex hypotactic clause nesting.\n\nKey Concepts:\n1. Modal particles: convey subtle speaker attitudes without altering factual truth value.\n2. Subjunctive shading: using Konjunktiv II to express tentative hypotheses (dürfte wohl zutreffen = is probably likely to apply).",
            "grammarTable": {
              "title": "Modal Particles in Natural German",
              "headers": [
                "Particle",
                "Connotative Meaning",
                "Example in Context"
              ],
              "rows": [
                [
                  "ja",
                  "As you already know / common ground",
                  "Du weißt ja, wie wichtig das ist."
                ],
                [
                  "doch",
                  "Contradicting a negative or urging",
                  "Komm doch bitte pünktlich!"
                ],
                [
                  "wohl",
                  "Probability / presumption",
                  "Er dürfte wohl schon angekommen sein."
                ],
                [
                  "eben / halt",
                  "Resignation to inevitable fact",
                  "So ist das Leben eben."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "nachvollziehen",
                "translation": "to comprehend / reconstruct logically",
                "phonetic": "NAHKH-fol-tsee-en",
                "example": "Diese Argumentation lässt sich leicht nachvollziehen."
              },
              {
                "word": "einhergehen mit",
                "translation": "to accompany / go hand in hand with",
                "phonetic": "EYN-hair-gay-en mit",
                "example": "Wohlstand geht oft mit Konsum einher."
              },
              {
                "word": "hervorheben",
                "translation": "to emphasize / highlight",
                "phonetic": "hair-VOR-hay-ben",
                "example": "Es gilt hervorzuheben, dass der Effekt signifikant ist."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-c1-l1-d1",
                "question": "Which modal particle indicates shared, obvious knowledge between speaker and listener?",
                "options": [
                  "ja",
                  "doch",
                  "wohl",
                  "etwa"
                ],
                "correct": 0,
                "explanation": "'ja' reminds the listener of something they already know or should expect."
              }
            ]
          }
        ],
        "assignment": {
          "title": "Goethe-Zertifikat C1 Comprehensive Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence exhibiting the highest register of academic precision:",
              "options": [
                "Angesichts der rasanten technologischen Entwicklung bedarf es einer grundlegenden Überarbeitung bestehender Richtlinien.",
                "Weil die Technik so schnell ist, müssen wir die Richtlinien neu machen.",
                "Da die Technologie schnell wächst, soll man Richtlinien ändern.",
                "Wegen schneller Technik gibt es neue Richtlinien zu machen."
              ],
              "correct": 0,
              "explanation": "'Angesichts... bedarf es einer...' exemplifies C1 formal academic register with Genitiv governance."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which modal verb construction expresses a strong subjective supposition (approx. 90% certainty)?",
              "options": [
                "Er dürfte schon unterwegs sein.",
                "Er will schon unterwegs sein.",
                "Er soll schon unterwegs sein.",
                "Er mag schon unterwegs sein."
              ],
              "correct": 0,
              "explanation": "'dürfte + Infinitiv' expresses strong probability / supposition in advanced German."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Choose the correct preposition and case combination for: 'im Einklang stehen ______ (die Bestimmungen)':",
              "options": [
                "mit den Bestimmungen",
                "zu den Bestimmungen",
                "für die Bestimmungen",
                "an den Bestimmungen"
              ],
              "correct": 0,
              "explanation": "The idiomatic collocation is 'im Einklang stehen mit + Dativ': 'mit den Bestimmungen'."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Identify the sentence that correctly uses a participle functioning as a concessive clause:",
              "options": [
                "Obwohl schwer verletzt, erreichte der Bergsteiger das Camp.",
                "Schwer verletzend erreichte der Bergsteiger das Camp.",
                "Weil verletzt, erreichte der Bergsteiger das Camp.",
                "Schwer verletzt worden erreicht der Bergsteiger das Camp."
              ],
              "correct": 0,
              "explanation": "'Obwohl schwer verletzt,...' is an elliptical participial construction standard in C1 writing."
            }
          ]
        }
      },
      "C2": {
        "code": "C2",
        "title": "Mastery",
        "studyTime": "1000+ hours (cumulative)",
        "exam": "Goethe-Zertifikat C2 / GDS",
        "vocabSize": "Near-native range",
        "grammarSyllabus": [
          "Complete command of German grammar in all registers",
          "Literary and highly formal grammatical structures"
        ],
        "vocabThemes": [
          "Near-native vocabulary range including regional and idiomatic variation"
        ],
        "keySkills": [
          "Understand virtually everything heard or read with ease",
          "Summarise and argue precisely in complex academic/professional settings"
        ],
        "lessons": [
          {
            "id": "de-c2-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Literary Nuance, Rhetoric & Ambiguity",
            "summary": "Command rhetorical devices, irony, regional idioms, and native-level stylistic manipulation across all cultural spheres.",
            "videoMasterclass": {
              "title": "AI Masterclass: Native Rhetoric & Stylistic Brilliance",
              "tutorName": "Prof. Dr. von Goethe (AI Native Faculty Tutor)",
              "videoPrompt": "Analyze rhetorical cadence, subtext, and stylistic elegance comparable to educated native scholars.",
              "narrationScript": "Sprache ist nicht nur Werkzeug, sondern Kunstwerk. In C2, you handle irony, ambiguity, and poetic resonance with absolute effortless sovereignty."
            },
            "grammarBreakdown": "At C2, grammatical mastery is implicit and effortless. Focus turns to stylistic cadence, subtle irony, archaic/poetic registers, and sophisticated argumentative discourse.",
            "grammarTable": {
              "title": "Rhetorical Devices in Elite German Discourse",
              "headers": [
                "Figure of Speech",
                "German Term",
                "Function & Exemplar"
              ],
              "rows": [
                [
                  "Chiasmus",
                  "der Chiasmus",
                  "Symmetric inversion: 'Die Kunst ist lang, und kurz ist unser Leben.'"
                ],
                [
                  "Litotes",
                  "die Litotes",
                  "Understatement through double negative: 'Das ist nicht unbedeutend.'"
                ],
                [
                  "Zeugma",
                  "das Zeugma",
                  "Linking one verb to two different domains: 'Er schlug die Scheibe ein und den Weg nach Hause.'"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "unumstößlich",
                "translation": "irrefutable / immutable",
                "phonetic": "oon-oom-SHTERSS-likh",
                "example": "Das ist eine unumstößliche Tatsache."
              },
              {
                "word": "subsumieren",
                "translation": "to subsume / classify under",
                "phonetic": "zoob-zoo-MEE-ren",
                "example": "Unter diesen Begriff lassen sich viele Phänomene subsumieren."
              }
            ],
            "practiceDrills": [
              {
                "id": "de-c2-l1-d1",
                "question": "What rhetorical figure is used in 'Er verlor den Schlüssel und die Beherrschung'?",
                "options": [
                  "Zeugma",
                  "Chiasmus",
                  "Hyperbel",
                  "Alliteration"
                ],
                "correct": 0,
                "explanation": "Zeugma joins two distinct objects (one physical, one abstract) to a single verb."
              }
            ]
          }
        ],
        "assignment": {
          "title": "Goethe-Zertifikat C2 / GDS Mastery Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence that reflects flawless idiomatic handling of high-register irony:",
              "options": [
                "Seine sogenannte Großzügigkeit entpuppte sich als wohlkalkulierte Eigenwerbung.",
                "Er war sehr großzügig aber eigentlich wollte er nur Werbung machen.",
                "Wegen Großzügigkeit machte er für sich selber Werbung im TV.",
                "Seine Großzügigkeit tat Werbung sein für sich."
              ],
              "correct": 0,
              "explanation": "'entpuppte sich als wohlkalkulierte Eigenwerbung' demonstrates consummate literary precision."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which archaic/formal connective expresses 'provided that' or 'on condition that'?",
              "options": [
                "vorbehaltlich dessen, dass",
                "trotzdessen",
                "obzwar",
                "wenngleich"
              ],
              "correct": 0,
              "explanation": "'vorbehaltlich dessen, dass' introduces a formal contractual condition."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Choose the exact semantic equivalent of the idiom 'ins Fettnäpfchen treten':",
              "options": [
                "Einen peinlichen gesellschaftlichen Fauxpas begehen.",
                "Einen schweren finanziellen Verlust erleiden.",
                "Eine körperliche Verletzung davontragen.",
                "Eine hitzige politische Debatte gewinnen."
              ],
              "correct": 0,
              "explanation": "'ins Fettnäpfchen treten' means to commit an embarrassing social gaffe or blunder."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Select the grammatically impeccable sentence featuring a double infinitive in a subordinate clause:",
              "options": [
                "Ich bedaure, dass er das Projekt nicht hat abschließen können.",
                "Ich bedaure, dass er das Projekt nicht abschließen gekonnt hat.",
                "Ich bedaure, dass er das Projekt nicht hat gekonnt abschließen.",
                "Ich bedaure, dass er das Projekt nicht abschließen können hat."
              ],
              "correct": 0,
              "explanation": "In an Ersatzinfinitiv subordinate clause, the conjugated auxiliary 'hat' precedes the two infinitives ('hat abschließen können' - Oberfeld)."
            }
          ]
        }
      }
    }
  },
  "Korean": {
    "name": "Korean",
    "nativeName": "한국어",
    "flag": "🇰🇷",
    "langCode": "ko-KR",
    "framework": "TOPIK",
    "frameworkName": "Test of Proficiency in Korean (TOPIK)",
    "certifyingBody": "NIIED (National Institute for International Education)",
    "levels": {
      "TOPIK 1": {
        "code": "TOPIK 1",
        "title": "Level 1 — Beginner",
        "studyTime": "100 – 150 hours",
        "exam": "TOPIK I (Level 1)",
        "vocabSize": "~800 words",
        "grammarSyllabus": [
          "이다/ 아니다 (to be / not to be)",
          "Present tense: -아요/어요",
          "Basic particles: 은/는, 이/가, 을/를, 에, 에서",
          "Basic counters and numbers (native and Sino-Korean)",
          "Basic negation: 안, 못",
          "Basic sentence order (SOV)"
        ],
        "vocabThemes": [
          "Greetings and self-introduction",
          "Numbers, dates, time",
          "Family, food, everyday objects"
        ],
        "keySkills": [
          "Read and write Hangul fluently",
          "Handle very basic self-introductions and simple exchanges",
          "Understand simple, frequently used expressions"
        ],
        "lessons": [
          {
            "id": "ko-t1-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: The Hangul Alphabet (한글), Vowels & Consonants",
            "summary": "Learn the scientific Hangul alphabet created by King Sejong: 14 basic consonants, 10 basic vowels, and syllable block building.",
            "videoMasterclass": {
              "title": "AI Masterclass: Native Hangul Pronunciation & Syllable Construction",
              "tutorName": "Kim Min-ji (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how Korean letters combine into 2-to-4 character syllable blocks: Initial (초성), Medial (중성), and Final Batchim (종성).",
              "narrationScript": "안녕하세요! Welcome to Korean Level 1! Today we learn Hangul: ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ and vowels: ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ, ㅜ, ㅠ, ㅡ, ㅣ!"
            },
            "grammarBreakdown": "Hangul is built on syllabic blocks, each containing at least one consonant and one vowel:\n• Basic Consonants (14): ㄱ (g/k), ㄴ (n), ㄷ (d/t), ㄹ (r/l), ㅁ (m), ㅂ (b/p), ㅅ (s), ㅇ (silent initial / ng final), ㅈ (j), ㅊ (ch), ㅋ (k), ㅌ (t), ㅍ (p), ㅎ (h).\n• Basic Vowels (10): ㅏ (a), ㅑ (ya), ㅓ (eo), ㅕ (yeo), ㅗ (o), ㅛ (yo), ㅜ (u), ㅠ (yu), ㅡ (eu), ㅣ (i).\n• Syllable structure: [Initial Consonant] + [Vowel] (+ [Final Consonant / Batchim]).\nExample: ㄱ + ㅏ = 가 (ga), ㅁ + ㅜ + ㄹ = 물 (mul = water).",
            "grammarTable": {
              "title": "Hangul Consonant-Vowel Syllable Matrix",
              "headers": [
                "Consonant",
                "+ ㅏ (a)",
                "+ ㅓ (eo)",
                "+ ㅗ (o)",
                "+ ㅜ (u)",
                "+ ㅣ (i)"
              ],
              "rows": [
                [
                  "ㄱ (g/k)",
                  "가 (ga)",
                  "거 (geo)",
                  "고 (go)",
                  "구 (gu)",
                  "기 (gi)"
                ],
                [
                  "ㄴ (n)",
                  "나 (na)",
                  "너 (neo)",
                  "노 (no)",
                  "누 (nu)",
                  "니 (ni)"
                ],
                [
                  "ㄷ (d/t)",
                  "다 (da)",
                  "더 (deo)",
                  "도 (do)",
                  "두 (du)",
                  "디 (di)"
                ],
                [
                  "ㅁ (m)",
                  "마 (ma)",
                  "머 (meo)",
                  "모 (mo)",
                  "무 (mu)",
                  "미 (mi)"
                ],
                [
                  "ㅅ (s)",
                  "사 (sa)",
                  "서 (seo)",
                  "소 (so)",
                  "수 (su)",
                  "시 (si)"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "한글",
                "translation": "Hangul (Korean alphabet)",
                "phonetic": "han-geul",
                "example": "한글을 배웁니다 (I learn Hangul)."
              },
              {
                "word": "한국어",
                "translation": "Korean language",
                "phonetic": "han-guk-eo",
                "example": "한국어를 좋아해요 (I like Korean)."
              },
              {
                "word": "사람",
                "translation": "person / people",
                "phonetic": "sa-ram",
                "example": "좋은 사람 (Good person)."
              },
              {
                "word": "물",
                "translation": "water",
                "phonetic": "mul",
                "example": "물 주세요 (Water please)."
              },
              {
                "word": "안녕하세요",
                "translation": "Hello",
                "phonetic": "an-nyeong-ha-se-yo",
                "example": "안녕하세요, 반갑습니다!"
              },
              {
                "word": "감사합니다",
                "translation": "Thank you",
                "phonetic": "gam-sa-ham-ni-da",
                "example": "도와주셔서 감사합니다."
              }
            ],
            "practiceDrills": [
              {
                "id": "ko-t1-l1-d1",
                "question": "Which Korean character represents the sound 'n'?",
                "options": [
                  "ㄱ",
                  "ㄴ",
                  "ㅁ",
                  "ㅅ"
                ],
                "correct": 1,
                "explanation": "ㄴ is the 'n' consonant in Hangul."
              },
              {
                "id": "ko-t1-l1-d2",
                "question": "Combine the letters: ㅁ + ㅜ + ㄹ. What syllable is formed?",
                "options": [
                  "말 (mal)",
                  "물 (mul)",
                  "몰 (mol)",
                  "밀 (mil)"
                ],
                "correct": 1,
                "explanation": "ㅁ (m) + ㅜ (u) + ㄹ (l) forms 물 (mul), meaning water."
              }
            ]
          },
          {
            "id": "ko-t1-l2",
            "lessonNumber": 2,
            "title": "Lesson 2: Numbers (Sino-Korean & Native Korean) & Clock Time",
            "summary": "Master the dual numbering systems in Korean: Sino-Korean (일, 이, 삼) for minutes/money, and Native Korean (하나, 둘, 셋) for hours/items.",
            "videoMasterclass": {
              "title": "AI Masterclass: Native vs Sino-Korean Numbers & Telling Time",
              "tutorName": "Lee Joon (AI Native Faculty Tutor)",
              "videoPrompt": "Understand when to use Sino-Korean vs Native numbers, and how to read the clock: Hours in Native + Minutes in Sino!",
              "narrationScript": "하나, 둘, 셋, 넷! 일, 이, 삼, 사! In Korean we have two distinct number systems. For time: Native for hours (시), Sino for minutes (분)!"
            },
            "grammarBreakdown": "Korean utilizes two number systems:\n1. Sino-Korean (from Chinese characters): 일 (1), 이 (2), 삼 (3), 사 (4), 오 (5), 육 (6), 칠 (7), 팔 (8), 구 (9), 십 (10), 백 (100).\n-> Used for: minutes (분), dates, prices (원), phone numbers, addresses.\n2. Native Korean: 하나 (1), 둘 (2), 셋 (3), 넷 (4), 다섯 (5), 여섯 (6), 일곱 (7), 여덟 (8), 아홉 (9), 열 (10).\n-> Used for: hours (시), counting objects with counters (개, 명, 마리, 권), and counting age (살).\n\nTelling time: [Native number] 시 [Sino number] 분.\nExample: 3:20 = 세 시 이십 분.",
            "grammarTable": {
              "title": "Dual Korean Number System Comparison",
              "headers": [
                "Value",
                "Sino-Korean (Dates, Minutes, Money)",
                "Native Korean (Hours, General Counting)"
              ],
              "rows": [
                [
                  "1",
                  "일 (il)",
                  "하나 / 한 (hana / han)"
                ],
                [
                  "2",
                  "이 (i)",
                  "둘 / 두 (dul / du)"
                ],
                [
                  "3",
                  "삼 (sam)",
                  "셋 / 세 (set / se)"
                ],
                [
                  "4",
                  "사 (sa)",
                  "넷 / 네 (net / ne)"
                ],
                [
                  "5",
                  "오 (o)",
                  "다섯 (daseot)"
                ],
                [
                  "10",
                  "십 (sip)",
                  "열 (yeol)"
                ],
                [
                  "20",
                  "이십 (i-sip)",
                  "스물 (seumul)"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "시",
                "translation": "o'clock (with Native numbers)",
                "phonetic": "si",
                "example": "지금 몇 시예요? (What time is it now?)"
              },
              {
                "word": "분",
                "translation": "minute (with Sino numbers)",
                "phonetic": "bun",
                "example": "십 분 남았어요 (10 minutes left)."
              },
              {
                "word": "원",
                "translation": "Won (currency)",
                "phonetic": "won",
                "example": "천 원입니다 (It is 1,000 won)."
              },
              {
                "word": "오늘",
                "translation": "today",
                "phonetic": "o-neul",
                "example": "오늘 몇 월 며칠이에요?"
              },
              {
                "word": "개",
                "translation": "item counter",
                "phonetic": "gae",
                "example": "사과 세 개 주세요 (Give me 3 apples)."
              },
              {
                "word": "명",
                "translation": "people counter",
                "phonetic": "myeong",
                "example": "두 명입니다 (Two people)."
              }
            ],
            "practiceDrills": [
              {
                "id": "ko-t1-l2-d1",
                "question": "How do you say 4:15 in Korean?",
                "options": [
                  "사 시 십오 분",
                  "네 시 십오 분",
                  "넷 시 열다섯 분",
                  "네 시 열다섯 분"
                ],
                "correct": 1,
                "explanation": "Hours take Native Korean (네 시) and minutes take Sino-Korean (십오 분): '네 시 십오 분'."
              }
            ]
          },
          {
            "id": "ko-t1-l3",
            "lessonNumber": 3,
            "title": "Lesson 3: Sentence Order (SOV) & Particle System (은/는, 이/가, 을/를, 에/에서)",
            "summary": "Master Korean Subject-Object-Verb (SOV) sentence order and attach topic, subject, object, and location particles.",
            "videoMasterclass": {
              "title": "AI Masterclass: Korean SOV Architecture & Essential Particles",
              "tutorName": "Kim Min-ji (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how particles mark grammatical roles: Topic (은/는), Subject (이/가), Object (을/를), and Location (에/에서).",
              "narrationScript": "저는 사과를 먹어요! Korean is an SOV language: Subject - Object - Verb. The verb always comes at the end!"
            },
            "grammarBreakdown": "Korean sentences follow Subject - Object - Verb (SOV) order. Grammatical relations are marked with postpositional particles:\n• Topic Marker: 은 (after consonant) / 는 (after vowel) - sets the topic or contrast.\n• Subject Marker: 이 (after consonant) / 가 (after vowel) - highlights the subject performing the action.\n• Object Marker: 을 (after consonant) / 를 (after vowel) - marks the direct receiver.\n• Location: 에 (static location or destination 'to') / 에서 (dynamic location where action takes place 'at/in').",
            "grammarTable": {
              "title": "Korean Particle Quick Reference",
              "headers": [
                "Particle Type",
                "After Consonant (받침)",
                "After Vowel (무받침)",
                "Function & Meaning"
              ],
              "rows": [
                [
                  "Topic (Topic/Contrast)",
                  "은 (eun) e.g. 책은",
                  "는 (neun) e.g. 저는",
                  "As for... / Topic of conversation"
                ],
                [
                  "Subject (Actor)",
                  "이 (i) e.g. 학생이",
                  "가 (ga) e.g. 친구가",
                  "Subject of the verb"
                ],
                [
                  "Object (Direct Object)",
                  "을 (eul) e.g. 밥을",
                  "를 (reul) e.g. 사과를",
                  "Direct object of action verb"
                ],
                [
                  "Location (Static/Destination)",
                  "에 (e)",
                  "에 (e)",
                  "At/in (static with 있다) or To (destination)"
                ],
                [
                  "Location (Dynamic Action)",
                  "에서 (e-seo)",
                  "에서 (e-seo)",
                  "At/in where an action takes place"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "저",
                "translation": "I / me (humble)",
                "phonetic": "jeo",
                "example": "저는 학생입니다."
              },
              {
                "word": "학생",
                "translation": "student",
                "phonetic": "hak-saeng",
                "example": "학생이 공부해요."
              },
              {
                "word": "사과",
                "translation": "apple",
                "phonetic": "sa-gwa",
                "example": "사과를 먹어요."
              },
              {
                "word": "도서관",
                "translation": "library",
                "phonetic": "do-seo-gwan",
                "example": "도서관에서 공부해요."
              },
              {
                "word": "학교",
                "translation": "school",
                "phonetic": "hak-gyo",
                "example": "학교에 가요."
              },
              {
                "word": "친구",
                "translation": "friend",
                "phonetic": "chin-gu",
                "example": "친구가 와요."
              }
            ],
            "practiceDrills": [
              {
                "id": "ko-t1-l3-d1",
                "question": "Choose the correct particle: '도서관______ 공부를 해요 (I study AT the library).'",
                "options": [
                  "에",
                  "에서",
                  "을",
                  "는"
                ],
                "correct": 1,
                "explanation": "When an active action (공부하다 - studying) takes place at a location, use '에서'."
              }
            ]
          },
          {
            "id": "ko-t1-l4",
            "lessonNumber": 4,
            "title": "Lesson 4: The Copula (이다 / 아니다) & Present Tense (-아요 / -어요)",
            "summary": "Conjugate verbs into the polite conversational present tense (-아요 / -어요) using vowel harmony, and express identity with 이다/아니다.",
            "videoMasterclass": {
              "title": "AI Masterclass: Present Tense Conjugation & Vowel Harmony",
              "tutorName": "Lee Joon (AI Native Faculty Tutor)",
              "videoPrompt": "Learn bright vowels (ㅏ, ㅗ -> -아요) vs dark vowels (others -> -어요) and the special rule for 하다 -> 해요.",
              "narrationScript": "가다 becomes 가요, 먹다 becomes 먹어요, and 공부하다 becomes 공부해요! Once you know vowel harmony, Korean verbs become second nature."
            },
            "grammarBreakdown": "To conjugate Korean verbs in the polite present tense (-아요/어요):\n1. Look at the last vowel of the verb stem (drop '다'):\n• If stem ends in ㅏ or ㅗ (bright vowels): add -아요 (e.g. 가다 -> 가요, 보다 -> 봐요).\n• If stem ends in any other vowel (dark vowels): add -어요 (e.g. 먹다 -> 먹어요, 마시다 -> 마셔요).\n• For -하다 verbs: changes to -해요 (e.g. 공부하다 -> 공부해요, 일하다 -> 일해요).\n\n2. The Copula (to be / not to be):\n• 이다 (to be): -이에요 (after vowel) / -예요 (after consonant).\n• 아니다 (not to be): [Noun]이/가 아니에요.",
            "grammarTable": {
              "title": "Present Tense Conjugation Rules",
              "headers": [
                "Verb Infinitive",
                "Stem & Last Vowel",
                "Suffix Added",
                "Conjugated Present Form",
                "Meaning"
              ],
              "rows": [
                [
                  "가다 (to go)",
                  "가 (vowel ㅏ)",
                  "+ 아요",
                  "가요",
                  "goes / am going"
                ],
                [
                  "보다 (to see/watch)",
                  "보 (vowel ㅗ)",
                  "+ 아요 (contraction)",
                  "봐요",
                  "watches / sees"
                ],
                [
                  "먹다 (to eat)",
                  "먹 (vowel ㅓ)",
                  "+ 어요",
                  "먹어요",
                  "eats / am eating"
                ],
                [
                  "마시다 (to drink)",
                  "마시 (vowel ㅣ)",
                  "+ 어요 (contraction)",
                  "마셔요",
                  "drinks / am drinking"
                ],
                [
                  "공부하다 (to study)",
                  "공부하",
                  "-> 해요",
                  "공부해요",
                  "studies / am studying"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "가다",
                "translation": "to go",
                "phonetic": "ga-da",
                "example": "집에 가요 (I go home)."
              },
              {
                "word": "먹다",
                "translation": "to eat",
                "phonetic": "meok-da",
                "example": "밥을 먹어요 (I eat rice/meal)."
              },
              {
                "word": "마시다",
                "translation": "to drink",
                "phonetic": "ma-si-da",
                "example": "커피를 마셔요 (I drink coffee)."
              },
              {
                "word": "보다",
                "translation": "to see / watch",
                "phonetic": "bo-da",
                "example": "영화를 봐요 (I watch a movie)."
              },
              {
                "word": "공부하다",
                "translation": "to study",
                "phonetic": "gong-bu-ha-da",
                "example": "한국어를 공부해요 (I study Korean)."
              },
              {
                "word": "있다",
                "translation": "to have / to exist",
                "phonetic": "it-da",
                "example": "시간이 있어요 (I have time)."
              }
            ],
            "practiceDrills": [
              {
                "id": "ko-t1-l4-d1",
                "question": "What is the polite present tense conjugation of '먹다' (to eat)?",
                "options": [
                  "먹아요",
                  "먹어요",
                  "먹해요",
                  "먹습니다요"
                ],
                "correct": 1,
                "explanation": "The stem vowel in '먹다' is ㅓ (dark vowel), so it takes '-어요' -> '먹어요'."
              }
            ]
          }
        ],
        "assignment": {
          "title": "TOPIK I (Level 1) Comprehensive Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence with grammatically accurate particle usage and SOV order:",
              "options": [
                "저는 식당에서 비빔밥을 먹어요.",
                "저는 식당에 비빔밥이 먹어요.",
                "저를 식당에서 비빔밥은 먹어요.",
                "비빔밥을 저는 먹어요 식당에."
              ],
              "correct": 0,
              "explanation": "'저는' (Topic), '식당에서' (dynamic action location 'at restaurant'), '비빔밥을' (direct object), '먹어요' (verb at end)."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Choose the correct negative expression for 'I cannot eat spicy food':",
              "options": [
                "저는 매운 음식을 못 먹어요.",
                "저는 매운 음식을 안 먹어요.",
                "저는 매운 음식을 먹지 않아요.",
                "저는 매운 음식을 없어요."
              ],
              "correct": 0,
              "explanation": "'못' indicates inability ('cannot'), while '안' indicates intent ('will not / do not')."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "How is 2:30 PM written correctly in Korean time phrasing?",
              "options": [
                "오후 두 시 삼십 분",
                "오후 이 시 삼십 분",
                "오후 둘 시 서른 분",
                "오후 이 시 서른 분"
              ],
              "correct": 0,
              "explanation": "Hours require Native numbers ('두 시'), minutes require Sino-Korean ('삼십 분')."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Which polite copula matches: '저는 미국 사람______ (I am an American)':",
              "options": [
                "이에요",
                "예요",
                "입니다요",
                "있어요"
              ],
              "correct": 0,
              "explanation": "'사람' ends with a final consonant (Batchim ㅁ), so it takes '이에요'."
            }
          ]
        }
      },
      "TOPIK 2": {
        "code": "TOPIK 2",
        "title": "Level 2 — Elementary",
        "studyTime": "200 – 250 hours (cumulative)",
        "exam": "TOPIK I (Level 2)",
        "vocabSize": "~1,500 – 2,000 words",
        "grammarSyllabus": [
          "Past and future tense forms",
          "Connective endings: -고, -지만, -아서/어서",
          "Introduction to honorifics: -(으)세요",
          "Ability/possibility: -을 수 있다/없다",
          "Basic indirect requests and suggestions"
        ],
        "vocabThemes": [
          "Daily life and routines",
          "Shopping and travel",
          "Weather, hobbies, simple opinions"
        ],
        "keySkills": [
          "Handle everyday tasks such as shopping and ordering food",
          "Describe daily routine and simple past experiences",
          "Understand short, simple texts"
        ],
        "lessons": [
          {
            "id": "ko-t2-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Past Tense (-았/었어요) & Future Tense (-(으)ㄹ 거예요)",
            "summary": "Express completed past actions with -았/었어요 and plan future endeavors with -(으)ㄹ 거예요.",
            "videoMasterclass": {
              "title": "AI Masterclass: Korean Past & Future Tense Mastery",
              "tutorName": "Kim Min-ji (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how verb stems attach -았어요 / -었어요 for past and -(으)ㄹ 거예요 for future plans.",
              "narrationScript": "어제 친구를 만났어요, 그리고 내일 영화를 볼 거예요! Past and future tenses unlock chronological storytelling in Korean."
            },
            "grammarBreakdown": "1. Past Tense (-았/었어요):\n• Stem ending in ㅏ/ㅗ: add -았어요 (가다 -> 갔어요, 보다 -> 봤어요).\n• Other stem vowels: add -었어요 (먹다 -> 먹었어요, 마시다 -> 마셨어요).\n• -하다 verbs: become -했어요 (공부했어요).\n\n2. Future Tense (-(으)ㄹ 거예요):\n• Stem ending in vowel: add -ㄹ 거예요 (가다 -> 갈 거예요).\n• Stem ending in consonant: add -을 거예요 (먹다 -> 먹을 거예요).",
            "grammarTable": {
              "title": "Tense Conjugation Comparison",
              "headers": [
                "Verb",
                "Present Tense",
                "Past Tense (-았/었어요)",
                "Future Tense (-(으)ㄹ 거예요)"
              ],
              "rows": [
                [
                  "가다 (to go)",
                  "가요",
                  "갔어요",
                  "갈 거예요"
                ],
                [
                  "먹다 (to eat)",
                  "먹어요",
                  "먹었어요",
                  "먹을 거예요"
                ],
                [
                  "보다 (to watch)",
                  "봐요",
                  "봤어요",
                  "볼 거예요"
                ],
                [
                  "하다 (to do)",
                  "해요",
                  "했어요",
                  "할 거예요"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "어제",
                "translation": "yesterday",
                "phonetic": "eo-je",
                "example": "어제 친구를 만났어요."
              },
              {
                "word": "내일",
                "translation": "tomorrow",
                "phonetic": "nae-il",
                "example": "내일 시험이 있어요."
              },
              {
                "word": "만나다",
                "translation": "to meet",
                "phonetic": "man-na-da",
                "example": "내일 어디서 만날 거예요?"
              }
            ],
            "practiceDrills": [
              {
                "id": "ko-t2-l1-d1",
                "question": "Choose the correct past tense of '만나다' (to meet):",
                "options": [
                  "만났어요",
                  "만나었어요",
                  "만나요",
                  "만날 거예요"
                ],
                "correct": 0,
                "explanation": "The vowel is ㅏ, combining with 았어요 into '만났어요'."
              }
            ]
          },
          {
            "id": "ko-t2-l2",
            "lessonNumber": 2,
            "title": "Lesson 2: Connective Endings (-고, -지만, -아서/어서)",
            "summary": "Chain multiple clauses together: -고 (and), -지만 (but), and -아서/어서 (cause and effect / sequential action).",
            "videoMasterclass": {
              "title": "AI Masterclass: Korean Connective Clauses & Logic Flow",
              "tutorName": "Lee Joon (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how to connect clauses without stopping: addition (-고), contrast (-지만), and causal reasons (-아서/어서).",
              "narrationScript": "비가 와서 집에 있어요. Connective endings transform short simple sentences into fluid natural Korean."
            },
            "grammarBreakdown": "• -고: 'and' (links sequential actions or lists attributes: 비빔밥을 먹고 커피를 마셨어요).\n• -지만: 'but / however' (links contrasting clauses: 한국어는 어렵지만 재미있어요).\n• -아서/어서: 'because / so' (expresses cause and effect: 배가 고파서 밥을 먹었어요. Note: cannot be followed by imperatives!).",
            "grammarTable": {
              "title": "Core Connective Endings",
              "headers": [
                "Ending",
                "Function",
                "Example Sentence"
              ],
              "rows": [
                [
                  "-고",
                  "And / Then (Sequence)",
                  "숙제를 하고 잤어요 (I did homework and slept)."
                ],
                [
                  "-지만",
                  "But / Although (Contrast)",
                  "비싸지만 맛있어요 (It is expensive but delicious)."
                ],
                [
                  "-아서/어서",
                  "Because / So (Causality)",
                  "날씨가 좋아서 산책했어요 (The weather was good so I took a walk)."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "어렵다",
                "translation": "difficult",
                "phonetic": "eo-ryeop-da",
                "example": "문법이 어렵지만 재미있어요."
              },
              {
                "word": "재미있다",
                "translation": "fun / interesting",
                "phonetic": "jae-mi-it-da",
                "example": "이 영화는 정말 재미있어요."
              },
              {
                "word": "바쁘다",
                "translation": "busy",
                "phonetic": "ba-ppeu-da",
                "example": "요즘 일이 많아서 바빠요."
              }
            ],
            "practiceDrills": [
              {
                "id": "ko-t2-l2-d1",
                "question": "Fill in the blank: '피곤해______ 일찍 잤어요 (Because I was tired, I slept early).'",
                "options": [
                  "서",
                  "고",
                  "지만",
                  "면"
                ],
                "correct": 0,
                "explanation": "피곤하다 becomes 피곤해서 (because I was tired)."
              }
            ]
          }
        ],
        "assignment": {
          "title": "TOPIK I (Level 2) Comprehensive Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence correctly applying future intention (-(으)ㄹ 거예요):",
              "options": [
                "이번 주말에 친구와 부산에 갈 거예요.",
                "이번 주말에 친구와 부산에 갔어요.",
                "이번 주말에 친구와 부산에 가고 있어요.",
                "이번 주말에 친구와 부산에 가요."
              ],
              "correct": 0,
              "explanation": "'갈 거예요' correctly forms the future intention ('I will go to Busan')."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which sentence accurately uses the contrast connective '-지만'?",
              "options": [
                "한국어는 어렵지만 아주 재미있어요.",
                "한국어는 어려워서 아주 재미있어요.",
                "한국어는 어렵고 아주 재미있어요.",
                "한국어는 어려우면 아주 재미있어요."
              ],
              "correct": 0,
              "explanation": "'어렵지만' connects the contrasting ideas: difficult BUT very fun."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Choose the correct polite honorific request form of '기다리다' (to wait):",
              "options": [
                "잠깐만 기다리세요.",
                "잠깐만 기다려요.",
                "잠깐만 기다릴 거예요.",
                "잠깐만 기다려서요."
              ],
              "correct": 0,
              "explanation": "'기다리세요' is the polite imperative honorific request ('Please wait a moment')."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Which phrase properly expresses the ability to swim in Korean: '수영을 ______'?",
              "options": [
                "할 수 있어요",
                "하지 않아요",
                "하고 싶어요",
                "해야 돼요"
              ],
              "correct": 0,
              "explanation": "-(으)ㄹ 수 있다 expresses capability: '할 수 있어요' (I can swim)."
            }
          ]
        }
      },
      "TOPIK 3": {
        "code": "TOPIK 3",
        "title": "Level 3 — Intermediate",
        "studyTime": "300 – 450 hours (cumulative)",
        "exam": "TOPIK II (Level 3)",
        "vocabSize": "~3,000 – 4,000 words",
        "grammarSyllabus": [
          "Indirect/reported speech forms",
          "-는데 (background/contrast connective)",
          "Introduction to passive and causative forms",
          "Formal (-습니다) vs informal (-아/어요) style distinctions",
          "Expanded connective endings (-으면서, -거든요, -잖아요)"
        ],
        "vocabThemes": [
          "Social issues and opinions",
          "Workplace and public life",
          "Emotions and interpersonal situations"
        ],
        "keySkills": [
          "Carry out most everyday and workplace tasks",
          "Understand descriptive texts and simple news items",
          "Express opinions with basic supporting reasons"
        ],
        "lessons": [
          {
            "id": "ko-t3-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Indirect & Reported Speech Forms (-다고 하다)",
            "summary": "Quote statements, questions, suggestions, and commands in formal conversational Korean.",
            "videoMasterclass": {
              "title": "AI Masterclass: Korean Reported Speech (-다고 하다)",
              "tutorName": "Kim Min-ji (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how to report what someone said: statements (-ㄴ/는다고 하다), questions (-냐고 하다), and suggestions (-자고 하다).",
              "narrationScript": "친구가 내일 비가 온다고 했어요. Reported speech is the cornerstone of intermediate Korean discussion."
            },
            "grammarBreakdown": "To report statements in Korean:\n• Verbs: -ㄴ/는다고 하다 (e.g. 간다고 해요, 먹는다고 해요).\n• Adjectives: -다고 하다 (e.g. 바쁘다고 해요, 좋다고 해요).\n• Nouns: -(이)라고 하다 (e.g. 학생이라고 해요).\n• Questions: -(으)냐고 하다.\n• Suggestions: -자고 하다 (e.g. 같이 밥 먹자고 했어요).",
            "grammarTable": {
              "title": "Reported Speech Formula",
              "headers": [
                "Speech Type",
                "Verb Attachment",
                "Example"
              ],
              "rows": [
                [
                  "Statement (Plain)",
                  "-ㄴ/는다고 하다",
                  "선생님이 시험이 있다고 하셨어요."
                ],
                [
                  "Question",
                  "-냐고 하다",
                  "어디 가냐고 물어봤어요."
                ],
                [
                  "Suggestion",
                  "-자고 하다",
                  "영화 보자고 했어요."
                ],
                [
                  "Imperative",
                  "-(으)라고 하다",
                  "조용히 하라고 했어요."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "전하다",
                "translation": "to deliver / convey",
                "phonetic": "jeon-ha-da",
                "example": "말씀을 전해 드리겠습니다."
              },
              {
                "word": "물어보다",
                "translation": "to ask",
                "phonetic": "mul-eo-bo-da",
                "example": "길을 물어봤어요."
              }
            ],
            "practiceDrills": [
              {
                "id": "ko-t3-l1-d1",
                "question": "How do you report: '민수가 '내일 갈 거야'라고 말했다'?",
                "options": [
                  "민수가 내일 간다고 했어요.",
                  "민수가 내일 가자고 했어요.",
                  "민수가 내일 가냐고 했어요.",
                  "민수가 내일 가라고 했어요."
                ],
                "correct": 0,
                "explanation": "Reporting a statement about going uses '-ㄴ다고 하다' -> '간다고 했어요'."
              }
            ]
          }
        ],
        "assignment": {
          "title": "TOPIK II (Level 3) Comprehensive Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence correctly applying reported speech for a suggestion:",
              "options": [
                "친구가 주말에 같이 등산 가자고 했어요.",
                "친구가 주말에 같이 등산 간다고 했어요.",
                "친구가 주말에 같이 등산 가라고 했어요.",
                "친구가 주말에 같이 등산 가냐고 했어요."
              ],
              "correct": 0,
              "explanation": "'-자고 하다' reports a suggestion ('Let us do something together')."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which connective correctly provides background context before an invitation: '지금 커피숍에 가______ 같이 갈래요?'",
              "options": [
                "-는데",
                "-지만",
                "-아서",
                "-니까"
              ],
              "correct": 0,
              "explanation": "'-는데' introduces the background situation before making a suggestion or invitation."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Choose the proper simultaneous action ending for 'listening to music WHILE studying':",
              "options": [
                "음악을 들으면서 공부해요.",
                "음악을 듣고 공부해요.",
                "음악을 들어서 공부해요.",
                "음악을 듣지만 공부해요."
              ],
              "correct": 0,
              "explanation": "-(으)면서 expresses two simultaneous actions performed by the same subject."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Which sentence matches formal news broadcasting style?",
              "options": [
                "오늘 전국에 비가 내리겠습니다.",
                "오늘 전국에 비가 내려요.",
                "오늘 전국에 비가 내릴 거야.",
                "오늘 전국에 비가 내린다는데."
              ],
              "correct": 0,
              "explanation": "'-겠습니다' / '-습니다' is the official formal broadcast and presentation register."
            }
          ]
        }
      },
      "TOPIK 4": {
        "code": "TOPIK 4",
        "title": "Level 4 — Upper-Intermediate",
        "studyTime": "450 – 600 hours (cumulative)",
        "exam": "TOPIK II (Level 4)",
        "vocabSize": "~4,000 – 6,000 words",
        "grammarSyllabus": [
          "Advanced connective and sentence-ending patterns",
          "Full honorific system (subject and object honorifics)",
          "Idiomatic and figurative expressions",
          "Nuanced modality (-을 텐데, -는 법이다, -기 마련이다)"
        ],
        "vocabThemes": [
          "Abstract and social topics",
          "Media, culture and current affairs",
          "Professional vocabulary"
        ],
        "keySkills": [
          "Understand news broadcasts and general media",
          "Participate in discussions on familiar social topics",
          "Write structured essays on familiar subjects"
        ],
        "lessons": [
          {
            "id": "ko-t4-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Full Honorific System & Nuanced Modality",
            "summary": "Master subject honorifics (-시-), humble object honorifics (드리다, 뵙다), and inevitability markers (-기 마련이다).",
            "videoMasterclass": {
              "title": "AI Masterclass: Professional Honorifics & Nuanced Modality",
              "tutorName": "Lee Joon (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how Korean professionals express supreme politeness and convey natural laws of life using -기 마련이다.",
              "narrationScript": "사람은 누구나 실수하기 마련입니다. Mastering the full honorific system is essential for corporate and formal life in Korea."
            },
            "grammarBreakdown": "1. Honorific System:\n• Subject honorifics: -(으)시- (e.g. 가시다, 드시다, 주무시다, 계시다).\n• Object honorifics: 드리다 (to give), 뵙다 (to meet), 여쭙다 (to ask).\n\n2. Nuanced Modality:\n• -기 마련이다: 'It is natural / inevitable that...' (e.g. 시간이 지나면 잊혀지기 마련이다).\n• -는 법이다: 'It is the rule of nature that...'\n• -(으)ㄹ 텐데: 'I would imagine / expect that... so...' (presupposition).",
            "grammarTable": {
              "title": "Plain vs Honorific vs Humble Korean Verbs",
              "headers": [
                "Concept",
                "Plain Form",
                "Subject Honorific",
                "Humble / Object Honorific"
              ],
              "rows": [
                [
                  "to give",
                  "주다",
                  "주시겠어요",
                  "드리다"
                ],
                [
                  "to meet",
                  "만나다",
                  "만나시다",
                  "뵙다"
                ],
                [
                  "to eat",
                  "먹다",
                  "드시다 / 잡수시다",
                  "–"
                ],
                [
                  "to sleep",
                  "자다",
                  "주무시다",
                  "–"
                ],
                [
                  "to exist / be",
                  "있다",
                  "계시다",
                  "–"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "드리다",
                "translation": "to give (humble)",
                "phonetic": "deu-ri-da",
                "example": "부모님께 선물을 드렸어요."
              },
              {
                "word": "뵙다",
                "translation": "to meet (humble)",
                "phonetic": "boep-da",
                "example": "내일 교수님을 뵐 예정입니다."
              },
              {
                "word": "마련이다",
                "translation": "inevitable natural rule",
                "phonetic": "ma-ryeon-i-da",
                "example": "노력하면 성공하기 마련입니다."
              }
            ],
            "practiceDrills": [
              {
                "id": "ko-t4-l1-d1",
                "question": "Choose the proper humble verb: '선생님께 선물을 ______ (I gave a gift to the teacher).'",
                "options": [
                  "줬어요",
                  "드렸어요",
                  "주셨어요",
                  "받았어요"
                ],
                "correct": 1,
                "explanation": "'드리다' is the humble object honorific for giving to a respected elder."
              }
            ]
          }
        ],
        "assignment": {
          "title": "TOPIK II (Level 4) Comprehensive Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence with impeccable honorific agreement:",
              "options": [
                "할아버지께서는 지금 방에서 주무시고 계십니다.",
                "할아버지께서는 지금 방에서 자고 있습니다.",
                "할아버지는 지금 방에서 주무시고 있습니다.",
                "할아버지께서는 지금 방에서 자고 계십니다."
              ],
              "correct": 0,
              "explanation": "'할아버지께서는' takes '주무시다' (honorific sleep) and '계시다' (honorific ongoing state)."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which ending completes: '누구나 나이가 들면 건강에 신경을 쓰______ (It is natural for anyone to care about health as they age)':",
              "options": [
                "-게 마련이다",
                "-을 리가 없다",
                "-는 척하다",
                "-기 십상이다"
              ],
              "correct": 0,
              "explanation": "'-기 마련이다' expresses a natural, inevitable consequence of life."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Select the phrase that expresses 'judging from the recent survey data':",
              "options": [
                "최근 설문조사 결과에 비추어 볼 때",
                "최근 설문조사 결과에 있어서",
                "최근 설문조사 결과로 치면",
                "최근 설문조사 결과에도 불구하고"
              ],
              "correct": 0,
              "explanation": "'-에 비추어 볼 때' is standard TOPIK II Level 4 discourse for 'in light of / judging from'."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Which pattern properly describes a situation: 'I am worried because the flight will probably be delayed, so...':",
              "options": [
                "비행기가 연착될 텐데 미리 확인해 보세요.",
                "비행기가 연착되더라도 미리 확인해 보세요.",
                "비행기가 연착되자마자 미리 확인해 보세요.",
                "비행기가 연착되는 바람에 미리 확인해 보세요."
              ],
              "correct": 0,
              "explanation": "-(으)ㄹ 텐데 expresses supposition paired with anticipation or advice."
            }
          ]
        }
      },
      "TOPIK 5": {
        "code": "TOPIK 5",
        "title": "Level 5 — Advanced",
        "studyTime": "600 – 800 hours (cumulative)",
        "exam": "TOPIK II (Level 5)",
        "vocabSize": "6,000+ words",
        "grammarSyllabus": [
          "Literary and academic style grammar",
          "Complex sentence embedding and clause layering",
          "Formal written register typical of essays and reports"
        ],
        "vocabThemes": [
          "Academic and professional vocabulary",
          "Specialised fields (politics, economy, culture)"
        ],
        "keySkills": [
          "Understand and produce professional and academic texts",
          "Follow lectures, news and discussions on specialised topics",
          "Write well-organised formal essays"
        ],
        "lessons": [
          {
            "id": "ko-t5-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Academic Written Register (-(으)로 미루어 보아)",
            "summary": "Command official written essay markers, argumentative syntax, and economic/political discourse in Korean.",
            "videoMasterclass": {
              "title": "AI Masterclass: TOPIK II Essay Architecture & Academic Syntax",
              "tutorName": "Kim Min-ji (AI Native Faculty Tutor)",
              "videoPrompt": "Dissect 54th question essay writing: problem definition, dialectical synthesis, and formal plain written style (-는다/ㄴ다).",
              "narrationScript": "현대 사회에서 기술 혁신은 필수불가결하다. At Level 5, we transition to pure written academic register without colloquial contamination."
            },
            "grammarBreakdown": "TOPIK 5 requires fluency in non-conversational plain written style (해라체):\n• Verbs: -는다 / -ㄴ다 (e.g. 증가한다, 감소한다).\n• Adjectives: -다 (e.g. 중요하다, 심각하다).\n• Formal linkers: -에 기인하다 (be caused by), -에 미루어 보아 (judging by), -(으)ㅁ에 틀림없다 (there is no doubt that).",
            "grammarTable": {
              "title": "Academic Report Connectives",
              "headers": [
                "Academic Expression",
                "English Meaning",
                "Usage in Research / News"
              ],
              "rows": [
                [
                  "-에 기인하다",
                  "Is rooted in / caused by",
                  "환경 파괴는 무분별한 개발에 기인한다."
                ],
                [
                  "-을 초래하다",
                  "To bring about / result in",
                  "경제 위기는 심각한 고용 불안을 초래했다."
                ],
                [
                  "-지 않을 수 없다",
                  "Cannot help but / inevitable",
                  "정책의 전면적 수정을 검토하지 않을 수 없다."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "초래하다",
                "translation": "to bring about / cause (negative)",
                "phonetic": "cho-rae-ha-da",
                "example": "심각한 결과를 초래할 수 있다."
              },
              {
                "word": "불가피하다",
                "translation": "inevitable / unavoidable",
                "phonetic": "bul-ga-pi-ha-da",
                "example": "일정 변경이 불가피하다."
              }
            ],
            "practiceDrills": [
              {
                "id": "ko-t5-l1-d1",
                "question": "Which form is used for verbs in the official written register (해라체)?",
                "options": [
                  "-아/어요",
                  "-습니다",
                  "-ㄴ/는다",
                  "-지요"
                ],
                "correct": 2,
                "explanation": "Formal written papers and news use the plain non-conversational -ㄴ/는다 ending."
              }
            ]
          }
        ],
        "assignment": {
          "title": "TOPIK II (Level 5) Comprehensive Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence written in flawless academic thesis style:",
              "options": [
                "저출산 문제는 국가 경제의 지속가능성을 심각하게 위협하는 요인으로 작용하고 있다.",
                "저출산 문제는 국가 경제를 아주 힘들게 만들고 있어요.",
                "저출산 문제는 국가 경제에 큰 위협입니다요.",
                "저출산 문제는 국가 경제를 망칠 것 같다."
              ],
              "correct": 0,
              "explanation": "'-으로 작용하고 있다' displays the rigorous objective syntax required at TOPIK Level 5."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which grammar form indicates 'cannot help but do / have no choice but to':",
              "options": [
                "-지 않을 수 없다",
                "-을 리가 없다",
                "-는 셈 치다",
                "-기 짝이 없다"
              ],
              "correct": 0,
              "explanation": "'-지 않을 수 없다' is a double negation signifying mandatory inevitability."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Identify the expression meaning 'judging from the historical precedents':",
              "options": [
                "역사적 전례에 비추어 볼 때",
                "역사적 전례를 막론하고",
                "역사적 전례에 불구하고",
                "역사적 전례로 치더라도"
              ],
              "correct": 0,
              "explanation": "'-에 비추어 볼 때' is standard academic framing for evaluation."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Select the suitable idiom for 'facing danger and hardship simultaneously':",
              "options": [
                "설상가상 (雪上加霜)",
                "동문서답 (東問西答)",
                "작심삼일 (作心三日)",
                "일거양득 (一擧兩得)"
              ],
              "correct": 0,
              "explanation": "'설상가상' means adding frost on top of snow (misfortunes never come singly)."
            }
          ]
        }
      },
      "TOPIK 6": {
        "code": "TOPIK 6",
        "title": "Level 6 — Mastery",
        "studyTime": "800+ hours (cumulative)",
        "exam": "TOPIK II (Level 6)",
        "vocabSize": "Native-like range",
        "grammarSyllabus": [
          "Full command of formal, literary and colloquial registers",
          "Nuanced stylistic and rhetorical devices"
        ],
        "vocabThemes": [
          "Near-native vocabulary including idiom, humour and cultural nuance"
        ],
        "keySkills": [
          "Function fluently in academic and professional settings, comparable to an educated native speaker",
          "Understand and produce nuanced, precise language across all contexts"
        ],
        "lessons": [
          {
            "id": "ko-t6-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Four-Character Idioms (사자성어) & Literary Registers",
            "summary": "Master classical idiomatic four-character idioms (사자성어), metaphoric proverbs, and philosophical argumentation.",
            "videoMasterclass": {
              "title": "AI Masterclass: Native Four-Character Idioms & Elite Stylistics",
              "tutorName": "Lee Joon (AI Native Faculty Tutor)",
              "videoPrompt": "Explore high-level Sino-Korean idioms (사자성어) such as 사필귀정, 고진감래, and 역지사지 in sophisticated journalism.",
              "narrationScript": "고진감래 (苦盡甘來) — after hardship comes sweetness. In Level 6, you command the deep cultural metaphors that define native eloquence."
            },
            "grammarBreakdown": "TOPIK 6 represents total mastery of rhetorical devices, archaisms, four-character idioms (사자성어), and dialectal subtleties across literature, legal statutes, and elite debates.",
            "grammarTable": {
              "title": "Essential Four-Character Idioms (사자성어)",
              "headers": [
                "Idiom (Hanja)",
                "Hangul",
                "Literal Meaning",
                "Contextual Usage"
              ],
              "rows": [
                [
                  "苦盡甘來",
                  "고진감래",
                  "Bitter ends, sweet arrives",
                  "Success after sustained hardship"
                ],
                [
                  "易地思之",
                  "역지사지",
                  "Change places and think",
                  "Seeing from the other's perspective"
                ],
                [
                  "事必歸正",
                  "사필귀정",
                  "All events return to justice",
                  "Truth and righteousness will prevail in the end"
                ],
                [
                  "過猶不及",
                  "과유불급",
                  "Too much is as bad as too little",
                  "Moderation in all things"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "사필귀정",
                "translation": "justice will prevail eventually",
                "phonetic": "sa-pil-gwi-jeong",
                "example": "모든 일은 사필귀정으로 끝날 것이다."
              },
              {
                "word": "역지사지",
                "translation": "empathy / putting oneself in another's shoes",
                "phonetic": "yeok-ji-sa-ji",
                "example": "역지사지의 태도가 필요하다."
              }
            ],
            "practiceDrills": [
              {
                "id": "ko-t6-l1-d1",
                "question": "Which four-character idiom means 'after intense bitterness, sweetness arrives'?",
                "options": [
                  "고진감래",
                  "역지사지",
                  "사필귀정",
                  "일석이조"
                ],
                "correct": 0,
                "explanation": "고진감래 (苦盡甘來) means sweetness follows pain."
              }
            ]
          }
        ],
        "assignment": {
          "title": "TOPIK II (Level 6) Mastery Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence illustrating the idiom '역지사지' in a conflict resolution context:",
              "options": [
                "갈등을 원만히 해결하기 위해서는 상대방의 입장을 먼저 헤아리는 역지사지의 자세가 절실하다.",
                "그는 역지사지로 공부하여 수석으로 졸업했다.",
                "날씨가 추워지니 역지사지로 옷을 두껍게 입었다.",
                "돈을 많이 벌기 위해 역지사지 투자를 감행했다."
              ],
              "correct": 0,
              "explanation": "'역지사지' implies considering the other party's perspective to resolve conflict."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which literary ending expresses poetic exclamation or solemn affirmation in formal literature?",
              "options": [
                "-(으)리로다",
                "-거든",
                "-잖아요",
                "-더군요"
              ],
              "correct": 0,
              "explanation": "'-(으)리로다' is a high classical/literary declarative marker."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Select the sentence with accurate usage of the Hanja compound '과유불급':",
              "options": [
                "지나친 의욕은 오히려 화를 부를 수 있으니 과유불급의 지혜를 기억해야 한다.",
                "노력이 부족했으니 과유불급으로 다시 시작하자.",
                "시간이 없으니 과유불급으로 서둘러야 한다.",
                "돈이 많을수록 과유불급으로 좋다."
              ],
              "correct": 0,
              "explanation": "'과유불급' means excess is as detrimental as deficiency."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Choose the grammatical formulation equivalent to 'No matter how much one emphasizes, it is not excessive':",
              "options": [
                "아무리 강조해도 지나치지 않다",
                "아무리 강조해도 소용이 없다",
                "아무리 강조할 리가 없다",
                "아무리 강조하는 법이다"
              ],
              "correct": 0,
              "explanation": "'아무리 강조해도 지나치지 않다' is the quintessential Korean rhetorical emphasis formula."
            }
          ]
        }
      }
    }
  },
  "Japanese": {
    "name": "Japanese",
    "nativeName": "日本語",
    "flag": "🇯🇵",
    "langCode": "ja-JP",
    "framework": "JLPT",
    "frameworkName": "Japanese Language Proficiency Test (JLPT)",
    "certifyingBody": "Japan Educational Exchanges and Services (JEES) & Japan Foundation",
    "levels": {
      "N5": {
        "code": "N5",
        "title": "Beginner",
        "studyTime": "150 – 200 hours",
        "exam": "JLPT N5",
        "vocabSize": "~800 words",
        "kanjiLearned": "~100 kanji",
        "grammarSyllabus": [
          "です / ます polite form",
          "Basic particles: は、が、を、に、で、と、も",
          "Present and past tense (plain and polite)",
          "い-adjectives and な-adjectives",
          "Basic counters (つ, 人, 個...)",
          "て-form introduction",
          "~ています (ongoing actions/states)",
          "Question words: 何、誰、どこ、いつ、どう"
        ],
        "vocabThemes": [
          "Greetings and self-introduction",
          "Numbers, time, calendar",
          "Family, daily life, food",
          "School and basic locations"
        ],
        "keySkills": [
          "Read and write hiragana and katakana fluently",
          "Understand basic conversations spoken slowly",
          "Introduce yourself and describe simple daily activities"
        ],
        "lessons": [
          {
            "id": "ja-n5-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Hiragana (ひらがな) & Katakana (カタカナ) Syllabaries",
            "summary": "Master the 46 basic phonetic characters of Hiragana and Katakana, dakuten, handakuten, and contracted sounds.",
            "videoMasterclass": {
              "title": "AI Masterclass: Perfecting Hiragana & Katakana Stroke Order",
              "tutorName": "Tanaka Kenji (AI Native Faculty Tutor)",
              "videoPrompt": "Learn native Japanese pronunciation for vowels (あいうえお) and consonant rows (かさたなはまやらわ).",
              "narrationScript": "こんにちは！ Welcome to Japanese N5! Today we master the foundation of the Japanese writing system: Hiragana and Katakana!"
            },
            "grammarBreakdown": "Japanese uses three writing scripts:\n1. Hiragana (ひらがな): Used for native Japanese words, grammatical particles, and verb endings (okurigana).\n2. Katakana (カタカナ): Used for loanwords (外来語), foreign names, and onomatopoeia.\n3. Kanji (漢字): Logographic Chinese characters representing meanings.\n\nFive Pure Vowels:\n• あ (a), い (i), う (u), え (e), お (o). Japanese vowels are short, crisp, and pure!",
            "grammarTable": {
              "title": "Hiragana 50-Sound Chart (五十音図)",
              "headers": [
                "Row",
                "a-dan",
                "i-dan",
                "u-dan",
                "e-dan",
                "o-dan"
              ],
              "rows": [
                [
                  "Vowels (あ行)",
                  "あ (a)",
                  "い (i)",
                  "う (u)",
                  "え (e)",
                  "お (o)"
                ],
                [
                  "K-row (か行)",
                  "か (ka)",
                  "き (ki)",
                  "く (ku)",
                  "け (ke)",
                  "こ (ko)"
                ],
                [
                  "S-row (さ行)",
                  "さ (sa)",
                  "し (shi)",
                  "す (su)",
                  "せ (se)",
                  "そ (so)"
                ],
                [
                  "T-row (た行)",
                  "た (ta)",
                  "ち (chi)",
                  "つ (tsu)",
                  "て (te)",
                  "と (to)"
                ],
                [
                  "N-row (な行)",
                  "な (na)",
                  "に (ni)",
                  "ぬ (nu)",
                  "ね (ne)",
                  "の (no)"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "こんにちは",
                "translation": "Hello / Good afternoon",
                "phonetic": "kon-ni-chi-wa",
                "example": "皆さん、こんにちは！"
              },
              {
                "word": "ありがとう",
                "translation": "Thank you",
                "phonetic": "a-ri-ga-to-u",
                "example": "どうもありがとうございます。"
              },
              {
                "word": "はい",
                "translation": "Yes",
                "phonetic": "hai",
                "example": "はい、わかりました。"
              },
              {
                "word": "いいえ",
                "translation": "No",
                "phonetic": "i-i-e",
                "example": "いいえ、違います。"
              },
              {
                "word": "日本",
                "translation": "Japan",
                "phonetic": "ni-hon",
                "example": "日本に行きたいです。"
              },
              {
                "word": "私",
                "translation": "I / me",
                "phonetic": "wa-ta-shi",
                "example": "私は学生です。"
              }
            ],
            "practiceDrills": [
              {
                "id": "ja-n5-l1-d1",
                "question": "Which hiragana character represents the sound 'tsu'?",
                "options": [
                  "た",
                  "ち",
                  "つ",
                  "て"
                ],
                "correct": 2,
                "explanation": "つ is 'tsu' in the Ta-row (た、ち、つ、て、と)."
              }
            ]
          },
          {
            "id": "ja-n5-l2",
            "lessonNumber": 2,
            "title": "Lesson 2: Essential Particles (は、が、を、に、で、と、も)",
            "summary": "Learn how Japanese particles indicate the grammatical functions of words in a sentence.",
            "videoMasterclass": {
              "title": "AI Masterclass: The Japanese Particle System Demystified",
              "tutorName": "Sato Ayumi (AI Native Faculty Tutor)",
              "videoPrompt": "Understand the difference between topic particle 'wa' (は) and subject particle 'ga' (が), plus object marker 'wo' (を).",
              "narrationScript": "私はパンを食べます。 Notice how 'wa' sets the topic, 'o' marks the bread, and the verb comes at the end!"
            },
            "grammarBreakdown": "Particles (助詞 - joshi) follow nouns to indicate grammatical roles:\n• は (wa): Topic marker ('Speaking of X...'). Written as 'ha', pronounced 'wa'.\n• が (ga): Subject identifier, emphasizing the actor or answering 'who/which'.\n• を (o): Direct object marker. Written as 'wo', pronounced 'o'.\n• に (ni): Target of movement ('to'), specific point in time ('at 7 o'clock').\n• で (de): Location where an action occurs ('at'), or tool/means ('by train').\n• と (to): 'and' (exhaustive list) or 'with' (companion).\n• も (mo): 'also / too'.",
            "grammarTable": {
              "title": "Core Particles Quick Guide",
              "headers": [
                "Particle",
                "Pronunciation",
                "Primary Function",
                "Example"
              ],
              "rows": [
                [
                  "は",
                  "wa",
                  "Topic of sentence",
                  "私は田中です (I am Tanaka)."
                ],
                [
                  "を",
                  "o",
                  "Direct object of verb",
                  "水を飲みます (I drink water)."
                ],
                [
                  "に",
                  "ni",
                  "Destination or specific time",
                  "東京に行きます / 7時に起きます."
                ],
                [
                  "で",
                  "de",
                  "Location of action or means",
                  "レストランで食べます / バスで行きます."
                ],
                [
                  "が",
                  "ga",
                  "Subject identifier / existence",
                  "猫がいます (There is a cat)."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "水",
                "translation": "water",
                "phonetic": "mi-zu",
                "example": "水をください (Water please)."
              },
              {
                "word": "パン",
                "translation": "bread",
                "phonetic": "pan",
                "example": "パンを食べます (I eat bread)."
              },
              {
                "word": "学校",
                "translation": "school",
                "phonetic": "gak-ko-u",
                "example": "学校へ行きます (I go to school)."
              },
              {
                "word": "本",
                "translation": "book",
                "phonetic": "hon",
                "example": "本を読みます (I read a book)."
              }
            ],
            "practiceDrills": [
              {
                "id": "ja-n5-l2-d1",
                "question": "Choose the correct particle: '図書館______ 本を読みます (I read books AT the library).'",
                "options": [
                  "に",
                  "で",
                  "を",
                  "は"
                ],
                "correct": 1,
                "explanation": "When an active action (reading) takes place at a location, use 'で'."
              }
            ]
          },
          {
            "id": "ja-n5-l3",
            "lessonNumber": 3,
            "title": "Lesson 3: Polite Verb Conjugation (です / ます) & Present/Past Tenses",
            "summary": "Conjugate verbs into the polite 'masu' form: affirmative, negative, past affirmative, and past negative.",
            "videoMasterclass": {
              "title": "AI Masterclass: The 4 Quadrants of the ます Form",
              "tutorName": "Tanaka Kenji (AI Native Faculty Tutor)",
              "videoPrompt": "Learn ます, ません, ました, and ませんでした, and identify Group 1 (Godan), Group 2 (Ichidan), and Irregular verbs.",
              "narrationScript": "食べます, 食べません, 食べました, 食べませんでした! The four polite quadrants are the key to respectful communication in Japan."
            },
            "grammarBreakdown": "Japanese verbs conjugate into 4 polite forms:\n1. Present Affirmative: ~ます (tabemasu = I eat / will eat)\n2. Present Negative: ~ません (tabemasen = I do not eat)\n3. Past Affirmative: ~ました (tabemashita = I ate)\n4. Past Negative: ~ませんでした (tabemasen deshita = I did not eat)\n\nVerb Groups:\n• Group 1 (五段 - Godan): End with u-sound, changes to i-sound before ます (e.g. iku -> ikimasu, nomu -> nomimasu).\n• Group 2 (一段 - Ichidan): Drop る, add ます (e.g. taberu -> tabemasu, miru -> mimasu).\n• Irregular (変格): くる (to come -> kimasu), する (to do -> shimasu).",
            "grammarTable": {
              "title": "The 4 Polite Quadrants",
              "headers": [
                "Verb",
                "Present (+)",
                "Present (-)",
                "Past (+)",
                "Past (-)"
              ],
              "rows": [
                [
                  "食べる (to eat)",
                  "食べます",
                  "食べません",
                  "食べました",
                  "食べませんでした"
                ],
                [
                  "飲む (to drink)",
                  "飲みます",
                  "飲みません",
                  "飲みました",
                  "飲みませんでした"
                ],
                [
                  "行く (to go)",
                  "行きます",
                  "行きません",
                  "行きました",
                  "行きませんでした"
                ],
                [
                  "する (to do)",
                  "します",
                  "しません",
                  "しました",
                  "しませんでした"
                ],
                [
                  "来る (to come)",
                  "来ます (kimasu)",
                  "来ません",
                  "来ました",
                  "来ませんでした"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "食べる",
                "translation": "to eat",
                "phonetic": "ta-be-ru",
                "example": "朝ご飯を食べます。"
              },
              {
                "word": "飲む",
                "translation": "to drink",
                "phonetic": "no-mu",
                "example": "お茶を飲みます。"
              },
              {
                "word": "行く",
                "translation": "to go",
                "phonetic": "i-ku",
                "example": "明日どこへ行きますか。"
              },
              {
                "word": "見る",
                "translation": "to see / watch",
                "phonetic": "mi-ru",
                "example": "テレビを見ました。"
              }
            ],
            "practiceDrills": [
              {
                "id": "ja-n5-l3-d1",
                "question": "What is the polite past negative form of '食べる' (did not eat)?",
                "options": [
                  "食べません",
                  "食べました",
                  "食べませんでした",
                  "食べた"
                ],
                "correct": 2,
                "explanation": "Past negative in the polite form is '食べませんでした'."
              }
            ]
          },
          {
            "id": "ja-n5-l4",
            "lessonNumber": 4,
            "title": "Lesson 4: The て-Form & Ongoing Actions (~ています)",
            "summary": "Master the crucial て-form conjugation and use it for ongoing actions (~ています), requests (~てください), and permission (~てもいいですか).",
            "videoMasterclass": {
              "title": "AI Masterclass: Mastering the Legendary て-Form",
              "tutorName": "Sato Ayumi (AI Native Faculty Tutor)",
              "videoPrompt": "Learn the て-form rhyme song for Godan verbs and construct ongoing actions with ~ています.",
              "narrationScript": "今、日本語を勉強しています！ The te-form is the ultimate gateway to compound Japanese grammar."
            },
            "grammarBreakdown": "The て-form (Te-form) has several critical applications:\n1. Ongoing Action: Verb [て-form] + います ('am doing'). Example: 食べています (I am eating).\n2. Polite Request: Verb [て-form] + ください ('Please do'). Example: 見てください (Please look).\n3. Connecting Actions: Links multiple sequential actions.\n\nTe-form Conjugation Rules for Godan Verbs:\n• う, つ, る -> って (e.g. 買う -> 買って, 待つ -> 待って)\n• む, ぶ, ぬ -> んで (e.g. 飲む -> 飲んで, 呼ぶ -> 呼んで)\n• く -> いて (e.g. 書く -> 書いて; exception: 行く -> 行って)\n• ぐ -> いで (e.g. 泳ぐ -> 泳いで)\n• す -> して (e.g. 話す -> 話して)",
            "grammarTable": {
              "title": "Te-Form Conjugation Matrix",
              "headers": [
                "Verb Group",
                "Dictionary Ending",
                "Te-Form Ending",
                "Example"
              ],
              "rows": [
                [
                  "Godan (Group 1)",
                  "う、つ、る",
                  "って",
                  "待つ (matsu) -> 待って (matte)"
                ],
                [
                  "Godan (Group 1)",
                  "む、ぶ、ぬ",
                  "んで",
                  "飲む (nomu) -> 飲んで (nonde)"
                ],
                [
                  "Godan (Group 1)",
                  "く (ku)",
                  "いて",
                  "書く (kaku) -> 書いて (kaite)"
                ],
                [
                  "Ichidan (Group 2)",
                  "る (ru)",
                  "て",
                  "食べる (taberu) -> 食べて (tabete)"
                ],
                [
                  "Irregular",
                  "する / 来る",
                  "して / きて",
                  "勉強する -> 勉強して"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "待つ",
                "translation": "to wait",
                "phonetic": "ma-tsu",
                "example": "ちょっと待ってください (Wait a minute please)."
              },
              {
                "word": "書く",
                "translation": "to write",
                "phonetic": "ka-ku",
                "example": "名前を書いてください (Please write your name)."
              },
              {
                "word": "勉強する",
                "translation": "to study",
                "phonetic": "ben-kyo-u-su-ru",
                "example": "日本語を勉強しています (I am studying Japanese)."
              }
            ],
            "practiceDrills": [
              {
                "id": "ja-n5-l4-d1",
                "question": "What is the te-form of the verb '飲む' (to drink)?",
                "options": [
                  "飲んで",
                  "飲って",
                  "飲いて",
                  "飲みて"
                ],
                "correct": 0,
                "explanation": "Verbs ending in 'む' transform to 'んで' in the te-form -> '飲んで'."
              }
            ]
          }
        ],
        "assignment": {
          "title": "JLPT N5 Comprehensive Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence with accurate particle usage for reading a book at home:",
              "options": [
                "私は家で本を読みます。",
                "私は家に本を読みます。",
                "私は家で本に読みます。",
                "私は家は本で読みます。"
              ],
              "correct": 0,
              "explanation": "'で' marks the location where an active action takes place ('家で'), and 'を' marks the direct object ('本を')."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which polite form correctly states 'I did not go to Tokyo yesterday'?",
              "options": [
                "昨日、東京へ行きませんでした。",
                "昨日、東京へ行きません。",
                "昨日、東京へ行きました。",
                "昨日、東京へ行ったでした。"
              ],
              "correct": 0,
              "explanation": "Past negative polite is '行きませんでした'."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Choose the correct phrase to politely say 'Please wait a moment':",
              "options": [
                "少々お待ちください (ちょっと待ってください)。",
                "ちょっと待ちてください。",
                "ちょっと待つください。",
                "ちょっと待たないで。"
              ],
              "correct": 0,
              "explanation": "'待つ' in te-form is '待って' + ください -> '待ってください'."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Which conjugation represents an ongoing action right now: 'I am eating an apple':",
              "options": [
                "リンゴを食べています。",
                "リンゴを食べます。",
                "リンゴを食べました。",
                "リンゴを食べたいです。"
              ],
              "correct": 0,
              "explanation": "Verb [て-form] + います ('食べています') represents ongoing state/action."
            }
          ]
        }
      },
      "N4": {
        "code": "N4",
        "title": "Elementary",
        "studyTime": "300 – 400 hours (cumulative)",
        "exam": "JLPT N4",
        "vocabSize": "~1,500 words",
        "kanjiLearned": "~300 kanji",
        "grammarSyllabus": [
          "Plain form (普通形) for casual speech",
          "~たり~たりする (listing actions)",
          "~ながら (doing two things at once)",
          "ば conditional form",
          "~なければならない (obligation)",
          "Transitive and intransitive verb pairs",
          "Potential form (~できる/~られる)",
          "Volitional form (~よう)",
          "Giving/receiving verbs: あげる、もらう、くれる"
        ],
        "vocabThemes": [
          "Shopping, travel, transportation",
          "Hobbies, weather, health",
          "Simple opinions and feelings"
        ],
        "keySkills": [
          "Understand everyday conversations at near-natural speed",
          "Read simple passages on familiar topics",
          "Express basic opinions and needs"
        ],
        "lessons": [
          {
            "id": "ja-n4-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: The Plain Form (普通形) & Casual Speech",
            "summary": "Master the dictionary (辞書形), nai (ない形), ta (た形), and nakatta (なかった形) forms for casual speech and complex grammar.",
            "videoMasterclass": {
              "title": "AI Masterclass: Mastering Plain Forms & Casual Conversation",
              "tutorName": "Tanaka Kenji (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how Japanese native speakers talk casually with friends and embed plain forms before noun modifiers.",
              "narrationScript": "食べる, 食べない, 食べた, 食べなかった! The plain form is the true bedrock of intermediate and advanced Japanese."
            },
            "grammarBreakdown": "The Plain Form (普通形 - futsuukei) is used in two contexts:\n1. Casual conversation among close friends and family.\n2. Before grammatical sentence structures (e.g. ~と思います 'I think', ~ことができます 'can do').\n\nFour Quadrants of Plain Form:\n• Non-past affirmative: Dictionary form (食べる / 行く)\n• Non-past negative: ~ない form (食べない / 行かない)\n• Past affirmative: ~た form (食べた / 行った)\n• Past negative: ~なかった form (食べなかった / 行かなかった)",
            "grammarTable": {
              "title": "Plain Form Quadrants (Godan vs Ichidan)",
              "headers": [
                "Verb",
                "Dictionary (Present +)",
                "Nai-form (Present -)",
                "Ta-form (Past +)",
                "Nakatta-form (Past -)"
              ],
              "rows": [
                [
                  "食べる (Ichidan)",
                  "食べる",
                  "食べない",
                  "食べた",
                  "食べなかった"
                ],
                [
                  "行く (Godan)",
                  "行く",
                  "行かない",
                  "行った",
                  "行かなかった"
                ],
                [
                  "飲む (Godan)",
                  "飲む",
                  "飲まない",
                  "飲んだ",
                  "飲まなかった"
                ],
                [
                  "する (Irregular)",
                  "する",
                  "しない",
                  "した",
                  "しなかった"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "思う",
                "translation": "to think",
                "phonetic": "o-mo-u",
                "example": "いいと思います (I think it is good)."
              },
              {
                "word": "友達",
                "translation": "friend",
                "phonetic": "to-mo-da-chi",
                "example": "友達と話した (I talked with a friend)."
              }
            ],
            "practiceDrills": [
              {
                "id": "ja-n4-l1-d1",
                "question": "What is the plain past negative form of '行く' (did not go)?",
                "options": [
                  "行かなかった",
                  "行かない",
                  "行った",
                  "行きませんでした"
                ],
                "correct": 0,
                "explanation": "The plain past negative is '行かなかった'."
              }
            ]
          },
          {
            "id": "ja-n4-l2",
            "lessonNumber": 2,
            "title": "Lesson 2: Giving & Receiving Verbs (あげる、もらう、くれる)",
            "summary": "Master the social perspective and in-group/out-group directional psychology of giving and receiving in Japan.",
            "videoMasterclass": {
              "title": "AI Masterclass: Psychology of Giving & Receiving in Japanese",
              "tutorName": "Sato Ayumi (AI Native Faculty Tutor)",
              "videoPrompt": "Understand the directional vector: あげる (give outward), くれる (give toward me), and もらう (receive from).",
              "narrationScript": "田中さんが私に本をくれました！ In Japanese, the choice of verb depends entirely on who gives to whom."
            },
            "grammarBreakdown": "Giving and receiving verbs reflect social distance and empathy:\n1. あげる: Giver gives to recipient (outward: I give to friend, or friend A gives to friend B).\n2. くれる: Someone gives TO ME (or my in-group/family).\n3. もらう: Receiver receives from giver (X receives from Y: 私は田中さんに本をもらいました).",
            "grammarTable": {
              "title": "Giving & Receiving Directional Vectors",
              "headers": [
                "Verb",
                "Direction",
                "Formula",
                "Example"
              ],
              "rows": [
                [
                  "あげる",
                  "Me/In-group -> Other",
                  "A は B に [物] をあげる",
                  "私は妹にプレゼントをあげた。"
                ],
                [
                  "くれる",
                  "Other -> Me/In-group",
                  "A は 私に [物] をくれる",
                  "先生が私に辞書をくれた。"
                ],
                [
                  "もらう",
                  "Receiver <- Giver",
                  "A は B に/から [物] をもらう",
                  "私は友達に本をもらった。"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "あげる",
                "translation": "to give (outward)",
                "phonetic": "a-ge-ru",
                "example": "花をあげます。"
              },
              {
                "word": "くれる",
                "translation": "to give (to me)",
                "phonetic": "ku-re-ru",
                "example": "プレゼントをくれました。"
              },
              {
                "word": "もらう",
                "translation": "to receive",
                "phonetic": "mo-ra-u",
                "example": "手紙をもらいました。"
              }
            ],
            "practiceDrills": [
              {
                "id": "ja-n4-l2-d1",
                "question": "Which verb fills the blank: '田中さんが私に本を______ (Tanaka gave me a book)'?",
                "options": [
                  "くれました",
                  "あげました",
                  "もらいました",
                  "やりました"
                ],
                "correct": 0,
                "explanation": "When someone gives something TO ME, you must use 'くれる' -> 'くれました'."
              }
            ]
          }
        ],
        "assignment": {
          "title": "JLPT N4 Comprehensive Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence properly using giving/receiving for a gift given to you:",
              "options": [
                "山田さんが私に時計をくれました。",
                "山田さんが私に時計をあげました。",
                "私は山田さんに時計をくれました。",
                "山田さんが私から時計をもらいました。"
              ],
              "correct": 0,
              "explanation": "When someone gives a gift to ME, 'くれる' is mandatory ('くれました')."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which pattern correctly expresses obligation ('must do homework')?",
              "options": [
                "宿題をしなければなりません。",
                "宿題をしないといけません。",
                "Both 1 and 2 are correct.",
                "宿題をしてはいけません。"
              ],
              "correct": 2,
              "explanation": "Both '~なければなりません' and '~ないといけません' denote obligation."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Choose the sentence describing simultaneous actions ('doing homework while listening to music'):",
              "options": [
                "音楽を聞きながら、宿題をします。",
                "音楽を聞いて、宿題をします。",
                "音楽を聞くまえに、宿題をします。",
                "音楽を聞いたり、宿題をしたりします。"
              ],
              "correct": 0,
              "explanation": "Verb stem + ながら denotes simultaneous concurrent actions."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Which sentence accurately uses the potential form ('can speak Japanese')?",
              "options": [
                "日本語が話せます。",
                "日本語を話せます。",
                "日本語に話せます。",
                "日本語で話します。"
              ],
              "correct": 0,
              "explanation": "Potential form typically takes the particle 'が' for the target ability ('日本語が話せます')."
            }
          ]
        }
      },
      "N3": {
        "code": "N3",
        "title": "Intermediate",
        "studyTime": "450 – 600 hours (cumulative)",
        "exam": "JLPT N3",
        "vocabSize": "~3,750 words",
        "kanjiLearned": "~650 kanji",
        "grammarSyllabus": [
          "Passive voice (受身形)",
          "Causative voice (使役形)",
          "Introduction to keigo (honorific/humble forms)",
          "~そうだ / ~ようだ / ~らしい (hearsay, appearance, inference)",
          "~のに / ~ので (contrast and reason)",
          "Complex て-form usage and chaining",
          "~ば~ほど (the more... the more...)"
        ],
        "vocabThemes": [
          "Workplace and social situations",
          "News and everyday abstract topics",
          "Emotions and nuanced description"
        ],
        "keySkills": [
          "Read texts on everyday topics written in relatively plain language",
          "Follow the gist of conversations and news at natural speed",
          "Communicate in a range of everyday situations with reasonable fluency"
        ],
        "lessons": [
          {
            "id": "ja-n3-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Passive (受身形) & Causative (使役形) Voices",
            "summary": "Express suffering passive (迷惑の受身) and causative situations of making or letting someone do an action.",
            "videoMasterclass": {
              "title": "AI Masterclass: Japanese Passive & Causative Dimensions",
              "tutorName": "Tanaka Kenji (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how the 'suffering passive' expresses trouble caused by another, and conjugate causative verbs (させる/せる).",
              "narrationScript": "雨に降られて困りました。 The Japanese passive voice carries rich emotional empathy and victim perspective."
            },
            "grammarBreakdown": "1. Passive Voice (受身 - ukemi):\n• Group 1 (Godan): a-dan + れる (e.g. 踏む -> 踏まれる 'stepped on').\n• Group 2 (Ichidan): drop る + られる (e.g. 褒める -> 褒められる 'praised').\n• Suffering Passive: '私は弟にパソコンを壊された' (My brother broke my PC, causing me grief!).\n\n2. Causative Voice (使役 - shieki):\n• Godan: a-dan + せる (e.g. 読ませる 'make/let read').\n• Ichidan: drop る + させる (e.g. 食べさせる 'make/let eat').",
            "grammarTable": {
              "title": "Passive and Causative Verb Formulas",
              "headers": [
                "Verb",
                "Dictionary",
                "Passive (受身)",
                "Causative (使役)"
              ],
              "rows": [
                [
                  "書く (to write)",
                  "書く",
                  "書かれる (is written)",
                  "書かせる (make/let write)"
                ],
                [
                  "食べる (to eat)",
                  "食べる",
                  "食べられる (is eaten)",
                  "食べさせる (make/let eat)"
                ],
                [
                  "する (to do)",
                  "する",
                  "される (is done)",
                  "させる (make/let do)"
                ],
                [
                  "来る (to come)",
                  "来る",
                  "来られる (passive)",
                  "来させる (make/let come)"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "褒める",
                "translation": "to praise",
                "phonetic": "ho-me-ru",
                "example": "先生に褒められました (I was praised by the teacher)."
              },
              {
                "word": "叱る",
                "translation": "to scold",
                "phonetic": "shi-ka-ru",
                "example": "親に叱られた (I was scolded by my parents)."
              }
            ],
            "practiceDrills": [
              {
                "id": "ja-n3-l1-d1",
                "question": "Choose the correct suffering passive form: '電車で足______ (My foot was stepped on in the train)'.",
                "options": [
                  "を踏まれた",
                  "を踏んだ",
                  "を踏ませた",
                  "を踏まれる"
                ],
                "correct": 0,
                "explanation": "'足を踏まれた' is the classic suffering passive construction."
              }
            ]
          }
        ],
        "assignment": {
          "title": "JLPT N3 Comprehensive Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence with accurate causative-passive (forced to do something):",
              "options": [
                "嫌いな野菜を食べさせられた。",
                "嫌いな野菜を食べさせた。",
                "嫌いな野菜を食べられた。",
                "嫌いな野菜を食べさせました。"
              ],
              "correct": 0,
              "explanation": "'食べさせられた' is causative-passive: was made / forced to eat."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which pattern properly describes hearsay ('According to the weather report, it will rain tomorrow'):",
              "options": [
                "天気予報によると、明日は雨が降るそうだ。",
                "天気予報によると、明日は雨が降るようだ。",
                "天気予報によると、明日は雨が降りそうだ。",
                "天気予報によると、明日は雨が降るらしいだ。"
              ],
              "correct": 0,
              "explanation": "'〜によると、〜そうだ' is the standard construction for citing hearsay information."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Select the phrase meaning 'the more you study, the more interesting it gets':",
              "options": [
                "勉強すればするほど面白くなる。",
                "勉強するなら面白くなる。",
                "勉強したとたん面白くなる。",
                "勉強したばかりで面白くなる。"
              ],
              "correct": 0,
              "explanation": "'〜ば〜ほど' expresses proportional increase ('the more... the more...')."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Which polite humble expression (謙譲語) means 'I will meet the client':",
              "options": [
                "お客様にお目にかかります (お会いします)。",
                "お客様にいらっしゃいます。",
                "お客様がご覧になります。",
                "お客様にお会いになります。"
              ],
              "correct": 0,
              "explanation": "'お目にかかる' is the humble form (kenjougo) of '会う'."
            }
          ]
        }
      },
      "N2": {
        "code": "N2",
        "title": "Upper-Intermediate",
        "studyTime": "600 – 800 hours (cumulative)",
        "exam": "JLPT N2",
        "vocabSize": "~6,000 words",
        "kanjiLearned": "~1,000 kanji",
        "grammarSyllabus": [
          "Full keigo system: sonkeigo (尊敬語) and kenjougo (謙譲語)",
          "Complex conditional forms and their nuanced differences",
          "Business Japanese expressions",
          "~わけではない / ~ものの / ~ざるを得ない and other nuanced grammar",
          "Formal written grammar patterns (JLPT/business style)"
        ],
        "vocabThemes": [
          "Newspapers, magazines and general topics",
          "Abstract and logical argumentation",
          "Business and formal contexts"
        ],
        "keySkills": [
          "Understand newspaper articles and commentary on a range of topics",
          "Follow natural-speed conversations, news and lectures",
          "Communicate fluently in social and workplace settings"
        ],
        "lessons": [
          {
            "id": "ja-n2-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Business Keigo & Nuanced Expressions (~ざるを得ない)",
            "summary": "Master corporate sonkeigo, kenjougo, and advanced grammar patterns: ~わけではない, ~ざるを得ない, ~を契機に.",
            "videoMasterclass": {
              "title": "AI Masterclass: Business Japanese & Corporate Keigo Mastery",
              "tutorName": "Sato Ayumi (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how Japanese corporations communicate with partners: honorifics, humble forms, and nuanced indirectness.",
              "narrationScript": "ご検討のほど、よろしくお願い申し上げます。 In N2, language is closely interwoven with business etiquette and societal respect."
            },
            "grammarBreakdown": "1. Advanced Keigo:\n• Sonkeigo (elevating customer): おっしゃる (say), なさる (do), いらっしゃる (be/go/come).\n• Kenjougo (humbling oneself): 申す (say), いたす (do), 参る (go/come), 拝見する (look).\n\n2. N2 Grammar Patterns:\n• ~ざるを得ない: 'Have no choice but to do...' (nai-stem + ざるを得ない, する -> せざるを得ない).\n• ~わけではない: 'It does not necessarily mean that...'\n• ~ものの: 'Although / but...'",
            "grammarTable": {
              "title": "Business Keigo Conversion Chart",
              "headers": [
                "Standard Verb",
                "Sonkeigo (尊敬語 - Customer)",
                "Kenjougo (謙譲語 - Me/My Company)"
              ],
              "rows": [
                [
                  "言う (to say)",
                  "おっしゃる",
                  "申す / 申し上げる"
                ],
                [
                  "する (to do)",
                  "なさる",
                  "いたす"
                ],
                [
                  "行く / 来る",
                  "いらっしゃる",
                  "参る (mairu)"
                ],
                [
                  "見る (to look)",
                  "ご覧になる",
                  "拝見する (haiken suru)"
                ],
                [
                  "知る (to know)",
                  "ご存知です",
                  "存じております"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "検討する",
                "translation": "to examine / consider",
                "phonetic": "ken-to-u-su-ru",
                "example": "前向きに検討いたします。"
              },
              {
                "word": "拝見する",
                "translation": "to humbly look at",
                "phonetic": "hai-ken-su-ru",
                "example": "メールを拝見しました。"
              }
            ],
            "practiceDrills": [
              {
                "id": "ja-n2-l1-d1",
                "question": "Choose the proper grammar pattern for 'I have no choice but to accept': '引き受け______'",
                "options": [
                  "ざるを得ない",
                  "わけではない",
                  "に違いない",
                  "ばかりだ"
                ],
                "correct": 0,
                "explanation": "'~ざるを得ない' means to have no choice but to perform an action."
              }
            ]
          }
        ],
        "assignment": {
          "title": "JLPT N2 Comprehensive Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence with accurate business keigo when speaking to a client:",
              "options": [
                "部長はただいま席を外しております。",
                "部長はただいま席を外していらっしゃいます。",
                "部長はただいま席を外されます。",
                "部長はただいま席を外しました。"
              ],
              "correct": 0,
              "explanation": "When speaking to an outside client about someone within your own company (the Department Manager), use humble form ('外しております')."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which pattern properly expresses partial negation ('It does not mean I dislike it, but...'):",
              "options": [
                "嫌いなわけではないが、今は食べたくない。",
                "嫌いなはずがないが、今は食べたくない。",
                "嫌いなものだから、今は食べたくない。",
                "嫌いなことにして、今は食べたくない。"
              ],
              "correct": 0,
              "explanation": "'~わけではない' indicates partial denial ('it's not that...')."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Choose the correct phrase: 'Due to typhoons, we had no choice but to cancel':",
              "options": [
                "台風のため、中止せざるを得なかった。",
                "台風のため、中止するわけにはいかなかった。",
                "台風のため、中止するに相違なかった。",
                "台風のため、中止するほかなかったわけではない。"
              ],
              "correct": 0,
              "explanation": "'中止せざるを得なかった' means was forced / had no choice but to cancel."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Select the structure meaning 'using the merger as a turning point / opportunity':",
              "options": [
                "合併を契機に、新規事業に参入した。",
                "合併をはじめ、新規事業に参入した。",
                "合併をめぐって、新規事業に参入した。",
                "合併にかけて、新規事業に参入した。"
              ],
              "correct": 0,
              "explanation": "'〜を契機に' means taking something as an opportunity / catalyst."
            }
          ]
        }
      },
      "N1": {
        "code": "N1",
        "title": "Advanced",
        "studyTime": "900 – 1200+ hours (cumulative)",
        "exam": "JLPT N1",
        "vocabSize": "10,000+ words",
        "kanjiLearned": "~2,000+ kanji",
        "grammarSyllabus": [
          "Classical-influenced and literary grammar patterns",
          "Highly nuanced formal and academic expressions",
          "Full command of written and spoken register shifts",
          "Rhetorical and argumentative sentence structures"
        ],
        "vocabThemes": [
          "Academic, literary and specialised vocabulary",
          "Idioms, four-character compounds (四字熟語)",
          "Abstract philosophical and social-commentary vocabulary"
        ],
        "keySkills": [
          "Understand logically complex and abstract writing",
          "Follow lectures, news and drama at natural speed with nuance",
          "Read novels, editorials and academic writing comfortably"
        ],
        "lessons": [
          {
            "id": "ja-n1-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Literary & Classical Grammar Patterns (〜んばかりに)",
            "summary": "Command classical-derived literary patterns, four-character idioms (四字熟語), and editorial prose.",
            "videoMasterclass": {
              "title": "AI Masterclass: Native N1 Editorial Analysis & Classical Roots",
              "tutorName": "Tanaka Kenji (AI Native Faculty Tutor)",
              "videoPrompt": "Analyze Asahi Shimbun Tenseijingo editorial columns, literary inversion, and patterns like 〜極まりない and 〜なくしては.",
              "narrationScript": "皆様のご支援なくしては、この成功はあり得ませんでした。 In N1, Japanese reaches the zenith of literary elegance and profound intellectual resonance."
            },
            "grammarBreakdown": "N1 features classical grammar remnants (古文) common in official editorials, legal rulings, and literature:\n• 〜なくしては (without X, Y cannot exist): 努力なくして成功なし.\n• 〜んばかりに (as if about to...): 飛び上がらんばかりに喜んだ.\n• 〜極まりない (extremely / boundlessly): 危険極まりない行為.",
            "grammarTable": {
              "title": "High-Register N1 Grammar Constructs",
              "headers": [
                "Pattern",
                "Meaning",
                "Example Context"
              ],
              "rows": [
                [
                  "〜なくしては",
                  "Without X, no Y",
                  "国民の信頼なくしては、改革は進まない。"
                ],
                [
                  "〜んばかりに",
                  "As if on the verge of",
                  "今にも泣き出さんばかりの表情だった。"
                ],
                [
                  "〜極まりない",
                  "In the utmost extreme",
                  "無責任極まりない態度に憤りを覚える。"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "異口同音",
                "translation": "with one voice / unanimously",
                "phonetic": "i-ku-do-u-on",
                "example": "人々は異口同音に賛成した。"
              },
              {
                "word": "臨機応変",
                "translation": "adapting to circumstances",
                "phonetic": "rin-ki-o-u-hen",
                "example": "臨機応変に対応することが求められる。"
              }
            ],
            "practiceDrills": [
              {
                "id": "ja-n1-l1-d1",
                "question": "Choose the pattern meaning 'without your support, this could never happen': '皆様の支援______、あり得ませんでした。'",
                "options": [
                  "なくしては",
                  "ならずして",
                  "にあって",
                  "を限りに"
                ],
                "correct": 0,
                "explanation": "'〜なくしては' signifies that without the preceding condition, the outcome is impossible."
              }
            ]
          }
        ],
        "assignment": {
          "title": "JLPT N1 Comprehensive Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence with accurate usage of '〜極まりない' (in the extreme):",
              "options": [
                "安全対策を軽視するとは、危険極まりない行為だ。",
                "安全対策を軽視するとは、危険極まりないことになった。",
                "安全対策を軽視するとは、危険極まりないわけだ。",
                "安全対策を軽視するとは、危険極まりないとされている。"
              ],
              "correct": 0,
              "explanation": "'〜極まりない' attaches directly to na-adjective stems to denote an extreme, usually perilous or outrageous state."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which four-character compound describes 'adapting flexibly and resourcefully to changing situations'?",
              "options": [
                "臨機応変 (りんきおうへん)",
                "自暴自棄 (じぼうじき)",
                "一朝一夕 (いっちょういっせき)",
                "四面楚歌 (しめんそか)"
              ],
              "correct": 0,
              "explanation": "'臨機応変' means adapting flexibly according to circumstances."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Select the correct pattern meaning 'as if on the verge of overflowing with tears':",
              "options": [
                "涙があふれ出さんばかりであった。",
                "涙があふれ出そうばかりであった。",
                "涙があふれ出すべであった。",
                "涙があふれ出る始末であった。"
              ],
              "correct": 0,
              "explanation": "'〜んばかり' is formed with the negative mizenkei stem (出さんばかり)."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Which sentence expresses 'the moment the bell rang, students dashed out':",
              "options": [
                "チャイムが鳴るが早いか、生徒たちは教室を飛び出した。",
                "チャイムが鳴るばかりに、生徒たちは教室を飛び出した。",
                "チャイムが鳴るにつけて、生徒たちは教室を飛び出した。",
                "チャイムが鳴るそばから、生徒たちは教室を飛び出した。"
              ],
              "correct": 0,
              "explanation": "'〜が早いか' denotes an immediate, instantaneous consecutive action."
            }
          ]
        }
      }
    }
  },
  "English": {
    "name": "English",
    "nativeName": "English",
    "flag": "🇬🇧",
    "langCode": "en-US",
    "framework": "CEFR",
    "frameworkName": "Common European Framework of Reference (CEFR)",
    "certifyingBody": "Cambridge English & IELTS",
    "levels": {
      "A1": {
        "code": "A1",
        "title": "Beginner",
        "studyTime": "80 – 100 hours",
        "exam": "Cambridge KET / IELTS 1.0–2.0",
        "vocabSize": "~800 words",
        "grammarSyllabus": [
          "Verb 'to be' (am/is/are) and 'to have'",
          "Present simple tense (affirmative, negative, questions)",
          "Articles: a / an / the",
          "Plural nouns (regular and common irregular forms)",
          "Personal pronouns and possessive adjectives (my, your, his...)",
          "Demonstratives: this / that / these / those",
          "Basic prepositions of place and time (in, on, at)",
          "Can / can't for ability",
          "Imperatives for instructions",
          "There is / There are",
          "Question words: who, what, where, when, why, how"
        ],
        "vocabThemes": [
          "Greetings and introductions",
          "Numbers, dates, days, months",
          "Family members",
          "Colours, clothes, body parts",
          "Food and drink basics",
          "Jobs and daily routine",
          "Classroom and travel basics"
        ],
        "keySkills": [
          "Introduce yourself and others",
          "Ask and answer simple personal questions",
          "Understand simple written notices and forms",
          "Fill in a basic form with personal details"
        ],
        "lessons": [
          {
            "id": "en-a1-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: English Alphabet, Phonics & Pronunciation",
            "summary": "Master the 26 English letters, standard vowel sounds (short vs long vowels), consonant blends, and word stress.",
            "videoMasterclass": {
              "title": "AI Masterclass: Native English Phonics & Accent Mastery",
              "tutorName": "Prof. Arthur Pendelton (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how English spelling connects to sound, silent 'e', and how to introduce yourself clearly.",
              "narrationScript": "Hello and welcome to English A1! The English alphabet has 26 letters: 5 vowels (A, E, I, O, U) and 21 consonants."
            },
            "grammarBreakdown": "English letters produce various sounds depending on their environment:\n1. Short Vowels: cat (a), bed (e), sit (i), hot (o), cup (u).\n2. Long Vowels (frequently triggered by silent 'e' at the end): cake, scene, time, home, cute.\n3. Digraphs: 'th' (voiced in 'this', unvoiced in 'think'), 'ch' (chair), 'sh' (shoe).",
            "grammarTable": {
              "title": "Vowel Sound Phonics Matrix",
              "headers": [
                "Letter",
                "Short Vowel Sound",
                "Long Vowel Sound (Magic 'e')",
                "Example Pair"
              ],
              "rows": [
                [
                  "A",
                  "/æ/ (cat)",
                  "/eɪ/ (cake)",
                  "mat / mate"
                ],
                [
                  "E",
                  "/ɛ/ (bed)",
                  "/iː/ (scene)",
                  "pet / Pete"
                ],
                [
                  "I",
                  "/ɪ/ (sit)",
                  "/aɪ/ (time)",
                  "pin / pine"
                ],
                [
                  "O",
                  "/ɒ/ (hot)",
                  "/oʊ/ (home)",
                  "hop / hope"
                ],
                [
                  "U",
                  "/ʌ/ (cup)",
                  "/juː/ (cute)",
                  "tub / tube"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "Hello",
                "translation": "Greeting / Hi",
                "phonetic": "hə-ˈloʊ",
                "example": "Hello, my name is Arthur."
              },
              {
                "word": "Goodbye",
                "translation": "Farewell",
                "phonetic": "ɡʊd-ˈbaɪ",
                "example": "Goodbye, see you tomorrow!"
              },
              {
                "word": "Welcome",
                "translation": "Greeting to a place",
                "phonetic": "ˈwɛl-kəm",
                "example": "Welcome to our class."
              }
            ],
            "practiceDrills": [
              {
                "id": "en-a1-l1-d1",
                "question": "Which word contains a long 'i' sound (/aɪ/)?",
                "options": [
                  "sit",
                  "pin",
                  "pine",
                  "bit"
                ],
                "correct": 2,
                "explanation": "'pine' has a long 'i' sound due to the silent 'e'."
              }
            ]
          },
          {
            "id": "en-a1-l2",
            "lessonNumber": 2,
            "title": "Lesson 2: Verb 'To Be' & Personal Pronouns",
            "summary": "Master 'am, is, are' in affirmative, negative, and question forms with subject pronouns (I, you, he, she, it, we, they).",
            "videoMasterclass": {
              "title": "AI Masterclass: The Core Verb 'To Be'",
              "tutorName": "Prof. Arthur Pendelton (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how to state your identity, nationality, profession, and feelings using 'am', 'is', and 'are'.",
              "narrationScript": "I am a teacher, you are a student, and we are learning English together! 'To be' is the foundation of English grammar."
            },
            "grammarBreakdown": "Conjugations of the Verb 'To Be':\n• I am (I'm) / I am not\n• You are (You're) / You are not (aren't)\n• He / She / It is (He's) / He is not (isn't)\n• We are (We're) / We are not (aren't)\n• They are (They're) / They are not (aren't)\n\nQuestion inversion: 'You are happy' -> 'Are you happy?'",
            "grammarTable": {
              "title": "Verb 'To Be' Quadrants",
              "headers": [
                "Subject",
                "Affirmative (+)",
                "Negative (-)",
                "Question (?)"
              ],
              "rows": [
                [
                  "I",
                  "I am (I'm)",
                  "I am not (I'm not)",
                  "Am I late?"
                ],
                [
                  "You",
                  "You are (You're)",
                  "You are not (aren't)",
                  "Are you ready?"
                ],
                [
                  "He / She / It",
                  "He is (He's)",
                  "He is not (isn't)",
                  "Is she a doctor?"
                ],
                [
                  "We / They",
                  "We are (We're)",
                  "We are not (aren't)",
                  "Are they students?"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "student",
                "translation": "learner in school/uni",
                "phonetic": "ˈstjuː-dənt",
                "example": "I am an English student."
              },
              {
                "word": "teacher",
                "translation": "instructor",
                "phonetic": "ˈtiː-tʃər",
                "example": "She is a kind teacher."
              }
            ],
            "practiceDrills": [
              {
                "id": "en-a1-l2-d1",
                "question": "Choose the correct form: 'They ______ from London.'",
                "options": [
                  "is",
                  "are",
                  "am",
                  "be"
                ],
                "correct": 1,
                "explanation": "'They' takes 'are'."
              }
            ]
          },
          {
            "id": "en-a1-l3",
            "lessonNumber": 3,
            "title": "Lesson 3: Present Simple Tense & Daily Routine",
            "summary": "Talk about daily habits, routines, and universal facts using the third-person '-s/-es' rule and do/does.",
            "videoMasterclass": {
              "title": "AI Masterclass: Present Simple & The 3rd Person '-s'",
              "tutorName": "Prof. Arthur Pendelton (AI Native Faculty Tutor)",
              "videoPrompt": "Master 'I work' vs 'he works', forming negatives with don't/doesn't, and asking questions with do/does.",
              "narrationScript": "Every morning I drink coffee, but my sister drinks tea! Remember to add 's' when talking about he, she, or it!"
            },
            "grammarBreakdown": "Present Simple is used for habits, routines, and permanent states.\n• 3rd person singular rule: Add -s or -es for he/she/it (e.g. works, watches, goes).\n• Negatives: use 'don't' (I/you/we/they) or 'doesn't' (he/she/it) + base verb.\n• Questions: Do / Does + subject + base verb?",
            "grammarTable": {
              "title": "Present Simple Verb Matrix",
              "headers": [
                "Pronoun",
                "Affirmative",
                "Negative",
                "Question"
              ],
              "rows": [
                [
                  "I / You",
                  "work",
                  "do not (don't) work",
                  "Do you work?"
                ],
                [
                  "He / She / It",
                  "works (add -s)",
                  "does not (doesn't) work",
                  "Does he work?"
                ],
                [
                  "We / They",
                  "work",
                  "do not (don't) work",
                  "Do they work?"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "always",
                "translation": "100% of the time",
                "phonetic": "ˈɔːl-weɪz",
                "example": "He always arrives on time."
              },
              {
                "word": "breakfast",
                "translation": "morning meal",
                "phonetic": "ˈbrɛk-fəst",
                "example": "I eat breakfast at 8:00 AM."
              }
            ],
            "practiceDrills": [
              {
                "id": "en-a1-l3-d1",
                "question": "Fill in the blank: 'My brother ______ (live) in Manchester.'",
                "options": [
                  "live",
                  "lives",
                  "living",
                  "is live"
                ],
                "correct": 1,
                "explanation": "Third person singular (he) adds '-s' -> 'lives'."
              }
            ]
          }
        ],
        "assignment": {
          "title": "Cambridge KET / A1 Comprehensive Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence with accurate Present Simple third-person subject-verb agreement:",
              "options": [
                "Sarah speaks three languages fluently.",
                "Sarah speak three languages fluently.",
                "Sarah is speak three languages fluently.",
                "Sarah speaking three languages fluently."
              ],
              "correct": 0,
              "explanation": "Singular third person (Sarah / she) requires the '-s' suffix: 'speaks'."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Choose the correct question form:",
              "options": [
                "Where does your brother work?",
                "Where your brother works?",
                "Where do your brother work?",
                "Where is your brother work?"
              ],
              "correct": 0,
              "explanation": "Wh-question in Present Simple: Wh-word + does + singular subject + base verb."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Select the correct prepositions of time: 'The meeting starts ______ 9:00 AM ______ Monday.'",
              "options": [
                "at / on",
                "in / at",
                "on / in",
                "at / in"
              ],
              "correct": 0,
              "explanation": "Clock times take 'at' ('at 9:00 AM'), days of the week take 'on' ('on Monday')."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Which pair correctly fills: 'There ______ a book on the table, but there ______ any pens.'?",
              "options": [
                "is / aren't",
                "are / isn't",
                "is / isn't",
                "are / aren't"
              ],
              "correct": 0,
              "explanation": "'a book' is singular ('there is'), 'pens' is plural ('there aren't any pens')."
            }
          ]
        }
      },
      "A2": {
        "code": "A2",
        "title": "Elementary",
        "studyTime": "180 – 200 hours (cumulative)",
        "exam": "Cambridge PET / IELTS 3.0–3.5",
        "vocabSize": "~1,500 – 2,000 words",
        "grammarSyllabus": [
          "Present continuous tense",
          "Past simple (regular and irregular verbs)",
          "Past continuous tense",
          "Future forms: going to / will",
          "Comparatives and superlatives",
          "Adverbs of frequency",
          "Modal verbs: must, should, have to, need to",
          "Countable vs uncountable nouns; some / any",
          "Expanded prepositions of time and place",
          "Question tags (basic)"
        ],
        "vocabThemes": [
          "Shopping and money",
          "Travel and transport",
          "Weather and seasons",
          "Hobbies and free time",
          "Health and the body",
          "Directions and places in town",
          "Work and school life"
        ],
        "keySkills": [
          "Describe past experiences and habits",
          "Give simple directions and instructions",
          "Write short personal letters, emails and messages",
          "Handle everyday transactions (shops, restaurants, travel)"
        ],
        "lessons": [
          {
            "id": "en-a2-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Past Simple Tense (Regular & Irregular Verbs)",
            "summary": "Narrate completed past events using regular '-ed' endings and master common irregular verbs (went, saw, bought, had).",
            "videoMasterclass": {
              "title": "AI Masterclass: Mastering the English Past Simple",
              "tutorName": "Prof. Arthur Pendelton (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how to conjugate irregular verbs in the past, form negatives with 'didn't', and ask questions with 'did'.",
              "narrationScript": "Yesterday I went to London, saw Big Ben, and bought a souvenir! The past simple is how we recount past memories."
            },
            "grammarBreakdown": "Past Simple describes events completed at a definite time in the past:\n1. Regular verbs: add -ed (walk -> walked, play -> played).\n2. Irregular verbs: change stem vowel (go -> went, see -> saw, buy -> bought, have -> had).\n3. Negatives: didn't + base infinitive ('I didn't see him').\n4. Questions: Did + subject + base infinitive ('Did you go?').",
            "grammarTable": {
              "title": "Regular vs Irregular Past Verbs",
              "headers": [
                "Base Form",
                "Past Simple",
                "Negative Past",
                "Question Form"
              ],
              "rows": [
                [
                  "visit (regular)",
                  "visited",
                  "didn't visit",
                  "Did you visit?"
                ],
                [
                  "go (irregular)",
                  "went",
                  "didn't go",
                  "Did you go?"
                ],
                [
                  "buy (irregular)",
                  "bought",
                  "didn't buy",
                  "Did you buy?"
                ],
                [
                  "see (irregular)",
                  "saw",
                  "didn't see",
                  "Did you see?"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "yesterday",
                "translation": "the day before today",
                "phonetic": "ˈjɛs-tər-deɪ",
                "example": "I watched a film yesterday."
              },
              {
                "word": "ago",
                "translation": "in the past",
                "phonetic": "ə-ˈɡoʊ",
                "example": "Two years ago, I lived in Spain."
              }
            ],
            "practiceDrills": [
              {
                "id": "en-a2-l1-d1",
                "question": "What is the past simple of 'buy'?",
                "options": [
                  "buyed",
                  "bought",
                  "buying",
                  "boughted"
                ],
                "correct": 1,
                "explanation": "'buy' is irregular: past tense is 'bought'."
              }
            ]
          }
        ],
        "assignment": {
          "title": "Cambridge PET / A2 Comprehensive Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence correctly contrasting Past Simple and Past Continuous:",
              "options": [
                "While I was walking home, it started to rain.",
                "While I walked home, it was starting to rain.",
                "While I was walking home, it was starting to rain.",
                "While I walk home, it started raining."
              ],
              "correct": 0,
              "explanation": "The ongoing background action takes Past Continuous ('was walking'), interrupted by a single completed event in Past Simple ('started')."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which sentence correctly uses a comparative adjective?",
              "options": [
                "This train is more faster than the bus.",
                "This train is faster than the bus.",
                "This train is fastest than the bus.",
                "This train is as faster as the bus."
              ],
              "correct": 1,
              "explanation": "One-syllable adjectives take '-er than': 'faster than'."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Choose the modal verb expressing strong external necessity/obligation:",
              "options": [
                "You have to wear a seatbelt while driving.",
                "You might wear a seatbelt while driving.",
                "You would wear a seatbelt while driving.",
                "You could wear a seatbelt while driving."
              ],
              "correct": 0,
              "explanation": "'have to' indicates legal necessity or external rule."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Select the correct question tag: 'You haven't seen my keys, ______?'",
              "options": [
                "have you",
                "haven't you",
                "did you",
                "do you"
              ],
              "correct": 0,
              "explanation": "A negative statement ('haven't seen') requires a positive tag ('have you?')."
            }
          ]
        }
      },
      "B1": {
        "code": "B1",
        "title": "Intermediate",
        "studyTime": "350 – 400 hours (cumulative)",
        "exam": "Cambridge FCE (lower) / IELTS 4.0–5.0",
        "vocabSize": "~3,500 words",
        "grammarSyllabus": [
          "Present perfect simple and continuous",
          "Past perfect simple",
          "First and second conditionals",
          "Passive voice (present and past simple)",
          "Reported speech (statements and questions, basic)",
          "Relative clauses (defining)",
          "Gerunds vs infinitives",
          "Modal verbs for deduction and speculation (must be, might, could)"
        ],
        "vocabThemes": [
          "Opinions and preferences",
          "Environment and nature",
          "Media, news and technology",
          "Relationships and emotions",
          "Education and careers"
        ],
        "keySkills": [
          "Express and justify opinions",
          "Handle most situations while travelling",
          "Write connected text on familiar topics",
          "Describe experiences, events, hopes and ambitions"
        ],
        "lessons": [
          {
            "id": "en-b1-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Present Perfect (Simple & Continuous)",
            "summary": "Bridge past actions to the present moment using have/has + past participle (since, for, already, yet).",
            "videoMasterclass": {
              "title": "AI Masterclass: Present Perfect vs Past Simple",
              "tutorName": "Prof. Arthur Pendelton (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how the Present Perfect connects past experience directly to current reality.",
              "narrationScript": "I have lived in London for five years, and I have been studying music since 2020! Notice how this connects the past to right now."
            },
            "grammarBreakdown": "Present Perfect bridges past and present:\n• Present Perfect Simple: have/has + Participle (for experiences, recent events with present result: 'I have lost my passport').\n• Time adverbs: since (point in time), for (duration), already, yet, just.\n• Present Perfect Continuous: have/has been + -ing (focuses on ongoing duration: 'I have been waiting for two hours').",
            "grammarTable": {
              "title": "Present Perfect vs Past Simple",
              "headers": [
                "Tense",
                "Focus",
                "Time Markers",
                "Example"
              ],
              "rows": [
                [
                  "Past Simple",
                  "Finished past event",
                  "yesterday, in 2018, 5 mins ago",
                  "I lost my key yesterday (finished)."
                ],
                [
                  "Present Perfect",
                  "Present result / life experience",
                  "never, ever, yet, already, since",
                  "I have lost my key (I cannot enter now!)."
                ],
                [
                  "Present Perfect Continuous",
                  "Ongoing duration",
                  "for 3 hours, all day, lately",
                  "It has been raining all morning."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "experience",
                "translation": "knowledge gained over time",
                "phonetic": "ɪk-ˈspɪə-ri-əns",
                "example": "I have gained valuable experience."
              },
              {
                "word": "recently",
                "translation": "not long ago",
                "phonetic": "ˈriː-sənt-li",
                "example": "Have you seen him recently?"
              }
            ],
            "practiceDrills": [
              {
                "id": "en-b1-l1-d1",
                "question": "Choose the correct sentence: 'I ______ in this flat since 2021.'",
                "options": [
                  "lived",
                  "have lived",
                  "am living",
                  "was living"
                ],
                "correct": 1,
                "explanation": "Actions starting in the past and continuing to the present with 'since' take Present Perfect: 'have lived'."
              }
            ]
          }
        ],
        "assignment": {
          "title": "Cambridge FCE / B1 Comprehensive Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence with accurate conditional phrasing:",
              "options": [
                "If I won the lottery, I would travel around the world.",
                "If I win the lottery, I would travel around the world.",
                "If I will win the lottery, I travel around the world.",
                "If I had won the lottery, I will travel around the world."
              ],
              "correct": 0,
              "explanation": "Second conditional for hypothetical situations: If + Past Simple, would + base verb."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which sentence correctly applies the passive voice in the past?",
              "options": [
                "The Mona Lisa was painted by Leonardo da Vinci.",
                "The Mona Lisa was paint by Leonardo da Vinci.",
                "The Mona Lisa painted by Leonardo da Vinci.",
                "The Mona Lisa is been painted by Leonardo da Vinci."
              ],
              "correct": 0,
              "explanation": "Past passive: was/were + past participle ('was painted')."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Choose the sentence with correct modal deduction (high certainty):",
              "options": [
                "She has been studying for 10 hours; she must be exhausted.",
                "She has been studying for 10 hours; she can be exhausted.",
                "She has been studying for 10 hours; she should be exhausted.",
                "She has been studying for 10 hours; she shall be exhausted."
              ],
              "correct": 0,
              "explanation": "'must be' denotes strong logical certainty based on evidence."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Select the correct defining relative pronoun for a person:",
              "options": [
                "The doctor who treated my father was remarkably kind.",
                "The doctor which treated my father was remarkably kind.",
                "The doctor whose treated my father was remarkably kind.",
                "The doctor whom treated my father was remarkably kind."
              ],
              "correct": 0,
              "explanation": "'who' is the subject relative pronoun for people."
            }
          ]
        }
      },
      "B2": {
        "code": "B2",
        "title": "Upper-Intermediate",
        "studyTime": "500 – 600 hours (cumulative)",
        "exam": "Cambridge FCE/CAE / IELTS 5.5–6.5",
        "vocabSize": "~5,000 words",
        "grammarSyllabus": [
          "Third conditional and mixed conditionals",
          "Passive voice across all tenses",
          "Reported speech (advanced: commands, suggestions)",
          "Relative clauses (non-defining) and clauses with prepositions",
          "Subjunctive in formal contexts",
          "Phrasal verbs (extensive)",
          "Advanced modal verbs and nuanced modality"
        ],
        "vocabThemes": [
          "Abstract and academic topics",
          "Idiomatic expressions and collocations",
          "Current affairs and social issues",
          "Business and formal register vocabulary"
        ],
        "keySkills": [
          "Interact fluently and spontaneously with native speakers",
          "Understand detailed, complex texts",
          "Produce clear, detailed text on a wide range of subjects",
          "Debate and argue a position with supporting detail"
        ],
        "lessons": [
          {
            "id": "en-b2-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Third & Mixed Conditionals",
            "summary": "Express past regrets with third conditional (if had done, would have been) and mixed conditional cross-temporal scenarios.",
            "videoMasterclass": {
              "title": "AI Masterclass: Third & Mixed Conditionals Mastery",
              "tutorName": "Prof. Arthur Pendelton (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how to talk about past counterfactual situations and their lingering consequences on present reality.",
              "narrationScript": "If I had accepted that job offer in 2020, I would be living in New York today! Mixed conditionals seamlessly bridge different timelines."
            },
            "grammarBreakdown": "1. Third Conditional (Past counterfactual):\n• Formula: If + had + past participle, would have + past participle.\n• Example: 'If you had told me, I would have helped you.'\n\n2. Mixed Conditionals (Past cause, present result):\n• Formula: If + had + past participle, would + base verb.\n• Example: 'If I hadn't missed the flight yesterday, I would be at the conference right now.'",
            "grammarTable": {
              "title": "Conditional Timeline Matrix",
              "headers": [
                "Type",
                "Condition (If-clause)",
                "Result Clause",
                "Temporal Meaning"
              ],
              "rows": [
                [
                  "Second",
                  "If + Past Simple",
                  "would + base verb",
                  "Hypothetical present/future"
                ],
                [
                  "Third",
                  "If + Past Perfect",
                  "would have + Participle",
                  "Unreal past event (regret)"
                ],
                [
                  "Mixed",
                  "If + Past Perfect",
                  "would + base verb",
                  "Past action -> Present outcome"
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "consequence",
                "translation": "a result or effect",
                "phonetic": "ˈkɒn-sɪ-kwəns",
                "example": "Every decision carries long-term consequences."
              }
            ],
            "practiceDrills": [
              {
                "id": "en-b2-l1-d1",
                "question": "Complete the sentence: 'If she ______ harder, she would have passed the bar exam.'",
                "options": [
                  "studied",
                  "had studied",
                  "would study",
                  "has studied"
                ],
                "correct": 1,
                "explanation": "Third conditional if-clause takes Past Perfect: 'had studied'."
              }
            ]
          }
        ],
        "assignment": {
          "title": "Cambridge CAE / B2 Comprehensive Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence correctly applying a Mixed Conditional:",
              "options": [
                "If I had taken the medicine yesterday, I would feel much better today.",
                "If I took the medicine yesterday, I will feel much better today.",
                "If I would take the medicine yesterday, I felt much better today.",
                "If I had taken the medicine yesterday, I would have felt much better today."
              ],
              "correct": 0,
              "explanation": "Past event ('had taken') impacting present state ('would feel today')."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Choose the sentence with correct non-defining relative clause punctuation:",
              "options": [
                "My grandfather, who is 85 years old, still swims every day.",
                "My grandfather who is 85 years old still swims every day.",
                "My grandfather, that is 85 years old, still swims every day.",
                "My grandfather who is 85 years old, still swims every day."
              ],
              "correct": 0,
              "explanation": "Non-defining relative clauses provide extra information and must be enclosed in commas, using 'who' (not 'that')."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Which phrasal verb means 'to tolerate or endure an annoying situation'?",
              "options": [
                "put up with",
                "look down on",
                "get away with",
                "come up with"
              ],
              "correct": 0,
              "explanation": "'put up with' means to tolerate or bear."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Select the formal sentence with an accurate subjunctive mood:",
              "options": [
                "The board insisted that he resign immediately.",
                "The board insisted that he resigns immediately.",
                "The board insisted that he had resigned immediately.",
                "The board insisted that he was resigning immediately."
              ],
              "correct": 0,
              "explanation": "The mandative subjunctive requires the base verb 'resign' without '-s'."
            }
          ]
        }
      },
      "C1": {
        "code": "C1",
        "title": "Advanced",
        "studyTime": "700 – 800 hours (cumulative)",
        "exam": "Cambridge CAE/CPE / IELTS 7.0–8.0",
        "vocabSize": "8,000+ words",
        "grammarSyllabus": [
          "Inversion for emphasis (Never have I seen...)",
          "Cleft sentences (It was John who... / What I need is...)",
          "Advanced discourse markers and cohesion devices",
          "Complex passive and reported speech structures",
          "Nuanced use of modal verbs for tone and politeness"
        ],
        "vocabThemes": [
          "Nuanced and idiomatic vocabulary",
          "Fixed collocations and academic word lists",
          "Register variation (formal / informal / technical)"
        ],
        "keySkills": [
          "Use language flexibly and effectively for social, academic and professional purposes",
          "Understand a wide range of demanding, longer texts and recognise implicit meaning",
          "Produce well-structured, detailed text on complex subjects"
        ],
        "lessons": [
          {
            "id": "en-c1-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Inversion for Emphasis & Cleft Sentences",
            "summary": "Master rhetorical inversion with negative adverbials (Seldom have I..., Scarcely had...) and cleft sentences for dramatic spotlighting.",
            "videoMasterclass": {
              "title": "AI Masterclass: Rhetorical Inversion & Cleft Architecture",
              "tutorName": "Prof. Arthur Pendelton (AI Native Faculty Tutor)",
              "videoPrompt": "Learn how British and American scholars invert subject and auxiliary for elevated rhetorical emphasis.",
              "narrationScript": "Never before have we witnessed such rapid transformation! Inversion elevates writing to the highest register of eloquence."
            },
            "grammarBreakdown": "1. Negative Inversion:\nWhen negative or restrictive adverbs start a sentence, invert auxiliary and subject:\n• Seldom do we encounter such dedication.\n• Rarely have I seen such artistic brilliance.\n• Under no circumstances should you disclose this information.\n• Scarcely had she spoken when the doors opened.\n\n2. Cleft Sentences (Spotlighting information):\n• 'It' cleft: It was John who resolved the crisis.\n• 'Wh-' cleft: What we urgently require is substantial investment.",
            "grammarTable": {
              "title": "Inversion Formulas",
              "headers": [
                "Negative Adverbial",
                "Inversion Formula",
                "Elevated Example"
              ],
              "rows": [
                [
                  "Never / Rarely",
                  "Adverbial + auxiliary + subject + verb",
                  "Rarely has a discovery altered history so profoundly."
                ],
                [
                  "Not only... but also",
                  "Not only + auxiliary + subject...",
                  "Not only did he apologize, but he also compensated us."
                ],
                [
                  "Under no circumstances",
                  "Prepositional phrase + auxiliary...",
                  "Under no circumstances may visitors enter unaccompanied."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "indispensable",
                "translation": "absolutely necessary",
                "phonetic": "ˌɪn-dɪ-ˈspɛn-sə-bəl",
                "example": "Critical thinking is indispensable in research."
              }
            ],
            "practiceDrills": [
              {
                "id": "en-c1-l1-d1",
                "question": "Choose the correct inversion: 'Seldom ______ such magnificent architecture.'",
                "options": [
                  "I have seen",
                  "have I seen",
                  "did I saw",
                  "I saw"
                ],
                "correct": 1,
                "explanation": "Negative adverb 'Seldom' triggers auxiliary-subject inversion: 'have I seen'."
              }
            ]
          }
        ],
        "assignment": {
          "title": "Cambridge CPE / C1 Comprehensive Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence with accurate negative inversion for rhetorical emphasis:",
              "options": [
                "Rarely had the scientific community encountered a phenomenon of such staggering complexity.",
                "Rarely the scientific community had encountered a phenomenon of such staggering complexity.",
                "Rarely did the scientific community had encountered a phenomenon of such staggering complexity.",
                "Rarely has the scientific community encounter a phenomenon of such staggering complexity."
              ],
              "correct": 0,
              "explanation": "'Rarely had the scientific community encountered...' accurately inverts auxiliary 'had' with subject."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Identify the pseudo-cleft sentence spotlighting the solution:",
              "options": [
                "What the committee ultimately resolved to implement was a comprehensive audit.",
                "The committee resolved to implement a comprehensive audit.",
                "It was the committee that resolved to audit.",
                "Auditing was what the committee resolved."
              ],
              "correct": 0,
              "explanation": "'What [clause] was [focus]' is a classical wh-cleft sentence structure."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Choose the collocation that correctly fits the formal academic register: 'The study ______ light on the correlation between diet and longevity.'",
              "options": [
                "sheds",
                "gives",
                "throws",
                "makes"
              ],
              "correct": 0,
              "explanation": "'sheds light on' is the recognized academic collocation."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Select the correct negative conditional inversion: '______ you require further assistance, do not hesitate to contact us.'",
              "options": [
                "Should",
                "Were",
                "Had",
                "Would"
              ],
              "correct": 0,
              "explanation": "'Should you require...' is the inverted formal equivalent of 'If you require'."
            }
          ]
        }
      },
      "C2": {
        "code": "C2",
        "title": "Mastery",
        "studyTime": "1000+ hours (cumulative)",
        "exam": "Cambridge CPE / IELTS 8.5–9.0",
        "vocabSize": "Near-native range",
        "grammarSyllabus": [
          "Full command of all grammatical structures",
          "Stylistic manipulation of grammar for rhetorical effect",
          "Native-like handling of ambiguity and nuance"
        ],
        "vocabThemes": [
          "Near-native vocabulary range",
          "Idiom, humour, wordplay and cultural references",
          "Precise distinctions of meaning even in complex situations"
        ],
        "keySkills": [
          "Understand with ease virtually everything heard or read",
          "Summarise and reconstruct arguments from different spoken and written sources",
          "Express yourself spontaneously, very fluently and precisely"
        ],
        "lessons": [
          {
            "id": "en-c2-l1",
            "lessonNumber": 1,
            "title": "Lesson 1: Stylistic Rhetoric, Subtle Irony & Nuance",
            "summary": "Command native-like irony, stylistic manipulation of syntax, and literary ambiguity.",
            "videoMasterclass": {
              "title": "AI Masterclass: Native C2 Mastery, Irony & Stylistic Cadence",
              "tutorName": "Prof. Arthur Pendelton (AI Native Faculty Tutor)",
              "videoPrompt": "Explore subtle British understatement, rhetorical cadence, and high-register idiomatic mastery.",
              "narrationScript": "To master English at C2 is to play with the instrument of language with the intuitive finesse of a virtuoso."
            },
            "grammarBreakdown": "At C2, grammar becomes an aesthetic and rhetorical instrument. Speakers manipulate sentence length, deliberate fragments, rhetorical questions, and irony to evoke specific intellectual and emotional responses.",
            "grammarTable": {
              "title": "C2 Rhetorical Tropes",
              "headers": [
                "Device",
                "Definition",
                "Literary Exemplar"
              ],
              "rows": [
                [
                  "Litotes",
                  "Ironical understatement by using double negatives",
                  "It is not unreasonable to assume..."
                ],
                [
                  "Periodic Sentence",
                  "Main point reserved until the very end",
                  "Despite the storm and fierce winds, the ship reached port."
                ],
                [
                  "Polysyndeton",
                  "Deliberate repetition of conjunctions for rhythm",
                  "We have gold and silver and courage and hope."
                ]
              ]
            },
            "vocabulary": [
              {
                "word": "ubiquitous",
                "translation": "present everywhere",
                "phonetic": "juː-ˈbɪk-wɪ-təs",
                "example": "Smartphones have become truly ubiquitous."
              }
            ],
            "practiceDrills": [
              {
                "id": "en-c2-l1-d1",
                "question": "What figure of speech is demonstrated by 'He was not unfamiliar with the works of Shakespeare'?",
                "options": [
                  "Litotes",
                  "Hyperbole",
                  "Metaphor",
                  "Oxymoron"
                ],
                "correct": 0,
                "explanation": "Litotes uses a double negative ('not unfamiliar') to convey an affirmative understatement."
              }
            ]
          }
        ],
        "assignment": {
          "title": "Cambridge CPE Mastery Level Examination",
          "totalMarks": 100,
          "passMarks": 70,
          "questions": [
            {
              "id": "q1",
              "marks": 25,
              "prompt": "Select the sentence exemplifying flawless British diplomatic understatement (litotes):",
              "options": [
                "The proposal was not entirely devoid of merit, although substantial revisions remain essential.",
                "The proposal was completely terrible and had zero merit.",
                "The proposal was very good without any faults.",
                "The proposal was maybe okay but not really."
              ],
              "correct": 0,
              "explanation": "'not entirely devoid of merit' is classic C2 litotes / diplomatic understatement."
            },
            {
              "id": "q2",
              "marks": 25,
              "prompt": "Which idiom describes 'reaching an impasse where no further negotiation is possible'?",
              "options": [
                "To hit a brick wall",
                "To jump the gun",
                "To pull someone's leg",
                "To face the music"
              ],
              "correct": 0,
              "explanation": "'To hit a brick wall' signifies reaching an insurmountable obstacle or complete impasse."
            },
            {
              "id": "q3",
              "marks": 25,
              "prompt": "Choose the correct modal phrase conveying critical retrospect: 'He ______ us before making such a unilateral commitment.'",
              "options": [
                "ought to have consulted",
                "had better consult",
                "must have consulted",
                "should consult"
              ],
              "correct": 0,
              "explanation": "'ought to have consulted' expresses moral obligation in the past that was not fulfilled."
            },
            {
              "id": "q4",
              "marks": 25,
              "prompt": "Select the sentence with accurate fronting of an adverbial participle for narrative drama:",
              "options": [
                "Having exhausted all diplomatic channels, the envoy reluctantly withdrew.",
                "Having exhausted all diplomatic channels, the envoy was withdrawing reluctantly.",
                "Exhausting all diplomatic channels, the envoy had reluctantly withdrew.",
                "The envoy reluctantly withdrew having all channels exhausted."
              ],
              "correct": 0,
              "explanation": "'Having exhausted all diplomatic channels, the envoy reluctantly withdrew' is an elegant perfect participle fronting."
            }
          ]
        }
      }
    }
  }
};
