require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman')
  });
  it('Retornando um erro se a função for chamada sem parâmetros', async () => {
    const failRequest = await fetchCharacter();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });
  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('qualquer coisa');
    expect(response).toBe('Invalid id');
  });
  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toBeCalledWith(url);
  });
});