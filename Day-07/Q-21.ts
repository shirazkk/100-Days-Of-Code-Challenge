let players = {
  player1: "Babar Azam",
  player2: "Virat Kohli",
  player3: "Jos Butler",
  player4: "Ben stokes",
  player5: "Muhammad Amir",
};
console.log(players);

type Employess = {
  name: string;
  id: number;
  Email: string;
  MobileNo?: number;
  isAvailable: boolean;
};

let employee1: Employess = {
  name: "Sarmad Murad",
  id: 282,
  Email: "sarmadmurad282@gmail.com",
  MobileNo: +92343827832,
  isAvailable: true,
};

let employee2: Employess = {
  name: "Salman Khan",
  id: 673,
  Email: "salmankhan782@gmail.com",
  MobileNo: +926732332,
  isAvailable: false,
};

let employee3: Employess = {
  name: "Danish Usman",
  id: 673,
  Email: "danishusman3922@gmail.com",
  isAvailable: false,
};
let Allemployees=[employee1,employee2,employee3]

console.log(Allemployees);

