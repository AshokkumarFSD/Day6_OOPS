

class Movie{
    constructor(title,studio,rating="PG")
    {
        this.movieTitle = title;
        this.movieStudio = studio;
        this.movieRating = rating;
    }

    getRating(){
     return this.movieRating;   
    }
}

let movie1 = new Movie("Lion King","Disney","G");
let movie2 = new Movie("Toy Story","Disney","G");
let movie3 = new Movie("Bheema","Tirupathi brothers");
let movie4 = new Movie("Game Of Throne","HBO","NC-17");
let movie5 = new Movie("Puthupettai","Wonderbar","Nc-17");
let movie6 = new Movie("Thunivu","Bayview");

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
function getPG(moviesArray){
    let PGMovies = [];
    for(let i=0;i<moviesArray.length;i++)
    {
        let getMovie = moviesArray[i];
        if(getMovie.getRating() === "PG")
        {
           PGMovies.push(getMovie);
        }
    }
    return PGMovies;
}

let movies = [movie1,movie2,movie3,movie4,movie5,movie6];
let onlyPgMovies = getPG(movies);
console.log("PG rated movies: ",onlyPgMovies);

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
let movieCasino = new Movie(
 "Casino Royale","Eon Productions","PG13"  
)

console.log(movieCasino);



class Circle{

    constructor(radius=1.0,color="red")
    {
        this.radius = radius;
        this.color= color;
    }

    getRadius()
    {
        return this.radius;
    }

    setRadius(radius)
    {
        this.radius = radius;
    }

    getcolor()
    {
        return this.color;
    }

    setColor(color)
    {
        this.color = color;
    }

    toString()
    {
        return this;
    }
    getArea() {
        return (3.1415 * this.radius * this.radius);
    }
    getCircumference(){
        return (2* 3.1415 * this.radius);
    }
}

let circle1 = new Circle();
let circle2 = new Circle(2.35);
let circle3 = new Circle(5.50,"Green");
console.log("Radius :", circle2.getRadius());
circle2.setRadius(5.50);
console.log("After set radius to 5:",circle2.getRadius());
console.log("Color:", circle3.getcolor());
circle3.setColor("Yellow");
console.log("After color set to yellow",circle3.getcolor());
console.log("Circle Object:", circle1.toString());

let getArea = circle2.getArea();
let getCircum = circle2.getCircumference(); 

console.log("Area : ",getArea.toFixed(4));
console.log("Circumference: ",getCircum.toFixed(4));



class Person {
    constructor(firstName, lastName, dateOfBirth, gender, occupation, email, address, phoneNumber) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dateOfBirth = dateOfBirth;
      this.gender = gender;
      this.occupation = occupation;
      this.email = email;
      this.address = address;
      this.phoneNumber = phoneNumber;
    }
  
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    displayGender() {
      return this.gender;
    }

    displayEmail() {
      return this.email;
    }
  
    displayAddress() {
      return this.address;
    }
  
    displayPhoneNumber() {
      return this.phoneNumber;
    }
  }

const person1 = new Person('Ashokkumar', 'Paramasivam', '1996-05-15', 'male', 'software engineer', 'ashokcse@gmail.com', '11/6, ARM street, Vellore, Tamil Nadu', '9597546223');
console.log(person1.fullName()); 
console.log(person1.displayGender()); 
console.log(person1.displayEmail());
console.log(person1.displayAddress()); 
console.log(person1.displayPhoneNumber());
  

class Uber {
    constructor(baseFarePerKm, timeRatePerMinute, distanceRatePerKm) {
      this.baseFarePerKm = baseFarePerKm;
      this.timeRatePerMinute = timeRatePerMinute;
      this.distanceRatePerKm = distanceRatePerKm;
      this.distanceInKm = 0;
      this.timeInMinutes = 0;
    }

    calculatePrice( hasDiscount,discountPercentage) {
        let totalPrice = this.baseFarePerKm + (this.distanceInKm * this.distanceRatePerKm) + (this.timeInMinutes * this.timeRatePerMinute);
        if (hasDiscount) {
          const discountAmount = totalPrice * (discountPercentage / 100);
          totalPrice -= discountAmount;
        }
        return totalPrice;
    }

    setEstimatedMinutes(timeInMinutes)
    {
        this.timeInMinutes = timeInMinutes;
    }

    setDistanceInKm(distanceInKm)
    {
        this.distanceInKm = distanceInKm;
    }
}  


let uberTaxi = new Uber(100, 5, 15, 5);
uberTaxi.setEstimatedMinutes(20);
uberTaxi.setDistanceInKm(8);
let travelOnePrice = uberTaxi.calculatePrice(false,0);
console.log("Price for travel : ",travelOnePrice);

let travelTwoPrice = uberTaxi.calculatePrice(true,10);
console.log("Price for travel 2 with discount 10% : ",travelTwoPrice);