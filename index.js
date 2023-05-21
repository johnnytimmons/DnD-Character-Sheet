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
  return spellsAndAbilities[classInput];
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

// Tiefling
const tieflingTraits = [
  "Ability Score Increase: +2 Charisma, +1 Intelligence",
  "Darkvision: 60 feet",
  "Hellish Resistance: Resistance to fire damage",
  "Infernal Legacy: Know the Thaumaturgy cantrip, can cast Hellish Rebuke and Darkness once per long rest",
  "Languages: Common, Infernal",
];
// Half-Orc
const halfOrcTraits = [
  "Ability Score Increase: +2 Strength, +1 Constitution",
  "Darkvision: 60 feet",
  "Savage Attacks: Roll an additional weapon damage die on critical hits with melee weapons",
  "Relentless Endurance: When reduced to 0 hit points but not killed outright, drop to 1 hit point once per long rest",
  "Languages: Common, Orc",
];
// Half-Elf
const halfElfTraits = [
  "Ability Score Increase: +2 Charisma, +1 to two other ability scores of your choice",
  "Darkvision: 60 feet",
  "Fey Ancestry: Advantage on saving throws against being charmed, immune to sleep spells",
  "Skill Versatility: Proficiency in two skills of your choice",
  "Languages: Common, Elvish",
];

//Main object of all race arrays
const dndRaces = {
  human: {
    name: "Human",
    id: "human",
    traits: humanTraits,
    abilityMod: {
      strength: 1,
      dexterity: 1,
      Constitution: 1,
      intelligence: 1,
      Wisdom: 1,
      Charisma: 1,
    },
  },
  elf: {
    name: "Elf",
    id: "elf",
    traits: elfTraits,
    abilityMod: {
      strength: 0,
      dexterity: 2,
      Constitution: 0,
      intelligence: 0,
      Wisdom: 0,
      Charisma: 0,
    },
  },
  dwarf: {
    name: "Dwarf",
    id: "dwarf",
    traits: dwarfTraits,
    abilityMod: {
      strength: 0,
      dexterity: 0,
      Constitution: 2,
      intelligence: 0,
      Wisdom: 0,
      Charisma: 0,
    },
  },
  halfling: {
    name: "Halfling",
    id: "halfling",
    traits: halflingTraits,
    abilityMod: {
      strength: 0,
      dexterity: 2,
      Constitution: 0,
      intelligence: 0,
      Wisdom: 0,
      Charisma: 0,
    },
  },
  dragonborn: {
    name: "Dragonborn",
    id: "dragonborn",
    traits: dragonbornTraits,
    abilityMod: {
      strength: 2,
      dexterity: 0,
      Constitution: 0,
      intelligence: 0,
      Wisdom: 0,
      Charisma: 1,
    },
  },
  gnome: {
    name: "Gnome",
    id: "gnome",
    traits: gnomeTraits,
    abilityMod: {
      strength: 0,
      dexterity: 0,
      Constitution: 0,
      intelligence: 2,
      Wisdom: 0,
      Charisma: 0,
    },
  },
  tiefling: {
    name: "Tiefling",
    id: "tiefling",
    traits: tieflingTraits,
    abilityMod: {
      strength: 0,
      dexterity: 0,
      Constitution: 0,
      intelligence: 1,
      Wisdom: 0,
      Charisma: 2,
    },
  },
  halfOrc: {
    name: "Half-Orc",
    id: "halfOrc",
    traits: halfOrcTraits,
    abilityMod: {
      strength: 2,
      dexterity: 0,
      Constitution: 1,
      intelligence: 0,
      Wisdom: 0,
      Charisma: 1,
    },
  },
  halfElf: {
    name: "Half-Elf",
    id: "halfElf",
    traits: halfElfTraits,
    abilityMod: {
      strength: 0,
      dexterity: 0,
      Constitution: 0,
      intelligence: 0,
      Wisdom: 0,
      Charisma: 2,
    },
  },
};

//abilities objects for classes

