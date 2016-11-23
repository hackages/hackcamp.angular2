import { Injectable } from '@angular/core';
import { sections } from './mocks/sections';
import { Section } from './types/section';

@Injectable()
export class AppService {
  getSections(): Section[] {
     return sections; 
  }

  getAsyncSections(): Promise<Section[]> {
     return new Promise((resolve) => {
         setTimeout(() => {
            resolve(sections) 
         }, 20);
     })
  }

}