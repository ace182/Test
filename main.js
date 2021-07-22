// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (num, dna)=>{
  return{
    specimenNum : num,
    dna : dna,

    mutate(){
      this.dna[Math.floor(Math.random()*15)] = returnRandBase();
    },

    compareDNA(pAequor){
      let sum = 0;
      for (let i = 0; i < 15; i++){
        let currentDna = this.dna[i];
        let newDna = pAequor.dna[i];
        if(currentDna === newDna){
          sum += 1;
        }
      }
      let porcentage = (sum/15)*100;
      porcentage = parseFloat(porcentage).toFixed(2)
      return console.log('porcentage of DNA common in subjects '+this.specimenNum+' and '+pAequor.specimenNum +' is '+porcentage+'%');
    },

    willLikelySurvive(){
      let sum = 0;
      for(let i = 0; i < 15; i++){
        if(this.dna[i] == 'C' ||this.dna[i] == 'G'){
          sum += 1;
        }
      }
      let porcentage = (sum/15)*100;
      porcentage = parseFloat(porcentage).toFixed(2)
      console.log(porcentage)
      if(porcentage >= 60){
        return true;
      }else{
        return false;
      }
    }
  }
}

let instances = () =>{
  let specimen = []
  for(let i = 0; i<30; i++){
    speci = pAequorFactory(i, mockUpStrand());
    specimen.push(speci.dna);
  }
  return specimen;
}

let tr =  pAequorFactory(200, mockUpStrand())
// let tr2 =  pAequorFactory(300, mockUpStrand())

//console.log(tr.dna);


console.log('cambio'+instances())
console.log('cambio 2 para ver como intercalan')

console.log('probando cambios 1')