const bloodhunterAbilities = [
  {
    title: "Crimson Rite",
    description:
      "A Blood Hunter can imbue their weapon with elemental energy, dealing additional damage to their attacks, but taking damage themselves each time they activate this ability. This additional damage can be changed as the Blood Hunter advances in levels.",
  },
  {
    title: "Blood Hunter's Sense",
    description:
      "A Blood Hunter can sense the presence of enemies, as well as gain insight into their abilities and weaknesses, allowing them to more effectively target their foes. This ability can be improved as the Blood Hunter advances in levels.",
  },
  {
    title: "Crimson Rite Spells",
    description:
      "As a Blood Hunter gains levels, they can learn to cast spells that further augment their abilities in combat. These spells can provide additional damage, healing, or utility effects, and are often tied thematically to the Blood Hunter's subclass.",
  },
];
const barbarianAbilities = [
  {
    title: "Rage",
  },
  {
    title: "Reckless Attack",
  },
  {
    title: "Danger Sense",
  },
  {
    title: "Unarmored Defense",
  },
];
const bardAbilities = [
  {
    title: "Cure Wounds",
  },
  {
    title: "Thunderwave",
  },
  {
    title: "Bardic Inspiration",
  },
  {
    title: "Spellcasting",
  },
];
const clericAbilities = [
  {
    title: "Bless",
  },
  {
    title: "Cure Wounds",
  },
  {
    title: "Channel Divinity",
  },
  {
    title: "Divine Domain",
  },
];
const druidAbilities = [
  {
    title: "Entangle",
  },
  {
    title: "Goodberry",
  },
  {
    title: "Druidic",
  },
  {
    title: "Wild Shape",
  },
];
const fighterAbilities = [
  {
    title: "Action Surge",
  },
  {
    title: "Second Wind",
  },
  {
    title: "Fighting Style",
  },
  {
    title: "Armor Proficiency",
  },
];
const monkAbilities = [
  {
    title: "Flurry of Blows",
  },
  {
    title: "Patient Defense",
  },
  {
    title: "Unarmored Movement",
  },
  {
    title: "Martial Arts",
  },
];
const paladinAbilities = [
  {
    title: "Divine Smite",
  },
  {
    title: "Lay on Hands",
  },
  {
    title: "Divine Sense",
  },
  {
    title: "Divine Health",
  },
];
const rangerAbilities = [
  {
    title: "Hunter's Mark",
  },
  {
    title: "Cure Wounds",
  },
  {
    title: "Favored Enemy",
  },
  {
    title: "Natural Explorer",
  },
];
const rogueAbilities = [
  {
    title: "Sneak Attack",
  },
  {
    title: "Thieves' Cant",
  },
  {
    title: "Expertise",
  },
  {
    title: "Cunning Action",
  },
];
const sorcererAbilities = [
  {
    title: "Chaos Bolt",
  },
  {
    title: "Shield",
  },
  {
    title: "Sorcery Points",
  },
  {
    title: "Font of Magic",
  },
];
const warlockAbilities = [
  {
    title: "Hex",
  },
  {
    title: "Eldritch Blast",
  },
  {
    title: "Pact Magic",
  },
  {
    title: "Otherworldly Patron",
  },
];
const wizardAbilities = [
  {
    title: "Mage Armor",
  },
  {
    title: "Magic Missile",
  },
  {
    title: "Arcane Recovery",
  },
  {
    title: "Spellbook",
  },
];
/*
spellsAndAbilities.barbarian    //accessing value in an object

const abilityKey = "cleric";
spellsAndAbilities[abilityKey] // accessing a dynamic (variable) value in an object
// The same as spellsAndAbilities.cleric

const classNames = ['barbarian', 'bloodhunter', 'bard'];  // array of all classes
for (let i = 0; i < classNames.length; i++) {
  const abilityKey = classNames[i];
  console.log(spellsAndAbilities[abilityKey])
}

*/
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

function getAbilities(classInput) {
  return spellsAndAbilities[classInput];
}

