export class Hombre{
    private name:string

    constructor(nombre:string){
      this.name = nombre

    }

    getName(){
      return this.name
    }

    setName(newName:string){
      this.name = newName
    }
  }
