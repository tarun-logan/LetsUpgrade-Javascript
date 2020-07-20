
class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }

    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    addCoins(user,coins){
        user.luCoins+=coins;
        console.log(`${user.name} has ${user.luCoins} coins`);
        return user;
    }

    removeCoins(user,coins){
        user.luCoins-=coins;
        console.log(`${user.name} has ${user.luCoins} coins`);
        return user;
    }

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }

   deleteCourse(user){
        console.log(`removed course ${user.courses.pop()} from object ${user.name}`);
    }
}



