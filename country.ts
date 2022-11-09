type countryData = {
    country: string;
    languages: Array<string>;
}

export class CountryService {
    constructor(data: countryData[]) {
        this.countries = data.sort((a,b) => {
            return b.languages.length - a.languages.length
        });
    }
    countries: countryData[];

    public count():number {
        return this.countries.length;
    }

    public findWithMoreLanguages(requiredLanguage?: string): string {
        if (!requiredLanguage) {
            return this.countries[0].country;
        }

        const country = this.countries.find((country) => {
            return !!country.languages.some((lang) => lang === requiredLanguage);
        });

        return country!.country;
    }

    public findMostCommonLanguage() {
        const countLanguages = this.countLanguagesByUse();

        const languagesOrdened = Object.entries(countLanguages)
            .sort(([, countA], [, countB]) => {
                return countB - countA;
        });
        return languagesOrdened[0][0]
    }

    public countLanguagesUsed(): number {
        return Object.keys(this.countLanguagesByUse()).length;
    }

    private countLanguagesByUse() {
        const countLanguages: { [key:string]: number } = {};
        this.countries.forEach((country) => {
            country.languages.forEach((language) => {
                if (countLanguages[language]) {
                    countLanguages[language] += 1;
                } else {
                    countLanguages[language] = 1;
                }
            })
        });

        return countLanguages;
    };
}
