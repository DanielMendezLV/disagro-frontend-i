export interface ISearchRegisters {
  position: number;
  average: {
    sellPrice: number,
    buyPrice: number
  }
  subElements: Array<ISubElement>
}

export interface ISubElement{
 requestDate: string,
 sellPrice: number,
 buyPrice: number
}

export interface IAverage{
  sellPrice: number,
  buyPrice: number
}
