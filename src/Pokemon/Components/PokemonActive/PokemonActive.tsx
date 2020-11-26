import React, {FC} from "react";
import {Card, CardContent, Typography,} from '@material-ui/core/';
import usePokemonActive from "./usePokemonActive.hook";
import "./pokemonActive.scss"


const PokemonActive: FC = () => {

    const {activePokemon} = usePokemonActive()

    return (
        <Card className="PokemonActive-wrapper" variant="outlined">
            <CardContent>
                <Typography className="PokemonActive-title" color="textSecondary" gutterBottom>
                    Pokemon:
                </Typography>
                <Typography variant="h5" component="h2">
                    {activePokemon?.name}
                </Typography>
                <div className="PokemonActiveCharacteristics">
                    <Typography variant="body2" component="p">
                        Weight: {activePokemon?.weight}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Height: {activePokemon?.height}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );

}

export default PokemonActive;
