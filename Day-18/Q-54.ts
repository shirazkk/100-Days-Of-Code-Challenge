type configSettings = {
  [key: string]: string;
};

let setting:configSettings = {};

function updateConfig(key:string ,value: string): configSettings {
  setting[key] =value;

  return setting;
}

console.log(updateConfig("Theme", "Dark"));
console.log(updateConfig("Language", "English",));
