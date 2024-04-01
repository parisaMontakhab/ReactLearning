export function Drink({name}){
    let part,Cafeine,Age ;
    if(name === "tea"){
    part= "Leaf",
    Cafeine="15–70 mg/cup",
    Age ="4,000+ years"
    }
    else if (name === "coffe"){
        part="bean",
        Cafeine="80–185 mg/cup",
        Age="1,000+ years"
    }

    return(
        <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{part}</dd>
          <dt>Caffeine content</dt>
          <dd>{Cafeine}</dd>
          <dt>Age</dt>
          <dd>{Age}</dd>
        </dl>
      </section>
    )

}

export function DrinkList (){
    return(
        <>
        <Drink name="tea"/>
        <Drink name="coffe"/>
        </>
    )
}