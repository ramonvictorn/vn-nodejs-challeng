import { describe, it, expect, beforeEach } from '@jest/globals';
import { CountryService } from './country';
import { data } from './countryData';

describe('CountryService module', () => {
    let countryService: CountryService;
    beforeEach(() => {
        countryService = new CountryService(data)
    })    

    it('should return how many countries exist on the list', () => {
        expect(countryService.count()).toBe(5);
    });

    it('should return the country with more languages', () => {
        expect(countryService.findWithMoreLanguages()).toBe('BE');
    });

    it('should return the country with more languages, including fy', () => {
        expect(countryService.findWithMoreLanguages('fy')).toBe('NL');
    });

    it('should return the country with more languages, including es', () => {
        expect(countryService.findWithMoreLanguages('es')).toBe('ES');
    });

    it('should return the total languages used', () => {
        expect(countryService.countLanguagesUsed()).toBe(6);
    });

    it('should return the most common language used', () => {
        expect(countryService.findMostCommonLanguage()).toBe('nl');
    });
});