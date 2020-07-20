import Team from '../team';
import Character from '../character';

const team = new Team();

const player1 = new Character({ name: 'Ivan', status: 11 });
const player2 = new Character({ name: 'Petr', status: 22 });
const player3 = new Character({ name: 'Sveta', status: 33 });

const set = new Set();

test('Добавление персонажа в команду', () => {
    set.add(player1);
    team.add(player1)
    expect(team.members).toEqual(set);
});

test('Повторное добавление персонажа в команду', () => {
    expect(() => {
        team.add(player1)
    }).toThrow();
});

test('Добавление нескольких персонажей', () => {
    set.add(player1);
    set.add(player2);
    set.add(player3);
    team.addAll(player1, player2, player2, player3);

    expect(team.members).toEqual(set);
});

test("Преобразование в массив", () => {
      
    team.addAll(player1, player2, player3);
  
    team.toArray();
  
    const result = [
      {"status": 11, "name": "Ivan"},
      {"status": 22, "name": "Petr"},
      {"status": 33, "name": "Sveta"}
    ];
  
    expect(team.members).toEqual(result);
  });