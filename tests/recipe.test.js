const Recipe = require('../recipe');

describe('Recipe class', () => {
  let recipe;

  beforeEach(() => {
    recipe = new Recipe(1); // Set up a new Recipe instance before each test
  });

  it('should be initialized with an id', () => {
    expect(recipe.id).toBe(1);
  });

  it('should have a null name initially', () => {
    expect(recipe.name).toBeNull();
  });

  it('should hydrate the name correctly', async () => {
    await recipe.hydrate();
    expect(recipe.name).toBe('Recipe: #1');
  });

  it('should return the correct JSON representation', async () => {
    await recipe.hydrate();
    expect(recipe.toJSON()).toEqual({ id: 1, name: 'Recipe: #1' });
  });

  it('should convert id to a number', () => {
    const recipeWithStringId = new Recipe('2');
    expect(recipeWithStringId.id).toBe(2);
  });
});
