function Closure() {
  let name = 'Maksym';
  let surName = 'Kholod';

  function changeName(newName) {
    name = newName;
    console.log(name)
  }

  function changeSurName(newSurName) {
    surName = newSurName;
    console.log(surName)
  }

  this.tChangeName = function (newName) {
    changeName(newName)
  };

  this.tChangeSurName = function (newSurName) {
    changeSurName(newSurName)
  }

}

let human = new Closure();

human.tChangeName('Max');

human.tChangeSurName('Kholodok');