function hideButtonsOnClick() {
  const submitButton = document.getElementById("submitButton");
  const buttons = document.querySelectorAll(".statmod__button");

  submitButton.addEventListener("click", function () {
    buttons.forEach(function (button) {
      button.style.display = "none";
    });
  });
}
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
  //------------------------------------------
  function clickRaceOrAbility(id, descriptionOrTraits) {
    characterClick(id, descriptionOrTraits);
  }
  const raceKeys = Object.keys(dndRaces);
  for (let i = 0; i < raceKeys.length; i++) {
    const raceId = raceKeys[i];
    const traits = dndRaces[raceId].traits;
    clickRaceOrAbility(raceId, traits);
  }

  function clickRaceOrAbility(raceId, traits) {
    const raceInput = document.getElementById(raceId);
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

  // populating abilities with class info-------------------------------------------------------

  const dropdown = document.getElementById("class");
  dropdown.addEventListener("change", function () {
    const classInput = this.value;
    const abilities = getAbilities(classInput);
    const spellTracker = document.getElementById("spellTracker");

    spellTracker.innerHTML = "";
    for (let i = 0; i < abilities.length; i++) {
      // Create a new button element
      const button = document.createElement("button");
      button.classList.add("abilityButton");
      // Set the text content of the button element to the current trait
      const ability = abilities[i];
      button.textContent = ability.title;
      button.addEventListener("click", function () {
        // Get the description from the abilities array
        const description = ability.description;
        // Create a new div element
        const descriptions = document.createElement("div");
        descriptions.classList.add("descriptions");
        // Set the text content of the div element to the description
        descriptions.textContent = description;
        // Add the div element to the spellTracker element
        spellTracker.appendChild(descriptions);
      });
      //button add here---------------------------------------------
      spellTracker.appendChild(button);
    }
  });
  let button = document.querySelector(".button");
  let buttonText = document.querySelector(".tick");

  const tickMark =
    '<svg width="42" height="32" viewBox="0 0 58 45" style="transform: rotate(360deg);"><path fill="#fff" fill-rule="nonzero" d="M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65"/></svg>';

  buttonText.innerHTML = "Submit";

  button.addEventListener("click", function () {
    if (
      buttonText.innerHTML !== "Submit" &&
      buttonText.innerHTML !== "Submitted"
    ) {
      buttonText.innerHTML = "Submitted";
    } else if (buttonText.innerHTML === "Submit") {
      buttonText.innerHTML = tickMark;
    } else if (buttonText.innerHTML === "Submitted") {
      buttonText.innerHTML === "Locked";
    }
    this.classList.toggle("button__circle");
  });
  hideButtonsOnClick();
});

/* //descriptions -----------------------------------------------------
  const spellTracker = document.getElementById("spellTracker");
  spellTracker.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      const ability = event.target.innerText.toLowerCase();
      const description = getAbilityDescription(ability);
      const descriptionDiv = document.getElementById("descriptions");
      descriptionDiv.innerHTML = description;
    }
  });
  function getAbilityDescription(ability) {
    const abilities = Object.values(spellsAndAbilities).flat();
    const abilityObj = abilities.find(
      (obj) => obj.title.toLowerCase() === ability
    );
    return abilityObj ? abilityObj.description : "";
  }

//split lines

// declare function
function splitLines(input)
return input.split('\n')
  }
  function createParagraphList(input) {
    const lines - splitLines = splitLines(input) //gives array of lines
    //Generate UL HTML Elements
const container - document.createElement('ul')  } //create a dom element in HTML by using createElement(global function on the D)
for (let i = 0; i < lines.length; i++) {
const li = document.createElement('li')
li.innerText = lines[i]
}
return container;
  
// apply to text
  const text ='line 1
line 2
line 3
line 4'

const output = document.getElementById('output')
const lines = createParagraphList(text)
output.appendChild(lines)

console.log(splitLines(text))
  

const crimsonRite = `A Blood Hunter can imbue their weapon with elemental energy, dealing additional damage to their attacks, but taking damage themselves each time they activate this ability. This additional damage can be changed as the Blood Hunter advances in levels.`
const bloodHuntersSense = `A Blood Hunter can sense the presence of enemies, as well as gain insight into their abilities and weaknesses, allowing them to more effectively target their foes. This ability can be improved as the Blood Hunter advances in levels.`
const crimsonRiteSpells = `As a Blood Hunter gains levels, they can learn to cast spells that further augment their abilities in combat. These spells can provide additional damage, healing, or utility effects, and are often tied thematically to the Blood Hunter's subclass.`



//assignment: for spellsAndAbilities display title - then have the title and description in a Button (title) clickable and div(descr)
*/
