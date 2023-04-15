let rollsRemaining = 3;

function rollDice() {
  if (rollsRemaining > 0) {
    let total = 0;
    for (let i = 0; i < 3; i++) {
      // Roll a six-sided die and add the result to the total
      const roll = Math.floor(Math.random() * 6) + 1;
      total += roll;
    }
    return total;
  }
}

function positiveClamp(number) {
  if (number < 0) {
    return 0;
  } else {
    return number;
  }
}

function getAbilities(classInput) {
  switch (classInput.toLowerCase()) {
    case "bloodhunter":
      return bloodhunterAbilities;
    case "barbarian":
      return barbarianAbilities;
    case "bard":
      return bardAbilities;
    case "cleric":
      return clericAbilities;
    case "druid":
      return druidAbilities;
    case "fighter":
      return fighterAbilities;
    case "monk":
      return monkAbilities;
    case "paladin":
      return paladinAbilities;
    case "ranger":
      return rangerAbilities;
    case "rogue":
      return rogueAbilities;
    case "sorcerer":
      return sorcererAbilities;
    case "warlock":
      return warlockAbilities;
    case "wizard":
      return wizardAbilities;
    default:
      return null;
  }
}

const humanTraits = [
  "Ability Score Increase: +1 to all ability scores",
  "Languages: Common",
];
const elfTraits = [
  "Ability Score Increase: +2 Dexterity",
  "Darkvision: 60 feet",
  "Keen Senses: Proficiency in Perception",
  "Fey Ancestry: Advantage on saving throws against being charmed, immune to sleep spells",
  "Trance: Meditate for 4 hours instead of sleeping",
  "Languages: Common, Elvish",
];

// Dwarf
const dwarfTraits = [
  "Ability Score Increase: +2 Constitution",
  "Darkvision: 60 feet",
  "Dwarven Resilience: Advantage on saving throws against poison, resistance to poison damage",
  "Stonecunning: Proficiency in History (Stone-related)",
  "Languages: Common, Dwarvish",
];

// Halfling
const halflingTraits = [
  "Ability Score Increase: +2 Dexterity",
  "Lucky: Reroll 1s on attack rolls, ability checks, and saving throws",
  "Brave: Advantage on saving throws against being frightened",
  "Halfling Nimbleness: Move through the space of any creature larger than you",
  "Languages: Common, Halfling",
];

// dragonborn
const dragonbornTraits = [
  "Ability Score Increase: +2 Strength, +1 Charisma",
  "Draconic Ancestry: Breath weapon and resistance to damage type depending on ancestry",
  "Languages: Common, Draconic",
];

// Gnome
const gnomeTraits = [
  "Ability Score Increase: +2 Intelligence",
  "Darkvision: 60 feet",
  "Gnome Cunning: Advantage on saving throws against magic, resistance to damage from magic",
  "Languages: Common, Gnomish",
];

// Half-Elf
const halfElfTraits = [
  "Ability Score Increase: +2 Charisma, +1 to two other ability scores of your choice",
  "Darkvision: 60 feet",
  "Fey Ancestry: Advantage on saving throws against being charmed, immune to sleep spells",
  "Skill Versatility: Proficiency in two skills of your choice",
  "Languages: Common, Elvish",
];

// Half-Orc
const halfOrcTraits = [
  "Ability Score Increase: +2 Strength, +1 Constitution",
  "Darkvision: 60 feet",
  "Savage Attacks: Roll an additional weapon damage die on critical hits with melee weapons",
  "Relentless Endurance: When reduced to 0 hit points but not killed outright, drop to 1 hit point once per long rest",
  "Languages: Common, Orc",
];

// Tiefling
const tieflingTraits = [
  "Ability Score Increase: +2 Charisma, +1 Intelligence",
  "Darkvision: 60 feet",
  "Hellish Resistance: Resistance to fire damage",
  "Infernal Legacy: Know the Thaumaturgy cantrip, can cast Hellish Rebuke and Darkness once per long rest",
  "Languages: Common, Infernal",
];

