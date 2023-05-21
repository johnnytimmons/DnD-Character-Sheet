const encounterGoals = [
  {
    type: `Artifact Protection and Recovery`,
    goals: [
      {
        goal: "Protect a valuable artifact from enemy forces",
        goal: `Retrieve a stolen gem from a cunning thief`,
        goal: `Retrieve a lost treasure from the lair of a fearsome dragon`,
        goal: `Retrieve a powerful artifact from the clutches of a treacherous wizard`,
        goal: `Retrieve a stolen magical artifact from a mischievous sprite`,
        goal: `Destroy a cursed artifact to lift a town's long-standing curse`,
        goal: `Retrieve a stolen family heirloom from a notorious thieves' guild`,
        goal: `Retrieve an ancient artifact hidden deep within an abandoned mine`,
      },
    ],
  },
  {
    type: `Rescue and Liberation`,
    goals: [
      {
        goal: "Rescue a kidnapped noble from a group of bandits.",
        goal: `Rescue a captured ally held hostage in an enemy stronghold`,
        goal: `Rescue a kidnapped prince from an enemy stronghold`,
        goal: `Rescue a group of captured soldiers from an enemy prison camp`,
        goal: `Liberate a stolen ship from a gang of pirates`,
        goal: `Protect a group of refugees as they journey through dangerous territory`,
        goal: `Escort a diplomat through hostile territory to negotiate a peace treaty`,
      },
    ],
  },
  {
    type: `Defense and Siege`,
    goals: [
      {
        goal: "Defend a village against a horde of undead.",
        goal: "Defend a fortress against an invading orcish army.",
        goal: "Defend a sacred temple from an onslaught of demonic creatures.",
        goal: "Defend a castle under siege by an undead army.",
        goal: "Defend a trading caravan from attacks by desert raiders.",
        goal: "Defend a mystical portal from being breached by interdimensional creatures.",
        goal: "Defend a village against a rampaging giant threatening to destroy everything.",
      },
    ],
  },
  {
    type: `Disruption and Prevention `,
    goals: [
      {
        goal: "Stop a summoning ritual before a powerful demon is unleashed.",
        goal: "Disrupt a cult's dark ceremony and prevent a sacrificial offering.",
        goal: "Prevent a rival guild from sabotaging a trade agreement.",
        goal: "Stop a rogue warlock from completing a dark ritual and ascending to godhood.",
        goal: "Stop a group of cultists from summoning a powerful elemental.",
        goal: "Prevent a war between two rival factions by capturing their leaders.",
        goal: "Stop a mad alchemist from unleashing a deadly plague upon the city.",
      },
    ],
  },
  {
    type: `Wilderness and Exploration `,
    goals: [
      {
        goal: "Clear a dangerous forest infested with aggressive monsters.",
        goal: "Defeat a pack of vicious dire wolves terrorizing a village.",
        goal: "Protect a sacred tree from being corrupted by an evil sorcerer.",
        goal: "Investigate a series of disappearances in a haunted forest.",
        goal: "Protect a group of scholars as they explore ancient ruins.",
        goal: "Retrieve an ancient tome from a forbidden library.",
      },
    ],
  },
  {
    type: `Civilian Protection and Safeguarding `,
    goals: [
      {
        goal: "Protect a group of villagers as they flee from a marauding warband.",
        goal: "Protect a convoy of supplies from ambush by highwaymen.",
        goal: "Protect a group of innocent bystanders caught in the middle of a gang war.",
      },
    ],
  },
];

