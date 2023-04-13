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
    initiative.innerText = Math.floor((total - 10) / 2);
    armorClass.innerText = Math.max(Math.floor((total - 10) / 2) + 10, 10);
    walkingSpeed.innerText = Math.floor((total - 10) * 5) + 30 + " ft.";
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

  //Click radio button to populate traits-------------------------------------------------------

  humanInput.addEventListener("click", function () {
    const traitsList = document.getElementById("traitsList");
    traitsList.innerHTML = "";
    for (let i = 0; i < humanTraits.length; i++) {
      // Create a new list item
      const li = document.createElement("li");
      // Set the text content of the list item to the current trait
      li.textContent = humanTraits[i];
      // Append the list item to the traits list
      traitsList.appendChild(li);
    }
  });

  elfInput.addEventListener("click", function () {
    const traitsList = document.getElementById("traitsList");
    traitsList.innerHTML = "";
    for (let i = 0; i < elfTraits.length; i++) {
      // Create a new list item
      const li = document.createElement("li");
      // Set the text content of the list item to the current trait
      li.textContent = elfTraits[i];
      // Append the list item to the traits list
      traitsList.appendChild(li);
    }
  });

  dwarfInput.addEventListener("click", function () {
    const traitsList = document.getElementById("traitsList");
    traitsList.innerHTML = "";
    for (let i = 0; i < dwarfTraits.length; i++) {
      // Create a new list item
      const li = document.createElement("li");
      // Set the text content of the list item to the current trait
      li.textContent = dwarfTraits[i];
      // Append the list item to the traits list
      traitsList.appendChild(li);
    }
  });

  dragonbornInput.addEventListener("click", function () {
    const traitsList = document.getElementById("traitsList");
    traitsList.innerHTML = "";
    for (let i = 0; i < dragonbornTraits.length; i++) {
      // Create a new list item
      const li = document.createElement("li");
      // Set the text content of the list item to the current trait
      li.textContent = dragonbornTraits[i];
      // Append the list item to the traits list
      traitsList.appendChild(li);
    }
  });

  halflingInput.addEventListener("click", function () {
    const traitsList = document.getElementById("traitsList");
    traitsList.innerHTML = "";
    for (let i = 0; i < halflingTraits.length; i++) {
      // Create a new list item
      const li = document.createElement("li");
      // Set the text content of the list item to the current trait
      li.textContent = halflingTraits[i];
      // Append the list item to the traits list
      traitsList.appendChild(li);
    }
  });

  gnomeInput.addEventListener("click", function () {
    const traitsList = document.getElementById("traitsList");
    traitsList.innerHTML = "";
    for (let i = 0; i < gnomeTraits.length; i++) {
      // Create a new list item
      const li = document.createElement("li");
      // Set the text content of the list item to the current trait
      li.textContent = gnomeTraits[i];
      // Append the list item to the traits list
      traitsList.appendChild(li);
    }
  });

  tieflingInput.addEventListener("click", function () {
    const traitsList = document.getElementById("traitsList");
    traitsList.innerHTML = "";
    for (let i = 0; i < tieflingTraits.length; i++) {
      // Create a new list item
      const li = document.createElement("li");
      // Set the text content of the list item to the current trait
      li.textContent = tieflingTraits[i];
      // Append the list item to the traits list
      traitsList.appendChild(li);
    }
  });

  halfOrcInput.addEventListener("click", function () {
    const traitsList = document.getElementById("traitsList");
    traitsList.innerHTML = "";
    for (let i = 0; i < halfOrcTraits.length; i++) {
      // Create a new list item
      const li = document.createElement("li");
      // Set the text content of the list item to the current trait
      li.textContent = halfOrcTraits[i];
      // Append the list item to the traits list
      traitsList.appendChild(li);
    }
  });

  halfElfInput.addEventListener("click", function () {
    const traitsList = document.getElementById("traitsList");
    traitsList.innerHTML = "";
    for (let i = 0; i < halfElfTraits.length; i++) {
      // Create a new list item
      const li = document.createElement("li");
      // Set the text content of the list item to the current trait
      li.textContent = halfElfTraits[i];
      // Append the list item to the traits list
      traitsList.appendChild(li);
    }
  });
});