//Main object of all race arrays
const dndRaces = {
  human: humanTraits,
  elf: elfTraits,
  dwarf: dwarfTraits,
  halfling: halflingTraits,
  dragonborn: dragonbornTraits,
  gnome: gnomeTraits,
  halfElf: halfElfTraits,
  halfOrc: halfOrcTraits,
  tiefling: tieflingTraits,
};

const bloodhunterAbilities = [
  "Crimson Rite",
  "Blood Hunter's Sense",
  "Crimson Rite Spells",
];
const barbarianAbilities = [
  "Rage",
  "Reckless Attack",
  "Danger Sense",
  "Unarmored Defense",
];
const bardAbilities = [
  "Cure Wounds",
  "Thunderwave",
  "Bardic Inspiration",
  "Spellcasting",
];
const clericAbilities = [
  "Bless",
  "Cure Wounds",
  "Channel Divinity",
  "Divine Domain",
];
const druidAbilities = ["Entangle", "Goodberry", "Druidic", "Wild Shape"];
const fighterAbilities = [
  "Action Surge",
  "Second Wind",
  "Fighting Style",
  "Armor Proficiency",
];
const monkAbilities = [
  "Flurry of Blows",
  "Patient Defense",
  "Unarmored Movement",
  "Martial Arts",
];
const paladinAbilities = [
  "Divine Smite",
  "Lay on Hands",
  "Divine Sense",
  "Divine Health",
];
const rangerAbilities = [
  "Hunter's Mark",
  "Cure Wounds",
  "Favored Enemy",
  "Natural Explorer",
];
const rogueAbilities = [
  "Sneak Attack",
  "Thieves' Cant",
  "Expertise",
  "Cunning Action",
];
const sorcererAbilities = [
  "Chaos Bolt",
  "Shield",
  "Sorcery Points",
  "Font of Magic",
];
const warlockAbilities = [
  "Hex",
  "Eldritch Blast",
  "Pact Magic",
  "Otherworldly Patron",
];
const wizardAbilities = [
  "Mage Armor",
  "Magic Missile",
  "Arcane Recovery",
  "Spellbook",
];

const spellsAndAbilities = {
  barbarian: barbarianAbilities,
  bloodhunter: bloodhunterAbilities,
  bard: bardAbilities,
  cleric: clericAbilities,
  druid: druidAbilities,
  fighter: fighterAbilities,
  monk: monkAbilities,
  paladin: paladinAbilities,
  ranger: rangerAbilities,
  rogue: rogueAbilities,
  sorcerer: sorcererAbilities,
  warlock: warlockAbilities,
  wizard: wizardAbilities,
};

