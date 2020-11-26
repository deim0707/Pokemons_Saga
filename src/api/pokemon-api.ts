export default class PokemonApi {
    _apiBase = "https://pokeapi.co/api/v2/";

    sendRequest = async (url: string) => {
        const res = await fetch(`${this._apiBase}${url}`);
        try {
            return await res.json();
        } catch (err) {
            return err
        }
    };

    getPokemonList = async (limit: number, offset: number) => await this.sendRequest(`pokemon?limit=${limit}&offset=${offset}`);

    getPokemon = async (id:number) => await this.sendRequest(`pokemon/${id}`);
}
