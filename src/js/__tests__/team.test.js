import Team from '../team';
import Character from '../character';

const team = new Team();

const player1 = new Character({ name: 'Vasiy', status: 11 });
const player2 = new Character({ name: 'Petiy', status: 22 });
const player3 = new Character({ name: 'Sveta', status: 33 });

test('Добавление персонажа в команду', () => {
    expect(team.add(player1)).toEqual()
});