//EVENT_LISTENER_SHIT ---------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const strengthBtn = document.getElementById("strengthBtn");
  const strength = document.getElementById("strength");
  strengthBtn.addEventListener("click", function () {
    const total = rollDice();
    strength.innerText = total;
    strengthMod.innerText = Math.floor((total - 10) / 2);
  });

  const dexterityBtn = document.getElementById("dexterityBtn");
  const dexterity = document.getElementById("dexterity");
  dexterityBtn.addEventListener("click", function () {
    const total = rollDice();
    dexterity.innerText = total;
    initiative.innerText = Math.floor(positiveClamp(total - 10) / 2);
    armorClass.innerText = Math.max(
      Math.floor(positiveClamp(total - 10) / 2) + 10,
      10
    );
    walkingSpeed.innerText =
      Math.floor(positiveClamp(total - 10) * 5) + 30 + " ft.";
    dexterityMod.innerText = Math.floor((total - 10) / 2);
  });

  const constitutionBtn = document.getElementById("constitutionBtn");
  const constitution = document.getElementById("constitution");
  constitutionBtn.addEventListener("click", function () {
    const total = rollDice();
    constitution.innerText = total;
    constitutionMod.innerText = Math.floor((total - 10) / 2);
  });

  const intelligenceBtn = document.getElementById("intelligenceBtn");
  const intelligence = document.getElementById("intelligence");
  intelligenceBtn.addEventListener("click", function () {
    const total = rollDice();
    intelligence.innerText = total;
    intelligenceMod.innerText = Math.floor((total - 10) / 2);
  });

  const wisdomBtn = document.getElementById("wisdomBtn");
  const wisdom = document.getElementById("wisdom");
  const wisdomMod = document.getElementById("wisdomMod");
  wisdomBtn.addEventListener("click", function () {
    const total = rollDice();
    wisdom.innerText = total;
    wisdomMod.innerText = Math.floor((total - 10) / 2);
  });

  const charismaBtn = document.getElementById("charismaBtn");
  const charisma = document.getElementById("charisma");
  charismaBtn.addEventListener("click", function () {
    const total = rollDice();
    charisma.innerText = total;
    charismaMod.innerText = Math.floor((total - 10) / 2);
  });

  //radio selecting traits
  //human
  const humanInput = document.getElementById("human");
  //dwarf
  const dwarfInput = document.getElementById("dwarf");
  //dragonborn
  const dragonbornInput = document.getElementById("dragonborn");
  //elf
  const elfInput = document.getElementById("elf");
  //halfling
  const halflingInput = document.getElementById("halfling");
  //gnome
  const gnomeInput = document.getElementById("gnome");
  //tiefling
  const tieflingInput = document.getElementById("tiefling");
  //half-orc
  const halfOrcInput = document.getElementById("half-orc");
  //half-elf
  const halfElfInput = document.getElementById("half-elf");

  //get class spells
  //radio selecting traits
  //human
  const bloodhunterInput = document.getElementById("bloodhunter");

  const barbarianInput = document.getElementById("barbarian");

  const rogueInput = document.getElementById("rogue");

  const bardInput = document.getElementById("bard");

  const clericInput = document.getElementById("cleric");

  const druidInput = document.getElementById("druid");

  const fighterInput = document.getElementById("fighter");

  const monkInput = document.getElementById("monk");

  const paladinInput = document.getElementById("paladin");

  const rangerInput = document.getElementById("ranger");

  const sorcererInput = document.getElementById("sorcerer");

  const warlockInput = document.getElementById("warlock");

  const wizardInput = document.getElementById("wizard");

  const dropdown = document.getElementById("class");

  const spellTracker = document.getElementById("spellTracker");
  const myText = document.getElementById("myText");

  /* Race Traits stuff

const raceInput = document.getElementById("race");
const traits = document.getElementById("traits");
*/
  //Click radio button to populate traits-------------------------------------------------------

  function characterClick(raceInput, traits) {
    raceInput.addEventListener("click", function () {
      const traitsList = document.getElementById("traitsList");
      traitsList.innerHTML = "";
      for (let i = 0; i < traits.length; i++) {
        // Create a new list item
        const li = document.createElement("li");
        // Set the text content of the list item to the current trait
        li.textContent = traits[i];
        // Append the list item to the traits list
        traitsList.appendChild(li);
      }
    });
  }
  dropdown.addEventListener("change", function () {
    const classInput = this.value;
    const abilities = getAbilities(classInput);
    const spellTracker = document.getElementById("spellTracker");
    spellTracker.innerHTML = "";
    for (let i = 0; i < abilities.length; i++) {
      // Create a new list item
      const li = document.createElement("li");
      // Set the text content of the list item to the current trait
      li.textContent = abilities[i];
      // Append the list item to the traits list
      spellTracker.appendChild(li);
    }
  });

  characterClick(elfInput, elfTraits);
  characterClick(dwarfInput, dwarfTraits);
  characterClick(tieflingInput, tieflingTraits);
  characterClick(halfOrcInput, halfOrcTraits);
  characterClick(halfElfInput, halfElfTraits);
  characterClick(halflingInput, halflingTraits);
  characterClick(dragonbornInput, dragonbornTraits);
  characterClick(humanInput, humanTraits);
  characterClick(gnomeInput, gnomeTraits);
});

