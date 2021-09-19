import { Injectable } from '@angular/core';
import { Settings } from './app.settings.model';

@Injectable()
export class AppSettings {
    public settings = new Settings(
        'Aniang',
        true,
        true,
        true,
        false,
        false,
        true,
        true, 
        'horizontal',
        'default',
        'indigo-light',
        false
    )
}

