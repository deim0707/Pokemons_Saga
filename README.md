#Saga, Redux, Pokemons

 <a href="https://deim0707.github.io/Pokemons_Saga/build/index.html#/">*Посмотреть*</a>

`/api` - функция запроса на бек, которую кладём в сагу

`/RootRedux` - корневой редюс (разбитый CombineReducer), корневая сага (с возможность использовать саги из разных частей проекта), стор с подключёнными девтулзами и сагой

`/Pokemon/Redux` - всё, что связанно с редаксом и сагой

`/Pokemon/usePokemon.hook.ts` - хук со стейтом и методами, которые используются в этой папке

`/Pokemon/Components/PokemonManePage` - точка входа в приложение. Тут прописаны роуты

`/Pokemon/Components/PokemonList/usePokemonList.hook.ts` - тут есть функция `changeSelectedPokemon`, которая меняет урл на активного покемона

`/Pokemon/Components/PokemonActive/usePokemonActive.hook.ts` - тут смотрим за ссылкой, берём от туда айди и делаем запрос на бек. Получаем данные с бека


