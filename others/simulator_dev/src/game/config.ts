import { Game } from './main';

type Midifier = (game: Game) => void;

interface BaseConfig {
    name: string;
    modifier: Midifier;
}

class Configs<T extends BaseConfig> {
    protected configs: T[] = [];

    constructor(configs: T[]) {
        this.configs = configs;
    }

    public add(config: T) {
        this.configs.push(config);
    }

    public apply(game: Game, names: string[]) {
        this.configs.forEach(config => {
            if (names.includes(config.name)) {
                config.modifier(game);
            }
        });
    }
}

interface AbilityConfig extends BaseConfig {
    cost: number;
}

class Abilities extends Configs<AbilityConfig> {
    public costs(name: string[]): number {
        return this.configs.reduce((sum, config) => {
            if (name.includes(config.name)) {
                return sum + config.cost;
            }
            return sum;
        }, 0);
    }
}

export let abilities: Abilities = new Abilities([
]);


