/**
 * Dient der Umschaltung der Sprache und der Lieferung von entsprechenden Uebersetzungen
 */

import { Injectable, LOCALE_ID, Inject } from '@angular/core';


// Konstanten

export const LOCALE_DE_ID = 'de';
export const LOCALE_EN_ID = 'en';


@Injectable({
    providedIn: 'root',
})
export class AppLocaleService {

    // Locale-ID fuer de oder en

    mLocaleId = 'de';

    constructor( @Inject(LOCALE_ID) localeId: string ) {
        // console.log('AppLocaleService:', localeId);
        this.mLocaleId = localeId;
    }

    isGerman(): boolean {
        if ( this.mLocaleId === LOCALE_DE_ID ) {
            return true;
        }
        return false;
    }

    german(): void {
        this.mLocaleId = LOCALE_DE_ID;
    }

    isEnglish(): boolean {
        if ( this.mLocaleId === LOCALE_EN_ID ) {
            return true;
        }
        return false;
    }

    english() {
        this.mLocaleId = LOCALE_EN_ID;
    }

    set localeId( aLocaleId: string ) {
        this.mLocaleId = aLocaleId;
    }

    get localeId() {
        return this.mLocaleId;
    }

    isLocaleId( aLocaleId: string ): boolean {
        if ( aLocaleId === this.mLocaleId ) {
            return true;
        }
        return false;
    }

}