/*


//EVENT_LISTENER_SHIT ---------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const strengthBtn = document.getElementById("strengthBtn");
  const strength = document.getElementById("strength");
  strengthBtn.addEventListener("click", function () {
    const total = rollDice();
    strength.innerText = total;
    strengthMod.innerText = Math.floor((total - 10) / 2);
  });

  const dexterityBtn = document.getElementById("dexterityBtn");
  const dexterity = document.getElementById("dexterity");
  dexterityBtn.addEventListener("click", function () {
    const total = rollDice();
    dexterity.innerText = total;
    initiative.innerText = Math.floor(positiveClamp(total - 10) / 2);
    armorClass.innerText = Math.max(
      Math.floor(positiveClamp(total - 10) / 2) + 10,
      10
    );
    walkingSpeed.innerText =
      Math.floor(positiveClamp(total - 10) * 5) + 30 + " ft.";
    dexterityMod.innerText = Math.floor((total - 10) / 2);
  });

  const constitutionBtn = document.getElementById("constitutionBtn");
  const constitution = document.getElementById("constitution");
  constitutionBtn.addEventListener("click", function () {
    const total = rollDice();
    constitution.innerText = total;
    constitutionMod.innerText = Math.floor((total - 10) / 2);
  });

  const intelligenceBtn = document.getElementById("intelligenceBtn");
  const intelligence = document.getElementById("intelligence");
  intelligenceBtn.addEventListener("click", function () {
    const total = rollDice();
    intelligence.innerText = total;
    intelligenceMod.innerText = Math.floor((total - 10) / 2);
  });

  const wisdomBtn = document.getElementById("wisdomBtn");
  const wisdom = document.getElementById("wisdom");
  const wisdomMod = document.getElementById("wisdomMod");
  wisdomBtn.addEventListener("click", function () {
    const total = rollDice();
    wisdom.innerText = total;
    wisdomMod.innerText = Math.floor((total - 10) / 2);
  });

  const charismaBtn = document.getElementById("charismaBtn");
  const charisma = document.getElementById("charisma");
  charismaBtn.addEventListener("click", function () {
    const total = rollDice();
    charisma.innerText = total;
    charismaMod.innerText = Math.floor((total - 10) / 2);
  });

  //radio selecting traits
  //human
  const humanInput = document.getElementById("human");
  //dwarf
  const dwarfInput = document.getElementById("dwarf");
  //dragonborn
  const dragonbornInput = document.getElementById("dragonborn");
  //elf
  const elfInput = document.getElementById("elf");
  //halfling
  const halflingInput = document.getElementById("halfling");
  //gnome
  const gnomeInput = document.getElementById("gnome");
  //tiefling
  const tieflingInput = document.getElementById("tiefling");
  //half-orc
  const halfOrcInput = document.getElementById("half-orc");
  //half-elf
  const halfElfInput = document.getElementById("half-elf");

  

  /* Race Traits stuff

const raceInput = document.getElementById("race");
const traits = document.getElementById("traits");

  //Click radio button to populate traits-------------------------------------------------------

  function characterClick(raceInput, traits) {
    raceInput.addEventListener("click", function () {
      const traitsList = document.getElementById("traitsList");
      traitsList.innerHTML = "";
      for (let i = 0; i < traits.length; i++) {
        // Create a new list item
        const li = document.createElement("li");
        // Set the text content of the list item to the current trait
        li.textContent = traits[i];
        // Append the list item to the traits list
        traitsList.appendChild(li);
      }
    });

    function characterClick(classInput, classAbilities) {
      classInput.addEventListener("click", function () {
        const spellTracker = document.getElementById("spellTracker");
        spellTracker.innerHTML = "";
        for (let i = 0; i < classInput.length; i++) {
          // Create a new list item
          const li = document.createElement("li");
          // Set the text content of the list item to the current spell
          li.textContent = classAbilities[i];
          // Append the list item to the spell list
          spellTracker.appendChild(li);
        }
      });
    }

*/
