import Team from '../team';

const team = new Team();

const bowman = {
    name: 'Лучник',
    type: 'Bowman',
    attack: 25,
    defance: 25
};

const swordsman = {
    name: 'Фектовальщик',
    type: 'Swordsman',
    attack: 25,
    defance: 25
};

const magician = {
    name: 'Маг',
    type: 'Magician',
    attack: 25,
    defance: 25
};

test('Добавление персонажа в команду', () => {
    expect(team.add(bowman)).toStrictEqual({membors: [
        {value: {
                name: 'Лучник',
                type: 'Bowman',
                attack: 25,
                defance: 25
                }
        }
    ]});
});

