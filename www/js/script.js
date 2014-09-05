var genderArray = ["Female", "Male"];
var factionObject = {
	alliance: "Alliance",
	horde: "Horde"
};

function Race() {}

Race.prototype.name = "";
Race.prototype.faction = "";
Race.prototype.wowClass = [];

function Human() 
{
	Race.call(this);
	this.name = "Human";
	this.faction = factionObject.alliance;
	this.wowClass = ["Priest", "Rogue", "Warrior", "Mage", "Hunter", "Warlock", "Paladin", "Monk", "Death Knight"];
}

function Dwarf() 
{
	Race.call(this);
	this.name = "Dwarf";
	this.faction = factionObject.alliance;
	this.wowClass = ["Priest", "Rogue", "Warrior", "Mage", "Hunter", "Warlock", "Shaman", "Paladin", "Monk", "Death Knight"];
}

function NightElf() 
{
	Race.call(this);
	this.name = "Night Elf";
	this.faction = factionObject.alliance;
	this.wowClass = ["Priest", "Rogue", "Warrior", "Mage", "Druid", "Hunter", "Monk", "Death Knight"];
}

function Gnome() 
{
	Race.call(this);
	this.name = "Gnome";
	this.faction = factionObject.alliance;
	this.wowClass = ["Priest", "Rogue", "Warrior", "Mage", "Warlock", "Monk", "Death Knight"];
}

function Draenei() 
{
	Race.call(this);
	this.name = "Draenei";
	this.faction = factionObject.alliance;
	this.wowClass = ["Priest", "Warrior", "Mage", "Hunter", "Shaman", "Paladin", "Monk", "Death Knight"];
}

function Worgen() 
{
	Race.call(this);
	this.name = "Worgen";
	this.faction = factionObject.alliance;
	this.wowClass = ["Priest", "Rogue", "Warrior", "Mage", "Druid", "Hunter", "Warlock", "Death Knight"];
}

function Pandaren() 
{
	Race.call(this);
	this.name = "Pandaren";
	this.faction = getRandomFaction();
	this.wowClass = ["Priest", "Rogue", "Warrior", "Mage", "Hunter", "Shaman", "Monk", "Death Knight"];
}

function Orc() 
{
	Race.call(this);
	this.name = "Orc";
	this.faction = factionObject.horde;
	this.wowClass = ["Rogue", "Warrior", "Mage", "Hunter", "Warlock", "Shaman", "Monk", "Death Knight"];
}

function Undead() 
{
	Race.call(this);
	this.name = "Undead";
	this.faction = factionObject.horde;
	this.wowClass = ["Priest", "Rogue", "Warrior", "Mage", "Hunter", "Warlock", "Monk", "Death Knight"];
}

function Tauren() 
{
	Race.call(this);
	this.name = "Tauren";
	this.faction = factionObject.horde;
	this.wowClass = ["Priest", "Warrior", "Druid", "Hunter", "Shaman", "Paladin", "Monk", "Death Knight"];
}

function Troll() 
{
	Race.call(this);
	this.name = "Troll";
	this.faction = factionObject.horde;
	this.wowClass = ["Priest", "Rogue", "Warrior", "Mage", "Druid", "Hunter", "Warlock", "Shaman", "Monk", "Death Knight"];
}

function BloodElf() 
{
	Race.call(this);
	this.name = "Blood Elf";
	this.faction = factionObject.horde;
	this.wowClass = ["Priest", "Rogue", "Warrior", "Mage", "Hunter", "Warlock", "Paladin", "Monk", "Death Knight"];
}

function Goblin() 
{
	Race.call(this);
	this.name = "Goblin";
	this.faction = factionObject.horde;
	this.wowClass = ["Priest", "Rogue", "Warrior", "Mage", "Hunter", "Warlock", "Shaman", "Death Knight"];
}

var raceArray = [new Human(), new Dwarf(), new NightElf(), new Gnome(), new Draenei(), new Worgen(), new Pandaren(), new Orc(), new Undead(), new Tauren(), new Troll(), new BloodElf(), new Goblin()];

function getRandomFaction()
{
	var count = 0;
	var faction = null;
	var length = Object.keys(factionObject).length;
	var randomIndex = Math.floor(Math.random() * length);
	
	$.each(factionObject, function(key, value) 
	{
		if(count == randomIndex)
		{
			faction = value;
		}
		
		count++;
	});
	
	return faction;
}

function getRandomEntry(array)
{
	return array[Math.floor(Math.random() * array.length)];
}

$(document).on('click', '#button-generate', function()
{
	var raceObject = getRandomEntry(raceArray);
	var wowClass = getRandomEntry(raceObject.wowClass);
	
	$('#textfield-faction').val(raceObject.faction);
	$('#textfield-race').val(raceObject.name);
	$('#textfield-class').val(wowClass);
	$('#textfield-gender').val(getRandomEntry(genderArray));
});