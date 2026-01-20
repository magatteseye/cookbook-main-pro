export class Recipe {
    constructor(
      public _id: string | null,
      public title: string,
      public description: string,
      public ingredients: string[] = [],
      public steps: string[] = [],
      public imageUrl: string,
      public category: string  
    ) {}
  }

  

  
  