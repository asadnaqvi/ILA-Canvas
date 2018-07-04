
import { Injectable } from '@angular/core';

@Injectable()

export class AppConfig {

  

    private _config: { [key: string]: string };

    constructor() {

        this._config = { 

            BaseAPIPath: 'http://localhost:5315/api/',
            AuthAPIPath:'http://localhost:5315/api/'
        };
    }

    get setting():{ [key: string]: string } {

        return this._config;

    }

    get(key: any) {

        return this._config[key];

    }

};

