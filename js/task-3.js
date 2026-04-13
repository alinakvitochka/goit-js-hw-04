const profile = {
    username: "Jacob",
    playTime: 300,

    changeUsername: function (newName) {
      this.username = newName
    },

    getInfo: function () {
      return `${this.username} has ${this.playTime} active hours!`
    },

    updatePlayTime: function (hours) {
      this.playTime += hours
    },
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"