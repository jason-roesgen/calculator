export class Calculator
{
  constructor()
  {
    const buttons                  = document.querySelectorAll( ".calculator__button" );
    const result: HTMLInputElement = document.querySelector( ".calculator__result" );

    for( const button of buttons )
    {
      if( ( button as HTMLButtonElement ).value === "=" )
      {
        button.addEventListener( "click", () =>
        {
          const calculatedResult = this.calculate( result.value );

          result.value = calculatedResult.toString();
        } )
      }
      else
      {
        button.addEventListener( "click", () =>
        {
          result.value += ( button as HTMLButtonElement ).value;
        } );
      }
    }
  }

  public calculate( equation: string ): number
  {
    return eval( equation );

    if( equation.includes( "+" ) )
    {
      const numbers                        = equation.split( "+" );
      const convertedNumberArray: number[] = [];

      for( const number of numbers )
      {
        const convertedNumber = parseFloat( number );
        convertedNumberArray.push( convertedNumber );
      }

      return this.add( ...convertedNumberArray );
    }
    else if( equation.includes( "-" ) )
    {
      const numbers                        = equation.split( "-" );
      const convertedNumberArray: number[] = [];

      for( const number of numbers )
      {
        const convertedNumber = parseFloat( number );
        convertedNumberArray.push( convertedNumber );
      }
      return this.subtract( ...convertedNumberArray );
    }
    else if( equation.includes( "*" ) )
    {
      const numbers              = equation.split( "*" );
      const convertedNumberArray = [];

      for( const number of numbers )
      {
        const convertedNumber = parseFloat( number );
        convertedNumberArray.push( convertedNumber );
      }
      return this.multiply( ...convertedNumberArray );
    }
    else if( equation.includes( "/" ) )
    {
      const numbers              = equation.split( "/" );
      const convertedNumberArray = [];

      for( const number of numbers )
      {
        const convertedNumber = parseFloat( number );
        convertedNumberArray.push( convertedNumber );
      }
      return this.divide( ...convertedNumberArray );
    }
  }

  public add( ...args: number[] ): number
  {
    let sum = 0;

    for( const argument of args )
    {
      sum += argument;
    }

    return sum;
  }

  public subtract( ...args: number[] ): number
  {
    let sum = 0;

    for( const argument of args )
    {
      sum += argument;
    }

    return sum;
  }

  public multiply( ...args: number[] ): number
  {
    let sum = 0;

    for( const argument of args )
    {
      sum += argument;
    }

    return sum;
  }

  public divide( ...args: number[] ): number
  {
    let sum = 0;

    for( const argument of args )
    {
      sum += argument;
    }

    return sum;
  }
}