const encounterArtifacts = [
  {
    artifact: "Banner of Eternal Dominion",
    description:
      "The Banner of Eternal Dominion is a formidable artifact that embodies the essence of command and authority.\
It is a large, tattered war banner made of durable, weathered fabric. The banner is emblazoned with a bold and intricate emblem depicting a powerful mythical creature, such as a dragon or a lion, representing strength and dominance. Power and Abilities: The Banner of Eternal Dominion holds the ability to inspire and rally armies to unparalleled heights. When unfurled and raised high, it bestows the following powers upon the bearer and their allied forces:",
    abilities: [
      {
        name: "Warlord's Presence",
        effect:
          "The bearer gains an imposing presence while holding the banner.\
        The bearer has advantage on Charisma (Intimidation) checks against enemy creatures.\
        Enemies within 30 feet of the bearer have disadvantage on saving throws against fear effects.\
        Enemies that start their turn within 30 feet of the bearer have disadvantage on attack rolls until the start of their next turn.",
      },
      {
        name: "Rallying Call",
        effect:
          "Rejuvenates fatigued allies.\
        They immediately end any status they have.\
        They regain hit points equal to 1d6 + the bearer's Charisma modifier.\
        They gain temporary hit points equal to the bearer's Charisma modifier + their level.",
      },
    ],
    location:
      "The enemy has concealed the Banner of Eternal Dominion within a heavily fortified stronghold atop a treacherous mountain range. The stronghold is guarded by elite soldiers, intricate traps, and powerful magical barriers, making it a daunting task to reach the artifact.",
    strategy:
      "The enemy will proudly display the banner on the front lines, rallying their troops and bolstering their army's morale. The enemy might strategically position the banner to maximize its effects, using it to inspire their soldiers while sowing fear and doubt among opposing forces. ",
  },
  {
    artifact: "Shadowheart Amulet",
    description:
      "The Shadowheart Amulet is a unique artifact of immense power and dark origins. It is a small obsidian amulet in the shape of a heart, emanating a faint, sinister aura. The surface of the amulet is adorned with intricate, swirling patterns that seem to shift and writhe like shadows.",
    abilities: [
      {
        name: "Shadowmeld",
        effect:
          "The wielder can merge with the shadows, gaining enhanced stealth capabilities.\
            The wielder can use an action to make a ranged spell attack with the amulet. On a hit, the target takes damage as determined by a specified spell or ability.",
      },
      {
        name: "Veil of Shadows",
        effect:
          "The amulet can create a field of impenetrable darkness, obscuring vision and disorienting opponents.\
            The wielder can use an action to activate the Veil of Shadows, creating a magical darkness that extends in a specified radius. The darkness heavily obscures the area, making it difficult for creatures to see or target anything within it. Creatures without darkvision have disadvantage on attack rolls against targets within the darkness.",
      },
      {
        name: "Shadowbolt",
        effect:
          "The amulet can unleash bolts of shadow energy, striking enemies with darkness-infused projectiles.\
            The wielder can use an action to make a ranged spell attack with the amulet. On a hit, the target takes damage as determined by a specified spell or ability.",
      },
    ],
    location:
      "The enemy has hidden the Shadowheart Amulet in an ancient underground catacomb buried beneath an abandoned temple. The catacomb is guarded by traps, puzzles, and powerful undead creatures, serving as a deterrent to intruders.",
    strategy:
      "The enemy might use the amulet to create illusions, launch surprise attacks from the shadows, or manipulate darkness to hinder their foes' vision and movements.",
  },
  {
    artifact: "Dragonmaster Gauntlets",
    description:
      "The Dragonmaster Gauntlets are a magnificent piece of draconic craftsmanship. It is made from the scales of a mighty dragon and imbued with the forgotten arcane magic to control dragons. The gauntlet is adorned with intricate engravings depicting scenes of dragon lore and conquest.",
    abilities: [
      {
        name: "Draconic Resilience",
        effect:
          "The Dragon's Scale Gauntlet provides additional protection. While wearing the gauntlet, you gain a +2 bonus to your AC.",
      },
      {
        name: "Dragon's Command",
        effect:
          "The gauntlet allows you to exert your dominance over lesser dragons. When you encounter a dragon of CR 10 or lower, you can use your action to attempt to assert authority. The dragon must make a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier). On a failed save, the dragon regards you as its superior and will not attack unless provoked. This effect lasts for 1 hour or until you take hostile actions against the dragon.",
      },
      {
        name: "Dragon's Pact",
        effect:
          "The Dragon's Scale Gauntlet allows the wearer to forge a special bond with dragons, enabling them to work with, alongside, or dominate these mighty creatures.\
                As an action, you can form a temporary bond with a dragon you can see within 60 feet of you. The dragon must be at least one size category larger than you and have an Intelligence score of 6 or higher. The dragon must also be currently affected by Dragon's Command cast by you.\
                While bonded, you gain advantage on saving throws against being frightened, and you can add your proficiency bonus to Strength (Athletics) checks made to mount or control the dragon in combat.\
                Once during the duration of the bond, you can you may use Dragon's Command on a bonded dragon. Using your action, the dragon must understand your language or be able to understand you through other means. The command must be simple and within the dragon's capabilities. The dragon will not relent until either the order is carried out or it dies.",
      },
    ],
    location:
      "The dragon has hidden the gauntlets in an enchanted display case in its horde. The display case thickens the air and halves movement on triggering.",
    strategy:
      "The dragon does not use the gauntlets, but is keeping them safe for its next rider.",
  },
  {
    artifact: "Enigmatic Grimoire",
    description:
      "The Enigmatic Grimoire is an ancient tome bound in tattered, blackened leather. Its pages are filled with cryptic symbols, chaotic illustrations, and incomprehensible writings that seem to shift and change when observed. The very presence of the grimoire exudes an aura of maddening energy, subtly affecting the minds of those nearby.",
    abilities: [
      {
        name: "Arcane Insight",
        effect:
          "The attuned wielder gains a +2 bonus to spell attack rolls and spell save DCs while carrying or holding the Madness's Enigmatic Grimoire.",
      },
      {
        name: "Delusional Whispers",
        effect:
          "The Madness's Enigmatic Grimoire occasionally whispers maddening secrets and half-truths to the attuned wielder. At the DM's discretion, the grimoire may provide cryptic hints, misinformation, or disturbing revelations that can influence the attuned wielder's decisions or actions.",
      },
      {
        name: "Forbidden Knowledge",
        effect:
          "By spending 1 hour studying the Madness's Enigmatic Grimoire during a long rest, the attuned wielder can choose to replace one spell they know with another of the same level from any class's spell list. This change remains in effect until the next long rest.",
      },
    ],
    location:
      "The wizard has the spell locked in the restricted part of their arcane library.",
    strategy:
      "The book is being mass copied to distribute to spellcasters to make an unstoppable army. Destroying simply this one will not rid the world of its evil.",
  },
  {
    artifact: "Whispering Luminous Locket",
    description:
      "Whisperwind's Luminous Locket is an exquisite, miniature locket crafted from shimmering silver adorned with delicate engravings of blooming flowers and intricate filigree. Within the locket, a faint, ethereal glow emanates, casting a soft and soothing light in its vicinity.",
    abilities: [
      {
        name: "Fae Light",
        effect:
          "Once per short rest the wielder may release a radiant burst of light in a 20-foot radius.\
                        Any creatures within range can be marked with Fae Light, which allows advantage on attack rolls on the target, and disallows the target from using stealth",
      },
      {
        name: "Sprite's Mischief",
        effect:
          "The Locket occasionally exhibits mischievous behavior, influenced by the sprite that stole it. At random intervals determined by the DM, the locket may cause harmless pranks, such as causing minor illusions, hiding small objects, or emitting a faint giggle. These pranks are playful in nature and do not cause harm.",
      },
      {
        name: "Fae Stealth",
        effect:
          "While wearing the locket, you gain advantage on Dexterity (Stealth) checks when attempting to hide in natural environments, such as forests, meadows, or overgrown areas, as the locket helps you blend in with the fey energy of nature.",
      },
    ],
    location:
      "The sprite has fled to the boundary between the Material Plane and the Feywild, to a sort of refugee hiding camp for the fae and sprite folk. The sprite will always have the locket on them.",
    strategy:
      "The sprite thief, utilizes the Whisperwind's Luminous Locket in cunning ways during combat. Her small stature and the locket's magical properties make her an elusive and unpredictable opponent.",
  },
];
